---
layout: post
title: "Probability in migration new services to prevent traffic flood"
date: 2021-05-29T11:48:53+07:00
tags: ["probability", "migration", "devops"]
---

## Problem

I have a [imgproxy](https://github.com/imgproxy/imgproxy) server instance to resize cloud image on-demand using signed url then saving response cache to disk.

To the day I want to move to another domain point to another server instance, then I remember the last time I changed immediately to new domain, my websites lost many images because it needs to resize all the images in a short period of time (my server is crash).

So this time, I need another strategy :)

## Probability

### First try : random (looks okay)

```php
$is_new = rand(1, 4) == 1;
$domain = $is_new ? 'new_domain' : 'old_domain';
```

This strategy looks okay but it has loophole when you have high traffic websites.

### Second try : hash > hex2dec > division

```php
$is_new = (intval((hexdec(substr(md5($url),0,9)))) % 4) == (intval(date('H')) % 4);
$domain = $is_new ? 'new_domain' : 'old_domain';
```

This strategy split resize-needed image pool into 4 segments based on hash value. Then I match 4 these segments to 4 segments of time (current hour % 4).

## Conclusion

Hashing provides a "stable" random variable in short period of time :)

I just wait 4-6 hours then switch to new domain 100% because the cached responses is ready :D
