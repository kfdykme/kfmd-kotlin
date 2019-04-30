# KFMD-Kotlin

这是一个用kotlin写的，可以编译成javascript代码/jar代码的markdown引擎

## HOW TO USE

确保本地有kotlin 和 gradle环境

### 编译成jar

./gradlew buildKotlin

生成目录
out/kfmd

### 编译成javascript依赖

./gradlew buildJs

生成目录
out/js/lib.js

### 使用

等我完善之后再写这个

## DONE

- features
    - mardown
        - list
    - build
        - buildJs
        - buildKotlin

## TODO

- 将gradle脚本提取处理，整理成一个将kotlin项目可选地编译成lib.js/jar文件的gradle 插件
- 完成其他mardkown功能，　这个只需要按照这个[项目](https://github.com/kfdykme/kfmd)重写一遍就好了
- 将编译完的包直接发布到npm和maven
