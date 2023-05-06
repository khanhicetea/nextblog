---
layout: post
title: "[MarTech] Google Analytics 4 - How to Improve Delayed Collecting Data After Trigger"
date: 2022-05-01T10:30:00+07:00
tags: ["martech", "google-analytics", "ga4", "analytics", "gtm"]
cover: "/static/images/2022/05/ga4.jpg"
---

## Problem

After release GA4 (Google Analytics 4 or old named Google Analytics App + Web), the gtag web js client has some changes in timing about sending collecting data. Somehow, you will see it delayed the collecting request to GA server about 5 seconds after you trigger events.

The main reason is it queues all event in the window of 5000ms (5 seconds) then send them in 1 batch request to server. This behavior can reduce requests into the servers (reduce server load, round-trip connections and saving time to bootstrap the backend code)

## What if the user close website before js client sends batch request ?

Looks like the js client has a backup way to flush the batch request before closing the website. It uses some browser events like ('focus', 'blur', 'pageshow', 'pagehide', 'visibilitychange' and 'beforeunload' event) and [**sendBeacon**](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) to achieve the backup plan :D

So it looks good, right ?

**Yes ! Almost perfect !**

## What if I want to reduce the delayed timer or just send the request immediately ?

Yes, you can !! There are 1 way to do it. And, you have to proxy and patch the gtag source code in your backend.

**REVERSE THE CODE**

I reversed gtag source code then find out that 5 seconds equals 5000ms, and because it is minifying js, then I searched string `5E3`

And this is it

![Gtag Code](/static/images/2022/05/gtag-5e3-code.png)

It calls `setTimeout` and function that **flush** all events after **h = 5E3** ms

So what we need to replace is change the `h` variable to what duration we want

**BACKEND SOLUTION**

In this case, I use regex to replace (below example to change 5000ms to 250ms, a good number to wait few batch requests and sending them soon)

```php
$gtag_url = 'https://www.googletagmanager.com/gtag/js?id=YOUR-ID';
$raw = file_get_contents($gtag_url);
$raw = preg_replace('/:(\w+)=5E3;this/', ':$1=5E3;$1=250;this', $raw, 1);
```

You can do it in your programming language :D

**SERVERLESS SOLUTION**

I use [CloudFlare Worker](https://developers.cloudflare.com/workers/) (JS)

Demo my blog GA4 worker (&delay query params = 300ms) : https://ga-gtag-change-delay.khanhicetea.workers.dev/gtag/js?id=G-DEXLWK9G9D&delay=300

```js
async function handleRequest(event) {
  let url = new URL(event.request.url)
  const { searchParams } = new URL(url)
  // Get Delay number from query params, default = 250ms
  const delay = searchParams.get('delay', 250)

  url.hostname = 'www.googletagmanager.com'

  let request = new Request(url, event.request)
  let response = await fetch(request, {
    cf: {
      cacheTtl: 3600, // Cache on edge 1 hour
      cacheEverything: true,
    },
  });
  const body = await response.text()
  const new_raw = body.replace(/:(\w+)=5E3;this/,':$1=5E3;$1='+delay+';this')

  response = new Response(new_raw, response)
  response.headers.set('Cache-Control', 'max-age=86400') // Cache on Browser 1 day

  return response
}

addEventListener('fetch', (event) => {
  return event.respondWith(handleRequest(event))
})
```

The reason I used RegEx, because the `h` variable can be changed name after Google server minify it in next time.

ENJOY !