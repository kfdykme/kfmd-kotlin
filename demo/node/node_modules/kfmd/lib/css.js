'use strict'

module.exports.base = function () {
return 'h1, h2, h3, h4, h5, h6, li, p {\n  color: #333333;\n}\n\nh1 {\n  font-size: 24px;\n}\n\nh2 {\n  padding-left: 4px;\n}\n\nh3, h4, h5 {\n  padding-left: 8px;\n}\n\nul, ol {\n  /* list-style-type: none; */\n}\n\nblockquote {\n}\n\nblockquote p {\n  background-color: #dddddd;\n  color: #333333;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n\na {\n  text-decoration: none;\n  color: #11819e;\n}\n\n.kfmd-containor {\n  padding: 16px;\n}\n';
}
