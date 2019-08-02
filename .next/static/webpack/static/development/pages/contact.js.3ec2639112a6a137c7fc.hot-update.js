webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _this = undefined,
    _jsxFileName = "/home/superpim/Documents/personalwebsite-next/pages/contact.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    className: "form",
    onSubmit: function onSubmit(e) {
      return _this.submitForm(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "exampleEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "email",
    name: "email",
    id: "exampleEmail",
    placeholder: "iemand@iets.nl",
    valid: emailState === 'has-success',
    invalid: emailState === 'has-danger',
    onChange: function onChange(e) {
      validateEmail(e);
      handleChange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormFeedback"], {
    valid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "That's a tasty looking email you've got there."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormFeedback"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Uh oh! Looks like there is an issue with your email. Please input a correct email."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Your username is most likely your email.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "exampleText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Text Area"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "textarea",
    name: "text",
    id: "exampleText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Submit")));
});

function validateEmail(e) {
  var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var validate = this.state.validate;

  if (emailRex.test(e.target.value)) {
    validate.emailState = 'has-success';
  } else {
    validate.emailState = 'has-danger';
  }

  this.setState({
    validate: validate
  });
}

function handleChange(_x) {
  return _handleChange.apply(this, arguments);
}

function _handleChange() {
  _handleChange = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
    var target, value, name;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            target = event.target;
            value = target.type === 'checkbox' ? target.checked : target.value;
            name = target.name;
            _context.next = 5;
            return this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _handleChange.apply(this, arguments);
}

function submitForm(e) {
  e.preventDefault();
  console.log("Email: ".concat(this.state.email));
}

/***/ })

})
//# sourceMappingURL=contact.js.3ec2639112a6a137c7fc.hot-update.js.map