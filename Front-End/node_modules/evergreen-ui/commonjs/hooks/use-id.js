"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useId = useId;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var count = 0;
/**
 * React hook that always returns an id value that is stable across re-renders
 * @param {string} prefix - a prefix to apply to id
 * @param {string} [explicitId] - an optional explicit value that takes precedence over the generated id
 * @returns {string}
 */

function useId(prefix, explicitId) {
  var _useState = (0, _react.useState)(function () {
    return explicitId || [prefix, ++count].filter(Boolean).join('-');
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      value = _useState2[0];

  return value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtaWQuanMiXSwibmFtZXMiOlsiY291bnQiLCJ1c2VJZCIsInByZWZpeCIsImV4cGxpY2l0SWQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQUlBLEtBQUssR0FBRyxDQUFaO0FBRUE7Ozs7Ozs7QUFNTyxTQUFTQyxLQUFULENBQWVDLE1BQWYsRUFBdUJDLFVBQXZCLEVBQW1DO0FBQUEsa0JBQ3hCLHFCQUNkO0FBQUEsV0FBTUEsVUFBVSxJQUFJLENBQUNELE1BQUQsRUFBUyxFQUFFRixLQUFYLEVBQWtCSSxNQUFsQixDQUF5QkMsT0FBekIsRUFBa0NDLElBQWxDLENBQXVDLEdBQXZDLENBQXBCO0FBQUEsR0FEYyxDQUR3QjtBQUFBO0FBQUEsTUFDakNDLEtBRGlDOztBQUl4QyxTQUFPQSxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5sZXQgY291bnQgPSAwXG5cbi8qKlxuICogUmVhY3QgaG9vayB0aGF0IGFsd2F5cyByZXR1cm5zIGFuIGlkIHZhbHVlIHRoYXQgaXMgc3RhYmxlIGFjcm9zcyByZS1yZW5kZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IC0gYSBwcmVmaXggdG8gYXBwbHkgdG8gaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGljaXRJZF0gLSBhbiBvcHRpb25hbCBleHBsaWNpdCB2YWx1ZSB0aGF0IHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgZ2VuZXJhdGVkIGlkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSWQocHJlZml4LCBleHBsaWNpdElkKSB7XG4gIGNvbnN0IFt2YWx1ZV0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PiBleHBsaWNpdElkIHx8IFtwcmVmaXgsICsrY291bnRdLmZpbHRlcihCb29sZWFuKS5qb2luKCctJylcbiAgKVxuICByZXR1cm4gdmFsdWVcbn1cbiJdfQ==