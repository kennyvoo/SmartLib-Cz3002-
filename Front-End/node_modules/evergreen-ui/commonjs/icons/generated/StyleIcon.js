"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M14 14H2V2h8.76l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6.24l-2 2V14zm1.4-14L9.7 5.7l2.1 2.1L16 3.6V0h-.6zM4 11.92c2.33.15 4.42.15 6.15-1.5.82-.83.82-2.25 0-3.08-.45-.38-.98-.6-1.5-.6-.53 0-1.05.22-1.43.6-.82.91-1.27 3.38-3.22 4.58z'];
var svgPaths20 = ['M18 18H2V2h12.3l2-2H1C.4 0 0 .4 0 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.7l-2 2V18zm1.2-18l-7.6 7.6 2.8 2.8L20 4.8V0h-.8zM4 15.9c3.1.2 5.9.2 8.2-2 1.1-1.1 1.1-3 0-4.1-.6-.5-1.3-.8-2-.8s-1.4.3-1.9.8C7.2 11 6.6 14.3 4 15.9z'];
var StyleIcon = (0, _react.memo)((0, _react.forwardRef)(function StyleIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "style"
  }, props));
}));
exports.StyleIcon = StyleIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU3R5bGVJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiU3R5bGVJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsNlBBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLDZOQURpQixDQUFuQjtBQUlPLElBQU1DLFNBQVMsR0FBRyxpQkFDdkIsdUJBQVcsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQ3hDLFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFERjtBQVNELENBVkQsQ0FEdUIsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNMTQgMTRIMlYyaDguNzZsMi0ySDFDLjQ1IDAgMCAuNDUgMCAxdjE0YzAgLjU1LjQ1IDEgMSAxaDE0Yy41NSAwIDEtLjQ1IDEtMVY2LjI0bC0yIDJWMTR6bTEuNC0xNEw5LjcgNS43bDIuMSAyLjFMMTYgMy42VjBoLS42ek00IDExLjkyYzIuMzMuMTUgNC40Mi4xNSA2LjE1LTEuNS44Mi0uODMuODItMi4yNSAwLTMuMDgtLjQ1LS4zOC0uOTgtLjYtMS41LS42LS41MyAwLTEuMDUuMjItMS40My42LS44Mi45MS0xLjI3IDMuMzgtMy4yMiA0LjU4eidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTggMThIMlYyaDEyLjNsMi0ySDFDLjQgMCAwIC40IDAgMXYxOGMwIC42LjQgMSAxIDFoMThjLjYgMCAxLS40IDEtMVY3LjdsLTIgMlYxOHptMS4yLTE4bC03LjYgNy42IDIuOCAyLjhMMjAgNC44VjBoLS44ek00IDE1LjljMy4xLjIgNS45LjIgOC4yLTIgMS4xLTEuMSAxLjEtMyAwLTQuMS0uNi0uNS0xLjMtLjgtMi0uOHMtMS40LjMtMS45LjhDNy4yIDExIDYuNiAxNC4zIDQgMTUuOXonXG5dXG5cbmV4cG9ydCBjb25zdCBTdHlsZUljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFN0eWxlSWNvbihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBuYW1lPVwic3R5bGVcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcbiJdfQ==