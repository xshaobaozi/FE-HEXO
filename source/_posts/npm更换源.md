---
title: npm更换源
date: 2021-03-30 10:54:57
tags:
---

## 淘宝源

```bash
    npm config set registry https://registry.npm.taobao.org
```

## 通过nrm更换

> 安装 

```bash
    # 安装

    npm i -g nrm

    # 查看源
    
    nrm ls
    npm -------- https://registry.npmjs.org/
    yarn ------- https://registry.yarnpkg.com/
    cnpm ------- http://r.cnpmjs.org/
    * taobao ----- https://registry.npm.taobao.org/
    nj --------- https://registry.nodejitsu.com/
    npmMirror -- https://skimdb.npmjs.com/registry/
    edunpm ----- http://registry.enpmjs.org/

    # 查看当前

    nrm current
    taobao

    # 更换源

    nrm use npm
``` 