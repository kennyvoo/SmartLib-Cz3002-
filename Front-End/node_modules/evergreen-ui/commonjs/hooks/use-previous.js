"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrevious = usePrevious;

var _react = _interopRequireDefault(require("react"));

/**
 * React hook that returns the previous value
 * @param {any} value
 */
function usePrevious(value, initialValue) {
  var ref = _react["default"].useRef(initialValue); // Store current value in ref, only update if the value changes


  _react["default"].useEffect(function () {
    ref.current = value;
  }, [value]); // Return previous value (happens before update in useEffect above)


  return ref.current;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtcHJldmlvdXMuanMiXSwibmFtZXMiOlsidXNlUHJldmlvdXMiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFJTyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsWUFBNUIsRUFBMEM7QUFDL0MsTUFBTUMsR0FBRyxHQUFHQyxrQkFBTUMsTUFBTixDQUFhSCxZQUFiLENBQVosQ0FEK0MsQ0FHL0M7OztBQUNBRSxvQkFBTUUsU0FBTixDQUFnQixZQUFNO0FBQ3BCSCxJQUFBQSxHQUFHLENBQUNJLE9BQUosR0FBY04sS0FBZDtBQUNELEdBRkQsRUFFRyxDQUFDQSxLQUFELENBRkgsRUFKK0MsQ0FRL0M7OztBQUNBLFNBQU9FLEdBQUcsQ0FBQ0ksT0FBWDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKipcbiAqIFJlYWN0IGhvb2sgdGhhdCByZXR1cm5zIHRoZSBwcmV2aW91cyB2YWx1ZVxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSwgaW5pdGlhbFZhbHVlKSB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihpbml0aWFsVmFsdWUpXG5cbiAgLy8gU3RvcmUgY3VycmVudCB2YWx1ZSBpbiByZWYsIG9ubHkgdXBkYXRlIGlmIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZVxuICB9LCBbdmFsdWVdKVxuXG4gIC8vIFJldHVybiBwcmV2aW91cyB2YWx1ZSAoaGFwcGVucyBiZWZvcmUgdXBkYXRlIGluIHVzZUVmZmVjdCBhYm92ZSlcbiAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG4iXX0=