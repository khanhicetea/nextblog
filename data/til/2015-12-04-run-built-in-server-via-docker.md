---
date: "2015-12-04T00:00:01"
title: "#TIL : Run built-in server via Docker"
description: "I learned on 2015-12-04 about cli-server, docker, php"
tags: ["cli-server", "docker", "php"]
layout: post
---


Docker is the fast and clean way to run Linux programs.

We can run a PHP project via PHP built-in server and Docker.

```bash
docker run -it -p 8080:8080 -v `pwd`:/code php:7 php -S 0.0.0.0:8080 -t /code/web /code/web/server.php
```

With `server.php` content is

```php
<?php

$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;

}

// Run application below
$app = new Application();
$app->run();
```
