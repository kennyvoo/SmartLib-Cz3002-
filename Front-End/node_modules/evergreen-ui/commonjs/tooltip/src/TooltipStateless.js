"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

var TooltipStateless = (0, _react.memo)((0, _react.forwardRef)(function TooltipStateless(props, ref) {
  var theme = (0, _theme.useTheme)();
  var children = props.children,
      appearance = props.appearance,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["children", "appearance"]);

  var _theme$getTooltipProp = theme.getTooltipProps(appearance),
      color = _theme$getTooltipProp.color,
      themedProps = (0, _objectWithoutProperties2["default"])(_theme$getTooltipProp, ["color"]);

  var child;

  if (typeof children === 'string') {
    child = _react["default"].createElement(_typography.Paragraph, {
      color: color,
      size: 400
    }, children);
  } else {
    child = children;
  }

  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    ref: ref,
    borderRadius: 3,
    paddingX: 8,
    paddingY: 4,
    maxWidth: 240
  }, themedProps, restProps), child);
}));
TooltipStateless.propTypes = {
  children: _propTypes["default"].node,

  /**
   * The appearance of the tooltip.
   */
  appearance: _propTypes["default"].oneOf(['default', 'card']).isRequired
};
var _default = TooltipStateless;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlRvb2x0aXBTdGF0ZWxlc3MiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwicmVzdFByb3BzIiwiZ2V0VG9vbHRpcFByb3BzIiwiY29sb3IiLCJ0aGVtZWRQcm9wcyIsImNoaWxkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIm9uZU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsaUJBQ3ZCLHVCQUFXLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDL0MsTUFBTUMsS0FBSyxHQUFHLHNCQUFkO0FBRCtDLE1BRXZDQyxRQUZ1QyxHQUVBSCxLQUZBLENBRXZDRyxRQUZ1QztBQUFBLE1BRTdCQyxVQUY2QixHQUVBSixLQUZBLENBRTdCSSxVQUY2QjtBQUFBLE1BRWRDLFNBRmMsNkNBRUFMLEtBRkE7O0FBQUEsOEJBR2JFLEtBQUssQ0FBQ0ksZUFBTixDQUFzQkYsVUFBdEIsQ0FIYTtBQUFBLE1BR3ZDRyxLQUh1Qyx5QkFHdkNBLEtBSHVDO0FBQUEsTUFHN0JDLFdBSDZCOztBQUsvQyxNQUFJQyxLQUFKOztBQUNBLE1BQUksT0FBT04sUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ00sSUFBQUEsS0FBSyxHQUNILGdDQUFDLHFCQUFEO0FBQVcsTUFBQSxLQUFLLEVBQUVGLEtBQWxCO0FBQXlCLE1BQUEsSUFBSSxFQUFFO0FBQS9CLE9BQ0dKLFFBREgsQ0FERjtBQUtELEdBTkQsTUFNTztBQUNMTSxJQUFBQSxLQUFLLEdBQUdOLFFBQVI7QUFDRDs7QUFFRCxTQUNFLGdDQUFDLFlBQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRUYsR0FEUDtBQUVFLElBQUEsWUFBWSxFQUFFLENBRmhCO0FBR0UsSUFBQSxRQUFRLEVBQUUsQ0FIWjtBQUlFLElBQUEsUUFBUSxFQUFFLENBSlo7QUFLRSxJQUFBLFFBQVEsRUFBRTtBQUxaLEtBTU1PLFdBTk4sRUFPTUgsU0FQTixHQVNHSSxLQVRILENBREY7QUFhRCxDQTdCRCxDQUR1QixDQUF6QjtBQWlDQVYsZ0JBQWdCLENBQUNXLFNBQWpCLEdBQTZCO0FBQzNCUCxFQUFBQSxRQUFRLEVBQUVRLHNCQUFVQyxJQURPOztBQUczQjs7O0FBR0FSLEVBQUFBLFVBQVUsRUFBRU8sc0JBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksTUFBWixDQUFoQixFQUFxQ0M7QUFOdEIsQ0FBN0I7ZUFTZWYsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBUb29sdGlwU3RhdGVsZXNzID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUb29sdGlwU3RhdGVsZXNzKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhcHBlYXJhbmNlLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzXG4gICAgY29uc3QgeyBjb2xvciwgLi4udGhlbWVkUHJvcHMgfSA9IHRoZW1lLmdldFRvb2x0aXBQcm9wcyhhcHBlYXJhbmNlKVxuXG4gICAgbGV0IGNoaWxkXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkID0gKFxuICAgICAgICA8UGFyYWdyYXBoIGNvbG9yPXtjb2xvcn0gc2l6ZT17NDAwfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgIHBhZGRpbmdYPXs4fVxuICAgICAgICBwYWRkaW5nWT17NH1cbiAgICAgICAgbWF4V2lkdGg9ezI0MH1cbiAgICAgICAgey4uLnRoZW1lZFByb3BzfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGR9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9KVxuKVxuXG5Ub29sdGlwU3RhdGVsZXNzLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2FyZCddKS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBTdGF0ZWxlc3NcbiJdfQ==