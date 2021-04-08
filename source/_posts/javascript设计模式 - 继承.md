---
title: javascript设计模式 - 继承
date: 2021-04-04 20:54:57
tags:
---
### 继承

#### 类式继承

```javascript
// 原型继承
function SuperClass() {
    console.log('SuperClass构造函数');
    this.list = [1,2];
}

function SubClass() {
    console.log('SubClass构造函数');
}
SubClass.prototype = new SuperClass();

var instance1 = new SubClass();
var instance2 = new SubClass();
instance1.list.push(3);

console.log(instance1.list); // [ 1, 2, 3 ]
console.log(instance2.list); // [ 1, 2, 3 ]

```



缺点:

​	instalce1 和 instance2互相影响了



#### 构造函数继承

```javascript
// 原型继承
function SuperClass() {
    console.log('SuperClass构造函数');
    this.list = [1, 2];
}

function SubClass() {
    console.log('SubClass构造函数');
    SuperClass.call(this, null);
}

var instance1 = new SubClass();
var instance2 = new SubClass();
instance1.list.push(3);

console.log(instance1.list);//[ 1, 2, 3 ]
console.log(instance2.list);// [ 1, 2 ]
```

缺点:

​	子类没有继承父类的方法



#### 组合继承

```javascript
// 原型继承
function SuperClass() {
    console.log('SuperClass构造函数');
    this.list = [1, 2];
}

function SubClass() {
    console.log('SubClass构造函数');
    SuperClass.call(this, null);
}
SubClass.prototype = new SuperClass();

var instance1 = new SubClass();
var instance2 = new SubClass();
instance1.list.push(3);

console.log(instance1.list);//[ 1, 2, 3 ]
console.log(instance2.list);// [ 1, 2 ]
```

缺点:

​	父类构造函数执行了多次



#### 原型式继承

```javascript
const book = {
    name: '书名',
    list: [1,2,3]
};

function inheritObject(o) {
    function F() { };
    F.prototype = o;
    return new F();
}

const book1 = inheritObject(book);


const book2 = inheritObject(book);
book2.list.push(3);


console.log(book1.list);//[ 1, 2, 3, 3 ]
console.log(book2.list);//[ 1, 2, 3, 3 ]
```

缺点:

​	引用类型互相影响



#### 寄生继承

```javascript
const book = {
    name: '书名',
    list: [1,2,3]
};

function inheritObject(o) {
    function F() { };
    F.prototype = o;
    return new F();
}

function createBook(obj) {
    let o = new inheritObject(obj);
    o.getList = function() {
        return this.list;
    }
    return o;
}
const book1 = createBook(book);


const book2 = createBook(book);
book2.list.push(3);


console.log(book1.getList()); // [ 1, 2, 3, 3 ]
console.log(book2.list); // [ 1, 2, 3, 3 ]
```



#### 寄生组合式继承

```javascript
function SuperClass() {
    this.list = [1,2,3];
}

function SubClass() {
    SuperClass.call(this, null);
}

function inheritObject(o) {
    function F() { };
    F.prototype = o;
    return new F();
}

function inheritPrototype(subCls, superCls) {
    let p = inheritObject(superCls.prototype);
    p.constructor = subCls;
    subCls.prototype = p;
}
inheritPrototype(SubClass, SuperClass);
const book1 = new SubClass();
const book2 = new SubClass();


book2.list.push(3);


console.log(book1.list);// [ 1, 2, 3 ]
console.log(book2.list);// [ 1, 2, 3, 3 ]
```



#### 单继承

```javascript
let extend = function(target, source) {
    for(let prototype in source) {
        target[prototype] = source[prototype];
    }
    return target;
}

const book1 = {
    name: '11',
    list: [1,2,3]
}
const book2 = {
    color: 'bok2'
}
extend(book1, book2);
console.log(book1.color)// bok2
```

