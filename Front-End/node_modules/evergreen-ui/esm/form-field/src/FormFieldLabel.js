import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../../typography';
var FormFieldLabel = memo(forwardRef(function FormFieldLabel(props, ref) {
  var children = props.children,
      isAstrixShown = props.isAstrixShown,
      rest = _objectWithoutProperties(props, ["children", "isAstrixShown"]);

  return React.createElement(Label, _extends({
    display: "block"
  }, rest, {
    ref: ref
  }), children, ' ', isAstrixShown && React.createElement("span", {
    title: "This field is required."
  }, "*"));
}));
FormFieldLabel.propTypes = _objectSpread(_objectSpread({}, Label.propTypes), {}, {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: PropTypes.bool
});
export default FormFieldLabel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRMYWJlbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiUHJvcFR5cGVzIiwiTGFiZWwiLCJGb3JtRmllbGRMYWJlbCIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJpc0FzdHJpeFNob3duIiwicmVzdCIsInByb3BUeXBlcyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0Isa0JBQXRCO0FBRUEsSUFBTUMsY0FBYyxHQUFHSixJQUFJLENBQ3pCQyxVQUFVLENBQUMsU0FBU0csY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JDLEdBQS9CLEVBQW9DO0FBQUEsTUFDckNDLFFBRHFDLEdBQ0FGLEtBREEsQ0FDckNFLFFBRHFDO0FBQUEsTUFDM0JDLGFBRDJCLEdBQ0FILEtBREEsQ0FDM0JHLGFBRDJCO0FBQUEsTUFDVEMsSUFEUyw0QkFDQUosS0FEQTs7QUFFN0MsU0FDRSxvQkFBQyxLQUFEO0FBQU8sSUFBQSxPQUFPLEVBQUM7QUFBZixLQUEyQkksSUFBM0I7QUFBaUMsSUFBQSxHQUFHLEVBQUVIO0FBQXRDLE1BQ0dDLFFBREgsRUFDYSxHQURiLEVBRUdDLGFBQWEsSUFBSTtBQUFNLElBQUEsS0FBSyxFQUFDO0FBQVosU0FGcEIsQ0FERjtBQU1ELENBUlMsQ0FEZSxDQUEzQjtBQVlBSixjQUFjLENBQUNNLFNBQWYsbUNBSUtQLEtBQUssQ0FBQ08sU0FKWDtBQU1FOzs7QUFHQUYsRUFBQUEsYUFBYSxFQUFFTixTQUFTLENBQUNTO0FBVDNCO0FBWUEsZUFBZVAsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5cbmNvbnN0IEZvcm1GaWVsZExhYmVsID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtRmllbGRMYWJlbChwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaXNBc3RyaXhTaG93biwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPExhYmVsIGRpc3BsYXk9XCJibG9ja1wiIHsuLi5yZXN0fSByZWY9e3JlZn0+XG4gICAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAgICB7aXNBc3RyaXhTaG93biAmJiA8c3BhbiB0aXRsZT1cIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCI+Kjwvc3Bhbj59XG4gICAgICA8L0xhYmVsPlxuICAgIClcbiAgfSlcbilcblxuRm9ybUZpZWxkTGFiZWwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIExhYmVsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkxhYmVsLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICovXG4gIGlzQXN0cml4U2hvd246IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZExhYmVsXG4iXX0=