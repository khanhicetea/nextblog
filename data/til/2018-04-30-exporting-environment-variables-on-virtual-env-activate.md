---
date: "2018-04-30T00:00:01"
title: "#TIL : Exporting environment variables on virtual env activate"
description: "I learned on 2018-04-30 about python"
tags: ["python"]
layout: post
---


You can put common environment variables to the file `venv/bin/activate`. So everytime we active the virtual env, everything is on the way

```bash
# venv/bin/active content

# export your env vars here
export FLASK_APP=hello
export FLASK_ENV=development
export DATABASE=hello.sqlite3
export SECRET_KEY=secret_key_here
```