
const {Core, Css} = require('../src/index')
const fs = require('fs')

var core = Core()
var result = fs.readFileSync('./test/test.md') + ''

var html = core.setContainorClass("kfmd-containor")
              .trans(result)
html = html + '<style>\n' + Css.base() + '\n</style>'
console.info(fs.writeFileSync('./index.html', html))
