import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState } from 'react';
var count = 0;
/**
 * React hook that always returns an id value that is stable across re-renders
 * @param {string} prefix - a prefix to apply to id
 * @param {string} [explicitId] - an optional explicit value that takes precedence over the generated id
 * @returns {string}
 */

export function useId(prefix, explicitId) {
  var _useState = useState(function () {
    return explicitId || [prefix, ++count].filter(Boolean).join('-');
  }),
      _useState2 = _slicedToArray(_useState, 1),
      value = _useState2[0];

  return value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtaWQuanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb3VudCIsInVzZUlkIiwicHJlZml4IiwiZXhwbGljaXRJZCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSxRQUFULFFBQXlCLE9BQXpCO0FBRUEsSUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFQTs7Ozs7OztBQU1BLE9BQU8sU0FBU0MsS0FBVCxDQUFlQyxNQUFmLEVBQXVCQyxVQUF2QixFQUFtQztBQUFBLGtCQUN4QkosUUFBUSxDQUN0QjtBQUFBLFdBQU1JLFVBQVUsSUFBSSxDQUFDRCxNQUFELEVBQVMsRUFBRUYsS0FBWCxFQUFrQkksTUFBbEIsQ0FBeUJDLE9BQXpCLEVBQWtDQyxJQUFsQyxDQUF1QyxHQUF2QyxDQUFwQjtBQUFBLEdBRHNCLENBRGdCO0FBQUE7QUFBQSxNQUNqQ0MsS0FEaUM7O0FBSXhDLFNBQU9BLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmxldCBjb3VudCA9IDBcblxuLyoqXG4gKiBSZWFjdCBob29rIHRoYXQgYWx3YXlzIHJldHVybnMgYW4gaWQgdmFsdWUgdGhhdCBpcyBzdGFibGUgYWNyb3NzIHJlLXJlbmRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggLSBhIHByZWZpeCB0byBhcHBseSB0byBpZFxuICogQHBhcmFtIHtzdHJpbmd9IFtleHBsaWNpdElkXSAtIGFuIG9wdGlvbmFsIGV4cGxpY2l0IHZhbHVlIHRoYXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBnZW5lcmF0ZWQgaWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZChwcmVmaXgsIGV4cGxpY2l0SWQpIHtcbiAgY29uc3QgW3ZhbHVlXSA9IHVzZVN0YXRlKFxuICAgICgpID0+IGV4cGxpY2l0SWQgfHwgW3ByZWZpeCwgKytjb3VudF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJy0nKVxuICApXG4gIHJldHVybiB2YWx1ZVxufVxuIl19