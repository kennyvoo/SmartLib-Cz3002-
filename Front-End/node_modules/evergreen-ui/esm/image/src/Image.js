import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
var Image = memo(forwardRef(function Image(props, ref) {
  return React.createElement(Box, _extends({
    is: "img"
  }, props, {
    ref: ref
  }));
}));
Image.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  src: PropTypes.string
});
export default Image;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbWFnZS9zcmMvSW1hZ2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlByb3BUeXBlcyIsIkJveCIsIkltYWdlIiwicHJvcHMiLCJyZWYiLCJwcm9wVHlwZXMiLCJzcmMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUVBLElBQU1DLEtBQUssR0FBR0osSUFBSSxDQUNoQkMsVUFBVSxDQUFDLFNBQVNHLEtBQVQsQ0FBZUMsS0FBZixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDcEMsU0FBTyxvQkFBQyxHQUFEO0FBQUssSUFBQSxFQUFFLEVBQUM7QUFBUixLQUFrQkQsS0FBbEI7QUFBeUIsSUFBQSxHQUFHLEVBQUVDO0FBQTlCLEtBQVA7QUFDRCxDQUZTLENBRE0sQ0FBbEI7QUFNQUYsS0FBSyxDQUFDRyxTQUFOLG1DQUNLSixHQUFHLENBQUNJLFNBRFQ7QUFFRUMsRUFBQUEsR0FBRyxFQUFFTixTQUFTLENBQUNPO0FBRmpCO0FBS0EsZUFBZUwsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuY29uc3QgSW1hZ2UgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEltYWdlKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gPEJveCBpcz1cImltZ1wiIHsuLi5wcm9wc30gcmVmPXtyZWZ9IC8+XG4gIH0pXG4pXG5cbkltYWdlLnByb3BUeXBlcyA9IHtcbiAgLi4uQm94LnByb3BUeXBlcyxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG4iXX0=