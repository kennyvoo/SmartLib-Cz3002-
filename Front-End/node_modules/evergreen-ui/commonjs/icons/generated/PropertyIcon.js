"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertyIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M3 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.5-6.5a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM7 3h8c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm8 10H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zM3 0C1.9 0 1 .9 1 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 6H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'];
var svgPaths20 = ['M3 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5-1h11c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM3 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-1-8H9c-1.1 0-2 .9-2 2s.9 2 2 2h9c1.1 0 2-.9 2-2s-.9-2-2-2zM3 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'];
var PropertyIcon = (0, _react.memo)((0, _react.forwardRef)(function PropertyIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "property"
  }, props));
}));
exports.PropertyIcon = PropertyIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUHJvcGVydHlJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiUHJvcGVydHlJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsd1ZBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLHlWQURpQixDQUFuQjtBQUlPLElBQU1DLFlBQVksR0FBRyxpQkFDMUIsdUJBQVcsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLEdBQTdCLEVBQWtDO0FBQzNDLFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFERjtBQVNELENBVkQsQ0FEMEIsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNMyAxMmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS0uNS02LjVhMi41IDIuNSAwIDAwMCA1IDIuNSAyLjUgMCAwMDAtNXpNNyAzaDhjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFIN2MtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMXptOCAxMEg3Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDhjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6TTMgMEMxLjkgMCAxIC45IDEgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgNkg3Yy0uNTUgMC0xIC40NS0xIDF2MmMwIC41NS40NSAxIDEgMWg4Yy41NSAwIDEtLjQ1IDEtMVY3YzAtLjU1LS40NS0xLTEtMXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTMgNWMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTUtMWgxMWMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMUg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxek0zIDE1Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTYgMUg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDExYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xem0tMS04SDljLTEuMSAwLTIgLjktMiAycy45IDIgMiAyaDljMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yek0zIDdjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy0xLjM0IDMtMy0xLjM0LTMtMy0zeidcbl1cblxuZXhwb3J0IGNvbnN0IFByb3BlcnR5SWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gUHJvcGVydHlJY29uKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEljb25cbiAgICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIG5hbWU9XCJwcm9wZXJ0eVwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuIl19