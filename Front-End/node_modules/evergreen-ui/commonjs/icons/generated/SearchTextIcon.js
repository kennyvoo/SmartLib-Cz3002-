"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchTextIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M9 4H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1V6h1c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 9.44l-2.67-2.67C13.59 9.68 14 8.39 14 7c0-3.87-3.13-7-7-7S0 3.13 0 7s3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 102.12-2.12zM7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'];
var svgPaths20 = ['M19.56 17.44l-3.23-3.23A8.939 8.939 0 0018 9a9 9 0 10-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 102.12-2.12zM9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm3.5-11h-7c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5V7h2v6h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-.28-.22-.5-.5-.5z'];
var SearchTextIcon = (0, _react.memo)((0, _react.forwardRef)(function SearchTextIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "search-text"
  }, props));
}));
exports.SearchTextIcon = SearchTextIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU2VhcmNoVGV4dEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJTZWFyY2hUZXh0SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLDhTQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixpWEFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxjQUFjLEdBQUcsaUJBQzVCLHVCQUFXLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCQyxHQUEvQixFQUFvQztBQUM3QyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRDRCLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTkgNEg1Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDF2M2MwIC41NS40NSAxIDEgMXMxLS40NSAxLTFWNmgxYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xem02LjU2IDkuNDRsLTIuNjctMi42N0MxMy41OSA5LjY4IDE0IDguMzkgMTQgN2MwLTMuODctMy4xMy03LTctN1MwIDMuMTMgMCA3czMuMTMgNyA3IDdjMS4zOSAwIDIuNjgtLjQxIDMuNzctMS4xMWwyLjY3IDIuNjdhMS40OTggMS40OTggMCAxMDIuMTItMi4xMnpNNyAxMmMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xOS41NiAxNy40NGwtMy4yMy0zLjIzQTguOTM5IDguOTM5IDAgMDAxOCA5YTkgOSAwIDEwLTkgOWMxLjk0IDAgMy43NC0uNjIgNS4yMS0xLjY3bDMuMjMgMy4yM2ExLjQ5OCAxLjQ5OCAwIDEwMi4xMi0yLjEyek05IDE2Yy0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03IDcgMy4xMyA3IDctMy4xMyA3LTcgN3ptMy41LTExaC03Yy0uMjggMC0uNS4yMi0uNS41djJjMCAuMjguMjIuNS41LjVzLjUtLjIyLjUtLjVWN2gydjZoLS41Yy0uMjggMC0uNS4yMi0uNS41cy4yMi41LjUuNWgzYy4yOCAwIC41LS4yMi41LS41cy0uMjItLjUtLjUtLjVIMTBWN2gydi41YzAgLjI4LjIyLjUuNS41cy41LS4yMi41LS41di0yYzAtLjI4LS4yMi0uNS0uNS0uNXonXG5dXG5cbmV4cG9ydCBjb25zdCBTZWFyY2hUZXh0SWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gU2VhcmNoVGV4dEljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cInNlYXJjaC10ZXh0XCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=