import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
var Heading = memo(forwardRef(function Heading(props, ref) {
  var theme = useTheme();

  var marginTop = props.marginTop,
      _props$size = props.size,
      size = _props$size === void 0 ? 500 : _props$size,
      restProps = _objectWithoutProperties(props, ["marginTop", "size"]);

  var _theme$getHeadingStyl = theme.getHeadingStyle(size),
      defaultMarginTop = _theme$getHeadingStyl.marginTop,
      headingStyle = _objectWithoutProperties(_theme$getHeadingStyl, ["marginTop"]);

  var finalMarginTop = marginTop;

  if (marginTop === 'default') {
    finalMarginTop = defaultMarginTop;
  }

  return React.createElement(Box, _extends({
    is: "h2",
    ref: ref,
    marginTop: finalMarginTop || 0,
    marginBottom: 0
  }, headingStyle, restProps));
}));
Heading.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
});
export default Heading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9IZWFkaW5nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm1lbW8iLCJQcm9wVHlwZXMiLCJCb3giLCJ1c2VUaGVtZSIsIkhlYWRpbmciLCJwcm9wcyIsInJlZiIsInRoZW1lIiwibWFyZ2luVG9wIiwic2l6ZSIsInJlc3RQcm9wcyIsImdldEhlYWRpbmdTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJoZWFkaW5nU3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsInByb3BUeXBlcyIsIm9uZU9mIiwib25lT2ZUeXBlIiwiYm9vbCIsIm51bWJlciIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFFQSxJQUFNQyxPQUFPLEdBQUdKLElBQUksQ0FDbEJELFVBQVUsQ0FBQyxTQUFTSyxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDdEMsTUFBTUMsS0FBSyxHQUFHSixRQUFRLEVBQXRCOztBQURzQyxNQUU5QkssU0FGOEIsR0FFVUgsS0FGVixDQUU5QkcsU0FGOEI7QUFBQSxvQkFFVUgsS0FGVixDQUVuQkksSUFGbUI7QUFBQSxNQUVuQkEsSUFGbUIsNEJBRVosR0FGWTtBQUFBLE1BRUpDLFNBRkksNEJBRVVMLEtBRlY7O0FBQUEsOEJBTWxDRSxLQUFLLENBQUNJLGVBQU4sQ0FBc0JGLElBQXRCLENBTmtDO0FBQUEsTUFJekJHLGdCQUp5Qix5QkFJcENKLFNBSm9DO0FBQUEsTUFLakNLLFlBTGlDOztBQVF0QyxNQUFJQyxjQUFjLEdBQUdOLFNBQXJCOztBQUNBLE1BQUlBLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUMzQk0sSUFBQUEsY0FBYyxHQUFHRixnQkFBakI7QUFDRDs7QUFFRCxTQUNFLG9CQUFDLEdBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxJQURMO0FBRUUsSUFBQSxHQUFHLEVBQUVOLEdBRlA7QUFHRSxJQUFBLFNBQVMsRUFBRVEsY0FBYyxJQUFJLENBSC9CO0FBSUUsSUFBQSxZQUFZLEVBQUU7QUFKaEIsS0FLTUQsWUFMTixFQU1NSCxTQU5OLEVBREY7QUFVRCxDQXZCUyxDQURRLENBQXBCO0FBMkJBTixPQUFPLENBQUNXLFNBQVIsbUNBSUtiLEdBQUcsQ0FBQ2EsU0FKVDtBQU1FOzs7QUFHQU4sRUFBQUEsSUFBSSxFQUFFUixTQUFTLENBQUNlLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsQ0FBaEIsQ0FUUjs7QUFXRTs7O0FBR0FSLEVBQUFBLFNBQVMsRUFBRVAsU0FBUyxDQUFDZ0IsU0FBVixDQUFvQixDQUM3QmhCLFNBQVMsQ0FBQ2lCLElBRG1CLEVBRTdCakIsU0FBUyxDQUFDa0IsTUFGbUIsRUFHN0JsQixTQUFTLENBQUNtQixNQUhtQixDQUFwQjtBQWRiO0FBcUJBLGVBQWVoQixPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgSGVhZGluZyA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gSGVhZGluZyhwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3QgeyBtYXJnaW5Ub3AsIHNpemUgPSA1MDAsIC4uLnJlc3RQcm9wcyB9ID0gcHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsXG4gICAgICAuLi5oZWFkaW5nU3R5bGVcbiAgICB9ID0gdGhlbWUuZ2V0SGVhZGluZ1N0eWxlKHNpemUpXG5cbiAgICBsZXQgZmluYWxNYXJnaW5Ub3AgPSBtYXJnaW5Ub3BcbiAgICBpZiAobWFyZ2luVG9wID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGZpbmFsTWFyZ2luVG9wID0gZGVmYXVsdE1hcmdpblRvcFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwiaDJcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbWFyZ2luVG9wPXtmaW5hbE1hcmdpblRvcCB8fCAwfVxuICAgICAgICBtYXJnaW5Cb3R0b209ezB9XG4gICAgICAgIHsuLi5oZWFkaW5nU3R5bGV9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBIZWFkaW5nIGNvbXBvc2VzIEJveCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBoZWFkaW5nLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDAsIDgwMCwgOTAwXSksXG5cbiAgLyoqXG4gICAqIFBhc3MgYGRlZmF1bHRgIHRvIHVzZSB0aGUgZGVmYXVsdCBtYXJnaW4gdG9wIGZvciB0aGF0IHNpemUuXG4gICAqL1xuICBtYXJnaW5Ub3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nXG4iXX0=