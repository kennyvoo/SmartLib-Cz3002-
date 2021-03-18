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

var _Text = _interopRequireDefault(require("./Text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Strong = (0, _react.memo)((0, _react.forwardRef)(function Strong(props, ref) {
  return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
    is: "strong",
    fontWeight: 600
  }, props, {
    ref: ref
  }));
}));
Strong.propTypes = _objectSpread({}, _Text["default"].propTypes);
var _default = Strong;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TdHJvbmcuanMiXSwibmFtZXMiOlsiU3Ryb25nIiwicHJvcHMiLCJyZWYiLCJwcm9wVHlwZXMiLCJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGlCQUNiLHVCQUFXLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxHQUF2QixFQUE0QjtBQUNyQyxTQUFPLGdDQUFDLGdCQUFEO0FBQU0sSUFBQSxFQUFFLEVBQUMsUUFBVDtBQUFrQixJQUFBLFVBQVUsRUFBRTtBQUE5QixLQUF1Q0QsS0FBdkM7QUFBOEMsSUFBQSxHQUFHLEVBQUVDO0FBQW5ELEtBQVA7QUFDRCxDQUZELENBRGEsQ0FBZjtBQU1BRixNQUFNLENBQUNHLFNBQVAscUJBQ0tDLGlCQUFLRCxTQURWO2VBSWVILE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jb25zdCBTdHJvbmcgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFN0cm9uZyhwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIDxUZXh0IGlzPVwic3Ryb25nXCIgZm9udFdlaWdodD17NjAwfSB7Li4ucHJvcHN9IHJlZj17cmVmfSAvPlxuICB9KVxuKVxuXG5TdHJvbmcucHJvcFR5cGVzID0ge1xuICAuLi5UZXh0LnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJvbmdcbiJdfQ==