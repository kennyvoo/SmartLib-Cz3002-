"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _IconWrapper = require("../../icons/src/IconWrapper");

var _icons = require("../../icons");

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var invisibleInputClass = (0, _glamor.css)({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    color: "rgba(67, 90, 111, 0.7)"
  }
}).toString();

var noop = function noop() {};

var SearchTableHeaderCell = (0, _react.memo)((0, _react.forwardRef)(function SearchTableHeaderCell(props, ref) {
  var value = props.value,
      children = props.children,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      autoFocus = props.autoFocus,
      _props$spellCheck = props.spellCheck,
      spellCheck = _props$spellCheck === void 0 ? true : _props$spellCheck,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Filter...' : _props$placeholder,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? _icons.SearchIcon : _props$icon,
      rest = (0, _objectWithoutProperties2["default"])(props, ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"]);
  var handleChange = (0, _react.useCallback)(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  return _react["default"].createElement(_TableHeaderCell["default"], rest, _react["default"].createElement(_IconWrapper.IconWrapper, {
    icon: icon,
    color: "muted",
    marginLeft: 2,
    marginRight: 10,
    size: 12
  }), _react["default"].createElement(_typography.Text, {
    is: "input",
    size: 300,
    flex: "1",
    className: invisibleInputClass,
    value: value,
    onChange: handleChange,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    fontWeight: 500,
    marginLeft: -2,
    paddingLeft: 0,
    placeholder: placeholder,
    ref: ref
  }));
}));
SearchTableHeaderCell.propTypes = _objectSpread(_objectSpread({}, _TableHeaderCell["default"].propTypes), {}, {
  /**
   * The value of the input.
   */
  value: _propTypes["default"].string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: _propTypes["default"].bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: _propTypes["default"].string,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element])
});
var _default = SearchTableHeaderCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VhcmNoVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbImludmlzaWJsZUlucHV0Q2xhc3MiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJvdXRsaW5lIiwiY29sb3IiLCJ0b1N0cmluZyIsIm5vb3AiLCJTZWFyY2hUYWJsZUhlYWRlckNlbGwiLCJwcm9wcyIsInJlZiIsInZhbHVlIiwiY2hpbGRyZW4iLCJvbkNoYW5nZSIsImF1dG9Gb2N1cyIsInNwZWxsQ2hlY2siLCJwbGFjZWhvbGRlciIsImljb24iLCJTZWFyY2hJY29uIiwicmVzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwcm9wVHlwZXMiLCJUYWJsZUhlYWRlckNlbGwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm9uZU9mVHlwZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHLGlCQUFJO0FBQzlCQyxFQUFBQSxNQUFNLEVBQUUsTUFEc0I7QUFFOUJDLEVBQUFBLGVBQWUsRUFBRSxhQUZhO0FBRzlCQyxFQUFBQSxnQkFBZ0IsRUFBRSxNQUhZO0FBSTlCQyxFQUFBQSxhQUFhLEVBQUUsTUFKZTtBQUs5QkMsRUFBQUEsbUJBQW1CLEVBQUUsYUFMUztBQU85QixhQUFXO0FBQ1RDLElBQUFBLE9BQU8sRUFBRTtBQURBLEdBUG1CO0FBVzlCLG9CQUFrQjtBQUNoQkMsSUFBQUEsS0FBSztBQURXO0FBWFksQ0FBSixFQWN6QkMsUUFkeUIsRUFBNUI7O0FBZ0JBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxpQkFDNUIsdUJBQVcsU0FBU0EscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDQyxHQUF0QyxFQUEyQztBQUFBLE1BRWxEQyxLQUZrRCxHQVVoREYsS0FWZ0QsQ0FFbERFLEtBRmtEO0FBQUEsTUFHbERDLFFBSGtELEdBVWhESCxLQVZnRCxDQUdsREcsUUFIa0Q7QUFBQSx3QkFVaERILEtBVmdELENBSWxESSxRQUprRDtBQUFBLE1BSWxEQSxRQUprRCxnQ0FJdkNOLElBSnVDO0FBQUEsTUFLbERPLFNBTGtELEdBVWhETCxLQVZnRCxDQUtsREssU0FMa0Q7QUFBQSwwQkFVaERMLEtBVmdELENBTWxETSxVQU5rRDtBQUFBLE1BTWxEQSxVQU5rRCxrQ0FNckMsSUFOcUM7QUFBQSwyQkFVaEROLEtBVmdELENBT2xETyxXQVBrRDtBQUFBLE1BT2xEQSxXQVBrRCxtQ0FPcEMsV0FQb0M7QUFBQSxvQkFVaERQLEtBVmdELENBUWxEUSxJQVJrRDtBQUFBLE1BUWxEQSxJQVJrRCw0QkFRM0NDLGlCQVIyQztBQUFBLE1BUy9DQyxJQVQrQyw2Q0FVaERWLEtBVmdEO0FBWXBELE1BQU1XLFlBQVksR0FBRyx3QkFBWSxVQUFBQyxDQUFDO0FBQUEsV0FBSVIsUUFBUSxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU1gsS0FBVixDQUFaO0FBQUEsR0FBYixFQUEyQyxDQUFDRSxRQUFELENBQTNDLENBQXJCO0FBRUEsU0FDRSxnQ0FBQywyQkFBRCxFQUFxQk0sSUFBckIsRUFDRSxnQ0FBQyx3QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFRixJQURSO0FBRUUsSUFBQSxLQUFLLEVBQUMsT0FGUjtBQUdFLElBQUEsVUFBVSxFQUFFLENBSGQ7QUFJRSxJQUFBLFdBQVcsRUFBRSxFQUpmO0FBS0UsSUFBQSxJQUFJLEVBQUU7QUFMUixJQURGLEVBUUUsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxPQURMO0FBRUUsSUFBQSxJQUFJLEVBQUUsR0FGUjtBQUdFLElBQUEsSUFBSSxFQUFDLEdBSFA7QUFJRSxJQUFBLFNBQVMsRUFBRW5CLG1CQUpiO0FBS0UsSUFBQSxLQUFLLEVBQUVhLEtBTFQ7QUFNRSxJQUFBLFFBQVEsRUFBRVMsWUFOWjtBQU9FLElBQUEsU0FBUyxFQUFFTixTQVBiO0FBUUUsSUFBQSxVQUFVLEVBQUVDLFVBUmQ7QUFTRSxJQUFBLFVBQVUsRUFBRSxHQVRkO0FBVUUsSUFBQSxVQUFVLEVBQUUsQ0FBQyxDQVZmO0FBV0UsSUFBQSxXQUFXLEVBQUUsQ0FYZjtBQVlFLElBQUEsV0FBVyxFQUFFQyxXQVpmO0FBYUUsSUFBQSxHQUFHLEVBQUVOO0FBYlAsSUFSRixDQURGO0FBMEJELENBeENELENBRDRCLENBQTlCO0FBNENBRixxQkFBcUIsQ0FBQ2UsU0FBdEIsbUNBSUtDLDRCQUFnQkQsU0FKckI7QUFNRTs7O0FBR0FaLEVBQUFBLEtBQUssRUFBRWMsc0JBQVVDLE1BVG5COztBQVdFOzs7QUFHQWIsRUFBQUEsUUFBUSxFQUFFWSxzQkFBVUUsSUFkdEI7O0FBZ0JFOzs7QUFHQWIsRUFBQUEsU0FBUyxFQUFFVyxzQkFBVUcsSUFuQnZCOztBQXFCRTs7O0FBR0FiLEVBQUFBLFVBQVUsRUFBRVUsc0JBQVVHLElBeEJ4Qjs7QUEwQkU7OztBQUdBWixFQUFBQSxXQUFXLEVBQUVTLHNCQUFVQyxNQTdCekI7O0FBK0JFOzs7QUFHQVQsRUFBQUEsSUFBSSxFQUFFUSxzQkFBVUksU0FBVixDQUFvQixDQUFDSixzQkFBVUssV0FBWCxFQUF3Qkwsc0JBQVVNLE9BQWxDLENBQXBCO0FBbENSO2VBcUNldkIscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tICcuLi8uLi9pY29ucy9zcmMvSWNvbldyYXBwZXInXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgVGFibGVIZWFkZXJDZWxsIGZyb20gJy4vVGFibGVIZWFkZXJDZWxsJ1xuXG5jb25zdCBpbnZpc2libGVJbnB1dENsYXNzID0gY3NzKHtcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICBNb3pBcHBlYXJhbmNlOiAnbm9uZScsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG5cbiAgJyY6Zm9jdXMnOiB7XG4gICAgb3V0bGluZTogJ25vbmUnXG4gIH0sXG5cbiAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgIGNvbG9yOiBgcmdiYSg2NywgOTAsIDExMSwgMC43KWBcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgU2VhcmNoVGFibGVIZWFkZXJDZWxsID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBTZWFyY2hUYWJsZUhlYWRlckNlbGwocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBvbkNoYW5nZSA9IG5vb3AsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBzcGVsbENoZWNrID0gdHJ1ZSxcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0ZpbHRlci4uLicsXG4gICAgICBpY29uID0gU2VhcmNoSWNvbixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKGUgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpLCBbb25DaGFuZ2VdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUhlYWRlckNlbGwgey4uLnJlc3R9PlxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGNvbG9yPVwibXV0ZWRcIlxuICAgICAgICAgIG1hcmdpbkxlZnQ9ezJ9XG4gICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgIHNpemU9ezEyfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnZpc2libGVJbnB1dENsYXNzfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxuICAgICAgICAgIHNwZWxsQ2hlY2s9e3NwZWxsQ2hlY2t9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIG1hcmdpbkxlZnQ9ey0yfVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGVIZWFkZXJDZWxsPlxuICAgIClcbiAgfSlcbilcblxuU2VhcmNoVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUYWJsZUhlYWRlckNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgYXV0b21hdGljYWxseSBmb2N1c2VkIG9uIGNvbXBvbmVudCByZW5kZXIuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgdG8gYXBwbHkgc3BlbGwgY2hlY2tpbmcgdG8gdGhlIGNvbnRlbnQuXG4gICAqL1xuICBzcGVsbENoZWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IGluIHRoZSBpbnB1dCBpZiB0aGUgaW5wdXQgaXMgZW1wdHkuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIEV2ZXJncmVlbiBvciBjdXN0b20gaWNvbiBiZWZvcmUgdGhlIGxhYmVsLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbFxuIl19