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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PopoverStateless = (0, _react.memo)((0, _react.forwardRef)(function PopoverStateless(props, ref) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children"]);
  return _react["default"].createElement(_layers.Card, (0, _extends2["default"])({
    role: "dialog",
    elevation: 3,
    overflow: "hidden",
    minWidth: 200,
    backgroundColor: "white",
    ref: ref
  }, rest), children);
}));
PopoverStateless.propTypes = _objectSpread(_objectSpread({}, _layers.Card.propTypes), {}, {
  /**
   * The content of the Popover.
   */
  children: _propTypes["default"].node
});
var _default = PopoverStateless;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlBvcG92ZXJTdGF0ZWxlc3MiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwicmVzdCIsInByb3BUeXBlcyIsIkNhcmQiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxpQkFDdkIsdUJBQVcsU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUFBLE1BQ3ZDQyxRQUR1QyxHQUNqQkYsS0FEaUIsQ0FDdkNFLFFBRHVDO0FBQUEsTUFDMUJDLElBRDBCLDZDQUNqQkgsS0FEaUI7QUFHL0MsU0FDRSxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsU0FBUyxFQUFFLENBRmI7QUFHRSxJQUFBLFFBQVEsRUFBQyxRQUhYO0FBSUUsSUFBQSxRQUFRLEVBQUUsR0FKWjtBQUtFLElBQUEsZUFBZSxFQUFDLE9BTGxCO0FBTUUsSUFBQSxHQUFHLEVBQUVDO0FBTlAsS0FPTUUsSUFQTixHQVNHRCxRQVRILENBREY7QUFhRCxDQWhCRCxDQUR1QixDQUF6QjtBQW9CQUgsZ0JBQWdCLENBQUNLLFNBQWpCLG1DQUlLQyxhQUFLRCxTQUpWO0FBTUU7OztBQUdBRixFQUFBQSxRQUFRLEVBQUVJLHNCQUFVQztBQVR0QjtlQVllUixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5jb25zdCBQb3BvdmVyU3RhdGVsZXNzID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBQb3BvdmVyU3RhdGVsZXNzKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgbWluV2lkdGg9ezIwMH1cbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ2FyZD5cbiAgICApXG4gIH0pXG4pXG5cblBvcG92ZXJTdGF0ZWxlc3MucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIENhcmQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5DYXJkLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIFBvcG92ZXIuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclN0YXRlbGVzc1xuIl19