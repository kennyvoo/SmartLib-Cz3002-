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

var _uiBox = require("ui-box");

var _formField = require("../../form-field");

var _hooks = require("../../hooks");

var _Select = _interopRequireDefault(require("./Select"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SelectField = (0, _react.memo)(function SelectField(props) {
  var id = (0, _hooks.useId)('SelectField', props.id);
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
      rest = (0, _objectWithoutProperties2["default"])(props, ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance"]);
  /**
   * Split the wrapper props from the input props.
   */

  var _splitBoxProps = (0, _uiBox.splitBoxProps)(rest),
      matchedProps = _splitBoxProps.matchedProps,
      remainingProps = _splitBoxProps.remainingProps;

  return _react["default"].createElement(_formField.FormField, (0, _extends2["default"])({
    marginBottom: 24,
    label: label,
    isRequired: required,
    hint: hint,
    description: description,
    validationMessage: validationMessage,
    labelFor: id
  }, matchedProps), _react["default"].createElement(_Select["default"], (0, _extends2["default"])({
    id: id,
    width: inputWidth,
    height: inputHeight,
    disabled: disabled,
    required: required,
    isInvalid: isInvalid,
    appearance: appearance
  }, remainingProps)));
});
SelectField.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _Select["default"].propTypes), _formField.FormField.propTypes), {}, {
  /**
   * The label used above the input element.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: _propTypes["default"].string,

  /**
   * Whether or not to show an asterix after the label.
   */
  required: _propTypes["default"].bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: _propTypes["default"].node,

  /**
   * An optional hint under the input element.
   */
  hint: _propTypes["default"].node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: _propTypes["default"].node,

  /**
   * The height of the input element.
   */
  inputHeight: _propTypes["default"].number,

  /**
   * The width of the input width.
   */
  inputWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
});
var _default = SelectField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdEZpZWxkLmpzIl0sIm5hbWVzIjpbIlNlbGVjdEZpZWxkIiwicHJvcHMiLCJpZCIsInVudXNlZElkIiwiaGludCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImlucHV0SGVpZ2h0IiwiaW5wdXRXaWR0aCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwicmVzdCIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwicHJvcFR5cGVzIiwiU2VsZWN0IiwiRm9ybUZpZWxkIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJsYWJlbEZvciIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxpQkFBSyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUNuRCxNQUFNQyxFQUFFLEdBQUcsa0JBQU0sYUFBTixFQUFxQkQsS0FBSyxDQUFDQyxFQUEzQixDQUFYO0FBRG1ELE1BSzdDQyxRQUw2QyxHQXdCL0NGLEtBeEIrQyxDQUtqREMsRUFMaUQ7QUFBQSxNQVFqREUsSUFSaUQsR0F3Qi9DSCxLQXhCK0MsQ0FRakRHLElBUmlEO0FBQUEsTUFTakRDLEtBVGlELEdBd0IvQ0osS0F4QitDLENBU2pESSxLQVRpRDtBQUFBLE1BVWpEQyxXQVZpRCxHQXdCL0NMLEtBeEIrQyxDQVVqREssV0FWaUQ7QUFBQSxNQVdqREMsaUJBWGlELEdBd0IvQ04sS0F4QitDLENBV2pETSxpQkFYaUQ7QUFBQSwyQkF3Qi9DTixLQXhCK0MsQ0FjakRPLFdBZGlEO0FBQUEsTUFjakRBLFdBZGlELG1DQWNuQyxFQWRtQztBQUFBLDBCQXdCL0NQLEtBeEIrQyxDQWdCakRRLFVBaEJpRDtBQUFBLE1BZ0JqREEsVUFoQmlELGtDQWdCcEMsTUFoQm9DO0FBQUEsTUFpQmpEQyxRQWpCaUQsR0F3Qi9DVCxLQXhCK0MsQ0FpQmpEUyxRQWpCaUQ7QUFBQSxNQWtCakRDLFFBbEJpRCxHQXdCL0NWLEtBeEIrQyxDQWtCakRVLFFBbEJpRDtBQUFBLE1BbUJqREMsU0FuQmlELEdBd0IvQ1gsS0F4QitDLENBbUJqRFcsU0FuQmlEO0FBQUEsTUFvQmpEQyxVQXBCaUQsR0F3Qi9DWixLQXhCK0MsQ0FvQmpEWSxVQXBCaUQ7QUFBQSxNQXVCOUNDLElBdkI4Qyw2Q0F3Qi9DYixLQXhCK0M7QUEwQm5EOzs7O0FBMUJtRCx1QkE2QlYsMEJBQWNhLElBQWQsQ0E3QlU7QUFBQSxNQTZCM0NDLFlBN0IyQyxrQkE2QjNDQSxZQTdCMkM7QUFBQSxNQTZCN0JDLGNBN0I2QixrQkE2QjdCQSxjQTdCNkI7O0FBK0JuRCxTQUNFLGdDQUFDLG9CQUFEO0FBQ0UsSUFBQSxZQUFZLEVBQUUsRUFEaEI7QUFFRSxJQUFBLEtBQUssRUFBRVgsS0FGVDtBQUdFLElBQUEsVUFBVSxFQUFFTSxRQUhkO0FBSUUsSUFBQSxJQUFJLEVBQUVQLElBSlI7QUFLRSxJQUFBLFdBQVcsRUFBRUUsV0FMZjtBQU1FLElBQUEsaUJBQWlCLEVBQUVDLGlCQU5yQjtBQU9FLElBQUEsUUFBUSxFQUFFTDtBQVBaLEtBUU1hLFlBUk4sR0FVRSxnQ0FBQyxrQkFBRDtBQUNFLElBQUEsRUFBRSxFQUFFYixFQUROO0FBRUUsSUFBQSxLQUFLLEVBQUVPLFVBRlQ7QUFHRSxJQUFBLE1BQU0sRUFBRUQsV0FIVjtBQUlFLElBQUEsUUFBUSxFQUFFRSxRQUpaO0FBS0UsSUFBQSxRQUFRLEVBQUVDLFFBTFo7QUFNRSxJQUFBLFNBQVMsRUFBRUMsU0FOYjtBQU9FLElBQUEsVUFBVSxFQUFFQztBQVBkLEtBUU1HLGNBUk4sRUFWRixDQURGO0FBdUJELENBdERtQixDQUFwQjtBQXdEQWhCLFdBQVcsQ0FBQ2lCLFNBQVosaURBSUtDLG1CQUFPRCxTQUpaLEdBS0tFLHFCQUFVRixTQUxmO0FBT0U7OztBQUdBWixFQUFBQSxLQUFLLEVBQUVlLHNCQUFVQyxJQUFWLENBQWVDLFVBVnhCOztBQVlFOzs7QUFHQUMsRUFBQUEsUUFBUSxFQUFFSCxzQkFBVUksTUFmdEI7O0FBaUJFOzs7QUFHQWIsRUFBQUEsUUFBUSxFQUFFUyxzQkFBVUssSUFwQnRCOztBQXNCRTs7O0FBR0FuQixFQUFBQSxXQUFXLEVBQUVjLHNCQUFVQyxJQXpCekI7O0FBMkJFOzs7QUFHQWpCLEVBQUFBLElBQUksRUFBRWdCLHNCQUFVQyxJQTlCbEI7O0FBZ0NFOzs7O0FBSUFkLEVBQUFBLGlCQUFpQixFQUFFYSxzQkFBVUMsSUFwQy9COztBQXNDRTs7O0FBR0FiLEVBQUFBLFdBQVcsRUFBRVksc0JBQVVNLE1BekN6Qjs7QUEyQ0U7OztBQUdBakIsRUFBQUEsVUFBVSxFQUFFVyxzQkFBVU8sU0FBVixDQUFvQixDQUFDUCxzQkFBVU0sTUFBWCxFQUFtQk4sc0JBQVVJLE1BQTdCLENBQXBCO0FBOUNkO2VBaURleEIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGxpdEJveFByb3BzIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS1maWVsZCdcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0J1xuXG5jb25zdCBTZWxlY3RGaWVsZCA9IG1lbW8oZnVuY3Rpb24gU2VsZWN0RmllbGQocHJvcHMpIHtcbiAgY29uc3QgaWQgPSB1c2VJZCgnU2VsZWN0RmllbGQnLCBwcm9wcy5pZClcblxuICBjb25zdCB7XG4gICAgLy8gV2UgYXJlIHVzaW5nIHRoZSBpZCBmcm9tIHRoZSBzdGF0ZVxuICAgIGlkOiB1bnVzZWRJZCxcblxuICAgIC8vIEZvcm1GaWVsZCBwcm9wc1xuICAgIGhpbnQsXG4gICAgbGFiZWwsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG5cbiAgICAvLyBUZXh0SW5wdXQgcHJvcHNcbiAgICBpbnB1dEhlaWdodCA9IDMyLFxuICAgIC8qKiBUaGUgaW5wdXQgd2lkdGggc2hvdWxkIGJlIGFzIHdpZGUgYXMgdGhlIGZvcm0gZmllbGQuICovXG4gICAgaW5wdXRXaWR0aCA9ICcxMDAlJyxcbiAgICBkaXNhYmxlZCxcbiAgICByZXF1aXJlZCxcbiAgICBpc0ludmFsaWQsXG4gICAgYXBwZWFyYW5jZSxcblxuICAgIC8vIFJlc3QgcHJvcHMgYXJlIHNwcmVhZCBvbiB0aGUgRm9ybUZpZWxkXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHNcblxuICAvKipcbiAgICogU3BsaXQgdGhlIHdyYXBwZXIgcHJvcHMgZnJvbSB0aGUgaW5wdXQgcHJvcHMuXG4gICAqL1xuICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocmVzdClcblxuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRcbiAgICAgIG1hcmdpbkJvdHRvbT17MjR9XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgICBpc1JlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIGhpbnQ9e2hpbnR9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZT17dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICBsYWJlbEZvcj17aWR9XG4gICAgICB7Li4ubWF0Y2hlZFByb3BzfVxuICAgID5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB3aWR0aD17aW5wdXRXaWR0aH1cbiAgICAgICAgaGVpZ2h0PXtpbnB1dEhlaWdodH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGlzSW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICB7Li4ucmVtYWluaW5nUHJvcHN9XG4gICAgICAvPlxuICAgIDwvRm9ybUZpZWxkPlxuICApXG59KVxuXG5TZWxlY3RGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgU2VsZWN0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlNlbGVjdC5wcm9wVHlwZXMsXG4gIC4uLkZvcm1GaWVsZC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB1c2VkIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFBhc3NlZCBvbiB0aGUgbGFiZWwgYXMgYSBodG1sRm9yIHByb3AuXG4gICAqL1xuICBsYWJlbEZvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkIHVuZGVyIHRoZSBsYWJlbCwgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBoaW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgaXMgcGFzc2VkIGl0IGlzIHNob3duIHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50XG4gICAqIGFuZCBhYm92ZSB0aGUgaGludC4gVGhpcyBpcyB1bmFmZmVjdGVkIGJ5IGBpc0ludmFsaWRgLlxuICAgKi9cbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgd2lkdGguXG4gICAqL1xuICBpbnB1dFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0RmllbGRcbiJdfQ==