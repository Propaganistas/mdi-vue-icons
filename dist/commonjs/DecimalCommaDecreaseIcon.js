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
    _createElementVNode("path", { d: "M5 13V16H4L3 13A1 1 0 0 1 5 13M15 16V14L12 17L15 20V18H21V16M12 11A3 3 0 0 1 6 11V8A3 3 0 0 1 12 8M10 8A1 1 0 0 0 8 8V11A1 1 0 0 0 10 11Z" })
  ]))
}