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
    _createElementVNode("path", { d: "M11 8C11 10.21 9.21 12 7 12C4.79 12 3 10.21 3 8C3 5.79 4.79 4 7 4C9.21 4 11 5.79 11 8M11 14.72V20H0V18C0 15.79 3.13 14 7 14C8.5 14 9.87 14.27 11 14.72M24 20H13V3H24V20M16 11.5C16 10.12 17.12 9 18.5 9C19.88 9 21 10.12 21 11.5C21 12.88 19.88 14 18.5 14C17.12 14 16 12.88 16 11.5M22 7C20.9 7 20 6.11 20 5H17C17 6.11 16.11 7 15 7V16C16.11 16 17 16.9 17 18H20C20 16.9 20.9 16 22 16V7Z" })
  ]))
}