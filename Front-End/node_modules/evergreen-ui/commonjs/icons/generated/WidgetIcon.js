"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M13 11h2V5h-2v6zM3 5H1v6h2V5zm11-1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 3h6V1H5v2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 15h6v-2H5v2z'];
var svgPaths20 = ['M18 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15-1h2V5h-2v10zM3 5H1v10h2V5zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 3h10V1H5v2zm13 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 19h10v-2H5v2z'];
var WidgetIcon = (0, _react.memo)((0, _react.forwardRef)(function WidgetIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "widget"
  }, props));
}));
exports.WidgetIcon = WidgetIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvV2lkZ2V0SWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIldpZGdldEljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQiw0UEFEaUIsQ0FBbkI7QUFHQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsZ1FBRGlCLENBQW5CO0FBSU8sSUFBTUMsVUFBVSxHQUFHLGlCQUN4Qix1QkFBVyxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDekMsU0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURGO0FBU0QsQ0FWRCxDQUR3QixDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xMyAxMWgyVjVoLTJ2NnpNMyA1SDF2NmgyVjV6bTExLTFjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyek0yIDEyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6TTUgM2g2VjFINXYyek0yIDBDLjkgMCAwIC45IDAgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMyAxNWg2di0ySDV2MnonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTE4IDRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyek0yIDE2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTUtMWgyVjVoLTJ2MTB6TTMgNUgxdjEwaDJWNXpNMiAwQy45IDAgMCAuOSAwIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTMgM2gxMFYxSDV2MnptMTMgMTNjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yek01IDE5aDEwdi0ySDV2MnonXG5dXG5cbmV4cG9ydCBjb25zdCBXaWRnZXRJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBXaWRnZXRJY29uKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEljb25cbiAgICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIG5hbWU9XCJ3aWRnZXRcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcbiJdfQ==