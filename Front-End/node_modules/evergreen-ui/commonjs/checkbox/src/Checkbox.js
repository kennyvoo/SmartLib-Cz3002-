"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _hooks = require("../../hooks");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CheckIcon = function CheckIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["fill"]);
  return _react["default"].createElement("svg", (0, _extends2["default"])({
    width: 10,
    height: 7,
    viewBox: "0 0 10 7"
  }, props), _react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: _propTypes["default"].string
};

var MinusIcon = function MinusIcon(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? 'currentColor' : _ref2$fill,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["fill"]);
  return _react["default"].createElement("svg", (0, _extends2["default"])({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), _react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
  }));
};

MinusIcon.displayName = "MinusIcon";
MinusIcon.propTypes = {
  fill: _propTypes["default"].string
};

var noop = function noop() {};

var Checkbox = (0, _react.memo)((0, _react.forwardRef)(function Checkbox(props, forwardedRef) {
  var id = props.id,
      name = props.name,
      label = props.label,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      disabled = props.disabled,
      isInvalid = props.isInvalid,
      _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      value = props.value,
      _props$indeterminate = props.indeterminate,
      indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
      rest = (0, _objectWithoutProperties2["default"])(props, ["id", "name", "label", "appearance", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate"]);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      ref = _useState2[0],
      setRef = _useState2[1];

  var callbackRef = (0, _hooks.useMergedRef)(setRef, forwardedRef);
  (0, _react.useEffect)(function () {
    if (ref) {
      ref.indeterminate = indeterminate;
    }
  }, [ref, indeterminate]);
  var theme = (0, _theme.useTheme)();
  var themedClassName = theme.getCheckboxClassName(appearance);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "label",
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: "relative",
    display: "flex",
    marginY: 16
  }, rest), _react["default"].createElement(_uiBox["default"], {
    className: themedClassName,
    is: "input",
    id: id,
    type: "checkbox",
    name: name,
    value: value,
    checked: checked || indeterminate,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": isInvalid,
    ref: callbackRef
  }), _react["default"].createElement(_uiBox["default"], {
    boxSizing: "border-box",
    borderRadius: 3,
    display: "flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16
  }, indeterminate ? _react["default"].createElement(MinusIcon, null) : _react["default"].createElement(CheckIcon, null)), label && _react["default"].createElement(_typography.Text, {
    marginLeft: 8,
    size: 300,
    color: disabled ? 'muted' : 'default'
  }, label));
}));
Checkbox.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The id attribute of the checkbox.
   */
  id: _propTypes["default"].string,

  /**
   * The id attribute of the checkbox.
   */
  name: _propTypes["default"].string,

  /**
   * Label of the checkbox.
   */
  label: _propTypes["default"].node,

  /**
   * The value attribute of the checkbox.
   */
  value: _propTypes["default"].string,

  /**
   * The checked attribute of the checkbox.
   */
  checked: _propTypes["default"].bool,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: _propTypes["default"].bool,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string
});
var _default = Checkbox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jaGVja2JveC9zcmMvQ2hlY2tib3guanMiXSwibmFtZXMiOlsiQ2hlY2tJY29uIiwiZmlsbCIsInByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiTWludXNJY29uIiwibm9vcCIsIkNoZWNrYm94IiwiZm9yd2FyZGVkUmVmIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJhcHBlYXJhbmNlIiwiZGlzYWJsZWQiLCJpc0ludmFsaWQiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImluZGV0ZXJtaW5hdGUiLCJyZXN0IiwicmVmIiwic2V0UmVmIiwiY2FsbGJhY2tSZWYiLCJ0aGVtZSIsInRoZW1lZENsYXNzTmFtZSIsImdldENoZWNrYm94Q2xhc3NOYW1lIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIm5vZGUiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLHVCQUFHQyxJQUFIO0FBQUEsTUFBR0EsSUFBSCwwQkFBVSxjQUFWO0FBQUEsTUFBNkJDLEtBQTdCO0FBQUEsU0FDaEI7QUFBSyxJQUFBLEtBQUssRUFBRSxFQUFaO0FBQWdCLElBQUEsTUFBTSxFQUFFLENBQXhCO0FBQTJCLElBQUEsT0FBTyxFQUFDO0FBQW5DLEtBQWtEQSxLQUFsRCxHQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUVELElBRFI7QUFFRSxJQUFBLFFBQVEsRUFBQyxTQUZYO0FBR0UsSUFBQSxDQUFDLEVBQUM7QUFISixJQURGLENBRGdCO0FBQUEsQ0FBbEI7O0FBQU1ELFM7QUFVTkEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCO0FBQ3BCRixFQUFBQSxJQUFJLEVBQUVHLHNCQUFVQztBQURJLENBQXRCOztBQUlBLElBQU1DLFNBQVMsR0FB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QUF3Q0U7OztBQUdBZixFQUFBQSxRQUFRLEVBQUViLHNCQUFVNkIsSUEzQ3RCOztBQTZDRTs7O0FBR0FuQixFQUFBQSxRQUFRLEVBQUVWLHNCQUFVNEIsSUFoRHRCOztBQWtERTs7OztBQUlBakIsRUFBQUEsU0FBUyxFQUFFWCxzQkFBVTRCLElBdER2Qjs7QUF3REU7Ozs7QUFJQW5CLEVBQUFBLFVBQVUsRUFBRVQsc0JBQVVDO0FBNUR4QjtlQStEZUcsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyB1c2VNZXJnZWRSZWYgfSBmcm9tICcuLi8uLi9ob29rcydcblxuY29uc3QgQ2hlY2tJY29uID0gKHsgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9ezEwfSBoZWlnaHQ9ezd9IHZpZXdCb3g9XCIwIDAgMTAgN1wiIHsuLi5wcm9wc30+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgZD1cIk00IDQuNTg2TDEuNzA3IDIuMjkzQTEgMSAwIDEgMCAuMjkzIDMuNzA3bDMgM2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDUtNUExIDEgMCAxIDAgOC4yOTMuMjkzTDQgNC41ODZ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuQ2hlY2tJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBNaW51c0ljb24gPSAoeyBmaWxsID0gJ2N1cnJlbnRDb2xvcicsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNMTEgN0g1Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuTWludXNJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgQ2hlY2tib3ggPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIENoZWNrYm94KHByb3BzLCBmb3J3YXJkZWRSZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGNoZWNrZWQgPSBmYWxzZSxcbiAgICAgIG9uQ2hhbmdlID0gbm9vcCxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgW3JlZiwgc2V0UmVmXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgY2FsbGJhY2tSZWYgPSB1c2VNZXJnZWRSZWYoc2V0UmVmLCBmb3J3YXJkZWRSZWYpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHJlZikge1xuICAgICAgICByZWYuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGVcbiAgICAgIH1cbiAgICB9LCBbcmVmLCBpbmRldGVybWluYXRlXSlcblxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldENoZWNrYm94Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcid9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIG1hcmdpblk9ezE2fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIHJlZj17Y2FsbGJhY2tSZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXg9XCJub25lXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgID5cbiAgICAgICAgICB7aW5kZXRlcm1pbmF0ZSA/IDxNaW51c0ljb24gLz4gOiA8Q2hlY2tJY29uIC8+fVxuICAgICAgICA8L0JveD5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgbWFyZ2luTGVmdD17OH1cbiAgICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/ICdtdXRlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3guXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNoZWNrZWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTdGF0ZSBpbiBhZGRpdGlvbiB0byBcImNoZWNrZWRcIiBhbmQgXCJ1bmNoZWNrZWRcIi5cbiAgICogV2hlbiB0cnVlLCB0aGUgY2hlY2tib3ggZGlzcGxheXMgYSBcIm1pbnVzXCIgaWNvbi5cbiAgICovXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgYXJpYS1pbnZhbGlkIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgKiBVc2VkIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgKi9cbiAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIl19