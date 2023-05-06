---
date: "2016-03-19T21:07:56+07:00"
layout: post
title: "Backup and Restore ElasticSearch databases using Docker"
description: "One day, your ElasticSearch data is large and you have to move all data to another nodes or you just want backup the data file to somewhere."
categories: ["Database", "Docker"]
tags: ["database", "docker", "backup", "elasticsearch", "english"]
cover: "/static/images/2016/03/esdump.jpeg"
toc: true
---

## Introduction

One day, your [ElasticSearch](https://www.elastic.co/) data is large and you have to move all data to another nodes or you just want backup the data file to somewhere.

[ElasticSearch-Dump](https://github.com/taskrabbit/elasticsearch-dump) is a tool can help you on this situation, it's written on NodeJS so can run multi-platform. You can view the documents [here](https://github.com/taskrabbit/elasticsearch-dump).

One way more convinient if you already have Docker is running its Docker image.

## Instruction

Basically, Elasticsearch data include 3 main types:

- analyzer
- mapping
- data

### Backup and restore the data using dump files

#### Saving dump files (must map a docker volume)

```shell
$ docker run --rm -ti -v `pwd`:/data elasticdump/elasticsearch-dump \
  --input=http://production.es.com:9200/my_index \
  --output=/data/my_index.mapping.json \
  --type=mapping
$ docker run --rm -ti -v `pwd`:/data elasticdump/elasticsearch-dump \
  --input=http://production.es.com:9200/my_index \
  --output=/data/my_index.data.json \
  --type=data
```

#### Restore from dump files (must map a docker volume)

```shell
$ docker run --rm -ti -v `pwd`:/data elasticdump/elasticsearch-dump \
  --input=/data/my_index.mapping.json \
  --output=http://newnodes.es.com:9200/my_index \
  --type=mapping
$ docker run --rm -ti -v `pwd`:/data elasticdump/elasticsearch-dump \
  --input=/data/my_index.data.json \
  --output=http://newnodes.es.com:9200/my_index \
  --type=data
```

### Transfer data directly to another instance

```shell
$ docker run --rm -ti elasticdump/elasticsearch-dump \
  --input=http://production.es.com:9200/my_index \
  --output=http://newnodes.es.com:9200/my_index \
  --type=mapping
$ docker run --rm -ti elasticdump/elasticsearch-dump \
  --input=http://production.es.com:9200/my_index \
  --output=http://newnodes.es.com:9200/my_index \
  --type=data
```

*Note : you must replace `localhost` or `127.0.0.1` to `172.17.0.1` to access to ES Docker host. `172.17.0.1` is default IP of docker host in `docker0` network interface*

### Minimize downtime while transfering data

If you transfering data from Index A to Index B in same instance, you can try [Index Alias](https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-aliases.html) to minimize the downtime.

- Step 1 : Make a index alias to old index.
- Step 2 : Point your application to use the created index alias.
- Step 3 : Transfering mapping, data (you can serialize the data before restore)
  + You should use option `--bulk=true` for using Bulk API when writing documents
- Step 4 : Move index alias from old index to new index (delete old link and make a new link)

## BEWARE

Read full documentation here : https://github.com/elasticsearch-dump/elasticsearch-dump
