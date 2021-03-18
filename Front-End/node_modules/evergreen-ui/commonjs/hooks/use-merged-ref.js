"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMergedRef = useMergedRef;

var _react = _interopRequireDefault(require("react"));

function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * React hook that merges up to two React refs into a single memoized function React Ref
 * @param {import('react').Ref<any>} refA
 * @param {import('react').Ref<any>} [refB]
 */


function useMergedRef(refA, refB) {
  return _react["default"].useMemo(function () {
    if (!refA && !refB) {
      return null;
    }

    return function (node) {
      setRef(refA, node);
      setRef(refB, node);
    };
  }, [refA, refB]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtbWVyZ2VkLXJlZi5qcyJdLCJuYW1lcyI6WyJzZXRSZWYiLCJyZWYiLCJub2RlIiwiY3VycmVudCIsInVzZU1lcmdlZFJlZiIsInJlZkEiLCJyZWZCIiwiUmVhY3QiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDekIsTUFBSSxPQUFPRCxHQUFQLEtBQWUsVUFBbkIsRUFBK0I7QUFDN0JBLElBQUFBLEdBQUcsQ0FBQ0MsSUFBRCxDQUFIO0FBQ0QsR0FGRCxNQUVPLElBQUlELEdBQUcsSUFBSSxhQUFhQSxHQUF4QixFQUE2QjtBQUNsQ0EsSUFBQUEsR0FBRyxDQUFDRSxPQUFKLEdBQWNELElBQWQ7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTRSxZQUFULENBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDdkMsU0FBT0Msa0JBQU1DLE9BQU4sQ0FBYyxZQUFNO0FBQ3pCLFFBQUksQ0FBQ0gsSUFBRCxJQUFTLENBQUNDLElBQWQsRUFBb0I7QUFDbEIsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBTyxVQUFBSixJQUFJLEVBQUk7QUFDYkYsTUFBQUEsTUFBTSxDQUFDSyxJQUFELEVBQU9ILElBQVAsQ0FBTjtBQUNBRixNQUFBQSxNQUFNLENBQUNNLElBQUQsRUFBT0osSUFBUCxDQUFOO0FBQ0QsS0FIRDtBQUlELEdBVE0sRUFTSixDQUFDRyxJQUFELEVBQU9DLElBQVAsQ0FUSSxDQUFQO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIHNldFJlZihyZWYsIG5vZGUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYobm9kZSlcbiAgfSBlbHNlIGlmIChyZWYgJiYgJ2N1cnJlbnQnIGluIHJlZikge1xuICAgIHJlZi5jdXJyZW50ID0gbm9kZVxuICB9XG59XG5cbi8qKlxuICogUmVhY3QgaG9vayB0aGF0IG1lcmdlcyB1cCB0byB0d28gUmVhY3QgcmVmcyBpbnRvIGEgc2luZ2xlIG1lbW9pemVkIGZ1bmN0aW9uIFJlYWN0IFJlZlxuICogQHBhcmFtIHtpbXBvcnQoJ3JlYWN0JykuUmVmPGFueT59IHJlZkFcbiAqIEBwYXJhbSB7aW1wb3J0KCdyZWFjdCcpLlJlZjxhbnk+fSBbcmVmQl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZihyZWZBLCByZWZCKSB7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXJlZkEgJiYgIXJlZkIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUgPT4ge1xuICAgICAgc2V0UmVmKHJlZkEsIG5vZGUpXG4gICAgICBzZXRSZWYocmVmQiwgbm9kZSlcbiAgICB9XG4gIH0sIFtyZWZBLCByZWZCXSlcbn1cbiJdfQ==