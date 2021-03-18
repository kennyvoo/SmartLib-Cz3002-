"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useForceUpdate = useForceUpdate;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useForceUpdate() {
  // eslint-disable-next-line no-unused-vars
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      _ = _useState2[0],
      setValue = _useState2[1];

  return (0, _react.useCallback)(function () {
    return setValue({});
  }, [setValue]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtZm9yY2UtdXBkYXRlLmpzIl0sIm5hbWVzIjpbInVzZUZvcmNlVXBkYXRlIiwiXyIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVPLFNBQVNBLGNBQVQsR0FBMEI7QUFDL0I7QUFEK0Isa0JBRVQsc0JBRlM7QUFBQTtBQUFBLE1BRXhCQyxDQUZ3QjtBQUFBLE1BRXJCQyxRQUZxQjs7QUFHL0IsU0FBTyx3QkFBWTtBQUFBLFdBQU1BLFFBQVEsQ0FBQyxFQUFELENBQWQ7QUFBQSxHQUFaLEVBQWdDLENBQUNBLFFBQUQsQ0FBaEMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IFtfLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgpXG4gIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiBzZXRWYWx1ZSh7fSksIFtzZXRWYWx1ZV0pXG59XG4iXX0=