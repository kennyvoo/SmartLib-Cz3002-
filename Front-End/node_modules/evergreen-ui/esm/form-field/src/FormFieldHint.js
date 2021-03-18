import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import { Paragraph } from '../../typography';
var FormFieldHint = memo(forwardRef(function FormFieldHint(props, ref) {
  return React.createElement(Paragraph, _extends({
    marginTop: 0,
    size: 300,
    color: "muted"
  }, props, {
    ref: ref
  }));
}));
FormFieldHint.propTypes = _objectSpread({}, Paragraph.propTypes);
export default FormFieldHint;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRIaW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJQYXJhZ3JhcGgiLCJGb3JtRmllbGRIaW50IiwicHJvcHMiLCJyZWYiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUVBLElBQU1DLGFBQWEsR0FBR0gsSUFBSSxDQUN4QkMsVUFBVSxDQUFDLFNBQVNFLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxHQUE5QixFQUFtQztBQUM1QyxTQUNFLG9CQUFDLFNBQUQ7QUFBVyxJQUFBLFNBQVMsRUFBRSxDQUF0QjtBQUF5QixJQUFBLElBQUksRUFBRSxHQUEvQjtBQUFvQyxJQUFBLEtBQUssRUFBQztBQUExQyxLQUFzREQsS0FBdEQ7QUFBNkQsSUFBQSxHQUFHLEVBQUVDO0FBQWxFLEtBREY7QUFHRCxDQUpTLENBRGMsQ0FBMUI7QUFRQUYsYUFBYSxDQUFDRyxTQUFkLHFCQUlLSixTQUFTLENBQUNJLFNBSmY7QUFPQSxlQUFlSCxhQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5cbmNvbnN0IEZvcm1GaWVsZEhpbnQgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEZvcm1GaWVsZEhpbnQocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17MzAwfSBjb2xvcj1cIm11dGVkXCIgey4uLnByb3BzfSByZWY9e3JlZn0gLz5cbiAgICApXG4gIH0pXG4pXG5cbkZvcm1GaWVsZEhpbnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFBhcmFncmFwaCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5QYXJhZ3JhcGgucHJvcFR5cGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZEhpbnRcbiJdfQ==