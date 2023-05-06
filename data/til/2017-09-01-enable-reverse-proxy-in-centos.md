---
date: "2017-09-01T00:00:01"
title: "#TIL : Enable reverse proxy in CentOS"
description: "I learned on 2017-09-01 about proxy, sysadmin, web"
tags: ["proxy", "sysadmin", "web"]
layout: post
---


CentOS with SELinux enabled by default will block any http proxy connection. So you have to enable this permission.

Temporary enable

```bash
$ /usr/sbin/setsebool httpd_can_network_connect 1
```

Permanent enable

```bash
$ /usr/sbin/setsebool -P httpd_can_network_connect 1
```
