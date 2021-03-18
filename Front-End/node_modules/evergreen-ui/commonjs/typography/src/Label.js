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

var _Text = _interopRequireDefault(require("./Text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Label = (0, _react.memo)((0, _react.forwardRef)(function Label(props, ref) {
  return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
    is: "label",
    fontWeight: 500
  }, props, {
    ref: ref
  }));
}));
Label.propTypes = _objectSpread({}, _Text["default"].propTypes);
var _default = Label;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6WyJMYWJlbCIsInByb3BzIiwicmVmIiwicHJvcFR5cGVzIiwiVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxpQkFDWix1QkFBVyxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3BDLFNBQU8sZ0NBQUMsZ0JBQUQ7QUFBTSxJQUFBLEVBQUUsRUFBQyxPQUFUO0FBQWlCLElBQUEsVUFBVSxFQUFFO0FBQTdCLEtBQXNDRCxLQUF0QztBQUE2QyxJQUFBLEdBQUcsRUFBRUM7QUFBbEQsS0FBUDtBQUNELENBRkQsQ0FEWSxDQUFkO0FBTUFGLEtBQUssQ0FBQ0csU0FBTixxQkFDS0MsaUJBQUtELFNBRFY7ZUFJZUgsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmNvbnN0IExhYmVsID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBMYWJlbChwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIDxUZXh0IGlzPVwibGFiZWxcIiBmb250V2VpZ2h0PXs1MDB9IHsuLi5wcm9wc30gcmVmPXtyZWZ9IC8+XG4gIH0pXG4pXG5cbkxhYmVsLnByb3BUeXBlcyA9IHtcbiAgLi4uVGV4dC5wcm9wVHlwZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxcbiJdfQ==