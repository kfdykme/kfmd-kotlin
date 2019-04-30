var JsCore = require('../src/index.js')
const fs = require('fs')

console.info(fs.readFileSync)
var result = fs.readFileSync('./test/test.md') + ''
var html = new JsCore().trans(result)
// html = html + '<style>\n' + kfmd.css.base() + '\n</style>'
console.info(fs.writeFileSync('./index.html', html))
