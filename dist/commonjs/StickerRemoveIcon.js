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
    _createElementVNode("path", { d: "M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M12 13.4L9.9 15.5L8.5 14.1L10.6 12L8.5 9.9L9.9 8.5L12 10.6L14.1 8.5L15.5 9.9L13.4 12L15.5 14.1L14.1 15.5L12 13.4M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z" })
  ]))
}