---
title: Webpack相关知识
date: 2021-02-01 20:45:01
tags:
---

## webpack配置参数

* entry

    __入口起点(entry point)__指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

* output

    可以通过配置 output 选项，告知 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个 entry 起点，但只能指定一个 output 配置。

* loader

    loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

* mode

    通过选择 development, production 或 none 之中的一个，来设置 mode 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 production

* plugin

    __插件__是 webpack 的 支柱 功能。webpack 自身也是构建于你在 webpack 配置中用到的__相同的插件系统__之上！插件目的在于解决 loader 无法实现的其他事。

## compile hook

Compiler 模块是 webpack 的主要引擎，它通过 CLI 传递的所有选项， 或者 Node API，创建出一个 compilation 实例。 它扩展(extend)自 Tapable 类，用来注册和调用插件。 大多数面向用户的插件会首先在 Compiler 上注册

* beforeRun

    在开始执行一次构建之前调用，compiler.run 方法开始执行后立刻进行调用。

* run

    在开始读取 records 之前调用

* beforeCompile 

    在创建 compilation parameter 之后执行

* compile

    beforeCompile 之后立即调用，但在一个新的 compilation 创建之前

* make

    compilation 结束之前执行

##  compilation hook

Compilation 模块会被 Compiler 用来创建新的 compilation 对象（或新的 build 对象）。 compilation 实例能够访问所有的模块和它们的依赖（大部分是循环依赖）。 它会对应用程序的依赖图中所有模块， 进行字面上的编译(literal compilation)。 在编译阶段，模块会被加载(load)、封存(seal)、优化(optimize)、 分块(chunk)、哈希(hash)和重新创建(restore)。

* seal

    compilation 对象停止接收新的模块时触发

## 区分module vendor chunk

## webpack构建打包优化

## Babel

* @babel/parse

* @babel/traverse

* @babel/core 
    transformFromAst