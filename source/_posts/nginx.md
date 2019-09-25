<!--
 * @Date: 2019-09-25 14:57:19
 * @LastEditors: xshaobaozi
 * @LastEditTime: 2019-09-25 14:57:19
 -->
---
title: nginx
date: 2019-09-21 13:36:55
tags:
---

## 安装准备

    由于使用的事MacBook 所以使用Brew安装

## brew

[Brew](https://brew.sh/)又叫Homebrew，是Mac中的一款软件包管理工具，通过brew可以很方便的在Mac中安装软件或者是卸载软件.
一般Mac电脑会默认安装有brew.

``` bash
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* brew 搜索软件

        brew search nginx

* brew 安装软件

        brew install nginx

* brew 查看安装列表

        brew list

* brew 删除软件

        brew uninstall nginx

## 安装

*   安装nginx

        brew search nginx

*   启动nginx

        sudo brew services start nginx

*   [打开网页](http://localhost:8080)访问，出现nginx的默认启动页面

*   停止nginx

        nginx -s stop

*   重新加载

        nginx -s reload

*   检测配置文件

        nginx -t

## 使用时候的一些小问题

* 查看nginx配置文件位置

        nginx -t

``` bash
    nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful
```

文件位置在/usr/local/etc/nginx/nginx.conf

* brew安装查看nginx路径

        brew list nginx

``` bash
    /usr/local/Cellar/nginx/1.17.0/.bottle/etc/ (15 files)
    /usr/local/Cellar/nginx/1.17.0/bin/nginx
    /usr/local/Cellar/nginx/1.17.0/homebrew.mxcl.nginx.plist
    /usr/local/Cellar/nginx/1.17.0/html -> ../../../var/www
    /usr/local/Cellar/nginx/1.17.0/share/man/man8/nginx.8
    /usr/local/Cellar/nginx/1.17.0/share/nginx/ (2 files)
```

路径在/usr/local/Cellar/nginx/1.17.0/bin/nginx

## 一些案例

* 请求80端口显示index文件

``` bash
        server{
                listen 80;
                server_name xxxx;
                location / {
                        root /srv/xxxx/public;
                        index index.html index.htm;
                }
        }
        
        
```

* 80端口转发到本地xxxx端口

``` bash
        server{
                listen 80;
                server_name xxxx;
                location /xxxx {
                        proxy_pass http://127.0.0.1:xxxx;
                }
        }
```

