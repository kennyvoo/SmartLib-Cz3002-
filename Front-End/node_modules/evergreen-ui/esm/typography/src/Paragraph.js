import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
var Paragraph = memo(forwardRef(function Paragraph(props, ref) {
  var theme = useTheme();

  var _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'ui' : _props$fontFamily,
      marginTop = props.marginTop,
      restProps = _objectWithoutProperties(props, ["size", "color", "fontFamily", "marginTop"]);

  var _theme$getParagraphSt = theme.getParagraphStyle(size),
      defaultMarginTop = _theme$getParagraphSt.marginTop,
      textStyle = _objectWithoutProperties(_theme$getParagraphSt, ["marginTop"]);

  var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
  return React.createElement(Box, _extends({
    is: "p",
    ref: ref,
    color: theme.getTextColor(color),
    fontFamily: theme.getFontFamily(fontFamily),
    marginTop: finalMarginTop || 0,
    marginBottom: 0
  }, textStyle, restProps));
}));
Paragraph.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: PropTypes.oneOf([300, 400, 500]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
});
export default Paragraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwibWVtbyIsIlByb3BUeXBlcyIsIkJveCIsInVzZVRoZW1lIiwiUGFyYWdyYXBoIiwicHJvcHMiLCJyZWYiLCJ0aGVtZSIsInNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJtYXJnaW5Ub3AiLCJyZXN0UHJvcHMiLCJnZXRQYXJhZ3JhcGhTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJwcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFFQSxJQUFNQyxTQUFTLEdBQUdKLElBQUksQ0FDcEJELFVBQVUsQ0FBQyxTQUFTSyxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFDeEMsTUFBTUMsS0FBSyxHQUFHSixRQUFRLEVBQXRCOztBQUR3QyxvQkFRcENFLEtBUm9DLENBR3RDRyxJQUhzQztBQUFBLE1BR3RDQSxJQUhzQyw0QkFHL0IsR0FIK0I7QUFBQSxxQkFRcENILEtBUm9DLENBSXRDSSxLQUpzQztBQUFBLE1BSXRDQSxLQUpzQyw2QkFJOUIsU0FKOEI7QUFBQSwwQkFRcENKLEtBUm9DLENBS3RDSyxVQUxzQztBQUFBLE1BS3RDQSxVQUxzQyxrQ0FLekIsSUFMeUI7QUFBQSxNQU10Q0MsU0FOc0MsR0FRcENOLEtBUm9DLENBTXRDTSxTQU5zQztBQUFBLE1BT25DQyxTQVBtQyw0QkFRcENQLEtBUm9DOztBQUFBLDhCQWFwQ0UsS0FBSyxDQUFDTSxpQkFBTixDQUF3QkwsSUFBeEIsQ0Fib0M7QUFBQSxNQVczQk0sZ0JBWDJCLHlCQVd0Q0gsU0FYc0M7QUFBQSxNQVluQ0ksU0FabUM7O0FBZXhDLE1BQU1DLGNBQWMsR0FDbEJMLFNBQVMsS0FBSyxTQUFkLEdBQTBCRyxnQkFBMUIsR0FBNkNILFNBRC9DO0FBR0EsU0FDRSxvQkFBQyxHQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsR0FETDtBQUVFLElBQUEsR0FBRyxFQUFFTCxHQUZQO0FBR0UsSUFBQSxLQUFLLEVBQUVDLEtBQUssQ0FBQ1UsWUFBTixDQUFtQlIsS0FBbkIsQ0FIVDtBQUlFLElBQUEsVUFBVSxFQUFFRixLQUFLLENBQUNXLGFBQU4sQ0FBb0JSLFVBQXBCLENBSmQ7QUFLRSxJQUFBLFNBQVMsRUFBRU0sY0FBYyxJQUFJLENBTC9CO0FBTUUsSUFBQSxZQUFZLEVBQUU7QUFOaEIsS0FPTUQsU0FQTixFQVFNSCxTQVJOLEVBREY7QUFZRCxDQTlCUyxDQURVLENBQXRCO0FBa0NBUixTQUFTLENBQUNlLFNBQVYsbUNBSUtqQixHQUFHLENBQUNpQixTQUpUO0FBTUU7Ozs7QUFJQVgsRUFBQUEsSUFBSSxFQUFFUCxTQUFTLENBQUNtQixLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCLENBVlI7O0FBWUU7Ozs7QUFJQVYsRUFBQUEsVUFBVSxFQUFFVCxTQUFTLENBQUNvQjtBQWhCeEI7QUFtQkEsZUFBZWpCLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBQYXJhZ3JhcGggPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFBhcmFncmFwaChwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3Qge1xuICAgICAgc2l6ZSA9IDQwMCxcbiAgICAgIGNvbG9yID0gJ2RlZmF1bHQnLFxuICAgICAgZm9udEZhbWlseSA9ICd1aScsXG4gICAgICBtYXJnaW5Ub3AsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIG1hcmdpblRvcDogZGVmYXVsdE1hcmdpblRvcCxcbiAgICAgIC4uLnRleHRTdHlsZVxuICAgIH0gPSB0aGVtZS5nZXRQYXJhZ3JhcGhTdHlsZShzaXplKVxuXG4gICAgY29uc3QgZmluYWxNYXJnaW5Ub3AgPVxuICAgICAgbWFyZ2luVG9wID09PSAnZGVmYXVsdCcgPyBkZWZhdWx0TWFyZ2luVG9wIDogbWFyZ2luVG9wXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cInBcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY29sb3I9e3RoZW1lLmdldFRleHRDb2xvcihjb2xvcil9XG4gICAgICAgIGZvbnRGYW1pbHk9e3RoZW1lLmdldEZvbnRGYW1pbHkoZm9udEZhbWlseSl9XG4gICAgICAgIG1hcmdpblRvcD17ZmluYWxNYXJnaW5Ub3AgfHwgMH1cbiAgICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgICB7Li4udGV4dFN0eWxlfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG5cblBhcmFncmFwaC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIHRleHQgc3R5bGUuXG4gICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMF0pLFxuXG4gIC8qKlxuICAgKiBGb250IGZhbWlseS5cbiAgICogQ2FuIGJlOiBgdWlgLCBgZGlzcGxheWAgb3IgYG1vbm9gIG9yIGEgY3VzdG9tIGZvbnQgZmFtaWx5LlxuICAgKi9cbiAgZm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGhcbiJdfQ==