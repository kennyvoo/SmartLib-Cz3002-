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

var _theme = require("../../theme");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _icons = require("../../icons");

var _getIconForIntent = require("./getIconForIntent");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Alert = (0, _react.memo)((0, _react.forwardRef)(function Alert(props, ref) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      children = props.children,
      _props$hasIcon = props.hasIcon,
      hasIcon = _props$hasIcon === void 0 ? true : _props$hasIcon,
      _props$hasTrim = props.hasTrim,
      hasTrim = _props$hasTrim === void 0 ? true : _props$hasTrim,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$isRemoveable = props.isRemoveable,
      isRemoveable = _props$isRemoveable === void 0 ? false : _props$isRemoveable,
      onRemove = props.onRemove,
      title = props.title,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["appearance", "children", "hasIcon", "hasTrim", "intent", "isRemoveable", "onRemove", "title"]);
  var theme = (0, _theme.useTheme)();
  /**
   * Note that Alert return a className and additional properties.
   */

  var _theme$getAlertProps = theme.getAlertProps({
    appearance: appearance,
    intent: intent,
    hasTrim: hasTrim
  }),
      className = _theme$getAlertProps.className,
      themeProps = (0, _objectWithoutProperties2["default"])(_theme$getAlertProps, ["className"]);

  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    ref: ref,
    className: className,
    role: "alert",
    backgroundColor: "white",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    paddingY: 12,
    paddingX: 16
  }, themeProps, restProps), hasIcon && _react["default"].createElement(_layers.Pane, {
    marginRight: 10,
    marginLeft: 2,
    height: 20,
    display: "flex",
    alignItems: "center"
  }, (0, _getIconForIntent.getIconForIntent)(intent, {
    size: 14
  })), _react["default"].createElement(_layers.Pane, {
    display: "flex",
    width: "100%"
  }, _react["default"].createElement(_layers.Pane, {
    flex: 1
  }, _react["default"].createElement(_typography.Heading, {
    is: "h4",
    fontWeight: 600,
    size: 400,
    marginTop: 0,
    marginBottom: 0
  }, title), typeof children === 'string' ? _react["default"].createElement(_typography.Paragraph, {
    size: 400,
    color: "muted"
  }, children) : children), isRemoveable && _react["default"].createElement(_layers.Pane, {
    marginLeft: 24,
    flexShrink: 0,
    marginBottom: -2,
    marginTop: -2,
    marginRight: -2
  }, _react["default"].createElement(_buttons.IconButton, {
    icon: _icons.CrossIcon,
    appearance: "minimal",
    height: 24,
    onClick: onRemove
  }))));
}));
Alert.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * The intent of the alert.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The title of the alert.
   */
  title: _propTypes["default"].node,

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim: _propTypes["default"].bool,

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: _propTypes["default"].bool,

  /**
   * When true, show a remove icon button.
   */
  isRemoveable: _propTypes["default"].bool,

  /**
   * Function called when the remove button is clicked.
   */
  onRemove: _propTypes["default"].func,

  /**
   * The appearance of the alert.
   */
  appearance: _propTypes["default"].oneOf(['default', 'card'])
});
var _default = Alert;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvQWxlcnQuanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInJlZiIsImFwcGVhcmFuY2UiLCJjaGlsZHJlbiIsImhhc0ljb24iLCJoYXNUcmltIiwiaW50ZW50IiwiaXNSZW1vdmVhYmxlIiwib25SZW1vdmUiLCJ0aXRsZSIsInJlc3RQcm9wcyIsInRoZW1lIiwiZ2V0QWxlcnRQcm9wcyIsImNsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJzaXplIiwiQ3Jvc3NJY29uIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJvbmVPZiIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsaUJBQ1osdUJBQVcsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUFBLDBCQVdoQ0QsS0FYZ0MsQ0FFbENFLFVBRmtDO0FBQUEsTUFFbENBLFVBRmtDLGtDQUVyQixTQUZxQjtBQUFBLE1BR2xDQyxRQUhrQyxHQVdoQ0gsS0FYZ0MsQ0FHbENHLFFBSGtDO0FBQUEsdUJBV2hDSCxLQVhnQyxDQUlsQ0ksT0FKa0M7QUFBQSxNQUlsQ0EsT0FKa0MsK0JBSXhCLElBSndCO0FBQUEsdUJBV2hDSixLQVhnQyxDQUtsQ0ssT0FMa0M7QUFBQSxNQUtsQ0EsT0FMa0MsK0JBS3hCLElBTHdCO0FBQUEsc0JBV2hDTCxLQVhnQyxDQU1sQ00sTUFOa0M7QUFBQSxNQU1sQ0EsTUFOa0MsOEJBTXpCLE1BTnlCO0FBQUEsNEJBV2hDTixLQVhnQyxDQU9sQ08sWUFQa0M7QUFBQSxNQU9sQ0EsWUFQa0Msb0NBT25CLEtBUG1CO0FBQUEsTUFRbENDLFFBUmtDLEdBV2hDUixLQVhnQyxDQVFsQ1EsUUFSa0M7QUFBQSxNQVNsQ0MsS0FUa0MsR0FXaENULEtBWGdDLENBU2xDUyxLQVRrQztBQUFBLE1BVS9CQyxTQVYrQiw2Q0FXaENWLEtBWGdDO0FBYXBDLE1BQU1XLEtBQUssR0FBRyxzQkFBZDtBQUVBOzs7O0FBZm9DLDZCQWtCQ0EsS0FBSyxDQUFDQyxhQUFOLENBQW9CO0FBQ3ZEVixJQUFBQSxVQUFVLEVBQVZBLFVBRHVEO0FBRXZESSxJQUFBQSxNQUFNLEVBQU5BLE1BRnVEO0FBR3ZERCxJQUFBQSxPQUFPLEVBQVBBO0FBSHVELEdBQXBCLENBbEJEO0FBQUEsTUFrQjVCUSxTQWxCNEIsd0JBa0I1QkEsU0FsQjRCO0FBQUEsTUFrQmRDLFVBbEJjOztBQXdCcEMsU0FDRSxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUViLEdBRFA7QUFFRSxJQUFBLFNBQVMsRUFBRVksU0FGYjtBQUdFLElBQUEsSUFBSSxFQUFDLE9BSFA7QUFJRSxJQUFBLGVBQWUsRUFBQyxPQUpsQjtBQUtFLElBQUEsUUFBUSxFQUFDLFFBTFg7QUFNRSxJQUFBLFFBQVEsRUFBQyxVQU5YO0FBT0UsSUFBQSxPQUFPLEVBQUMsTUFQVjtBQVFFLElBQUEsUUFBUSxFQUFFLEVBUlo7QUFTRSxJQUFBLFFBQVEsRUFBRTtBQVRaLEtBVU1DLFVBVk4sRUFXTUosU0FYTixHQWFHTixPQUFPLElBQ04sZ0NBQUMsWUFBRDtBQUNFLElBQUEsV0FBVyxFQUFFLEVBRGY7QUFFRSxJQUFBLFVBQVUsRUFBRSxDQUZkO0FBR0UsSUFBQSxNQUFNLEVBQUUsRUFIVjtBQUlFLElBQUEsT0FBTyxFQUFDLE1BSlY7QUFLRSxJQUFBLFVBQVUsRUFBQztBQUxiLEtBT0csd0NBQWlCRSxNQUFqQixFQUF5QjtBQUFFUyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUF6QixDQVBILENBZEosRUF3QkUsZ0NBQUMsWUFBRDtBQUFNLElBQUEsT0FBTyxFQUFDLE1BQWQ7QUFBcUIsSUFBQSxLQUFLLEVBQUM7QUFBM0IsS0FDRSxnQ0FBQyxZQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUU7QUFBWixLQUNFLGdDQUFDLG1CQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsSUFETDtBQUVFLElBQUEsVUFBVSxFQUFFLEdBRmQ7QUFHRSxJQUFBLElBQUksRUFBRSxHQUhSO0FBSUUsSUFBQSxTQUFTLEVBQUUsQ0FKYjtBQUtFLElBQUEsWUFBWSxFQUFFO0FBTGhCLEtBT0dOLEtBUEgsQ0FERixFQVVHLE9BQU9OLFFBQVAsS0FBb0IsUUFBcEIsR0FDQyxnQ0FBQyxxQkFBRDtBQUFXLElBQUEsSUFBSSxFQUFFLEdBQWpCO0FBQXNCLElBQUEsS0FBSyxFQUFDO0FBQTVCLEtBQ0dBLFFBREgsQ0FERCxHQUtDQSxRQWZKLENBREYsRUFtQkdJLFlBQVksSUFDWCxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUUsRUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFLENBRmQ7QUFHRSxJQUFBLFlBQVksRUFBRSxDQUFDLENBSGpCO0FBSUUsSUFBQSxTQUFTLEVBQUUsQ0FBQyxDQUpkO0FBS0UsSUFBQSxXQUFXLEVBQUUsQ0FBQztBQUxoQixLQU9FLGdDQUFDLG1CQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVTLGdCQURSO0FBRUUsSUFBQSxVQUFVLEVBQUMsU0FGYjtBQUdFLElBQUEsTUFBTSxFQUFFLEVBSFY7QUFJRSxJQUFBLE9BQU8sRUFBRVI7QUFKWCxJQVBGLENBcEJKLENBeEJGLENBREY7QUErREQsQ0F2RkQsQ0FEWSxDQUFkO0FBMkZBVCxLQUFLLENBQUNrQixTQUFOLDZFQUlLQyxlQUFRRCxTQUpiLEdBS0tFLGdCQUFTRixTQUxkLEdBTUtHLGNBQU9ILFNBTlosR0FPS0ksa0JBQVdKLFNBUGhCO0FBU0U7OztBQUdBZCxFQUFBQSxRQUFRLEVBQUVtQixzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVHLElBQTdCLENBQXBCLENBWlo7O0FBY0U7OztBQUdBbkIsRUFBQUEsTUFBTSxFQUFFZ0Isc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixDQWpCVjs7QUFtQkU7OztBQUdBakIsRUFBQUEsS0FBSyxFQUFFYSxzQkFBVUcsSUF0Qm5COztBQXdCRTs7O0FBR0FwQixFQUFBQSxPQUFPLEVBQUVpQixzQkFBVUssSUEzQnJCOztBQTZCRTs7O0FBR0F2QixFQUFBQSxPQUFPLEVBQUVrQixzQkFBVUssSUFoQ3JCOztBQWtDRTs7O0FBR0FwQixFQUFBQSxZQUFZLEVBQUVlLHNCQUFVSyxJQXJDMUI7O0FBdUNFOzs7QUFHQW5CLEVBQUFBLFFBQVEsRUFBRWMsc0JBQVVNLElBMUN0Qjs7QUE0Q0U7OztBQUdBMUIsRUFBQUEsVUFBVSxFQUFFb0Isc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksTUFBWixDQUFoQjtBQS9DZDtlQWtEZTNCLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BhY2luZywgZGltZW5zaW9ucywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZywgUGFyYWdyYXBoIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBnZXRJY29uRm9ySW50ZW50IH0gZnJvbSAnLi9nZXRJY29uRm9ySW50ZW50J1xuXG5jb25zdCBBbGVydCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gQWxlcnQocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGhhc0ljb24gPSB0cnVlLFxuICAgICAgaGFzVHJpbSA9IHRydWUsXG4gICAgICBpbnRlbnQgPSAnbm9uZScsXG4gICAgICBpc1JlbW92ZWFibGUgPSBmYWxzZSxcbiAgICAgIG9uUmVtb3ZlLFxuICAgICAgdGl0bGUsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuXG4gICAgLyoqXG4gICAgICogTm90ZSB0aGF0IEFsZXJ0IHJldHVybiBhIGNsYXNzTmFtZSBhbmQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi50aGVtZVByb3BzIH0gPSB0aGVtZS5nZXRBbGVydFByb3BzKHtcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBpbnRlbnQsXG4gICAgICBoYXNUcmltXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBwYWRkaW5nWT17MTJ9XG4gICAgICAgIHBhZGRpbmdYPXsxNn1cbiAgICAgICAgey4uLnRoZW1lUHJvcHN9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtoYXNJY29uICYmIChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgICAgbWFyZ2luTGVmdD17Mn1cbiAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0SWNvbkZvckludGVudChpbnRlbnQsIHsgc2l6ZTogMTQgfSl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxQYW5lIGZsZXg9ezF9PlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgaXM9XCJoNFwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgICAgc2l6ZT17NDAwfVxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezB9XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17MH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICB7aXNSZW1vdmVhYmxlICYmIChcbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezI0fVxuICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209ey0yfVxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9ey0yfVxuICAgICAgICAgICAgICBtYXJnaW5SaWdodD17LTJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj17Q3Jvc3NJY29ufVxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH0pXG4pXG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAqL1xuICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGFsZXJ0LiBXaGVuIGEgc3RyaW5nIGlzIHBhc3NlZCBpdCBpcyB3cmFwcGVkIGluIGEgYDxUZXh0IHNpemU9ezQwMH0gLz5gIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKlxuICAgKiBUaGUgaW50ZW50IG9mIHRoZSBhbGVydC5cbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIGFsZXJ0LlxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNob3cgYSBib3JkZXIgb24gdGhlIGxlZnQgbWF0Y2hpbmcgdGhlIHR5cGUuXG4gICAqL1xuICBoYXNUcmltOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBzaG93IGEgaWNvbiBvbiB0aGUgbGVmdCBtYXRjaGluZyB0aGUgdHlwZSxcbiAgICovXG4gIGhhc0ljb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNob3cgYSByZW1vdmUgaWNvbiBidXR0b24uXG4gICAqL1xuICBpc1JlbW92ZWFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgcmVtb3ZlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYWxlcnQuXG4gICAqL1xuICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiJdfQ==