"use strict";
(() => {
var exports = {};
exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 4105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(660);

function handler(req, res) {
    const { postsId  } = req.query;
    const { Posts  } = _data__WEBPACK_IMPORTED_MODULE_0__["default"];
    if (postsId) {
        const post = Posts.find((value)=>value.id == postsId);
        return res.status(200).json(post);
    }
    return res.status(404).json({
        error: "Post not found"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [582], () => (__webpack_exec__(4105)));
module.exports = __webpack_exports__;

})();