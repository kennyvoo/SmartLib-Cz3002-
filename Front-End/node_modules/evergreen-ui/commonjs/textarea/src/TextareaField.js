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

var _Textarea = _interopRequireDefault(require("./Textarea"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TextareaField = (0, _react.memo)((0, _react.forwardRef)(function TextareaField(props, ref) {
  var id = (0, _hooks.useId)('TextareaField', props.id);
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
      rest = (0, _objectWithoutProperties2["default"])(props, ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"]);
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
  }, matchedProps), _react["default"].createElement(_Textarea["default"], (0, _extends2["default"])({
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
TextareaField.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _Textarea["default"].propTypes), _formField.FormField.propTypes), {}, {
  /**
   * The label used above the input element.
   */
  label: _propTypes["default"].node.isRequired,

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
var _default = TextareaField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWFGaWVsZC5qcyJdLCJuYW1lcyI6WyJUZXh0YXJlYUZpZWxkIiwicHJvcHMiLCJyZWYiLCJpZCIsInVudXNlZElkIiwiaGludCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImlucHV0SGVpZ2h0IiwiaW5wdXRXaWR0aCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJpc0ludmFsaWQiLCJhcHBlYXJhbmNlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwicmVzdCIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwicHJvcFR5cGVzIiwiVGV4dGFyZWEiLCJGb3JtRmllbGQiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJudW1iZXIiLCJvbmVPZlR5cGUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxpQkFDcEIsdUJBQVcsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQzVDLE1BQU1DLEVBQUUsR0FBRyxrQkFBTSxlQUFOLEVBQXVCRixLQUFLLENBQUNFLEVBQTdCLENBQVg7QUFENEMsTUFLdENDLFFBTHNDLEdBMEJ4Q0gsS0ExQndDLENBSzFDRSxFQUwwQztBQUFBLE1BUTFDRSxJQVIwQyxHQTBCeENKLEtBMUJ3QyxDQVExQ0ksSUFSMEM7QUFBQSxNQVMxQ0MsS0FUMEMsR0EwQnhDTCxLQTFCd0MsQ0FTMUNLLEtBVDBDO0FBQUEsTUFVMUNDLFdBVjBDLEdBMEJ4Q04sS0ExQndDLENBVTFDTSxXQVYwQztBQUFBLE1BVzFDQyxpQkFYMEMsR0EwQnhDUCxLQTFCd0MsQ0FXMUNPLGlCQVgwQztBQUFBLDJCQTBCeENQLEtBMUJ3QyxDQWMxQ1EsV0FkMEM7QUFBQSxNQWMxQ0EsV0FkMEMsbUNBYzVCLEVBZDRCO0FBQUEsMEJBMEJ4Q1IsS0ExQndDLENBZ0IxQ1MsVUFoQjBDO0FBQUEsTUFnQjFDQSxVQWhCMEMsa0NBZ0I3QixNQWhCNkI7QUFBQSxNQWlCMUNDLFFBakIwQyxHQTBCeENWLEtBMUJ3QyxDQWlCMUNVLFFBakIwQztBQUFBLE1Ba0IxQ0MsUUFsQjBDLEdBMEJ4Q1gsS0ExQndDLENBa0IxQ1csUUFsQjBDO0FBQUEsTUFtQjFDQyxTQW5CMEMsR0EwQnhDWixLQTFCd0MsQ0FtQjFDWSxTQW5CMEM7QUFBQSxNQW9CMUNDLFVBcEIwQyxHQTBCeENiLEtBMUJ3QyxDQW9CMUNhLFVBcEIwQztBQUFBLE1BcUIxQ0MsV0FyQjBDLEdBMEJ4Q2QsS0ExQndDLENBcUIxQ2MsV0FyQjBDO0FBQUEsTUFzQjFDQyxVQXRCMEMsR0EwQnhDZixLQTFCd0MsQ0FzQjFDZSxVQXRCMEM7QUFBQSxNQXlCdkNDLElBekJ1Qyw2Q0EwQnhDaEIsS0ExQndDO0FBNEI1Qzs7OztBQTVCNEMsdUJBK0JILDBCQUFjZ0IsSUFBZCxDQS9CRztBQUFBLE1BK0JwQ0MsWUEvQm9DLGtCQStCcENBLFlBL0JvQztBQUFBLE1BK0J0QkMsY0EvQnNCLGtCQStCdEJBLGNBL0JzQjs7QUFpQzVDLFNBQ0UsZ0NBQUMsb0JBQUQ7QUFDRSxJQUFBLFlBQVksRUFBRSxFQURoQjtBQUVFLElBQUEsS0FBSyxFQUFFYixLQUZUO0FBR0UsSUFBQSxVQUFVLEVBQUVNLFFBSGQ7QUFJRSxJQUFBLElBQUksRUFBRVAsSUFKUjtBQUtFLElBQUEsV0FBVyxFQUFFRSxXQUxmO0FBTUUsSUFBQSxpQkFBaUIsRUFBRUMsaUJBTnJCO0FBT0UsSUFBQSxRQUFRLEVBQUVMO0FBUFosS0FRTWUsWUFSTixHQVVFLGdDQUFDLG9CQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUVmLEVBRE47QUFFRSxJQUFBLEtBQUssRUFBRU8sVUFGVDtBQUdFLElBQUEsTUFBTSxFQUFFRCxXQUhWO0FBSUUsSUFBQSxRQUFRLEVBQUVFLFFBSlo7QUFLRSxJQUFBLFFBQVEsRUFBRUMsUUFMWjtBQU1FLElBQUEsU0FBUyxFQUFFQyxTQU5iO0FBT0UsSUFBQSxVQUFVLEVBQUVDLFVBUGQ7QUFRRSxJQUFBLFdBQVcsRUFBRUMsV0FSZjtBQVNFLElBQUEsVUFBVSxFQUFFQyxVQVRkO0FBVUUsSUFBQSxHQUFHLEVBQUVkO0FBVlAsS0FXTWlCLGNBWE4sRUFWRixDQURGO0FBMEJELENBM0RELENBRG9CLENBQXRCO0FBK0RBbkIsYUFBYSxDQUFDb0IsU0FBZCxpREFJS0MscUJBQVNELFNBSmQsR0FLS0UscUJBQVVGLFNBTGY7QUFPRTs7O0FBR0FkLEVBQUFBLEtBQUssRUFBRWlCLHNCQUFVQyxJQUFWLENBQWVDLFVBVnhCOztBQVlFOzs7QUFHQWIsRUFBQUEsUUFBUSxFQUFFVyxzQkFBVUcsSUFmdEI7O0FBaUJFOzs7QUFHQW5CLEVBQUFBLFdBQVcsRUFBRWdCLHNCQUFVQyxJQXBCekI7O0FBc0JFOzs7QUFHQW5CLEVBQUFBLElBQUksRUFBRWtCLHNCQUFVQyxJQXpCbEI7O0FBMkJFOzs7O0FBSUFoQixFQUFBQSxpQkFBaUIsRUFBRWUsc0JBQVVDLElBL0IvQjs7QUFpQ0U7OztBQUdBZixFQUFBQSxXQUFXLEVBQUVjLHNCQUFVSSxNQXBDekI7O0FBc0NFOzs7QUFHQWpCLEVBQUFBLFVBQVUsRUFBRWEsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FBQ0wsc0JBQVVJLE1BQVgsRUFBbUJKLHNCQUFVTSxNQUE3QixDQUFwQjtBQXpDZDtlQTRDZTdCLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BsaXRCb3hQcm9wcyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2Zvcm0tZmllbGQnXG5pbXBvcnQgeyB1c2VJZCB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmNvbnN0IFRleHRhcmVhRmllbGQgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHRhcmVhRmllbGQocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IGlkID0gdXNlSWQoJ1RleHRhcmVhRmllbGQnLCBwcm9wcy5pZClcblxuICAgIGNvbnN0IHtcbiAgICAgIC8vIFdlIGFyZSB1c2luZyB0aGUgaWQgZnJvbSB0aGUgc3RhdGVcbiAgICAgIGlkOiB1bnVzZWRJZCxcblxuICAgICAgLy8gRm9ybUZpZWxkIHByb3BzXG4gICAgICBoaW50LFxuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuXG4gICAgICAvLyBUZXh0YXJlYSBwcm9wc1xuICAgICAgaW5wdXRIZWlnaHQgPSA4MCxcbiAgICAgIC8qKiBUaGUgaW5wdXQgd2lkdGggc2hvdWxkIGJlIGFzIHdpZGUgYXMgdGhlIGZvcm0gZmllbGQuICovXG4gICAgICBpbnB1dFdpZHRoID0gJzEwMCUnLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG5cbiAgICAgIC8vIFJlc3QgcHJvcHMgYXJlIHNwcmVhZCBvbiB0aGUgRm9ybUZpZWxkXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocmVzdClcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG1hcmdpbkJvdHRvbT17MjR9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgaXNSZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGhpbnQ9e2hpbnR9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U9e3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICBsYWJlbEZvcj17aWR9XG4gICAgICAgIHsuLi5tYXRjaGVkUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB3aWR0aD17aW5wdXRXaWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2lucHV0SGVpZ2h0fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgaXNJbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICB7Li4ucmVtYWluaW5nUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICApXG4gIH0pXG4pXG5cblRleHRhcmVhRmllbGQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFRleHRhcmVhIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlRleHRhcmVhLnByb3BUeXBlcyxcbiAgLi4uRm9ybUZpZWxkLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkIHVuZGVyIHRoZSBsYWJlbCwgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBoaW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgaXMgcGFzc2VkIGl0IGlzIHNob3duIHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50XG4gICAqIGFuZCBhYm92ZSB0aGUgaGludC4gVGhpcyBpcyB1bmFmZmVjdGVkIGJ5IGBpc0ludmFsaWRgLlxuICAgKi9cbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgd2lkdGguXG4gICAqL1xuICBpbnB1dFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFGaWVsZFxuIl19