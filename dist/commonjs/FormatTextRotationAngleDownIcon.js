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
    _createElementVNode("path", { d: "M14.25 21H10.03L11.44 19.59L2.58 10.73L4.03 9.33L12.84 18.19L14.25 16.78M12.61 8L15.23 10.64L17.43 5.77M19.41 4.92L14.95 16.03L13.5 14.58L14.39 12.38L10.88 8.81L8.68 9.75L7.22 8.25L18.33 3.84Z" })
  ]))
}