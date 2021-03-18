import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Text } from '../../typography';
import { useTheme } from '../../theme';
var styles = {
  minHeight: 80,
  paddingX: 10,
  paddingY: 8
};
var Textarea = memo(forwardRef(function Textarea(props, ref) {
  var theme = useTheme();

  var className = props.className,
      _props$width = props.width,
      width = _props$width === void 0 ? '100%' : _props$width,
      height = props.height,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      required = props.required,
      _props$isInvalid = props.isInvalid,
      isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      placeholder = props.placeholder,
      _props$spellCheck = props.spellCheck,
      spellCheck = _props$spellCheck === void 0 ? true : _props$spellCheck,
      _props$grammarly = props.grammarly,
      grammarly = _props$grammarly === void 0 ? false : _props$grammarly,
      restProps = _objectWithoutProperties(props, ["className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "grammarly"]);

  var themedClassName = theme.getTextareaClassName(appearance);
  return React.createElement(Text, _extends({
    is: "textarea",
    ref: ref,
    className: cx(themedClassName, className),
    size: 400,
    width: width,
    height: height,
    required: required,
    disabled: disabled,
    placeholder: placeholder,
    paddingLeft: Math.round(height / 3.2),
    paddingRight: Math.round(height / 3.2),
    borderRadius: 3,
    spellCheck: spellCheck,
    "aria-invalid": isInvalid,
    "data-gramm_editor": grammarly
  }, disabled ? {
    color: 'muted'
  } : {}, styles, restProps));
}));
Textarea.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * Makes the textarea element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the textarea element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: PropTypes.bool,

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
export default Textarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlByb3BUeXBlcyIsImN4IiwiVGV4dCIsInVzZVRoZW1lIiwic3R5bGVzIiwibWluSGVpZ2h0IiwicGFkZGluZ1giLCJwYWRkaW5nWSIsIlRleHRhcmVhIiwicHJvcHMiLCJyZWYiLCJ0aGVtZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJncmFtbWFybHkiLCJyZXN0UHJvcHMiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRUZXh0YXJlYUNsYXNzTmFtZSIsIk1hdGgiLCJyb3VuZCIsImNvbG9yIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFFQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsU0FBUyxFQUFFLEVBREU7QUFFYkMsRUFBQUEsUUFBUSxFQUFFLEVBRkc7QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBR1YsSUFBSSxDQUNuQkMsVUFBVSxDQUFDLFNBQVNTLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN2QyxNQUFNQyxLQUFLLEdBQUdSLFFBQVEsRUFBdEI7O0FBRHVDLE1BR3JDUyxTQUhxQyxHQWNuQ0gsS0FkbUMs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Q0FBQzhCO0FBbkR2QjtBQXNEQSxlQUFldEIsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3Qgc3R5bGVzID0ge1xuICBtaW5IZWlnaHQ6IDgwLFxuICBwYWRkaW5nWDogMTAsXG4gIHBhZGRpbmdZOiA4XG59XG5cbmNvbnN0IFRleHRhcmVhID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUZXh0YXJlYShwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGggPSAnMTAwJScsXG4gICAgICBoZWlnaHQsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBpc0ludmFsaWQgPSBmYWxzZSxcbiAgICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2sgPSB0cnVlLFxuICAgICAgZ3JhbW1hcmx5ID0gZmFsc2UsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHRhcmVhQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgc2l6ZT17NDAwfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXszfVxuICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgZGF0YS1ncmFtbV9lZGl0b3I9e2dyYW1tYXJseX1cbiAgICAgICAgey4uLihkaXNhYmxlZCA/IHsgY29sb3I6ICdtdXRlZCcgfSA6IHt9KX1cbiAgICAgICAgey4uLnN0eWxlc31cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuXG5UZXh0YXJlYS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGV4dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogTWFrZXMgdGhlIHRleHRhcmVhIGVsZW1lbnQgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSB0ZXh0YXJlYSBlbGVtZW50IGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIHZpc3VhbCBzdHlsaW5nIG9mIF9vbmx5XyB0aGUgdGV4dCBhcmVhIHRvIGJlIFwiaW52YWxpZFwiLlxuICAgKiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBlZmZlY3QgYW55IGB2YWxpZGF0aW9uTWVzc2FnZWAuXG4gICAqL1xuICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIG5hdGl2ZSBzcGVsbCBjaGVjayBmdW5jdGlvbmFsaXR5IG9mIHRoZSBicm93c2VyLlxuICAgKi9cbiAgc3BlbGxDaGVjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFsbG93IHRoZSBHcmFtbWFybHkgYnJvd3NlciBleHRlbnNpb24gdG8gYXR0YWNoIHRvIHRoZSBiYWNraW5nIHRleHRhcmVhLlxuICAgKi9cbiAgZ3JhbW1hcmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBwcmVzZW50LlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAqL1xuICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIFRleHRJbnB1dC5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuIl19