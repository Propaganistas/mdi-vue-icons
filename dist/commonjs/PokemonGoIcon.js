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
    _createElementVNode("path", { d: "M12,2A7,7 0 0,1 19,9C19,10.4 18.59,11.71 17.88,12.8L12,22.21L6.12,12.8C5.41,11.71 5,10.4 5,9A7,7 0 0,1 12,2M12,3.5C9.3,3.5 7.06,5.44 6.59,8H9.17C9.58,6.83 10.69,6 12,6C13.31,6 14.42,6.83 14.83,8H17.41C16.94,5.44 14.7,3.5 12,3.5M12,12C10.69,12 9.58,11.17 9.17,10H6.59C6.72,10.69 6.97,11.34 7.34,11.91V11.91L7.38,12C8.36,13.5 10.06,14.5 12,14.5C13.94,14.5 15.64,13.5 16.62,12L16.66,11.91V11.91C17.03,11.34 17.28,10.69 17.41,10H14.83C14.42,11.17 13.31,12 12,12M12,7.5A1.5,1.5 0 0,0 10.5,9A1.5,1.5 0 0,0 12,10.5A1.5,1.5 0 0,0 13.5,9A1.5,1.5 0 0,0 12,7.5Z" })
  ]))
}