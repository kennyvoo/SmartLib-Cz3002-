import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../layers';
var PopoverStateless = memo(forwardRef(function PopoverStateless(props, ref) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(Card, _extends({
    role: "dialog",
    elevation: 3,
    overflow: "hidden",
    minWidth: 200,
    backgroundColor: "white",
    ref: ref
  }, rest), children);
}));
PopoverStateless.propTypes = _objectSpread(_objectSpread({}, Card.propTypes), {}, {
  /**
   * The content of the Popover.
   */
  children: PropTypes.node
});
export default PopoverStateless;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJQcm9wVHlwZXMiLCJDYXJkIiwiUG9wb3ZlclN0YXRlbGVzcyIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJyZXN0IiwicHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUVBLElBQU1DLGdCQUFnQixHQUFHSixJQUFJLENBQzNCQyxVQUFVLENBQUMsU0FBU0csZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUFBLE1BQ3ZDQyxRQUR1QyxHQUNqQkYsS0FEaUIsQ0FDdkNFLFFBRHVDO0FBQUEsTUFDMUJDLElBRDBCLDRCQUNqQkgsS0FEaUI7O0FBRy9DLFNBQ0Usb0JBQUMsSUFBRDtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBRSxDQUZiO0FBR0UsSUFBQSxRQUFRLEVBQUMsUUFIWDtBQUlFLElBQUEsUUFBUSxFQUFFLEdBSlo7QUFLRSxJQUFBLGVBQWUsRUFBQyxPQUxsQjtBQU1FLElBQUEsR0FBRyxFQUFFQztBQU5QLEtBT01FLElBUE4sR0FTR0QsUUFUSCxDQURGO0FBYUQsQ0FoQlMsQ0FEaUIsQ0FBN0I7QUFvQkFILGdCQUFnQixDQUFDSyxTQUFqQixtQ0FJS04sSUFBSSxDQUFDTSxTQUpWO0FBTUU7OztBQUdBRixFQUFBQSxRQUFRLEVBQUVMLFNBQVMsQ0FBQ1E7QUFUdEI7QUFZQSxlQUFlTixnQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5jb25zdCBQb3BvdmVyU3RhdGVsZXNzID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBQb3BvdmVyU3RhdGVsZXNzKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgbWluV2lkdGg9ezIwMH1cbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ2FyZD5cbiAgICApXG4gIH0pXG4pXG5cblBvcG92ZXJTdGF0ZWxlc3MucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIENhcmQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5DYXJkLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIFBvcG92ZXIuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclN0YXRlbGVzc1xuIl19