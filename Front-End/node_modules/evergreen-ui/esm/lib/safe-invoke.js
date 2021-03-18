export default function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc2FmZS1pbnZva2UuanMiXSwibmFtZXMiOlsic2FmZUludm9rZSIsImZuIiwiYXJncyJdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTQSxVQUFULENBQW9CQyxFQUFwQixFQUFpQztBQUM5QyxNQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUFBLHNDQURVQyxJQUNWO0FBRFVBLE1BQUFBLElBQ1Y7QUFBQTs7QUFDNUIsV0FBT0QsRUFBRSxNQUFGLFNBQU1DLElBQU4sQ0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYWZlSW52b2tlKGZuLCAuLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm4oLi4uYXJncylcbiAgfVxufVxuIl19