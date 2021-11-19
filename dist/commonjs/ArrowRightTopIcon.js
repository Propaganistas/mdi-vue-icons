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
    _createElementVNode("path", { d: "M20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5V20H4V13.5C4 9.91 6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8Z" })
  ]))
}