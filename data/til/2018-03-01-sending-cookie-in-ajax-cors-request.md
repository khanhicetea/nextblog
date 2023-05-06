---
date: "2018-03-01T00:00:01"
title: "#TIL : Sending Cookie in AJAX CORs request"
description: "I learned on 2018-03-01 about browser, http, web"
tags: ["browser", "http", "web"]
layout: post
---


By default, browser will remove the cookie and authorization header from AJAX CORs request. So
before sending out the request, make sure `withCredentials` must be true.

In this case, CORs response must specify which origin is allowed (mean
no wildcard allowed origin rule).
