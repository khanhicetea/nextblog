---
date: "2015-12-04T00:00:01"
title: "#TIL : Reference assign object variable"
description: "I learned on 2015-12-04 about clone, python, ref-var"
tags: ["clone", "python", "ref-var"]
layout: post
---


When you have a object `x` and assign `y = x`, `y` will be a ref of `x` (it looks like pointer of C). So changing property of `y` means changing property of `x`.

Ex :

```python
x = {"a": 1, "b": 2}
y = x
y['a'] = 100
print x['a'] # Result is 100
```

So if you want clone the value, use `copy` lib :

```python
import copy
x = {"a": 1, "b": 2}
y = copy.deepcopy(x)
y['a'] = 100
print x['a'] # Result is 1
```
