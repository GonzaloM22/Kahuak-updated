"use strict";
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 4090:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useIndumentaria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1194);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useIndumentaria__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_useIndumentaria__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Producto = ({ producto  })=>{
    const { handleChangeModal  } = (0,_hooks_useIndumentaria__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { nombre , imagen  } = producto;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "shadow rounded-md p-3 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: imagen,
                width: 500,
                height: 500,
                alt: "Producto",
                className: "object-cover md:w-96 md:h-96 "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-xl font-semibold",
                    children: nombre
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "w-full bg-amber-500/70 p-3 hover:text-zinc-900 hover:bg-amber-500/90 text-white cursor-pointer rounded-sm transition ease-in duration-300 uppercase shadow-md font-semibold tracking-widest text-xs",
                onClick: ()=>{
                    handleChangeModal(producto);
                },
                children: "Consultar"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Producto);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;