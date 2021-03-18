import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Pane from './Pane';
var Card = memo(forwardRef(function Card(props, ref) {
  return React.createElement(Pane, _extends({
    borderRadius: 5
  }, props, {
    ref: ref
  }));
}));
Card.propTypes = _objectSpread({}, Pane.propTypes);
export default Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL0NhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlBhbmUiLCJDYXJkIiwicHJvcHMiLCJyZWYiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBRUEsSUFBTUMsSUFBSSxHQUFHSCxJQUFJLENBQ2ZDLFVBQVUsQ0FBQyxTQUFTRSxJQUFULENBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ25DLFNBQU8sb0JBQUMsSUFBRDtBQUFNLElBQUEsWUFBWSxFQUFFO0FBQXBCLEtBQTJCRCxLQUEzQjtBQUFrQyxJQUFBLEdBQUcsRUFBRUM7QUFBdkMsS0FBUDtBQUNELENBRlMsQ0FESyxDQUFqQjtBQU1BRixJQUFJLENBQUNHLFNBQUwscUJBQ0tKLElBQUksQ0FBQ0ksU0FEVjtBQUlBLGVBQWVILElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhbmUgZnJvbSAnLi9QYW5lJ1xuXG5jb25zdCBDYXJkID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBDYXJkKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gPFBhbmUgYm9yZGVyUmFkaXVzPXs1fSB7Li4ucHJvcHN9IHJlZj17cmVmfSAvPlxuICB9KVxuKVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgLi4uUGFuZS5wcm9wVHlwZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19