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
    _createElementVNode("path", { d: "M2 4C2 2.9 2.9 2 4 2H8V4H4V8H2V4M22 20C22 21.11 21.11 22 20 22H16V20H20V16H22V20M4 22C2.9 22 2 21.11 2 20V16H4V20H8V22H4M20 2C21.11 2 22 2.9 22 4V8H20V4H16V2H20M9 7V9H11V17H13V9H15V7H9Z" })
  ]))
}