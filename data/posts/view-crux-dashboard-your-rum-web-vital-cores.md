---
layout: post
title: "View CrUX Dashboard - Your site web core vitals - Realtime User Measurement"
date: 2023-03-17T22:45:00+07:00
tags: ["web", "performance", "data"]
---

View your RUM (Realtime User Measurement) web core vitals is a good way to ensure your visitors have a good experiences.

The RUM data is collected by Google or another 3rd big tech company (I haven't deep dive but they collect anonymous data). Google show it publicly in Looker Studio (which query directly from their Big Query databases), so you can view it free.

To visit the dashboard about your DOMAIN, try to replace your domain in origin params this URL

https://lookerstudio.google.com/u/0/reporting/bbc5698d-57bb-4969-9e07-68810b9fa348/page/keDQB?params={"origin":"https://yourdomain.com"}

**Or I made a tiny JS tool that encode the url params for you**

https://output.jsbin.com/qizivinuxo

This below screenshot is a big news site in Vietnam

![vnexpress.net web core vitals rum](/static/images/2023/03/rum-vnexpress.png)

Til next time !