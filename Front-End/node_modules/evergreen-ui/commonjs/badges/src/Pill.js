"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Badge = _interopRequireDefault(require("./Badge"));

var Pill = (0, _react.memo)((0, _react.forwardRef)(function Pill(props, ref) {
  return _react["default"].createElement(_Badge["default"], (0, _extends2["default"])({
    borderRadius: 999,
    ref: ref
  }, props));
}));
Pill.propTypes = _Badge["default"].propTypes;
var _default = Pill;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsInByb3BzIiwicmVmIiwicHJvcFR5cGVzIiwiQmFkZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsaUJBQ1gsdUJBQVcsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxHQUFyQixFQUEwQjtBQUNuQyxTQUFPLGdDQUFDLGlCQUFEO0FBQU8sSUFBQSxZQUFZLEVBQUUsR0FBckI7QUFBMEIsSUFBQSxHQUFHLEVBQUVBO0FBQS9CLEtBQXdDRCxLQUF4QyxFQUFQO0FBQ0QsQ0FGRCxDQURXLENBQWI7QUFNQUQsSUFBSSxDQUFDRyxTQUFMLEdBQWlCQyxrQkFBTUQsU0FBdkI7ZUFFZUgsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi9CYWRnZSdcblxuY29uc3QgUGlsbCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gUGlsbChwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIDxCYWRnZSBib3JkZXJSYWRpdXM9ezk5OX0gcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz5cbiAgfSlcbilcblxuUGlsbC5wcm9wVHlwZXMgPSBCYWRnZS5wcm9wVHlwZXNcblxuZXhwb3J0IGRlZmF1bHQgUGlsbFxuIl19