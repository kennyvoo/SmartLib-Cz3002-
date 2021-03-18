"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _ScrollbarSize = _interopRequireDefault(require("./ScrollbarSize"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TableHead = (0, _react.memo)(function TableHead(props) {
  var children = props.children,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$accountForScro = props.accountForScrollbar,
      accountForScrollbar = _props$accountForScro === void 0 ? true : _props$accountForScro,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "height", "accountForScrollbar"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      scrollbarWidth = _useState2[0],
      setScrollBarWidth = _useState2[1];

  var handleScrollbarSize = (0, _react.useCallback)(function (width) {
    setScrollBarWidth(width);
  });
  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    display: "flex",
    flexShrink: 0,
    paddingRight: scrollbarWidth,
    borderBottom: "default",
    background: "tint2",
    height: height
  }, rest), children, ' ', accountForScrollbar && _react["default"].createElement(_ScrollbarSize["default"], {
    handleScrollbarSize: handleScrollbarSize
  }));
});
TableHead.propTypes = _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /**
   * The height of the table head.
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: _propTypes["default"].bool
});
var _default = TableHead;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkLmpzIl0sIm5hbWVzIjpbIlRhYmxlSGVhZCIsInByb3BzIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJhY2NvdW50Rm9yU2Nyb2xsYmFyIiwicmVzdCIsInNjcm9sbGJhcldpZHRoIiwic2V0U2Nyb2xsQmFyV2lkdGgiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwid2lkdGgiLCJwcm9wVHlwZXMiLCJQYW5lIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsaUJBQUssU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUN2Q0MsUUFEdUMsR0FDd0JELEtBRHhCLENBQ3ZDQyxRQUR1QztBQUFBLHNCQUN3QkQsS0FEeEIsQ0FDN0JFLE1BRDZCO0FBQUEsTUFDN0JBLE1BRDZCLDhCQUNwQixFQURvQjtBQUFBLDhCQUN3QkYsS0FEeEIsQ0FDaEJHLG1CQURnQjtBQUFBLE1BQ2hCQSxtQkFEZ0Isc0NBQ00sSUFETjtBQUFBLE1BQ2VDLElBRGYsNkNBQ3dCSixLQUR4Qjs7QUFBQSxrQkFFSCxxQkFBUyxDQUFULENBRkc7QUFBQTtBQUFBLE1BRXhDSyxjQUZ3QztBQUFBLE1BRXhCQyxpQkFGd0I7O0FBSS9DLE1BQU1DLG1CQUFtQixHQUFHLHdCQUFZLFVBQUFDLEtBQUssRUFBSTtBQUMvQ0YsSUFBQUEsaUJBQWlCLENBQUNFLEtBQUQsQ0FBakI7QUFDRCxHQUYyQixDQUE1QjtBQUlBLFNBQ0UsZ0NBQUMsWUFBRDtBQUNFLElBQUEsT0FBTyxFQUFDLE1BRFY7QUFFRSxJQUFBLFVBQVUsRUFBRSxDQUZkO0FBR0UsSUFBQSxZQUFZLEVBQUVILGNBSGhCO0FBSUUsSUFBQSxZQUFZLEVBQUMsU0FKZjtBQUtFLElBQUEsVUFBVSxFQUFDLE9BTGI7QUFNRSxJQUFBLE1BQU0sRUFBRUg7QUFOVixLQU9NRSxJQVBOLEdBU0dILFFBVEgsRUFTYSxHQVRiLEVBVUdFLG1CQUFtQixJQUNsQixnQ0FBQyx5QkFBRDtBQUFlLElBQUEsbUJBQW1CLEVBQUVJO0FBQXBDLElBWEosQ0FERjtBQWdCRCxDQXhCaUIsQ0FBbEI7QUEwQkFSLFNBQVMsQ0FBQ1UsU0FBVixtQ0FJS0MsYUFBS0QsU0FKVjtBQU1FOzs7QUFHQVAsRUFBQUEsTUFBTSxFQUFFUyxzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVHLE1BQTdCLENBQXBCLENBVFY7O0FBV0U7Ozs7QUFJQVgsRUFBQUEsbUJBQW1CLEVBQUVRLHNCQUFVSTtBQWZqQztlQWtCZWhCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IFNjcm9sbGJhclNpemUgZnJvbSAnLi9TY3JvbGxiYXJTaXplJ1xuXG5jb25zdCBUYWJsZUhlYWQgPSBtZW1vKGZ1bmN0aW9uIFRhYmxlSGVhZChwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBoZWlnaHQgPSAzMiwgYWNjb3VudEZvclNjcm9sbGJhciA9IHRydWUsIC4uLnJlc3QgfSA9IHByb3BzXG4gIGNvbnN0IFtzY3JvbGxiYXJXaWR0aCwgc2V0U2Nyb2xsQmFyV2lkdGhdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBoYW5kbGVTY3JvbGxiYXJTaXplID0gdXNlQ2FsbGJhY2sod2lkdGggPT4ge1xuICAgIHNldFNjcm9sbEJhcldpZHRoKHdpZHRoKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmVcbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICBwYWRkaW5nUmlnaHQ9e3Njcm9sbGJhcldpZHRofVxuICAgICAgYm9yZGVyQm90dG9tPVwiZGVmYXVsdFwiXG4gICAgICBiYWNrZ3JvdW5kPVwidGludDJcIlxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59eycgJ31cbiAgICAgIHthY2NvdW50Rm9yU2Nyb2xsYmFyICYmIChcbiAgICAgICAgPFNjcm9sbGJhclNpemUgaGFuZGxlU2Nyb2xsYmFyU2l6ZT17aGFuZGxlU2Nyb2xsYmFyU2l6ZX0gLz5cbiAgICAgICl9XG4gICAgPC9QYW5lPlxuICApXG59KVxuXG5UYWJsZUhlYWQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRhYmxlIGhlYWQuXG4gICAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogVGhpcyBzaG91bGQgYWx3YXlzIGJlIHRydWUgaWYgeW91IGFyZSB1c2luZyBUYWJsZUhlYWQgdG9nZXRoZXIgd2l0aCBhIFRhYmxlQm9keS5cbiAgICogQmVjYXVzZSBUYWJsZUJvZHkgaGFzIGBvdmVyZmxvd1k6IHNjcm9sbGAgYnkgZGVmYXVsdC5cbiAgICovXG4gIGFjY291bnRGb3JTY3JvbGxiYXI6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlSGVhZFxuIl19