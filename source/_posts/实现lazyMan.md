<!--
 * @Date: 2019-10-31 14:22:38
 * @LastEditors: xshaobaozi
 * @LastEditTime: 2019-10-31 19:28:09
 -->
---
title: 实现lazyMan
date: 2019-10-31 14:22:38
tags:
---

## LazyMan

    网上看到的一个题目
    ```javascript
        1.
            LazyMan('Hank')
            // Hi!This is Hank!

        2.
            LazyMan(“Hank”).sleep(10).eat(“dinner”)
            //Hi! This is Hank!
            //...10s
            //Wake up after 10
            //Eat dinner~

        3.
            LazyMan(“Hank”).eat(“dinner”).eat(“supper”)
            //Hi This is Hank!
            //Eat dinner~
            //Eat supper~

        4.
            LazyMan(“Hank”).sleepFirst(5).eat(“supper”)
            //Wake up after 5
            //Hi This is Hank!
            //Eat supper
    ```
    大概如下

### 实现
    
```javascript
    /*
 * @Date: 2019-07-24 16:13:37
 * @LastEditors: xshaobaozi
 * @LastEditTime: 2019-10-31 19:27:09
 */
const MESSAGE = {
    1: 'Hi! This is ',
    2: 'Wake up after ',
    3: 'Eat '
}
function LazyMan(str) {
    function _LazyMan(str) {
        this.printList = [{
            cb: () => {
                console.log(MESSAGE[1] + str);
                this.say();
            }
        }];

        setTimeout(() => {
            this.say();
        }, 0)
        return this
    }
    _LazyMan.prototype.eat = function (str) {
        this.printList.push({
            cb: () => {
                console.log(MESSAGE[3] + str + '~');
                this.say();
            }
        })
        return this;
    }
    _LazyMan.prototype.sleep = function (t) {
        this.printList.push({
            cb: () => {
                setTimeout(() => {
                    console.log(MESSAGE[2] + t)
                    this.say();
                }, t * 1000)
            }
        });
        return this;
    }
    _LazyMan.prototype.say = function (t) {
        const item = this.printList.shift();
        if (item) {
            item.cb && item.cb();
        }
        return this;
    }
    _LazyMan.prototype.sleepFirst = function (t) {
        this.printList.unshift({
            cb: () => {
                setTimeout(() => {
                    console.log(MESSAGE[2] + t)
                    this.say();
                }, t * 1000)
            }
        });
    }
    return new _LazyMan(str)
}

LazyMan('baobao').sleep(5).eat('dinner').eat('supper').sleepFirst(5)



```