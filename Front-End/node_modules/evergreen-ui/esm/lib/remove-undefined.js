import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Cleans an object of undefined values
 */
export default function removeUndefined() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var obj = _objectSpread({}, input);

  Object.keys(obj).forEach(function (key) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvcmVtb3ZlLXVuZGVmaW5lZC5qcyJdLCJuYW1lcyI6WyJyZW1vdmVVbmRlZmluZWQiLCJpbnB1dCIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBR0EsZUFBZSxTQUFTQSxlQUFULEdBQXFDO0FBQUEsTUFBWkMsS0FBWSx1RUFBSixFQUFJOztBQUNsRCxNQUFNQyxHQUFHLHFCQUFRRCxLQUFSLENBQVQ7O0FBRUFFLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCRyxPQUFqQixDQUF5QixVQUFBQyxHQUFHLEVBQUk7QUFDOUIsUUFBSUosR0FBRyxDQUFDSSxHQUFELENBQUgsS0FBYUMsU0FBakIsRUFBNEI7QUFDMUIsYUFBT0wsR0FBRyxDQUFDSSxHQUFELENBQVY7QUFDRDtBQUNGLEdBSkQ7QUFNQSxTQUFPSixHQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENsZWFucyBhbiBvYmplY3Qgb2YgdW5kZWZpbmVkIHZhbHVlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVVbmRlZmluZWQoaW5wdXQgPSB7fSkge1xuICBjb25zdCBvYmogPSB7IC4uLmlucHV0IH1cblxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAob2JqW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZXRlIG9ialtrZXldXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvYmpcbn1cbiJdfQ==