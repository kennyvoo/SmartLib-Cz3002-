"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = safeInvoke;

function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc2FmZS1pbnZva2UuanMiXSwibmFtZXMiOlsic2FmZUludm9rZSIsImZuIiwiYXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQWlDO0FBQzlDLE1BQUksT0FBT0EsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQUEsc0NBRFVDLElBQ1Y7QUFEVUEsTUFBQUEsSUFDVjtBQUFBOztBQUM1QixXQUFPRCxFQUFFLE1BQUYsU0FBTUMsSUFBTixDQUFQO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhZmVJbnZva2UoZm4sIC4uLmFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmbiguLi5hcmdzKVxuICB9XG59XG4iXX0=