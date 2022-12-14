"use strict";
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 3772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "e": () => (/* binding */ IndumentariaProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const IndumentariaContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const IndumentariaProvider = ({ children  })=>{
    const [trabajos, setTrabajos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [productos, setProductos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [producto, setProducto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const getTrabajos = async ()=>{
        const { data  } = await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])("http://162.159.24.201/api/productos/api/trabajos");
        setTrabajos(data);
    };
    const getProductos = async ()=>{
        const { data  } = await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])("http://162.159.24.201/api/productos/api/productos");
        setProductos(data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getTrabajos();
        getProductos();
    }, []);
    const handleChangeModal = (producto)=>{
        setProducto(producto);
        setModal(!modal);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IndumentariaContext.Provider, {
        value: {
            productos,
            trabajos,
            modal,
            producto,
            handleChangeModal
        },
        children: children
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndumentariaContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;