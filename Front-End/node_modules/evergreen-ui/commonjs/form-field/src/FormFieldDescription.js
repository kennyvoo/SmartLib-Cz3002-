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

var FormFieldDescription = (0, _react.memo)((0, _react.forwardRef)(function FormFieldDescription(props, ref) {
  return _react["default"].createElement(_typography.Paragraph, (0, _extends2["default"])({
    marginTop: 0,
    size: 400,
    color: "muted"
  }, props, {
    ref: ref
  }));
}));
FormFieldDescription.propTypes = _objectSpread({}, _typography.Paragraph.propTypes);
var _default = FormFieldDescription;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJGb3JtRmllbGREZXNjcmlwdGlvbiIsInByb3BzIiwicmVmIiwicHJvcFR5cGVzIiwiUGFyYWdyYXBoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsaUJBQzNCLHVCQUFXLFNBQVNBLG9CQUFULENBQThCQyxLQUE5QixFQUFxQ0MsR0FBckMsRUFBMEM7QUFDbkQsU0FDRSxnQ0FBQyxxQkFBRDtBQUFXLElBQUEsU0FBUyxFQUFFLENBQXRCO0FBQXlCLElBQUEsSUFBSSxFQUFFLEdBQS9CO0FBQW9DLElBQUEsS0FBSyxFQUFDO0FBQTFDLEtBQXNERCxLQUF0RDtBQUE2RCxJQUFBLEdBQUcsRUFBRUM7QUFBbEUsS0FERjtBQUdELENBSkQsQ0FEMkIsQ0FBN0I7QUFRQUYsb0JBQW9CLENBQUNHLFNBQXJCLHFCQUlLQyxzQkFBVUQsU0FKZjtlQU9lSCxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5jb25zdCBGb3JtRmllbGREZXNjcmlwdGlvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUZpZWxkRGVzY3JpcHRpb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCIgey4uLnByb3BzfSByZWY9e3JlZn0gLz5cbiAgICApXG4gIH0pXG4pXG5cbkZvcm1GaWVsZERlc2NyaXB0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBQYXJhZ3JhcGggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uUGFyYWdyYXBoLnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGREZXNjcmlwdGlvblxuIl19