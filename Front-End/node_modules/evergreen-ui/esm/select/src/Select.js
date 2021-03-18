import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import { Text } from '../../typography';
import { CaretDownIcon } from '../../icons';
import { useTheme } from '../../theme';
var Select = memo(forwardRef(function Select(props, ref) {
  var theme = useTheme();

  var id = props.id,
      name = props.name,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      children = props.children,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      onChange = props.onChange,
      value = props.value,
      required = props.required,
      autoFocus = props.autoFocus,
      _props$isInvalid = props.isInvalid,
      isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      restProps = _objectWithoutProperties(props, ["id", "name", "height", "children", "defaultValue", "disabled", "onChange", "value", "required", "autoFocus", "isInvalid", "appearance"]);

  var themedClassName = theme.getSelectClassName(appearance);
  var textSize = theme.getTextSizeForControlHeight(height);
  var borderRadius = theme.getBorderRadiusForControlHeight(height);
  var iconSize = theme.getIconSizeForSelect(height);
  var iconMargin = height >= 36 ? 12 : 8;
  return React.createElement(Box, _extends({
    ref: ref,
    display: "inline-flex",
    flex: 1,
    position: "relative",
    width: "auto",
    height: height
  }, restProps), React.createElement(Text, {
    is: "select",
    className: themedClassName,
    id: id,
    name: name,
    onChange: onChange,
    defaultValue: defaultValue,
    value: value,
    required: required,
    autoFocus: autoFocus,
    disabled: disabled,
    "aria-invalid": String(isInvalid),
    size: textSize,
    borderRadius: borderRadius,
    textTransform: "default",
    paddingLeft: Math.round(height / 3.2) // Provide enough space for auto-sizing select including the icon
    ,
    paddingRight: iconMargin * 2 + iconSize
  }, children), React.createElement(CaretDownIcon, {
    color: "default",
    size: iconSize,
    position: "absolute",
    top: "50%",
    marginTop: -iconSize / 2,
    right: iconMargin,
    pointerEvents: "none"
  }));
}));
Select.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The id attribute for the select.
   */
  id: PropTypes.string,

  /**
   * The name attribute for the select.
   */
  name: PropTypes.string,

  /**
   * The options that are passed to the select.
   */
  children: PropTypes.node,

  /**
   * The initial value of an uncontrolled select
   */
  defaultValue: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * The value of the select.
   */
  value: PropTypes.any,

  /**
   * When true, the select is required.
   */
  required: PropTypes.bool,

  /**
   * When true, the select should auto focus.
   */
  autoFocus: PropTypes.bool,

  /**
   * When true, the select is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance: PropTypes.string
});
export default Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiUHJvcFR5cGVzIiwiQm94IiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIlRleHQiLCJDYXJldERvd25JY29uIiwidXNlVGhlbWUiLCJTZWxlY3QiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJyZXN0UHJvcHMiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRTZWxlY3RDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9yU2VsZWN0IiwiaWNvbk1hcmdpbiIsIlN0cmluZyIsIk1hdGgiLCJyb3VuZCIsInByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJhbnkiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxVQUFkLEVBQTBCQyxPQUExQixFQUFtQ0MsUUFBbkMsRUFBNkNDLE1BQTdDLFFBQTJELFFBQTNEO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGFBQTlCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixhQUF6QjtBQUVBLElBQU1DLE1BQU0sR0FBR1gsSUFB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bnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgQ2FyZXREb3duSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgU2VsZWN0ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBTZWxlY3QocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGhlaWdodCA9IDMyLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGlzSW52YWxpZCA9IGZhbHNlLFxuICAgICAgYXBwZWFyYW5jZSA9ICdkZWZhdWx0JyxcbiAgICAgIC4uLnJlc3RQcm9wc1xuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0U2VsZWN0Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JTZWxlY3QoaGVpZ2h0KVxuICAgIGNvbnN0IGljb25NYXJnaW4gPSBoZWlnaHQgPj0gMzYgPyAxMiA6IDhcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIlxuICAgICAgICBmbGV4PXsxfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgd2lkdGg9XCJhdXRvXCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJzZWxlY3RcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e1N0cmluZyhpc0ludmFsaWQpfVxuICAgICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJkZWZhdWx0XCJcbiAgICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICAgIC8vIFByb3ZpZGUgZW5vdWdoIHNwYWNlIGZvciBhdXRvLXNpemluZyBzZWxlY3QgaW5jbHVkaW5nIHRoZSBpY29uXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0PXtpY29uTWFyZ2luICogMiArIGljb25TaXplfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxDYXJldERvd25JY29uXG4gICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICB0b3A9XCI1MCVcIlxuICAgICAgICAgIG1hcmdpblRvcD17LWljb25TaXplIC8gMn1cbiAgICAgICAgICByaWdodD17aWNvbk1hcmdpbn1cbiAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGlkIGF0dHJpYnV0ZSBmb3IgdGhlIHNlbGVjdC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgZm9yIHRoZSBzZWxlY3QuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9ucyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIHNlbGVjdC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGluaXRpYWwgdmFsdWUgb2YgYW4gdW5jb250cm9sbGVkIHNlbGVjdFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHNlbGVjdC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBzZWxlY3QgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIHNlbGVjdCBzaG91bGQgYXV0byBmb2N1cy5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIHNlbGVjdCBpcyBpbnZhbGlkLlxuICAgKi9cbiAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHNlbGVjdC4gVGhlIGRlZmF1bHQgdGhlbWUgb25seSBzdXBwb3J0cyBkZWZhdWx0LlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiJdfQ==