---
date: "2017-04-24T14:19:39+07:00"
layout: post
title: "Kick start Docker environment on ubuntu"
description: "Kick start Docker environment on Ubuntu in production"
categories: ["System", "Tech"]
tags: ["system", "devops", "bash", "container", "docker"]

---

**What does script do :**

- Install latest Docker Engine
- Install latest Docker Compose tool
- AND last but not least, **a congratuation message** !

**Here is the script :**

```bash
#!/bin/bash

# Install required packages
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

# Add Docker repo
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Install Docker CE from repository
sudo apt update
sudo apt install docker-ce

# Run hello-world for testing
sudo docker run --rm hello-world

# Install latest docker-compose
export PYTHONIOENCODING=utf8
DC_VERSION=$(curl -s 'https://api.github.com/repos/docker/compose/releases/latest' | python -c "import sys, json; print json.load(sys.stdin)['tag_name']")

curl -L https://github.com/docker/compose/releases/download/$DC_VERSION/docker-compose-`uname -s`-`uname -m` > dc
sudo mv dc /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo "BAMMMMM ! Ready to containerize all things !"
```

![My docker containers are building](/static/images/2017/04/docker-meme.png)

> Hm.. it's exactly docker images are building instead

------------------------------------

**Ref:**

- Docker meme from [developermemes.com](http://www.developermemes.com/2015/09/02/slacking-off-excuse-is-docker-containers-are-building-meme/)
