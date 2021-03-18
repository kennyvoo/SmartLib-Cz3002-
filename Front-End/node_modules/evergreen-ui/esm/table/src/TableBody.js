import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import { Pane } from '../../layers';
var TableBody = memo(forwardRef(function TableBody(props, ref) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(Pane, _extends({
    ref: ref,
    "data-evergreen-table-body": true,
    flex: "1",
    overflowY: "auto"
  }, rest), children);
}));
TableBody.propTypes = _objectSpread({}, Pane.propTypes);
export default TableBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVCb2R5LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJQYW5lIiwiVGFibGVCb2R5IiwicHJvcHMiLCJyZWYiLCJjaGlsZHJlbiIsInJlc3QiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLFFBQXdDLE9BQXhDO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUVBLElBQU1DLFNBQVMsR0FBR0gsSUFBSSxDQUNwQkMsVUFBVSxDQUFDLFNBQVNFLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxHQUExQixFQUErQjtBQUFBLE1BQ2hDQyxRQURnQyxHQUNWRixLQURVLENBQ2hDRSxRQURnQztBQUFBLE1BQ25CQyxJQURtQiw0QkFDVkgsS0FEVTs7QUFHeEMsU0FDRSxvQkFBQyxJQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUVDLEdBRFA7QUFFRSxxQ0FGRjtBQUdFLElBQUEsSUFBSSxFQUFDLEdBSFA7QUFJRSxJQUFBLFNBQVMsRUFBQztBQUpaLEtBS01FLElBTE4sR0FPR0QsUUFQSCxDQURGO0FBV0QsQ0FkUyxDQURVLENBQXRCO0FBa0JBSCxTQUFTLENBQUNLLFNBQVYscUJBSUtOLElBQUksQ0FBQ00sU0FKVjtBQU9BLGVBQWVMLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuY29uc3QgVGFibGVCb2R5ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJsZUJvZHkocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGRhdGEtZXZlcmdyZWVuLXRhYmxlLWJvZHlcbiAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICBvdmVyZmxvd1k9XCJhdXRvXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH0pXG4pXG5cblRhYmxlQm9keS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5QYW5lLnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUJvZHlcbiJdfQ==