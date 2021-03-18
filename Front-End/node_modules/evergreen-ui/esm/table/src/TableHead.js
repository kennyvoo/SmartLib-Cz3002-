import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import ScrollbarSize from './ScrollbarSize';
var TableHead = memo(function TableHead(props) {
  var children = props.children,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$accountForScro = props.accountForScrollbar,
      accountForScrollbar = _props$accountForScro === void 0 ? true : _props$accountForScro,
      rest = _objectWithoutProperties(props, ["children", "height", "accountForScrollbar"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      scrollbarWidth = _useState2[0],
      setScrollBarWidth = _useState2[1];

  var handleScrollbarSize = useCallback(function (width) {
    setScrollBarWidth(width);
  });
  return React.createElement(Pane, _extends({
    display: "flex",
    flexShrink: 0,
    paddingRight: scrollbarWidth,
    borderBottom: "default",
    background: "tint2",
    height: height
  }, rest), children, ' ', accountForScrollbar && React.createElement(ScrollbarSize, {
    handleScrollbarSize: handleScrollbarSize
  }));
});
TableHead.propTypes = _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * The height of the table head.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: PropTypes.bool
});
export default TableHead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJQcm9wVHlwZXMiLCJQYW5lIiwiU2Nyb2xsYmFyU2l6ZSIsIlRhYmxlSGVhZCIsInByb3BzIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJhY2NvdW50Rm9yU2Nyb2xsYmFyIiwicmVzdCIsInNjcm9sbGJhcldpZHRoIiwic2V0U2Nyb2xsQmFyV2lkdGgiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwid2lkdGgiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsUUFBdEIsRUFBZ0NDLFdBQWhDLFFBQW1ELE9BQW5EO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjtBQUVBLElBQU1DLFNBQVMsR0FBR04sSUFBSSxDQUFDLFNBQVNNLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDdkNDLFFBRHVDLEdBQ3dCRCxLQUR4QixDQUN2Q0MsUUFEdUM7QUFBQSxzQkFDd0JELEtBRHhCLENBQzdCRSxNQUQ2QjtBQUFBLE1BQzdCQSxNQUQ2Qiw4QkFDcEIsRUFEb0I7QUFBQSw4QkFDd0JGLEtBRHhCLENBQ2hCRyxtQkFEZ0I7QUFBQSxNQUNoQkEsbUJBRGdCLHNDQUNNLElBRE47QUFBQSxNQUNlQyxJQURmLDRCQUN3QkosS0FEeEI7O0FBQUEsa0JBRUhOLFFBQVEsQ0FBQyxDQUFELENBRkw7QUFBQTtBQUFBLE1BRXhDVyxjQUZ3QztBQUFBLE1BRXhCQyxpQkFGd0I7O0FBSS9DLE1BQU1DLG1CQUFtQixHQUFHWixXQUFXLENBQUMsVUFBQWEsS0FBSyxFQUFJO0FBQy9DRixJQUFBQSxpQkFBaUIsQ0FBQ0UsS0FBRCxDQUFqQjtBQUNELEdBRnNDLENBQXZDO0FBSUEsU0FDRSxvQkFBQyxJQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUMsTUFEVjtBQUVFLElBQUEsVUFBVSxFQUFFLENBRmQ7QUFHRSxJQUFBLFlBQVksRUFBRUgsY0FIaEI7QUFJRSxJQUFBLFlBQVksRUFBQyxTQUpmO0FBS0UsSUFBQSxVQUFVLEVBQUMsT0FMYjtBQU1FLElBQUEsTUFBTSxFQUFFSDtBQU5WLEtBT01FLElBUE4sR0FTR0gsUUFUSCxFQVNhLEdBVGIsRUFVR0UsbUJBQW1CLElBQ2xCLG9CQUFDLGFBQUQ7QUFBZSxJQUFBLG1CQUFtQixFQUFFSTtBQUFwQyxJQVhKLENBREY7QUFnQkQsQ0F4QnFCLENBQXRCO0FBMEJBUixTQUFTLENBQUNVLFNBQVYsbUNBSUtaLElBQUksQ0FBQ1ksU0FKVjtBQU1FOzs7QUFHQVAsRUFBQUEsTUFBTSxFQUFFTixTQUFTLENBQUNjLFNBQVYsQ0FBb0IsQ0FBQ2QsU0FBUyxDQUFDZSxNQUFYLEVBQW1CZixTQUFTLENBQUNnQixNQUE3QixDQUFwQixDQVRWOztBQVdFOzs7O0FBSUFULEVBQUFBLG1CQUFtQixFQUFFUCxTQUFTLENBQUNpQjtBQWZqQztBQWtCQSxlQUFlZCxTQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBTY3JvbGxiYXJTaXplIGZyb20gJy4vU2Nyb2xsYmFyU2l6ZSdcblxuY29uc3QgVGFibGVIZWFkID0gbWVtbyhmdW5jdGlvbiBUYWJsZUhlYWQocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgaGVpZ2h0ID0gMzIsIGFjY291bnRGb3JTY3JvbGxiYXIgPSB0cnVlLCAuLi5yZXN0IH0gPSBwcm9wc1xuICBjb25zdCBbc2Nyb2xsYmFyV2lkdGgsIHNldFNjcm9sbEJhcldpZHRoXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsYmFyU2l6ZSA9IHVzZUNhbGxiYWNrKHdpZHRoID0+IHtcbiAgICBzZXRTY3JvbGxCYXJXaWR0aCh3aWR0aClcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxQYW5lXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgcGFkZGluZ1JpZ2h0PXtzY3JvbGxiYXJXaWR0aH1cbiAgICAgIGJvcmRlckJvdHRvbT1cImRlZmF1bHRcIlxuICAgICAgYmFja2dyb3VuZD1cInRpbnQyXCJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufXsnICd9XG4gICAgICB7YWNjb3VudEZvclNjcm9sbGJhciAmJiAoXG4gICAgICAgIDxTY3JvbGxiYXJTaXplIGhhbmRsZVNjcm9sbGJhclNpemU9e2hhbmRsZVNjcm9sbGJhclNpemV9IC8+XG4gICAgICApfVxuICAgIDwvUGFuZT5cbiAgKVxufSlcblxuVGFibGVIZWFkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBQYW5lIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB0YWJsZSBoZWFkLlxuICAgKi9cbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSB0cnVlIGlmIHlvdSBhcmUgdXNpbmcgVGFibGVIZWFkIHRvZ2V0aGVyIHdpdGggYSBUYWJsZUJvZHkuXG4gICAqIEJlY2F1c2UgVGFibGVCb2R5IGhhcyBgb3ZlcmZsb3dZOiBzY3JvbGxgIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBhY2NvdW50Rm9yU2Nyb2xsYmFyOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUhlYWRcbiJdfQ==