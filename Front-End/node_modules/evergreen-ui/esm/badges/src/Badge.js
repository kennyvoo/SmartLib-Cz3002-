import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Strong } from '../../typography';
import { useTheme } from '../../theme';
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
var Badge = memo(forwardRef(function Badge(props, ref) {
  var theme = useTheme();

  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'neutral' : _props$color,
      _props$isInteractive = props.isInteractive,
      isInteractive = _props$isInteractive === void 0 ? false : _props$isInteractive,
      _props$isSolid = props.isSolid,
      isSolid = _props$isSolid === void 0 ? false : _props$isSolid,
      restProps = _objectWithoutProperties(props, ["className", "color", "isInteractive", "isSolid"]);

  var themeProps = theme.getBadgeProps({
    color: color,
    isSolid: isSolid
  });
  var appearance = isInteractive ? 'interactive' : 'default';
  var classNames = cx(className, theme.getBadgeClassName(appearance));
  return React.createElement(Strong, _extends({
    ref: ref,
    size: 300
  }, styles, themeProps, restProps, {
    className: classNames
  }));
}));
Badge.propTypes = _objectSpread(_objectSpread({}, Strong.propTypes), {}, {
  /**
   * The color used for the badge.
   */
  color: PropTypes.string,

  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: PropTypes.bool
});
export default Badge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL0JhZGdlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJjeCIsIlByb3BUeXBlcyIsIlN0cm9uZyIsInVzZVRoZW1lIiwic3R5bGVzIiwiZGlzcGxheSIsImJveFNpemluZyIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRUcmFuc2Zvcm0iLCJCYWRnZSIsInByb3BzIiwicmVmIiwidGhlbWUiLCJjbGFzc05hbWUiLCJjb2xvciIsImlzSW50ZXJhY3RpdmUiLCJpc1NvbGlkIiwicmVzdFByb3BzIiwidGhlbWVQcm9wcyIsImdldEJhZGdlUHJvcHMiLCJhcHBlYXJhbmNlIiwiY2xhc3NOYW1lcyIsImdldEJhZGdlQ2xhc3NOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGtCQUF2QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFFQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsT0FBTyxFQUFFLGNBREk7QUFFYkMsRUFBQUEsU0FBUyxFQUFFLFlBRkU7QUFHYkMsRUFBQUEsTUFBTSxFQUFFLEVBSEs7QUFJYkMsRUFBQUEsVUFBVSxFQUFFLENBSkM7QUFLYkMsRUFBQUEsWUFBWSxFQUFFLENBTEQ7QUFNYkMsRUFBQUEsYUFBYSxFQUFFLENBTkY7QUFPYkMsRUFBQUEsV0FBVyxFQUFFLENBUEE7QUFRYkMsRUFBQUEsWUFBWSxFQUFFLENBUkQ7QUFTYkMsRUFBQUEsU0FBUyxFQUFFLFFBVEU7QUFVYkMsRUFBQUEsY0FBYyxFQUFFLE1BVkg7QUFXYkMsRUFBQUEsYUFBYSxFQUFFO0FBWEYsQ0FBZjtBQWNBLElBQU1DLEtBQUssR0FBR2xCLElBQUksQ0FDaEJDLFVBQVUsQ0FBQyxTQUFTaUIsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUNwQyxNQUFNQyxLQUFLLEdBQUdoQixRQUFRLEVBQXRCOztBQURvQyxNQUlsQ2lCLFNBSmtDLEdBU2hDSCxLQVRnQyxDQUlsQ0csU0FKa0M7QUFBQSxxQkFTaENILEtBVGdDLENBS2xDSSxLQUxrQztBQUFBLE1BS2xDQSxLQUxrQyw2QkFLMUIsU0FMMEI7QUFBQSw2QkFTaENKLEtBVGdDLENBTWxDSyxhQU5rQztBQUFBLE1BTWxDQSxhQU5rQyxxQ0FNbEIsS0FOa0I7QUFBQSx1QkFTaENMLEtBVGdDLENBT2xDTSxPQVBrQztBQUFBLE1BT2xDQSxPQVBrQywrQkFPeEIsS0FQd0I7QUFBQSxNQVEvQkMsU0FSK0IsNEJBU2hDUCxLQVRnQzs7QUFXcEMsTUFBTVEsVUFBVSxHQUFHTixLQUFLLENBQUNPLGFBQU4sQ0FBb0I7QUFBRUwsSUFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNFLElBQUFBLE9BQU8sRUFBUEE7QUFBVCxHQUFwQixDQUFuQjtBQUNBLE1BQU1JLFVBQVUsR0FBR0wsYUFBYSxHQUFHLGFBQUgsR0FBbUIsU0FBbkQ7QUFDQSxNQUFNTSxVQUFVLEdBQUc1QixFQUFFLENBQUNvQixTQUFELEVBQVlELEtBQUssQ0FBQ1UsaUJBQU4sQ0FBd0JGLFVBQXhCLENBQVosQ0FBckI7QUFFQSxTQUNFLG9CQUFDLE1BQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRVQsR0FEUDtBQUVFLElBQUEsSUFBSSxFQUFFO0FBRlIsS0FHTWQsTUFITixFQUlNcUIsVUFKTixFQUtNRCxTQUxOO0FBTUUsSUFBQSxTQUFTLEVBQUVJO0FBTmIsS0FERjtBQVVELENBekJTLENBRE0sQ0FBbEI7QUE2QkFaLEtBQUssQ0FBQ2MsU0FBTixtQ0FDSzVCLE1BQU0sQ0FBQzRCLFNBRFo7QUFHRTs7O0FBR0FULEVBQUFBLEtBQUssRUFBRXBCLFNBQVMsQ0FBQzhCLE1BTm5COztBQVFFOzs7QUFHQVQsRUFBQUEsYUFBYSxFQUFFckIsU0FBUyxDQUFDK0I7QUFYM0I7QUFjQSxlQUFlaEIsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0cm9uZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgaGVpZ2h0OiAxNixcbiAgcGFkZGluZ1RvcDogMCxcbiAgcGFkZGluZ1JpZ2h0OiA2LFxuICBwYWRkaW5nQm90dG9tOiAwLFxuICBwYWRkaW5nTGVmdDogNixcbiAgYm9yZGVyUmFkaXVzOiAyLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xufVxuXG5jb25zdCBCYWRnZSA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gQmFkZ2UocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSAnbmV1dHJhbCcsXG4gICAgICBpc0ludGVyYWN0aXZlID0gZmFsc2UsXG4gICAgICBpc1NvbGlkID0gZmFsc2UsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHRoZW1lUHJvcHMgPSB0aGVtZS5nZXRCYWRnZVByb3BzKHsgY29sb3IsIGlzU29saWQgfSlcbiAgICBjb25zdCBhcHBlYXJhbmNlID0gaXNJbnRlcmFjdGl2ZSA/ICdpbnRlcmFjdGl2ZScgOiAnZGVmYXVsdCdcbiAgICBjb25zdCBjbGFzc05hbWVzID0gY3goY2xhc3NOYW1lLCB0aGVtZS5nZXRCYWRnZUNsYXNzTmFtZShhcHBlYXJhbmNlKSlcblxuICAgIHJldHVybiAoXG4gICAgICA8U3Ryb25nXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBzaXplPXszMDB9XG4gICAgICAgIHsuLi5zdHlsZXN9XG4gICAgICAgIHsuLi50aGVtZVByb3BzfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuQmFkZ2UucHJvcFR5cGVzID0ge1xuICAuLi5TdHJvbmcucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3IgdXNlZCBmb3IgdGhlIGJhZGdlLlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGhvdmVyL2ZvY3VzL2FjdGl2ZSBzdHlsZXNcbiAgICovXG4gIGlzSW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlXG4iXX0=