---
date: "2017-09-27T00:00:01"
title: "#TIL : Send ENTER key to kernel"
description: "I learned on 2017-09-27 about keyboard, linux"
tags: ["keyboard", "linux"]
layout: post
---


When you try to send an Enter keyboard to linux kernel, it looks like nothing happens.

This is because you only send a key press (KEY DOWN) but don't send an key release (KEY UP) event after that.
