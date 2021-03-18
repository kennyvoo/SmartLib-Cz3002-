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

var Link = (0, _react.memo)((0, _react.forwardRef)(function Link(props, ref) {
  var theme = (0, _theme.useTheme)();
  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "color"]);
  var themedClassName = theme.getLinkClassName(color);
  return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
    is: "a",
    ref: ref,
    className: (0, _classnames["default"])(className, themedClassName),
    textDecoration: "underline",
    color: null
  }, restProps));
}));
Link.propTypes = _objectSpread(_objectSpread({}, _Text["default"].propTypes), {}, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: _propTypes["default"].string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: _propTypes["default"].string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: _propTypes["default"].string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: _propTypes["default"].string,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = Link;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJyZXN0UHJvcHMiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRMaW5rQ2xhc3NOYW1lIiwicHJvcFR5cGVzIiwiVGV4dCIsInJlbCIsIlByb3BUeXBlcyIsInN0cmluZyIsImhyZWYiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxpQkFDWCx1QkFBVyxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ25DLE1BQU1DLEtBQUssR0FBRyxzQkFBZDtBQURtQyxNQUUzQkMsU0FGMkIsR0FFb0JILEtBRnBCLENBRTNCRyxTQUYyQjtBQUFBLHFCQUVvQkgsS0FGcEIsQ0FFaEJJLEtBRmdCO0FBQUEsTUFFaEJBLEtBRmdCLDZCQUVSLFNBRlE7QUFBQSxNQUVNQyxTQUZOLDZDQUVvQkwsS0FGcEI7QUFHbkMsTUFBTU0sZUFBZSxHQUFHSixLQUFLLENBQUNLLGdCQUFOLENBQXVCSCxLQUF2QixDQUF4QjtBQUVBLFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxHQURMO0FBRUUsSUFBQSxHQUFHLEVBQUVILEdBRlA7QUFHRSxJQUFBLFNBQVMsRUFBRSw0QkFBR0UsU0FBSCxFQUFjRyxlQUFkLENBSGI7QUFJRSxJQUFBLGNBQWMsRUFBQyxXQUpqQjtBQUtFLElBQUEsS0FBSyxFQUFFO0FBTFQsS0FNTUQsU0FOTixFQURGO0FBVUQsQ0FmRCxDQURXLENBQWI7QUFtQkFOLElBQUksQ0FBQ1MsU0FBTCxtQ0FDS0MsaUJBQUtELFNBRFY7QUFHRTs7OztBQUlBRSxFQUFBQSxHQUFHLEVBQUVDLHNCQUFVQyxNQVBqQjs7QUFTRTs7O0FBR0FDLEVBQUFBLElBQUksRUFBRUYsc0JBQVVDLE1BWmxCOztBQWNFOzs7QUFHQUUsRUFBQUEsTUFBTSxFQUFFSCxzQkFBVUMsTUFqQnBCOztBQW1CRTs7O0FBR0FSLEVBQUFBLEtBQUssRUFBRU8sc0JBQVVDLE1BdEJuQjs7QUF3QkU7Ozs7QUFJQVQsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVUM7QUE1QnZCO2VBK0JlYixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcblxuY29uc3QgTGluayA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gTGluayhwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNvbG9yID0gJ2RlZmF1bHQnLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0TGlua0NsYXNzTmFtZShjb2xvcilcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImFcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIHRoZW1lZENsYXNzTmFtZSl9XG4gICAgICAgIHRleHREZWNvcmF0aW9uPVwidW5kZXJsaW5lXCJcbiAgICAgICAgY29sb3I9e251bGx9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBuYW1lcyBhIHJlbGF0aW9uc2hpcCBvZiB0aGUgbGlua2VkIGRvY3VtZW50IHRvIHRoZSBjdXJyZW50IGRvY3VtZW50LlxuICAgKiBDb21tb24gdXNlIGNhc2UgaXM6IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIi5cbiAgICovXG4gIHJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBVUkwgb2YgdGhlIGxpbmtlZCByZXNvdXJjZS4gQSBVUkwgbWlnaHQgYmUgYWJzb2x1dGUgb3IgcmVsYXRpdmUuXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUYXJnZXQgYXRycmlidXRlLCBjb21tb24gdXNlIGNhc2UgaXMgdGFyZ2V0PVwiX2JsYW5rLlwiXG4gICAqL1xuICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciAoYW5kIHN0eWxpbmcpIG9mIHRoZSBMaW5rLiBDYW4gYmUgZGVmYXVsdCwgYmx1ZSwgZ3JlZW4gb3IgbmV1dHJhbC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgbGluay5cbiAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiJdfQ==