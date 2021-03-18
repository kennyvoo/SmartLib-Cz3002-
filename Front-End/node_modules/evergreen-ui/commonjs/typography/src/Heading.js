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

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Heading = (0, _react.memo)((0, _react.forwardRef)(function Heading(props, ref) {
  var theme = (0, _theme.useTheme)();
  var marginTop = props.marginTop,
      _props$size = props.size,
      size = _props$size === void 0 ? 500 : _props$size,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["marginTop", "size"]);

  var _theme$getHeadingStyl = theme.getHeadingStyle(size),
      defaultMarginTop = _theme$getHeadingStyl.marginTop,
      headingStyle = (0, _objectWithoutProperties2["default"])(_theme$getHeadingStyl, ["marginTop"]);

  var finalMarginTop = marginTop;

  if (marginTop === 'default') {
    finalMarginTop = defaultMarginTop;
  }

  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "h2",
    ref: ref,
    marginTop: finalMarginTop || 0,
    marginBottom: 0
  }, headingStyle, restProps));
}));
Heading.propTypes = _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * The size of the heading.
   */
  size: _propTypes["default"].oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number, _propTypes["default"].string])
});
var _default = Heading;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9IZWFkaW5nLmpzIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJwcm9wcyIsInJlZiIsInRoZW1lIiwibWFyZ2luVG9wIiwic2l6ZSIsInJlc3RQcm9wcyIsImdldEhlYWRpbmdTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJoZWFkaW5nU3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsInByb3BUeXBlcyIsIkJveCIsIlByb3BUeXBlcyIsIm9uZU9mIiwib25lT2ZUeXBlIiwiYm9vbCIsIm51bWJlciIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLGlCQUNkLHVCQUFXLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxHQUF4QixFQUE2QjtBQUN0QyxNQUFNQyxLQUFLLEdBQUcsc0JBQWQ7QUFEc0MsTUFFOUJDLFNBRjhCLEdBRVVILEtBRlYsQ0FFOUJHLFNBRjhCO0FBQUEsb0JBRVVILEtBRlYsQ0FFbkJJLElBRm1CO0FBQUEsTUFFbkJBLElBRm1CLDRCQUVaLEdBRlk7QUFBQSxNQUVKQyxTQUZJLDZDQUVVTCxLQUZWOztBQUFBLDhCQU1sQ0UsS0FBSyxDQUFDSSxlQUFOLENBQXNCRixJQUF0QixDQU5rQztBQUFBLE1BSXpCRyxnQkFKeUIseUJBSXBDSixTQUpvQztBQUFBLE1BS2pDSyxZQUxpQzs7QUFRdEMsTUFBSUMsY0FBYyxHQUFHTixTQUFyQjs7QUFDQSxNQUFJQSxTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDM0JNLElBQUFBLGNBQWMsR0FBR0YsZ0JBQWpCO0FBQ0Q7O0FBRUQsU0FDRSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLElBREw7QUFFRSxJQUFBLEdBQUcsRUFBRU4sR0FGUDtBQUdFLElBQUEsU0FBUyxFQUFFUSxjQUFjLElBQUksQ0FIL0I7QUFJRSxJQUFBLFlBQVksRUFBRTtBQUpoQixLQUtNRCxZQUxOLEVBTU1ILFNBTk4sRUFERjtBQVVELENBdkJELENBRGMsQ0FBaEI7QUEyQkFOLE9BQU8sQ0FBQ1csU0FBUixtQ0FJS0Msa0JBQUlELFNBSlQ7QUFNRTs7O0FBR0FOLEVBQUFBLElBQUksRUFBRVEsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsQ0FBaEIsQ0FUUjs7QUFXRTs7O0FBR0FWLEVBQUFBLFNBQVMsRUFBRVMsc0JBQVVFLFNBQVYsQ0FBb0IsQ0FDN0JGLHNCQUFVRyxJQURtQixFQUU3Qkgsc0JBQVVJLE1BRm1CLEVBRzdCSixzQkFBVUssTUFIbUIsQ0FBcEI7QUFkYjtlQXFCZWxCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBIZWFkaW5nID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBIZWFkaW5nKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCB7IG1hcmdpblRvcCwgc2l6ZSA9IDUwMCwgLi4ucmVzdFByb3BzIH0gPSBwcm9wc1xuICAgIGNvbnN0IHtcbiAgICAgIG1hcmdpblRvcDogZGVmYXVsdE1hcmdpblRvcCxcbiAgICAgIC4uLmhlYWRpbmdTdHlsZVxuICAgIH0gPSB0aGVtZS5nZXRIZWFkaW5nU3R5bGUoc2l6ZSlcblxuICAgIGxldCBmaW5hbE1hcmdpblRvcCA9IG1hcmdpblRvcFxuICAgIGlmIChtYXJnaW5Ub3AgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZmluYWxNYXJnaW5Ub3AgPSBkZWZhdWx0TWFyZ2luVG9wXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJoMlwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBtYXJnaW5Ub3A9e2ZpbmFsTWFyZ2luVG9wIHx8IDB9XG4gICAgICAgIG1hcmdpbkJvdHRvbT17MH1cbiAgICAgICAgey4uLmhlYWRpbmdTdHlsZX1cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEhlYWRpbmcgY29tcG9zZXMgQm94IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uQm94LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGhlYWRpbmcuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDBdKSxcblxuICAvKipcbiAgICogUGFzcyBgZGVmYXVsdGAgdG8gdXNlIHRoZSBkZWZhdWx0IG1hcmdpbiB0b3AgZm9yIHRoYXQgc2l6ZS5cbiAgICovXG4gIG1hcmdpblRvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdcbiJdfQ==