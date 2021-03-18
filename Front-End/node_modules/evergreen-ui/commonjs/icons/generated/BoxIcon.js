"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M6 10h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm9.93-4.37v-.02L13.94.63C13.78.26 13.42 0 13 0H3c-.42 0-.78.26-.93.63L.08 5.61l-.01.02C.03 5.74 0 5.87 0 6v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.13-.03-.26-.07-.37zM9 2h3.32l1.2 3H9V2zM3.68 2H7v3H2.48l1.2-3zM14 14H2V7h12v7z'];
var svgPaths20 = ['M19.89 6.56l-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44zM11 2h4.38l2 4H11V2zM4.62 2H9v4H2.62l2-4zM18 18H2V8h16v10zM8 12h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z'];
var BoxIcon = (0, _react.memo)((0, _react.forwardRef)(function BoxIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "box"
  }, props));
}));
exports.BoxIcon = BoxIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvQm94SWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIkJveEljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQixvU0FEaUIsQ0FBbkI7QUFHQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsZ1NBRGlCLENBQW5CO0FBSU8sSUFBTUMsT0FBTyxHQUFHLGlCQUNyQix1QkFBVyxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDdEMsU0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURGO0FBU0QsQ0FWRCxDQURxQixDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ002IDEwaDRjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFINmMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMXptOS45My00LjM3di0uMDJMMTMuOTQuNjNDMTMuNzguMjYgMTMuNDIgMCAxMyAwSDNjLS40MiAwLS43OC4yNi0uOTMuNjNMLjA4IDUuNjFsLS4wMS4wMkMuMDMgNS43NCAwIDUuODcgMCA2djljMCAuNTUuNDUgMSAxIDFoMTRjLjU1IDAgMS0uNDUgMS0xVjZjMC0uMTMtLjAzLS4yNi0uMDctLjM3ek05IDJoMy4zMmwxLjIgM0g5VjJ6TTMuNjggMkg3djNIMi40OGwxLjItM3pNMTQgMTRIMlY3aDEydjd6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xOS44OSA2LjU2bC0yLjk5LTZoLS4wMUMxNi43Mi4yMyAxNi4zOSAwIDE2IDBINGMtLjM5IDAtLjcyLjIzLS44OS41NkgzLjFsLTMgNmguMDFDLjA1IDYuNjkgMCA2Ljg0IDAgN3YxMmMwIC41NS40NSAxIDEgMWgxOGMuNTUgMCAxLS40NSAxLTFWN2MwLS4xNi0uMDUtLjMxLS4xMS0uNDR6TTExIDJoNC4zOGwyIDRIMTFWMnpNNC42MiAySDl2NEgyLjYybDItNHpNMTggMThIMlY4aDE2djEwek04IDEyaDRjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMXonXG5dXG5cbmV4cG9ydCBjb25zdCBCb3hJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBCb3hJY29uKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEljb25cbiAgICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIG5hbWU9XCJib3hcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcbiJdfQ==