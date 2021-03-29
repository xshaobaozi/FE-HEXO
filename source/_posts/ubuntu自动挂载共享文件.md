---
title: ubuntu自动挂载共享文件
date: 2021-03-29 21:54:57
tags:
---

## 挂载文件
首先在vm设置好共享文件夹,然后进入ubuntu
```bash
    cd /mnt
    sudo mkdir share
    sudo mount -t vboxsf share /mnt/share
```

## 自动挂载
```bash
    sudo vim /etc/fstab
    # 添加下面代码
    share /mnt/share vboxsf rw,gid=username,uid=username,auto 0 0
    # username 是你的用户名
```


