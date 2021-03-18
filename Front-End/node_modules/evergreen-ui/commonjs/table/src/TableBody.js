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

var _layers = require("../../layers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TableBody = (0, _react.memo)((0, _react.forwardRef)(function TableBody(props, ref) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children"]);
  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    ref: ref,
    "data-evergreen-table-body": true,
    flex: "1",
    overflowY: "auto"
  }, rest), children);
}));
TableBody.propTypes = _objectSpread({}, _layers.Pane.propTypes);
var _default = TableBody;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVCb2R5LmpzIl0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJyZXN0IiwicHJvcFR5cGVzIiwiUGFuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLGlCQUNoQix1QkFBVyxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFBQSxNQUNoQ0MsUUFEZ0MsR0FDVkYsS0FEVSxDQUNoQ0UsUUFEZ0M7QUFBQSxNQUNuQkMsSUFEbUIsNkNBQ1ZILEtBRFU7QUFHeEMsU0FDRSxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUVDLEdBRFA7QUFFRSxxQ0FGRjtBQUdFLElBQUEsSUFBSSxFQUFDLEdBSFA7QUFJRSxJQUFBLFNBQVMsRUFBQztBQUpaLEtBS01FLElBTE4sR0FPR0QsUUFQSCxDQURGO0FBV0QsQ0FkRCxDQURnQixDQUFsQjtBQWtCQUgsU0FBUyxDQUFDSyxTQUFWLHFCQUlLQyxhQUFLRCxTQUpWO2VBT2VMLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuY29uc3QgVGFibGVCb2R5ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJsZUJvZHkocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGRhdGEtZXZlcmdyZWVuLXRhYmxlLWJvZHlcbiAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICBvdmVyZmxvd1k9XCJhdXRvXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH0pXG4pXG5cblRhYmxlQm9keS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5QYW5lLnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUJvZHlcbiJdfQ==