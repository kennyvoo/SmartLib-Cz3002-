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

var _icons = require("../../icons");

var _Button = _interopRequireDefault(require("./Button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BackButton = (0, _react.memo)((0, _react.forwardRef)(function BackButton(_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'Back' : _ref$children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return _react["default"].createElement(_Button["default"], (0, _extends2["default"])({
    iconBefore: _icons.ArrowLeftIcon
  }, props, {
    ref: ref
  }), children);
}));
BackButton.propTypes = _objectSpread({}, _Button["default"].propTypes);
var _default = BackButton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CYWNrQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJhY2tCdXR0b24iLCJyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiQXJyb3dMZWZ0SWNvbiIsInByb3BUeXBlcyIsIkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLGlCQUNqQix1QkFBVyxTQUFTQSxVQUFULE9BQXFEQyxHQUFyRCxFQUEwRDtBQUFBLDJCQUFwQ0MsUUFBb0M7QUFBQSxNQUFwQ0EsUUFBb0MsOEJBQXpCLE1BQXlCO0FBQUEsTUFBZEMsS0FBYztBQUNuRSxTQUNFLGdDQUFDLGtCQUFEO0FBQVEsSUFBQSxVQUFVLEVBQUVDO0FBQXBCLEtBQXVDRCxLQUF2QztBQUE4QyxJQUFBLEdBQUcsRUFBRUY7QUFBbkQsTUFDR0MsUUFESCxDQURGO0FBS0QsQ0FORCxDQURpQixDQUFuQjtBQVVBRixVQUFVLENBQUNLLFNBQVgscUJBRUtDLG1CQUFPRCxTQUZaO2VBS2VMLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuY29uc3QgQmFja0J1dHRvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gQmFja0J1dHRvbih7IGNoaWxkcmVuID0gJ0JhY2snLCAuLi5wcm9wcyB9LCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvbiBpY29uQmVmb3JlPXtBcnJvd0xlZnRJY29ufSB7Li4ucHJvcHN9IHJlZj17cmVmfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICB9KVxuKVxuXG5CYWNrQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqIENvbXBvc2VzIHRoZSBCdXR0b24gY29tcG9uZW50IGFzIHRoZSBiYXNlLiAqL1xuICAuLi5CdXR0b24ucHJvcFR5cGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tCdXR0b25cbiJdfQ==