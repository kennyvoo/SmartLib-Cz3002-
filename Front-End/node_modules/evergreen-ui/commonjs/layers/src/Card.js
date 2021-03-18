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

var _Pane = _interopRequireDefault(require("./Pane"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Card = (0, _react.memo)((0, _react.forwardRef)(function Card(props, ref) {
  return _react["default"].createElement(_Pane["default"], (0, _extends2["default"])({
    borderRadius: 5
  }, props, {
    ref: ref
  }));
}));
Card.propTypes = _objectSpread({}, _Pane["default"].propTypes);
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwicmVmIiwicHJvcFR5cGVzIiwiUGFuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxpQkFDWCx1QkFBVyxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ25DLFNBQU8sZ0NBQUMsZ0JBQUQ7QUFBTSxJQUFBLFlBQVksRUFBRTtBQUFwQixLQUEyQkQsS0FBM0I7QUFBa0MsSUFBQSxHQUFHLEVBQUVDO0FBQXZDLEtBQVA7QUFDRCxDQUZELENBRFcsQ0FBYjtBQU1BRixJQUFJLENBQUNHLFNBQUwscUJBQ0tDLGlCQUFLRCxTQURWO2VBSWVILEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhbmUgZnJvbSAnLi9QYW5lJ1xuXG5jb25zdCBDYXJkID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBDYXJkKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gPFBhbmUgYm9yZGVyUmFkaXVzPXs1fSB7Li4ucHJvcHN9IHJlZj17cmVmfSAvPlxuICB9KVxuKVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgLi4uUGFuZS5wcm9wVHlwZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19