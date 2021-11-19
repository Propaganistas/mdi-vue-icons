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
    _createElementVNode("path", { d: "M20.66 20L13.87 3.81C13.5 2.97 12.93 2.29 12.16 1.77C11.4 1.26 10.55 1 9.61 1C8.77 1 8 1.21 7.3 1.63S6.04 2.62 5.63 3.32 5 4.8 5 5.64L5.03 9H2.03V14.45C2.65 14.17 3.31 14.03 4 14.03V11.03H9C9.57 11.03 10.04 11.23 10.43 11.62C10.82 12 11 12.47 11 13V20.03H8.91C8.76 20.75 8.44 21.41 7.97 22H13V13C13 12.28 12.8 11.62 12.45 11S11.61 9.91 11 9.56C10.42 9.2 9.75 9 9 9H7V5.64C7 4.92 7.25 4.31 7.76 3.79S8.89 3 9.61 3C10.14 3 10.63 3.16 11.06 3.46S11.81 4.14 12 4.61L18.46 20L16 20.03V22H23V20.03L20.66 20M4 18C4.55 18 5 18.45 5 19S4.55 20 4 20 3 19.55 3 19 3.45 18 4 18M4 16C2.34 16 1 17.34 1 19S2.34 22 4 22 7 20.66 7 19 5.66 16 4 16Z" })
  ]))
}