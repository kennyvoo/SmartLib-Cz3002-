import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useCallback } from 'react';
export function useForceUpdate() {
  // eslint-disable-next-line no-unused-vars
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      _ = _useState2[0],
      setValue = _useState2[1];

  return useCallback(function () {
    return setValue({});
  }, [setValue]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtZm9yY2UtdXBkYXRlLmpzIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VGb3JjZVVwZGF0ZSIsIl8iLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLFFBQVQsRUFBbUJDLFdBQW5CLFFBQXNDLE9BQXRDO0FBRUEsT0FBTyxTQUFTQyxjQUFULEdBQTBCO0FBQy9CO0FBRCtCLGtCQUVURixRQUFRLEVBRkM7QUFBQTtBQUFBLE1BRXhCRyxDQUZ3QjtBQUFBLE1BRXJCQyxRQUZxQjs7QUFHL0IsU0FBT0gsV0FBVyxDQUFDO0FBQUEsV0FBTUcsUUFBUSxDQUFDLEVBQUQsQ0FBZDtBQUFBLEdBQUQsRUFBcUIsQ0FBQ0EsUUFBRCxDQUFyQixDQUFsQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IFtfLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgpXG4gIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiBzZXRWYWx1ZSh7fSksIFtzZXRWYWx1ZV0pXG59XG4iXX0=