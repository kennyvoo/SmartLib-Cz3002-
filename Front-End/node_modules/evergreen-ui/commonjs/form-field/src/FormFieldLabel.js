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

var _typography = require("../../typography");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormFieldLabel = (0, _react.memo)((0, _react.forwardRef)(function FormFieldLabel(props, ref) {
  var children = props.children,
      isAstrixShown = props.isAstrixShown,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "isAstrixShown"]);
  return _react["default"].createElement(_typography.Label, (0, _extends2["default"])({
    display: "block"
  }, rest, {
    ref: ref
  }), children, ' ', isAstrixShown && _react["default"].createElement("span", {
    title: "This field is required."
  }, "*"));
}));
FormFieldLabel.propTypes = _objectSpread(_objectSpread({}, _typography.Label.propTypes), {}, {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: _propTypes["default"].bool
});
var _default = FormFieldLabel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRMYWJlbC5qcyJdLCJuYW1lcyI6WyJGb3JtRmllbGRMYWJlbCIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJpc0FzdHJpeFNob3duIiwicmVzdCIsInByb3BUeXBlcyIsIkxhYmVsIiwiUHJvcFR5cGVzIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLGlCQUNyQix1QkFBVyxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQkMsR0FBL0IsRUFBb0M7QUFBQSxNQUNyQ0MsUUFEcUMsR0FDQUYsS0FEQSxDQUNyQ0UsUUFEcUM7QUFBQSxNQUMzQkMsYUFEMkIsR0FDQUgsS0FEQSxDQUMzQkcsYUFEMkI7QUFBQSxNQUNUQyxJQURTLDZDQUNBSixLQURBO0FBRTdDLFNBQ0UsZ0NBQUMsaUJBQUQ7QUFBTyxJQUFBLE9BQU8sRUFBQztBQUFmLEtBQTJCSSxJQUEzQjtBQUFpQyxJQUFBLEdBQUcsRUFBRUg7QUFBdEMsTUFDR0MsUUFESCxFQUNhLEdBRGIsRUFFR0MsYUFBYSxJQUFJO0FBQU0sSUFBQSxLQUFLLEVBQUM7QUFBWixTQUZwQixDQURGO0FBTUQsQ0FSRCxDQURxQixDQUF2QjtBQVlBSixjQUFjLENBQUNNLFNBQWYsbUNBSUtDLGtCQUFNRCxTQUpYO0FBTUU7OztBQUdBRixFQUFBQSxhQUFhLEVBQUVJLHNCQUFVQztBQVQzQjtlQVllVCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcblxuY29uc3QgRm9ybUZpZWxkTGFiZWwgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEZvcm1GaWVsZExhYmVsKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpc0FzdHJpeFNob3duLCAuLi5yZXN0IH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8TGFiZWwgZGlzcGxheT1cImJsb2NrXCIgey4uLnJlc3R9IHJlZj17cmVmfT5cbiAgICAgICAge2NoaWxkcmVufXsnICd9XG4gICAgICAgIHtpc0FzdHJpeFNob3duICYmIDxzcGFuIHRpdGxlPVwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIj4qPC9zcGFuPn1cbiAgICAgIDwvTGFiZWw+XG4gICAgKVxuICB9KVxuKVxuXG5Gb3JtRmllbGRMYWJlbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgTGFiZWwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uTGFiZWwucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgKi9cbiAgaXNBc3RyaXhTaG93bjogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkTGFiZWxcbiJdfQ==