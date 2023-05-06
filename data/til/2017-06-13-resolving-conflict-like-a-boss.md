---
date: "2017-06-13T00:00:01"
title: "#TIL : Resolving conflict like a boss"
description: "I learned on 2017-06-13 about dev, git, sysadmin"
tags: ["dev", "git", "sysadmin"]
layout: post
---


When using git merge new branch to old branch, you just want use all `ours` or `theirs` version but be lazy to update every conflicted file.

```bash
grep -lr '<<<<<<<' . | xargs git checkout --ours
```

Or

```bash
grep -lr '<<<<<<<' . | xargs git checkout --theirs
```

Explain : these commands will find any file contains `<<<<<<<` string (conflicted file) and run `git checkout --[side]`
