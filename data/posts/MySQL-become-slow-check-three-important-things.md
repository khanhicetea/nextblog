---
layout: post
title: "Three most important things make impact to MySQL performance"
date: 2021-09-03T23:46:00+07:00
tags: ["mysql", "database", "performance"]
cover: "/static/images/2021/09/top-3-things-affected-mysql-performance.png"
---

**There are 3 important things affected to MySQL performance**

### BUFFERS

Buffers is temporary where data lives in memory. Because memory speed > disk speed ⇒ keep data fit in memory is best way to keep good performance.

So, before thinking about scale horizontally by clustering or sharding, just throw your money to upgrade your server specs. Keep it simple and live in only server with large memory.

### INDEXES

Index could make your query faster, and ... slower. Really, no silver bullets in tech, monitoring your slow query and find out why it was slowww.

Even turn off query optimizer in specific query which full scan table is faster than range index scan.

### JOINs

JOIN makes SQL databases good, popular, easier for users (developer, data analysis, BI, ...). But, things alway have downside, "easier" makes users free from making it right and making it fast (they just focus to make it work).

Btw, if your query join tables within <100,000 rows, then don't worry, be happy 😎

-------------

Good luck! ;)

Ref :

- Content inspired by [this post from Percona](https://www.percona.com/blog/2006/06/09/why-mysql-could-be-slow-with-large-tables/)
- Photo by [sylvie charron](https://unsplash.com/@syl_charron66)
- Flash Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons)