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

var _layers = require("../../layers");

var _typography = require("../../typography");

var _getIconForIntent = require("./getIconForIntent");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var InlineAlert = (0, _react.memo)((0, _react.forwardRef)(function InlineAlert(props, ref) {
  var children = props.children,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$hasIcon = props.hasIcon,
      hasIcon = _props$hasIcon === void 0 ? true : _props$hasIcon,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["children", "intent", "hasIcon", "size"]);
  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    ref: ref,
    alignItems: "center",
    display: "flex"
  }, restProps), hasIcon && _react["default"].createElement(_layers.Pane, {
    display: "inline",
    marginRight: 8
  }, (0, _getIconForIntent.getIconForIntent)(intent, {
    size: 14,
    marginTop: 2
  })), _react["default"].createElement(_typography.Text, {
    size: size,
    fontWeight: 500
  }, children));
}));
InlineAlert.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The content of the alert.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: _propTypes["default"].bool,

  /**
   * The size of the Text.
   */
  size: _propTypes["default"].number
});
var _default = InlineAlert;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvSW5saW5lQWxlcnQuanMiXSwibmFtZXMiOlsiSW5saW5lQWxlcnQiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwiaW50ZW50IiwiaGFzSWNvbiIsInNpemUiLCJyZXN0UHJvcHMiLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsIm9uZU9mIiwiYm9vbCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLGlCQUNsQix1QkFBVyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFBQSxNQUV4Q0MsUUFGd0MsR0FPdENGLEtBUHNDLENBRXhDRSxRQUZ3QztBQUFBLHNCQU90Q0YsS0FQc0MsQ0FHeENHLE1BSHdDO0FBQUEsTUFHeENBLE1BSHdDLDhCQUcvQixNQUgrQjtBQUFBLHVCQU90Q0gsS0FQc0MsQ0FJeENJLE9BSndDO0FBQUEsTUFJeENBLE9BSndDLCtCQUk5QixJQUo4QjtBQUFBLG9CQU90Q0osS0FQc0MsQ0FLeENLLElBTHdDO0FBQUEsTUFLeENBLElBTHdDLDRCQUtqQyxHQUxpQztBQUFBLE1BTXJDQyxTQU5xQyw2Q0FPdENOLEtBUHNDO0FBUzFDLFNBQ0UsZ0NBQUMsWUFBRDtBQUFNLElBQUEsR0FBRyxFQUFFQyxHQUFYO0FBQWdCLElBQUEsVUFBVSxFQUFDLFFBQTNCO0FBQW9DLElBQUEsT0FBTyxFQUFDO0FBQTVDLEtBQXVESyxTQUF2RCxHQUNHRixPQUFPLElBQ04sZ0NBQUMsWUFBRDtBQUFNLElBQUEsT0FBTyxFQUFDLFFBQWQ7QUFBdUIsSUFBQSxXQUFXLEVBQUU7QUFBcEMsS0FDRyx3Q0FBaUJELE1BQWpCLEVBQXlCO0FBQUVFLElBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlFLElBQUFBLFNBQVMsRUFBRTtBQUF2QixHQUF6QixDQURILENBRkosRUFNRSxnQ0FBQyxnQkFBRDtBQUFNLElBQUEsSUFBSSxFQUFFRixJQUFaO0FBQWtCLElBQUEsVUFBVSxFQUFFO0FBQTlCLEtBQ0dILFFBREgsQ0FORixDQURGO0FBWUQsQ0FyQkQsQ0FEa0IsQ0FBcEI7QUF5QkFILFdBQVcsQ0FBQ1MsU0FBWiw2RUFJS0MsZUFBUUQsU0FKYixHQUtLRSxnQkFBU0YsU0FMZCxHQU1LRyxjQUFPSCxTQU5aLEdBT0tJLGtCQUFXSixTQVBoQjtBQVNFOzs7QUFHQU4sRUFBQUEsUUFBUSxFQUFFVyxzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVHLElBQTdCLENBQXBCLENBWlo7O0FBY0U7OztBQUdBYixFQUFBQSxNQUFNLEVBQUVVLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsUUFBL0IsQ0FBaEIsQ0FqQlY7O0FBbUJFOzs7O0FBSUFiLEVBQUFBLE9BQU8sRUFBRVMsc0JBQVVLLElBdkJyQjs7QUF5QkU7OztBQUdBYixFQUFBQSxJQUFJLEVBQUVRLHNCQUFVTTtBQTVCbEI7ZUErQmVwQixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwYWNpbmcsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBnZXRJY29uRm9ySW50ZW50IH0gZnJvbSAnLi9nZXRJY29uRm9ySW50ZW50J1xuXG5jb25zdCBJbmxpbmVBbGVydCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gSW5saW5lQWxlcnQocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaW50ZW50ID0gJ25vbmUnLFxuICAgICAgaGFzSWNvbiA9IHRydWUsXG4gICAgICBzaXplID0gNDAwLFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgcmVmPXtyZWZ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiIHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICB7aGFzSWNvbiAmJiAoXG4gICAgICAgICAgPFBhbmUgZGlzcGxheT1cImlubGluZVwiIG1hcmdpblJpZ2h0PXs4fT5cbiAgICAgICAgICAgIHtnZXRJY29uRm9ySW50ZW50KGludGVudCwgeyBzaXplOiAxNCwgbWFyZ2luVG9wOiAyIH0pfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQgc2l6ZT17c2l6ZX0gZm9udFdlaWdodD17NTAwfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH0pXG4pXG5cbklubGluZUFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAqL1xuICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgLyoqXG4gICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LiBUaGlzIHNob3VsZCBhbHdheXMgYmUgc2V0IGV4cGxpY2l0bHkuXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBzaG93IGEgaWNvbiBvbiB0aGUgbGVmdCBtYXRjaGluZyB0aGUgdHlwZS5cbiAgICogVGhlcmUgaXMgbm8gcG9pbnQgbm90IHNob3dpbmcgdGhpcy5cbiAgICovXG4gIGhhc0ljb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgVGV4dC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5saW5lQWxlcnRcbiJdfQ==