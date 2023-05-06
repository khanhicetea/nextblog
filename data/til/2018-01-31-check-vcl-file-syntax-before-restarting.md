---
date: "2018-01-31T00:00:01"
title: "#TIL : Check vcl file syntax before restarting"
description: "I learned on 2018-01-31 about varnish"
tags: ["varnish"]
layout: post
---


Like NginX, Varnish has a syntax checker function that helps us test the syntactic correctness.

```bash
$ varnishd -C -f [vcl file path]
```

Varnish will compile the file and output the result to stdout. If something goes wrong, it will throw a message like

```
> Message from VCC-compiler:
> Expected an action, 'if', '{' or '}'
> ('input' Line 74 Pos 6)
>     vcl_hash(req.http.Cookie);
> -----########------------------
>
> Running VCC-compiler failed, exit 1
```