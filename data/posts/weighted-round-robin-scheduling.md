---
layout: post
title: "Weighted Round Robin : Scheduling Algorithm"
date: 2022-06-05T10:30:00+07:00
tags: ["algorithm", "round-robin", "php", "load-balance"]
---

## Round-Robin

Round-Robin is a simple way to schedule or to split the workload to multiple workers (or receivers). In fact, it uses modulo operation of counter task number and number of workers to find out which worker is chosen.

So if you have 3 workers like A B C (which translates to 0-index to Worker A[0], Worker B[1], Worker C[2])

And the task is numbered by 1,2,3,4,5,6,7,8,9

So task number 5 will be processed by (5 mod 3 = 2) - Worker C

So Round-Robin is in context every worker has the same resource, enery and productivity (take same time to process same task)

## Weighted-Round-Robin

What if Worker B has double resource or double productivity (take 1/2 time to process the task worker A, C do)

So to get the system run most effective, we assign Worker B has double opportunity to receive a new task. So let say we have weight metric in Workers

Worker A : 1 weight
Worker B : 2 weights
Worker C : 1 weight

Then the task is numbered by 1,2,3,4,5,6,7,8,9 would be taken by

1(A), 2(B), 3(B), 4(C), 5(A), 6(B), 7(B), 8(C), 9(A), ...

Take a closer look, we can separate to this

1(A), 2(B), 3(B), 4(C)
5(A), 6(B), 7(B), 8(C)
9(A), ...

So we can reuse (X) = modulo of number of task and total of weights (= 4), then create a segment

X = 0 => Worker A
X between (1,2) => Worker B
X = 3 => Worker C

=> Round-Robin = Weighted-Round-Robin has same weight in all workers

## PHP implementation

```php
<?php

class WeightedRoundRobin
{
    private $weightedRoutes = [];
    private $maxWeight = 0;
    private $counter = 0;

    public function __construct($routes = null, $lamda = null)
    {
        if ($routes && $lamda) {
            $this->addRoutesUsingWeightedLambda($routes, $lamda);
        }
    }

    public function addRoute($route, $weight = 1)
    {
        $this->weightedRoutes[] = [
            'weight' => $this->maxWeight + $weight,
            'route' => $route,
        ];

        $this->maxWeight = $this->maxWeight + $weight;
    }

    public function addRoutesUsingWeightedLambda($routes, $lamda)
    {
        foreach ($routes as $route) {
            $this->addRoute($route, $lamda($route));
        }
    }

    public function getRoute($seed = null)
    {
        $mod = ($seed ?: $this->counter) % $this->maxWeight;
        $this->counter++;

        foreach ($this->weightedRoutes as $wr) {
            if ($wr['weight'] > $mod) {
                return $wr['route'];
            }
        }
        return null;
    }

    public function getMaxWeight()
    {
        return $this->maxWeight;
    }

    public function getCounter()
    {
        return $this->counter;
    }
}
```

**Examples**

```php
$workers = [
    ['name' => 'Worker A', 'w' => 1],
    ['name' => 'Worker B', 'w' => 2],
    ['name' => 'Worker C', 'w' => 1],
];

$WRR = new WeightedRoundRobin($workers, fn($worker) => $worker['w']);

for ($i = 1; $i < 30; $i++) {
    $worker = $WRR->getRoute($i);
    echo sprintf("\n- Task %d is processed by %s", $i, $worker['name']);
}
```

ENJOY ! ;)
