import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
var StringAndBoolPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.bool]);
var emptyObject = {};
var Pane = memo(forwardRef(function Pane(props, ref) {
  var background = props.background,
      elevation = props.elevation,
      hoverElevation = props.hoverElevation,
      activeElevation = props.activeElevation,
      border = props.border,
      borderTop = props.borderTop,
      borderRight = props.borderRight,
      borderBottom = props.borderBottom,
      borderLeft = props.borderLeft,
      _props$css = props.css,
      css = _props$css === void 0 ? emptyObject : _props$css,
      restProps = _objectWithoutProperties(props, ["background", "elevation", "hoverElevation", "activeElevation", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "css"]);

  var theme = useTheme();

  function getHoverElevationStyle(hoverElevation, css) {
    if (!Number.isInteger(hoverElevation)) return {};
    return {
      transitionDuration: '150ms',
      transitionProperty: 'box-shadow, transform',
      transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      ':hover': _objectSpread(_objectSpread({}, css[':hover'] || {}), {}, {
        transform: 'translateY(-2px)',
        boxShadow: theme.getElevation(hoverElevation)
      })
    };
  }

  function getActiveElevationStyle(activeElevation, css) {
    if (!Number.isInteger(activeElevation)) return {};
    return {
      ':active': _objectSpread(_objectSpread({}, css[':active'] || {}), {}, {
        transform: 'translateY(-1px)',
        boxShadow: theme.getElevation(activeElevation)
      })
    };
  }

  function getBorderSideProperty(_ref) {
    var borderSideProperty = _ref.borderSideProperty,
        border = _ref.border;

    if (Object.prototype.hasOwnProperty.call(theme.colors.border, borderSideProperty)) {
      return "1px solid ".concat(theme.colors.border[borderSideProperty]);
    }

    if (borderSideProperty === true) {
      return "1px solid ".concat(theme.colors.border["default"]);
    }

    if (borderSideProperty === false) {
      return null;
    }

    if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
      return "1px solid ".concat(theme.colors.border[border]);
    }

    if (border === true) {
      return "1px solid ".concat(theme.colors.border["default"]);
    }

    return borderSideProperty;
  }

  var elevationStyle = theme.getElevation(elevation);
  var hoverElevationStyle = getHoverElevationStyle(hoverElevation, css);
  var activeElevationStyle = getActiveElevationStyle(activeElevation, css);

  var _map = [borderTop, borderRight, borderBottom, borderLeft].map(function (borderSideProperty) {
    return getBorderSideProperty({
      borderSideProperty: borderSideProperty,
      border: border
    });
  }),
      _map2 = _slicedToArray(_map, 4),
      _borderTop = _map2[0],
      _borderRight = _map2[1],
      _borderBottom = _map2[2],
      _borderLeft = _map2[3];

  var className = cx(props.className, glamorCss(_objectSpread(_objectSpread(_objectSpread({}, css), hoverElevationStyle), activeElevationStyle)).toString());
  return React.createElement(Box, _extends({
    ref: ref,
    borderTop: _borderTop,
    borderRight: _borderRight,
    borderBottom: _borderBottom,
    borderLeft: _borderLeft,
    boxShadow: elevationStyle,
    background: theme.getBackground(background)
  }, restProps, {
    className: className
  }));
}));
Pane.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: PropTypes.string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, muted, default.
   */
  border: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderTop: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderRight: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderBottom: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderLeft: StringAndBoolPropType
});
export default Pane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL1BhbmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsImN4IiwiY3NzIiwiZ2xhbW9yQ3NzIiwiUHJvcFR5cGVzIiwiQm94IiwidXNlVGhlbWUiLCJTdHJpbmdBbmRCb29sUHJvcFR5cGUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJib29sIiwiZW1wdHlPYmplY3QiLCJQYW5lIiwicHJvcHMiLCJyZWYiLCJiYWNrZ3JvdW5kIiwiZWxldmF0aW9uIiwiaG92ZXJFbGV2YXRpb24iLCJhY3RpdmVFbGV2YXRpb24iLCJib3JkZXIiLCJib3JkZXJUb3AiLCJib3JkZXJSaWdodCIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJyZXN0UHJvcHMiLCJ0aGVtZSIsImdldEhvdmVyRWxldmF0aW9uU3R5bGUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciLCJnZXRFbGV2YXRpb24iLCJnZXRBY3RpdmVFbGV2YXRpb25TdHlsZSIsImdldEJvcmRlclNpZGVQcm9wZXJ0eSIsImJvcmRlclNpZGVQcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbG9ycyIsImVsZXZhdGlvblN0eWxlIiwiaG92ZXJFbGV2YXRpb25TdHlsZSIsImFjdGl2ZUVsZXZhdGlvblN0eWxlIiwibWFwIiwiX2JvcmRlclRvcCIsIl9ib3JkZXJSaWdodCIsIl9ib3JkZXJCb3R0b20iLCJfYm9yZGVyTGVmdCIsImNsYXNzTmFtZSIsInRvU3RyaW5nIiwiZ2V0QmFja2dyb3VuZCIsInByb3BUeXBlcyIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMs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QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWhCLENBNUJuQjs7QUE4QkU7Ozs7QUFJQXBDLEVBQUFBLE1BQU0sRUFBRVoscUJBbENWOztBQW9DRTs7OztBQUlBYSxFQUFBQSxTQUFTLEVBQUViLHFCQXhDYjs7QUEwQ0U7Ozs7QUFJQWMsRUFBQUEsV0FBVyxFQUFFZCxxQkE5Q2Y7O0FBZ0RFOzs7O0FBSUFlLEVBQUFBLFlBQVksRUFBRWYscUJBcERoQjs7QUFzREU7Ozs7QUFJQWdCLEVBQUFBLFVBQVUsRUFBRWhCO0FBMURkO0FBNkRBLGVBQWVLLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBTdHJpbmdBbmRCb29sUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmJvb2xcbl0pXG5cbmNvbnN0IGVtcHR5T2JqZWN0ID0ge31cblxuY29uc3QgUGFuZSA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gUGFuZShwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmFja2dyb3VuZCxcblxuICAgICAgZWxldmF0aW9uLFxuICAgICAgaG92ZXJFbGV2YXRpb24sXG4gICAgICBhY3RpdmVFbGV2YXRpb24sXG5cbiAgICAgIGJvcmRlcixcbiAgICAgIGJvcmRlclRvcCxcbiAgICAgIGJvcmRlclJpZ2h0LFxuICAgICAgYm9yZGVyQm90dG9tLFxuICAgICAgYm9yZGVyTGVmdCxcblxuICAgICAgY3NzID0gZW1wdHlPYmplY3QsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcblxuICAgIGZ1bmN0aW9uIGdldEhvdmVyRWxldmF0aW9uU3R5bGUoaG92ZXJFbGV2YXRpb24sIGNzcykge1xuICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGhvdmVyRWxldmF0aW9uKSkgcmV0dXJuIHt9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzE1MG1zJyxcbiAgICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiAnYm94LXNoYWRvdywgdHJhbnNmb3JtJyxcbiAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICAuLi4oY3NzWyc6aG92ZXInXSB8fCB7fSksXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMnB4KScsXG4gICAgICAgICAgYm94U2hhZG93OiB0aGVtZS5nZXRFbGV2YXRpb24oaG92ZXJFbGV2YXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVFbGV2YXRpb25TdHlsZShhY3RpdmVFbGV2YXRpb24sIGNzcykge1xuICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGFjdGl2ZUVsZXZhdGlvbikpIHJldHVybiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAnOmFjdGl2ZSc6IHtcbiAgICAgICAgICAuLi4oY3NzWyc6YWN0aXZlJ10gfHwge30pLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTFweCknLFxuICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuZ2V0RWxldmF0aW9uKGFjdGl2ZUVsZXZhdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvcmRlclNpZGVQcm9wZXJ0eSh7IGJvcmRlclNpZGVQcm9wZXJ0eSwgYm9yZGVyIH0pIHtcbiAgICAgIGlmIChcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ib3JkZXIsXG4gICAgICAgICAgYm9yZGVyU2lkZVByb3BlcnR5XG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJbYm9yZGVyU2lkZVByb3BlcnR5XX1gXG4gICAgICB9XG5cbiAgICAgIGlmIChib3JkZXJTaWRlUHJvcGVydHkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLmRlZmF1bHR9YFxuICAgICAgfVxuXG4gICAgICBpZiAoYm9yZGVyU2lkZVByb3BlcnR5ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoZW1lLmNvbG9ycy5ib3JkZXIsIGJvcmRlcikpIHtcbiAgICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyW2JvcmRlcl19YFxuICAgICAgfVxuXG4gICAgICBpZiAoYm9yZGVyID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5kZWZhdWx0fWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJvcmRlclNpZGVQcm9wZXJ0eVxuICAgIH1cblxuICAgIGNvbnN0IGVsZXZhdGlvblN0eWxlID0gdGhlbWUuZ2V0RWxldmF0aW9uKGVsZXZhdGlvbilcbiAgICBjb25zdCBob3ZlckVsZXZhdGlvblN0eWxlID0gZ2V0SG92ZXJFbGV2YXRpb25TdHlsZShob3ZlckVsZXZhdGlvbiwgY3NzKVxuICAgIGNvbnN0IGFjdGl2ZUVsZXZhdGlvblN0eWxlID0gZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUoYWN0aXZlRWxldmF0aW9uLCBjc3MpXG5cbiAgICBjb25zdCBbX2JvcmRlclRvcCwgX2JvcmRlclJpZ2h0LCBfYm9yZGVyQm90dG9tLCBfYm9yZGVyTGVmdF0gPSBbXG4gICAgICBib3JkZXJUb3AsXG4gICAgICBib3JkZXJSaWdodCxcbiAgICAgIGJvcmRlckJvdHRvbSxcbiAgICAgIGJvcmRlckxlZnRcbiAgICBdLm1hcChib3JkZXJTaWRlUHJvcGVydHkgPT5cbiAgICAgIGdldEJvcmRlclNpZGVQcm9wZXJ0eSh7IGJvcmRlclNpZGVQcm9wZXJ0eSwgYm9yZGVyIH0pXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY3goXG4gICAgICBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBnbGFtb3JDc3Moe1xuICAgICAgICAuLi5jc3MsXG4gICAgICAgIC4uLmhvdmVyRWxldmF0aW9uU3R5bGUsXG4gICAgICAgIC4uLmFjdGl2ZUVsZXZhdGlvblN0eWxlXG4gICAgICB9KS50b1N0cmluZygpXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGJvcmRlclRvcD17X2JvcmRlclRvcH1cbiAgICAgICAgYm9yZGVyUmlnaHQ9e19ib3JkZXJSaWdodH1cbiAgICAgICAgYm9yZGVyQm90dG9tPXtfYm9yZGVyQm90dG9tfVxuICAgICAgICBib3JkZXJMZWZ0PXtfYm9yZGVyTGVmdH1cbiAgICAgICAgYm94U2hhZG93PXtlbGV2YXRpb25TdHlsZX1cbiAgICAgICAgYmFja2dyb3VuZD17dGhlbWUuZ2V0QmFja2dyb3VuZChiYWNrZ3JvdW5kKX1cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIEJhY2tncm91bmQgcHJvcGVydHkuXG4gICAqIGB0aW50MWAsIGB0aW50MmAgZXRjLiBmcm9tIGB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZGAgYXJlIGF2YWlsYWJsZS5cbiAgICovXG4gIGJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZS5cbiAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgKi9cbiAgZWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAvKipcbiAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lIG9uIGhvdmVyLiBNaWdodCBnZXQgZGVwcmVjYXRlZC5cbiAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgKi9cbiAgaG92ZXJFbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gIC8qKlxuICAgKiBFbGV2YXRpb24gb2YgdGhlIFBhbmUgb24gY2xpY2suIE1pZ2h0IGdldCBkZXByZWNhdGVkLlxuICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAqL1xuICBhY3RpdmVFbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgKiBWYWx1ZXM6IHRydWUsIG11dGVkLCBkZWZhdWx0LlxuICAgKi9cbiAgYm9yZGVyOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAqL1xuICBib3JkZXJUb3A6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICovXG4gIGJvcmRlclJpZ2h0OiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAqL1xuICBib3JkZXJCb3R0b206IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICovXG4gIGJvcmRlckxlZnQ6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5lXG4iXX0=