"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _warning = _interopRequireDefault(require("./warning"));

var _default = function _default(propType, explanation) {
  return function (props, propName, componentName) {
    if (process.env.NODE_ENV !== 'production') {
      (0, _warning["default"])(propName in props, "\"".concat(propName, "\" property of \"").concat(componentName, "\" has been deprecated.\n").concat(explanation));
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZGVwcmVjYXRlZC5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZSIsImV4cGxhbmF0aW9uIiwicHJvcHMiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJyZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7ZUFFZSxrQkFBQ0EsUUFBRCxFQUFXQyxXQUFYLEVBQTJCO0FBQ3hDLFNBQU8sVUFBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxhQUFsQixFQUE2QztBQUNsRCxRQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QywrQkFDRUosUUFBUSxJQUFJRCxLQURkLGNBRU1DLFFBRk4sOEJBRWdDQyxhQUZoQyxzQ0FFd0VILFdBRnhFO0FBSUQ7O0FBTmlELHNDQUFUTyxJQUFTO0FBQVRBLE1BQUFBLElBQVM7QUFBQTs7QUFRbEQsV0FBT1IsUUFBUSxNQUFSLFVBQVNFLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCQyxhQUExQixTQUE0Q0ksSUFBNUMsRUFBUDtBQUNELEdBVEQ7QUFVRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcFR5cGUsIGV4cGxhbmF0aW9uKSA9PiB7XG4gIHJldHVybiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCAuLi5yZXN0KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIHByb3BOYW1lIGluIHByb3BzLFxuICAgICAgICBgXCIke3Byb3BOYW1lfVwiIHByb3BlcnR5IG9mIFwiJHtjb21wb25lbnROYW1lfVwiIGhhcyBiZWVuIGRlcHJlY2F0ZWQuXFxuJHtleHBsYW5hdGlvbn1gXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgLi4ucmVzdClcbiAgfVxufVxuIl19