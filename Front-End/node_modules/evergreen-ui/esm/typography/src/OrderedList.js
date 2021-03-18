import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
var styles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
};
var OrderedList = memo(forwardRef(function OrderedList(props, ref) {
  var children = props.children,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      rest = _objectWithoutProperties(props, ["children", "size"]);

  var finalChildren = React.Children.map(children, function (child) {
    if (!React.isValidElement(child)) {
      return child;
    }

    return React.cloneElement(child, {
      // Prefer more granularly defined icon if present
      size: child.props.size || size
    });
  });
  return React.createElement(Box, _extends({
    is: "ol"
  }, styles, rest, {
    ref: ref
  }), finalChildren);
}));
OrderedList.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600])
});
export default OrderedList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9PcmRlcmVkTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiUHJvcFR5cGVzIiwiQm94Iiwic3R5bGVzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiLCJPcmRlcmVkTGlzdCIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJzaXplIiwicmVzdCIsImZpbmFsQ2hpbGRyZW4iLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJwcm9wVHlwZXMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxNQUFNLEVBQUUsQ0FESztBQUViQyxFQUFBQSxVQUFVLEVBQUUsT0FGQztBQUdiQyxFQUFBQSxPQUFPLEVBQUUsQ0FISTtBQUliQyxFQUFBQSxTQUFTLEVBQUU7QUFKRSxDQUFmO0FBT0EsSUFBTUMsV0FBVyxHQUFHVCxJQUFJLENBQ3RCQyxVQUFVLENBQUMsU0FBU1EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQUEsTUFDbENDLFFBRGtDLEdBQ0FGLEtBREEsQ0FDbENFLFFBRGtDO0FBQUEsb0JBQ0FGLEtBREEsQ0FDeEJHLElBRHdCO0FBQUEsTUFDeEJBLElBRHdCLDRCQUNqQixHQURpQjtBQUFBLE1BQ1RDLElBRFMsNEJBQ0FKLEtBREE7O0FBRzFDLE1BQU1LLGFBQWEsR0FBR2hCLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkwsUUFBbkIsRUFBNkIsVUFBQU0sS0FBSyxFQUFJO0FBQzFELFFBQUksQ0FBQ25CLEtBQUssQ0FBQ29CLGNBQU4sQ0FBcUJELEtBQXJCLENBQUwsRUFBa0M7QUFDaEMsYUFBT0EsS0FBUDtBQUNEOztBQUVELFdBQU9uQixLQUFLLENBQUNxQixZQUFOLENBQW1CRixLQUFuQixFQUEwQjtBQUMvQjtBQUNBTCxNQUFBQSxJQUFJLEVBQUVLLEtBQUssQ0FBQ1IsS0FBTixDQUFZRyxJQUFaLElBQW9CQTtBQUZLLEtBQTFCLENBQVA7QUFJRCxHQVRxQixDQUF0QjtBQVdBLFNBQ0Usb0JBQUMsR0FBRDtBQUFLLElBQUEsRUFBRSxFQUFDO0FBQVIsS0FBaUJULE1BQWpCLEVBQTZCVSxJQUE3QjtBQUFtQyxJQUFBLEdBQUcsRUFBRUg7QUFBeEMsTUFDR0ksYUFESCxDQURGO0FBS0QsQ0FuQlMsQ0FEWSxDQUF4QjtBQXVCQU4sV0FBVyxDQUFDWSxTQUFaLG1DQUNLbEIsR0FBRyxDQUFDa0IsU0FEVDtBQUdFOzs7O0FBSUFSLEVBQUFBLElBQUksRUFBRVgsU0FBUyxDQUFDb0IsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFoQjtBQVBSO0FBVUEsZUFBZWIsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuY29uc3Qgc3R5bGVzID0ge1xuICBtYXJnaW46IDAsXG4gIG1hcmdpbkxlZnQ6ICcxLjFlbScsXG4gIHBhZGRpbmc6IDAsXG4gIGxpc3RTdHlsZTogJ2RlY2ltYWwnXG59XG5cbmNvbnN0IE9yZGVyZWRMaXN0ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBPcmRlcmVkTGlzdChwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc2l6ZSA9IDQwMCwgLi4ucmVzdCB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGZpbmFsQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIC8vIFByZWZlciBtb3JlIGdyYW51bGFybHkgZGVmaW5lZCBpY29uIGlmIHByZXNlbnRcbiAgICAgICAgc2l6ZTogY2hpbGQucHJvcHMuc2l6ZSB8fCBzaXplXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBpcz1cIm9sXCIgey4uLnN0eWxlc30gey4uLnJlc3R9IHJlZj17cmVmfT5cbiAgICAgICAge2ZpbmFsQ2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cbk9yZGVyZWRMaXN0LnByb3BUeXBlcyA9IHtcbiAgLi4uQm94LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgdGV4dCB1c2VkIGluIGEgbGlzdCBpdGVtLlxuICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMCwgNjAwXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJlZExpc3RcbiJdfQ==