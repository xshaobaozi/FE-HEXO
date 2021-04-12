---
title: docker部署前端项目
date: 2021-04-12 20:54:57
tags:
---

## 为什么使用 docker

在开发大型项目中,可能有很多开发人员,各个人员电脑环境配置,服务器环境可能各有不同,而 docker 却可以通过`容器` 和 `镜像` 解决这些问题.

### 基础语法

#### FROM

```bash
FROM <image>
FROM <image>:<tag>
FROM <image>@<digest>
# e.g
FROM mysql:5.6
```

#### MAINTAINER

```bash
MAINTAINER <name>
# e.g
MAINTAINER baozi
```

#### RUN

```bash
RUN <command>
RUN ["executable", "param1", "param2"]
# e.g
RUN yarn
# 每一个RUN都会多一层镜像
RUN yarn && yarn build
# 可以使用&&连接
```

#### COPY && ADD

两个命令类似
用 `ADD` tar 类型文件会自动解压(网络压缩资源不会被解压)，可以访问网络资源，类似 wget

```bash
COPY <src>... <dest>
```

#### EXPOSE

暴露端口 建议通过 docker run -p 来做映射

```bash
EXPOSE <port> [<port>...]
```

#### WORKDIR

工作目录，类似于 cd 命令

```bash
WORKDIR path
# 使用后 镜像后续操作都在path上进行
```

### 发布部署

首先看看传统前端构建和部署流程

- 安装`node`
- 安装`yarn`

```bash
    # 打包项目
    yarn build
    # 推送代码
    git push
```

由于 window 和 ubuntu 和 osx 各种环境问题, 安装系统环境也是各种复杂, 而通过 docker 却可以使一切变得简单

- 安装`docker`

```bash
    # 映射80端口 对应容器的8090端口
    docker run --rm --name frontend -p 80:8090 frontend:latest
```

就... 很简单是叭!
那么说说具体配置

### Dockerfile

```bash
cd 工作目录
touch Dockerfile
touch nginx.conf
```

```Dockerfile
# 拉去node最新版 命名 builder
FROM node:latest as builder
# 进入容器工作目录
WORKDIR /app
# 复制依赖文件
COPY package.json .
# 安装
RUN yarn
# 复制目录上的文件
COPY . .
# 构建
RUN yarn build

# 拉去nginx
FROM nginx:latest
# 复制nginx 配置到 nginx中
COPY ./nginx.conf /etc/nginx/conf.d/
# 从上一个容器中复制build文件到指定目录
COPY --from=builder /app/dist /srv/oa/

```

```nginx
server {
        listen       8090;
        server_name  localhost;

        location / {
            root   /srv/oa/;
            index  index.html index.htm;
        }
}
```

最后运行命令可以构建出 image

```bash
docker build -t frontend
docker images
# 查看镜像
REPOSITORY                                             TAG       IMAGE ID       CREATED          SIZE
frontend                                               latest    d98c577bda75   33 minutes ago   140MB

# 运行
# 打开localhost:80就可以看到页面了
docker run --rm --name frontend -p 80:8090 frontend:latest
```

之后 只要通过 iamge 就可以部署项目, 也不用担心 nginx 配置的问题了

## 构建前端开发环境

同理 也可以通过 dockdr 构建前端开发环境

```bash
docker run --privileged --rm -it --name frontend-oa  -v $PWD:/srv -p 8001:8001 node /bin/bash
cd /srv
yarn
yarn setup
# 可以了
```
