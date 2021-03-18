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

var _removeUndefined = _interopRequireDefault(require("../../lib/remove-undefined"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UnorderedList = (0, _react.memo)((0, _react.forwardRef)(function UnorderedList(props, ref) {
  var children = props.children,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      icon = props.icon,
      iconColor = props.iconColor,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "size", "icon", "iconColor"]);

  var enrichedChildren = _react["default"].Children.map(children, function (child) {
    if (!_react["default"].isValidElement(child)) {
      return child;
    }

    return _react["default"].cloneElement(child, (0, _removeUndefined["default"])(_objectSpread({
      icon: icon,
      size: size,
      iconColor: iconColor
    }, child.props)));
  });

  var marginLeft;
  if (size === 300) marginLeft = 16;
  if (size === 400) marginLeft = 18;
  if (size === 500) marginLeft = 18;
  if (size === 600) marginLeft = 20;
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "ul",
    listStyle: "disc",
    padding: 0,
    margin: 0,
    marginLeft: marginLeft
  }, rest, {
    ref: ref
  }), enrichedChildren);
}));
UnorderedList.propTypes = _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600]),

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor: _propTypes["default"].string
});
var _default = UnorderedList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Vbm9yZGVyZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlVub3JkZXJlZExpc3QiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwic2l6ZSIsImljb24iLCJpY29uQ29sb3IiLCJyZXN0IiwiZW5yaWNoZWRDaGlsZHJlbiIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIkJveCIsIlByb3BUeXBlcyIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsaUJBQ3BCLHVCQUFXLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxHQUE5QixFQUFtQztBQUFBLE1BQ3BDQyxRQURvQyxHQUNlRixLQURmLENBQ3BDRSxRQURvQztBQUFBLG9CQUNlRixLQURmLENBQzFCRyxJQUQwQjtBQUFBLE1BQzFCQSxJQUQwQiw0QkFDbkIsR0FEbUI7QUFBQSxNQUNkQyxJQURjLEdBQ2VKLEtBRGYsQ0FDZEksSUFEYztBQUFBLE1BQ1JDLFNBRFEsR0FDZUwsS0FEZixDQUNSSyxTQURRO0FBQUEsTUFDTUMsSUFETiw2Q0FDZU4sS0FEZjs7QUFHNUMsTUFBTU8sZ0JBQWdCLEdBQUdDLGtCQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJSLFFBQW5CLEVBQTZCLFVBQUFTLEtBQUssRUFBSTtBQUM3RCxRQUFJLENBQUNILGtCQUFNSSxjQUFOLENBQXFCRCxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDLGFBQU9BLEtBQVA7QUFDRDs7QUFFRCxXQUFPSCxrQkFBTUssWUFBTixDQUNMRixLQURLLEVBRUw7QUFDRVAsTUFBQUEsSUFBSSxFQUFKQSxJQURGO0FBRUVELE1BQUFBLElBQUksRUFBSkEsSUFGRjtBQUdFRSxNQUFBQSxTQUFTLEVBQVRBO0FBSEYsT0FLS00sS0FBSyxDQUFDWCxLQUxYLEVBRkssQ0FBUDtBQVVELEdBZndCLENBQXpCOztBQWlCQSxNQUFJYyxVQUFKO0FBQ0EsTUFBSVgsSUFBSSxLQUFLLEdBQWIsRUFBa0JXLFVBQVUsR0FBRyxFQUFiO0FBQ2xCLE1BQUlYLElBQUksS0FBSyxHQUFiLEVBQWtCVyxVQUFVLEdBQUcsRUFBYjtBQUNsQixNQUFJWCxJQUFJLEtBQUssR0FBYixFQUFrQlcsVUFBVSxHQUFHLEVBQWI7QUFDbEIsTUFBSVgsSUFBSSxLQUFLLEdBQWIsRUFBa0JXLFVBQVUsR0FBRyxFQUFiO0FBRWxCLFNBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxJQURMO0FBRUUsSUFBQSxTQUFTLEVBQUMsTUFGWjtBQUdFLElBQUEsT0FBTyxFQUFFLENBSFg7QUFJRSxJQUFBLE1BQU0sRUFBRSxDQUpWO0FBS0UsSUFBQSxVQUFVLEVBQUVBO0FBTGQsS0FNTVIsSUFOTjtBQU9FLElBQUEsR0FBRyxFQUFFTDtBQVBQLE1BU0dNLGdCQVRILENBREY7QUFhRCxDQXZDRCxDQURvQixDQUF0QjtBQTJDQVIsYUFBYSxDQUFDZ0IsU0FBZCxtQ0FDS0Msa0JBQUlELFNBRFQ7QUFHRTs7OztBQUlBWixFQUFBQSxJQUFJLEVBQUVjLHNCQUFVQyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWhCLENBUFI7O0FBU0U7Ozs7QUFJQWQsRUFBQUEsSUFBSSxFQUFFYSxzQkFBVUUsU0FBVixDQUFvQixDQUFDRixzQkFBVUcsV0FBWCxFQUF3Qkgsc0JBQVVJLE9BQWxDLENBQXBCLENBYlI7O0FBZUU7OztBQUdBaEIsRUFBQUEsU0FBUyxFQUFFWSxzQkFBVUs7QUFsQnZCO2VBcUJldkIsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCByZW1vdmVVbmRlZmluZWQgZnJvbSAnLi4vLi4vbGliL3JlbW92ZS11bmRlZmluZWQnXG5cbmNvbnN0IFVub3JkZXJlZExpc3QgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFVub3JkZXJlZExpc3QocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNpemUgPSA0MDAsIGljb24sIGljb25Db2xvciwgLi4ucmVzdCB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGVucmljaGVkQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgcmVtb3ZlVW5kZWZpbmVkKHtcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgIC8vIFByZWZlciBtb3JlIGdyYW51bGFybHkgZGVmaW5lZCBwcm9wcyBpZiBwcmVzZW50XG4gICAgICAgICAgLi4uY2hpbGQucHJvcHNcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxuXG4gICAgbGV0IG1hcmdpbkxlZnRcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBtYXJnaW5MZWZ0ID0gMTZcbiAgICBpZiAoc2l6ZSA9PT0gNDAwKSBtYXJnaW5MZWZ0ID0gMThcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBtYXJnaW5MZWZ0ID0gMThcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBtYXJnaW5MZWZ0ID0gMjBcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwidWxcIlxuICAgICAgICBsaXN0U3R5bGU9XCJkaXNjXCJcbiAgICAgICAgcGFkZGluZz17MH1cbiAgICAgICAgbWFyZ2luPXswfVxuICAgICAgICBtYXJnaW5MZWZ0PXttYXJnaW5MZWZ0fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICA+XG4gICAgICAgIHtlbnJpY2hlZENoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9KVxuKVxuXG5Vbm9yZGVyZWRMaXN0LnByb3BUeXBlcyA9IHtcbiAgLi4uQm94LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgdGV4dCB1c2VkIGluIGEgbGlzdCBpdGVtLlxuICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMCwgNjAwXSksXG5cbiAgLyoqXG4gICAqIFdoZW4gcGFzc2VkLCBhZGRzIGEgaWNvbiBiZWZvcmUgZWFjaCBsaXN0IGl0ZW0gaW4gdGhlIGxpc3RcbiAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG9uIGEgaW5kaXZpZHVhbCBsaXN0IGl0ZW0uXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudFR5cGUsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgaWNvbiBpbiBlYWNoIGxpc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICovXG4gIGljb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBVbm9yZGVyZWRMaXN0XG4iXX0=