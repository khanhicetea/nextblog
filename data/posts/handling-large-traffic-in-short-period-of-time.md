---
layout: post
title: "Handling Large Traffic In Short Period Of Time"
date: 2021-06-05T10:48:53+07:00
tags: ["latency", "scaling", "devops", "serverless", "cloud computing"]
cover: "/static/images/2021/06/spike-traffic-graph.png"
---

## Problem

In the previous post about [Probability in migration new services to prevent traffic flood](/posts/probability-in-migration-new-services-to-prevent-traffic-flood/) , I try to apply Probability to solve problem.

This post explains more about how I handle large-n-heavy traffics in short period of time. Btw, I called it's heavy because it needs cpu and memory resize image on cloud (download original image => load to memory => transform format => resize).

So if I spin 2, or 4, or even 10 servers to handle this workload, these are some cons:

- Devops Costs : you have to know to manage large of VMs and put it behind Load Balancer
- Timing Costs : manual scaling take time (certainly)
- Resource Costs : you have to pay for idle time
- Complexity Costs : your system will be a mess

## Solution

All challenges your met mainly because you have to have many servers, so solution is

> SERVERLESS

Yah right, serverless is born to solve above these problems. Basicly, you only have to build 1 node template and give everything else to the Cloud Platforms.

To be more specific, I use CloudRun - a service of Google Cloud Platforms (which built on KNative I guess).

Some side effects of CloudRun :

- Un-predictable costs if you have DDOS => I setting maximum containers and GCP Billing Alert
- Traffic costs from GCP is expensive => I proxied it through Cloudflare and cache on CF Edge - hit rate is 95%. But CF has weird routing system (which I will write later in another article), so I plan to selfhost NginX Reverve Proxy And Cache server on DigitalOcean or Vultr (this server only need good networking and disk speed)
- Cold start (called waiting latency) is not small - acceptable  => Try to keep at least 2 containers alive (use free web cron to fetch healthcheck endpoint). Why is 2 ? (Because two is better than one, haha I will write about this in Computer Science)

**Figure 1** : Infrastructure design
{% mermaid %}
graph TD
    A[Client 1] --> X[Cloudflare or Cache Load Balancer]
    Y[Client 2] --> X
    Z[Client n] --> X
    X --> B[GCP Cloud Run]
    B --> C[Container 1]
    B --> D[Container 2]
    B --> E[Container ...]
    B --> F[Container n]
{% endmermaid %}

## Conclusion

SERVERLESS is good, like everything else is useful in moderation ! :D
