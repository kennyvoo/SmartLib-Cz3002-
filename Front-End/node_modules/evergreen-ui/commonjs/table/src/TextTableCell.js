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

var _TableCell = _interopRequireDefault(require("./TableCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
var TextTableCell = (0, _react.memo)((0, _react.forwardRef)(function TextTableCell(props, ref) {
  var children = props.children,
      textProps = props.textProps,
      _props$isNumber = props.isNumber,
      isNumber = _props$isNumber === void 0 ? false : _props$isNumber,
      placeholder = props.placeholder,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "textProps", "isNumber", "placeholder"]);
  return _react["default"].createElement(_TableCell["default"], (0, _extends2["default"])({
    ref: ref
  }, rest), _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
    size: 300,
    flex: "1"
  }, ellipsis, isNumber ? {
    fontFamily: 'mono'
  } : {}, textProps), children));
}));
TextTableCell.propTypes = _objectSpread(_objectSpread({}, _TableCell["default"].propTypes), {}, {
  /**
   * Adds fontFamily: mono.
   */
  isNumber: _propTypes["default"].bool,

  /**
   * Pass additional props to the Text component.
   */
  textProps: _propTypes["default"].object
});
var _default = TextTableCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlQ2VsbC5qcyJdLCJuYW1lcyI6WyJlbGxpcHNpcyIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIlRleHRUYWJsZUNlbGwiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwidGV4dFByb3BzIiwiaXNOdW1iZXIiLCJwbGFjZWhvbGRlciIsInJlc3QiLCJmb250RmFtaWx5IiwicHJvcFR5cGVzIiwiVGFibGVDZWxsIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLEVBQUFBLFFBQVEsRUFBRSxRQURLO0FBRWZDLEVBQUFBLFlBQVksRUFBRSxVQUZDO0FBR2ZDLEVBQUFBLFVBQVUsRUFBRTtBQUhHLENBQWpCO0FBTUEsSUFBTUMsYUFBYSxHQUFHLGlCQUNwQix1QkFBVyxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsR0FBOUIsRUFBbUM7QUFBQSxNQUUxQ0MsUUFGMEMsR0FPeENGLEtBUHdDLENBRTFDRSxRQUYwQztBQUFBLE1BRzFDQyxTQUgwQyxHQU94Q0gsS0FQd0MsQ0FHMUNHLFNBSDBDO0FBQUEsd0JBT3hDSCxLQVB3QyxDQUkxQ0ksUUFKMEM7QUFBQSxNQUkxQ0EsUUFKMEMsZ0NBSS9CLEtBSitCO0FBQUEsTUFLMUNDLFdBTDBDLEdBT3hDTCxLQVB3QyxDQUsxQ0ssV0FMMEM7QUFBQSxNQU12Q0MsSUFOdUMsNkNBT3hDTixLQVB3QztBQVM1QyxTQUNFLGdDQUFDLHFCQUFEO0FBQVcsSUFBQSxHQUFHLEVBQUVDO0FBQWhCLEtBQXlCSyxJQUF6QixHQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUUsR0FEUjtBQUVFLElBQUEsSUFBSSxFQUFDO0FBRlAsS0FHTVgsUUFITixFQUlPUyxRQUFRLEdBQUc7QUFBRUcsSUFBQUEsVUFBVSxFQUFFO0FBQWQsR0FBSCxHQUE0QixFQUozQyxFQUtNSixTQUxOLEdBT0dELFFBUEgsQ0FERixDQURGO0FBYUQsQ0F0QkQsQ0FEb0IsQ0FBdEI7QUEwQkFILGFBQWEsQ0FBQ1MsU0FBZCxtQ0FJS0Msc0JBQVVELFNBSmY7QUFNRTs7O0FBR0FKLEVBQUFBLFFBQVEsRUFBRU0sc0JBQVVDLElBVHRCOztBQVdFOzs7QUFHQVIsRUFBQUEsU0FBUyxFQUFFTyxzQkFBVUU7QUFkdkI7ZUFpQmViLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuXG5jb25zdCBlbGxpcHNpcyA9IHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnXG59XG5cbmNvbnN0IFRleHRUYWJsZUNlbGwgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHRUYWJsZUNlbGwocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgdGV4dFByb3BzLFxuICAgICAgaXNOdW1iZXIgPSBmYWxzZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUNlbGwgcmVmPXtyZWZ9IHsuLi5yZXN0fT5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBzaXplPXszMDB9XG4gICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgIHsuLi5lbGxpcHNpc31cbiAgICAgICAgICB7Li4uKGlzTnVtYmVyID8geyBmb250RmFtaWx5OiAnbW9ubycgfSA6IHt9KX1cbiAgICAgICAgICB7Li4udGV4dFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICApXG4gIH0pXG4pXG5cblRleHRUYWJsZUNlbGwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UYWJsZUNlbGwucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBBZGRzIGZvbnRGYW1pbHk6IG1vbm8uXG4gICAqL1xuICBpc051bWJlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFBhc3MgYWRkaXRpb25hbCBwcm9wcyB0byB0aGUgVGV4dCBjb21wb25lbnQuXG4gICAqL1xuICB0ZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFRhYmxlQ2VsbFxuIl19