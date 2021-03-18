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

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TextTableHeaderCell = (0, _react.memo)(function TextTableHeaderCell(props) {
  var children = props.children,
      textProps = props.textProps,
      isSortable = props.isSortable,
      sortOrder = props.sortOrder,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "textProps", "isSortable", "sortOrder"]);
  return _react["default"].createElement(_TableHeaderCell["default"], rest, _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
    fontWeight: 500,
    size: 300,
    flex: "1"
  }, textProps), children, ' '));
});
TextTableHeaderCell.propTypes = _objectSpread(_objectSpread({}, _TableHeaderCell["default"].propTypes), {}, {
  /**
   * Pass additional props to the Text component.
   */
  textProps: _propTypes["default"].objectOf(_propTypes["default"].string)
});
var _default = TextTableHeaderCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlSGVhZGVyQ2VsbC5qcyJdLCJuYW1lcyI6WyJUZXh0VGFibGVIZWFkZXJDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRQcm9wcyIsImlzU29ydGFibGUiLCJzb3J0T3JkZXIiLCJyZXN0IiwicHJvcFR5cGVzIiwiVGFibGVIZWFkZXJDZWxsIiwiUHJvcFR5cGVzIiwib2JqZWN0T2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHLGlCQUFLLFNBQVNBLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUFBLE1BQzNEQyxRQUQyRCxHQUNIRCxLQURHLENBQzNEQyxRQUQyRDtBQUFBLE1BQ2pEQyxTQURpRCxHQUNIRixLQURHLENBQ2pERSxTQURpRDtBQUFBLE1BQ3RDQyxVQURzQyxHQUNISCxLQURHLENBQ3RDRyxVQURzQztBQUFBLE1BQzFCQyxTQUQwQixHQUNISixLQURHLENBQzFCSSxTQUQwQjtBQUFBLE1BQ1pDLElBRFksNkNBQ0hMLEtBREc7QUFHbkUsU0FDRSxnQ0FBQywyQkFBRCxFQUFxQkssSUFBckIsRUFDRSxnQ0FBQyxnQkFBRDtBQUFNLElBQUEsVUFBVSxFQUFFLEdBQWxCO0FBQXVCLElBQUEsSUFBSSxFQUFFLEdBQTdCO0FBQWtDLElBQUEsSUFBSSxFQUFDO0FBQXZDLEtBQStDSCxTQUEvQyxHQUNHRCxRQURILEVBQ2EsR0FEYixDQURGLENBREY7QUFPRCxDQVYyQixDQUE1QjtBQVlBRixtQkFBbUIsQ0FBQ08sU0FBcEIsbUNBSUtDLDRCQUFnQkQsU0FKckI7QUFNRTs7O0FBR0FKLEVBQUFBLFNBQVMsRUFBRU0sc0JBQVVDLFFBQVYsQ0FBbUJELHNCQUFVRSxNQUE3QjtBQVRiO2VBWWVYLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcblxuY29uc3QgVGV4dFRhYmxlSGVhZGVyQ2VsbCA9IG1lbW8oZnVuY3Rpb24gVGV4dFRhYmxlSGVhZGVyQ2VsbChwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCB0ZXh0UHJvcHMsIGlzU29ydGFibGUsIHNvcnRPcmRlciwgLi4ucmVzdCB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUhlYWRlckNlbGwgey4uLnJlc3R9PlxuICAgICAgPFRleHQgZm9udFdlaWdodD17NTAwfSBzaXplPXszMDB9IGZsZXg9XCIxXCIgey4uLnRleHRQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAgPC9UZXh0PlxuICAgIDwvVGFibGVIZWFkZXJDZWxsPlxuICApXG59KVxuXG5UZXh0VGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUYWJsZUhlYWRlckNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogUGFzcyBhZGRpdGlvbmFsIHByb3BzIHRvIHRoZSBUZXh0IGNvbXBvbmVudC5cbiAgICovXG4gIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5zdHJpbmcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRUYWJsZUhlYWRlckNlbGxcbiJdfQ==