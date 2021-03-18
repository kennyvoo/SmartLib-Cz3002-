import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import { Text } from '../../typography';
import { useTheme } from '../../theme';
import { useMergedRef } from '../../hooks';

var CheckIcon = function CheckIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, ["fill"]);

  return React.createElement("svg", _extends({
    width: 10,
    height: 7,
    viewBox: "0 0 10 7"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: PropTypes.string
};

var MinusIcon = function MinusIcon(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? 'currentColor' : _ref2$fill,
      props = _objectWithoutProperties(_ref2, ["fill"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
  }));
};

MinusIcon.displayName = "MinusIcon";
MinusIcon.propTypes = {
  fill: PropTypes.string
};

var noop = function noop() {};

var Checkbox = memo(forwardRef(function Checkbox(props, forwardedRef) {
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
      rest = _objectWithoutProperties(props, ["id", "name", "label", "appearance", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      ref = _useState2[0],
      setRef = _useState2[1];

  var callbackRef = useMergedRef(setRef, forwardedRef);
  useEffect(function () {
    if (ref) {
      ref.indeterminate = indeterminate;
    }
  }, [ref, indeterminate]);
  var theme = useTheme();
  var themedClassName = theme.getCheckboxClassName(appearance);
  return React.createElement(Box, _extends({
    is: "label",
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: "relative",
    display: "flex",
    marginY: 16
  }, rest), React.createElement(Box, {
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
  }), React.createElement(Box, {
    boxSizing: "border-box",
    borderRadius: 3,
    display: "flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16
  }, indeterminate ? React.createElement(MinusIcon, null) : React.createElement(CheckIcon, null)), label && React.createElement(Text, {
    marginLeft: 8,
    size: 300,
    color: disabled ? 'muted' : 'default'
  }, label));
}));
Checkbox.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The id attribute of the checkbox.
   */
  id: PropTypes.string,

  /**
   * The id attribute of the checkbox.
   */
  name: PropTypes.string,

  /**
   * Label of the checkbox.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the checkbox.
   */
  value: PropTypes.string,

  /**
   * The checked attribute of the checkbox.
   */
  checked: PropTypes.bool,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: PropTypes.bool,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string
});
export default Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jaGVja2JveC9zcmMvQ2hlY2tib3guanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiQm94Iiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlRleHQiLCJ1c2VUaGVtZSIsInVzZU1lcmdlZFJlZiIsIkNoZWNrSWNvbiIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsIk1pbnVzSWNvbiIsIm5vb3AiLCJDaGVja2JveCIsImZvcndhcmRlZFJlZiIsImlkIiwibmFtZSIsImxhYmVsIiwiYXBwZWFyYW5jZSIsImRpc2FibGVkIiwiaXNJbnZhbGlkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJpbmRldGVybWluYXRlIiwicmVzdCIsInJlZiIsInNldFJlZiIsImNhbGxiYWNrUmVmIiwidGhlbWUiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRDaGVja2JveENsYXNzTmFtZSIsIm5vZGUiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLEVBQWtDQyxTQUFsQyxFQUE2Q0MsUUFBN0MsUUFBNkQsT0FBN0Q7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxPQUFkLEVBQXVCQyxRQUF2QixFQUFpQ0MsTUFBakMsRUFBeUNDLFVBQXpDLFFBQTJELFFBQTNEO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixhQUE3Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLHVCQUFHQyxJQUFIO0FBQUEsTUFBR0EsSUFBSCwwQkFBVSxjQUFWO0FBQUEsTUFBNkJD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SixTQUFULDZFQUlLVixPQUFPLENBQUNVLFNBSmIsR0FLS1QsUUFBUSxDQUFDUyxTQUxkLEdBTUtSLE1BQU0sQ0FBQ1EsU0FOWixHQU9LUCxVQUFVLENBQUNPLFNBUGhCO0FBU0U7OztBQUdBTSxFQUFBQSxFQUFFLEVBQUVsQixTQUFTLENBQUNhLE1BWmhCOztBQWNFOzs7QUFHQU0sRUFBQUEsSUFBSSxFQUFFbkIsU0FBUyxDQUFDYSxNQWpCbEI7O0FBbUJFOzs7QUFHQU8sRUFBQUEsS0FBSyxFQUFFcEIsU0FBUyxDQUFDbUMsSUF0Qm5COztBQXdCRTs7O0FBR0FULEVBQUFBLEtBQUssRUFBRTFCLFNBQVMsQ0FBQ2EsTUEzQm5COztBQTZCRTs7O0FBR0FXLEVBQUFBLE9BQU8sRUFBRXhCLFNBQVMsQ0FBQ29DLElBaENyQjs7QUFrQ0U7Ozs7QUFJQVQsRUFBQUEsYUFBYSxFQUFFM0IsU0FBUyxDQUFDb0MsSUF0QzNCOztBQXdDRTs7O0FBR0FYLEVBQUFBLFFBQVEsRUFBRXpCLFNBQVMsQ0FBQ3FDLElBM0N0Qjs7QUE2Q0U7OztBQUdBZixFQUFBQSxRQUFRLEVBQUV0QixTQUFTLENBQUNvQyxJQWhEdEI7O0FBa0RFOzs7O0FBSUFiLEVBQUFBLFNBQVMsRUFBRXZCLFNBQVMsQ0FBQ29DLElBdER2Qjs7QUF3REU7Ozs7QUFJQWYsRUFBQUEsVUFBVSxFQUFFckIsU0FBUyxDQUFDYTtBQTVEeEI7QUErREEsZUFBZUcsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyB1c2VNZXJnZWRSZWYgfSBmcm9tICcuLi8uLi9ob29rcydcblxuY29uc3QgQ2hlY2tJY29uID0gKHsgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9ezEwfSBoZWlnaHQ9ezd9IHZpZXdCb3g9XCIwIDAgMTAgN1wiIHsuLi5wcm9wc30+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgZD1cIk00IDQuNTg2TDEuNzA3IDIuMjkzQTEgMSAwIDEgMCAuMjkzIDMuNzA3bDMgM2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDUtNUExIDEgMCAxIDAgOC4yOTMuMjkzTDQgNC41ODZ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuQ2hlY2tJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBNaW51c0ljb24gPSAoeyBmaWxsID0gJ2N1cnJlbnRDb2xvcicsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNMTEgN0g1Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuTWludXNJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgQ2hlY2tib3ggPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIENoZWNrYm94KHByb3BzLCBmb3J3YXJkZWRSZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGNoZWNrZWQgPSBmYWxzZSxcbiAgICAgIG9uQ2hhbmdlID0gbm9vcCxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgW3JlZiwgc2V0UmVmXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgY2FsbGJhY2tSZWYgPSB1c2VNZXJnZWRSZWYoc2V0UmVmLCBmb3J3YXJkZWRSZWYpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHJlZikge1xuICAgICAgICByZWYuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGVcbiAgICAgIH1cbiAgICB9LCBbcmVmLCBpbmRldGVybWluYXRlXSlcblxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldENoZWNrYm94Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcid9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIG1hcmdpblk9ezE2fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIHJlZj17Y2FsbGJhY2tSZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXg9XCJub25lXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgID5cbiAgICAgICAgICB7aW5kZXRlcm1pbmF0ZSA/IDxNaW51c0ljb24gLz4gOiA8Q2hlY2tJY29uIC8+fVxuICAgICAgICA8L0JveD5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgbWFyZ2luTGVmdD17OH1cbiAgICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/ICdtdXRlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3guXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNoZWNrZWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTdGF0ZSBpbiBhZGRpdGlvbiB0byBcImNoZWNrZWRcIiBhbmQgXCJ1bmNoZWNrZWRcIi5cbiAgICogV2hlbiB0cnVlLCB0aGUgY2hlY2tib3ggZGlzcGxheXMgYSBcIm1pbnVzXCIgaWNvbi5cbiAgICovXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgYXJpYS1pbnZhbGlkIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgKiBVc2VkIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgKi9cbiAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIl19