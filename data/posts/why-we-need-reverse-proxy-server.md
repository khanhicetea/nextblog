---
layout: post
title: "Why do we need Reverse Proxy Server"
date: 2021-06-28T14:06:00+07:00
tags: ["web", "nginx", "performance"]
---

## What is Reverse Proxy Server ?

Simply, it is middle man between Client (Browser) and Web Application Server (App Server)

## Why put it in middle, is it abundant ?

You will ask, why let the Clients talk directly to App Server, communication without middleman is better (low latency, no miss-infomation and straight-forward,...).
SO WHY ?

Theses are few reasons, Reverse Proxy Server :

1. Handle TLS (you know, most of your favorite language sucks in handling encryption, or it has to use shared lib from C). So App Server code is just handle normal HTTP
2. Handle Load Balancing with health checking and good load balancing algorithm (or you can handle by using DNS round-robbin with weird cache system and cache at ISP, oh forget it haha)
3. Handle connection and delivery and free your App Server, let say if you enable **proxy_bufferring**, when App Server return response, Reserver Proxy store it in buffer then free connection to App Server, then do delivery stage with the Client. Your App Server has been free to handle next connection without waiting Client receive full response then close.
4. Proxy cache (with / without lock)

Any many many more ...
