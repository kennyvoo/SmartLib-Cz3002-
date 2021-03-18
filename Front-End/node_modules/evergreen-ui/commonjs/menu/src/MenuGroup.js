"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var MenuGroup = (0, _react.memo)(function MenuGroup(props) {
  var title = props.title,
      children = props.children;
  return _react["default"].createElement(_layers.Pane, {
    paddingY: 8
  }, title && _react["default"].createElement(_typography.Heading, {
    size: 100,
    marginX: 16,
    marginY: 8
  }, title), children);
});
MenuGroup.propTypes = {
  /**
   * Title of the menu group.
   */
  title: _propTypes["default"].node,

  /**
   * The children of the menu group.
   */
  children: _propTypes["default"].node
};
var _default = MenuGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51R3JvdXAuanMiXSwibmFtZXMiOlsiTWVudUdyb3VwIiwicHJvcHMiLCJ0aXRsZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsaUJBQUssU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUN2Q0MsS0FEdUMsR0FDbkJELEtBRG1CLENBQ3ZDQyxLQUR1QztBQUFBLE1BQ2hDQyxRQURnQyxHQUNuQkYsS0FEbUIsQ0FDaENFLFFBRGdDO0FBRy9DLFNBQ0UsZ0NBQUMsWUFBRDtBQUFNLElBQUEsUUFBUSxFQUFFO0FBQWhCLEtBQ0dELEtBQUssSUFDSixnQ0FBQyxtQkFBRDtBQUFTLElBQUEsSUFBSSxFQUFFLEdBQWY7QUFBb0IsSUFBQSxPQUFPLEVBQUUsRUFBN0I7QUFBaUMsSUFBQSxPQUFPLEVBQUU7QUFBMUMsS0FDR0EsS0FESCxDQUZKLEVBTUdDLFFBTkgsQ0FERjtBQVVELENBYmlCLENBQWxCO0FBZUFILFNBQVMsQ0FBQ0ksU0FBVixHQUFzQjtBQUNwQjs7O0FBR0FGLEVBQUFBLEtBQUssRUFBRUcsc0JBQVVDLElBSkc7O0FBTXBCOzs7QUFHQUgsRUFBQUEsUUFBUSxFQUFFRSxzQkFBVUM7QUFUQSxDQUF0QjtlQVllTixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcblxuY29uc3QgTWVudUdyb3VwID0gbWVtbyhmdW5jdGlvbiBNZW51R3JvdXAocHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4gfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZSBwYWRkaW5nWT17OH0+XG4gICAgICB7dGl0bGUgJiYgKFxuICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9IG1hcmdpblg9ezE2fSBtYXJnaW5ZPXs4fT5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9QYW5lPlxuICApXG59KVxuXG5NZW51R3JvdXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIG1lbnUgZ3JvdXAuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBjaGlsZHJlbiBvZiB0aGUgbWVudSBncm91cC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51R3JvdXBcbiJdfQ==