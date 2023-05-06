---
layout: post
title: "Europe Cloud VPS Benchmark"
date: 2021-06-15T14:06:00+07:00
tags: ["vps", "benchmark"]
draft: true
---

## Benchmark Script

Europe VPS Bench, I used this script

```bash
$ curl -s wget.racing/nench.sh | bash
```

## Hetzner : Dedicated CPU 2vCPS - 8G - 80GB NVMe SSD (19.90€ /mo)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-06-15 15:25:52 UTC
-------------------------------------------------

Processor:    AMD EPYC Processor
CPU cores:    2
Frequency:    2445.406 MHz
RAM:          7.6Gi
Swap:         -
Kernel:       Linux 5.4.0-72-generic x86_64

Disks:
sda   76.3G  HDD

CPU: SHA256-hashing 500 MB
    3.170 seconds
CPU: bzip2-compressing 500 MB
    5.780 seconds
CPU: AES-encrypting 500 MB
    0.994 seconds

ioping: seek rate
    min/avg/max/mdev = 79.2 us / 216.6 us / 11.8 ms / 139.7 us
ioping: sequential read speed
    generated 10.2 k requests in 5.00 s, 2.48 GiB, 2.03 k iops, 508.6 MiB/s

dd: sequential write speed
    1st run:    894.55 MiB/s
    2nd run:    907.90 MiB/s
    3rd run:    899.31 MiB/s
    average:    900.59 MiB/s

IPv4 speedtests
    your IPv4:    135.181.144.xxxx

    Cachefly CDN:         342.47 MiB/s
    Leaseweb (NL):        79.14 MiB/s
    Softlayer DAL (US):   9.76 MiB/s
    Online.net (FR):      48.39 MiB/s
    OVH BHS (CA):         16.43 MiB/s

IPv6 speedtests
    your IPv6:    2a01:4f9:c011:xxxx

    Leaseweb (NL):        62.45 MiB/s
    Softlayer DAL (US):   11.81 MiB/s
    Online.net (FR):      62.41 MiB/s
    OVH BHS (CA):         19.16 MiB/s
-------------------------------------------------
```

## 
## Conclusion

- Performance : 
- Disk Read : 
- Disk Write : 
- Network :
- Price : 
