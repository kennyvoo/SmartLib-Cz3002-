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

var _scales = require("../../scales");

var _TextInput = _interopRequireDefault(require("./TextInput"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TextInputField = (0, _react.memo)((0, _react.forwardRef)(function TextInputField(props, ref) {
  var id = (0, _hooks.useId)('TextInputField', props.id);
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
      inputHeight = _props$inputHeight === void 0 ? (0, _scales.majorScale)(4) : _props$inputHeight,
      _props$inputWidth = props.inputWidth,
      inputWidth = _props$inputWidth === void 0 ? '100%' : _props$inputWidth,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["id", "hint", "label", "description", "validationMessage", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "inputHeight", "inputWidth"]);
  /**
   * Split the wrapper props from the input props.
   */

  var _splitBoxProps = (0, _uiBox.splitBoxProps)(restProps),
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
  }, matchedProps), _react["default"].createElement(_TextInput["default"], (0, _extends2["default"])({
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
TextInputField.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _TextInput["default"].propTypes), _formField.FormField.propTypes), {}, {
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
var _default = TextInputField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXRGaWVsZC5qcyJdLCJuYW1lcyI6WyJUZXh0SW5wdXRGaWVsZCIsInByb3BzIiwicmVmIiwiaWQiLCJ1bnVzZWRJZCIsImhpbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiaXNJbnZhbGlkIiwiYXBwZWFyYW5jZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsImlucHV0SGVpZ2h0IiwiaW5wdXRXaWR0aCIsInJlc3RQcm9wcyIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwicHJvcFR5cGVzIiwiVGV4dElucHV0IiwiRm9ybUZpZWxkIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJsYWJlbEZvciIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBRyxpQkFDckIsdUJBQVcsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JDLEdBQS9CLEVBQW9DO0FBQzdDLE1BQU1DLEVBQUUsR0FBRyxrQkFBTSxnQkFBTixFQUF3QkYsS0FBSyxDQUFDRSxFQUE5QixDQUFYO0FBRDZDLE1BS3ZDQyxRQUx1QyxHQXlCekNILEtBekJ5QyxDQUszQ0UsRUFMMkM7QUFBQSxNQVEzQ0UsSUFSMkMsR0F5QnpDSixLQXpCeUMsQ0FRM0NJLElBUjJDO0FBQUEsTUFTM0NDLEtBVDJDLEdBeUJ6Q0wsS0F6QnlDLENBUzNDSyxLQVQyQztBQUFBLE1BVTNDQyxXQVYyQyxHQXlCekNOLEtBekJ5QyxDQVUzQ00sV0FWMkM7QUFBQSxNQVczQ0MsaUJBWDJDLEdBeUJ6Q1AsS0F6QnlDLENBVzNDTyxpQkFYMkM7QUFBQSxNQWMzQ0MsUUFkMkMsR0F5QnpDUixLQXpCeUMsQ0FjM0NRLFFBZDJDO0FBQUEsTUFlM0NDLFFBZjJDLEdBeUJ6Q1QsS0F6QnlDLENBZTNDUyxRQWYyQztBQUFBLE1BZ0IzQ0MsU0FoQjJDLEdBeUJ6Q1YsS0F6QnlDLENBZ0IzQ1UsU0FoQjJDO0FBQUEsTUFpQjNDQyxVQWpCMkMsR0F5QnpDWCxLQXpCeUMsQ0FpQjNDVyxVQWpCMkM7QUFBQSxNQWtCM0NDLFdBbEIyQyxHQXlCekNaLEtBekJ5QyxDQWtCM0NZLFdBbEIyQztBQUFBLE1BbUIzQ0MsVUFuQjJDLEdBeUJ6Q2IsS0F6QnlDLENBbUIzQ2EsVUFuQjJDO0FBQUEsMkJBeUJ6Q2IsS0F6QnlDLENBb0IzQ2MsV0FwQjJDO0FBQUEsTUFvQjNDQSxXQXBCMkMsbUNBb0I3Qix3QkFBVyxDQUFYLENBcEI2QjtBQUFBLDBCQXlCekNkLEtBekJ5QyxDQXFCM0NlLFVBckIyQztBQUFBLE1BcUIzQ0EsVUFyQjJDLGtDQXFCOUIsTUFyQjhCO0FBQUEsTUF3QnhDQyxTQXhCd0MsNkNBeUJ6Q2hCLEtBekJ5QztBQTJCN0M7Ozs7QUEzQjZDLHVCQThCSiwwQkFBY2dCLFNBQWQsQ0E5Qkk7QUFBQSxNQThCckNDLFlBOUJxQyxrQkE4QnJDQSxZQTlCcUM7QUFBQSxNQThCdkJDLGNBOUJ1QixrQkE4QnZCQSxjQTlCdUI7O0FBZ0M3QyxTQUNFLGdDQUFDLG9CQUFEO0FBQ0UsSUFBQSxZQUFZLEVBQUUsRUFEaEI7QUFFRSxJQUFBLEtBQUssRUFBRWIsS0FGVDtBQUdFLElBQUEsVUFBVSxFQUFFSSxRQUhkO0FBSUUsSUFBQSxJQUFJLEVBQUVMLElBSlI7QUFLRSxJQUFBLFdBQVcsRUFBRUUsV0FMZjtBQU1FLElBQUEsaUJBQWlCLEVBQUVDLGlCQU5yQjtBQU9FLElBQUEsUUFBUSxFQUFFTDtBQVBaLEtBUU1lLFlBUk4sR0FVRSxnQ0FBQyxxQkFBRDtBQUNFLElBQUEsRUFBRSxFQUFFZixFQUROO0FBRUUsSUFBQSxLQUFLLEVBQUVhLFVBRlQ7QUFHRSxJQUFBLE1BQU0sRUFBRUQsV0FIVjtBQUlFLElBQUEsUUFBUSxFQUFFTixRQUpaO0FBS0UsSUFBQSxRQUFRLEVBQUVDLFFBTFo7QUFNRSxJQUFBLFNBQVMsRUFBRUMsU0FOYjtBQU9FLElBQUEsVUFBVSxFQUFFQyxVQVBkO0FBUUUsSUFBQSxXQUFXLEVBQUVDLFdBUmY7QUFTRSxJQUFBLFVBQVUsRUFBRUMsVUFUZDtBQVVFLElBQUEsR0FBRyxFQUFFWjtBQVZQLEtBV01pQixjQVhOLEVBVkYsQ0FERjtBQTBCRCxDQTFERCxDQURxQixDQUF2QjtBQThEQW5CLGNBQWMsQ0FBQ29CLFNBQWYsaURBSUtDLHNCQUFVRCxTQUpmLEdBS0tFLHFCQUFVRixTQUxmO0FBT0U7OztBQUdBZCxFQUFBQSxLQUFLLEVBQUVpQixzQkFBVUMsSUFBVixDQUFlQyxVQVZ4Qjs7QUFZRTs7O0FBR0FDLEVBQUFBLFFBQVEsRUFBRUgsc0JBQVVJLE1BZnRCOztBQWlCRTs7O0FBR0FqQixFQUFBQSxRQUFRLEVBQUVhLHNCQUFVSyxJQXBCdEI7O0FBc0JFOzs7QUFHQXJCLEVBQUFBLFdBQVcsRUFBRWdCLHNCQUFVQyxJQXpCekI7O0FBMkJFOzs7QUFHQW5CLEVBQUFBLElBQUksRUFBRWtCLHNCQUFVQyxJQTlCbEI7O0FBZ0NFOzs7O0FBSUFoQixFQUFBQSxpQkFBaUIsRUFBRWUsc0JBQVVDLElBcEMvQjs7QUFzQ0U7OztBQUdBVCxFQUFBQSxXQUFXLEVBQUVRLHNCQUFVTSxNQXpDekI7O0FBMkNFOzs7QUFHQWIsRUFBQUEsVUFBVSxFQUFFTyxzQkFBVU8sU0FBVixDQUFvQixDQUFDUCxzQkFBVU0sTUFBWCxFQUFtQk4sc0JBQVVJLE1BQTdCLENBQXBCO0FBOUNkO2VBaURlM0IsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGxpdEJveFByb3BzIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS1maWVsZCdcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBtYWpvclNjYWxlIH0gZnJvbSAnLi4vLi4vc2NhbGVzJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcblxuY29uc3QgVGV4dElucHV0RmllbGQgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHRJbnB1dEZpZWxkKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCBpZCA9IHVzZUlkKCdUZXh0SW5wdXRGaWVsZCcsIHByb3BzLmlkKVxuXG4gICAgY29uc3Qge1xuICAgICAgLy8gV2UgYXJlIHVzaW5nIHRoZSBpZCBmcm9tIHRoZSBzdGF0ZVxuICAgICAgaWQ6IHVudXNlZElkLFxuXG4gICAgICAvLyBGb3JtRmllbGQgcHJvcHNcbiAgICAgIGhpbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG5cbiAgICAgIC8vIFRleHRJbnB1dCBwcm9wc1xuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG4gICAgICBpbnB1dEhlaWdodCA9IG1ham9yU2NhbGUoNCksXG4gICAgICBpbnB1dFdpZHRoID0gJzEwMCUnLFxuXG4gICAgICAvLyBSZXN0IHByb3BzIGFyZSBzcHJlYWQgb24gdGhlIEZvcm1GaWVsZFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocmVzdFByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbWFyZ2luQm90dG9tPXsyNH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBpc1JlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgaGludD17aGludH1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZT17dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgIGxhYmVsRm9yPXtpZH1cbiAgICAgICAgey4uLm1hdGNoZWRQcm9wc31cbiAgICAgID5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB3aWR0aD17aW5wdXRXaWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2lucHV0SGVpZ2h0fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgaXNJbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICB7Li4ucmVtYWluaW5nUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICApXG4gIH0pXG4pXG5cblRleHRJbnB1dEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUZXh0SW5wdXQgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGV4dElucHV0LnByb3BUeXBlcyxcbiAgLi4uRm9ybUZpZWxkLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogUGFzc2VkIG9uIHRoZSBsYWJlbCBhcyBhIGh0bWxGb3IgcHJvcC5cbiAgICovXG4gIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgdW5kZXIgdGhlIGxhYmVsLCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgaGludCB1bmRlciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGhpbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICogYW5kIGFib3ZlIHRoZSBoaW50LiBUaGlzIGlzIHVuYWZmZWN0ZWQgYnkgYGlzSW52YWxpZGAuXG4gICAqL1xuICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB3aWR0aC5cbiAgICovXG4gIGlucHV0V2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXRGaWVsZFxuIl19