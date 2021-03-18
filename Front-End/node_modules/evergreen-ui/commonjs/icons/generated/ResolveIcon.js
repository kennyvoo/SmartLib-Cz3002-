"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResolveIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c-.6 0-1.1.1-1.6.3 1.3 1.2 2.1 2.9 2.1 4.7s-.8 3.6-2.1 4.7c.5.2 1 .3 1.6.3 2.8 0 5-2.2 5-5s-2.2-5-5-5z'];
var svgPaths20 = ['M8.7 4.7C7.9 4.2 7 4 6 4c-3.3 0-6 2.7-6 6s2.7 6 6 6c1 0 1.9-.2 2.7-.7C7.3 14 6.5 12.1 6.5 10s.9-4 2.2-5.3zM14 4c-1 0-1.9.2-2.7.7 1.4 1.4 2.2 3.2 2.2 5.3s-.9 4-2.2 5.3c.8.5 1.7.7 2.7.7 3.3 0 6-2.7 6-6s-2.7-6-6-6zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z'];
var ResolveIcon = (0, _react.memo)((0, _react.forwardRef)(function ResolveIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "resolve"
  }, props));
}));
exports.ResolveIcon = ResolveIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUmVzb2x2ZUljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJSZXNvbHZlSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHdSQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQiwrUkFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxXQUFXLEdBQUcsaUJBQ3pCLHVCQUFXLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMxQyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRHlCLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTYuNiAzLjNDNi4xIDMuMSA1LjYgMyA1IDMgMi4yIDMgMCA1LjIgMCA4czIuMiA1IDUgNWMuNiAwIDEuMS0uMSAxLjYtLjNDNS4zIDExLjYgNC41IDkuOSA0LjUgOHMuOC0zLjYgMi4xLTQuN3pNOCA0Yy0xLjIuOS0yIDIuNC0yIDRzLjggMy4xIDIgNGMxLjItLjkgMi0yLjMgMi00cy0uOC0zLjEtMi00em0zLTFjLS42IDAtMS4xLjEtMS42LjMgMS4zIDEuMiAyLjEgMi45IDIuMSA0LjdzLS44IDMuNi0yLjEgNC43Yy41LjIgMSAuMyAxLjYuMyAyLjggMCA1LTIuMiA1LTVzLTIuMi01LTUtNXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTguNyA0LjdDNy45IDQuMiA3IDQgNiA0Yy0zLjMgMC02IDIuNy02IDZzMi43IDYgNiA2YzEgMCAxLjktLjIgMi43LS43QzcuMyAxNCA2LjUgMTIuMSA2LjUgMTBzLjktNCAyLjItNS4zek0xNCA0Yy0xIDAtMS45LjItMi43LjcgMS40IDEuNCAyLjIgMy4yIDIuMiA1LjNzLS45IDQtMi4yIDUuM2MuOC41IDEuNy43IDIuNy43IDMuMyAwIDYtMi43IDYtNnMtMi43LTYtNi02em0tNCAxLjVDOC44IDYuNyA4IDguMiA4IDEwcy44IDMuMyAyIDQuNGMxLjItMS4xIDItMi43IDItNC41cy0uOC0zLjMtMi00LjR6J1xuXVxuXG5leHBvcnQgY29uc3QgUmVzb2x2ZUljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFJlc29sdmVJY29uKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEljb25cbiAgICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIG5hbWU9XCJyZXNvbHZlXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=