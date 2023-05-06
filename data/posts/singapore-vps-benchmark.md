---
layout: post
title: "Singapore VPS Benchmark"
date: 2021-05-30T15:48:53+07:00
tags: ["vps", "benchmark"]
---

## Benchmark Script

I used this script

```bash
$ (curl -s wget.racing/nench.sh | bash; curl -s wget.racing/nench.sh | bash) 2>&1 | tee nench.log
```

## MaxKVM : SKVM-1G Plan (5$ / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-05-30 12:22:20 UTC
-------------------------------------------------

Processor:    AMD EPYC 7302P 16-Core Processor
CPU cores:    1
Frequency:    2999.998 MHz
RAM:          981Mi
Swap:         1.0Gi
Kernel:       Linux 5.4.0-73-generic x86_64

Disks:
vda     25G  HDD

CPU: SHA256-hashing 500 MB
    2.785 seconds
CPU: bzip2-compressing 500 MB
    5.097 seconds
CPU: AES-encrypting 500 MB
    1.069 seconds

ioping: seek rate
    min/avg/max/mdev = 75.8 us / 164.4 us / 9.67 ms / 293.1 us
ioping: sequential read speed
    generated 15.9 k requests in 5.00 s, 3.87 GiB, 3.17 k iops, 792.8 MiB/s

dd: sequential write speed
    1st run:    1049.04 MiB/s
    2nd run:    953.67 MiB/s
    3rd run:    1049.04 MiB/s
    average:    1017.25 MiB/s

IPv4 speedtests
    your IPv4:    217.79.241.xxxx

    Cachefly CDN:         102.99 MiB/s
    Leaseweb (NL):        6.58 MiB/s
    Softlayer DAL (US):   6.16 MiB/s
    Online.net (FR):      14.05 MiB/s
    OVH BHS (CA):         6.23 MiB/s

IPv6 speedtests
    your IPv6:    2402:9e80:8:xxxx

    Leaseweb (NL):        9.46 MiB/s
    Softlayer DAL (US):   5.67 MiB/s
    Online.net (FR):      8.95 MiB/s
    OVH BHS (CA):         7.56 MiB/s
-------------------------------------------------
```

## Upcloud : 1G - 1vCPU (5$ / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-05-30 11:55:10 UTC
-------------------------------------------------

Processor:    AMD EPYC 7542 32-Core Processor
CPU cores:    1
Frequency:    2894.562 MHz
RAM:          980Mi
Swap:         -
Kernel:       Linux 5.8.0-50-generic x86_64

Disks:
vda     25G  HDD

CPU: SHA256-hashing 500 MB
    2.677 seconds
CPU: bzip2-compressing 500 MB
    5.558 seconds
CPU: AES-encrypting 500 MB
    1.051 seconds

ioping: seek rate
    min/avg/max/mdev = 76.5 us / 112.0 us / 4.21 ms / 42.4 us
ioping: sequential read speed
    generated 8.16 k requests in 5.06 s, 1.99 GiB, 1.61 k iops, 403.5 MiB/s

dd: sequential write speed
    1st run:    406.27 MiB/s
    2nd run:    405.31 MiB/s
    3rd run:    406.27 MiB/s
    average:    405.95 MiB/s

IPv4 speedtests
    your IPv4:    94.237.77.xxxx

    Cachefly CDN:         113.38 MiB/s
    Leaseweb (NL):        13.03 MiB/s
    Softlayer DAL (US):   5.66 MiB/s
    Online.net (FR):      12.57 MiB/s
    OVH BHS (CA):         9.59 MiB/s

IPv6 speedtests
    your IPv6:    2a04:3543:1000:xxxx

    Leaseweb (NL):        12.54 MiB/s
    Softlayer DAL (US):   2.52 MiB/s
    Online.net (FR):      13.90 MiB/s
    OVH BHS (CA):         9.77 MiB/s
-------------------------------------------------
```

## Contabo : VPS S SSD 8G 4vCPU (6.99$ / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-05-30 11:59:23 UTC
-------------------------------------------------

Processor:    AMD EPYC 7282 16-Core Processor
CPU cores:    4
Frequency:    2794.748 MHz
RAM:          7.8Gi
Swap:         2.0Gi
Kernel:       Linux 5.4.0-73-generic x86_64

Disks:
sda    200G  HDD

CPU: SHA256-hashing 500 MB
    3.137 seconds
CPU: bzip2-compressing 500 MB
    5.522 seconds
