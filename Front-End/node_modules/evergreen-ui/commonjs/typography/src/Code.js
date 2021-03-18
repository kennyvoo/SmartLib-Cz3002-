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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../../theme");

var _Text = _interopRequireDefault(require("./Text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Code = (0, _react.memo)((0, _react.forwardRef)(function Code(props, ref) {
  var theme = (0, _theme.useTheme)();
  var className = props.className,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "appearance"]);

  var _theme$getCodeProps = theme.getCodeProps(appearance),
      _theme$getCodeProps$c = _theme$getCodeProps.className,
      themedClassName = _theme$getCodeProps$c === void 0 ? '' : _theme$getCodeProps$c,
      themeProps = (0, _objectWithoutProperties2["default"])(_theme$getCodeProps, ["className"]);

  return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
    is: "code",
    ref: ref,
    className: (0, _classnames["default"])(className, themedClassName),
    fontFamily: "mono"
  }, themeProps, restProps));
}));
Code.propTypes = _objectSpread(_objectSpread({}, _Text["default"].propTypes), {}, {
  /**
   * The appearance of the code.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal']),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = Code;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Db2RlLmpzIl0sIm5hbWVzIjpbIkNvZGUiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiYXBwZWFyYW5jZSIsInJlc3RQcm9wcyIsImdldENvZGVQcm9wcyIsInRoZW1lZENsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJwcm9wVHlwZXMiLCJUZXh0IiwiUHJvcFR5cGVzIiwib25lT2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxpQkFDWCx1QkFBVyxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ25DLE1BQU1DLEtBQUssR0FBRyxzQkFBZDtBQURtQyxNQUUzQkMsU0FGMkIsR0FFeUJILEtBRnpCLENBRTNCRyxTQUYyQjtBQUFBLDBCQUV5QkgsS0FGekIsQ0FFaEJJLFVBRmdCO0FBQUEsTUFFaEJBLFVBRmdCLGtDQUVILFNBRkc7QUFBQSxNQUVXQyxTQUZYLDZDQUV5QkwsS0FGekI7O0FBQUEsNEJBTy9CRSxLQUFLLENBQUNJLFlBQU4sQ0FBbUJGLFVBQW5CLENBUCtCO0FBQUEsa0RBS2pDRCxTQUxpQztBQUFBLE1BS3RCSSxlQUxzQixzQ0FLSixFQUxJO0FBQUEsTUFNOUJDLFVBTjhCOztBQVNuQyxTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsTUFETDtBQUVFLElBQUEsR0FBRyxFQUFFUCxHQUZQO0FBR0UsSUFBQSxTQUFTLEVBQUUsNEJBQUdFLFNBQUgsRUFBY0ksZUFBZCxDQUhiO0FBSUUsSUFBQSxVQUFVLEVBQUM7QUFKYixLQUtNQyxVQUxOLEVBTU1ILFNBTk4sRUFERjtBQVVELENBbkJELENBRFcsQ0FBYjtBQXVCQU4sSUFBSSxDQUFDVSxTQUFMLG1DQUNLQyxpQkFBS0QsU0FEVjtBQUdFOzs7QUFHQUwsRUFBQUEsVUFBVSxFQUFFTyxzQkFBVUMsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLENBQWhCLENBTmQ7O0FBUUU7Ozs7QUFJQVQsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVUU7QUFadkI7ZUFlZWQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmNvbnN0IENvZGUgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIENvZGUocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBhcHBlYXJhbmNlID0gJ2RlZmF1bHQnLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWU6IHRoZW1lZENsYXNzTmFtZSA9ICcnLFxuICAgICAgLi4udGhlbWVQcm9wc1xuICAgIH0gPSB0aGVtZS5nZXRDb2RlUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImNvZGVcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIHRoZW1lZENsYXNzTmFtZSl9XG4gICAgICAgIGZvbnRGYW1pbHk9XCJtb25vXCJcbiAgICAgICAgey4uLnRoZW1lUHJvcHN9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuQ29kZS5wcm9wVHlwZXMgPSB7XG4gIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY29kZS5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbWluaW1hbCddKSxcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVcbiJdfQ==