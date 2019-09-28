---
title: 使用webHook自动编译代码
date: 2019-09-22 00:06:07
tags:
---

## 背景

由于正在开发的项目是一个远古项目，所以部署方式也是用超级传统的ftp方式的，那么就会遇到一个问题，完成开发 - 打包 - ftp找目录 - 复制代码到对应目录 这样的辣鸡过程，都9012年了肯定不能这样吧 所以就出现了这篇文章了

## npm

首先 开发过程中 通过package.json 的 script字段可以写上对应的npm命令， 通过命令和参数区分不同的环境和功能

``` json
    "script": {
        "dev": "npm run serve",
        "dev-prod": "vue-cli-service serve --mode prod",
        "serve": "vue-cli-service serve --mode development",
        "build": "vue-cli-service build --mode development",
    }
```

## webhook

Git中master开发者可以设置webhook，通过setting - Webhooks - Add webhook添加对应的钩子
当你本地提交代码git push origin/xxx 到服务器 服务器会触发一个post请求到你的URL中，然后你需要在服务器接收改请求触发对应的行为

* Payload URL

    填写对应服务器URL

* Secret

    填写对应key

通过选择事件类型触发请求
请求报文大概如下
请求Headers

``` javascript
    Request URL: http: //xxxx/xxxx
        Request method: POST
    content - type: application / json
    Expect:
        User - Agent: GitHub - Hookshot / acf94e7
    X - GitHub - Delivery: eaa42b38 - df65 - 11e9 - 8 f26 - 96 xxxxxxx
    X - GitHub - Event: push
    X - Hub - Signature: sha1 = xxxxxxxxxxxxxxxxxxxxxxx
```

请求Payload

``` javascript
    {
        "ref": "refs/heads/master",
        "before": "",
        "after": "",
        "repository": {
            "id": ,
            "node_id": "=",
            "name": "",
            "full_name": "",
            "private": false,
            "owner": {
                "name": "",
                "email": "",
                "login": "",
                "id": 1,
                "node_id": "",
                "avatar_url": "",
                "gravatar_id": "",
                "url": "",
                "html_url": "",
                "followers_url": "xxxxxxx/followers",
                "following_url": "xxxxxxx/following{/other_user}",
                "gists_url": "xxxxxxx/gists{/gist_id}",
                "starred_url": "xxxxxxx/starred{/owner}{/repo}",
                "subscriptions_url": "xxxxxxx/subscriptions",
                "organizations_url": "xxxxxxx/orgs",
                "repos_url": "xxxxxxx/repos",
                "events_url": "xxxxxxx/events{/privacy}",
                "received_events_url": "xxxxxxx/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "/FE-HEXO",
            ...
        }
```

## bash
由于要写脚本所以还是要临时学点bash知识的 
+ $0
        脚本名称
+ $1-9
        脚本执行时的参数1到参数9
+ $?
        脚本的返回值
+ $#
        输入的参数的具体内容（将输入的参数作为一个多个对象，即是所有参数的一个列表）
+ $*
        输入的参数的具体内容（将输入的参数作为一个单词）

嗯嗯 基本够用了 next吧
## 服务器代码

由于只会node 所以就通过node实现吧 
思路是 接收post请求 检查对应secret 和 event来触发对应的脚本
由于有现成工具 所以很多操作都简化了 直接用现有的库吧😆
``` javascript
    forever start ./index.js
```
写好代码后通过forever挂起来
具体代码如下

``` javascript
    // index.js
    var http = require('http')
    var createHandler = require('github-webhook-handler')
    var handler = createHandler({
        path: '/xxx',
        secret: 'xxxx'
    })
    // 上面的 secret 保持和 GitHub 后台设置的一致

    http.createServer(function(req, res) {
        handler(req, res, function(err) {
            res.statusCode = 404
            res.end('no such location')
        })
    }).listen(7777)

    handler.on('error', function(err) {
        console.error('Error:', err.message)
    })

    handler.on('push', function(event) {
        console.log('Received a push event for %s to %s',
            event.payload.repository.name,
            event.payload.ref);
        console.log(event.url)
        run_cmd('sh', ['./deploy.sh', event.payload.repository.name, ], function(text) {
            console.log(text)
        });
    })

    function run_cmd(cmd, args, callback) {
        console.log('ok')
        var spawn = require('child_process').spawn;
        var child = spawn(cmd, args);
        var resp = "";

        child.stdout.on('data', function(buffer) {
            resp += buffer.toString();
        });
        child.stdout.on('end', function() {
            callback(resp)
        });
    }
```
脚本代码如下 
``` bash
#!/bin/bash
    
    WEB_PATH='/srv/'$1
    
    echo "自动拉代码...😆"
    cd $WEB_PATH
    git reset --hard origin/master
    echo "git pulling..."
    git pull
    echo "git pulling..."
    echo "pull complete...👌👌👌👌";
    npm run build
    echo "build complete...👌👌👌👌";
    echo "Finished.Bye"
```

## Nginx
当然 写了服务器还要能够接受该请求 所以把80端口的请求转发到内部7777端口
``` bash
        server{
                listen 80;
                server_name xxxx;
                location /xxxx {
                        proxy_pass http://127.0.0.1:7777;
                }
        }
```

## forever
```javascript
    cnpm install forever -g
    // 运行
    forever start ./index.js
    // 停止
    forever stop [id]
    // 查看进程
    forever list
```

## 服务器安装依赖
当然 以前是本地编译 现在服务器拉代码那么服务器也得安装对应依赖 就cnpm install

## 结尾
好了 该有的代码都有了 接下来 到项目 一顿操作 git push 然后到页面刷新一下
好了 更新了 🙆