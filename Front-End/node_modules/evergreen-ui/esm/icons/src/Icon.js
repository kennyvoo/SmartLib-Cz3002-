import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */

var emptyObject = {};
var Icon = forwardRef(function Icon(_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      name = _ref.name,
      title = _ref.title,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? emptyObject : _ref$style,
      svgPaths16 = _ref.svgPaths16,
      svgPaths20 = _ref.svgPaths20,
      svgProps = _objectWithoutProperties(_ref, ["color", "size", "name", "title", "style", "svgPaths16", "svgPaths20"]);

  var theme = useTheme();
  var SIZE_STANDARD = 16;
  var SIZE_LARGE = 20; // Choose which pixel grid is most appropriate for given icon size

  var pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD;
  var pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20;
  var paths = pathStrings.map(function (d, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement("path", {
        key: i,
        d: d,
        fillRule: "evenodd"
      })
    );
  });
  var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);
  var styles = useMemo(function () {
    return color ? _objectSpread(_objectSpread({}, style), {}, {
      fill: theme.getIconColor(color)
    }) : style;
  }, [style, color]);
  return React.createElement(Box, _extends({
    is: "svg",
    ref: ref
  }, svgProps, {
    "data-icon": name,
    style: styles,
    width: size,
    height: size,
    viewBox: viewBox
  }), title && React.createElement("title", null, title), paths);
});
Icon.propTypes = {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: PropTypes.string,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: PropTypes.number,

  /**
   * Name of the icon
   */
  name: PropTypes.string,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: PropTypes.string,

  /**
   * CSS style properties.
   */
  style: PropTypes.object,
  svgPaths16: PropTypes.arrayOf(PropTypes.string).isRequired,
  svgPaths20: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Icon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9zcmMvSWNvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VNZW1vIiwiUHJvcFR5cGVzIiwiQm94IiwidXNlVGhlbWUiLCJlbXB0eU9iamVjdCIsIkljb24iLCJyZWYiLCJjb2xvciIsInNpemUiLCJuYW1lIiwidGl0bGUiLCJzdHlsZSIsInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwic3ZnUHJvcHMiLCJ0aGVtZSIsIlNJWkVfU1RBTkRBUkQiLCJTSVpFX0xBUkdFIiwicGl4ZWxHcmlkU2l6ZSIsInBhdGhTdHJpbmdzIiwicGF0aHMiLCJtYXAiLCJkIiwiaSIsInZpZXdCb3giLCJzdHlsZXMiLCJmaWxsIiwiZ2V0SWNvbkNvbG9yIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLE9BQTVCLFFBQTJDLE9BQTNDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBRUE7Ozs7OztBQU1BLElBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUVBLElBQU1DLElBQUksR0FBR04sVUFBVSxDQUFDLFNBQVNNLElBQVQsT0FXdEJDLEdBWHNCLEVBWXRCO0FBQUEsd0JBVkVDLEtBVUY7QUFBQSxNQVZFQSxLQVVGLDJCQVZVLGNBVVY7QUFBQSx1QkFURUMsSUFTRjtBQUFBLE1BVEVBLElBU0YsMEJBVFMsRUFTVDtBQUFBLE1BUkVDLElBUUYsUUFSRUEsSUFRRjtBQUFBLE1BUEVDLEtBT0YsUUFQRUEsS0FPRjtBQUFBLHdCQU5FQyxLQU1GO0FBQUEsTUFORUEsS0FNRiwyQkFOVVAsV0FNVjtBQUFBLE1BTEVRLFVBS0YsUUFMRUEsVUFLRjtBQUFBLE1BSkVDLFVBSUYsUUFKRUEsVUFJRjtBQUFBLE1BSEtDLFFBR0w7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHWixRQUFRLEVBQXRCO0FBQ0EsTUFBTWEsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLEVBQW5CLENBSEEsQ0FLQTs7QUFDQSxNQUFNQyxhQUFhLEdBQUdWLElBQUksSUFBSVMsVUFBUixHQUFxQkEsVUFBckIsR0FBa0NELGFBQXhEO0FBQ0EsTUFBTUcsV0FBVyxHQUFHRCxhQUFhLEtBQUtGLGFBQWxCLEdBQWtDSixVQUFsQyxHQUErQ0MsVUFBbkU7QUFDQSxNQUFNTyxLQUFLLEdBQUdELFdBQVcsQ0FBQ0UsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUM1QjtBQUNBO0FBQU0sUUFBQSxHQUFHLEVBQUVBLENBQVg7QUFBYyxRQUFBLENBQUMsRUFBRUQsQ0FBakI7QUFBb0IsUUFBQSxRQUFRLEVBQUM7QUFBN0I7QUFGNEI7QUFBQSxHQUFoQixDQUFkO0FBS0EsTUFBTUUsT0FBTyxpQkFBVU4sYUFBVixjQUEyQkEsYUFBM0IsQ0FBYjtBQUVBLE1BQU1PLE1BQU0sR0FBR3pCLE9BQU8sQ0FBQyxZQUFNO0FBQzNCLFdBQU9PLEtBQUssbUNBQVFJLEtBQVI7QUFBZWUsTUFBQUEsSUFBSSxFQUFFWCxLQUFLLENBQUNZLFlBQU4sQ0FBbUJwQixLQUFuQjtBQUFyQixTQUFtREksS0FBL0Q7QUFDRCxHQUZxQixFQUVuQixDQUFDQSxLQUFELEVBQVFKLEtBQVIsQ0FGbUIsQ0FBdEI7QUFJQSxTQUNFLG9CQUFDLEdBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxLQURMO0FBRUUsSUFBQSxHQUFHLEVBQUVEO0FBRlAsS0FHTVEsUUFITjtBQUlFLGlCQUFXTCxJQUpiO0FBS0UsSUFBQSxLQUFLLEVBQUVnQixNQUxUO0FBTUUsSUFBQSxLQUFLLEVBQUVqQixJQU5UO0FBT0UsSUFBQSxNQUFNLEVBQUVBLElBUFY7QUFRRSxJQUFBLE9BQU8sRUFBRWdCO0FBUlgsTUFVR2QsS0FBSyxJQUFJLG1DQUFRQSxLQUFSLENBVlosRUFXR1UsS0FYSCxDQURGO0FBZUQsQ0E5Q3NCLENBQXZCO0FBZ0RBZixJQUFJLENBQUN1QixTQUFMLEdBQWlCO0FBQ2Y7OztBQUdBckIsRUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUM0QixNQUpGOztBQU1mOzs7OztBQUtBckIsRUFBQUEsSUFBSSxFQUFFUCxTQUFTLENBQUM2QixNQVhEOztBQWFmOzs7QUFHQXJCLEVBQUFBLElBQUksRUFBRVIsU0FBUyxDQUFDNEIsTUFoQkQ7O0FBa0JmOzs7Ozs7QUFNQW5CLEVBQUFBLEtBQUssRUFBRVQsU0FBUyxDQUFDNEIsTUF4QkY7O0FBMEJmOzs7QUFHQWxCLEVBQUFBLEtBQUssRUFBRVYsU0FBUyxDQUFDOEIsTUE3QkY7QUErQmZuQixFQUFBQSxVQUFVLEVBQUVYLFNBQVMsQ0FBQytCLE9BQVYsQ0FBa0IvQixTQUFTLENBQUM0QixNQUE1QixFQUFvQ0ksVUEvQmpDO0FBaUNmcEIsRUFBQUEsVUFBVSxFQUFFWixTQUFTLENBQUMrQixPQUFWLENBQWtCL0IsU0FBUyxDQUFDNEIsTUFBNUIsRUFBb0NJO0FBakNqQyxDQUFqQjtBQW9DQSxlQUFlNUIsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbi8qKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBhIHJlbWl4IG9mIHRoZSBJY29uIGNvbXBvbmVudCBpbiBCbHVlcHJpbnRqczpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi84MTNlOTNmMi9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbi50c3gjTDE1XG4gKiBSZWZlciB0byB0aGUgTElDRU5TRSBmb3IgQmx1ZXByaW50SlMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL2RldmVsb3AvTElDRU5TRVxuICovXG5cbmNvbnN0IGVtcHR5T2JqZWN0ID0ge31cblxuY29uc3QgSWNvbiA9IGZvcndhcmRSZWYoZnVuY3Rpb24gSWNvbihcbiAge1xuICAgIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG4gICAgc2l6ZSA9IDE2LFxuICAgIG5hbWUsXG4gICAgdGl0bGUsXG4gICAgc3R5bGUgPSBlbXB0eU9iamVjdCxcbiAgICBzdmdQYXRoczE2LFxuICAgIHN2Z1BhdGhzMjAsXG4gICAgLi4uc3ZnUHJvcHNcbiAgfSxcbiAgcmVmXG4pIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gIGNvbnN0IFNJWkVfU1RBTkRBUkQgPSAxNlxuICBjb25zdCBTSVpFX0xBUkdFID0gMjBcblxuICAvLyBDaG9vc2Ugd2hpY2ggcGl4ZWwgZ3JpZCBpcyBtb3N0IGFwcHJvcHJpYXRlIGZvciBnaXZlbiBpY29uIHNpemVcbiAgY29uc3QgcGl4ZWxHcmlkU2l6ZSA9IHNpemUgPj0gU0laRV9MQVJHRSA/IFNJWkVfTEFSR0UgOiBTSVpFX1NUQU5EQVJEXG4gIGNvbnN0IHBhdGhTdHJpbmdzID0gcGl4ZWxHcmlkU2l6ZSA9PT0gU0laRV9TVEFOREFSRCA/IHN2Z1BhdGhzMTYgOiBzdmdQYXRoczIwXG4gIGNvbnN0IHBhdGhzID0gcGF0aFN0cmluZ3MubWFwKChkLCBpKSA9PiAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgIDxwYXRoIGtleT17aX0gZD17ZH0gZmlsbFJ1bGU9XCJldmVub2RkXCIgLz5cbiAgKSlcblxuICBjb25zdCB2aWV3Qm94ID0gYDAgMCAke3BpeGVsR3JpZFNpemV9ICR7cGl4ZWxHcmlkU2l6ZX1gXG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGNvbG9yID8geyAuLi5zdHlsZSwgZmlsbDogdGhlbWUuZ2V0SWNvbkNvbG9yKGNvbG9yKSB9IDogc3R5bGVcbiAgfSwgW3N0eWxlLCBjb2xvcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBpcz1cInN2Z1wiXG4gICAgICByZWY9e3JlZn1cbiAgICAgIHsuLi5zdmdQcm9wc31cbiAgICAgIGRhdGEtaWNvbj17bmFtZX1cbiAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHZpZXdCb3g9e3ZpZXdCb3h9XG4gICAgPlxuICAgICAge3RpdGxlICYmIDx0aXRsZT57dGl0bGV9PC90aXRsZT59XG4gICAgICB7cGF0aHN9XG4gICAgPC9Cb3g+XG4gIClcbn0pXG5cbkljb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29sb3Igb2YgaWNvbi4gRXF1aXZhbGVudCB0byBzZXR0aW5nIENTUyBgZmlsbGAgcHJvcGVydHkuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgaWNvbiwgaW4gcGl4ZWxzLlxuICAgKiBCbHVlcHJpbnQgY29udGFpbnMgMTZweCBhbmQgMjBweCBTVkcgaWNvbiBpbWFnZXMsXG4gICAqIGFuZCBjaG9vc2VzIHRoZSBhcHByb3ByaWF0ZSByZXNvbHV0aW9uIGJhc2VkIG9uIHRoaXMgcHJvcC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGljb25cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIHN0cmluZy5cbiAgICogQnJvd3NlcnMgdXN1YWxseSByZW5kZXIgdGhpcyBhcyBhIHRvb2x0aXAgb24gaG92ZXIsIHdoZXJlYXMgc2NyZWVuXG4gICAqIHJlYWRlcnMgd2lsbCB1c2UgaXQgZm9yIGF1cmFsIGZlZWRiYWNrLlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIGlzIHNldCB0byB0aGUgaWNvbidzIG5hbWUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ1NTIHN0eWxlIHByb3BlcnRpZXMuXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICBzdmdQYXRoczE2OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuXG4gIHN2Z1BhdGhzMjA6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuIl19