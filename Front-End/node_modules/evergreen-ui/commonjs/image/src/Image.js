"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Image = (0, _react.memo)((0, _react.forwardRef)(function Image(props, ref) {
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "img"
  }, props, {
    ref: ref
  }));
}));
Image.propTypes = _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  src: _propTypes["default"].string
});
var _default = Image;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbWFnZS9zcmMvSW1hZ2UuanMiXSwibmFtZXMiOlsiSW1hZ2UiLCJwcm9wcyIsInJlZiIsInByb3BUeXBlcyIsIkJveCIsInNyYyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxpQkFDWix1QkFBVyxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3BDLFNBQU8sZ0NBQUMsaUJBQUQ7QUFBSyxJQUFBLEVBQUUsRUFBQztBQUFSLEtBQWtCRCxLQUFsQjtBQUF5QixJQUFBLEdBQUcsRUFBRUM7QUFBOUIsS0FBUDtBQUNELENBRkQsQ0FEWSxDQUFkO0FBTUFGLEtBQUssQ0FBQ0csU0FBTixtQ0FDS0Msa0JBQUlELFNBRFQ7QUFFRUUsRUFBQUEsR0FBRyxFQUFFQyxzQkFBVUM7QUFGakI7ZUFLZVAsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuY29uc3QgSW1hZ2UgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEltYWdlKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gPEJveCBpcz1cImltZ1wiIHsuLi5wcm9wc30gcmVmPXtyZWZ9IC8+XG4gIH0pXG4pXG5cbkltYWdlLnByb3BUeXBlcyA9IHtcbiAgLi4uQm94LnByb3BUeXBlcyxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG4iXX0=