"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M13.93 14.67L8.94.67h-.01C8.79.28 8.43 0 8 0s-.79.28-.93.67h-.01l-5 14h.01c-.04.1-.07.21-.07.33 0 .55.45 1 1 1 .43 0 .79-.28.93-.67h.01L5.49 11h5.02l1.55 4.34h.01c.14.38.5.66.93.66.55 0 1-.45 1-1 0-.12-.03-.23-.07-.33zM6.2 9L8 3.97 9.8 9H6.2z'];
var svgPaths20 = ['M17.93 18.64l-7-18C10.78.27 10.42 0 10 0s-.78.27-.93.64l-7 18c-.04.11-.07.23-.07.36 0 .55.45 1 1 1 .42 0 .78-.27.93-.64L6.41 13h7.19l2.47 6.36c.15.37.51.64.93.64.55 0 1-.45 1-1 0-.13-.03-.25-.07-.36zM7.18 11L10 3.76 12.82 11H7.18z'];
var FontIcon = (0, _react.memo)((0, _react.forwardRef)(function FontIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "font"
  }, props));
}));
exports.FontIcon = FontIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvRm9udEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJGb250SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLG9QQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQix3T0FEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN2QyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRHNCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTEzLjkzIDE0LjY3TDguOTQuNjdoLS4wMUM4Ljc5LjI4IDguNDMgMCA4IDBzLS43OS4yOC0uOTMuNjdoLS4wMWwtNSAxNGguMDFjLS4wNC4xLS4wNy4yMS0uMDcuMzMgMCAuNTUuNDUgMSAxIDEgLjQzIDAgLjc5LS4yOC45My0uNjdoLjAxTDUuNDkgMTFoNS4wMmwxLjU1IDQuMzRoLjAxYy4xNC4zOC41LjY2LjkzLjY2LjU1IDAgMS0uNDUgMS0xIDAtLjEyLS4wMy0uMjMtLjA3LS4zM3pNNi4yIDlMOCAzLjk3IDkuOCA5SDYuMnonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTE3LjkzIDE4LjY0bC03LTE4QzEwLjc4LjI3IDEwLjQyIDAgMTAgMHMtLjc4LjI3LS45My42NGwtNyAxOGMtLjA0LjExLS4wNy4yMy0uMDcuMzYgMCAuNTUuNDUgMSAxIDEgLjQyIDAgLjc4LS4yNy45My0uNjRMNi40MSAxM2g3LjE5bDIuNDcgNi4zNmMuMTUuMzcuNTEuNjQuOTMuNjQuNTUgMCAxLS40NSAxLTEgMC0uMTMtLjAzLS4yNS0uMDctLjM2ek03LjE4IDExTDEwIDMuNzYgMTIuODIgMTFINy4xOHonXG5dXG5cbmV4cG9ydCBjb25zdCBGb250SWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gRm9udEljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cImZvbnRcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcbiJdfQ==