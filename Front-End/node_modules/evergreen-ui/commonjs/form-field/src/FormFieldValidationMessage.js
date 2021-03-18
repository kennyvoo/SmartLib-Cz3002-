"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _typography = require("../../typography");

var _icons = require("../../icons");

var _layers = require("../../layers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormFieldValidationMessage = (0, _react.memo)((0, _react.forwardRef)(function FormFieldValidationMessage(_ref, ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    ref: ref,
    display: "flex"
  }, props), _react["default"].createElement(_icons.ErrorIcon, {
    color: "danger",
    marginTop: 1,
    size: 14,
    marginRight: 8
  }), _react["default"].createElement(_typography.Paragraph, {
    marginTop: 0,
    size: 300,
    color: "danger",
    role: "alert"
  }, children));
}));
FormFieldValidationMessage.propTypes = _objectSpread({}, _layers.Pane.propTypes);
var _default = FormFieldValidationMessage;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSIsInJlZiIsImNoaWxkcmVuIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJQYW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSwwQkFBMEIsR0FBRyxpQkFDakMsdUJBQVcsU0FBU0EsMEJBQVQsT0FBNERDLEdBQTVELEVBQWlFO0FBQUEsTUFBM0JDLFFBQTJCLFFBQTNCQSxRQUEyQjtBQUFBLE1BQWRDLEtBQWM7QUFDMUUsU0FDRSxnQ0FBQyxZQUFEO0FBQU0sSUFBQSxHQUFHLEVBQUVGLEdBQVg7QUFBZ0IsSUFBQSxPQUFPLEVBQUM7QUFBeEIsS0FBbUNFLEtBQW5DLEdBQ0UsZ0NBQUMsZ0JBQUQ7QUFBVyxJQUFBLEtBQUssRUFBQyxRQUFqQjtBQUEwQixJQUFBLFNBQVMsRUFBRSxDQUFyQztBQUF3QyxJQUFBLElBQUksRUFBRSxFQUE5QztBQUFrRCxJQUFBLFdBQVcsRUFBRTtBQUEvRCxJQURGLEVBRUUsZ0NBQUMscUJBQUQ7QUFBVyxJQUFBLFNBQVMsRUFBRSxDQUF0QjtBQUF5QixJQUFBLElBQUksRUFBRSxHQUEvQjtBQUFvQyxJQUFBLEtBQUssRUFBQyxRQUExQztBQUFtRCxJQUFBLElBQUksRUFBQztBQUF4RCxLQUNHRCxRQURILENBRkYsQ0FERjtBQVFELENBVEQsQ0FEaUMsQ0FBbkM7QUFhQUYsMEJBQTBCLENBQUNJLFNBQTNCLHFCQUlLQyxhQUFLRCxTQUpWO2VBT2VKLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBFcnJvckljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5cbmNvbnN0IEZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgcmVmPXtyZWZ9IGRpc3BsYXk9XCJmbGV4XCIgey4uLnByb3BzfT5cbiAgICAgICAgPEVycm9ySWNvbiBjb2xvcj1cImRhbmdlclwiIG1hcmdpblRvcD17MX0gc2l6ZT17MTR9IG1hcmdpblJpZ2h0PXs4fSAvPlxuICAgICAgICA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17MzAwfSBjb2xvcj1cImRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9KVxuKVxuXG5Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5QYW5lLnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZVxuIl19