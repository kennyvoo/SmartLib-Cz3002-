import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { splitBoxProps } from 'ui-box';
import { FormField } from '../../form-field';
import { useId } from '../../hooks';
import { majorScale } from '../../scales';
import TextInput from './TextInput';
var TextInputField = memo(forwardRef(function TextInputField(props, ref) {
  var id = useId('TextInputField', props.id);

  var unusedId = props.id,
      hint = props.hint,
      label = props.label,
      description = props.description,
      validationMessage = props.validationMessage,
      disabled = props.disabled,
      required = props.required,
      isInvalid = props.isInvalid,
      appearance = props.appearance,
      placeholder = props.placeholder,
      spellCheck = props.spellCheck,
      _props$inputHeight = props.inputHeight,
      inputHeight = _props$inputHeight === void 0 ? majorScale(4) : _props$inputHeight,
      _props$inputWidth = props.inputWidth,
      inputWidth = _props$inputWidth === void 0 ? '100%' : _props$inputWidth,
      restProps = _objectWithoutProperties(props, ["id", "hint", "label", "description", "validationMessage", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "inputHeight", "inputWidth"]);
  /**
   * Split the wrapper props from the input props.
   */


  var _splitBoxProps = splitBoxProps(restProps),
      matchedProps = _splitBoxProps.matchedProps,
      remainingProps = _splitBoxProps.remainingProps;

  return React.createElement(FormField, _extends({
    marginBottom: 24,
    label: label,
    isRequired: required,
    hint: hint,
    description: description,
    validationMessage: validationMessage,
    labelFor: id
  }, matchedProps), React.createElement(TextInput, _extends({
    id: id,
    width: inputWidth,
    height: inputHeight,
    disabled: disabled,
    required: required,
    isInvalid: isInvalid,
    appearance: appearance,
    placeholder: placeholder,
    spellCheck: spellCheck,
    ref: ref
  }, remainingProps)));
}));
TextInputField.propTypes = _objectSpread(_objectSpread(_objectSpread({}, TextInput.propTypes), FormField.propTypes), {}, {
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not to show an asterix after the label.
   */
  required: PropTypes.bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: PropTypes.node,

  /**
   * An optional hint under the input element.
   */
  hint: PropTypes.node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: PropTypes.node,

  /**
   * The height of the input element.
   */
  inputHeight: PropTypes.number,

  /**
   * The width of the input width.
   */
  inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
});
export default TextInputField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXRGaWVsZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJtZW1vIiwiUHJvcFR5cGVzIiwic3BsaXRCb3hQcm9wcyIsIkZvcm1GaWVsZCIsInVzZUlkIiwibWFqb3JTY2FsZSIsIlRleHRJbnB1dCIsIlRleHRJbnB1dEZpZWxkIiwicHJvcHMiLCJyZWYiLCJpZCIsInVudXNlZElkIiwiaGludCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwiaW5wdXRIZWlnaHQiLCJpbnB1dFdpZHRoIiwicmVzdFByb3BzIiwibWF0Y2hlZFByb3BzIiwicmVtYWluaW5nUHJvcHMiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImxhYmVsRm9yIiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixRQUE5QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixhQUF0QjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsY0FBM0I7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBRUEsSUFBTUMsY0FBYyxHQUFHUCxJQUFJLENBQ3pCRCxVQUFVLENBQUMsU0FBU1EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JDLEdBQS9CLEVBQW9DO0FBQzdDLE1BQU1DLEVBQUUsR0FBR04sS0FBSyxDQUFDLGdCQUFELEVBQW1CSSxLQUFLLENBQUNFLEVBQXpCLENB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QUEsV0FBVyxFQUFFckIsU0FBUyxDQUFDZ0MsTUF6Q3pCOztBQTJDRTs7O0FBR0FWLEVBQUFBLFVBQVUsRUFBRXRCLFNBQVMsQ0FBQ2lDLFNBQVYsQ0FBb0IsQ0FBQ2pDLFNBQVMsQ0FBQ2dDLE1BQVgsRUFBbUJoQyxTQUFTLENBQUM4QixNQUE3QixDQUFwQjtBQTlDZDtBQWlEQSxlQUFleEIsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGxpdEJveFByb3BzIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS1maWVsZCdcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBtYWpvclNjYWxlIH0gZnJvbSAnLi4vLi4vc2NhbGVzJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcblxuY29uc3QgVGV4dElucHV0RmllbGQgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHRJbnB1dEZpZWxkKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCBpZCA9IHVzZUlkKCdUZXh0SW5wdXRGaWVsZCcsIHByb3BzLmlkKVxuXG4gICAgY29uc3Qge1xuICAgICAgLy8gV2UgYXJlIHVzaW5nIHRoZSBpZCBmcm9tIHRoZSBzdGF0ZVxuICAgICAgaWQ6IHVudXNlZElkLFxuXG4gICAgICAvLyBGb3JtRmllbGQgcHJvcHNcbiAgICAgIGhpbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG5cbiAgICAgIC8vIFRleHRJbnB1dCBwcm9wc1xuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG4gICAgICBpbnB1dEhlaWdodCA9IG1ham9yU2NhbGUoNCksXG4gICAgICBpbnB1dFdpZHRoID0gJzEwMCUnLFxuXG4gICAgICAvLyBSZXN0IHByb3BzIGFyZSBzcHJlYWQgb24gdGhlIEZvcm1GaWVsZFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocmVzdFByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbWFyZ2luQm90dG9tPXsyNH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBpc1JlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgaGludD17aGludH1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZT17dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgIGxhYmVsRm9yPXtpZH1cbiAgICAgICAgey4uLm1hdGNoZWRQcm9wc31cbiAgICAgID5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB3aWR0aD17aW5wdXRXaWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2lucHV0SGVpZ2h0fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgaXNJbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICB7Li4ucmVtYWluaW5nUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICApXG4gIH0pXG4pXG5cblRleHRJbnB1dEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUZXh0SW5wdXQgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGV4dElucHV0LnByb3BUeXBlcyxcbiAgLi4uRm9ybUZpZWxkLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogUGFzc2VkIG9uIHRoZSBsYWJlbCBhcyBhIGh0bWxGb3IgcHJvcC5cbiAgICovXG4gIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgdW5kZXIgdGhlIGxhYmVsLCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgaGludCB1bmRlciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGhpbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICogYW5kIGFib3ZlIHRoZSBoaW50LiBUaGlzIGlzIHVuYWZmZWN0ZWQgYnkgYGlzSW52YWxpZGAuXG4gICAqL1xuICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB3aWR0aC5cbiAgICovXG4gIGlucHV0V2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXRGaWVsZFxuIl19