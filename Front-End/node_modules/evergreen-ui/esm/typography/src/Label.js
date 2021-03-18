import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Text from './Text';
var Label = memo(forwardRef(function Label(props, ref) {
  return React.createElement(Text, _extends({
    is: "label",
    fontWeight: 500
  }, props, {
    ref: ref
  }));
}));
Label.propTypes = _objectSpread({}, Text.propTypes);
export default Label;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiVGV4dCIsIkxhYmVsIiwicHJvcHMiLCJyZWYiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBRUEsSUFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQ2hCQyxVQUFVLENBQUMsU0FBU0UsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUNwQyxTQUFPLG9CQUFDLElBQUQ7QUFBTSxJQUFBLEVBQUUsRUFBQyxPQUFUO0FBQWlCLElBQUEsVUFBVSxFQUFFO0FBQTdCLEtBQXNDRCxLQUF0QztBQUE2QyxJQUFBLEdBQUcsRUFBRUM7QUFBbEQsS0FBUDtBQUNELENBRlMsQ0FETSxDQUFsQjtBQU1BRixLQUFLLENBQUNHLFNBQU4scUJBQ0tKLElBQUksQ0FBQ0ksU0FEVjtBQUlBLGVBQWVILEtBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jb25zdCBMYWJlbCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gTGFiZWwocHJvcHMsIHJlZikge1xuICAgIHJldHVybiA8VGV4dCBpcz1cImxhYmVsXCIgZm9udFdlaWdodD17NTAwfSB7Li4ucHJvcHN9IHJlZj17cmVmfSAvPlxuICB9KVxuKVxuXG5MYWJlbC5wcm9wVHlwZXMgPSB7XG4gIC4uLlRleHQucHJvcFR5cGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsXG4iXX0=