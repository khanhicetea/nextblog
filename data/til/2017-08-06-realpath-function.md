---
date: "2017-08-06T00:00:01"
title: "#TIL : realpath function"
description: "I learned on 2017-08-06 about mistake, php"
tags: ["mistake", "php"]
layout: post
---


If you pass a non-exists path to function `realpath`, it returns empty string. So please don't do something like :

```php
function storage_path($folder) {
	return realpath(__DIR__.'/storage/'.$folder);
}
```

if you expect it return full path of new folder !
