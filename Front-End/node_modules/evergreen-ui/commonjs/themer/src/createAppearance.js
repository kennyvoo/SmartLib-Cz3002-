"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isDev = _interopRequireDefault(require("./isDev"));

var allowedProperties = ['background', 'backgroundColor', 'backgroundImage', 'borderRadius', 'transition', 'boxShadow', 'opacity', 'color', 'textShadow', 'outline', // Not sure if cursor should be configurable
'cursor', // Added to prevent pointer events on disabled tab
'pointerEvents'];
/**
 * @param {object?} obj - input object that will be filtered against the allowed properties.
 * @return {object} the result will always be a object
 */

function createAppearance() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (allowedProperties.includes(key)) {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
        result[key] = obj[key];
      } else if (_isDev["default"]) {
        console.error("createAppearance() only accepts strings as properties, key '".concat(key, "' with value '").concat(obj[key], "' is not a string"));
      }
    } else if (_isDev["default"]) {
      console.error("key '".concat(key, "' is not in the allowed properties for createAppearance():"), allowedProperties);
    }
  });
  return result;
}

var _default = createAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiYWxsb3dlZFByb3BlcnRpZXMiLCJjcmVhdGVBcHBlYXJhbmNlIiwib2JqIiwicmVzdWx0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsImlzRGV2IiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxDQUN4QixZQUR3QixFQUV4QixpQkFGd0IsRUFHeEIsaUJBSHdCLEVBS3hCLGNBTHdCLEVBT3hCLFlBUHdCLEVBUXhCLFdBUndCLEVBU3hCLFNBVHdCLEVBV3hCLE9BWHdCLEVBWXhCLFlBWndCLEVBY3hCLFNBZHdCLEVBZXhCO0FBQ0EsUUFoQndCLEVBa0J4QjtBQUNBLGVBbkJ3QixDQUExQjtBQXNCQTs7Ozs7QUFJQSxTQUFTQyxnQkFBVCxHQUFvQztBQUFBLE1BQVZDLEdBQVUsdUVBQUosRUFBSTtBQUNsQyxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUVBQyxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsVUFBQUMsR0FBRyxFQUFJO0FBQzlCLFFBQUlQLGlCQUFpQixDQUFDUSxRQUFsQixDQUEyQkQsR0FBM0IsQ0FBSixFQUFxQztBQUNuQyxVQUFJLE9BQU9MLEdBQUcsQ0FBQ0ssR0FBRCxDQUFWLEtBQW9CLFFBQXBCLElBQWdDLE9BQU9MLEdBQUcsQ0FBQ0ssR0FBRCxDQUFWLEtBQW9CLFFBQXhELEVBQWtFO0FBQ2hFSixRQUFBQSxNQUFNLENBQUNJLEdBQUQsQ0FBTixHQUFjTCxHQUFHLENBQUNLLEdBQUQsQ0FBakI7QUFDRCxPQUZELE1BRU8sSUFBSUUsaUJBQUosRUFBVztBQUNoQkMsUUFBQUEsT0FBTyxDQUFDQyxLQUFSLHVFQUNpRUosR0FEakUsMkJBQ3FGTCxHQUFHLENBQUNLLEdBQUQsQ0FEeEY7QUFHRDtBQUNGLEtBUkQsTUFRTyxJQUFJRSxpQkFBSixFQUFXO0FBQ2hCQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsZ0JBQ1VKLEdBRFYsaUVBRUVQLGlCQUZGO0FBSUQ7QUFDRixHQWZEO0FBaUJBLFNBQU9HLE1BQVA7QUFDRDs7ZUFFY0YsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNEZXYgZnJvbSAnLi9pc0RldidcblxuY29uc3QgYWxsb3dlZFByb3BlcnRpZXMgPSBbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2JhY2tncm91bmRDb2xvcicsXG4gICdiYWNrZ3JvdW5kSW1hZ2UnLFxuXG4gICdib3JkZXJSYWRpdXMnLFxuXG4gICd0cmFuc2l0aW9uJyxcbiAgJ2JveFNoYWRvdycsXG4gICdvcGFjaXR5JyxcblxuICAnY29sb3InLFxuICAndGV4dFNoYWRvdycsXG5cbiAgJ291dGxpbmUnLFxuICAvLyBOb3Qgc3VyZSBpZiBjdXJzb3Igc2hvdWxkIGJlIGNvbmZpZ3VyYWJsZVxuICAnY3Vyc29yJyxcblxuICAvLyBBZGRlZCB0byBwcmV2ZW50IHBvaW50ZXIgZXZlbnRzIG9uIGRpc2FibGVkIHRhYlxuICAncG9pbnRlckV2ZW50cydcbl1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdD99IG9iaiAtIGlucHV0IG9iamVjdCB0aGF0IHdpbGwgYmUgZmlsdGVyZWQgYWdhaW5zdCB0aGUgYWxsb3dlZCBwcm9wZXJ0aWVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgcmVzdWx0IHdpbGwgYWx3YXlzIGJlIGEgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFwcGVhcmFuY2Uob2JqID0ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cblxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoYWxsb3dlZFByb3BlcnRpZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9ialtrZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgICB9IGVsc2UgaWYgKGlzRGV2KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYGNyZWF0ZUFwcGVhcmFuY2UoKSBvbmx5IGFjY2VwdHMgc3RyaW5ncyBhcyBwcm9wZXJ0aWVzLCBrZXkgJyR7a2V5fScgd2l0aCB2YWx1ZSAnJHtvYmpba2V5XX0nIGlzIG5vdCBhIHN0cmluZ2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNEZXYpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBrZXkgJyR7a2V5fScgaXMgbm90IGluIHRoZSBhbGxvd2VkIHByb3BlcnRpZXMgZm9yIGNyZWF0ZUFwcGVhcmFuY2UoKTpgLFxuICAgICAgICBhbGxvd2VkUHJvcGVydGllc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFwcGVhcmFuY2VcbiJdfQ==