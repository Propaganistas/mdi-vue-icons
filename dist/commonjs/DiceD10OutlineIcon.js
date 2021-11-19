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
    _createElementVNode("path", { d: "M10.5 16H9V10.21L7.22 10.76V9.53L10.36 8.41H10.5V16M14.07 8.21C15.5 8.21 16.64 9.36 16.64 10.78V13.42C16.64 14.84 15.5 16 14.07 16C12.64 16 11.5 14.84 11.5 13.42V10.78C11.5 9.36 12.65 8.21 14.07 8.21M14.06 9.65C13.47 9.65 13 10.13 13 10.71V13.5C13 14.07 13.47 14.54 14.06 14.54C14.64 14.54 15.14 14.06 15.14 13.5V10.71C15.14 10.12 14.64 9.65 14.06 9.65M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12Z" })
  ]))
}