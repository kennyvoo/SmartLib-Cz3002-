"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M14.9 11c-.3 0-.5.1-.7.3l-3 3c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1zm-1-1v-.2l-1-5c-.1-.3-.3-.6-.6-.7l-11-4-.3.3 5.8 5.8c.2-.1.4-.2.6-.2.8 0 1.5.7 1.5 1.5S8.3 9 7.4 9s-1.5-.7-1.5-1.5c0-.2.1-.4.2-.6L.3 1.1l-.3.3 4 11c.1.3.4.6.7.6l5 1h.2c.3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7z'];
var svgPaths20 = ['M17.7 12.7c0-.1 0-.2-.1-.3l-2-7c-.1-.3-.3-.6-.6-.7L1.8 0l-.6.5L7.7 7c.3-.2.6-.3 1-.3 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.4.1-.7.3-1L.5 1.2l-.5.6L4.7 15c.1.3.4.5.7.6l7 2c.1 0 .2.1.3.1.3 0 .5-.1.7-.3l4-4c.2-.2.3-.5.3-.7zm1 1c-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z'];
var DrawIcon = (0, _react.memo)((0, _react.forwardRef)(function DrawIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "draw"
  }, props));
}));
exports.DrawIcon = DrawIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvRHJhd0ljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJEcmF3SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLDJUQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixzVUFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN2QyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBREY7QUFTRCxDQVZELENBRHNCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTE0LjkgMTFjLS4zIDAtLjUuMS0uNy4zbC0zIDNjLS4yLjItLjMuNC0uMy43IDAgLjYuNSAxIDEgMSAuMyAwIC41LS4xLjctLjNsMy0zYy4yLS4yLjMtLjQuMy0uNyAwLS41LS40LTEtMS0xem0tMS0xdi0uMmwtMS01Yy0uMS0uMy0uMy0uNi0uNi0uN2wtMTEtNC0uMy4zIDUuOCA1LjhjLjItLjEuNC0uMi42LS4yLjggMCAxLjUuNyAxLjUgMS41UzguMyA5IDcuNCA5cy0xLjUtLjctMS41LTEuNWMwLS4yLjEtLjQuMi0uNkwuMyAxLjFsLS4zLjMgNCAxMWMuMS4zLjQuNi43LjZsNSAxaC4yYy4zIDAgLjUtLjEuNy0uM2wzLTNjLjItLjIuMy0uNC4zLS43eidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTcuNyAxMi43YzAtLjEgMC0uMi0uMS0uM2wtMi03Yy0uMS0uMy0uMy0uNi0uNi0uN0wxLjggMGwtLjYuNUw3LjcgN2MuMy0uMi42LS4zIDEtLjMgMS4xIDAgMiAuOSAyIDJzLS45IDItMiAyLTItLjktMi0yYzAtLjQuMS0uNy4zLTFMLjUgMS4ybC0uNS42TDQuNyAxNWMuMS4zLjQuNS43LjZsNyAyYy4xIDAgLjIuMS4zLjEuMyAwIC41LS4xLjctLjNsNC00Yy4yLS4yLjMtLjUuMy0uN3ptMSAxYy0uMyAwLS41LjEtLjcuM2wtNCA0Yy0uMi4yLS4zLjQtLjMuNyAwIC41LjQgMSAxIDEgLjMgMCAuNS0uMS43LS4zbDQtNGMuMi0uMi4zLS40LjMtLjcgMC0uNi0uNS0xLTEtMXonXG5dXG5cbmV4cG9ydCBjb25zdCBEcmF3SWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gRHJhd0ljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cImRyYXdcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcbiJdfQ==