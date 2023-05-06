---
date: "2017-04-21T00:00:01"
title: "#TIL : Base 64 encode and decode builtin tool"
description: "I learned on 2017-04-21 about encoding, tools, web"
tags: ["encoding", "tools", "web"]
layout: post
---


Browsers have helpers function to encode and decode base64 :

- `btoa` : base64 encode
- `atob` : base64 decode

```
> btoa('Hello world')
"SGVsbG8gV29ybGQgIQ=="

> atob('SW4gR29kIFdlIFRydXN0ICE=')
"In God We Trust !"
```
