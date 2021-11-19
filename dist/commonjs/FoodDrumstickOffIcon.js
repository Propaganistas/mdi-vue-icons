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
    _createElementVNode("path", { d: "M20.8 22.7L13.6 15.5C13.3 15.7 13 15.9 12.7 16.2C11.6 17.3 9.8 17.3 8.7 16.2L7.7 15.2C6.6 14.1 6.6 12.3 7.8 11.2C8 11 8.2 10.7 8.4 10.4L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M8.1 16.9L7.1 15.9C6.9 15.7 6.8 15.5 6.6 15.3L4.1 17.7C3.5 17.4 2.9 17.5 2.4 18C1.8 18.6 1.8 19.5 2.4 20.1C2.7 20.4 3 20.5 3.4 20.5C3.4 20.9 3.6 21.2 3.8 21.5C4.4 22.1 5.3 22.1 5.9 21.5C6.4 21 6.5 20.4 6.2 19.8L8.7 17.4C8.5 17.3 8.3 17.1 8.1 16.9M20.2 12.7C23 9.9 22.6 5.2 19.1 3C17.1 1.7 14.4 1.7 12.4 3C11 3.9 10.1 5.1 9.7 6.5L17.5 14.3C18.5 14 19.4 13.5 20.2 12.7Z" })
  ]))
}