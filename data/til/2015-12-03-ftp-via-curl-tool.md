---
date: "2015-12-03T00:00:01"
title: "#TIL : FTP via curl tool"
description: "I learned on 2015-12-03 about curl, ftp, sysadmin"
tags: ["curl", "ftp", "sysadmin"]
layout: post
---


Can upload an file via FTP by curl tool with handy script :

```bash
curl -T file_need_to_upload ftp://hostname --user user:passwd
```
