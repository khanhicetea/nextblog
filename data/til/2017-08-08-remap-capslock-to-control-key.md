---
date: "2017-08-08T00:00:01"
title: "#TIL : Remap Capslock to Control key"
description: "I learned on 2017-08-08 about keyboard, linux"
tags: ["keyboard", "linux"]
layout: post
---


Edit file `/etc/default/keyboard` and set 

```
XKBOPTIONS="ctrl:nocaps"
```

Then, logout and log in again to impact
