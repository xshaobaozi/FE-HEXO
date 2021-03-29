---
title: vue-event
date: 2019-07-14 17:54:57
tags:
---
## Vue组建通信
在写Vue页面的时候有时候需要通过事件来处理某些操作,通过事件方式可以更方便的包装我们的组件，通过抽象某种行为，以事件的方式派发出去就可以更好的封装我们的基础组件和组织我们的业务文件
比如

### 父组件与子组件之间的通信

```html
    <!-- parent.vue -->
    <children @hangleEmit="hangleEmit"></children>
```
```javascript
    // child.vue
    handleEmit() {
        this.$emit('hangleEmit');
    }
```

这种方式的调用很熟悉吧 这就是vue常用的事件方式进行的绑定和传递

### 兄弟组件通信
一般来说兄弟组件之间的通信有这么几种方式
1. 通过共同的父组件统一调用
2. 通过evebtBus进行通信
3. 通过vuex进行通信，其实就是共享数据的吧（感觉也不能说是通信）

### 爷孙或者孙孙组件通讯
当然还可以使用依赖注入
```javascript
    // root
    provide: {
        foo: 'foo',
        handle: this.handle
    }

    //children
    inject: ['foo', 'handle']
```
个人感觉深层级的调用应该很少这种场景 如果有的话 请思考一下为什么要这么写 但是如果真的有的话 参照上一方法