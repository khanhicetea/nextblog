---
layout: post
title: "Vietnamese Cloud VPS Benchmark"
date: 2021-06-14T14:06:00+07:00
tags: ["vps", "benchmark"]
---

## Benchmark Script

Next to Singapore VPS Bench, I used this script

```bash
$ curl -s wget.racing/nench.sh | bash
```

## CMC Cloud : 1vCPU - 2G - 20GB SSD - 500Mbps (462,000 VND / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-06-14 07:44:55 UTC
-------------------------------------------------

Processor:    Intel(R) Xeon(R) Gold 5120 CPU @ 2.20GHz
CPU cores:    1
Frequency:    2194.824 MHz
RAM:          1.9G
Swap:         1.9G
Kernel:       Linux 4.15.0-135-generic x86_64

Disks:
loop1   99.2M  HDD
loop2     99M  HDD
vda     20G  HDD

CPU: SHA256-hashing 500 MB
    4.393 seconds
CPU: bzip2-compressing 500 MB
    7.050 seconds
CPU: AES-encrypting 500 MB
    1.531 seconds

ioping: seek rate
    min/avg/max/mdev = 58.2 us / 179.4 us / 50.0 ms / 1.80 ms
ioping: sequential read speed
    generated 14.5 k requests in 5.00 s, 3.53 GiB, 2.89 k iops, 723.2 MiB/s

dd: sequential write speed
    1st run:    254.63 MiB/s
    2nd run:    267.98 MiB/s
    3rd run:    238.42 MiB/s
    average:    253.68 MiB/s

IPv4 speedtests
    your IPv4:    203.205.21.xxxx

    Cachefly CDN:         1.12 MiB/s
    Leaseweb (NL):        0.95 MiB/s
    Softlayer DAL (US):   0.92 MiB/s
    Online.net (FR):      0.87 MiB/s
    OVH BHS (CA):         0.80 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## Bizfly Cloud : 2vCPUS - 2G - 40GB SSD - 100Mbps (781,040 VND / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-06-14 07:27:51 UTC
-------------------------------------------------

Processor:    Intel(R) Xeon(R) Silver 4214 CPU @ 2.20GHz
CPU cores:    2
Frequency:    2200.004 MHz
RAM:          1.9Gi
Swap:         -
Kernel:       Linux 5.4.0-40-generic x86_64

Disks:
loop0   70.3M  HDD
loop1   55.5M  HDD
loop4   32.3M  HDD
loop5   69.2M  HDD
loop6   32.1M  HDD
loop7   55.4M  HDD
vda     40G  HDD

CPU: SHA256-hashing 500 MB
    3.501 seconds
CPU: bzip2-compressing 500 MB
    6.466 seconds
CPU: AES-encrypting 500 MB
    1.229 seconds

ioping: seek rate
    min/avg/max/mdev = 184.5 us / 504.5 us / 49.8 ms / 728.8 us
ioping: sequential read speed
    generated 5.89 k requests in 5.00 s, 1.44 GiB, 1.18 k iops, 294.7 MiB/s

dd: sequential write speed
    1st run:    172.62 MiB/s
    2nd run:    217.44 MiB/s
    3rd run:    340.46 MiB/s
    average:    243.50 MiB/s

IPv4 speedtests
    your IPv4:    103.153.72.xxxx

    Cachefly CDN:         9.62 MiB/s
    Leaseweb (NL):        4.45 MiB/s
    Softlayer DAL (US):   0.03 MiB/s
    Online.net (FR):      9.75 MiB/s
    OVH BHS (CA):         6.36 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## VNG Cloud : HighPerf v2 (2vcpu, 2gb) 20gb ssd (465,000d / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-07-13 08:40:18 UTC
-------------------------------------------------

Processor:    Intel(R) Xeon(R) Gold 6242 CPU @ 2.80GHz
CPU cores:    2
Frequency:    2793.436 MHz
RAM:          1.9Gi
Swap:         1.7Gi
Kernel:       Linux 5.4.0-72-generic x86_64

Disks:
sda     20G  HDD

CPU: SHA256-hashing 500 MB
    2.595 seconds
CPU: bzip2-compressing 500 MB
    4.465 seconds
CPU: AES-encrypting 500 MB
    1.080 seconds

ioping: seek rate
    min/avg/max/mdev = 232.7 us / 564.6 us / 4.37 ms / 160.8 us
ioping: sequential read speed
    generated 3.93 k requests in 5.00 s, 981.5 MiB, 784 iops, 196.2 MiB/s

dd: sequential write speed
    1st run:    194.55 MiB/s
    2nd run:    198.36 MiB/s
    3rd run:    198.36 MiB/s
    average:    197.09 MiB/s

IPv4 speedtests
    your IPv4:    103.245.249.xxxx

    Cachefly CDN:         0.23 MiB/s
    Leaseweb (NL):        0.19 MiB/s
    Softlayer DAL (US):   0.16 MiB/s
    Online.net (FR):      0.18 MiB/s
    OVH BHS (CA):         0.17 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## Viettel IDC : 4vCPU - 4G - 80GB SSD - 300Mbps (900,000 VND / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2023-02-07 15:43:10 UTC
-------------------------------------------------

Processor:    Intel Xeon Processor (Skylake, IBRS)
CPU cores:    4
Frequency:    2399.998 MHz
RAM:          3.8Gi
Swap:         -
Kernel:       Linux 5.4.0-137-generic x86_64

Disks:
vda     80G  HDD

CPU: SHA256-hashing 500 MB
    2.977 seconds
CPU: bzip2-compressing 500 MB
    5.397 seconds
CPU: AES-encrypting 500 MB
    1.285 seconds

ioping: seek rate
    min/avg/max/mdev = 192.4 us / 513.8 us / 24.7 ms / 424.9 us
ioping: sequential read speed
    generated 2.98 k requests in 5.00 s, 744 MiB, 595 iops, 148.8 MiB/s

dd: sequential write speed
    1st run:    663.76 MiB/s
    2nd run:    767.71 MiB/s
    3rd run:    845.91 MiB/s
    average:    759.12 MiB/s

IPv4 speedtests
    your IPv4:    27.71.25.xxxx

    Cachefly CDN:         27.23 MiB/s
    Leaseweb (NL):        7.64 MiB/s
    Softlayer DAL (US):   0.00 MiB/s
    Online.net (FR):      12.44 MiB/s
    OVH BHS (CA):         8.59 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## Conclusion

- Performance : VNG > CMC ~ Bizfly ~ Viettel
- Disk Read : CMC > BizFly > VNG (better IOPS) > ViettelIDC
- Disk Write : ViettelIDC > CMC , BizFly , VNG
- Network :
    + Domestic (Unmetered) : CMC 500Mbps / BizFly 100Mbps 
    + BizFly has 1Gbps networking option within free bandwidth amount of selected plan (then 380đ / GB exceed bandwidth)
    + International : ViettelIDC (best, stable), CMC (10Mbps default with 100,000đ / additional  10Mbps), BizFly (~100Mbps to Singapore default), VNG (~10Mbps)
- Price : if we have same specs (except network) Bizfly > CMC > VNG (781,000 > 594,000 > 331,000)
