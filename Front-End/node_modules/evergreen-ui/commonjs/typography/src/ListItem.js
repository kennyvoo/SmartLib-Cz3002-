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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _IconWrapper = require("../../icons/src/IconWrapper");

var _scales = require("../../scales");

var _Text = _interopRequireDefault(require("./Text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ListItem = (0, _react.memo)((0, _react.forwardRef)(function ListItem(props, ref) {
  var children = props.children,
      size = props.size,
      icon = props.icon,
      iconColor = props.iconColor,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "size", "icon", "iconColor"]);
  var paddingLeft;
  if (size === 300) paddingLeft = (0, _scales.minorScale)(1);
  if (size === 400) paddingLeft = (0, _scales.minorScale)(2);
  if (size === 500) paddingLeft = (0, _scales.minorScale)(2);
  if (size === 600) paddingLeft = (0, _scales.minorScale)(3);
  var iconTop;
  if (size === 300) iconTop = 1;
  if (size === 400) iconTop = 3;
  if (size === 500) iconTop = 3;
  if (size === 600) iconTop = 4;
  var iconSize;
  if (size === 300) iconSize = 12;
  if (size === 400) iconSize = 14;
  if (size === 500) iconSize = 14;
  if (size === 600) iconSize = 16;
  var iconLeft = -iconSize - 4;
  if (size === 600) iconLeft = -iconSize;
  return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
    is: "li",
    position: "relative",
    marginY: "0.5em",
    size: size,
    listStyleType: icon ? 'none' : undefined,
    paddingLeft: icon ? paddingLeft : undefined,
    ref: ref
  }, rest), icon && _react["default"].createElement(_IconWrapper.IconWrapper, {
    icon: icon,
    color: iconColor,
    position: "absolute",
    size: iconSize,
    left: iconLeft,
    top: iconTop
  }), children);
}));
ListItem.propTypes = _objectSpread(_objectSpread({}, _Text["default"].propTypes), {}, {
  /**
   * When provided, adds a icon before the list item.
   */
  icon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * The color of the icon.
   */
  iconColor: _propTypes["default"].string
});
var _default = ListItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJzaXplIiwiaWNvbiIsImljb25Db2xvciIsInJlc3QiLCJwYWRkaW5nTGVmdCIsImljb25Ub3AiLCJpY29uU2l6ZSIsImljb25MZWZ0IiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiVGV4dCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLGlCQUNmLHVCQUFXLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUFBLE1BQy9CQyxRQUQrQixHQUNjRixLQURkLENBQy9CRSxRQUQrQjtBQUFBLE1BQ3JCQyxJQURxQixHQUNjSCxLQURkLENBQ3JCRyxJQURxQjtBQUFBLE1BQ2ZDLElBRGUsR0FDY0osS0FEZCxDQUNmSSxJQURlO0FBQUEsTUFDVEMsU0FEUyxHQUNjTCxLQURkLENBQ1RLLFNBRFM7QUFBQSxNQUNLQyxJQURMLDZDQUNjTixLQURkO0FBR3ZDLE1BQUlPLFdBQUo7QUFDQSxNQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksV0FBVyxHQUFHLHdCQUFXLENBQVgsQ0FBZDtBQUNsQixNQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksV0FBVyxHQUFHLHdCQUFXLENBQVgsQ0FBZDtBQUNsQixNQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksV0FBVyxHQUFHLHdCQUFXLENBQVgsQ0FBZDtBQUNsQixNQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksV0FBVyxHQUFHLHdCQUFXLENBQVgsQ0FBZDtBQUVsQixNQUFJQyxPQUFKO0FBQ0EsTUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JLLE9BQU8sR0FBRyxDQUFWO0FBQ2xCLE1BQUlMLElBQUksS0FBSyxHQUFiLEVBQWtCSyxPQUFPLEdBQUcsQ0FBVjtBQUNsQixNQUFJTCxJQUFJLEtBQUssR0FBYixFQUFrQkssT0FBTyxHQUFHLENBQVY7QUFDbEIsTUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JLLE9BQU8sR0FBRyxDQUFWO0FBRWxCLE1BQUlDLFFBQUo7QUFDQSxNQUFJTixJQUFJLEtBQUssR0FBYixFQUFrQk0sUUFBUSxHQUFHLEVBQVg7QUFDbEIsTUFBSU4sSUFBSSxLQUFLLEdBQWIsRUFBa0JNLFFBQVEsR0FBRyxFQUFYO0FBQ2xCLE1BQUlOLElBQUksS0FBSyxHQUFiLEVBQWtCTSxRQUFRLEdBQUcsRUFBWDtBQUNsQixNQUFJTixJQUFJLEtBQUssR0FBYixFQUFrQk0sUUFBUSxHQUFHLEVBQVg7QUFFbEIsTUFBSUMsUUFBUSxHQUFHLENBQUNELFFBQUQsR0FBWSxDQUEzQjtBQUNBLE1BQUlOLElBQUksS0FBSyxHQUFiLEVBQWtCTyxRQUFRLEdBQUcsQ0FBQ0QsUUFBWjtBQUVsQixTQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsSUFETDtBQUVFLElBQUEsUUFBUSxFQUFDLFVBRlg7QUFHRSxJQUFBLE9BQU8sRUFBQyxPQUhWO0FBSUUsSUFBQSxJQUFJLEVBQUVOLElBSlI7QUFLRSxJQUFBLGFBQWEsRUFBRUMsSUFBSSxHQUFHLE1BQUgsR0FBWU8sU0FMakM7QUFNRSxJQUFBLFdBQVcsRUFBRVAsSUFBSSxHQUFHRyxXQUFILEdBQWlCSSxTQU5wQztBQU9FLElBQUEsR0FBRyxFQUFFVjtBQVBQLEtBUU1LLElBUk4sR0FVR0YsSUFBSSxJQUNILGdDQUFDLHdCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVBLElBRFI7QUFFRSxJQUFBLEtBQUssRUFBRUMsU0FGVDtBQUdFLElBQUEsUUFBUSxFQUFDLFVBSFg7QUFJRSxJQUFBLElBQUksRUFBRUksUUFKUjtBQUtFLElBQUEsSUFBSSxFQUFFQyxRQUxSO0FBTUUsSUFBQSxHQUFHLEVBQUVGO0FBTlAsSUFYSixFQW9CR04sUUFwQkgsQ0FERjtBQXdCRCxDQWhERCxDQURlLENBQWpCO0FBb0RBSCxRQUFRLENBQUNhLFNBQVQsbUNBQ0tDLGlCQUFLRCxTQURWO0FBR0U7OztBQUdBUixFQUFBQSxJQUFJLEVBQUVVLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVRSxXQUFYLEVBQXdCRixzQkFBVUcsT0FBbEMsQ0FBcEIsQ0FOUjs7QUFRRTs7O0FBR0FaLEVBQUFBLFNBQVMsRUFBRVMsc0JBQVVJO0FBWHZCO2VBY2VuQixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEljb25XcmFwcGVyIH0gZnJvbSAnLi4vLi4vaWNvbnMvc3JjL0ljb25XcmFwcGVyJ1xuaW1wb3J0IHsgbWlub3JTY2FsZSB9IGZyb20gJy4uLy4uL3NjYWxlcydcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcblxuY29uc3QgTGlzdEl0ZW0gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIExpc3RJdGVtKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCBpY29uLCBpY29uQ29sb3IsIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICBsZXQgcGFkZGluZ0xlZnRcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBwYWRkaW5nTGVmdCA9IG1pbm9yU2NhbGUoMSlcbiAgICBpZiAoc2l6ZSA9PT0gNDAwKSBwYWRkaW5nTGVmdCA9IG1pbm9yU2NhbGUoMilcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBwYWRkaW5nTGVmdCA9IG1pbm9yU2NhbGUoMilcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBwYWRkaW5nTGVmdCA9IG1pbm9yU2NhbGUoMylcblxuICAgIGxldCBpY29uVG9wXG4gICAgaWYgKHNpemUgPT09IDMwMCkgaWNvblRvcCA9IDFcbiAgICBpZiAoc2l6ZSA9PT0gNDAwKSBpY29uVG9wID0gM1xuICAgIGlmIChzaXplID09PSA1MDApIGljb25Ub3AgPSAzXG4gICAgaWYgKHNpemUgPT09IDYwMCkgaWNvblRvcCA9IDRcblxuICAgIGxldCBpY29uU2l6ZVxuICAgIGlmIChzaXplID09PSAzMDApIGljb25TaXplID0gMTJcbiAgICBpZiAoc2l6ZSA9PT0gNDAwKSBpY29uU2l6ZSA9IDE0XG4gICAgaWYgKHNpemUgPT09IDUwMCkgaWNvblNpemUgPSAxNFxuICAgIGlmIChzaXplID09PSA2MDApIGljb25TaXplID0gMTZcblxuICAgIGxldCBpY29uTGVmdCA9IC1pY29uU2l6ZSAtIDRcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBpY29uTGVmdCA9IC1pY29uU2l6ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwibGlcIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgbWFyZ2luWT1cIjAuNWVtXCJcbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgbGlzdFN0eWxlVHlwZT17aWNvbiA/ICdub25lJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e2ljb24gPyBwYWRkaW5nTGVmdCA6IHVuZGVmaW5lZH1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgPEljb25XcmFwcGVyXG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgY29sb3I9e2ljb25Db2xvcn1cbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgICBsZWZ0PXtpY29uTGVmdH1cbiAgICAgICAgICAgIHRvcD17aWNvblRvcH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9KVxuKVxuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBXaGVuIHByb3ZpZGVkLCBhZGRzIGEgaWNvbiBiZWZvcmUgdGhlIGxpc3QgaXRlbS5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50VHlwZSwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBpY29uLlxuICAgKi9cbiAgaWNvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtXG4iXX0=