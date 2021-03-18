import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Text } from '../../typography';
import { useTheme } from '../../theme';
var TextInput = memo(forwardRef(function TextInput(props, ref) {
  var className = props.className,
      required = props.required,
      placeholder = props.placeholder,
      _props$width = props.width,
      width = _props$width === void 0 ? 280 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$isInvalid = props.isInvalid,
      isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$spellCheck = props.spellCheck,
      spellCheck = _props$spellCheck === void 0 ? true : _props$spellCheck,
      restProps = _objectWithoutProperties(props, ["className", "required", "placeholder", "width", "height", "disabled", "isInvalid", "appearance", "spellCheck"]);

  var theme = useTheme();
  var themedClassName = theme.getTextInputClassName(appearance);
  var textSize = theme.getTextSizeForControlHeight(height);
  var borderRadius = theme.getBorderRadiusForControlHeight(height);
  return React.createElement(Text, _extends({
    is: "input",
    className: cx(themedClassName, className),
    type: "text",
    size: textSize,
    width: width,
    height: height,
    required: required,
    disabled: disabled,
    placeholder: placeholder,
    paddingLeft: Math.round(height / 3.2),
    paddingRight: Math.round(height / 3.2),
    borderRadius: borderRadius,
    spellCheck: spellCheck,
    "aria-invalid": isInvalid
  }, disabled ? {
    color: 'muted'
  } : {}, {
    ref: ref
  }, restProps));
}));
TextInput.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * Makes the input element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * The appearance of the TextInput.
   */
  appearance: PropTypes.string,

  /**
   * The width of the TextInput.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default TextInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwibWVtbyIsIlByb3BUeXBlcyIsImN4IiwiVGV4dCIsInVzZVRoZW1lIiwiVGV4dElucHV0IiwicHJvcHMiLCJyZWYiLCJjbGFzc05hbWUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNhYmxlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJzcGVsbENoZWNrIiwicmVzdFByb3BzIiwidGhlbWUiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRUZXh0SW5wdXRDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJNYXRoIiwicm91bmQiLCJjb2xvciIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLElBQTVCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBRUEsSUFBTUMsU0FBUyxHQUFHTCxJQUFJLENBQ3BCRCxVQUFVLENBQUMsU0FBU00sU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQUEsTUFFdENDLFNBRnNDLEdBWXBDRixLQVpvQyxDQUV0Q0UsU0FGc0M7QUFBQSxNQUd0Q0MsUUFIc0MsR0FZcENILEtBWm9DLENBR3RDRyxRQUhzQztBQUFBLE1BSXRDQyxXQUpzQyxHQVlwQ0osS0Fab0MsQ0FJdENJLFdBSnNDO0FB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UmVhY3QsIHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IFRleHRJbnB1dCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dElucHV0KHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgd2lkdGggPSAyODAsXG4gICAgICBoZWlnaHQgPSAzMixcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBpc0ludmFsaWQgPSBmYWxzZSxcbiAgICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgICBzcGVsbENoZWNrID0gdHJ1ZSxcbiAgICAgIC4uLnJlc3RQcm9wc1xuICAgIH0gPSBwcm9wc1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0VGV4dElucHV0Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgey4uLihkaXNhYmxlZCA/IHsgY29sb3I6ICdtdXRlZCcgfSA6IHt9KX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuVGV4dElucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUZXh0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBNYWtlcyB0aGUgaW5wdXQgZWxlbWVudCByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWFrZXMgdGhlIGlucHV0IGVsZW1lbnQgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNldHMgdmlzdWFsIHN0eWxpbmcgb2YgX29ubHlfIHRoZSB0ZXh0IGlucHV0IHRvIGJlIFwiaW52YWxpZFwiLlxuICAgKiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBlZmZlY3QgYW55IGB2YWxpZGF0aW9uTWVzc2FnZWAuXG4gICAqL1xuICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIG5hdGl2ZSBzcGVsbCBjaGVjayBmdW5jdGlvbmFsaXR5IG9mIHRoZSBicm93c2VyLlxuICAgKi9cbiAgc3BlbGxDaGVjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZWhvbGRlciB0ZXh0IHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgcHJlc2VudC5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgVGV4dElucHV0LlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAqL1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0XG4iXX0=