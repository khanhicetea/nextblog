---
date: "2017-05-22T00:00:01"
title: "#TIL : zcat : decompressing pipe tool"
description: "I learned on 2017-05-22 about bash, compressing, sysadmin, tool"
tags: ["bash", "compressing", "sysadmin", "tool"]
layout: post
---


`zcat` is a tool that creates a pipe from gz file. It makes command cleaner and faster (maybe). You don't have to decompress gz file before using next tool.

**Examples :**

*Finding string in gzip text file*

```bash
$ zcat secret.gz | grep '42'
```

*Importing SQL backup file*

```bash
$ mysqldump -u root -p db_name1 | gzip > db_name.sql.gz
$ zcat db_name.sql.gz | mysql -u root -p db_name_2
```
