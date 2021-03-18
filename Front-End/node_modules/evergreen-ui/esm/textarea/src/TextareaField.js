import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { splitBoxProps } from 'ui-box';
import { FormField } from '../../form-field';
import { useId } from '../../hooks';
import Textarea from './Textarea';
var TextareaField = memo(forwardRef(function TextareaField(props, ref) {
  var id = useId('TextareaField', props.id);

  var unusedId = props.id,
      hint = props.hint,
      label = props.label,
      description = props.description,
      validationMessage = props.validationMessage,
      _props$inputHeight = props.inputHeight,
      inputHeight = _props$inputHeight === void 0 ? 80 : _props$inputHeight,
      _props$inputWidth = props.inputWidth,
      inputWidth = _props$inputWidth === void 0 ? '100%' : _props$inputWidth,
      disabled = props.disabled,
      required = props.required,
      isInvalid = props.isInvalid,
      appearance = props.appearance,
      placeholder = props.placeholder,
      spellCheck = props.spellCheck,
      rest = _objectWithoutProperties(props, ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"]);
  /**
   * Split the wrapper props from the input props.
   */


  var _splitBoxProps = splitBoxProps(rest),
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
  }, matchedProps), React.createElement(Textarea, _extends({
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
TextareaField.propTypes = _objectSpread(_objectSpread(_objectSpread({}, Textarea.propTypes), FormField.propTypes), {}, {
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

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
export default TextareaField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWFGaWVsZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiUHJvcFR5cGVzIiwic3BsaXRCb3hQcm9wcyIsIkZvcm1GaWVsZCIsInVzZUlkIiwiVGV4dGFyZWEiLCJUZXh0YXJlYUZpZWxkIiwicHJvcHMiLCJyZWYiLCJpZCIsInVudXNlZElkIiwiaGludCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImlucHV0SGVpZ2h0IiwiaW5wdXRXaWR0aCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwicmVzdCIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJib29sIiwibnVtYmVyIiwib25lT2ZUeXBlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLFFBQTlCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGFBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixZQUFyQjtBQUVBLElBQU1DLGFBQWEsR0FBR1AsSUFBSSxDQUN4QkMsVUFBVSxDQUFDLFNBQVNNLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxHQUE5QixFQUFtQztBQUM1QyxNQUFNQyxFQUFFLEdBQUdMLEtBQUssQ0FBQyxlQUFELEVBQWtCRyxLQUFLLENBQUNFLEVBQXhCLENBQWhCOztBQUQ0QyxNQUt0Q0MsUUFMc0MsR0EwQnhDSCxLQTFCd0MsQ0FLMUNFLEVBTDBDO0FBQUEsTUFRMUNF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QixNQUE3QixDQUFwQjtBQXpDZDtBQTRDQSxlQUFlMUIsYUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGxpdEJveFByb3BzIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS1maWVsZCdcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcblxuY29uc3QgVGV4dGFyZWFGaWVsZCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dGFyZWFGaWVsZChwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgaWQgPSB1c2VJZCgnVGV4dGFyZWFGaWVsZCcsIHByb3BzLmlkKVxuXG4gICAgY29uc3Qge1xuICAgICAgLy8gV2UgYXJlIHVzaW5nIHRoZSBpZCBmcm9tIHRoZSBzdGF0ZVxuICAgICAgaWQ6IHVudXNlZElkLFxuXG4gICAgICAvLyBGb3JtRmllbGQgcHJvcHNcbiAgICAgIGhpbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG5cbiAgICAgIC8vIFRleHRhcmVhIHByb3BzXG4gICAgICBpbnB1dEhlaWdodCA9IDgwLFxuICAgICAgLyoqIFRoZSBpbnB1dCB3aWR0aCBzaG91bGQgYmUgYXMgd2lkZSBhcyB0aGUgZm9ybSBmaWVsZC4gKi9cbiAgICAgIGlucHV0V2lkdGggPSAnMTAwJScsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgc3BlbGxDaGVjayxcblxuICAgICAgLy8gUmVzdCBwcm9wcyBhcmUgc3ByZWFkIG9uIHRoZSBGb3JtRmllbGRcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIC8qKlxuICAgICAqIFNwbGl0IHRoZSB3cmFwcGVyIHByb3BzIGZyb20gdGhlIGlucHV0IHByb3BzLlxuICAgICAqL1xuICAgIGNvbnN0IHsgbWF0Y2hlZFByb3BzLCByZW1haW5pbmdQcm9wcyB9ID0gc3BsaXRCb3hQcm9wcyhyZXN0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbWFyZ2luQm90dG9tPXsyNH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBpc1JlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgaGludD17aGludH1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZT17dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgIGxhYmVsRm9yPXtpZH1cbiAgICAgICAgey4uLm1hdGNoZWRQcm9wc31cbiAgICAgID5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHdpZHRoPXtpbnB1dFdpZHRofVxuICAgICAgICAgIGhlaWdodD17aW5wdXRIZWlnaHR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBpc0ludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgIClcbiAgfSlcbilcblxuVGV4dGFyZWFGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGV4dGFyZWEgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGV4dGFyZWEucHJvcFR5cGVzLFxuICAuLi5Gb3JtRmllbGQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdXNlZCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgdW5kZXIgdGhlIGxhYmVsLCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgaGludCB1bmRlciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGhpbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICogYW5kIGFib3ZlIHRoZSBoaW50LiBUaGlzIGlzIHVuYWZmZWN0ZWQgYnkgYGlzSW52YWxpZGAuXG4gICAqL1xuICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB3aWR0aC5cbiAgICovXG4gIGlucHV0V2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUZpZWxkXG4iXX0=