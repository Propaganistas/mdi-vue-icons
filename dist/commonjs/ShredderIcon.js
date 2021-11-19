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
    _createElementVNode("path", { d: "M6,3V7H8V5H16V7H18V3H6M5,8A3,3 0 0,0 2,11V17H5V14H19V17H22V11A3,3 0 0,0 19,8H5M18,10A1,1 0 0,1 19,11A1,1 0 0,1 18,12A1,1 0 0,1 17,11A1,1 0 0,1 18,10M7,16V21H9V16H7M11,16V20H13V16H11M15,16V21H17V16H15Z" })
  ]))
}