CPU: AES-encrypting 500 MB
    1.277 seconds

ioping: seek rate
    min/avg/max/mdev = 32.2 us / 114.1 us / 85.2 ms / 609.0 us
ioping: sequential read speed
    generated 18.6 k requests in 5.00 s, 4.55 GiB, 3.72 k iops, 930.9 MiB/s

dd: sequential write speed
    1st run:    157.36 MiB/s
    2nd run:    101.09 MiB/s
    3rd run:    101.09 MiB/s
    average:    119.85 MiB/s

IPv4 speedtests
    your IPv4:    194.233.74.xxxx

    Cachefly CDN:         14.08 MiB/s
    Leaseweb (NL):        12.60 MiB/s
    Softlayer DAL (US):   5.77 MiB/s
    Online.net (FR):      14.26 MiB/s
    OVH BHS (CA):         9.05 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## Linode : 1G 1vCPU (5$ / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-05-30 12:31:26 UTC
-------------------------------------------------

Processor:    AMD EPYC 7501 32-Core Processor
CPU cores:    1
Frequency:    1999.997 MHz
RAM:          981Mi
Swap:         511Mi
Kernel:       Linux 5.4.0-72-generic x86_64

Disks:
loop0   55.4M  HDD
loop1   31.1M  HDD
loop2   69.9M  HDD
sda   24.5G  HDD
sdb    512M  HDD

CPU: SHA256-hashing 500 MB
    3.553 seconds
CPU: bzip2-compressing 500 MB
    7.491 seconds
CPU: AES-encrypting 500 MB
    1.462 seconds

ioping: seek rate
    min/avg/max/mdev = 62.3 us / 214.1 us / 15.7 ms / 165.9 us
ioping: sequential read speed
    generated 23.8 k requests in 5.00 s, 5.82 GiB, 4.76 k iops, 1.16 GiB/s

dd: sequential write speed
    1st run:    517.85 MiB/s
    2nd run:    739.10 MiB/s
    3rd run:    744.82 MiB/s
    average:    667.25 MiB/s

IPv4 speedtests
    your IPv4:    139.162.39.xxxx

    Cachefly CDN:         324.68 MiB/s
    Leaseweb (NL):        12.04 MiB/s
    Softlayer DAL (US):   6.48 MiB/s
    Online.net (FR):      6.62 MiB/s
    OVH BHS (CA):         9.32 MiB/s

IPv6 speedtests
    your IPv6:    2400:8901::xxxx

    Leaseweb (NL):        9.10 MiB/s
    Softlayer DAL (US):   5.19 MiB/s
    Online.net (FR):      8.91 MiB/s
    OVH BHS (CA):         9.24 MiB/s
