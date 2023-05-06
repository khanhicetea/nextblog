---
date: "2017-09-05T00:00:01"
title: "#TIL : Ansible playbook : skip to task"
description: "I learned on 2017-09-05 about ansible, sysadmin"
tags: ["ansible", "sysadmin"]
layout: post
---


You can skip to a task by its name by adding parameter `--start-at`

```bash
$ ansible-playbook playbook.yml --start-at="[your task name]"
```
