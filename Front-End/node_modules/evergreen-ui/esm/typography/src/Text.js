import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
var Text = memo(forwardRef(function Text(props, ref) {
  var theme = useTheme();

  var className = props.className,
      css = props.css,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'ui' : _props$fontFamily,
      marginTop = props.marginTop,
      restProps = _objectWithoutProperties(props, ["className", "css", "size", "color", "fontFamily", "marginTop"]);

  var _theme$getTextStyle = theme.getTextStyle(size),
      defaultMarginTop = _theme$getTextStyle.marginTop,
      textStyle = _objectWithoutProperties(_theme$getTextStyle, ["marginTop"]);

  var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
  return React.createElement(Box, _extends({
    is: "span",
    ref: ref,
    color: theme.getTextColor(color),
    fontFamily: theme.getFontFamily(fontFamily),
    marginTop: finalMarginTop
  }, textStyle, {
    className: cx(className, css ? glamorCss(css).toString() : undefined)
  }, restProps));
}));
Text.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
});
export default Text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm1lbW8iLCJjeCIsImNzcyIsImdsYW1vckNzcyIsIlByb3BUeXBlcyIsIkJveCIsInVzZVRoZW1lIiwiVGV4dCIsInByb3BzIiwicmVmIiwidGhlbWUiLCJjbGFzc05hbWUiLCJzaXplIiwiY29sb3IiLCJmb250RmFtaWx5IiwibWFyZ2luVG9wIiwicmVzdFByb3BzIiwiZ2V0VGV4dFN0eWxlIiwiZGVmYXVsdE1hcmdpblRvcCIsInRleHRTdHlsZSIsImZpbmFsTWFyZ2luVG9wIiwiZ2V0VGV4dENvbG9yIiwiZ2V0Rm9udEZhbWlseSIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwib25lT2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLElBQTVCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxHQUFHLElBQUlDLFNBQWhCLFFBQWlDLFFBQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBRUEsSUFBTUMsSUFBSSxHQUFHUCxJQUFJLENBQ2ZELFVBQVUsQ0FBQyxTQUFTUSxJQUFULENBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ25DLE1BQU1DLEtBQUssR0FBR0osUUFBUSxFQUF0Qjs7QUFEbUMsTUFHakNLLFNBSGlDLEdBVS9CSCxLQVYrQixDQUdqQ0csU0FIaUM7QUFBQSxNQUlqQ1QsR0FKaUMsR0FVL0JNLEtBVitCLENBSWpDTixHQUppQztBQUFBLG9CQVUvQk0sS0FWK0IsQ0FLakNJLElBTGlDO0FBQUEsTUFLakNBLElBTGlDLDRCQUsxQixHQUwwQjtBQUFBLHFCQVUvQkosS0FWK0IsQ0FNakNLLEtBTmlDO0FBQUEsTUFNakNBLEtBTmlDLDZCQU16QixTQU55QjtBQUFBLDBCQVUvQkwsS0FWK0IsQ0FPakNNLFVBUGlDO0FBQUEsTUFPakNBLFVBUGlDLGtDQU9wQixJQVBvQjtBQUFBLE1BUWpDQyxTQVJpQyxHQVUvQlAsS0FWK0IsQ0FRakNPLFNBUmlDO0FBQUEsTUFTOUJDLFNBVDhCLDRCQVUvQlIsS0FWK0I7O0FBQUEsNEJBWW1CRSxLQUFLLENBQUNPLFlBQU4sQ0FDcERMLElBRG9ELENBWm5CO0FBQUEsTUFZaEJNLGdCQVpnQix1QkFZM0JILFNBWjJCO0FBQUEsTUFZS0ksU0FaTDs7QUFnQm5DLE1BQU1DLGNBQWMsR0FDbEJMLFNBQVMsS0FBSyxTQUFkLEdBQTBCRyxnQkFBMUIsR0FBNkNILFNBRC9DO0FBR0EsU0FDRSxvQkFBQyxHQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsTUFETDtBQUVFLElBQUEsR0FBRyxFQUFFTixHQUZQO0FBR0UsSUFBQSxLQUFLLEVBQUVDLEtBQUssQ0FBQ1csWUFBTixDQUFtQlIsS0FBbkIsQ0FIVDtBQUlFLElBQUEsVUFBVSxFQUFFSCxLQUFLLENBQUNZLGFBQU4sQ0FBb0JSLFVBQXBCLENBSmQ7QUFLRSxJQUFBLFNBQVMsRUFBRU07QUFMYixLQU1NRCxTQU5OO0FBT0UsSUFBQSxTQUFTLEVBQUVsQixFQUFFLENBQUNVLFNBQUQsRUFBWVQsR0FBRyxHQUFHQyxTQUFTLENBQUNELEdBQUQsQ0FBVCxDQUFlcUIsUUFBZixFQUFILEdBQStCQyxTQUE5QztBQVBmLEtBUU1SLFNBUk4sRUFERjtBQVlELENBL0JTLENBREssQ0FBakI7QUFtQ0FULElBQUksQ0FBQ2tCLFNBQUwsbUNBSUtwQixHQUFHLENBQUNvQixTQUpUO0FBTUU7Ozs7QUFJQWIsRUFBQUEsSUFBSSxFQUFFUixTQUFTLENBQUNzQixLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWhCLENBVlI7O0FBWUU7Ozs7QUFJQVosRUFBQUEsVUFBVSxFQUFFVixTQUFTLENBQUN1QjtBQWhCeEI7QUFtQkEsZUFBZXBCLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBUZXh0ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUZXh0KHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjc3MsXG4gICAgICBzaXplID0gNDAwLFxuICAgICAgY29sb3IgPSAnZGVmYXVsdCcsXG4gICAgICBmb250RmFtaWx5ID0gJ3VpJyxcbiAgICAgIG1hcmdpblRvcCxcbiAgICAgIC4uLnJlc3RQcm9wc1xuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgeyBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsIC4uLnRleHRTdHlsZSB9ID0gdGhlbWUuZ2V0VGV4dFN0eWxlKFxuICAgICAgc2l6ZVxuICAgIClcblxuICAgIGNvbnN0IGZpbmFsTWFyZ2luVG9wID1cbiAgICAgIG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnID8gZGVmYXVsdE1hcmdpblRvcCA6IG1hcmdpblRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJzcGFuXCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGNvbG9yPXt0aGVtZS5nZXRUZXh0Q29sb3IoY29sb3IpfVxuICAgICAgICBmb250RmFtaWx5PXt0aGVtZS5nZXRGb250RmFtaWx5KGZvbnRGYW1pbHkpfVxuICAgICAgICBtYXJnaW5Ub3A9e2ZpbmFsTWFyZ2luVG9wfVxuICAgICAgICB7Li4udGV4dFN0eWxlfVxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgY3NzID8gZ2xhbW9yQ3NzKGNzcykudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCl9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIHRleHQgc3R5bGUuXG4gICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMCwgNjAwLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwLCA2MDBdKSxcblxuICAvKipcbiAgICogRm9udCBmYW1pbHkuXG4gICAqIENhbiBiZTogYHVpYCwgYGRpc3BsYXlgIG9yIGBtb25vYCBvciBhIGN1c3RvbSBmb250IGZhbWlseS5cbiAgICovXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFxuIl19