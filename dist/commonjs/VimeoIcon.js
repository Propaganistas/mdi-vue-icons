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
    _createElementVNode("path", { d: "M22,7.42C21.91,9.37 20.55,12.04 17.92,15.44C15.2,19 12.9,20.75 11,20.75C9.85,20.75 8.86,19.67 8.05,17.5C7.5,15.54 7,13.56 6.44,11.58C5.84,9.42 5.2,8.34 4.5,8.34C4.36,8.34 3.84,8.66 2.94,9.29L2,8.07C3,7.2 3.96,6.33 4.92,5.46C6.24,4.32 7.23,3.72 7.88,3.66C9.44,3.5 10.4,4.58 10.76,6.86C11.15,9.33 11.42,10.86 11.57,11.46C12,13.5 12.5,14.5 13.05,14.5C13.47,14.5 14.1,13.86 14.94,12.53C15.78,11.21 16.23,10.2 16.29,9.5C16.41,8.36 15.96,7.79 14.94,7.79C14.46,7.79 13.97,7.9 13.46,8.12C14.44,4.89 16.32,3.32 19.09,3.41C21.15,3.47 22.12,4.81 22,7.42Z" })
  ]))
}