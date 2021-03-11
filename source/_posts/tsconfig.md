---
title: tsconfig
date: 2021-03-11 17:00:57
tags:
---
> 前言

由于项目中vscode的跳转出现问题,查找了一下原因发现是因为没有tsconfig导致跳转失败的,所以查阅了一下文档并记录下来。

通过查找发现是需要通过配置`basrUrl` 和 `paths`设置函数的跳转

> ## TSConfig介绍

目录中的 TSConfig 文件表明该目录是 TypeScript 或 JavaScript 项目的根目录。 TSConfig 文件可以是 `tsconfig.json` 或 `jsconfig.json`，它们的配置项和行为相同。



```json
{
  "compilerOptions": {
    "target": "esnext", 
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.vue"
  ],
  "exclude": [
    "node_modules"
  ]
}

```



>  target

现代浏览器支持全部 ES6 的功能，所以 `ES6` 是一个不错的选择。 如果你的代码部署在旧的环境中，你可以选择设置一个更低的目标；如果你的代码保证会运行在新的环境中，你可以选择一个更高的目标。

`target` 的配置将会改变哪些 JS 特性会被降级，而哪些会被完整保留 例如，如果 `target` 是 ES5 或更低版本，箭头函数 `() => this` 会被转换为等价的 `函数` 表达式。

改变 `target` 也会改变 [`lib`](https://www.typescriptlang.org/zh/tsconfig#lib) 选项的默认值。 你可以根据需要混搭 `target` 和 `lib` 的配置，你也可以为了方便只设置 `target`。

特殊的 `ESNext` 值代表你的 TypeScript 所支持的最高版本。这个配置应当被谨慎使用，因为它在不同的 TypeScript 版本之间的含义不同，并且会导致升级更难预测。



> module

设置程序的模块系统。在 [模块](https://www.typescriptlang.org/docs/handbook/modules.html) 参考页面获取更多信息。你很可能要用 `"CommonJS"`。



> strict

大概大概意思就是开启严格模式保证代码的安全

The `strict` flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. Turning this on is equivalent to enabling all of the *strict mode family* options, which are outlined below. You can then turn off individual strict mode family checks as needed.

Future versions of TypeScript may introduce additional stricter checking under this flag, so upgrades of TypeScript might result in new type errors in your program. When appropriate and possible, a corresponding flag will be added to disable that behavior.

> JSX

控制 JSX 在 JavaScript 文件中的输出方式。 这只影响 `.tsx` 文件的 JS 文件输出。

- `react`: 将 JSX 改为等价的对 `React.createElement` 的调用并生成 `.js` 文件。
- `react-jsx`: 改为 `__jsx` 调用并生成 `.js` 文件。
- `react-jsxdev`: 改为 `__jsx` 调用并生成 `.js` 文件。
- `preserve`: 不对 JSX 进行改变并生成 `.jsx` 文件。
- `react-native`: 不对 JSX 进行改变并生成 `.js` 文件

>  importHelpers

对于某些降级行为，TypeScript 使用一些辅助代码来进行操作。例如继承类，展开数组或对象，以及异步操作。 默认情况下，这些辅助代码被插入到使用它们的文件中。 如果在许多不同的模块中使用相同的辅助代码，则可能会导致代码重复。

如果启用了 `importHelpers` 选项，这些辅助函数将从 [tslib](https://www.npmjs.com/package/tslib) 中被导入。 你需要确保 `tslib` 模块在运行时可以被导入。 这只影响模块，全局脚本文件不会尝试导入模块。

> experimentalDecorators

启动装饰器的支持

Enables [experimental support for decorators](https://github.com/tc39/proposal-decorators), which is in stage 2 of the TC39 standardization process.

Decorators are a language feature which hasn’t yet been fully ratified into the JavaScript specification. This means that the implementation version in TypeScript may differ from the implementation in JavaScript when it it decided by TC39.

You can find out more about decorator support in TypeScript in [the handbook](https://www.typescriptlang.org/docs/handbook/decorators.html).

> skipLibCheck

跳过文字定义分析

> esModuleInterop

默认情况下（未设置 `esModuleInterop` 或值为 false），TypeScript 像 ES6 模块一样对待 CommonJS/AMD/UMD。这样的行为有两个被证实的缺陷：

- 形如 `import * as moment from "moment"` 这样的命名空间导入等价于 `const moment = require("moment")`
- 形如 `import moment from "moment"` 这样的默认导入等价于 `const moment = require("moment").default`

这种错误的行为导致了这两个问题：

- ES6 模块规范规定，命名空间导入（`import * as x`）只能是一个对象。TypeScript 把它处理成 `= require("x")` 的行为允许把导入当作一个可调用的函数，这样不符合规范。
- 虽然 TypeScript 准确实现了 ES6 模块规范，但是大多数使用 CommonJS/AMD/UMD 模块的库并没有像 TypeScript 那样严格遵守。

开启 `esModuleInterop` 选项将会修复 TypeScript 转译中的这两个问题。第一个问题通过改变编译器的行为来修复，第二个问题则由两个新的工具函数来解决，它们提供了确保生成的 JavaScript 兼容性的适配层



> baseUrl

可以让您设置解析非绝对路径模块名时的基准目录。

你可以定义一个根目录，以进行绝对路径文件解析。例如：

```
baseUrl
├── ex.ts
├── hello
│   └── world.ts
└── tsconfig.json
```

在这个项目中被配置为 `"baseUrl": "./"`，TypeScript 将会从首先寻找与 `tsconfig.json` 处于相同目录的文件。

```
import { helloWorld } from "hello/world";

console.log(helloWorld);
```

当你厌倦了导入文件时总是 `"../"` 或 `"./"`，或需要在移动文件时更改路径，这是一个很好的解决方法。



> Paths

一些将模块导入重新映射到相对于 `baseUrl` 路径的配置。[手册](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)中有更多关于 `paths` 的内容。

`paths` 可以允许你声明 TypeScript 应该如何解析你的 `require`/`import`。

```
{
  "compilerOptions": {
    "baseUrl": ".", // this must be specified if "paths" is specified.
    "paths": {
      "jquery": ["node_modules/jquery/dist/jquery"] // this mapping is relative to "baseUrl"
    }
  }
}
```

这将使你可以写 `import "jquery"`，并且在本地获得所有正确的类型。

```
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
        "app/*": ["app/*"],
        "config/*": ["app/_config/*"],
        "environment/*": ["environments/*"],
        "shared/*": ["app/_shared/*"],
        "helpers/*": ["helpers/*"],
        "tests/*": ["tests/*"]
    },
}
```

这种情况下，你可以告诉 TypeScript 文件解析器支持一些自定义的前缀来寻找代码。 这种模式可以避免在你的代码中出现过长的相对路径。