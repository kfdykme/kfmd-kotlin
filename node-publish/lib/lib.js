'use strict'

const kfmd = require('./kfmd')
const css = require('./css')

const JsCore = kfmd.xyz.kfdykme.kfmd.js.JsCore
/**
 * @method string2mdhtml
 * @params {string} str 输入的文本
 * @return {string} html格式的文本
 * @desc 把string 转化为 html
 */
module.exports.Core = function () {
  return new JsCore
}

module.exports.Css = css
