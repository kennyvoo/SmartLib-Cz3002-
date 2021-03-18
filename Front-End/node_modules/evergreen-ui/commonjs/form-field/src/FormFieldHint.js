"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _typography = require("../../typography");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormFieldHint = (0, _react.memo)((0, _react.forwardRef)(function FormFieldHint(props, ref) {
  return _react["default"].createElement(_typography.Paragraph, (0, _extends2["default"])({
    marginTop: 0,
    size: 300,
    color: "muted"
  }, props, {
    ref: ref
  }));
}));
FormFieldHint.propTypes = _objectSpread({}, _typography.Paragraph.propTypes);
var _default = FormFieldHint;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRIaW50LmpzIl0sIm5hbWVzIjpbIkZvcm1GaWVsZEhpbnQiLCJwcm9wcyIsInJlZiIsInByb3BUeXBlcyIsIlBhcmFncmFwaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxpQkFDcEIsdUJBQVcsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQzVDLFNBQ0UsZ0NBQUMscUJBQUQ7QUFBVyxJQUFBLFNBQVMsRUFBRSxDQUF0QjtBQUF5QixJQUFBLElBQUksRUFBRSxHQUEvQjtBQUFvQyxJQUFBLEtBQUssRUFBQztBQUExQyxLQUFzREQsS0FBdEQ7QUFBNkQsSUFBQSxHQUFHLEVBQUVDO0FBQWxFLEtBREY7QUFHRCxDQUpELENBRG9CLENBQXRCO0FBUUFGLGFBQWEsQ0FBQ0csU0FBZCxxQkFJS0Msc0JBQVVELFNBSmY7ZUFPZUgsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5jb25zdCBGb3JtRmllbGRIaW50ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtRmllbGRIaW50KHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcmFncmFwaCBtYXJnaW5Ub3A9ezB9IHNpemU9ezMwMH0gY29sb3I9XCJtdXRlZFwiIHsuLi5wcm9wc30gcmVmPXtyZWZ9IC8+XG4gICAgKVxuICB9KVxuKVxuXG5Gb3JtRmllbGRIaW50LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBQYXJhZ3JhcGggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uUGFyYWdyYXBoLnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGRIaW50XG4iXX0=