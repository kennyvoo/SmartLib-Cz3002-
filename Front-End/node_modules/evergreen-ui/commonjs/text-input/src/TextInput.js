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

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TextInput = (0, _react.memo)((0, _react.forwardRef)(function TextInput(props, ref) {
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
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "required", "placeholder", "width", "height", "disabled", "isInvalid", "appearance", "spellCheck"]);
  var theme = (0, _theme.useTheme)();
  var themedClassName = theme.getTextInputClassName(appearance);
  var textSize = theme.getTextSizeForControlHeight(height);
  var borderRadius = theme.getBorderRadiusForControlHeight(height);
  return _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
    is: "input",
    className: (0, _classnames["default"])(themedClassName, className),
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
TextInput.propTypes = _objectSpread(_objectSpread({}, _typography.Text.propTypes), {}, {
  /**
   * Makes the input element required.
   */
  required: _propTypes["default"].bool,

  /**
   * Makes the input element disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: _propTypes["default"].bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: _propTypes["default"].string,

  /**
   * The appearance of the TextInput.
   */
  appearance: _propTypes["default"].string,

  /**
   * The width of the TextInput.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = TextInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXQuanMiXSwibmFtZXMiOlsiVGV4dElucHV0IiwicHJvcHMiLCJyZWYiLCJjbGFzc05hbWUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNhYmxlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJzcGVsbENoZWNrIiwicmVzdFByb3BzIiwidGhlbWUiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRUZXh0SW5wdXRDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJNYXRoIiwicm91bmQiLCJjb2xvciIsInByb3BUeXBlcyIsIlRleHQiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsaUJBQ2hCLHVCQUFXLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxHQUExQixFQUErQjtBQUFBLE1BRXRDQyxTQUZzQyxHQVlwQ0YsS0Fab0MsQ0FFdENFLFNBRnNDO0FBQUEsTUFHdENDLFFBSHNDLEdBWXBDSCxLQVpvQyxDQUd0Q0csUUFIc0M7QUFBQSxNQUl0Q0MsV0FKc0MsR0FZcENKLEtBWm9DLENBSXRDSSxXQUpzQztBQUFBLHFCQVlwQ0osS0Fab0MsQ0FLdENLLEtBTHNDO0FBQUEsTUFLdENBLEtBTHNDLDZCQUs5QixHQUw4QjtBQUFBLHNCQVlwQ0wsS0Fab0MsQ0FNdENNLE1BTnNDO0FBQUEsTUFNdENBLE1BTnNDLDhCQU03QixFQU42QjtBQUFBLHdCQVlwQ04sS0Fab0MsQ0FPdENPLFFBUHNDO0FBQUEsTUFPdENBLFFBUHNDLGdDQU8zQixLQVAyQjtBQUFBLHlCQVlwQ1AsS0Fab0MsQ0FRdENRLFNBUnNDO0FBQUEsTUFRdENBLFNBUnNDLGlDQVExQixLQVIwQjtBQUFBLDBCQVlwQ1IsS0Fab0MsQ0FTdENTLFVBVHNDO0FBQUEsTUFTdENBLFVBVHNDLGtDQVN6QixTQVR5QjtBQUFBLDBCQVlwQ1QsS0Fab0MsQ0FVdENVLFVBVnNDO0FBQUEsTUFVdENBLFVBVnNDLGtDQVV6QixJQVZ5QjtBQUFBLE1BV25DQyxTQVhtQyw2Q0FZcENYLEtBWm9DO0FBYXhDLE1BQU1ZLEtBQUssR0FBRyxzQkFBZDtBQUVBLE1BQU1DLGVBQWUsR0FBR0QsS0FBSyxDQUFDRSxxQkFBTixDQUE0QkwsVUFBNUIsQ0FBeEI7QUFDQSxNQUFNTSxRQUFRLEdBQUdILEtBQUssQ0FBQ0ksMkJBQU4sQ0FBa0NWLE1BQWxDLENBQWpCO0FBQ0EsTUFBTVcsWUFBWSxHQUFHTCxLQUFLLENBQUNNLCtCQUFOLENBQXNDWixNQUF0QyxDQUFyQjtBQUVBLFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxPQURMO0FBRUUsSUFBQSxTQUFTLEVBQUUsNEJBQUdPLGVBQUgsRUFBb0JYLFNBQXBCLENBRmI7QUFHRSxJQUFBLElBQUksRUFBQyxNQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUVhLFFBSlI7QUFLRSxJQUFBLEtBQUssRUFBRVYsS0FMVDtBQU1FLElBQUEsTUFBTSxFQUFFQyxNQU5WO0FBT0UsSUFBQSxRQUFRLEVBQUVILFFBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRUksUUFSWjtBQVNFLElBQUEsV0FBVyxFQUFFSCxXQVRmO0FBVUUsSUFBQSxXQUFXLEVBQUVlLElBQUksQ0FBQ0MsS0FBTCxDQUFXZCxNQUFNLEdBQUcsR0FBcEIsQ0FWZjtBQVdFLElBQUEsWUFBWSxFQUFFYSxJQUFJLENBQUNDLEtBQUwsQ0FBV2QsTUFBTSxHQUFHLEdBQXBCLENBWGhCO0FBWUUsSUFBQSxZQUFZLEVBQUVXLFlBWmhCO0FBYUUsSUFBQSxVQUFVLEVBQUVQLFVBYmQ7QUFjRSxvQkFBY0Y7QUFkaEIsS0FlT0QsUUFBUSxHQUFHO0FBQUVjLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQUgsR0FBd0IsRUFmdkM7QUFnQkUsSUFBQSxHQUFHLEVBQUVwQjtBQWhCUCxLQWlCTVUsU0FqQk4sRUFERjtBQXFCRCxDQXhDRCxDQURnQixDQUFsQjtBQTRDQVosU0FBUyxDQUFDdUIsU0FBVixtQ0FJS0MsaUJBQUtELFNBSlY7QUFNRTs7O0FBR0FuQixFQUFBQSxRQUFRLEVBQUVxQixzQkFBVUMsSUFUdEI7O0FBV0U7OztBQUdBbEIsRUFBQUEsUUFBUSxFQUFFaUIsc0JBQVVDLElBZHRCOztBQWdCRTs7OztBQUlBakIsRUFBQUEsU0FBUyxFQUFFZ0Isc0JBQVVDLElBcEJ2Qjs7QUFzQkU7OztBQUdBZixFQUFBQSxVQUFVLEVBQUVjLHNCQUFVQyxJQXpCeEI7O0FBMkJFOzs7QUFHQXJCLEVBQUFBLFdBQVcsRUFBRW9CLHNCQUFVRSxNQTlCekI7O0FBZ0NFOzs7QUFHQWpCLEVBQUFBLFVBQVUsRUFBRWUsc0JBQVVFLE1BbkN4Qjs7QUFxQ0U7OztBQUdBckIsRUFBQUEsS0FBSyxFQUFFbUIsc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSSxNQUE3QixDQUFwQixDQXhDVDs7QUEwQ0U7Ozs7QUFJQTFCLEVBQUFBLFNBQVMsRUFBRXNCLHNCQUFVRTtBQTlDdkI7ZUFpRGUzQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBUZXh0SW5wdXQgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHRJbnB1dChwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHdpZHRoID0gMjgwLFxuICAgICAgaGVpZ2h0ID0gMzIsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgaXNJbnZhbGlkID0gZmFsc2UsXG4gICAgICBhcHBlYXJhbmNlID0gJ2RlZmF1bHQnLFxuICAgICAgc3BlbGxDaGVjayA9IHRydWUsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHRJbnB1dENsYXNzTmFtZShhcHBlYXJhbmNlKVxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGVtZS5nZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIHBhZGRpbmdSaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBib3JkZXJSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgYXJpYS1pbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgIHsuLi4oZGlzYWJsZWQgPyB7IGNvbG9yOiAnbXV0ZWQnIH0gOiB7fSl9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG5cblRleHRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGV4dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogTWFrZXMgdGhlIGlucHV0IGVsZW1lbnQgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIHZpc3VhbCBzdHlsaW5nIG9mIF9vbmx5XyB0aGUgdGV4dCBpbnB1dCB0byBiZSBcImludmFsaWRcIi5cbiAgICogTm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgZWZmZWN0IGFueSBgdmFsaWRhdGlvbk1lc3NhZ2VgLlxuICAgKi9cbiAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVXNlIHRoZSBuYXRpdmUgc3BlbGwgY2hlY2sgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYnJvd3Nlci5cbiAgICovXG4gIHNwZWxsQ2hlY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2Vob2xkZXIgdGV4dCB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlIHByZXNlbnQuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIFRleHRJbnB1dC5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgVGV4dElucHV0LlxuICAgKi9cbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dFxuIl19