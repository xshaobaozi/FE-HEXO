---
title: 解决VM中运行前端项目问题
date: 2021-05-26 21:54:57
tags:
---
### ubuntu解决软链失效问题
由于yarn 安装 出现
```bash
    virtualbox An unexpected error occurred: "EPERM: operation not permitted, symlink
```

关闭虚拟机

```bash
    D:\Program Files\Oracle\VirtualBox>VBoxManage setextradata "虚拟机名" VBoxInternal2/SharedFoldersEnableSymlinksCreate/共享文件夹 1
```

其中`elementary`是虚拟机名称,`code`是共享文件夹名称,具体使用方式可以参考:

https://www.cnblogs.com/cxbhakim/p/8882947.html

执行成功后正常启动虚拟机，再次执行创建软链接的命令：

再次启动虚拟机 运行yarn就可以了

###  window10中修改文件但是vm中不生效
新建文件.env并添加下面信息 
```bash
# .env
CHOKIDAR_USEPOLLING=true
```bash