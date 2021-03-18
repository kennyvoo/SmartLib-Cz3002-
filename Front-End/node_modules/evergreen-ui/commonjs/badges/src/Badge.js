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

var _typography = require("../../typography");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  height: 16,
  paddingTop: 0,
  paddingRight: 6,
  paddingBottom: 0,
  paddingLeft: 6,
  borderRadius: 2,
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
};
var Badge = (0, _react.memo)((0, _react.forwardRef)(function Badge(props, ref) {
  var theme = (0, _theme.useTheme)();
  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'neutral' : _props$color,
      _props$isInteractive = props.isInteractive,
      isInteractive = _props$isInteractive === void 0 ? false : _props$isInteractive,
      _props$isSolid = props.isSolid,
      isSolid = _props$isSolid === void 0 ? false : _props$isSolid,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "color", "isInteractive", "isSolid"]);
  var themeProps = theme.getBadgeProps({
    color: color,
    isSolid: isSolid
  });
  var appearance = isInteractive ? 'interactive' : 'default';
  var classNames = (0, _classnames["default"])(className, theme.getBadgeClassName(appearance));
  return _react["default"].createElement(_typography.Strong, (0, _extends2["default"])({
    ref: ref,
    size: 300
  }, styles, themeProps, restProps, {
    className: classNames
  }));
}));
Badge.propTypes = _objectSpread(_objectSpread({}, _typography.Strong.propTypes), {}, {
  /**
   * The color used for the badge.
   */
  color: _propTypes["default"].string,

  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: _propTypes["default"].bool
});
var _default = Badge;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL0JhZGdlLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImRpc3BsYXkiLCJib3hTaXppbmciLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0VHJhbnNmb3JtIiwiQmFkZ2UiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJpc0ludGVyYWN0aXZlIiwiaXNTb2xpZCIsInJlc3RQcm9wcyIsInRoZW1lUHJvcHMiLCJnZXRCYWRnZVByb3BzIiwiYXBwZWFyYW5jZSIsImNsYXNzTmFtZXMiLCJnZXRCYWRnZUNsYXNzTmFtZSIsInByb3BUeXBlcyIsIlN0cm9uZyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxPQUFPLEVBQUUsY0FESTtBQUViQyxFQUFBQSxTQUFTLEVBQUUsWUFGRTtBQUdiQyxFQUFBQSxNQUFNLEVBQUUsRUFISztBQUliQyxFQUFBQSxVQUFVLEVBQUUsQ0FKQztBQUtiQyxFQUFBQSxZQUFZLEVBQUUsQ0FMRDtBQU1iQyxFQUFBQSxhQUFhLEVBQUUsQ0FORjtBQU9iQyxFQUFBQSxXQUFXLEVBQUUsQ0FQQTtBQVFiQyxFQUFBQSxZQUFZLEVBQUUsQ0FSRDtBQVNiQyxFQUFBQSxTQUFTLEVBQUUsUUFURTtBQVViQyxFQUFBQSxjQUFjLEVBQUUsTUFWSDtBQVdiQyxFQUFBQSxhQUFhLEVBQUU7QUFYRixDQUFmO0FBY0EsSUFBTUMsS0FBSyxHQUFHLGlCQUNaLHVCQUFXLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDcEMsTUFBTUMsS0FBSyxHQUFHLHNCQUFkO0FBRG9DLE1BSWxDQyxTQUprQyxHQVNoQ0gsS0FUZ0MsQ0FJbENHLFNBSmtDO0FBQUEscUJBU2hDSCxLQVRnQyxDQUtsQ0ksS0FMa0M7QUFBQSxNQUtsQ0EsS0FMa0MsNkJBSzFCLFNBTDBCO0FBQUEsNkJBU2hDSixLQVRnQyxDQU1sQ0ssYUFOa0M7QUFBQSxNQU1sQ0EsYUFOa0MscUNBTWxCLEtBTmtCO0FBQUEsdUJBU2hDTCxLQVRnQyxDQU9sQ00sT0FQa0M7QUFBQSxNQU9sQ0EsT0FQa0MsK0JBT3hCLEtBUHdCO0FBQUEsTUFRL0JDLFNBUitCLDZDQVNoQ1AsS0FUZ0M7QUFXcEMsTUFBTVEsVUFBVSxHQUFHTixLQUFLLENBQUNPLGFBQU4sQ0FBb0I7QUFBRUwsSUFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNFLElBQUFBLE9BQU8sRUFBUEE7QUFBVCxHQUFwQixDQUFuQjtBQUNBLE1BQU1JLFVBQVUsR0FBR0wsYUFBYSxHQUFHLGFBQUgsR0FBbUIsU0FBbkQ7QUFDQSxNQUFNTSxVQUFVLEdBQUcsNEJBQUdSLFNBQUgsRUFBY0QsS0FBSyxDQUFDVSxpQkFBTixDQUF3QkYsVUFBeEIsQ0FBZCxDQUFuQjtBQUVBLFNBQ0UsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRVQsR0FEUDtBQUVFLElBQUEsSUFBSSxFQUFFO0FBRlIsS0FHTWQsTUFITixFQUlNcUIsVUFKTixFQUtNRCxTQUxOO0FBTUUsSUFBQSxTQUFTLEVBQUVJO0FBTmIsS0FERjtBQVVELENBekJELENBRFksQ0FBZDtBQTZCQVosS0FBSyxDQUFDYyxTQUFOLG1DQUNLQyxtQkFBT0QsU0FEWjtBQUdFOzs7QUFHQVQsRUFBQUEsS0FBSyxFQUFFVyxzQkFBVUMsTUFObkI7O0FBUUU7OztBQUdBWCxFQUFBQSxhQUFhLEVBQUVVLHNCQUFVRTtBQVgzQjtlQWNlbEIsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0cm9uZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgaGVpZ2h0OiAxNixcbiAgcGFkZGluZ1RvcDogMCxcbiAgcGFkZGluZ1JpZ2h0OiA2LFxuICBwYWRkaW5nQm90dG9tOiAwLFxuICBwYWRkaW5nTGVmdDogNixcbiAgYm9yZGVyUmFkaXVzOiAyLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xufVxuXG5jb25zdCBCYWRnZSA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gQmFkZ2UocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSAnbmV1dHJhbCcsXG4gICAgICBpc0ludGVyYWN0aXZlID0gZmFsc2UsXG4gICAgICBpc1NvbGlkID0gZmFsc2UsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHRoZW1lUHJvcHMgPSB0aGVtZS5nZXRCYWRnZVByb3BzKHsgY29sb3IsIGlzU29saWQgfSlcbiAgICBjb25zdCBhcHBlYXJhbmNlID0gaXNJbnRlcmFjdGl2ZSA/ICdpbnRlcmFjdGl2ZScgOiAnZGVmYXVsdCdcbiAgICBjb25zdCBjbGFzc05hbWVzID0gY3goY2xhc3NOYW1lLCB0aGVtZS5nZXRCYWRnZUNsYXNzTmFtZShhcHBlYXJhbmNlKSlcblxuICAgIHJldHVybiAoXG4gICAgICA8U3Ryb25nXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBzaXplPXszMDB9XG4gICAgICAgIHsuLi5zdHlsZXN9XG4gICAgICAgIHsuLi50aGVtZVByb3BzfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuQmFkZ2UucHJvcFR5cGVzID0ge1xuICAuLi5TdHJvbmcucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3IgdXNlZCBmb3IgdGhlIGJhZGdlLlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGhvdmVyL2ZvY3VzL2FjdGl2ZSBzdHlsZXNcbiAgICovXG4gIGlzSW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlXG4iXX0=