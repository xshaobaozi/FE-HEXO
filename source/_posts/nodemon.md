---
title: nodemon
date: 2019-08-04 15:15:22
tags:
---

# nodemon

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script.

某很不靠谱的翻译：
    nodemon可以帮助你开发node.js应用 通过监听文件变化帮助你重新编译应用

## Installation
    全局安装
    ```bash
        npm install -g nodemon
        或
        cnpm install -g nodemon
    ```

    局部安装
    ```bash
        npm install  nodemon
        或
        cnpm install  nodemon
    ```

## usage
    ```bash
        nodemon [your node app]
    ```
    然后修改一下文件 nodemon就会自动帮助你重新执行命令

## nodemon.json
    ```json
       {
            "verbose": true, // 输出重启信息
            "ignore": ["*.test.js", "fixtures/*"], // 忽略文件
            "execMap": {
                "rb": "ruby",
                "pde": "processing --sketch={{pwd}} --run"
            },
            "events": {
                "start": "node index.js"
            },
            "ext": "js json", // 监听文件类型 空格分开 默认 js coffee litcoffee json
            "watch": [
                "./src/**"
            ],
            "env": {
                "NODE_ENV": "env", //开发环境
                "PORT": "3000" // 端口
            },
            "legacy-watch": false 
        }
    ```

以上内容都是[官方文档](https://github.com/remy/nodemon/tree/5124ae9528da8b19ce25c1945d1e62c35f20e861) 能找到的 现在然后实际应用一下