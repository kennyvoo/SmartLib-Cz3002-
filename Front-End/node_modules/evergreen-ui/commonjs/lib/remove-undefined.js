"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = removeUndefined;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Cleans an object of undefined values
 */
function removeUndefined() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var obj = _objectSpread({}, input);

  Object.keys(obj).forEach(function (key) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvcmVtb3ZlLXVuZGVmaW5lZC5qcyJdLCJuYW1lcyI6WyJyZW1vdmVVbmRlZmluZWQiLCJpbnB1dCIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR2UsU0FBU0EsZUFBVCxHQUFxQztBQUFBLE1BQVpDLEtBQVksdUVBQUosRUFBSTs7QUFDbEQsTUFBTUMsR0FBRyxxQkFBUUQsS0FBUixDQUFUOztBQUVBRSxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUYsR0FBWixFQUFpQkcsT0FBakIsQ0FBeUIsVUFBQUMsR0FBRyxFQUFJO0FBQzlCLFFBQUlKLEdBQUcsQ0FBQ0ksR0FBRCxDQUFILEtBQWFDLFNBQWpCLEVBQTRCO0FBQzFCLGFBQU9MLEdBQUcsQ0FBQ0ksR0FBRCxDQUFWO0FBQ0Q7QUFDRixHQUpEO0FBTUEsU0FBT0osR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDbGVhbnMgYW4gb2JqZWN0IG9mIHVuZGVmaW5lZCB2YWx1ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkKGlucHV0ID0ge30pIHtcbiAgY29uc3Qgb2JqID0geyAuLi5pbnB1dCB9XG5cbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKG9ialtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gb2JqXG59XG4iXX0=