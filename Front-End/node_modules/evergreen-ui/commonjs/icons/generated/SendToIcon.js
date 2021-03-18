"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendToIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M15 7.5c-.8 0-1.5-.4-2-1l-1.2 1.2c-.4.5-1.1.7-1.8.7-1.4.1-2.5-1-2.5-2.4 0-.7.3-1.3.7-1.8L9.5 3c-.6-.5-1-1.2-1-2 0-.3.1-.7.2-1H8C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8v-.7c-.3.1-.6.2-1 .2zM15 0h-4c-.6 0-1 .5-1 1s.4 1 1 1h1.6L9.3 5.3c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3L14 3.4V5c0 .6.4 1 1 1 .5 0 1-.4 1-1V1c0-.5-.4-1-1-1z'];
var svgPaths20 = ['M19 0h-5c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-4.3 4.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L18 3.4V6c0 .5.5 1 1 1s1-.5 1-1V1c0-.6-.5-1-1-1zm0 9c-1 0-1.9-.5-2.5-1.3l-1.4 1.4c-.5.6-1.3.9-2.1.9-1.7 0-3-1.3-3-3 0-.8.3-1.6.9-2.1l1.4-1.4C11.5 2.9 11 2 11 1c0-.3.1-.6.2-.9-.4-.1-.8-.1-1.2-.1C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10c0-.4 0-.8-.1-1.2-.3.1-.6.2-.9.2z'];
var SendToIcon = (0, _react.memo)((0, _react.forwardRef)(function SendToIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "send-to"
  }, props));
}));
exports.SendToIcon = SendToIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU2VuZFRvSWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIlNlbmRUb0ljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQix3VUFEaUIsQ0FBbkI7QUFHQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIseVdBRGlCLENBQW5CO0FBSU8sSUFBTUMsVUFBVSxHQUFHLGlCQUN4Qix1QkFBVyxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDekMsU0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURGO0FBU0QsQ0FWRCxDQUR3QixDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xNSA3LjVjLS44IDAtMS41LS40LTItMWwtMS4yIDEuMmMtLjQuNS0xLjEuNy0xLjguNy0xLjQuMS0yLjUtMS0yLjUtMi40IDAtLjcuMy0xLjMuNy0xLjhMOS41IDNjLS42LS41LTEtMS4yLTEtMiAwLS4zLjEtLjcuMi0xSDhDMy42IDAgMCAzLjYgMCA4czMuNiA4IDggOCA4LTMuNiA4LTh2LS43Yy0uMy4xLS42LjItMSAuMnpNMTUgMGgtNGMtLjYgMC0xIC41LTEgMXMuNCAxIDEgMWgxLjZMOS4zIDUuM2MtLjIuMi0uMy40LS4zLjcgMCAuNS40IDEgMSAxIC4zIDAgLjUtLjEuNy0uM0wxNCAzLjRWNWMwIC42LjQgMSAxIDEgLjUgMCAxLS40IDEtMVYxYzAtLjUtLjQtMS0xLTF6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xOSAwaC01Yy0uNiAwLTEgLjQtMSAxcy40IDEgMSAxaDIuNmwtNC4zIDQuM2MtLjIuMi0uMy40LS4zLjcgMCAuNi40IDEgMSAxIC4zIDAgLjUtLjEuNy0uM0wxOCAzLjRWNmMwIC41LjUgMSAxIDFzMS0uNSAxLTFWMWMwLS42LS41LTEtMS0xem0wIDljLTEgMC0xLjktLjUtMi41LTEuM2wtMS40IDEuNGMtLjUuNi0xLjMuOS0yLjEuOS0xLjcgMC0zLTEuMy0zLTMgMC0uOC4zLTEuNi45LTIuMWwxLjQtMS40QzExLjUgMi45IDExIDIgMTEgMWMwLS4zLjEtLjYuMi0uOS0uNC0uMS0uOC0uMS0xLjItLjFDNC41IDAgMCA0LjUgMCAxMHM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwYzAtLjQgMC0uOC0uMS0xLjItLjMuMS0uNi4yLS45LjJ6J1xuXVxuXG5leHBvcnQgY29uc3QgU2VuZFRvSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gU2VuZFRvSWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwic2VuZC10b1wiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuIl19