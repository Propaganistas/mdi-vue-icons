const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", { d: "M20.22,2.5L2.5,20.22L3.77,21.5L8.65,16.62C11.76,19.43 15.81,21 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C12.06,16.8 11,16.06 10.06,15.21L21.5,3.77L20.22,2.5M4,3A1,1 0 0,0 3,4C3,7.57 4.14,11.05 6.24,13.94L7.66,12.5C7.28,11.97 6.93,11.39 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4Z" })
  ]))
}