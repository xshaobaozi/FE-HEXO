---
title: ubuntu的一点知识积累
date: 2019-07-12 16:40:57
tags:
---

## 目录结构与功能

### 最近有去用的

#### etc

    程序的配置文件

###opt 

    安装程序的引导和程序文件，如果缺少必要的文件，安装的程序无法正常启动，一般多是第三方软件，比如sublime

#### srv 

    系统储存服务相关数据

#### var 

    日志文件

###  没了解的

#### bin

    启东系统需要的命令和大部分普通用户需要的可执行命令

#### boot

    引导文件

#### cdrom

    不写了

#### dev

    设备文件

#### home

    普通用户都用自己名字的文件夹放在这个目录

#### lib

    各种程序所需的共享动态链接库 主要放系统公用的代码

/etc/nginx

/opt/config/nginx

## 更新软件

### apt

``` bash
    apt update

```

### Nginx

``` bash
    apt install nginx
```

### nodejs

``` bash
    apt install nodejs
```

### bash

删除指定目录文件

        find [目录] -mtime +21 -name "*.*" -exec rm -Rf {} \;

查看目录容量

        du -h --max-depth=1
