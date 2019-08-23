const kfmd = require('kfmd')

var a = '# 123 \ndsadas'

var core = kfmd.Core()

var html = core.setContainorClass('demo').trans(a)

console.info(html)