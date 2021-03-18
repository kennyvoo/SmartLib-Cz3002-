"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */
var emptyObject = {};
var Icon = (0, _react.forwardRef)(function Icon(_ref, ref) {
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
      svgProps = (0, _objectWithoutProperties2["default"])(_ref, ["color", "size", "name", "title", "style", "svgPaths16", "svgPaths20"]);
  var theme = (0, _theme.useTheme)();
  var SIZE_STANDARD = 16;
  var SIZE_LARGE = 20; // Choose which pixel grid is most appropriate for given icon size

  var pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD;
  var pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20;
  var paths = pathStrings.map(function (d, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement("path", {
        key: i,
        d: d,
        fillRule: "evenodd"
      })
    );
  });
  var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);
  var styles = (0, _react.useMemo)(function () {
    return color ? _objectSpread(_objectSpread({}, style), {}, {
      fill: theme.getIconColor(color)
    }) : style;
  }, [style, color]);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "svg",
    ref: ref
  }, svgProps, {
    "data-icon": name,
    style: styles,
    width: size,
    height: size,
    viewBox: viewBox
  }), title && _react["default"].createElement("title", null, title), paths);
});
Icon.propTypes = {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: _propTypes["default"].string,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: _propTypes["default"].number,

  /**
   * Name of the icon
   */
  name: _propTypes["default"].string,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: _propTypes["default"].string,

  /**
   * CSS style properties.
   */
  style: _propTypes["default"].object,
  svgPaths16: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  svgPaths20: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9zcmMvSWNvbi5qcyJdLCJuYW1lcyI6WyJlbXB0eU9iamVjdCIsIkljb24iLCJyZWYiLCJjb2xvciIsInNpemUiLCJuYW1lIiwidGl0bGUiLCJzdHlsZSIsInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwic3ZnUHJvcHMiLCJ0aGVtZSIsIlNJWkVfU1RBTkRBUkQiLCJTSVpFX0xBUkdFIiwicGl4ZWxHcmlkU2l6ZSIsInBhdGhTdHJpbmdzIiwicGF0aHMiLCJtYXAiLCJkIiwiaSIsInZpZXdCb3giLCJzdHlsZXMiLCJmaWxsIiwiZ2V0SWNvbkNvbG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQU1BLElBQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUVBLElBQU1DLElBQUksR0FBRyx1QkFBVyxTQUFTQSxJQUFULE9BV3RCQyxHQVhzQixFQVl0QjtBQUFBLHdCQVZFQyxLQVVGO0FBQUEsTUFWRUEsS0FVRiwyQkFWVSxjQVVWO0FBQUEsdUJBVEVDLElBU0Y7QUFBQSxNQVRFQSxJQVNGLDBCQVRTLEVBU1Q7QUFBQSxNQVJFQyxJQVFGLFFBUkVBLElBUUY7QUFBQSxNQVBFQyxLQU9GLFFBUEVBLEtBT0Y7QUFBQSx3QkFORUMsS0FNRjtBQUFBLE1BTkVBLEtBTUYsMkJBTlVQLFdBTVY7QUFBQSxNQUxFUSxVQUtGLFFBTEVBLFVBS0Y7QUFBQSxNQUpFQyxVQUlGLFFBSkVBLFVBSUY7QUFBQSxNQUhLQyxRQUdMO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLHNCQUFkO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLEVBQW5CLENBSEEsQ0FLQTs7QUFDQSxNQUFNQyxhQUFhLEdBQUdWLElBQUksSUFBSVMsVUFBUixHQUFxQkEsVUFBckIsR0FBa0NELGFBQXhEO0FBQ0EsTUFBTUcsV0FBVyxHQUFHRCxhQUFhLEtBQUtGLGFBQWxCLEdBQWtDSixVQUFsQyxHQUErQ0MsVUFBbkU7QUFDQSxNQUFNTyxLQUFLLEdBQUdELFdBQVcsQ0FBQ0UsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUM1QjtBQUNBO0FBQU0sUUFBQSxHQUFHLEVBQUVBLENBQVg7QUFBYyxRQUFBLENBQUMsRUFBRUQsQ0FBakI7QUFBb0IsUUFBQSxRQUFRLEVBQUM7QUFBN0I7QUFGNEI7QUFBQSxHQUFoQixDQUFkO0FBS0EsTUFBTUUsT0FBTyxpQkFBVU4sYUFBVixjQUEyQkEsYUFBM0IsQ0FBYjtBQUVBLE1BQU1PLE1BQU0sR0FBRyxvQkFBUSxZQUFNO0FBQzNCLFdBQU9sQixLQUFLLG1DQUFRSSxLQUFSO0FBQWVlLE1BQUFBLElBQUksRUFBRVgsS0FBSyxDQUFDWSxZQUFOLENBQW1CcEIsS0FBbkI7QUFBckIsU0FBbURJLEtBQS9EO0FBQ0QsR0FGYyxFQUVaLENBQUNBLEtBQUQsRUFBUUosS0FBUixDQUZZLENBQWY7QUFJQSxTQUNFLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsS0FETDtBQUVFLElBQUEsR0FBRyxFQUFFRDtBQUZQLEtBR01RLFFBSE47QUFJRSxpQkFBV0wsSUFKYjtBQUtFLElBQUEsS0FBSyxFQUFFZ0IsTUFMVDtBQU1FLElBQUEsS0FBSyxFQUFFakIsSUFOVDtBQU9FLElBQUEsTUFBTSxFQUFFQSxJQVBWO0FBUUUsSUFBQSxPQUFPLEVBQUVnQjtBQVJYLE1BVUdkLEtBQUssSUFBSSwrQ0FBUUEsS0FBUixDQVZaLEVBV0dVLEtBWEgsQ0FERjtBQWVELENBOUNZLENBQWI7QUFnREFmLElBQUksQ0FBQ3VCLFNBQUwsR0FBaUI7QUFDZjs7O0FBR0FyQixFQUFBQSxLQUFLLEVBQUVzQixzQkFBVUMsTUFKRjs7QUFNZjs7Ozs7QUFLQXRCLEVBQUFBLElBQUksRUFBRXFCLHNCQUFVRSxNQVhEOztBQWFmOzs7QUFHQXRCLEVBQUFBLElBQUksRUFBRW9CLHNCQUFVQyxNQWhCRDs7QUFrQmY7Ozs7OztBQU1BcEIsRUFBQUEsS0FBSyxFQUFFbUIsc0JBQVVDLE1BeEJGOztBQTBCZjs7O0FBR0FuQixFQUFBQSxLQUFLLEVBQUVrQixzQkFBVUcsTUE3QkY7QUErQmZwQixFQUFBQSxVQUFVLEVBQUVpQixzQkFBVUksT0FBVixDQUFrQkosc0JBQVVDLE1BQTVCLEVBQW9DSSxVQS9CakM7QUFpQ2ZyQixFQUFBQSxVQUFVLEVBQUVnQixzQkFBVUksT0FBVixDQUFrQkosc0JBQVVDLE1BQTVCLEVBQW9DSTtBQWpDakMsQ0FBakI7ZUFvQ2U3QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuLyoqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGEgcmVtaXggb2YgdGhlIEljb24gY29tcG9uZW50IGluIEJsdWVwcmludGpzOlxuICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iLzgxM2U5M2YyL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLnRzeCNMMTVcbiAqIFJlZmVyIHRvIHRoZSBMSUNFTlNFIGZvciBCbHVlcHJpbnRKUyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vcGFsYW50aXIvYmx1ZXByaW50L2Jsb2IvZGV2ZWxvcC9MSUNFTlNFXG4gKi9cblxuY29uc3QgZW1wdHlPYmplY3QgPSB7fVxuXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZihmdW5jdGlvbiBJY29uKFxuICB7XG4gICAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgICBzaXplID0gMTYsXG4gICAgbmFtZSxcbiAgICB0aXRsZSxcbiAgICBzdHlsZSA9IGVtcHR5T2JqZWN0LFxuICAgIHN2Z1BhdGhzMTYsXG4gICAgc3ZnUGF0aHMyMCxcbiAgICAuLi5zdmdQcm9wc1xuICB9LFxuICByZWZcbikge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgY29uc3QgU0laRV9TVEFOREFSRCA9IDE2XG4gIGNvbnN0IFNJWkVfTEFSR0UgPSAyMFxuXG4gIC8vIENob29zZSB3aGljaCBwaXhlbCBncmlkIGlzIG1vc3QgYXBwcm9wcmlhdGUgZm9yIGdpdmVuIGljb24gc2l6ZVxuICBjb25zdCBwaXhlbEdyaWRTaXplID0gc2l6ZSA+PSBTSVpFX0xBUkdFID8gU0laRV9MQVJHRSA6IFNJWkVfU1RBTkRBUkRcbiAgY29uc3QgcGF0aFN0cmluZ3MgPSBwaXhlbEdyaWRTaXplID09PSBTSVpFX1NUQU5EQVJEID8gc3ZnUGF0aHMxNiA6IHN2Z1BhdGhzMjBcbiAgY29uc3QgcGF0aHMgPSBwYXRoU3RyaW5ncy5tYXAoKGQsIGkpID0+IChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgPHBhdGgga2V5PXtpfSBkPXtkfSBmaWxsUnVsZT1cImV2ZW5vZGRcIiAvPlxuICApKVxuXG4gIGNvbnN0IHZpZXdCb3ggPSBgMCAwICR7cGl4ZWxHcmlkU2l6ZX0gJHtwaXhlbEdyaWRTaXplfWBcblxuICBjb25zdCBzdHlsZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gY29sb3IgPyB7IC4uLnN0eWxlLCBmaWxsOiB0aGVtZS5nZXRJY29uQ29sb3IoY29sb3IpIH0gOiBzdHlsZVxuICB9LCBbc3R5bGUsIGNvbG9yXSlcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGlzPVwic3ZnXCJcbiAgICAgIHJlZj17cmVmfVxuICAgICAgey4uLnN2Z1Byb3BzfVxuICAgICAgZGF0YS1pY29uPXtuYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgdmlld0JveD17dmlld0JveH1cbiAgICA+XG4gICAgICB7dGl0bGUgJiYgPHRpdGxlPnt0aXRsZX08L3RpdGxlPn1cbiAgICAgIHtwYXRoc31cbiAgICA8L0JveD5cbiAgKVxufSlcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb2xvciBvZiBpY29uLiBFcXVpdmFsZW50IHRvIHNldHRpbmcgQ1NTIGBmaWxsYCBwcm9wZXJ0eS5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBpY29uLCBpbiBwaXhlbHMuXG4gICAqIEJsdWVwcmludCBjb250YWlucyAxNnB4IGFuZCAyMHB4IFNWRyBpY29uIGltYWdlcyxcbiAgICogYW5kIGNob29zZXMgdGhlIGFwcHJvcHJpYXRlIHJlc29sdXRpb24gYmFzZWQgb24gdGhpcyBwcm9wLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgaWNvblxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gc3RyaW5nLlxuICAgKiBCcm93c2VycyB1c3VhbGx5IHJlbmRlciB0aGlzIGFzIGEgdG9vbHRpcCBvbiBob3Zlciwgd2hlcmVhcyBzY3JlZW5cbiAgICogcmVhZGVycyB3aWxsIHVzZSBpdCBmb3IgYXVyYWwgZmVlZGJhY2suXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgaXMgc2V0IHRvIHRoZSBpY29uJ3MgbmFtZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDU1Mgc3R5bGUgcHJvcGVydGllcy5cbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIHN2Z1BhdGhzMTY6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG5cbiAgc3ZnUGF0aHMyMDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG4iXX0=