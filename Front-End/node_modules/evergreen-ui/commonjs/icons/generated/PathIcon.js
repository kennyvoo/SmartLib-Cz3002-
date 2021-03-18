"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M14.5 0h-13C.67 0 0 .67 0 1.5S.67 3 1.5 3H7v3H3.5C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9H7v3H5.5c-.83 0-1.5.67-1.5 1.5S4.67 15 5.5 15h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H9V9h3.5c.83 0 1.5-.67 1.5-1.5S13.33 6 12.5 6H9V3h5.5c.83 0 1.5-.67 1.5-1.5S15.33 0 14.5 0z'];
var svgPaths20 = ['M18 0H2C.9 0 0 .9 0 2s.9 2 2 2h7v4H4c-1.1 0-2 .9-2 2s.9 2 2 2h5v4H6c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-3v-4h5c1.1 0 2-.9 2-2s-.9-2-2-2h-5V4h7c1.1 0 2-.9 2-2s-.9-2-2-2z'];
var PathIcon = (0, _react.memo)((0, _react.forwardRef)(function PathIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "path"
  }, props));
}));
exports.PathIcon = PathIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUGF0aEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJQYXRoSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHFRQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQiwyTEFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN2QyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRHNCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTE0LjUgMGgtMTNDLjY3IDAgMCAuNjcgMCAxLjVTLjY3IDMgMS41IDNIN3YzSDMuNUMyLjY3IDYgMiA2LjY3IDIgNy41UzIuNjcgOSAzLjUgOUg3djNINS41Yy0uODMgMC0xLjUuNjctMS41IDEuNVM0LjY3IDE1IDUuNSAxNWg1Yy44MyAwIDEuNS0uNjcgMS41LTEuNXMtLjY3LTEuNS0xLjUtMS41SDlWOWgzLjVjLjgzIDAgMS41LS42NyAxLjUtMS41UzEzLjMzIDYgMTIuNSA2SDlWM2g1LjVjLjgzIDAgMS41LS42NyAxLjUtMS41UzE1LjMzIDAgMTQuNSAweidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTggMEgyQy45IDAgMCAuOSAwIDJzLjkgMiAyIDJoN3Y0SDRjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyaDV2NEg2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMmgtM3YtNGg1YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMmgtNVY0aDdjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yeidcbl1cblxuZXhwb3J0IGNvbnN0IFBhdGhJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBQYXRoSWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwicGF0aFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuIl19