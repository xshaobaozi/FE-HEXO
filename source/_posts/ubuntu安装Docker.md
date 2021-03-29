---
title: ubuntu更换阿里源
date: 2021-03-14 21:54:57
tags:
---
```bash
    #使用 apt-get 进行安装
    # step 1: 安装必要的一些系统工具
    sudo apt-get update
    sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
    # step 2: 安装GPG证书
    curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
    # Step 3: 写入软件源信息
    sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
    # Step 4: 更新并安装Docker-CE
    sudo apt-get -y update
    sudo apt-get -y install docker-ce
    # 验证
    sudo docker run hello-world

```

