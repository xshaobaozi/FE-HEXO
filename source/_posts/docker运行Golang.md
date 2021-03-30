---
title: docker运行Golang
date: 2021-03-29 10:54:57
tags:
---

## 安装Golang

```bash
    docker pull golang
    Using default tag: latest
    latest: Pulling from library/golang
    8bf9c589d5f9: Pull complete
    4c70e46d8b5f: Pull complete
    ea848ad42f0d: Pull complete
    48fe137f8d26: Pull complete
    e53aa3cb0a1b: Pull complete
    d33aad0a6981: Pull complete
    996781d6304a: Pull complete
    Digest: sha256:29b63705e5851b1f95862c5a26396f981e907c763e113bf470682759c9d9a702
    Status: Downloaded newer image for golang:latest
    docker.io/library/golang:latest

    # 创建一个名为go-demo容器 并且进入 --rm 退出后自动销毁容器
    # -v 挂载$PWD目录到srv下
    # -p 主机端口/docker映射端口
    # 镜像 golang
    docker run --privileged --rm -it --name go-test  -v $PWD:/srv -p 8000:8000 golang

    root@9eff7e201062:/go# go version
    go version go1.16.2 linux/amd64

    ## 
```
