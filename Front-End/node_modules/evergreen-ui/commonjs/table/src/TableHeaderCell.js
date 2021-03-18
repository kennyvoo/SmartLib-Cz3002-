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

var _TableCell = _interopRequireDefault(require("./TableCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TableHeaderCell = (0, _react.memo)(function TableHeaderCell(props) {
  return _react["default"].createElement(_TableCell["default"], (0, _extends2["default"])({
    overflow: "visible",
    borderBottom: null
  }, props));
});
TableHeaderCell.propTypes = _objectSpread({}, _TableCell["default"].propTypes);
var _default = TableHeaderCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbIlRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwicHJvcFR5cGVzIiwiVGFibGVDZWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLGlCQUFLLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzNELFNBQU8sZ0NBQUMscUJBQUQ7QUFBVyxJQUFBLFFBQVEsRUFBQyxTQUFwQjtBQUE4QixJQUFBLFlBQVksRUFBRTtBQUE1QyxLQUFzREEsS0FBdEQsRUFBUDtBQUNELENBRnVCLENBQXhCO0FBSUFELGVBQWUsQ0FBQ0UsU0FBaEIscUJBSUtDLHNCQUFVRCxTQUpmO2VBT2VGLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuL1RhYmxlQ2VsbCdcblxuY29uc3QgVGFibGVIZWFkZXJDZWxsID0gbWVtbyhmdW5jdGlvbiBUYWJsZUhlYWRlckNlbGwocHJvcHMpIHtcbiAgcmV0dXJuIDxUYWJsZUNlbGwgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIgYm9yZGVyQm90dG9tPXtudWxsfSB7Li4ucHJvcHN9IC8+XG59KVxuXG5UYWJsZUhlYWRlckNlbGwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UYWJsZUNlbGwucHJvcFR5cGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlSGVhZGVyQ2VsbFxuIl19