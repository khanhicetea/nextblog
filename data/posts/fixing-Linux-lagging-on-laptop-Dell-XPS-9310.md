---
layout: post
title: "Tech Tips : Fixing Linux lagging on Laptop Dell XPS 9310"
description: "Holy sh!t, if only i had known sooner ..."
date: 2021-12-01T22:00:00+07:00
tags: ["tech-tip", "linux", "dell", "xps", "lagging"]
---


## Problem

Early 2021, I bought a new laptop [DELL XPS 9310 Developer edition](https://www.dell.com/en-us/work/shop/dell-laptops-and-notebooks/new-xps-13-developer-edition/spd/xps-13-9310-laptop/ctox139w10p2c3000u) ( means Linux is the main Operating System).

I mentioned once more "Linux is the main Operating System", but when I re-install new Linux OS (PopOS! 20.04). It's so laggy and so bad : graphic is freeze, bad wireless connection (wifi + bluetooth) and battery life is short (4-5 hours). So disappointed !

And I promise to myself : "Never buy any Linux laptops, even DELL or Lenovo has specified model for Linux" !

## Solution

I searched on the internet why I have this issues, and find out that because new OS using recent kernel (5.13) and it's not the OEM kernel made by DELL. So I just install the OEM kernel and change it to default running kernel.

```bash
$ sudo apt install linux-oem-20.04b
```

More infomation about OEM kernel : https://wiki.ubuntu.com/Kernel/OEMKernel

Then change default kernel to 5.10 version. (depends on what OS you running)

ENJOY ! ;)