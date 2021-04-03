---
title: 本地运行ts-node
date: 2021-03-30 10:54:57
tags:
---

在ts.config.json中添加配置 `"mudoule": esnext或es2005`
在package.json中添加配置 `"type":"modules"`


```bash
    node --loader ts-node/esm ./test.ts
```