```

## DigitalOcean : 1G 1vCPU Regular (5$ / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-05-30 14:45:15 UTC
-------------------------------------------------

Processor:    DO-Regular
CPU cores:    1
Frequency:    2199.998 MHz
RAM:          981Mi
Swap:         -
Kernel:       Linux 5.4.0-73-generic x86_64

Disks:
loop0   55.4M  HDD
loop1   67.6M  HDD
loop2   32.1M  HDD
vda     25G  HDD

CPU: SHA256-hashing 500 MB
    4.154 seconds
CPU: bzip2-compressing 500 MB
    6.965 seconds
CPU: AES-encrypting 500 MB
    2.124 seconds

ioping: seek rate
    min/avg/max/mdev = 125.7 us / 276.6 us / 10.6 ms / 160.2 us
ioping: sequential read speed
    generated 5.01 k requests in 5.00 s, 1.22 GiB, 1.00 k iops, 250.3 MiB/s

dd: sequential write speed
    1st run:    364.30 MiB/s
    2nd run:    400.54 MiB/s
    3rd run:    370.98 MiB/s
    average:    378.61 MiB/s

IPv4 speedtests
    your IPv4:    157.230.251.xxxx

    Cachefly CDN:         625.00 MiB/s
    Leaseweb (NL):        9.54 MiB/s
    Softlayer DAL (US):   8.07 MiB/s
    Online.net (FR):      9.62 MiB/s
    OVH BHS (CA):         10.06 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## DigitalOcean : 1G 1vCPU AMD NVMe (6$ / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-05-30 14:45:02 UTC
-------------------------------------------------

Processor:    DO-Premium-AMD
CPU cores:    1
Frequency:    1999.998 MHz
RAM:          981Mi
Swap:         -
Kernel:       Linux 5.4.0-73-generic x86_64

Disks:
loop0   55.4M  HDD
loop1   67.6M  HDD
loop2   32.1M  HDD
vda     25G  HDD

CPU: SHA256-hashing 500 MB
    3.164 seconds
CPU: bzip2-compressing 500 MB
    5.816 seconds
CPU: AES-encrypting 500 MB
    1.230 seconds

ioping: seek rate
    min/avg/max/mdev = 45.4 us / 191.2 us / 3.50 ms / 108.4 us
ioping: sequential read speed
    generated 11.0 k requests in 5.00 s, 2.69 GiB, 2.20 k iops, 551.0 MiB/s

dd: sequential write speed
    1st run:    1144.41 MiB/s
    2nd run:    1144.41 MiB/s
    3rd run:    1239.78 MiB/s
    average:    1176.20 MiB/s

IPv4 speedtests
    your IPv4:    188.166.240.xxxx

    Cachefly CDN:         636.94 MiB/s
    Leaseweb (NL):        8.30 MiB/s
    Softlayer DAL (US):   8.73 MiB/s
    Online.net (FR):      9.89 MiB/s
    OVH BHS (CA):         10.19 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## Vultr : 1G 1vCPU (5$ / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-05-30 15:14:29 UTC
-------------------------------------------------

Processor:    Intel Xeon Processor (Cascadelake)
CPU cores:    1
Frequency:    2992.968 MHz
RAM:          981Mi
Swap:         -
Kernel:       Linux 5.4.0-71-generic x86_64

Disks:
vda     25G  HDD

CPU: SHA256-hashing 500 MB
    2.908 seconds
CPU: bzip2-compressing 500 MB
    5.275 seconds
CPU: AES-encrypting 500 MB
    1.067 seconds

ioping: seek rate
    min/avg/max/mdev = 47.9 us / 198.7 us / 9.54 ms / 135.5 us
ioping: sequential read speed
    generated 19.7 k requests in 5.00 s, 4.81 GiB, 3.94 k iops, 985.0 MiB/s

dd: sequential write speed
    1st run:    945.09 MiB/s
    2nd run:    1049.04 MiB/s
    3rd run:    953.67 MiB/s
    average:    982.60 MiB/s

IPv4 speedtests
    your IPv4:    149.28.154.xxxx

    Cachefly CDN:         684.93 MiB/s
    Leaseweb (NL):        13.09 MiB/s
    Softlayer DAL (US):   5.09 MiB/s
    Online.net (FR):      7.24 MiB/s
    OVH BHS (CA):         9.79 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## Vultr : 1G 1vCPU High Freq (6$ / month)

```text
-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2021-05-30 15:02:47 UTC
-------------------------------------------------

Processor:    Intel Core Processor (Skylake, IBRS)
CPU cores:    1
Frequency:    3696.000 MHz
RAM:          981Mi
Swap:         -
Kernel:       Linux 5.4.0-71-generic x86_64

Disks:
vda     32G  HDD

CPU: SHA256-hashing 500 MB
    2.435 seconds
CPU: bzip2-compressing 500 MB
    4.102 seconds
CPU: AES-encrypting 500 MB
    0.892 seconds

ioping: seek rate
    min/avg/max/mdev = 41.4 us / 170.5 us / 2.96 ms / 54.7 us
ioping: sequential read speed
    generated 24.1 k requests in 5.00 s, 5.89 GiB, 4.82 k iops, 1.18 GiB/s

dd: sequential write speed
    1st run:    1049.04 MiB/s
    2nd run:    1049.04 MiB/s
    3rd run:    1049.04 MiB/s
    average:    1049.04 MiB/s

IPv4 speedtests
    your IPv4:    149.28.154.xxxx

    Cachefly CDN:         666.67 MiB/s
    Leaseweb (NL):        14.05 MiB/s
    Softlayer DAL (US):   8.68 MiB/s
    Online.net (FR):      0.02 MiB/s
    OVH BHS (CA):         9.76 MiB/s

No IPv6 connectivity detected
-------------------------------------------------
```

## Conclusion

- Performance / Price : Contabo > MaxKVM > Vultr > Linode > DO > UpCloud ...
- Disk Read : Vultr High Freq or Linode > Vultr Regular > Contabo > MaxKVM > DO NVMe > UpCloud > DO Regular
- Disk Write : DO NVMe > Vultr High Freq > MaxKVM > Vultr Regular > Linode > UpCloud
- Network : DO or Vultr > Linode > .... > Contabo
