"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
};
var OrderedList = (0, _react.memo)((0, _react.forwardRef)(function OrderedList(props, ref) {
  var children = props.children,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "size"]);

  var finalChildren = _react["default"].Children.map(children, function (child) {
    if (!_react["default"].isValidElement(child)) {
      return child;
    }

    return _react["default"].cloneElement(child, {
      // Prefer more granularly defined icon if present
      size: child.props.size || size
    });
  });

  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "ol"
  }, styles, rest, {
    ref: ref
  }), finalChildren);
}));
OrderedList.propTypes = _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600])
});
var _default = OrderedList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9PcmRlcmVkTGlzdC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImxpc3RTdHlsZSIsIk9yZGVyZWRMaXN0IiwicHJvcHMiLCJyZWYiLCJjaGlsZHJlbiIsInNpemUiLCJyZXN0IiwiZmluYWxDaGlsZHJlbiIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwicHJvcFR5cGVzIiwiQm94IiwiUHJvcFR5cGVzIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxNQUFNLEVBQUUsQ0FESztBQUViQyxFQUFBQSxVQUFVLEVBQUUsT0FGQztBQUdiQyxFQUFBQSxPQUFPLEVBQUUsQ0FISTtBQUliQyxFQUFBQSxTQUFTLEVBQUU7QUFKRSxDQUFmO0FBT0EsSUFBTUMsV0FBVyxHQUFHLGlCQUNsQix1QkFBVyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFBQSxNQUNsQ0MsUUFEa0MsR0FDQUYsS0FEQSxDQUNsQ0UsUUFEa0M7QUFBQSxvQkFDQUYsS0FEQSxDQUN4QkcsSUFEd0I7QUFBQSxNQUN4QkEsSUFEd0IsNEJBQ2pCLEdBRGlCO0FBQUEsTUFDVEMsSUFEUyw2Q0FDQUosS0FEQTs7QUFHMUMsTUFBTUssYUFBYSxHQUFHQyxrQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CTixRQUFuQixFQUE2QixVQUFBTyxLQUFLLEVBQUk7QUFDMUQsUUFBSSxDQUFDSCxrQkFBTUksY0FBTixDQUFxQkQsS0FBckIsQ0FBTCxFQUFrQztBQUNoQyxhQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsV0FBT0gsa0JBQU1LLFlBQU4sQ0FBbUJGLEtBQW5CLEVBQTBCO0FBQy9CO0FBQ0FOLE1BQUFBLElBQUksRUFBRU0sS0FBSyxDQUFDVCxLQUFOLENBQVlHLElBQVosSUFBb0JBO0FBRkssS0FBMUIsQ0FBUDtBQUlELEdBVHFCLENBQXRCOztBQVdBLFNBQ0UsZ0NBQUMsaUJBQUQ7QUFBSyxJQUFBLEVBQUUsRUFBQztBQUFSLEtBQWlCVCxNQUFqQixFQUE2QlUsSUFBN0I7QUFBbUMsSUFBQSxHQUFHLEVBQUVIO0FBQXhDLE1BQ0dJLGFBREgsQ0FERjtBQUtELENBbkJELENBRGtCLENBQXBCO0FBdUJBTixXQUFXLENBQUNhLFNBQVosbUNBQ0tDLGtCQUFJRCxTQURUO0FBR0U7Ozs7QUFJQVQsRUFBQUEsSUFBSSxFQUFFVyxzQkFBVUMsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFoQjtBQVBSO2VBVWVoQixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG1hcmdpbjogMCxcbiAgbWFyZ2luTGVmdDogJzEuMWVtJyxcbiAgcGFkZGluZzogMCxcbiAgbGlzdFN0eWxlOiAnZGVjaW1hbCdcbn1cblxuY29uc3QgT3JkZXJlZExpc3QgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIE9yZGVyZWRMaXN0KHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplID0gNDAwLCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgY29uc3QgZmluYWxDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgLy8gUHJlZmVyIG1vcmUgZ3JhbnVsYXJseSBkZWZpbmVkIGljb24gaWYgcHJlc2VudFxuICAgICAgICBzaXplOiBjaGlsZC5wcm9wcy5zaXplIHx8IHNpemVcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGlzPVwib2xcIiB7Li4uc3R5bGVzfSB7Li4ucmVzdH0gcmVmPXtyZWZ9PlxuICAgICAgICB7ZmluYWxDaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuT3JkZXJlZExpc3QucHJvcFR5cGVzID0ge1xuICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSB0ZXh0IHVzZWQgaW4gYSBsaXN0IGl0ZW0uXG4gICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMCwgNjAwLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwLCA2MDBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlcmVkTGlzdFxuIl19