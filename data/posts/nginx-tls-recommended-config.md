---
layout: post
title: "My Nginx TLS recommended config"
description: "Balanced config between Compatibility - Speed - Security"
date: 2021-07-18T16:06:00+07:00
tags: ["web", "nginx", "tls"]
---

In previous article, you can understand about [benefits of Reverse Proxy Server](/posts/why-we-need-reverse-proxy-server/). One common case is using it as TLS termination server. Today I show you my recommended config about TLS setup

Below is my config (with explained comments why I use it), which I chosen to balance between **Compatibility - Speed - Security**

```nginx
### TLS Protocol : use TLSv1.2+ more secure (support some old devices from
### Android 4.4 - good enough), if you want to support more old devices
### just add "TLSv1 TLSv1.1"

ssl_protocols TLSv1.3 TLSv1.2;

### TLS session : it's about TLS session resumption
### (session is tls connection already handshake)

ssl_session_timeout 60m;
ssl_session_cache shared:SSL:30m;

### Diffie-Hellman (DH) key-exchange => More secure (should use with
### above TLS session resumption). Before run this command to generate 
### dhparam file : openssl dhparam -out /etc/nginx/tls/dhparam.pem 2048

ssl_dhparam /etc/nginx/tls/dhparam.pem;

### TLS Cipher : include common ciphers and disable ssl_prefer_server_ciphers
###  (which allow old clients choose prefered cipher)

ssl_prefer_server_ciphers off;
ssl_ciphers TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS_AES_256_GCM_SHA384:TLS-AES-256-GCM-SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS-CHACHA20-POLY1305-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA;

### TLS 1.3 0-RTT : less latency with 0-Round-Trip

ssl_early_data on;

### TLS stapling is system which clients will try to re-check about
### certificate validation. Enable stapling in server which is better,
### so clients don't need to check it

ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 8.8.4.4;

### Add HTTP Strict Transport Security , which means once browser
### connected to server, it remembers to always connect to TLS
### directly on later (decrease HTTP to HTTPS redirect)

add_header Strict-Transport-Security "max-age=31536000";
```
