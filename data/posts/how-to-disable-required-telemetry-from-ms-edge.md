---
layout: post
title: "Tech Tips : Disable required Telemetry from Microsoft Edge"
description: "Keep privacy and boost browsing experience"
date: 2021-12-01T22:00:00+07:00
tags: ["tech-tip", "browser", "microsoft", "tech", "tips"]
---


## Problem

The new MS Edge is good, it's based on Chromium and many fancy built-in features. Of course, there is 2 sides of a coin (Convenience and Privacy) and you have to choose one!

One big issue of MS Edge is its New Tab page (heavy, news and messy things). And if you notice each time you browsing new website from the New Tab page, it sends some telemetry data to MSN services (belonged to Microsoft). And even worse, you have to wait telemetry request to be finished before it switchs to the desired website.

Below is a photo about it

![microsoft edge new tab page telemetry](/static/images/2021/12/ms-edge-telemetry.jpg)

## Solution

**Method 1** : install an Chrome extension (remember to allow install extension from other store), the extension called [Blank New Tab Page](https://chrome.google.com/webstore/detail/blank-new-tab-page/jonikckfpolfcdcgdficelkfffkloemh) by Nick Vogt. It overrides the default New Tab page to a blank page (or you can choose a familiar extenstion)

**Method 2** : block telemetry request by disabling all requests to MS Edge telemetry domains, by adding below lines to your **hosts** file

- In Windows : C:\Windows\System32\Drivers\etc\hosts
- In Linux or MacOS : /etc/hosts

```text
# Edge
0.0.0.0 pipe.aria.microsoft.com
0.0.0.0 assets.msn.com
0.0.0.0 web.vortex.data.microsoft.com
0.0.0.0 browser.events.data.msn.com
0.0.0.0 www.msn.com
0.0.0.0 sb.scorecardresearch.com
```

Don't know how to update hosts file ? [Read here](https://docs.rackspace.com/support/how-to/modify-your-hosts-file)

ENJOY ! ;)
