import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { splitBoxProps } from 'ui-box';
import { FormField } from '../../form-field';
import { useId } from '../../hooks';
import Select from './Select';
var SelectField = memo(function SelectField(props) {
  var id = useId('SelectField', props.id);

  var unusedId = props.id,
      hint = props.hint,
      label = props.label,
      description = props.description,
      validationMessage = props.validationMessage,
      _props$inputHeight = props.inputHeight,
      inputHeight = _props$inputHeight === void 0 ? 32 : _props$inputHeight,
      _props$inputWidth = props.inputWidth,
      inputWidth = _props$inputWidth === void 0 ? '100%' : _props$inputWidth,
      disabled = props.disabled,
      required = props.required,
      isInvalid = props.isInvalid,
      appearance = props.appearance,
      rest = _objectWithoutProperties(props, ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance"]);
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
  }, matchedProps), React.createElement(Select, _extends({
    id: id,
    width: inputWidth,
    height: inputHeight,
    disabled: disabled,
    required: required,
    isInvalid: isInvalid,
    appearance: appearance
  }, remainingProps)));
});
SelectField.propTypes = _objectSpread(_objectSpread(_objectSpread({}, Select.propTypes), FormField.propTypes), {}, {
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
export default SelectField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdEZpZWxkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsIlByb3BUeXBlcyIsInNwbGl0Qm94UHJvcHMiLCJGb3JtRmllbGQiLCJ1c2VJZCIsIlNlbGVjdCIsIlNlbGVjdEZpZWxkIiwicHJvcHMiLCJpZCIsInVudXNlZElkIiwiaGludCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImlucHV0SGVpZ2h0IiwiaW5wdXRXaWR0aCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwicmVzdCIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJsYWJlbEZvciIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsUUFBNEIsT0FBNUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixRQUE5QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixhQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7QUFFQSxJQUFNQyxXQUFXLEdBQUdOLElBQUksQ0FBQyxTQUFTTSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUNuRCxNQUFNQyxFQUFFLEdBQUdKLEtBQUssQ0FBQyxhQUFELEVBQWdCRyxLQUFLLENBQUNDLEVBQXRCLENBQWhCOztBQURtRCxNQUs3Q0MsUUFMNkMsR0F3Qi9DRixLQXhCK0MsQ0FLakRDLEVBTGlEO0FBQUEsTUFRakRFLElBUmlELEdBd0IvQ0gsS0F4QitDLENBUWpERyxJQVJpRDtBQUFBLE1BU2pEQyxLQVRpRCxHQXdCL0NKLEtBeEIrQyxDQVNqREksS0FUaUQ7QUFBQSxNQVVqREMsV0FWaUQsR0F3Qi9DTCxLQXhCK0MsQ0FVakRLLFdBVmlEO0FBQUEsTUFXakRDLGlCQVhpRCxHQXdCL0NOLEtBeEIrQyxDQVdqRE0saUJBWGlEO0FBQUEsMkJBd0IvQ04sS0F4QitDLENBY2pETyxXQWRpRDtBQUFBLE1BY2pEQSxXQWRpRCxtQ0FjbkMsRUFkbUM7QUFBQSwwQkF3Qi9DUCxLQXhCK0MsQ0FnQmpEUSxVQWhCaUQ7QUFBQSxNQWdCakRBLFVBaEJpRCxrQ0FnQnBDLE1BaEJvQztBQUFBLE1BaUJqREMsUUFqQmlELEdBd0IvQ1QsS0F4QitDLENBaUJqRFMsUUFqQmlEO0FBQUEsTUFrQmpEQyxRQWxCaUQsR0F3Qi9DVixLQXhCK0MsQ0FrQmpEVSxRQWxCaUQ7QUFBQSxNQW1CakRDLFNBbkJpRCxHQXdCL0NYLEtBeEIrQyxDQW1CakRXLFNBbkJpRDtBQUFBLE1Bb0JqREMsVUFwQmlELEdBd0IvQ1osS0F4QitDLENBb0JqRFksVUFwQmlEO0FBQUEsTUF1QjlDQyxJQXZCOEMsNEJBd0IvQ2IsS0F4QitDO0FBMEJuRDs7Ozs7QUExQm1ELHVCQTZCVkwsYUFBYSxDQUFDa0IsSUFBRCxDQTdCSDtBQUFBLE1BNkIzQ0MsWUE3QjJDLGtCQTZCM0NBLFlBN0IyQztBQUFBLE1BNkI3QkMsY0E3QjZCLGtCQTZCN0JBLGNBN0I2Qjs7QUErQm5ELFNBQ0Usb0JBQUMsU0FBRDtBQUNFLElBQUEsWUFBWSxFQUFFLEVBRGhCO0FBRUUsSUFBQSxLQUFLLEVBQUVYLEtBRlQ7QUFHRSxJQUFBLFVBQVUsRUFBRU0sUUFIZDtBQUlFLElBQUEsSUFBSSxFQUFFUCxJQUpSO0FBS0UsSUFBQSxXQUFXLEVBQUVFLFdBTGY7QUFNRSxJQUFBLGlCQUFpQixFQUFFQyxpQkFOckI7QUFPRSxJQUFBLFFBQVEsRUFBRUw7QUFQWixLQVFNYSxZQVJOLEdBVUUsb0JBQUMsTUFBRDtBQUNFLElBQUEsRUFBRSxFQUFFYixFQUROO0FBRUUsSUFBQSxLQUFLLEVBQUVPLFVBRlQ7QUFHRSxJQUFBLE1BQU0sRUFBRUQsV0FIVjtBQUlFLElBQUEsUUFBUSxFQUFFRSxRQUpaO0FBS0UsSUFBQSxRQUFRLEVBQUVDLFFBTFo7QUFNRSxJQUFBLFNBQVMsRUFBRUMsU0FOYjtBQU9FLElBQUEsVUFBVSxFQUFFQztBQVBkLEtBUU1HLGNBUk4sRUFWRixDQURGO0FBdUJELENBdER1QixDQUF4QjtBQXdEQWhCLFdBQVcsQ0FBQ2lCLFNBQVosaURBSUtsQixNQUFNLENBQUNrQixTQUpaLEdBS0twQixTQUFTLENBQUNvQixTQUxmO0FBT0U7OztBQUdBWixFQUFBQSxLQUFLLEVBQUVWLFNBQVMsQ0FBQ3VCLElBQVYsQ0FBZUMsVUFWeEI7O0FBWUU7OztBQUdBQyxFQUFBQSxRQUFRLEVBQUV6QixTQUFTLENBQUMwQixNQWZ0Qjs7QUFpQkU7OztBQUdBVixFQUFBQSxRQUFRLEVBQUVoQixTQUFTLENBQUMyQixJQXBCdEI7O0FBc0JFOzs7QUFHQWhCLEVBQUFBLFdBQVcsRUFBRVgsU0FBUyxDQUFDdUIsSUF6QnpCOztBQTJCRTs7O0FBR0FkLEVBQUFBLElBQUksRUFBRVQsU0FBUyxDQUFDdUIsSUE5QmxCOztBQWdDRTs7OztBQUlBWCxFQUFBQSxpQkFBaUIsRUFBRVosU0FBUyxDQUFDdUIsSUFwQy9COztBQXNDRTs7O0FBR0FWLEVBQUFBLFdBQVcsRUFBRWIsU0FBUyxDQUFDNEIsTUF6Q3pCOztBQTJDRTs7O0FBR0FkLEVBQUFBLFVBQVUsRUFBRWQsU0FBUyxDQUFDNkIsU0FBVixDQUFvQixDQUFDN0IsU0FBUyxDQUFDNEIsTUFBWCxFQUFtQjVCLFNBQVMsQ0FBQzBCLE1BQTdCLENBQXBCO0FBOUNkO0FBaURBLGVBQWVyQixXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9mb3JtLWZpZWxkJ1xuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5cbmNvbnN0IFNlbGVjdEZpZWxkID0gbWVtbyhmdW5jdGlvbiBTZWxlY3RGaWVsZChwcm9wcykge1xuICBjb25zdCBpZCA9IHVzZUlkKCdTZWxlY3RGaWVsZCcsIHByb3BzLmlkKVxuXG4gIGNvbnN0IHtcbiAgICAvLyBXZSBhcmUgdXNpbmcgdGhlIGlkIGZyb20gdGhlIHN0YXRlXG4gICAgaWQ6IHVudXNlZElkLFxuXG4gICAgLy8gRm9ybUZpZWxkIHByb3BzXG4gICAgaGludCxcbiAgICBsYWJlbCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB2YWxpZGF0aW9uTWVzc2FnZSxcblxuICAgIC8vIFRleHRJbnB1dCBwcm9wc1xuICAgIGlucHV0SGVpZ2h0ID0gMzIsXG4gICAgLyoqIFRoZSBpbnB1dCB3aWR0aCBzaG91bGQgYmUgYXMgd2lkZSBhcyB0aGUgZm9ybSBmaWVsZC4gKi9cbiAgICBpbnB1dFdpZHRoID0gJzEwMCUnLFxuICAgIGRpc2FibGVkLFxuICAgIHJlcXVpcmVkLFxuICAgIGlzSW52YWxpZCxcbiAgICBhcHBlYXJhbmNlLFxuXG4gICAgLy8gUmVzdCBwcm9wcyBhcmUgc3ByZWFkIG9uIHRoZSBGb3JtRmllbGRcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICovXG4gIGNvbnN0IHsgbWF0Y2hlZFByb3BzLCByZW1haW5pbmdQcm9wcyB9ID0gc3BsaXRCb3hQcm9wcyhyZXN0KVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1GaWVsZFxuICAgICAgbWFyZ2luQm90dG9tPXsyNH1cbiAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgaGludD17aGludH1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlPXt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgIGxhYmVsRm9yPXtpZH1cbiAgICAgIHsuLi5tYXRjaGVkUHJvcHN9XG4gICAgPlxuICAgICAgPFNlbGVjdFxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHdpZHRoPXtpbnB1dFdpZHRofVxuICAgICAgICBoZWlnaHQ9e2lucHV0SGVpZ2h0fVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgaXNJbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgIC8+XG4gICAgPC9Gb3JtRmllbGQ+XG4gIClcbn0pXG5cblNlbGVjdEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBTZWxlY3QgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uU2VsZWN0LnByb3BUeXBlcyxcbiAgLi4uRm9ybUZpZWxkLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogUGFzc2VkIG9uIHRoZSBsYWJlbCBhcyBhIGh0bWxGb3IgcHJvcC5cbiAgICovXG4gIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgdW5kZXIgdGhlIGxhYmVsLCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgaGludCB1bmRlciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGhpbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICogYW5kIGFib3ZlIHRoZSBoaW50LiBUaGlzIGlzIHVuYWZmZWN0ZWQgYnkgYGlzSW52YWxpZGAuXG4gICAqL1xuICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB3aWR0aC5cbiAgICovXG4gIGlucHV0V2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RGaWVsZFxuIl19