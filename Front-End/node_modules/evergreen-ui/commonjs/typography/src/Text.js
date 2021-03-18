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

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Text = (0, _react.memo)((0, _react.forwardRef)(function Text(props, ref) {
  var theme = (0, _theme.useTheme)();
  var className = props.className,
      css = props.css,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'ui' : _props$fontFamily,
      marginTop = props.marginTop,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "css", "size", "color", "fontFamily", "marginTop"]);

  var _theme$getTextStyle = theme.getTextStyle(size),
      defaultMarginTop = _theme$getTextStyle.marginTop,
      textStyle = (0, _objectWithoutProperties2["default"])(_theme$getTextStyle, ["marginTop"]);

  var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "span",
    ref: ref,
    color: theme.getTextColor(color),
    fontFamily: theme.getFontFamily(fontFamily),
    marginTop: finalMarginTop
  }, textStyle, {
    className: (0, _classnames["default"])(className, css ? (0, _glamor.css)(css).toString() : undefined)
  }, restProps));
}));
Text.propTypes = _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: _propTypes["default"].string
});
var _default = Text;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbIlRleHQiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY3NzIiwic2l6ZSIsImNvbG9yIiwiZm9udEZhbWlseSIsIm1hcmdpblRvcCIsInJlc3RQcm9wcyIsImdldFRleHRTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIkJveCIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsaUJBQ1gsdUJBQVcsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxHQUFyQixFQUEwQjtBQUNuQyxNQUFNQyxLQUFLLEdBQUcsc0JBQWQ7QUFEbUMsTUFHakNDLFNBSGlDLEdBVS9CSCxLQVYrQixDQUdqQ0csU0FIaUM7QUFBQSxNQUlqQ0MsR0FKaUMsR0FVL0JKLEtBVitCLENBSWpDSSxHQUppQztBQUFBLG9CQVUvQkosS0FWK0IsQ0FLakNLLElBTGlDO0FBQUEsTUFLakNBLElBTGlDLDRCQUsxQixHQUwwQjtBQUFBLHFCQVUvQkwsS0FWK0IsQ0FNakNNLEtBTmlDO0FBQUEsTUFNakNBLEtBTmlDLDZCQU16QixTQU55QjtBQUFBLDBCQVUvQk4sS0FWK0IsQ0FPakNPLFVBUGlDO0FBQUEsTUFPakNBLFVBUGlDLGtDQU9wQixJQVBvQjtBQUFBLE1BUWpDQyxTQVJpQyxHQVUvQlIsS0FWK0IsQ0FRakNRLFNBUmlDO0FBQUEsTUFTOUJDLFNBVDhCLDZDQVUvQlQsS0FWK0I7O0FBQUEsNEJBWW1CRSxLQUFLLENBQUNRLFlBQU4sQ0FDcERMLElBRG9ELENBWm5CO0FBQUEsTUFZaEJNLGdCQVpnQix1QkFZM0JILFNBWjJCO0FBQUEsTUFZS0ksU0FaTDs7QUFnQm5DLE1BQU1DLGNBQWMsR0FDbEJMLFNBQVMsS0FBSyxTQUFkLEdBQTBCRyxnQkFBMUIsR0FBNkNILFNBRC9DO0FBR0EsU0FDRSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLE1BREw7QUFFRSxJQUFBLEdBQUcsRUFBRVAsR0FGUDtBQUdFLElBQUEsS0FBSyxFQUFFQyxLQUFLLENBQUNZLFlBQU4sQ0FBbUJSLEtBQW5CLENBSFQ7QUFJRSxJQUFBLFVBQVUsRUFBRUosS0FBSyxDQUFDYSxhQUFOLENBQW9CUixVQUFwQixDQUpkO0FBS0UsSUFBQSxTQUFTLEVBQUVNO0FBTGIsS0FNTUQsU0FOTjtBQU9FLElBQUEsU0FBUyxFQUFFLDRCQUFHVCxTQUFILEVBQWNDLEdBQUcsR0FBRyxpQkFBVUEsR0FBVixFQUFlWSxRQUFmLEVBQUgsR0FBK0JDLFNBQWhEO0FBUGIsS0FRTVIsU0FSTixFQURGO0FBWUQsQ0EvQkQsQ0FEVyxDQUFiO0FBbUNBVixJQUFJLENBQUNtQixTQUFMLG1DQUlLQyxrQkFBSUQsU0FKVDtBQU1FOzs7O0FBSUFiLEVBQUFBLElBQUksRUFBRWUsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsQ0FWUjs7QUFZRTs7OztBQUlBZCxFQUFBQSxVQUFVLEVBQUVhLHNCQUFVRTtBQWhCeEI7ZUFtQmV2QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgVGV4dCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dChwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY3NzLFxuICAgICAgc2l6ZSA9IDQwMCxcbiAgICAgIGNvbG9yID0gJ2RlZmF1bHQnLFxuICAgICAgZm9udEZhbWlseSA9ICd1aScsXG4gICAgICBtYXJnaW5Ub3AsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHsgbWFyZ2luVG9wOiBkZWZhdWx0TWFyZ2luVG9wLCAuLi50ZXh0U3R5bGUgfSA9IHRoZW1lLmdldFRleHRTdHlsZShcbiAgICAgIHNpemVcbiAgICApXG5cbiAgICBjb25zdCBmaW5hbE1hcmdpblRvcCA9XG4gICAgICBtYXJnaW5Ub3AgPT09ICdkZWZhdWx0JyA/IGRlZmF1bHRNYXJnaW5Ub3AgOiBtYXJnaW5Ub3BcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwic3BhblwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjb2xvcj17dGhlbWUuZ2V0VGV4dENvbG9yKGNvbG9yKX1cbiAgICAgICAgZm9udEZhbWlseT17dGhlbWUuZ2V0Rm9udEZhbWlseShmb250RmFtaWx5KX1cbiAgICAgICAgbWFyZ2luVG9wPXtmaW5hbE1hcmdpblRvcH1cbiAgICAgICAgey4uLnRleHRTdHlsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQpfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG5cblRleHQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIEJveCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSB0ZXh0IHN0eWxlLlxuICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMCwgNjAwXSksXG5cbiAgLyoqXG4gICAqIEZvbnQgZmFtaWx5LlxuICAgKiBDYW4gYmU6IGB1aWAsIGBkaXNwbGF5YCBvciBgbW9ub2Agb3IgYSBjdXN0b20gZm9udCBmYW1pbHkuXG4gICAqL1xuICBmb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRcbiJdfQ==