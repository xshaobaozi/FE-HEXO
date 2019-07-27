---
title: 记字节跳动面试
date: 2019-07-27 19:49:37
tags:
---


## 记字节跳动面试

前面过程就不说了 基础题 项目 xxx的

就说一下几个记得的题吧

## 题目

### setTimeout Promise

```javascript
    console.log('A')
    setTimeout(() => {
        console.log('B')
    })
    Promise.resolve(() => {
        setTimeout(() => {
            console.log('C')
        })
    })
    .then(() => {
            console.log('D')
    })
    setTimeout(() => {
        console.log('E')
    })

    //A D B E
```
讲解一下
这里应该主要考察的是 宏任务 和 微任务
setTimeout 是宏任务
Promise是微任务

微任务 在事件循环中 加入到当前循环的底部
宏任务加入到事件队列中

顺便再写一下 在node方面
process.nextTick 微任务
setImmediate 宏任务

### js实现一下bind

```javascript
    Function.prototype.bind = function(obj) {
        const arg = Array.prototype.slice.call(arguments, 1);;
        const that = this;
        return function() {
            that.apply(obj, arg.concat(Array.from(arguments)))
        }
    }

    const bb = (function a(x,y) {
        console.log(`${x},${y},${this.a}`)
    }).bind({a: '22'},1);

    bb(2);
    // 1, 2, 22
```
这里应该主要运用的是闭包吧 还有arguments apply 和 call吧
没什么好说的 注意bind会返回一个函数

### 算法题

{}()[] = true
{[()]} = true
[(])[] = false
规则就是这样 请写出检测函数

我？？？？？？？？平时不刷LeetCode的一脸懵逼 
先说一下思路 要是大佬觉得🙆‍♂️ 那就开始写吧
然后 我写的时候 疯狂报错 整个页面都红了 大佬那个嘴角上扬的啊 我尴尬的想跑了
最后在大佬友善的指点下跑通了 一个 例子😁 后面两个跑不通 
发现是忘记匹配多种情况了 欢声笑语中打出GG
面完出来就想到了 就写一下 

```javascript
    
        function checkString(str) {
            if (!str) return false;
            let left = [];
            let right = [];    
            let isStart = false;
            let isSame = true;
            str.split('').forEach((item, $index) => {
                if (isSame === false) return false;
                if ((item == ')' || item == ']' || item =='}') && isStart === false)
                {
                    isStart = true;
                }
                if (isStart === false) {
                    left.push(item)
                } 
                if (isStart === true) {
                    right.push(item)
                    if (left.length === right.length) {
                        const textLeft = swtich(left).join('');
                        const textRight = right.reverse().join('');
                        isSame = textLeft === textRight;
                        left = [];
                        right = [];
                        isStart = false;
                    }
                }
            })
            return isSame;
        }

        function swtich(str) {
            return str.map(item => {
                if (item == '(') return ')';
                if (item == '{') return '}';
                if (item == '[') return ']'
            })
        }
        console.log(checkString('{[])}'));

        // {}[]() -> true
        // {[])} -> false
        // [[[(((())))]]] -> true
        // [{]} -> false    
```