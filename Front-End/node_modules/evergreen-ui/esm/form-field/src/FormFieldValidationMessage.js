import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import { Paragraph } from '../../typography';
import { ErrorIcon } from '../../icons';
import { Pane } from '../../layers';
var FormFieldValidationMessage = memo(forwardRef(function FormFieldValidationMessage(_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Pane, _extends({
    ref: ref,
    display: "flex"
  }, props), React.createElement(ErrorIcon, {
    color: "danger",
    marginTop: 1,
    size: 14,
    marginRight: 8
  }), React.createElement(Paragraph, {
    marginTop: 0,
    size: 300,
    color: "danger",
    role: "alert"
  }, children));
}));
FormFieldValidationMessage.propTypes = _objectSpread({}, Pane.propTypes);
export default FormFieldValidationMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiUGFyYWdyYXBoIiwiRXJyb3JJY29uIiwiUGFuZSIsIkZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlIiwicmVmIiwiY2hpbGRyZW4iLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBRUEsSUFBTUMsMEJBQTBCLEdBQUdMLElBQUksQ0FDckNDLFVBQVUsQ0FBQyxTQUFTSSwwQkFBVCxPQUE0REMsR0FBNUQsRUFBaUU7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBZEMsS0FBYzs7QUFDMUUsU0FDRSxvQkFBQyxJQUFEO0FBQU0sSUFBQSxHQUFHLEVBQUVGLEdBQVg7QUFBZ0IsSUFBQSxPQUFPLEVBQUM7QUFBeEIsS0FBbUNFLEtBQW5DLEdBQ0Usb0JBQUMsU0FBRDtBQUFXLElBQUEsS0FBSyxFQUFDLFFBQWpCO0FBQTBCLElBQUEsU0FBUyxFQUFFLENBQXJDO0FBQXdDLElBQUEsSUFBSSxFQUFFLEVBQTlDO0FBQWtELElBQUEsV0FBVyxFQUFFO0FBQS9ELElBREYsRUFFRSxvQkFBQyxTQUFEO0FBQVcsSUFBQSxTQUFTLEVBQUUsQ0FBdEI7QUFBeUIsSUFBQSxJQUFJLEVBQUUsR0FBL0I7QUFBb0MsSUFBQSxLQUFLLEVBQUMsUUFBMUM7QUFBbUQsSUFBQSxJQUFJLEVBQUM7QUFBeEQsS0FDR0QsUUFESCxDQUZGLENBREY7QUFRRCxDQVRTLENBRDJCLENBQXZDO0FBYUFGLDBCQUEwQixDQUFDSSxTQUEzQixxQkFJS0wsSUFBSSxDQUFDSyxTQUpWO0FBT0EsZUFBZUosMEJBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEVycm9ySWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuY29uc3QgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSByZWY9e3JlZn0gZGlzcGxheT1cImZsZXhcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8RXJyb3JJY29uIGNvbG9yPVwiZGFuZ2VyXCIgbWFyZ2luVG9wPXsxfSBzaXplPXsxNH0gbWFyZ2luUmlnaHQ9ezh9IC8+XG4gICAgICAgIDxQYXJhZ3JhcGggbWFyZ2luVG9wPXswfSBzaXplPXszMDB9IGNvbG9yPVwiZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH0pXG4pXG5cbkZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBQYW5lIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlBhbmUucHJvcFR5cGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlXG4iXX0=