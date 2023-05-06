---
date: "2019-11-23T00:00:01"
title: "#TIL : JSON Parse is faster than Javascript Object declaration"
description: "I learned on 2019-11-23 about javascript, json, performance, web"
tags: ["javascript", "json", "performance", "web"]
layout: post
---


**TLDR;**

Use `JSON.parse("[your data in json string]")` if your data is big (>10KB for instance)

**Short Explaination :**

`JSON.parse` parses a string to object, so it has many strict requirements than Javascript parses the source code (more syntax, more context)

**Long Explaination :**

https://www.youtube.com/watch?v=ff4fgQxPaO0

{% youtube ff4fgQxPaO0 %}
