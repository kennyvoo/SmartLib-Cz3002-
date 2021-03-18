import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo } from 'react';
import TableCell from './TableCell';
var TableHeaderCell = memo(function TableHeaderCell(props) {
  return React.createElement(TableCell, _extends({
    overflow: "visible",
    borderBottom: null
  }, props));
});
TableHeaderCell.propTypes = _objectSpread({}, TableCell.propTypes);
export default TableHeaderCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsUUFBNEIsT0FBNUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBRUEsSUFBTUMsZUFBZSxHQUFHRixJQUFJLENBQUMsU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDM0QsU0FBTyxvQkFBQyxTQUFEO0FBQVcsSUFBQSxRQUFRLEVBQUMsU0FBcEI7QUFBOEIsSUFBQSxZQUFZLEVBQUU7QUFBNUMsS0FBc0RBLEtBQXRELEVBQVA7QUFDRCxDQUYyQixDQUE1QjtBQUlBRCxlQUFlLENBQUNFLFNBQWhCLHFCQUlLSCxTQUFTLENBQUNHLFNBSmY7QUFPQSxlQUFlRixlQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5cbmNvbnN0IFRhYmxlSGVhZGVyQ2VsbCA9IG1lbW8oZnVuY3Rpb24gVGFibGVIZWFkZXJDZWxsKHByb3BzKSB7XG4gIHJldHVybiA8VGFibGVDZWxsIG92ZXJmbG93PVwidmlzaWJsZVwiIGJvcmRlckJvdHRvbT17bnVsbH0gey4uLnByb3BzfSAvPlxufSlcblxuVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUYWJsZUNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGFibGVDZWxsLnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUhlYWRlckNlbGxcbiJdfQ==