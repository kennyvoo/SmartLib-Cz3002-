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

var styles = {
  minHeight: 80,
  paddingX: 10,
  paddingY: 8
};
var Textarea = (0, _react.memo)((0, _react.forwardRef)(function Textarea(props, ref) {
  var theme = (0, _theme.useTheme)();
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
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "grammarly"]);
  var themedClassName = theme.getTextareaClassName(appearance);
  return _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
    is: "textarea",
    ref: ref,
    className: (0, _classnames["default"])(themedClassName, className),
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
Textarea.propTypes = _objectSpread(_objectSpread({}, _typography.Text.propTypes), {}, {
  /**
   * Makes the textarea element required.
   */
  required: _propTypes["default"].bool,

  /**
   * Makes the textarea element disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: _propTypes["default"].bool,

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: _propTypes["default"].bool,

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
var _default = Textarea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWEuanMiXSwibmFtZXMiOlsic3R5bGVzIiwibWluSGVpZ2h0IiwicGFkZGluZ1giLCJwYWRkaW5nWSIsIlRleHRhcmVhIiwicHJvcHMiLCJyZWYiLCJ0aGVtZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJncmFtbWFybHkiLCJyZXN0UHJvcHMiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRUZXh0YXJlYUNsYXNzTmFtZSIsIk1hdGgiLCJyb3VuZCIsImNvbG9yIiwicHJvcFR5cGVzIiwiVGV4dCIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxTQUFTLEVBQUUsRUFERTtBQUViQyxFQUFBQSxRQUFRLEVBQUUsRUFGRztBQUdiQyxFQUFBQSxRQUFRLEVBQUU7QUFIRyxDQUFmO0FBTUEsSUFBTUMsUUFBUSxHQUFHLGlCQUNmLHVCQUFXLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN2QyxNQUFNQyxLQUFLLEdBQUcsc0JBQWQ7QUFEdUMsTUFHckNDLFNBSHFDLEdBY25DSCxLQWRtQyxDQUdyQ0csU0FIcUM7QUFBQSxxQkFjbkNILEtBZG1DLENBSXJDSSxLQUpxQztBQUFBLE1BSXJDQSxLQUpxQyw2QkFJN0IsTUFKNkI7QUFBQSxNQUtyQ0MsTUFMcUMsR0FjbkNMLEtBZG1DLENBS3JDSyxNQUxxQztBQUFBLHdCQWNuQ0wsS0FkbUMsQ0FNckNNLFFBTnFDO0FBQUEsTUFNckNBLFFBTnFDLGdDQU0xQixLQU4wQjtBQUFBLE1BT3JDQyxRQVBxQyxHQWNuQ1AsS0FkbUMsQ0FPckNPLFFBUHFDO0FBQUEseUJBY25DUCxLQWRtQyxDQVFyQ1EsU0FScUM7QUFBQSxNQVFyQ0EsU0FScUMsaUNBUXpCLEtBUnlCO0FBQUEsMEJBY25DUixLQWRtQyxDQVNyQ1MsVUFUcUM7QUFBQSxNQVNyQ0EsVUFUcUMsa0NBU3hCLFNBVHdCO0FBQUEsTUFVckNDLFdBVnFDLEdBY25DVixLQWRtQyxDQVVyQ1UsV0FWcUM7QUFBQSwwQkFjbkNWLEtBZG1DLENBV3JDVyxVQVhxQztBQUFBLE1BV3JDQSxVQVhxQyxrQ0FXeEIsSUFYd0I7QUFBQSx5QkFjbkNYLEtBZG1DLENBWXJDWSxTQVpxQztBQUFBLE1BWXJDQSxTQVpxQyxpQ0FZekIsS0FaeUI7QUFBQSxNQWFsQ0MsU0Fia0MsNkNBY25DYixLQWRtQztBQWdCdkMsTUFBTWMsZUFBZSxHQUFHWixLQUFLLENBQUNhLG9CQUFOLENBQTJCTixVQUEzQixDQUF4QjtBQUVBLFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxVQURMO0FBRUUsSUFBQSxHQUFHLEVBQUVSLEdBRlA7QUFHRSxJQUFBLFNBQVMsRUFBRSw0QkFBR2EsZUFBSCxFQUFvQlgsU0FBcEIsQ0FIYjtBQUlFLElBQUEsSUFBSSxFQUFFLEdBSlI7QUFLRSxJQUFBLEtBQUssRUFBRUMsS0FMVDtBQU1FLElBQUEsTUFBTSxFQUFFQyxNQU5WO0FBT0UsSUFBQSxRQUFRLEVBQUVFLFFBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRUQsUUFSWjtBQVNFLElBQUEsV0FBVyxFQUFFSSxXQVRmO0FBVUUsSUFBQSxXQUFXLEVBQUVNLElBQUksQ0FBQ0MsS0FBTCxDQUFXWixNQUFNLEdBQUcsR0FBcEIsQ0FWZjtBQVdFLElBQUEsWUFBWSxFQUFFVyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osTUFBTSxHQUFHLEdBQXBCLENBWGhCO0FBWUUsSUFBQSxZQUFZLEVBQUUsQ0FaaEI7QUFhRSxJQUFBLFVBQVUsRUFBRU0sVUFiZDtBQWNFLG9CQUFjSCxTQWRoQjtBQWVFLHlCQUFtQkk7QUFmckIsS0FnQk9OLFFBQVEsR0FBRztBQUFFWSxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFILEdBQXdCLEVBaEJ2QyxFQWlCTXZCLE1BakJOLEVBa0JNa0IsU0FsQk4sRUFERjtBQXNCRCxDQXhDRCxDQURlLENBQWpCO0FBNENBZCxRQUFRLENBQUNvQixTQUFULG1DQUlLQyxpQkFBS0QsU0FKVjtBQU1FOzs7QUFHQVosRUFBQUEsUUFBUSxFQUFFYyxzQkFBVUMsSUFUdEI7O0FBV0U7OztBQUdBaEIsRUFBQUEsUUFBUSxFQUFFZSxzQkFBVUMsSUFkdEI7O0FBZ0JFOzs7O0FBSUFkLEVBQUFBLFNBQVMsRUFBRWEsc0JBQVVDLElBcEJ2Qjs7QUFzQkU7OztBQUdBWCxFQUFBQSxVQUFVLEVBQUVVLHNCQUFVQyxJQXpCeEI7O0FBMkJFOzs7QUFHQVYsRUFBQUEsU0FBUyxFQUFFUyxzQkFBVUMsSUE5QnZCOztBQWdDRTs7O0FBR0FaLEVBQUFBLFdBQVcsRUFBRVcsc0JBQVVFLE1BbkN6Qjs7QUFxQ0U7OztBQUdBZCxFQUFBQSxVQUFVLEVBQUVZLHNCQUFVRSxNQXhDeEI7O0FBMENFOzs7QUFHQW5CLEVBQUFBLEtBQUssRUFBRWlCLHNCQUFVRyxTQUFWLENBQW9CLENBQUNILHNCQUFVRSxNQUFYLEVBQW1CRixzQkFBVUksTUFBN0IsQ0FBcEIsQ0E3Q1Q7O0FBK0NFOzs7O0FBSUF0QixFQUFBQSxTQUFTLEVBQUVrQixzQkFBVUU7QUFuRHZCO2VBc0RleEIsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3Qgc3R5bGVzID0ge1xuICBtaW5IZWlnaHQ6IDgwLFxuICBwYWRkaW5nWDogMTAsXG4gIHBhZGRpbmdZOiA4XG59XG5cbmNvbnN0IFRleHRhcmVhID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUZXh0YXJlYShwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGggPSAnMTAwJScsXG4gICAgICBoZWlnaHQsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBpc0ludmFsaWQgPSBmYWxzZSxcbiAgICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2sgPSB0cnVlLFxuICAgICAgZ3JhbW1hcmx5ID0gZmFsc2UsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHRhcmVhQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgc2l6ZT17NDAwfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXszfVxuICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgZGF0YS1ncmFtbV9lZGl0b3I9e2dyYW1tYXJseX1cbiAgICAgICAgey4uLihkaXNhYmxlZCA/IHsgY29sb3I6ICdtdXRlZCcgfSA6IHt9KX1cbiAgICAgICAgey4uLnN0eWxlc31cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuXG5UZXh0YXJlYS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGV4dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogTWFrZXMgdGhlIHRleHRhcmVhIGVsZW1lbnQgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSB0ZXh0YXJlYSBlbGVtZW50IGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIHZpc3VhbCBzdHlsaW5nIG9mIF9vbmx5XyB0aGUgdGV4dCBhcmVhIHRvIGJlIFwiaW52YWxpZFwiLlxuICAgKiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBlZmZlY3QgYW55IGB2YWxpZGF0aW9uTWVzc2FnZWAuXG4gICAqL1xuICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIG5hdGl2ZSBzcGVsbCBjaGVjayBmdW5jdGlvbmFsaXR5IG9mIHRoZSBicm93c2VyLlxuICAgKi9cbiAgc3BlbGxDaGVjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFsbG93IHRoZSBHcmFtbWFybHkgYnJvd3NlciBleHRlbnNpb24gdG8gYXR0YWNoIHRvIHRoZSBiYWNraW5nIHRleHRhcmVhLlxuICAgKi9cbiAgZ3JhbW1hcmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBwcmVzZW50LlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAqL1xuICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIFRleHRJbnB1dC5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuIl19