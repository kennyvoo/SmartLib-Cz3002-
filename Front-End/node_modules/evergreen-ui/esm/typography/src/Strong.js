import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Text from './Text';
var Strong = memo(forwardRef(function Strong(props, ref) {
  return React.createElement(Text, _extends({
    is: "strong",
    fontWeight: 600
  }, props, {
    ref: ref
  }));
}));
Strong.propTypes = _objectSpread({}, Text.propTypes);
export default Strong;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TdHJvbmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlRleHQiLCJTdHJvbmciLCJwcm9wcyIsInJlZiIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7QUFFQSxJQUFNQyxNQUFNLEdBQUdILElBQUksQ0FDakJDLFVBQVUsQ0FBQyxTQUFTRSxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsR0FBdkIsRUFBNEI7QUFDckMsU0FBTyxvQkFBQyxJQUFEO0FBQU0sSUFBQSxFQUFFLEVBQUMsUUFBVDtBQUFrQixJQUFBLFVBQVUsRUFBRTtBQUE5QixLQUF1Q0QsS0FBdkM7QUFBOEMsSUFBQSxHQUFHLEVBQUVDO0FBQW5ELEtBQVA7QUFDRCxDQUZTLENBRE8sQ0FBbkI7QUFNQUYsTUFBTSxDQUFDRyxTQUFQLHFCQUNLSixJQUFJLENBQUNJLFNBRFY7QUFJQSxlQUFlSCxNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcblxuY29uc3QgU3Ryb25nID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBTdHJvbmcocHJvcHMsIHJlZikge1xuICAgIHJldHVybiA8VGV4dCBpcz1cInN0cm9uZ1wiIGZvbnRXZWlnaHQ9ezYwMH0gey4uLnByb3BzfSByZWY9e3JlZn0gLz5cbiAgfSlcbilcblxuU3Ryb25nLnByb3BUeXBlcyA9IHtcbiAgLi4uVGV4dC5wcm9wVHlwZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Ryb25nXG4iXX0=