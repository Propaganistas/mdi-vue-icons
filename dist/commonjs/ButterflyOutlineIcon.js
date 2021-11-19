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
    _createElementVNode("path", { d: "M13 21H11V6L9.03 3.97L10 3L12 5L14 3L15 4L13 6V21M14 9H14V7C14.84 6.37 15.88 6 17 6C19.76 6 22 8.24 22 11C22 12.64 21.21 14.09 20 15H20V17C20 19.21 18.21 21 16 21C15.27 21 14.59 20.81 14 20.46V18.46C14.59 18.81 15.27 19 16 19C17.1 19 18 18.1 18 17V13.83C19.17 13.42 20 12.31 20 11C20 9.35 18.67 8 17 8H17C15.88 8 14.84 8.37 14 9M10 9H10C9.16 8.37 8.13 8 7 8H7C5.33 8 4 9.35 4 11C4 12.31 4.84 13.42 6 13.83V17C6 18.1 6.9 19 8 19C8.73 19 9.41 18.81 10 18.46V20.46C9.41 20.81 8.73 21 8 21C5.79 21 4 19.21 4 17V15H4C2.79 14.09 2 12.64 2 11C2 8.24 4.24 6 7 6C8.13 6 9.16 6.37 10 7V9M9 11L7.5 9.5L6 11L7.5 12.5L9 11M18 11L16.5 9.5L15 11L16.5 12.5L18 11Z" })
  ]))
}