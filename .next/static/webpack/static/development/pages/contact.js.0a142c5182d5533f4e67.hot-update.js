webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/home/superpim/Documents/personalwebsite-next/components/Header.js";



 // import img from '../static/achtergrond.png'


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Pim van Helvoirt' : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    charSet: "UTF-8",
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "description",
    content: "Persoonlijke website van mij",
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "author",
    content: "Pim van Helvoirt",
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title), "// Latest compiled and minified CSS", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), "// jQuery library", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
    src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "// Popper JS", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), "// Latest compiled JavaScript", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    className: "jsx-478220800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-478220800" + " " + "jumbo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Jumbotron"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    tabs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    });
  })), children, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "478220800",
    __self: this
  }, "h1,a{font-family:'Arial';}ul{padding:0;}li{list-style:none;margin:5px 0;}a{-webkit-text-decoration:none;text-decoration:none;color:blue;}a:hover{opacity:0.6;}.jumbo{background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1cGVycGltL0RvY3VtZW50cy9wZXJzb25hbHdlYnNpdGUtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzJCLEFBSWlDLEFBSVYsQUFHTSxBQUlLLEFBS1QsQUFLakIsVUFoQkMsRUFZQSxJQVRpQixJQVBqQixDQW9CQSxRQVpBLHFCQUdlLFdBQ2YiLCJmaWxlIjoiL2hvbWUvc3VwZXJwaW0vRG9jdW1lbnRzL3BlcnNvbmFsd2Vic2l0ZS1uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IGltZyBmcm9tICcuLi9zdGF0aWMvYWNodGVyZ3JvbmQucG5nJ1xuaW1wb3J0IHsgSnVtYm90cm9uLCBDb250YWluZXIsIE5hdiwgTmF2SXRlbSwgTmF2TGluaywgQ2FyZCxcbiAgICAgICAgIEJ1dHRvbiwgQ2FyZFRpdGxlLCBDYXJkVGV4dCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtjaGlsZHJlbiwgdGl0bGU9J1BpbSB2YW4gSGVsdm9pcnQnfSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cblxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQZXJzb29ubGlqa2Ugd2Vic2l0ZSB2YW4gbWlqXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiUGltIHZhbiBIZWx2b2lydFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cblxuICAgICAgICAgICAgLy8gTGF0ZXN0IGNvbXBpbGVkIGFuZCBtaW5pZmllZCBDU1NcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI+PC9saW5rPlxuXG4gICAgICAgICAgICAvLyBqUXVlcnkgbGlicmFyeVxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjQuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgICAgIC8vIFBvcHBlciBKU1xuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNC43L3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgICAgIC8vIExhdGVzdCBjb21waWxlZCBKYXZhU2NyaXB0XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm9cIiA+XG4gICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkPlxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxOYXYgdGFicz5cblxuICAgICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICA8L05hdj5cblxuICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgICAgICBoMSwgYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG5cbiAgICAgICAgLmp1bWJvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZFxuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgaWQ6ICcvJywgdGl0bGU6ICdIb21lJ30sXG4gICAgICAgIHsgaWQ6ICcvY29udGFjdCcsIHRpdGxlOiAnQ29udGFjdCd9LFxuICAgICAgICB7IGlkOiAnL2Fib3V0JywgdGl0bGU6ICdBYm91dCd9XG4gICAgXTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcblxuICAgIDxOYXZJdGVtPlxuICAgICAgICA8TmF2TGluayBocmVmPXtgJHtwb3N0LmlkfWB9ID57cG9zdC50aXRsZX08L05hdkxpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9OYXZJdGVtPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/home/superpim/Documents/personalwebsite-next/components/Header.js */"));
});

function getPosts() {
  return [{
    id: '/',
    title: 'Home'
  }, {
    id: '/contact',
    title: 'Contact'
  }, {
    id: '/about',
    title: 'About'
  }];
}

var PostLink = function PostLink(_ref2) {
  var post = _ref2.post;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, post.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1264763938",
    __self: this
  }, "li.jsx-1264763938{list-style:none;margin:5px 0;}a.jsx-1264763938{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1264763938:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1cGVycGltL0RvY3VtZW50cy9wZXJzb25hbHdlYnNpdGUtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RmdCLEFBRzJCLEFBS0ssQUFNVCxZQUNoQixJQVhpQixhQUNqQixxQkFJZSxXQUNTLG9CQUN4QiIsImZpbGUiOiIvaG9tZS9zdXBlcnBpbS9Eb2N1bWVudHMvcGVyc29uYWx3ZWJzaXRlLW5leHQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgaW1nIGZyb20gJy4uL3N0YXRpYy9hY2h0ZXJncm9uZC5wbmcnXG5pbXBvcnQgeyBKdW1ib3Ryb24sIENvbnRhaW5lciwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rLCBDYXJkLFxuICAgICAgICAgQnV0dG9uLCBDYXJkVGl0bGUsIENhcmRUZXh0LCBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe2NoaWxkcmVuLCB0aXRsZT0nUGltIHZhbiBIZWx2b2lydCd9KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBlcnNvb25saWprZSB3ZWJzaXRlIHZhbiBtaWpcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJQaW0gdmFuIEhlbHZvaXJ0XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cblxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuXG4gICAgICAgICAgICAvLyBMYXRlc3QgY29tcGlsZWQgYW5kIG1pbmlmaWVkIENTU1xuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIj48L2xpbms+XG5cbiAgICAgICAgICAgIC8vIGpRdWVyeSBsaWJyYXJ5XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNC4xL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgICAgLy8gUG9wcGVyIEpTXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE0LjcvdW1kL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgICAgLy8gTGF0ZXN0IGNvbXBpbGVkIEphdmFTY3JpcHRcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib1wiID5cbiAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQ+XG4gICAgICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE5hdiB0YWJzPlxuXG4gICAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgIDwvTmF2PlxuXG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuXG4gICAgICAgIGgxLCBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICAuanVtYm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgeyBpZDogJy8nLCB0aXRsZTogJ0hvbWUnfSxcbiAgICAgICAgeyBpZDogJy9jb250YWN0JywgdGl0bGU6ICdDb250YWN0J30sXG4gICAgICAgIHsgaWQ6ICcvYWJvdXQnLCB0aXRsZTogJ0Fib3V0J31cbiAgICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuXG4gICAgPE5hdkl0ZW0+XG4gICAgICAgIDxOYXZMaW5rIGhyZWY9e2Ake3Bvc3QuaWR9YH0gPntwb3N0LnRpdGxlfTwvTmF2TGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L05hdkl0ZW0+XG4pO1xuIl19 */\n/*@ sourceURL=/home/superpim/Documents/personalwebsite-next/components/Header.js */"));
};

/***/ })

})
//# sourceMappingURL=contact.js.0a142c5182d5533f4e67.hot-update.js.map