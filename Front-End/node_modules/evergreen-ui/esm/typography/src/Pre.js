import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Text from './Text';
var Pre = memo(forwardRef(function Pre(props, ref) {
  return React.createElement(Text, _extends({
    is: "pre",
    marginTop: 0,
    marginBottom: 0
  }, props, {
    ref: ref
  }));
}));
Pre.propTypes = _objectSpread({}, Text.propTypes);
export default Pre;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9QcmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlRleHQiLCJQcmUiLCJwcm9wcyIsInJlZiIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7QUFFQSxJQUFNQyxHQUFHLEdBQUdILElBQUksQ0FDZEMsVUFBVSxDQUFDLFNBQVNFLEdBQVQsQ0FBYUMsS0FBYixFQUFvQkMsR0FBcEIsRUFBeUI7QUFDbEMsU0FBTyxvQkFBQyxJQUFEO0FBQU0sSUFBQSxFQUFFLEVBQUMsS0FBVDtBQUFlLElBQUEsU0FBUyxFQUFFLENBQTFCO0FBQTZCLElBQUEsWUFBWSxFQUFFO0FBQTNDLEtBQWtERCxLQUFsRDtBQUF5RCxJQUFBLEdBQUcsRUFBRUM7QUFBOUQsS0FBUDtBQUNELENBRlMsQ0FESSxDQUFoQjtBQU1BRixHQUFHLENBQUNHLFNBQUoscUJBQ0tKLElBQUksQ0FBQ0ksU0FEVjtBQUlBLGVBQWVILEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jb25zdCBQcmUgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFByZShwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIDxUZXh0IGlzPVwicHJlXCIgbWFyZ2luVG9wPXswfSBtYXJnaW5Cb3R0b209ezB9IHsuLi5wcm9wc30gcmVmPXtyZWZ9IC8+XG4gIH0pXG4pXG5cblByZS5wcm9wVHlwZXMgPSB7XG4gIC4uLlRleHQucHJvcFR5cGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZVxuIl19