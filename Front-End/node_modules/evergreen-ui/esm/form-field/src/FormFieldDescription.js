import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import { Paragraph } from '../../typography';
var FormFieldDescription = memo(forwardRef(function FormFieldDescription(props, ref) {
  return React.createElement(Paragraph, _extends({
    marginTop: 0,
    size: 400,
    color: "muted"
  }, props, {
    ref: ref
  }));
}));
FormFieldDescription.propTypes = _objectSpread({}, Paragraph.propTypes);
export default FormFieldDescription;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiUGFyYWdyYXBoIiwiRm9ybUZpZWxkRGVzY3JpcHRpb24iLCJwcm9wcyIsInJlZiIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUdILElBQUksQ0FDL0JDLFVBQVUsQ0FBQyxTQUFTRSxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUNDLEdBQXJDLEVBQTBDO0FBQ25ELFNBQ0Usb0JBQUMsU0FBRDtBQUFXLElBQUEsU0FBUyxFQUFFLENBQXRCO0FBQXlCLElBQUEsSUFBSSxFQUFFLEdBQS9CO0FBQW9DLElBQUEsS0FBSyxFQUFDO0FBQTFDLEtBQXNERCxLQUF0RDtBQUE2RCxJQUFBLEdBQUcsRUFBRUM7QUFBbEUsS0FERjtBQUdELENBSlMsQ0FEcUIsQ0FBakM7QUFRQUYsb0JBQW9CLENBQUNHLFNBQXJCLHFCQUlLSixTQUFTLENBQUNJLFNBSmY7QUFPQSxlQUFlSCxvQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5jb25zdCBGb3JtRmllbGREZXNjcmlwdGlvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUZpZWxkRGVzY3JpcHRpb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCIgey4uLnByb3BzfSByZWY9e3JlZn0gLz5cbiAgICApXG4gIH0pXG4pXG5cbkZvcm1GaWVsZERlc2NyaXB0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBQYXJhZ3JhcGggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uUGFyYWdyYXBoLnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGREZXNjcmlwdGlvblxuIl19