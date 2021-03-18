"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var loadingKeyframes = _glamor.css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

var loadingCircleKeyframes = _glamor.css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
});

var outerClass = (0, _glamor.css)({
  animation: "".concat(loadingKeyframes, " 2s linear infinite")
}).toString();

var innerClass = function innerClass(color) {
  return (0, _glamor.css)({
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

var Spinner = (0, _react.memo)((0, _react.forwardRef)(function Spinner(_ref, ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["delay", "size"]);
  var theme = (0, _theme.useTheme)();

  var _useState = (0, _react.useState)(delay === 0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  (0, _react.useEffect)(function () {
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

  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    width: size,
    height: size,
    lineHeight: 0
  }, props, {
    ref: ref
  }), _react["default"].createElement(_uiBox["default"], {
    is: "svg",
    className: outerClass,
    x: "0px",
    y: "0px",
    viewBox: "0 0 150 150"
  }, _react["default"].createElement(_uiBox["default"], {
    is: "circle",
    className: innerClass(theme.spinnerColor),
    cx: "75",
    cy: "75",
    r: "60"
  })));
}));
Spinner.propTypes = _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: _propTypes["default"].number,

  /**
   * The size of the spinner.
   */
  size: _propTypes["default"].number
});
var _default = Spinner;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGlubmVyL3NyYy9TcGlubmVyLmpzIl0sIm5hbWVzIjpbImxvYWRpbmdLZXlmcmFtZXMiLCJjc3MiLCJrZXlmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzIiwic3Ryb2tlRGFzaG9mZnNldCIsIm91dGVyQ2xhc3MiLCJhbmltYXRpb24iLCJ0b1N0cmluZyIsImlubmVyQ2xhc3MiLCJjb2xvciIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2UiLCJmaWxsIiwiU3Bpbm5lciIsInJlZiIsImRlbGF5Iiwic2l6ZSIsInByb3BzIiwidGhlbWUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJkZWxheVRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNwaW5uZXJDb2xvciIsInByb3BUeXBlcyIsIkJveCIsIlByb3BUeXBlcyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsWUFBSUMsU0FBSixDQUFjLFNBQWQsRUFBeUI7QUFDaEQsUUFBTTtBQUNKQyxJQUFBQSxTQUFTLEVBQUU7QUFEUCxHQUQwQztBQUloRCxVQUFRO0FBQ05BLElBQUFBLFNBQVMsRUFBRTtBQURMO0FBSndDLENBQXpCLENBQXpCOztBQVNBLElBQU1DLHNCQUFzQixHQUFHSCxZQUFJQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0M7QUFDN0QsUUFBTTtBQUNKRyxJQUFBQSxnQkFBZ0IsRUFBRTtBQURkLEdBRHVEO0FBSTdELFVBQVE7QUFDTkEsSUFBQUEsZ0JBQWdCLEVBQUU7QUFEWjtBQUpxRCxDQUFoQyxDQUEvQjs7QUFTQSxJQUFNQyxVQUFVLEdBQUcsaUJBQUk7QUFDckJDLEVBQUFBLFNBQVMsWUFBS1AsZ0JBQUw7QUFEWSxDQUFKLEVBRWhCUSxRQUZnQixFQUFuQjs7QUFJQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FDdEIsaUJBQUk7QUFDRkwsSUFBQUEsZ0JBQWdCLEVBQUUsR0FEaEI7QUFFRk0sSUFBQUEsZUFBZSxFQUFFLEdBRmY7QUFHRkMsSUFBQUEsV0FBVyxFQUFFLEVBSFg7QUFJRkMsSUFBQUEsZ0JBQWdCLEVBQUUsRUFKaEI7QUFLRkMsSUFBQUEsYUFBYSxFQUFFLE9BTGI7QUFNRlAsSUFBQUEsU0FBUyxZQUFLSCxzQkFBTCxzREFOUDtBQU9GVyxJQUFBQSxNQUFNLEVBQUVMLEtBUE47QUFRRk0sSUFBQUEsSUFBSSxFQUFFO0FBUkosR0FBSixFQVNHUixRQVRILEVBRHNCO0FBQUEsQ0FBeEI7O0FBWUEsSUFBTVMsT0FBTyxHQUFHLGlCQUNkLHVCQUFXLFNBQVNBLE9BQVQsT0FBcURDLEdBQXJELEVBQTBEO0FBQUEsd0JBQXZDQyxLQUF1QztBQUFBLE1BQXZDQSxLQUF1QywyQkFBL0IsQ0FBK0I7QUFBQSx1QkFBNUJDLElBQTRCO0FBQUEsTUFBNUJBLElBQTRCLDBCQUFyQixFQUFxQjtBQUFBLE1BQWRDLEtBQWM7QUFDbkUsTUFBTUMsS0FBSyxHQUFHLHNCQUFkOztBQURtRSxrQkFFakMscUJBQVNILEtBQUssS0FBSyxDQUFuQixDQUZpQztBQUFBO0FBQUEsTUFFNURJLFNBRjREO0FBQUEsTUFFakRDLFlBRmlEOztBQUluRSx3QkFBVSxZQUFNO0FBQ2QsUUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBLFFBQUlOLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYk0sTUFBQUEsVUFBVSxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUM1QkYsUUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELE9BRnNCLEVBRXBCTCxLQUZvQixDQUF2QjtBQUdEOztBQUVELFdBQU8sWUFBVztBQUNoQlEsTUFBQUEsWUFBWSxDQUFDRixVQUFELENBQVo7QUFDRCxLQUZEO0FBR0QsR0FYRCxFQVdHLEVBWEg7O0FBYUEsTUFBSSxDQUFDRixTQUFMLEVBQWdCO0FBQ2QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRSxnQ0FBQyxpQkFBRDtBQUFLLElBQUEsS0FBSyxFQUFFSCxJQUFaO0FBQWtCLElBQUEsTUFBTSxFQUFFQSxJQUExQjtBQUFnQyxJQUFBLFVBQVUsRUFBRTtBQUE1QyxLQUFtREMsS0FBbkQ7QUFBMEQsSUFBQSxHQUFHLEVBQUVIO0FBQS9ELE1BQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxLQURMO0FBRUUsSUFBQSxTQUFTLEVBQUVaLFVBRmI7QUFHRSxJQUFBLENBQUMsRUFBQyxLQUhKO0FBSUUsSUFBQSxDQUFDLEVBQUMsS0FKSjtBQUtFLElBQUEsT0FBTyxFQUFDO0FBTFYsS0FPRSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLFFBREw7QUFFRSxJQUFBLFNBQVMsRUFBRUcsVUFBVSxDQUFDYSxLQUFLLENBQUNNLFlBQVAsQ0FGdkI7QUFHRSxJQUFBLEVBQUUsRUFBQyxJQUhMO0FBSUUsSUFBQSxFQUFFLEVBQUMsSUFKTDtBQUtFLElBQUEsQ0FBQyxFQUFDO0FBTEosSUFQRixDQURGLENBREY7QUFtQkQsQ0F4Q0QsQ0FEYyxDQUFoQjtBQTRDQVgsT0FBTyxDQUFDWSxTQUFSLG1DQUlLQyxrQkFBSUQsU0FKVDtBQU1FOzs7QUFHQVYsRUFBQUEsS0FBSyxFQUFFWSxzQkFBVUMsTUFUbkI7O0FBV0U7OztBQUdBWixFQUFBQSxJQUFJLEVBQUVXLHNCQUFVQztBQWRsQjtlQWlCZWYsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxvYWRpbmdLZXlmcmFtZXMgPSBjc3Mua2V5ZnJhbWVzKCdsb2FkaW5nJywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDApJ1xuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKSdcbiAgfVxufSlcblxuY29uc3QgbG9hZGluZ0NpcmNsZUtleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXMoJ2xvYWRpbmctY2lyY2xlJywge1xuICAnMCUnOiB7XG4gICAgc3Ryb2tlRGFzaG9mZnNldDogNjAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDBcbiAgfVxufSlcblxuY29uc3Qgb3V0ZXJDbGFzcyA9IGNzcyh7XG4gIGFuaW1hdGlvbjogYCR7bG9hZGluZ0tleWZyYW1lc30gMnMgbGluZWFyIGluZmluaXRlYFxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBpbm5lckNsYXNzID0gY29sb3IgPT5cbiAgY3NzKHtcbiAgICBzdHJva2VEYXNob2Zmc2V0OiA2MDAsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiAzMDAsXG4gICAgc3Ryb2tlV2lkdGg6IDEyLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxuICAgIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzfSAxLjZzIGN1YmljLWJlemllcigwLjQsIDAuMTUsIDAuNiwgMC44NSkgaW5maW5pdGVgLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgZmlsbDogJ3RyYW5zcGFyZW50J1xuICB9KS50b1N0cmluZygpXG5cbmNvbnN0IFNwaW5uZXIgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFNwaW5uZXIoeyBkZWxheSA9IDAsIHNpemUgPSA0MCwgLi4ucHJvcHMgfSwgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGRlbGF5ID09PSAwKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBkZWxheVRpbWVyID0gbnVsbFxuICAgICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgICBkZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpXG4gICAgICAgIH0sIGRlbGF5KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChkZWxheVRpbWVyKVxuICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgaWYgKCFpc1Zpc2libGUpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gbGluZUhlaWdodD17MH0gey4uLnByb3BzfSByZWY9e3JlZn0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpcz1cInN2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtvdXRlckNsYXNzfVxuICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBpcz1cImNpcmNsZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2lubmVyQ2xhc3ModGhlbWUuc3Bpbm5lckNvbG9yKX1cbiAgICAgICAgICAgIGN4PVwiNzVcIlxuICAgICAgICAgICAgY3k9XCI3NVwiXG4gICAgICAgICAgICByPVwiNjBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9KVxuKVxuXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBCb3ggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uQm94LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogRGVsYXkgYWZ0ZXIgd2hpY2ggc3Bpbm5lciBzaG91bGQgYmUgdmlzaWJsZS5cbiAgICovXG4gIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgc3Bpbm5lci5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuIl19