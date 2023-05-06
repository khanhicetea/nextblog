---
layout: post
title: "JSON Key Ordering is a mess"
description: "Don't rely on JSON Key Ordering in your application"
date: 2021-11-23T21:00:00+07:00
tags: ["json", "backend", "problem"]
---

## TLDR;

STAY AWAY FROM IT ! USE LIST IN JSON IF YOU WANT ORDERING

JSON Key Ordering is a mess in 4 important steps : processing - encoding - storing - decoding. So it's hard to maintain the order of keys during mentioned every steps (Platform-dependent).

## EXPLAIN

Imagine you have a data about exam like this

| Person   |      Score      |
|----------|:-------------:|
| John |  10 |
| Alex |    8   |
| Jimmy | 9 |

But you want to keep the ordering of people by their submitted time. So you have a dictionary (array) variable like this

```php
$examScores = [
    'John' => 10,
    'Alex' => 8,
    'Jimmy' => 9,
];
```

Let try to **ITERATE** over it

```php
foreach ($examScores as $name => $score) {
    echo sprintf("\n\t- %s : %d", $name, $score);
}

// We get what we want :D
/*
	- John : 10
	- Alex : 8
	- Jimmy : 9
*/
```

Ok, now we try to **ENCODE** it to string

```php
echo json_encode($examScores);

// We get what we want
/*
{"John":10,"Alex":8,"Jimmy":9}
*/
```

Now, like every application, we **STORE** in Database which have 2 posible cases :

- Store data in **TEXT type** field => You have to **encode** data before storing, so if your programming language **decoding** works fine, you're fine !
- Store data in **JSON type** field => You also have to **encode** data before storing, but it depends on Database Server behavior it can sort your keys by A-Z for performance (like MySQL 5.7, 8+)

So, storing data to JSON field in MySQL (5.7 or 8+), you will get

```js
{"Alex": 8, "John": 10, "Jimmy": 9}
```

## MAKE IT RIGHT !

Even it runs good today, make it right for tommorow !

Make data consistent and independent from database server or programming language. Change it to more semantic and ordered struture like this

```php
$examScores = [
    [
        'name' => 'John',
        'score' => 10,
    ],
    [
        'name' => 'Alex',
        'score' => 8,
    ],
    [
        'name' => 'Jimmy',
        'score' => 9,
    ],
];
```

All demo code (PHP) is [here](http://sandbox.onlinephpfunctions.com/code/9c5b3845930d873ead22c6516e56b0b5a3ca063c)
