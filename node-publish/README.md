# KFMD-Kotlin

这是一个用kotlin写的，可以编译成javascript代码/jar代码的markdown引擎



## HOW TO USE

确保本地有kotlin 和 gradle环境

### Java/Kotlin中使用

``` sh 
# 生成jar包
gradle core:jar

# 引入引入jar包即可
# 生成目录: core/build/libs

```
### 在node使用

#### 安装
``` shell
npm install kfmd -S
```

#### 使用
``` js
const kfmd = require('kfmd')

var a = '# 123 \ndsadas'

var core = kfmd.Core()

var html = core.setContainorClass('demo').trans(a)

console.info(html)
```


### 编译成javascript依赖

``` sh 
gradle buildJs
```
## DONE

- features
    - mardown
    
    - build
        - buildJs
        - buildKotlin

## TODO

- 将gradle脚本提取处理，整理成一个将kotlin项目可选地编译成lib.js/jar文件的gradle 插件
- 完成其他mardkown功能，　这个只需要按照这个[项目](https://github.com/kfdykme/kfmd)重写一遍就好了
- 将编译完的包直接发布到npm和maven的脚本
- 提供多个可选的css模板
