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

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var handleStyleClass = (0, _glamor.css)({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString();
var iconContainerStyleClass = (0, _glamor.css)({
  transition: "all 500ms ".concat(animationEasing.spring),
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '> svg': {
    transition: "all 500ms ".concat(animationEasing.spring),
    transform: 'scale(0)'
  },
  '&[data-checked="true"] > svg': {
    transform: 'scale(1)'
  }
}).toString();
var handleContainerStyleClass = (0, _glamor.css)({
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}).toString();
var CheckIcon = (0, _react.memo)(function CheckIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["size", "fill"]);
  return _react["default"].createElement("svg", (0, _extends2["default"])({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), _react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
});
CheckIcon.propTypes = {
  fill: _propTypes["default"].string,
  size: _propTypes["default"].number
};

var noop = function noop() {};

var Switch = (0, _react.memo)((0, _react.forwardRef)(function Switch(props, ref) {
  var id = props.id,
      name = props.name,
      _props$height = props.height,
      height = _props$height === void 0 ? 16 : _props$height,
      _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$hasCheckIcon = props.hasCheckIcon,
      hasCheckIcon = _props$hasCheckIcon === void 0 ? true : _props$hasCheckIcon,
      defaultChecked = props.defaultChecked,
      rest = (0, _objectWithoutProperties2["default"])(props, ["id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"]);
  var theme = (0, _theme.useTheme)();
  var themedClassName = theme.getSwitchClassName(appearance);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "label",
    display: "block",
    width: height * 2,
    position: "relative",
    ref: ref
  }, rest), _react["default"].createElement(_uiBox["default"], {
    is: "input",
    className: themedClassName,
    id: id,
    name: name,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    defaultChecked: defaultChecked,
    onChange: onChange
  }), _react["default"].createElement(_uiBox["default"], {
    height: height,
    width: height * 2
  }, _react["default"].createElement(_uiBox["default"], {
    height: height,
    width: height,
    "data-checked": checked,
    className: iconContainerStyleClass
  }, hasCheckIcon && _react["default"].createElement(CheckIcon, {
    size: height / 2 - 3
  })), _react["default"].createElement(_uiBox["default"], {
    width: height * 2,
    display: "flex",
    "data-checked": checked,
    className: handleContainerStyleClass
  }, _react["default"].createElement(_uiBox["default"], {
    flex: 1,
    padding: 2
  }, _react["default"].createElement(_uiBox["default"], {
    width: height - 4,
    height: height - 4,
    className: handleStyleClass
  })))));
}));
Switch.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: _propTypes["default"].string,

  /**
   * The name attribute of the radio.
   */
  name: _propTypes["default"].string,

  /**
   * The value attribute of the radio.
   */
  value: _propTypes["default"].string,

  /**
   * The height of the switch.
   */
  height: _propTypes["default"].number,

  /**
   * When true, the switch is checked (on).
   */
  checked: _propTypes["default"].bool,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the switch is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: _propTypes["default"].bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: _propTypes["default"].bool
});
var _default = Switch;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zd2l0Y2gvc3JjL1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJoYW5kbGVTdHlsZUNsYXNzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidG9TdHJpbmciLCJpY29uQ29udGFpbmVyU3R5bGVDbGFzcyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsInBvc2l0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2Zvcm0iLCJoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzIiwiQ2hlY2tJY29uIiwic2l6ZSIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIm5vb3AiLCJTd2l0Y2giLCJyZWYiLCJpZCIsIm5hbWUiLCJoZWlnaHQiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImFwcGVhcmFuY2UiLCJoYXNDaGVja0ljb24iLCJkZWZhdWx0Q2hlY2tlZCIsInJlc3QiLCJ0aGVtZSIsInRoZW1lZENsYXNzTmFtZSIsImdldFN3aXRjaENsYXNzTmFtZSIsInNwYWNpbmciLCJsYXlvdXQiLCJ2YWx1ZSIsImJvb2wiLCJmdW5jIiwiaXNJbnZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU07QUFEZ0IsQ0FBeEI7QUFJQSxJQUFNQyxnQkFBZ0IsR0FBRyxpQkFBSTtBQUMzQkMsRUFBQUEsZUFBZSxFQUFFLE1BRFU7QUFFM0JDLEVBQUFBLFlBQVksRUFBRTtBQUZhLENBQUosRUFHdEJDLFFBSHNCLEVBQXpCO0FBS0EsSUFBTUMsdUJBQXVCLEdBQUcsaUJBQUk7QUFDbENDLEVBQUFBLFVBQVUsc0JBQWVQLGVBQWUs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Q0UsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRWMsTUFBTSxHQUFHLENBRGxCO0FBRUUsSUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRyxDQUZuQjtBQUdFLElBQUEsU0FBUyxFQUFFM0I7QUFIYixJQURGLENBTkYsQ0FURixDQW5CRixDQURGO0FBOENELENBL0RELENBRGEsQ0FBZjtBQW1FQXVCLE1BQU0sQ0FBQ0wsU0FBUCwrREFJS29CLGVBQVFwQixTQUpiLEdBS0tWLGdCQUFTVSxTQUxkLEdBTUtxQixjQUFPckIsU0FOWjtBQVFFOzs7QUFHQU8sRUFBQUEsRUFBRSxFQUFFTixzQkFBVUMsTUFYaEI7O0FBYUU7OztBQUdBTSxFQUFBQSxJQUFJLEVBQUVQLHNCQUFVQyxNQWhCbEI7O0FBa0JFOzs7QUFHQW9CLEVBQUFBLEtBQUssRUFBRXJCLHNCQUFVQyxNQXJCbkI7O0FBdUJFOzs7QUFHQU8sRUFBQUEsTUFBTSxFQUFFUixzQkFBVUUsTUExQnBCOztBQTRCRTs7O0FBR0FPLEVBQUFBLE9BQU8sRUFBRVQsc0JBQVVzQixJQS9CckI7O0FBaUNFOzs7QUFHQVosRUFBQUEsUUFBUSxFQUFFVixzQkFBVXVCLElBcEN0Qjs7QUFzQ0U7OztBQUdBWixFQUFBQSxRQUFRLEVBQUVYLHNCQUFVc0IsSUF6Q3RCOztBQTJDRTs7O0FBR0FFLEVBQUFBLFNBQVMsRUFBRXhCLHNCQUFVc0IsSUE5Q3ZCOztBQWdERTs7OztBQUlBVixFQUFBQSxVQUFVLEVBQUVaLHNCQUFVQyxNQXBEeEI7O0FBc0RFOzs7QUFHQVksRUFBQUEsWUFBWSxFQUFFYixzQkFBVXNCLElBekQxQjs7QUEyREU7Ozs7QUFJQVIsRUFBQUEsY0FBYyxFQUFFZCxzQkFBVXNCO0FBL0Q1QjtlQWtFZWxCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBoYW5kbGVTdHlsZUNsYXNzID0gY3NzKHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlclJhZGl1czogOTk5OVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBpY29uQ29udGFpbmVyU3R5bGVDbGFzcyA9IGNzcyh7XG4gIHRyYW5zaXRpb246IGBhbGwgNTAwbXMgJHthbmltYXRpb25FYXNpbmcuc3ByaW5nfWAsXG4gIG9wYWNpdHk6IDAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBhZGRpbmdMZWZ0OiA0LFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sXG4gICc+IHN2Zyc6IHtcbiAgICB0cmFuc2l0aW9uOiBgYWxsIDUwMG1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ31gLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICB9LFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdID4gc3ZnJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59KS50b1N0cmluZygpXG5cbmNvbnN0IGhhbmRsZUNvbnRhaW5lclN0eWxlQ2xhc3MgPSBjc3Moe1xuICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0JyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNTAlKSdcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBDaGVja0ljb24gPSBtZW1vKGZ1bmN0aW9uIENoZWNrSWNvbih7XG4gIHNpemUsXG4gIGZpbGwgPSAnY3VycmVudENvbG9yJyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXsxMH0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDEwIDdcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD17ZmlsbH1cbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk00IDQuNTg2TDEuNzA3IDIuMjkzQTEgMSAwIDEgMCAuMjkzIDMuNzA3bDMgM2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDUtNUExIDEgMCAxIDAgOC4yOTMuMjkzTDQgNC41ODZ6XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn0pXG5cbkNoZWNrSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IFN3aXRjaCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gU3dpdGNoKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBoZWlnaHQgPSAxNixcbiAgICAgIGNoZWNrZWQgPSBmYWxzZSxcbiAgICAgIG9uQ2hhbmdlID0gbm9vcCxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBhcHBlYXJhbmNlID0gJ2RlZmF1bHQnLFxuICAgICAgaGFzQ2hlY2tJY29uID0gdHJ1ZSxcbiAgICAgIGRlZmF1bHRDaGVja2VkLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0U3dpdGNoQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgd2lkdGg9e2hlaWdodCAqIDJ9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtkZWZhdWx0Q2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXtoZWlnaHQgKiAyfT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIHdpZHRoPXtoZWlnaHR9XG4gICAgICAgICAgICBkYXRhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ljb25Db250YWluZXJTdHlsZUNsYXNzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoYXNDaGVja0ljb24gJiYgPENoZWNrSWNvbiBzaXplPXtoZWlnaHQgLyAyIC0gM30gLz59XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgd2lkdGg9e2hlaWdodCAqIDJ9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBkYXRhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2hhbmRsZUNvbnRhaW5lclN0eWxlQ2xhc3N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBmbGV4PXsxfSBwYWRkaW5nPXsyfT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPXtoZWlnaHQgLSA0fVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IC0gNH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2hhbmRsZVN0eWxlQ2xhc3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgKi9cbiAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIG5hbWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHN3aXRjaC5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGNoZWNrZWQgKG9uKS5cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBpcyBpbnZhbGlkLlxuICAgKi9cbiAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGhhcyBhIGNoZWNrIGljb24uXG4gICAqL1xuICBoYXNDaGVja0ljb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgdHJ1ZSBieSBkZWZhdWx0LlxuICAgKiBUaGlzIGlzIGZvciB1bmNvbnRyb2xsZWQgdXNhZ2UuXG4gICAqL1xuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoXG4iXX0=