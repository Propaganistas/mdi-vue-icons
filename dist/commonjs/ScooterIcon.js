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
    _createElementVNode("path", { d: "M7.82 19H15V18C15 15.79 16.79 14 19 14H19.74L17.84 5.56C17.63 4.65 16.82 4 15.89 4H12V6H15.89L17.29 12.25H17.28C15.12 12.9 13.47 14.73 13.09 17H7.82C7.34 15.66 5.96 14.76 4.4 15.06C3.22 15.29 2.27 16.26 2.05 17.44C1.7 19.34 3.16 21 5 21C6.3 21 7.4 20.16 7.82 19M5 19C4.45 19 4 18.55 4 18S4.45 17 5 17 6 17.45 6 18 5.55 19 5 19M19 15C17.34 15 16 16.34 16 18S17.34 21 19 21 22 19.66 22 18 20.66 15 19 15M19 19C18.45 19 18 18.55 18 18S18.45 17 19 17 20 17.45 20 18 19.55 19 19 19Z" })
  ]))
}