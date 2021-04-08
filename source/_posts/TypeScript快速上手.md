---
title: TypeScript快速上手
date: 2021-04-08 11:54:57
tags:
---
以下内容是对于TypeScript的一些基础用法


### 逻辑运算符 & 和 |

```typescript
interface A {
  a: string;
  b: number;
}
type B = {
  c: number;
};

type I1 = A & B; // abc
type I2 = A | B; // ab 或者 c
```

### 基础类型

- number
- string
- boolean
- null
- undefined
- Function
- Array

```typescript
type bool = boolean;
type str = string;
type nul = null;
type undef = undefined;
type fn = Function;
type arr = Array<bool>;

const falsed: bool = true;
const str1: str = "111";
const nul1: nul = null;
const nul2: nul = undefined;
const nul3: undef = null;
const nul4: undef = undefined;
const fn1: fn = () => {};
const arr1: arr = [false];
```

### extends

继承

```typescript
type A = {
  a: number;
};

interface AB extends A {
  b: string;
}
// 与上一种等价
type TAB = A & {
  b: string;
};
```

### 重载

```typescript
function getInfo(nam: string): string;
function getInfo(age: number): number;
function getInfo(str: any): any {
  if (typeof str === "string") {
    return `我叫：` + str;
  } else {
    return `年龄：` + str;
  }
}
```

### 泛型

```typescript
interface UserResponse {
  username: string;
  nickname: string;
  age: number;
  height: number;
}
interface UserRequest {
  userId: number;
}

type Method = "get" | "post" | "put" | "delete";
function fetchUrl<T = any, P = any>(
  url: string,
  method: Method,
  req: T
): Promise<P> {
  return Promise.resolve({} as any);
}

function getUser<T = any, P = any>(req: T): Promise<P> {
  return fetchUrl("api/getUserInfo", "get", req);
}

getUser<UserRequest, UserResponse>({ userId: 1 }).then((res) => {
  console.log(res.username);
});
```

### 抽象 & 继承

```typescript
interface UserParamer {
  name: string;
  sex: "men" | "woman";
}

abstract class User {
  public name: string;
  private sex: UserParamer["sex"];

  constructor({ name, sex }: UserParamer) {
    this.name = name;
    this.sex = sex;
  }
  // 抽象方法
  abstract getName(): string;
  getSex(): UserParamer["sex"] {
    return this.sex;
  }
}

class Men extends User {
  getName() {
    return this.name;
  }
}
```

### void

在 JavaScript 中, function 不返回任何值会隐式返回`undefined`，但是 TypeScript 中不 `undefined`和`void`是两回事

```typescript
    function noop:void() {
        return ;
    }
```

### any

`any`表示可以为任何类型,并且函数逻辑不会校验是否正确

### unknow

`unknow`是可以作为任意值,但是他是安全的,必须断言确定类型才能运行

```typescript
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
  //Object is of type 'unknown'.
}
```

### never

表示函数会达不到终点或者异常

```typescript
function fail(msg: string): never {
  throw new Error(msg);
}
```

### interface 和 type 的区别

- interface 的特点如下：

        同名interface自动聚合，也可以和已有的同名class聚合，适合做polyfill
        自身只能表示object/class/function的类型

- 与 interface 相比，type 的特点如下

        表达功能更强大，不局限于object/class/function
        要扩展已有type需要创建新type，不可以重名
        支持更复杂的类型操作
