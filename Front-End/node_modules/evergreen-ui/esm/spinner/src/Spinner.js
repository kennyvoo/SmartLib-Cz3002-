import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState, useEffect, forwardRef, memo } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
var loadingKeyframes = css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});
var loadingCircleKeyframes = css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
});
var outerClass = css({
  animation: "".concat(loadingKeyframes, " 2s linear infinite")
}).toString();

var innerClass = function innerClass(color) {
  return css({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: "".concat(loadingCircleKeyframes, " 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite"),
    stroke: color,
    fill: 'transparent'
  }).toString();
};

var Spinner = memo(forwardRef(function Spinner(_ref, ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      props = _objectWithoutProperties(_ref, ["delay", "size"]);

  var theme = useTheme();

  var _useState = useState(delay === 0),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  useEffect(function () {
    var delayTimer = null;

    if (delay > 0) {
      delayTimer = setTimeout(function () {
        setIsVisible(true);
      }, delay);
    }

    return function () {
      clearTimeout(delayTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return React.createElement(Box, _extends({
    width: size,
    height: size,
    lineHeight: 0
  }, props, {
    ref: ref
  }), React.createElement(Box, {
    is: "svg",
    className: outerClass,
    x: "0px",
    y: "0px",
    viewBox: "0 0 150 150"
  }, React.createElement(Box, {
    is: "circle",
    className: innerClass(theme.spinnerColor),
    cx: "75",
    cy: "75",
    r: "60"
  })));
}));
Spinner.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: PropTypes.number,

  /**
   * The size of the spinner.
   */
  size: PropTypes.number
});
export default Spinner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGlubmVyL3NyYy9TcGlubmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmb3J3YXJkUmVmIiwibWVtbyIsImNzcyIsIlByb3BUeXBlcyIsIkJveCIsInVzZVRoZW1lIiwibG9hZGluZ0tleWZyYW1lcyIsImtleWZyYW1lcyIsInRyYW5zZm9ybSIsImxvYWRpbmdDaXJjbGVLZXlmcmFtZXMiLCJzdHJva2VEYXNob2Zmc2V0Iiwib3V0ZXJDbGFzcyIsImFuaW1hdGlvbiIsInRvU3RyaW5nIiwiaW5uZXJDbGFzcyIsImNvbG9yIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZSIsImZpbGwiLCJTcGlubmVyIiwicmVmIiwiZGVsYXkiLCJzaXplIiwicHJvcHMiLCJ0aGVtZSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImRlbGF5VGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3Bpbm5lckNvbG9yIiwicHJvcFR5cGVzIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixFQUEwQkMsU0FBMUIsRUFBcUNDLFVBQXJDLEVBQWlEQyxJQUFqRCxRQUE2RCxPQUE3RDtBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBR0osR0FBRyxDQUFDSyxTQUFKLENBQWMsU0FBZCxFQUF5QjtBQUNoRCxRQUFNO0FBQ0pDLElBQUFBLFNBQVMsRUFBRTtBQURQLEdBRDBDO0FBSWhELFVBQVE7QUFDTkEsSUFBQUEsU0FBUyxFQUFFO0FBREw7QUFKd0MsQ0FBekIs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RUFBQUEsS0FBSyxFQUFFckIsU0FBUyxDQUFDZ0MsTUFUbkI7O0FBV0U7OztBQUdBVixFQUFBQSxJQUFJLEVBQUV0QixTQUFTLENBQUNnQztBQWRsQjtBQWlCQSxlQUFlYixPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgbG9hZGluZ0tleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXMoJ2xvYWRpbmcnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMCknXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJ1xuICB9XG59KVxuXG5jb25zdCBsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzID0gY3NzLmtleWZyYW1lcygnbG9hZGluZy1jaXJjbGUnLCB7XG4gICcwJSc6IHtcbiAgICBzdHJva2VEYXNob2Zmc2V0OiA2MDBcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgc3Ryb2tlRGFzaG9mZnNldDogMFxuICB9XG59KVxuXG5jb25zdCBvdXRlckNsYXNzID0gY3NzKHtcbiAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nS2V5ZnJhbWVzfSAycyBsaW5lYXIgaW5maW5pdGVgXG59KS50b1N0cmluZygpXG5cbmNvbnN0IGlubmVyQ2xhc3MgPSBjb2xvciA9PlxuICBjc3Moe1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDYwMCxcbiAgICBzdHJva2VEYXNoYXJyYXk6IDMwMCxcbiAgICBzdHJva2VXaWR0aDogMTIsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXG4gICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICBhbmltYXRpb246IGAke2xvYWRpbmdDaXJjbGVLZXlmcmFtZXN9IDEuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMC4xNSwgMC42LCAwLjg1KSBpbmZpbml0ZWAsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBmaWxsOiAndHJhbnNwYXJlbnQnXG4gIH0pLnRvU3RyaW5nKClcblxuY29uc3QgU3Bpbm5lciA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gU3Bpbm5lcih7IGRlbGF5ID0gMCwgc2l6ZSA9IDQwLCAuLi5wcm9wcyB9LCByZWYpIHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZGVsYXkgPT09IDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGRlbGF5VGltZXIgPSBudWxsXG4gICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgIGRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSlcbiAgICAgICAgfSwgZGVsYXkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGRlbGF5VGltZXIpXG4gICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBpZiAoIWlzVmlzaWJsZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSBsaW5lSGVpZ2h0PXswfSB7Li4ucHJvcHN9IHJlZj17cmVmfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlzPVwic3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9e291dGVyQ2xhc3N9XG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxNTAgMTUwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGlzPVwiY2lyY2xlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5uZXJDbGFzcyh0aGVtZS5zcGlubmVyQ29sb3IpfVxuICAgICAgICAgICAgY3g9XCI3NVwiXG4gICAgICAgICAgICBjeT1cIjc1XCJcbiAgICAgICAgICAgIHI9XCI2MFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIEJveCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBEZWxheSBhZnRlciB3aGljaCBzcGlubmVyIHNob3VsZCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBzcGlubmVyLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyXG4iXX0=