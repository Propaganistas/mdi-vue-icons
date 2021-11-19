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
    _createElementVNode("path", { d: "M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2M12.6 15.8L12 16.3L11.4 15.8C9.4 13.9 8 12.7 8 11.2C8 10 9 9 10.2 9C10.9 9 11.6 9.3 12 9.8C12.4 9.3 13.1 9 13.8 9C15 9 16 9.9 16 11.2C16 12.7 14.6 13.9 12.6 15.8Z" })
  ]))
}