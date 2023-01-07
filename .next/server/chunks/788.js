"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 3475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function Author() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "author flex py-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: "/image/author.png",
                alt: "",
                className: "rounded-full",
                width: 50,
                height: 50
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col justify-center py-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "text-sm font-bold text-gray-700 hover:text-gray-600 ml-2 ",
                        children: "Paimon"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Author);


/***/ }),

/***/ 1858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function Error() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-center py-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl font-bold text-orange-600 py-10",
                children: "Something Went Wrong"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/images/not_found.png",
                width: 400,
                height: 400,
                alt: ""
            })
        ]
    });
}


/***/ }),

/***/ 4566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Spinner() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center py-14",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "loader"
        })
    });
}


/***/ }),

/***/ 5529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ format)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__(924);
;// CONCATENATED MODULE: ./components/newslater.tsx


function Newlater() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-gray-100 mt-20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto md:px-20 py-16 text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "font-bold text-3xl",
                    children: "SUBCRIBLE"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "py-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "shadow border rounded-2xl w-9/12 py-3 text-gray-700 focus:outline-none focus:shadow-slate-400",
                        placeholder: "Enter your email"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "bg-orange-400 px-20 py-3 rounded-full text-gray-100",
                    children: "Subcribe"
                })
            ]
        })
    });
}
/* harmony default export */ const newslater = (Newlater);

;// CONCATENATED MODULE: ./components/footer.tsx





function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-gray-100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(newslater, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto flex justify-center py-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "py-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex gap-6 justify-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(im_.ImFacebook2, {
                                            color: "#888888"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(im_.ImTwitter, {
                                            color: "#888888"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(im_.ImYoutube, {
                                            color: "#888888"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "py-5 text-gray-400",
                            children: "Copyright @2023 Allright"
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/header.tsx




function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "bg-gray-100",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Search",
                        className: "input-text"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "shrink w-80 sm:order-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "font-serif font-bold text-3xl ",
                        children: "Design"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-96 order-3 flex justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(im_.ImFacebook2, {
                                        color: "#888888"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(im_.ImTwitter, {
                                        color: "#888888"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(im_.ImYoutube, {
                                        color: "#888888"
                                    }),
                                    " "
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./layout/format.tsx





function Format({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Blog"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}
/* harmony default export */ const format = (Format);


/***/ }),

/***/ 9633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ fetcher)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const response = (url)=>fetch(url).then((res)=>res.json());
const URL = "http://localhost:3000/";
function fetcher(endpoint) {
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(`${URL}${endpoint}`, response);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;