"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisableIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-6 8c0-3.31 2.69-6 6-6 1.3 0 2.49.42 3.47 1.12l-8.35 8.35c-.7-.98-1.12-2.17-1.12-3.47zm6 6c-1.3 0-2.49-.42-3.47-1.12l8.35-8.35c.7.98 1.12 2.17 1.12 3.47 0 3.32-2.68 6-6 6z'];
var svgPaths20 = ['M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM2 10c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L3.69 14.9A7.902 7.902 0 012 10zm8 8c-1.85 0-3.55-.63-4.9-1.69L16.31 5.1A7.902 7.902 0 0118 10c0 4.42-3.58 8-8 8z'];
var DisableIcon = (0, _react.memo)((0, _react.forwardRef)(function DisableIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "disable"
  }, props));
}));
exports.DisableIcon = DisableIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvRGlzYWJsZUljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJEaXNhYmxlSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLDRPQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixvT0FEaUIsQ0FBbkI7QUFJTyxJQUFNQyxXQUFXLEdBQUcsaUJBQ3pCLHVCQUFXLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMxQyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRHlCLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTcuOTktLjAxYy00LjQyIDAtOCAzLjU4LTggOHMzLjU4IDggOCA4IDgtMy41OCA4LTgtMy41OC04LTgtOHptLTYgOGMwLTMuMzEgMi42OS02IDYtNiAxLjMgMCAyLjQ5LjQyIDMuNDcgMS4xMmwtOC4zNSA4LjM1Yy0uNy0uOTgtMS4xMi0yLjE3LTEuMTItMy40N3ptNiA2Yy0xLjMgMC0yLjQ5LS40Mi0zLjQ3LTEuMTJsOC4zNS04LjM1Yy43Ljk4IDEuMTIgMi4xNyAxLjEyIDMuNDcgMCAzLjMyLTIuNjggNi02IDZ6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xMCAwQzQuNDggMCAwIDQuNDggMCAxMHM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTUuNTIgMCAxMCAwek0yIDEwYzAtNC40MiAzLjU4LTggOC04IDEuODUgMCAzLjU1LjYzIDQuOSAxLjY5TDMuNjkgMTQuOUE3LjkwMiA3LjkwMiAwIDAxMiAxMHptOCA4Yy0xLjg1IDAtMy41NS0uNjMtNC45LTEuNjlMMTYuMzEgNS4xQTcuOTAyIDcuOTAyIDAgMDExOCAxMGMwIDQuNDItMy41OCA4LTggOHonXG5dXG5cbmV4cG9ydCBjb25zdCBEaXNhYmxlSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gRGlzYWJsZUljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cImRpc2FibGVcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcbiJdfQ==