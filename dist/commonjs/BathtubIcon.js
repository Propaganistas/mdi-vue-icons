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
    _createElementVNode("path", { d: "M7 5C8.11 5 9 5.9 9 7S8.11 9 7 9 5 8.11 5 7 5.9 5 7 5M20 13V4.83C20 3.27 18.73 2 17.17 2C16.42 2 15.7 2.3 15.17 2.83L13.92 4.08C13.76 4.03 13.59 4 13.41 4C13 4 12.64 4.12 12.33 4.32L15.09 7.08C15.29 6.77 15.41 6.4 15.41 6C15.41 5.82 15.38 5.66 15.34 5.5L16.59 4.24C16.74 4.09 16.95 4 17.17 4C17.63 4 18 4.37 18 4.83V13H11.15C10.85 12.79 10.58 12.55 10.33 12.28L8.93 10.73C8.74 10.5 8.5 10.35 8.24 10.23C7.93 10.08 7.59 10 7.24 10C6 10 5 11 5 12.25V13H2V19C2 20.1 2.9 21 4 21C4 21.55 4.45 22 5 22H19C19.55 22 20 21.55 20 21C21.1 21 22 20.1 22 19V13H20Z" })
  ]))
}