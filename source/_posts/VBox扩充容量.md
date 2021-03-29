---
title: VBox扩充容量
date: 2021-03-28 10:54:57
tags:
---
## Ubuntu查看空间使用情况
```bash
    df -hl
    Filesystem      Size  Used Avail Use% Mounted on
    udev            966M     0  966M   0% /dev
    tmpfs           199M  1.4M  198M   1% /run
    /dev/sda5       9.3G  8.3G  521M  95% /
    tmpfs           994M     0  994M   0% /dev/shm
    tmpfs           5.0M  4.0K  5.0M   1% /run/lock
    tmpfs           994M     0  994M   0% /sys/fs/cgroup
    /dev/loop2       65M   65M     0 100% /snap/gtk-common-themes/1514
    /dev/loop1       33M   33M     0 100% /snap/snapd/11107
    /dev/loop3       32M   32M     0 100% /snap/snapd/11036
    /dev/loop0       52M   52M     0 100% /snap/snap-store/518
    /dev/loop4      219M  219M     0 100% /snap/gnome-3-34-1804/66
    /dev/loop5       56M   56M     0 100% /snap/core18/1988
    /dev/sda1       511M  4.0K  511M   1% /boot/efi
    tmpfs           199M   20K  199M   1% /run/user/1000
    /dev/sr0         59M   59M     0 100% /media/xshaobaozi/VBox_GAs_6.1.18
```

## 关闭docker服务
sudo service docker stop


## Vbox中ubuntu容量不够

```bash
    cd C:\Program Files\Oracle\VirtualBox
    ./VBoxManage list hdds
    UUID:           ee606e5a-db93-44be-b54d-2dc378e82ee6
    Parent UUID:    base
    State:          locked write
    Type:           normal (base)
    Location:       C:\Users\baaozi\VirtualBox VMs\ubuntu2\ubuntu2.vdi
    Storage format: VDI
    Capacity:       30720 MBytes
    Encryption:     disabled
```
    这时候 UUID就是你的虚拟机名
    Capacity 就是你现在的容量

> 修改容量

```bash
    ./VBoxManage modifyhd [UUID] --resize [多少MB]
```

## 开启docker服务
sudo service docker start
成功