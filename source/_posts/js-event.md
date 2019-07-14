---
title: js-event
date: 2019-07-14 19:40:00
tags:
---
## JS实现Event功能
写vue代码写多了 对事件这种东西也有一定了解了 
所有试着实现一套event 顺便谢谢class（太久没用都忘记怎么写了）

设计之初先考虑暴露的api
```javascript
    // 通过on监听事件
    event.prototype.on = function(){}
    // 通过once监听并只触发一次事件
    event.prototype.once = function(){}
    // 通过remove移除事件
    event.prototype.remove = function(){}
    // 通过emit触发事件
    event.prototype.emit = function(){}
```

内部通过定义一个字段保存事件的队列，支持on多个事件，通过emit按顺序触发队列和传递参数
简单实现了一下 貌似也能用=。= 
可能也有些情况没考虑吧 比如想移除指定的callback 错误传参的判定之类
有机会再写吧😬
```javascript
    class Event {
        constructor(){
            this.emitList = {};
            this.onceList = [];
        }

        on(name, fn) {
            this.setEvent.call(this,name, fn);
        }

        once(name, fn) {
            this.setEvent.call(this,name, fn);
            this.onceList.push(name)
        }

        remove(name) {
            delete this.emitList[name]
        }

        emit(name, params) {
            if (!this.emitList[name]) return console.log(`----- no ${name}-----`);


            this.emitList[name].forEach(item => item(params));

            if (this.onceList.findIndex(item => item === name) > -1) this.remove(name);
        }
    }
    
    function setEvent(name, fn) {
        const fnList = this.emitList[name];
        if (!fnList) {
            this.emitList[name] = [fn];
        }
        else {
            fnList.push(fn);
        }
    }
```