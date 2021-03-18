import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import TableCell from './TableCell';
var ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
var TextTableCell = memo(forwardRef(function TextTableCell(props, ref) {
  var children = props.children,
      textProps = props.textProps,
      _props$isNumber = props.isNumber,
      isNumber = _props$isNumber === void 0 ? false : _props$isNumber,
      placeholder = props.placeholder,
      rest = _objectWithoutProperties(props, ["children", "textProps", "isNumber", "placeholder"]);

  return React.createElement(TableCell, _extends({
    ref: ref
  }, rest), React.createElement(Text, _extends({
    size: 300,
    flex: "1"
  }, ellipsis, isNumber ? {
    fontFamily: 'mono'
  } : {}, textProps), children));
}));
TextTableCell.propTypes = _objectSpread(_objectSpread({}, TableCell.propTypes), {}, {
  /**
   * Adds fontFamily: mono.
   */
  isNumber: PropTypes.bool,

  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.object
});
export default TextTableCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlQ2VsbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiUHJvcFR5cGVzIiwiVGV4dCIsIlRhYmxlQ2VsbCIsImVsbGlwc2lzIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwiVGV4dFRhYmxlQ2VsbCIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJ0ZXh0UHJvcHMiLCJpc051bWJlciIsInBsYWNlaG9sZGVyIiwicmVzdCIsImZvbnRGYW1pbHkiLCJwcm9wVHlwZXMiLCJib29sIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsYUFBdEI7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsRUFBQUEsUUFBUSxFQUFFLFFBREs7QUFFZkMsRUFBQUEsWUFBWSxFQUFFLFVBRkM7QUFHZkMsRUFBQUEsVUFBVSxFQUFFO0FBSEcsQ0FBakI7QUFNQSxJQUFNQyxhQUFhLEdBQUdULElBQUksQ0FDeEJDLFVBQVUsQ0FBQyxTQUFTUSxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsR0FBOUIsRUFBbUM7QUFBQSxNQUUxQ0MsUUFGMEMsR0FPeENGLEtBUHdDLENBRTFDRSxRQUYwQztBQUFBLE1BRzFDQyxTQUgwQyxHQU94Q0gsS0FQd0MsQ0FHMUNHLFNBSDBDO0FBQUEsd0JBT3hDSCxLQVB3QyxDQUkxQ0ksUUFKMEM7QUFBQSxNQUkxQ0EsUUFKMEMsZ0NBSS9CLEtBSitCO0FBQUEsTUFLMUNDLFdBTDBDLEdBT3hDTCxLQVB3QyxDQUsxQ0ssV0FMMEM7QUFBQSxNQU12Q0MsSUFOdUMsNEJBT3hDTixLQVB3Qzs7QUFTNUMsU0FDRSxvQkFBQyxTQUFEO0FBQVcsSUFBQSxHQUFHLEVBQUVDO0FBQWhCLEtBQXlCSyxJQUF6QixHQUNFLG9CQUFDLElBQUQ7QUFDRSxJQUFBLElBQUksRUFBRSxHQURSO0FBRUUsSUFBQSxJQUFJLEVBQUM7QUFGUCxLQUdNWCxRQUhOLEVBSU9TLFFBQVEsR0FBRztBQUFFRyxJQUFBQSxVQUFVLEVBQUU7QUFBZCxHQUFILEdBQTRCLEVBSjNDLEVBS01KLFNBTE4sR0FPR0QsUUFQSCxDQURGLENBREY7QUFhRCxDQXRCUyxDQURjLENBQTFCO0FBMEJBSCxhQUFhLENBQUNTLFNBQWQsbUNBSUtkLFNBQVMsQ0FBQ2MsU0FKZjtBQU1FOzs7QUFHQUosRUFBQUEsUUFBUSxFQUFFWixTQUFTLENBQUNpQixJQVR0Qjs7QUFXRTs7O0FBR0FOLEVBQUFBLFNBQVMsRUFBRVgsU0FBUyxDQUFDa0I7QUFkdkI7QUFpQkEsZUFBZVgsYUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5cbmNvbnN0IGVsbGlwc2lzID0ge1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbn1cblxuY29uc3QgVGV4dFRhYmxlQ2VsbCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dFRhYmxlQ2VsbChwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICB0ZXh0UHJvcHMsXG4gICAgICBpc051bWJlciA9IGZhbHNlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlQ2VsbCByZWY9e3JlZn0gey4uLnJlc3R9PlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgICAgey4uLmVsbGlwc2lzfVxuICAgICAgICAgIHsuLi4oaXNOdW1iZXIgPyB7IGZvbnRGYW1pbHk6ICdtb25vJyB9IDoge30pfVxuICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgIClcbiAgfSlcbilcblxuVGV4dFRhYmxlQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGFibGVDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlRhYmxlQ2VsbC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIEFkZHMgZm9udEZhbWlseTogbW9uby5cbiAgICovXG4gIGlzTnVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUGFzcyBhZGRpdGlvbmFsIHByb3BzIHRvIHRoZSBUZXh0IGNvbXBvbmVudC5cbiAgICovXG4gIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0VGFibGVDZWxsXG4iXX0=