"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M9.12 11.07l2-2.02.71.71 4-4.04L10.17 0l-4 4.04.71.71-2 2.02 4.24 4.3zM2 12.97h4c.28 0 .53-.11.71-.3l1-1.01-3.42-3.45-3 3.03c-.18.18-.29.44-.29.72 0 .55.45 1.01 1 1.01zm13 1.01H1c-.55 0-1 .45-1 1.01S.45 16 1 16h14c.55 0 1-.45 1-1.01s-.45-1.01-1-1.01z'];
var svgPaths20 = ['M11.22 14.09l3.03-3.03.71.71L20 6.73l-5.71-5.71-5.04 5.04.71.71-3.02 3.04 4.28 4.28zm6.8 3.91h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-15-1h4.04c.28 0 .53-.11.71-.3l2.02-2.02-3.44-3.45-4.04 4.04c-.18.18-.3.44-.3.71.01.57.46 1.02 1.01 1.02z'];
var HighlightIcon = (0, _react.memo)((0, _react.forwardRef)(function HighlightIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "highlight"
  }, props));
}));
exports.HighlightIcon = HighlightIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvSGlnaGxpZ2h0SWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIkhpZ2hsaWdodEljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQiw0UEFEaUIsQ0FBbkI7QUFHQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsdVFBRGlCLENBQW5CO0FBSU8sSUFBTUMsYUFBYSxHQUFHLGlCQUMzQix1QkFBVyxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsR0FBOUIsRUFBbUM7QUFDNUMsU0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURGO0FBU0QsQ0FWRCxDQUQyQixDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ005LjEyIDExLjA3bDItMi4wMi43MS43MSA0LTQuMDRMMTAuMTcgMGwtNCA0LjA0LjcxLjcxLTIgMi4wMiA0LjI0IDQuM3pNMiAxMi45N2g0Yy4yOCAwIC41My0uMTEuNzEtLjNsMS0xLjAxLTMuNDItMy40NS0zIDMuMDNjLS4xOC4xOC0uMjkuNDQtLjI5LjcyIDAgLjU1LjQ1IDEuMDEgMSAxLjAxem0xMyAxLjAxSDFjLS41NSAwLTEgLjQ1LTEgMS4wMVMuNDUgMTYgMSAxNmgxNGMuNTUgMCAxLS40NSAxLTEuMDFzLS40NS0xLjAxLTEtMS4wMXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTExLjIyIDE0LjA5bDMuMDMtMy4wMy43MS43MUwyMCA2LjczbC01LjcxLTUuNzEtNS4wNCA1LjA0LjcxLjcxLTMuMDIgMy4wNCA0LjI4IDQuMjh6bTYuOCAzLjkxaC0xNmMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWgxNmMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMXptLTE1LTFoNC4wNGMuMjggMCAuNTMtLjExLjcxLS4zbDIuMDItMi4wMi0zLjQ0LTMuNDUtNC4wNCA0LjA0Yy0uMTguMTgtLjMuNDQtLjMuNzEuMDEuNTcuNDYgMS4wMiAxLjAxIDEuMDJ6J1xuXVxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0SWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gSGlnaGxpZ2h0SWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwiaGlnaGxpZ2h0XCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=