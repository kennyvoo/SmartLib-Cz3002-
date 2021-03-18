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

var _uiBox = require("ui-box");

var _IconWrapper = require("../../icons/src/IconWrapper");

var _typography = require("../../typography");

var _spinner = require("../../spinner");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable-next-line react/prop-types */
var ButtonIcon = (0, _react.memo)(function ButtonIcon(_ref) {
  var icon = _ref.icon,
      size = _ref.size,
      spacing = _ref.spacing,
      edge = _ref.edge;
  if (!icon) return null;
  var edgeMargin = -Math.round(spacing * 0.2);
  var innerMargin = Math.round(size * 0.7);
  var marginLeft = edge === 'start' ? edgeMargin : innerMargin;
  var marginRight = edge === 'end' ? edgeMargin : innerMargin;
  return _react["default"].createElement(_IconWrapper.IconWrapper, {
    icon: icon,
    size: size,
    marginLeft: marginLeft,
    marginRight: marginRight
  });
});
var styles = {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
};
var Button = (0, _react.memo)((0, _react.forwardRef)(function Button(props, ref) {
  var theme = (0, _theme.useTheme)();
  var className = props.className,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$isActive = props.isActive,
      isActive = _props$isActive === void 0 ? false : _props$isActive,
      children = props.children,
      disabled = props.disabled,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      isLoading = props.isLoading,
      paddingRight = props.paddingRight,
      paddingLeft = props.paddingLeft,
      _props$paddingTop = props.paddingTop,
      paddingTop = _props$paddingTop === void 0 ? 0 : _props$paddingTop,
      _props$paddingBottom = props.paddingBottom,
      paddingBottom = _props$paddingBottom === void 0 ? 0 : _props$paddingBottom,
      iconBefore = props.iconBefore,
      iconAfter = props.iconAfter,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "iconBefore", "iconAfter"]);
  var themedClassName = theme.getButtonClassName(appearance, intent);
  var textSize = theme.getTextSizeForControlHeight(height);
  var borderRadius = theme.getBorderRadiusForControlHeight(height);
  var iconSize = theme.getIconSizeForButton(height);
  var padding = Math.round(height / 2);
  var pr = paddingRight !== undefined ? paddingRight : padding; // eslint-disable-line no-negated-condition

  var pl = paddingLeft !== undefined ? paddingLeft : padding; // eslint-disable-line no-negated-condition

  return _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
    is: "button",
    ref: ref,
    className: (0, _classnames["default"])(themedClassName, className),
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingRight: pr,
    paddingLeft: pl,
    marginLeft: 0 // Removes weird margins in Safari
    ,
    marginRight: 0 // Removes weird margins in Safari
    ,
    marginTop: 0 // Removes weird margins in Safari
    ,
    marginBottom: 0 // Removes weird margins in Safari
    ,
    size: textSize,
    color: null // Prevent the Text color overriding the glamor appearanceStyle color
    ,
    height: height,
    lineHeight: "".concat(height, "px")
  }, isActive ? {
    'data-active': true
  } : {}, styles, restProps, {
    disabled: disabled || isLoading
  }), isLoading && _react["default"].createElement(_spinner.Spinner, {
    marginLeft: -Math.round(height / 8),
    marginRight: Math.round(height / 4),
    size: Math.round(height / 2)
  }), _react["default"].createElement(ButtonIcon, {
    icon: iconBefore,
    size: iconSize,
    spacing: pl,
    edge: "start"
  }), children, _react["default"].createElement(ButtonIcon, {
    icon: iconAfter,
    size: iconSize,
    spacing: pr,
    edge: "end"
  }));
}));
Button.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * The intent of the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal', 'primary']),

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: _propTypes["default"].bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes["default"].bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOlsiQnV0dG9uSWNvbiIsImljb24iLCJzaXplIiwic3BhY2luZyIsImVkZ2UiLCJlZGdlTWFyZ2luIiwiTWF0aCIsInJvdW5kIiwiaW5uZXJNYXJnaW4iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzdHlsZXMiLCJwb3NpdGlvbiIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsIkJ1dHRvbiIsInByb3BzIiwicmVmIiwidGhlbWUiLCJjbGFzc05hbWUiLCJpbnRlbnQiLCJoZWlnaHQiLCJpc0FjdGl2ZSIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJhcHBlYXJhbmNlIiwiaXNMb2FkaW5nIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImljb25CZWZvcmUiLCJpY29uQWZ0ZXIiLCJyZXN0UHJvcHMiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRCdXR0b25DbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9yQnV0dG9uIiwicGFkZGluZyIsInByIiwidW5kZWZpbmVkIiwicGwiLCJwcm9wVHlwZXMiLCJkaW1lbnNpb25zIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwib25lT2YiLCJib29sIiwib25lT2ZUeXBlIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLFVBQVUsR0FBRyxpQkFBSyxTQUFTQSxV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TUFBTSxFQUFFNkIsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixDQXhCVjs7QUEwQkU7OztBQUdBekIsRUFBQUEsVUFBVSxFQUFFd0Isc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixDQUFoQixDQTdCZDs7QUErQkU7Ozs7QUFJQXhCLEVBQUFBLFNBQVMsRUFBRXVCLHNCQUFVRSxJQW5DdkI7O0FBcUNFOzs7O0FBSUE3QixFQUFBQSxRQUFRLEVBQUUyQixzQkFBVUUsSUF6Q3RCOztBQTJDRTs7O0FBR0FwQixFQUFBQSxVQUFVLEVBQUVrQixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUksV0FBWCxFQUF3Qkosc0JBQVVLLE9BQWxDLENBQXBCLENBOUNkOztBQWdERTs7O0FBR0F0QixFQUFBQSxTQUFTLEVBQUVpQixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUksV0FBWCxFQUF3Qkosc0JBQVVLLE9BQWxDLENBQXBCLENBbkRiOztBQXFERTs7OztBQUlBOUIsRUFBQUEsUUFBUSxFQUFFeUIsc0JBQVVFLElBekR0Qjs7QUEyREU7Ozs7QUFJQWhDLEVBQUFBLFNBQVMsRUFBRThCLHNCQUFVTTtBQS9EdkI7ZUFrRWV4QyxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb25XcmFwcGVyIH0gZnJvbSAnLi4vLi4vaWNvbnMvc3JjL0ljb25XcmFwcGVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vc3Bpbm5lcidcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzICovXG5jb25zdCBCdXR0b25JY29uID0gbWVtbyhmdW5jdGlvbiBCdXR0b25JY29uKHsgaWNvbiwgc2l6ZSwgc3BhY2luZywgZWRnZSB9KSB7XG4gIGlmICghaWNvbikgcmV0dXJuIG51bGxcblxuICBjb25zdCBlZGdlTWFyZ2luID0gLU1hdGgucm91bmQoc3BhY2luZyAqIDAuMilcbiAgY29uc3QgaW5uZXJNYXJnaW4gPSBNYXRoLnJvdW5kKHNpemUgKiAwLjcpXG4gIGNvbnN0IG1hcmdpbkxlZnQgPSBlZGdlID09PSAnc3RhcnQnID8gZWRnZU1hcmdpbiA6IGlubmVyTWFyZ2luXG4gIGNvbnN0IG1hcmdpblJpZ2h0ID0gZWRnZSA9PT0gJ2VuZCcgPyBlZGdlTWFyZ2luIDogaW5uZXJNYXJnaW5cblxuICByZXR1cm4gKFxuICAgIDxJY29uV3JhcHBlclxuICAgICAgaWNvbj17aWNvbn1cbiAgICAgIHNpemU9e3NpemV9XG4gICAgICBtYXJnaW5MZWZ0PXttYXJnaW5MZWZ0fVxuICAgICAgbWFyZ2luUmlnaHQ9e21hcmdpblJpZ2h0fVxuICAgIC8+XG4gIClcbn0pXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGZvbnRGYW1pbHk6ICd1aScsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGZsZXhXcmFwOiAnbm93cmFwJ1xufVxuXG5jb25zdCBCdXR0b24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEJ1dHRvbihwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG5cbiAgICAgIGludGVudCA9ICdub25lJyxcbiAgICAgIGhlaWdodCA9IDMyLFxuICAgICAgaXNBY3RpdmUgPSBmYWxzZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcHBlYXJhbmNlID0gJ2RlZmF1bHQnLFxuICAgICAgaXNMb2FkaW5nLFxuXG4gICAgICAvLyBQYWRkaW5nc1xuICAgICAgcGFkZGluZ1JpZ2h0LFxuICAgICAgcGFkZGluZ0xlZnQsXG4gICAgICBwYWRkaW5nVG9wID0gMCxcbiAgICAgIHBhZGRpbmdCb3R0b20gPSAwLFxuXG4gICAgICAvLyBJY29uc1xuICAgICAgaWNvbkJlZm9yZSxcbiAgICAgIGljb25BZnRlcixcblxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRCdXR0b25DbGFzc05hbWUoYXBwZWFyYW5jZSwgaW50ZW50KVxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JCdXR0b24oaGVpZ2h0KVxuXG4gICAgY29uc3QgcGFkZGluZyA9IE1hdGgucm91bmQoaGVpZ2h0IC8gMilcbiAgICBjb25zdCBwciA9IHBhZGRpbmdSaWdodCAhPT0gdW5kZWZpbmVkID8gcGFkZGluZ1JpZ2h0IDogcGFkZGluZyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG4gICAgY29uc3QgcGwgPSBwYWRkaW5nTGVmdCAhPT0gdW5kZWZpbmVkID8gcGFkZGluZ0xlZnQgOiBwYWRkaW5nIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImJ1dHRvblwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIHBhZGRpbmdUb3A9e3BhZGRpbmdUb3B9XG4gICAgICAgIHBhZGRpbmdCb3R0b209e3BhZGRpbmdCb3R0b219XG4gICAgICAgIHBhZGRpbmdSaWdodD17cHJ9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXtwbH1cbiAgICAgICAgbWFyZ2luTGVmdD17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBtYXJnaW5SaWdodD17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBtYXJnaW5Ub3A9ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgbWFyZ2luQm90dG9tPXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICBjb2xvcj17bnVsbH0gLy8gUHJldmVudCB0aGUgVGV4dCBjb2xvciBvdmVycmlkaW5nIHRoZSBnbGFtb3IgYXBwZWFyYW5jZVN0eWxlIGNvbG9yXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBsaW5lSGVpZ2h0PXtgJHtoZWlnaHR9cHhgfVxuICAgICAgICB7Li4uKGlzQWN0aXZlID8geyAnZGF0YS1hY3RpdmUnOiB0cnVlIH0gOiB7fSl9XG4gICAgICAgIHsuLi5zdHlsZXN9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpc0xvYWRpbmd9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmVyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXstTWF0aC5yb3VuZChoZWlnaHQgLyA4KX1cbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDQpfVxuICAgICAgICAgICAgc2l6ZT17TWF0aC5yb3VuZChoZWlnaHQgLyAyKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8QnV0dG9uSWNvblxuICAgICAgICAgIGljb249e2ljb25CZWZvcmV9XG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgc3BhY2luZz17cGx9XG4gICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8QnV0dG9uSWNvbiBpY29uPXtpY29uQWZ0ZXJ9IHNpemU9e2ljb25TaXplfSBzcGFjaW5nPXtwcn0gZWRnZT1cImVuZFwiIC8+XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9KVxuKVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICovXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtaW5pbWFsJywgJ3ByaW1hcnknXSksXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGxvYWRpbmcgc3Bpbm5lciBiZWZvcmUgdGhlIGNoaWxkcmVuLlxuICAgKiBUaGlzIGFsc28gZGlzYWJsZXMgdGhlIGJ1dHRvbi5cbiAgICovXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZvcmNlZnVsbHkgc2V0IHRoZSBhY3RpdmUgc3RhdGUgb2YgYSBidXR0b24uXG4gICAqIFVzZWZ1bCBpbiBjb25qdWN0aW9uIHdpdGggYSBQb3BvdmVyLlxuICAgKi9cbiAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGljb24gYmVmb3JlIHRoZSB0ZXh0LiBDYW4gYmUgYW55IGljb24gZnJvbSBFdmVyZ3JlZW4gb3IgYSBjdXN0b20gZWxlbWVudC5cbiAgICovXG4gIGljb25CZWZvcmU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50VHlwZSwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcblxuICAvKipcbiAgICogU2V0cyBhbiBpY29uIGFmdGVyIHRoZSB0ZXh0LiBDYW4gYmUgYW55IGljb24gZnJvbSBFdmVyZ3JlZW4gb3IgYSBjdXN0b20gZWxlbWVudC5cbiAgICovXG4gIGljb25BZnRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqIGlzTG9hZGluZyBhbHNvIHNldHMgdGhlIGJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl19