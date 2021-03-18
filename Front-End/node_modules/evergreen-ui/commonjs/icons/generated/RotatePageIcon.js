"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotatePageIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M8 6H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-1 8H3V8h4v6zm5-12h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3z'];
var svgPaths20 = ['M14 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4zm-2 5H3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 11H4V9h7v9z'];
var RotatePageIcon = (0, _react.memo)((0, _react.forwardRef)(function RotatePageIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "rotate-page"
  }, props));
}));
exports.RotatePageIcon = RotatePageIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUm90YXRlUGFnZUljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJSb3RhdGVQYWdlSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLGlUQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixxVEFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxjQUFjLEdBQUcsaUJBQzVCLHVCQUFXLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCQyxHQUEvQixFQUFvQztBQUM3QyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRDRCLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTggNkgyYy0uNTUgMC0xIC40NS0xIDF2OGMwIC41NS40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMVY3YzAtLjU1LS40NS0xLTEtMXptLTEgOEgzVjhoNHY2em01LTEyaC0xLjU5bC4yOS0uMjljLjE5LS4xOC4zLS40My4zLS43MUExLjAwMyAxLjAwMyAwIDAwOS4yOS4yOWwtMiAyQzcuMTEgMi40NyA3IDIuNzIgNyAzYzAgLjI4LjExLjUzLjI5LjcxbDIgMmExLjAwMyAxLjAwMyAwIDAwMS40Mi0xLjQybC0uMy0uMjlIMTJjLjU1IDAgMSAuNDUgMSAxdjNjMCAuNTUuNDUgMSAxIDFzMS0uNDUgMS0xVjVjMC0xLjY2LTEuMzQtMy0zLTN6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xNCAyaC0xLjU5bC4yOS0uMjljLjE5LS4xOC4zLS40My4zLS43MWExLjAwMyAxLjAwMyAwIDAwLTEuNzEtLjcxbC0yIDJDOS4xMSAyLjQ3IDkgMi43MiA5IDNjMCAuMjguMTEuNTMuMjkuNzFsMiAyYTEuMDAzIDEuMDAzIDAgMDAxLjQyLTEuNDJsLS4zLS4yOUgxNGMxLjEgMCAyIC45IDIgMnYzYzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMVY2YzAtMi4yMS0xLjc5LTQtNC00em0tMiA1SDNjLS41NSAwLTEgLjQ1LTEgMXYxMWMwIC41NS40NSAxIDEgMWg5Yy41NSAwIDEtLjQ1IDEtMVY4YzAtLjU1LS40NS0xLTEtMXptLTEgMTFINFY5aDd2OXonXG5dXG5cbmV4cG9ydCBjb25zdCBSb3RhdGVQYWdlSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gUm90YXRlUGFnZUljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cInJvdGF0ZS1wYWdlXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=