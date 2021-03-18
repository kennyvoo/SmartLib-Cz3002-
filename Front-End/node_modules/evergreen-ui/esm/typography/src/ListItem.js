import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import React, { forwardRef, memo } from 'react';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { minorScale } from '../../scales';
import Text from './Text';
var ListItem = memo(forwardRef(function ListItem(props, ref) {
  var children = props.children,
      size = props.size,
      icon = props.icon,
      iconColor = props.iconColor,
      rest = _objectWithoutProperties(props, ["children", "size", "icon", "iconColor"]);

  var paddingLeft;
  if (size === 300) paddingLeft = minorScale(1);
  if (size === 400) paddingLeft = minorScale(2);
  if (size === 500) paddingLeft = minorScale(2);
  if (size === 600) paddingLeft = minorScale(3);
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
  return React.createElement(Text, _extends({
    is: "li",
    position: "relative",
    marginY: "0.5em",
    size: size,
    listStyleType: icon ? 'none' : undefined,
    paddingLeft: icon ? paddingLeft : undefined,
    ref: ref
  }, rest), icon && React.createElement(IconWrapper, {
    icon: icon,
    color: iconColor,
    position: "absolute",
    size: iconSize,
    left: iconLeft,
    top: iconTop
  }), children);
}));
ListItem.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * When provided, adds a icon before the list item.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * The color of the icon.
   */
  iconColor: PropTypes.string
});
export default ListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJtZW1vIiwiSWNvbldyYXBwZXIiLCJtaW5vclNjYWxlIiwiVGV4dCIsIkxpc3RJdGVtIiwicHJvcHMiLCJyZWYiLCJjaGlsZHJlbiIsInNpemUiLCJpY29uIiwiaWNvbkNvbG9yIiwicmVzdCIsInBhZGRpbmdMZWZ0IiwiaWNvblRvcCIsImljb25TaXplIiwiaWNvbkxlZnQiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJlbGVtZW50VHlwZSIsImVsZW1lbnQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLFVBQWhCLEVBQTRCQyxJQUE1QixRQUF3QyxPQUF4QztBQUNBLFNBQVNDLFdBQVQsUUFBNEIsNkJBQTVCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7QUFFQSxJQUFNQyxRQUFRLEdBQUdKLElBQUksQ0FDbkJELFVBQVUsQ0FBQyxTQUFTSyxRQUFULENBQWtCQyxLQUFsQixFQUF5QkMsR0FBekIsRUFBOEI7QUFBQSxNQUMvQkMsUUFEK0IsR0FDY0YsS0FEZCxDQUMvQkUsUUFEK0I7QUFBQSxNQUNyQkMsSUFEcUIsR0FDY0gsS0FEZCxDQUNyQkcsSUFEcUI7QUFBQSxNQUNmQyxJQURlLEdBQ2NKLEtBRGQsQ0FDZkksSUFEZTtBQUFBLE1BQ1RDLFNBRFMsR0FDY0wsS0FEZCxDQUNUSyxTQURTO0FBQUEsTUFDS0MsSUFETCw0QkFDY04sS0FEZDs7QUFHdkMsTUFBSU8sV0FBSjtBQUNBLE1BQUlKLElBQUksS0FBSyxHQUFiLEVBQWtCSSxXQUFXLEdBQUdWLFVBQVUsQ0FBQyxDQUFELENBQXhCO0FBQ2xCLE1BQUlNLElBQUksS0FBSyxHQUFiLEVBQWtCSSxXQUFXLEdBQUdWLFVBQVUsQ0FBQyxDQUFELENBQXhCO0FBQ2xCLE1BQUlNLElBQUksS0FBSyxHQUFiLEVBQWtCSSxXQUFXLEdBQUdWLFVBQVUsQ0FBQyxDQUFELENBQXhCO0FBQ2xCLE1BQUlNLElBQUksS0FBSyxHQUFiLEVBQWtCSSxXQUFXLEdBQUdWLFVBQVUsQ0FBQyxDQUFELENBQXhCO0FBRWxCLE1BQUlXLE9BQUo7QUFDQSxNQUFJTCxJQUFJLEtBQUssR0FBYixFQUFrQkssT0FBTyxHQUFHLENBQVY7QUFDbEIsTUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JLLE9BQU8sR0FBRyxDQUFWO0FBQ2xCLE1BQUlMLElBQUksS0FBSyxHQUFiLEVBQWtCSyxPQUFPLEdBQUcsQ0FBVjtBQUNsQixNQUFJTCxJQUFJLEtBQUssR0FBYixFQUFrQkssT0FBTyxHQUFHLENBQVY7QUFFbEIsTUFBSUMsUUFBSjtBQUNBLE1BQUlOLElBQUksS0FBSyxHQUFiLEVBQWtCTSxRQUFRLEdBQUcsRUFBWDtBQUNsQixNQUFJTixJQUFJLEtBQUssR0FBYixFQUFrQk0sUUFBUSxHQUFHLEVBQVg7QUFDbEIsTUFBSU4sSUFBSSxLQUFLLEdBQWIsRUFBa0JNLFFBQVEsR0FBRyxFQUFYO0FBQ2xCLE1BQUlOLElBQUksS0FBSyxHQUFiLEVBQWtCTSxRQUFRLEdBQUcsRUFBWDtBQUVsQixNQUFJQyxRQUFRLEdBQUcsQ0FBQ0QsUUFBRCxHQUFZLENBQTNCO0FBQ0EsTUFBSU4sSUFBSSxLQUFLLEdBQWIsRUFBa0JPLFFBQVEsR0FBRyxDQUFDRCxRQUFaO0FBRWxCLFNBQ0Usb0JBQUMsSUFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLElBREw7QUFFRSxJQUFBLFFBQVEsRUFBQyxVQUZYO0FBR0UsSUFBQSxPQUFPLEVBQUMsT0FIVjtBQUlFLElBQUEsSUFBSSxFQUFFTixJQUpSO0FBS0UsSUFBQSxhQUFhLEVBQUVDLElBQUksR0FBRyxNQUFILEdBQVlPLFNBTGpDO0FBTUUsSUFBQSxXQUFXLEVBQUVQLElBQUksR0FBR0csV0FBSCxHQUFpQkksU0FOcEM7QUFPRSxJQUFBLEdBQUcsRUFBRVY7QUFQUCxLQVFNSyxJQVJOLEdBVUdGLElBQUksSUFDSCxvQkFBQyxXQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVBLElBRFI7QUFFRSxJQUFBLEtBQUssRUFBRUMsU0FGVDtBQUdFLElBQUEsUUFBUSxFQUFDLFVBSFg7QUFJRSxJQUFBLElBQUksRUFBRUksUUFKUjtBQUtFLElBQUEsSUFBSSxFQUFFQyxRQUxSO0FBTUUsSUFBQSxHQUFHLEVBQUVGO0FBTlAsSUFYSixFQW9CR04sUUFwQkgsQ0FERjtBQXdCRCxDQWhEUyxDQURTLENBQXJCO0FBb0RBSCxRQUFRLENBQUNhLFNBQVQsbUNBQ0tkLElBQUksQ0FBQ2MsU0FEVjtBQUdFOzs7QUFHQVIsRUFBQUEsSUFBSSxFQUFFWixTQUFTLENBQUNxQixTQUFWLENBQW9CLENBQUNyQixTQUFTLENBQUNzQixXQUFYLEVBQXdCdEIsU0FBUyxDQUFDdUIsT0FBbEMsQ0FBcEIsQ0FOUjs7QUFRRTs7O0FBR0FWLEVBQUFBLFNBQVMsRUFBRWIsU0FBUyxDQUFDd0I7QUFYdkI7QUFjQSxlQUFlakIsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJY29uV3JhcHBlciB9IGZyb20gJy4uLy4uL2ljb25zL3NyYy9JY29uV3JhcHBlcidcbmltcG9ydCB7IG1pbm9yU2NhbGUgfSBmcm9tICcuLi8uLi9zY2FsZXMnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmNvbnN0IExpc3RJdGVtID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBMaXN0SXRlbShwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc2l6ZSwgaWNvbiwgaWNvbkNvbG9yLCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgbGV0IHBhZGRpbmdMZWZ0XG4gICAgaWYgKHNpemUgPT09IDMwMCkgcGFkZGluZ0xlZnQgPSBtaW5vclNjYWxlKDEpXG4gICAgaWYgKHNpemUgPT09IDQwMCkgcGFkZGluZ0xlZnQgPSBtaW5vclNjYWxlKDIpXG4gICAgaWYgKHNpemUgPT09IDUwMCkgcGFkZGluZ0xlZnQgPSBtaW5vclNjYWxlKDIpXG4gICAgaWYgKHNpemUgPT09IDYwMCkgcGFkZGluZ0xlZnQgPSBtaW5vclNjYWxlKDMpXG5cbiAgICBsZXQgaWNvblRvcFxuICAgIGlmIChzaXplID09PSAzMDApIGljb25Ub3AgPSAxXG4gICAgaWYgKHNpemUgPT09IDQwMCkgaWNvblRvcCA9IDNcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBpY29uVG9wID0gM1xuICAgIGlmIChzaXplID09PSA2MDApIGljb25Ub3AgPSA0XG5cbiAgICBsZXQgaWNvblNpemVcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBpY29uU2l6ZSA9IDEyXG4gICAgaWYgKHNpemUgPT09IDQwMCkgaWNvblNpemUgPSAxNFxuICAgIGlmIChzaXplID09PSA1MDApIGljb25TaXplID0gMTRcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBpY29uU2l6ZSA9IDE2XG5cbiAgICBsZXQgaWNvbkxlZnQgPSAtaWNvblNpemUgLSA0XG4gICAgaWYgKHNpemUgPT09IDYwMCkgaWNvbkxlZnQgPSAtaWNvblNpemVcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImxpXCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIG1hcmdpblk9XCIwLjVlbVwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIGxpc3RTdHlsZVR5cGU9e2ljb24gPyAnbm9uZScgOiB1bmRlZmluZWR9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXtpY29uID8gcGFkZGluZ0xlZnQgOiB1bmRlZmluZWR9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgIDxJY29uV3JhcHBlclxuICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgIGNvbG9yPXtpY29uQ29sb3J9XG4gICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgIHNpemU9e2ljb25TaXplfVxuICAgICAgICAgICAgbGVmdD17aWNvbkxlZnR9XG4gICAgICAgICAgICB0b3A9e2ljb25Ub3B9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfSlcbilcblxuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogV2hlbiBwcm92aWRlZCwgYWRkcyBhIGljb24gYmVmb3JlIHRoZSBsaXN0IGl0ZW0uXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudFR5cGUsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgaWNvbi5cbiAgICovXG4gIGljb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVxuIl19