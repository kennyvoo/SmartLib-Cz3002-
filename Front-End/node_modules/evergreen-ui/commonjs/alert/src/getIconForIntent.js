"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconForIntent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

var _icons = require("../../icons");

/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 */
var getIconForIntent = function getIconForIntent(intent) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (intent) {
    case _constants.Intent.SUCCESS:
      return _react["default"].createElement(_icons.TickCircleIcon, (0, _extends2["default"])({
        color: "success"
      }, props));

    case _constants.Intent.DANGER:
      return _react["default"].createElement(_icons.ErrorIcon, (0, _extends2["default"])({
        color: "danger"
      }, props));

    case _constants.Intent.WARNING:
      return _react["default"].createElement(_icons.WarningSignIcon, (0, _extends2["default"])({
        color: "warning"
      }, props));

    case _constants.Intent.NONE:
    default:
      return _react["default"].createElement(_icons.InfoSignIcon, (0, _extends2["default"])({
        color: "info"
      }, props));
  }
};

exports.getIconForIntent = getIconForIntent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvZ2V0SWNvbkZvckludGVudC5qcyJdLCJuYW1lcyI6WyJnZXRJY29uRm9ySW50ZW50IiwiaW50ZW50IiwicHJvcHMiLCJJbnRlbnQiLCJTVUNDRVNTIiwiREFOR0VSIiwiV0FSTklORyIsIk5PTkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7QUFJTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE1BQUQsRUFBd0I7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87O0FBQ3RELFVBQVFELE1BQVI7QUFDRSxTQUFLRSxrQkFBT0MsT0FBWjtBQUNFLGFBQU8sZ0NBQUMscUJBQUQ7QUFBZ0IsUUFBQSxLQUFLLEVBQUM7QUFBdEIsU0FBb0NGLEtBQXBDLEVBQVA7O0FBQ0YsU0FBS0Msa0JBQU9FLE1BQVo7QUFDRSxhQUFPLGdDQUFDLGdCQUFEO0FBQVcsUUFBQSxLQUFLLEVBQUM7QUFBakIsU0FBOEJILEtBQTlCLEVBQVA7O0FBQ0YsU0FBS0Msa0JBQU9HLE9BQVo7QUFDRSxhQUFPLGdDQUFDLHNCQUFEO0FBQWlCLFFBQUEsS0FBSyxFQUFDO0FBQXZCLFNBQXFDSixLQUFyQyxFQUFQOztBQUNGLFNBQUtDLGtCQUFPSSxJQUFaO0FBQ0E7QUFDRSxhQUFPLGdDQUFDLG1CQUFEO0FBQWMsUUFBQSxLQUFLLEVBQUM7QUFBcEIsU0FBK0JMLEtBQS9CLEVBQVA7QUFUSjtBQVdELENBWk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnRlbnQgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQge1xuICBUaWNrQ2lyY2xlSWNvbixcbiAgRXJyb3JJY29uLFxuICBXYXJuaW5nU2lnbkljb24sXG4gIEluZm9TaWduSWNvblxufSBmcm9tICcuLi8uLi9pY29ucydcblxuLyoqXG4gKiBHZXQgdGhlIHByb3BlcnRpZXMgZm9yIGFuIGljb24gYmFzZWQgb24gdGhlIGludGVudC5cbiAqIEBwYXJhbSB7SW50ZW50fSBpbnRlbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEljb25Gb3JJbnRlbnQgPSAoaW50ZW50LCBwcm9wcyA9IHt9KSA9PiB7XG4gIHN3aXRjaCAoaW50ZW50KSB7XG4gICAgY2FzZSBJbnRlbnQuU1VDQ0VTUzpcbiAgICAgIHJldHVybiA8VGlja0NpcmNsZUljb24gY29sb3I9XCJzdWNjZXNzXCIgey4uLnByb3BzfSAvPlxuICAgIGNhc2UgSW50ZW50LkRBTkdFUjpcbiAgICAgIHJldHVybiA8RXJyb3JJY29uIGNvbG9yPVwiZGFuZ2VyXCIgey4uLnByb3BzfSAvPlxuICAgIGNhc2UgSW50ZW50LldBUk5JTkc6XG4gICAgICByZXR1cm4gPFdhcm5pbmdTaWduSWNvbiBjb2xvcj1cIndhcm5pbmdcIiB7Li4ucHJvcHN9IC8+XG4gICAgY2FzZSBJbnRlbnQuTk9ORTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDxJbmZvU2lnbkljb24gY29sb3I9XCJpbmZvXCIgey4uLnByb3BzfSAvPlxuICB9XG59XG4iXX0=