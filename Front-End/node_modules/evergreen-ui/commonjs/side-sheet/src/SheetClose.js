"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _glamor = require("glamor");

var _icons = require("../../icons");

var _constants = require("../../constants");

var _sheetCloseStyles;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;
var sharedStyles = {
  padding: 4,
  borderRadius: 9999,
  position: 'absolute',
  cursor: 'pointer',
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  transition: "background-color 120ms",
  '&:hover': {
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },
  '&:active': {
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  }
};

var withAnimations = function withAnimations(animateIn, animateOut) {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: "".concat(animateIn, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]': {
      animation: "".concat(animateOut, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};

var sheetCloseStyles = (_sheetCloseStyles = {}, (0, _defineProperty2["default"])(_sheetCloseStyles, _constants.Position.RIGHT, _objectSpread({
  left: 0,
  marginLeft: -12,
  marginTop: 12,
  transform: "translateX(-100%)"
}, withAnimations(_glamor.css.keyframes('rotate360InAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%) rotate(-360deg)"
  }
}), _glamor.css.keyframes('rotate360OutAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%) rotate(360deg)"
  }
})))), (0, _defineProperty2["default"])(_sheetCloseStyles, _constants.Position.LEFT, _objectSpread({
  marginRight: -12,
  right: 0,
  marginTop: 12,
  transform: "translateX(100%)"
}, withAnimations(_glamor.css.keyframes('leftRotate360InAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%), rotate(360deg)"
  }
}), _glamor.css.keyframes('leftRotate360OutAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%), rotate(360deg)"
  }
})))), (0, _defineProperty2["default"])(_sheetCloseStyles, _constants.Position.TOP, _objectSpread({
  right: 0,
  marginRight: 12,
  top: '100%',
  marginTop: 12,
  transform: "translateY(0)"
}, withAnimations(_glamor.css.keyframes('topRotate360InAnimation', {
  from: {
    transform: "translateY(-200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), _glamor.css.keyframes('topRotate360OutAnimation', {
  from: {
    transform: "translateY(0%) rotate(0deg)"
  },
  to: {
    transform: "translateY(-200%), rotate(360deg)"
  }
})))), (0, _defineProperty2["default"])(_sheetCloseStyles, _constants.Position.BOTTOM, _objectSpread({
  right: 0,
  marginRight: 12,
  bottom: '100%',
  marginBottom: 12,
  transform: "translateY(0)"
}, withAnimations(_glamor.css.keyframes('bottomRotate360InAnimation', {
  from: {
    transform: "translateY(200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), _glamor.css.keyframes('bottomRotate360OutAnimation', {
  from: {
    transform: "translateY(0%) rotate(0deg)"
  },
  to: {
    transform: "translateY(200%), rotate(360deg)"
  }
})))), _sheetCloseStyles);
var sheetCloseClassNameCache = {};

var getSheetCloseClassName = function getSheetCloseClassName(position) {
  if (!sheetCloseClassNameCache[position]) {
    sheetCloseClassNameCache[position] = (0, _glamor.css)(_objectSpread(_objectSpread({}, sheetCloseStyles[position]), sharedStyles)).toString();
  }

  return sheetCloseClassNameCache[position];
};

var SheetClose = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SheetClose, _PureComponent);

  var _super = _createSuper(SheetClose);

  function SheetClose() {
    (0, _classCallCheck2["default"])(this, SheetClose);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SheetClose, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isClosing = _this$props.isClosing,
          position = _this$props.position,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["isClosing", "position"]);
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        className: getSheetCloseClassName(position)
      }, props), _react["default"].createElement(_icons.CrossIcon, {
        color: "#fff"
      }));
    }
  }]);
  return SheetClose;
}(_react.PureComponent);

exports["default"] = SheetClose;
SheetClose.displayName = "SheetClose";
(0, _defineProperty2["default"])(SheetClose, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  isClosing: _propTypes["default"].bool,
  position: _propTypes["default"].oneOf([_constants.Position.LEFT, _constants.Position.RIGHT, _constants.Position.TOP, _constants.Position.BOTTOM]).isRequired
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaGVldENsb3NlLmpzIl0sIm5hbWVzIjpbImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsIkFOSU1BVElPTl9EVVJBVElPTiIsInNoYXJlZFN0eWxlcyIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJ3aXRoQW5pbWF0aW9ucyIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRpb24iLCJzaGVldENsb3NlU3R5bGVzIiwiUG9zaXRpb24iLCJSSUdIVCIsImxlZnQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwidHJhbnNmb3JtIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRvIiwiTEVGVCIsIm1hcmdpblJpZ2h0IiwicmlnaHQiLCJUT1AiLCJ0b3AiLCJCT1RUT00iLCJib3R0b20iLCJtYXJnaW5Cb3R0b20iLCJzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGUiLCJnZXRTaGVldENsb3NlQ2xhc3NOYW1lIiwidG9TdHJpbmciLCJTaGVldENsb3NlIiwicHJvcHMiLCJpc0Nsb3NpbmciLCJQdXJlQ29tcG9uZW50IiwiQm94IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsWUFBWSxrQ0FEVTtBQUV0QkMsRUFBQUEsWUFBWTtBQUZVLENBQXhCO0FBS0EsSUFBTUMsa0JBQWtCLEdBQUcsR0FBM0I7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLEVBQUFBLE9BQU8sRUFBRSxDQURVO0FBRW5CQyxFQUFBQSxZ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O0FBQUEsVUFDQ0MsU0FERCxlQUNDQSxTQUREO0FBQUEsVUFDWWhDLFFBRFosZUFDWUEsUUFEWjtBQUFBLFVBQ3lCK0IsS0FEekI7QUFFUCxhQUNFLGdDQUFDLGlCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUUsRUFEVDtBQUVFLFFBQUEsTUFBTSxFQUFFLEVBRlY7QUFHRSxRQUFBLE9BQU8sRUFBQyxNQUhWO0FBSUUsUUFBQSxVQUFVLEVBQUMsUUFKYjtBQUtFLFFBQUEsY0FBYyxFQUFDLFFBTGpCO0FBTUUsUUFBQSxTQUFTLEVBQUVILHNCQUFzQixDQUFDNUIsUUFBRDtBQU5uQyxTQU9NK0IsS0FQTixHQVNFLGdDQUFDLGdCQUFEO0FBQVcsUUFBQSxLQUFLLEVBQUM7QUFBakIsUUFURixDQURGO0FBYUQ7OztFQTNCcUNFLG9COzs7QUFBbkJILFU7aUNBQUFBLFUsK0NBRWRJLGtCQUFJQyxTO0FBQ1BILEVBQUFBLFNBQVMsRUFBRUksc0JBQVVDLEk7QUFDckJyQyxFQUFBQSxRQUFRLEVBQUVvQyxzQkFBVUUsS0FBVixDQUFnQixDQUN4QjdCLG9CQUFTVSxJQURlLEVBRXhCVixvQkFBU0MsS0FGZSxFQUd4QkQsb0JBQVNhLEdBSGUsRUFJeEJiLG9CQUFTZSxNQUplLENBQWhCLEVBS1BlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3Qgc2hhcmVkU3R5bGVzID0ge1xuICBwYWRkaW5nOiA0LFxuICBib3JkZXJSYWRpdXM6IDk5OTksXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpYCxcbiAgdHJhbnNpdGlvbjogYGJhY2tncm91bmQtY29sb3IgMTIwbXNgLFxuICAnJjpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilgXG4gIH0sXG4gICcmOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClgXG4gIH1cbn1cblxuY29uc3Qgd2l0aEFuaW1hdGlvbnMgPSAoYW5pbWF0ZUluLCBhbmltYXRlT3V0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgICAgYW5pbWF0aW9uOiBgJHthbmltYXRlSW59ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvbn0gYm90aGBcbiAgICB9LFxuICAgICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgICAgYW5pbWF0aW9uOiBgJHthbmltYXRlT3V0fSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNoZWV0Q2xvc2VTdHlsZXMgPSB7XG4gIFtQb3NpdGlvbi5SSUdIVF06IHtcbiAgICBsZWZ0OiAwLFxuICAgIG1hcmdpbkxlZnQ6IC0xMixcbiAgICBtYXJnaW5Ub3A6IDEyLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ3JvdGF0ZTM2MEluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoLTM2MGRlZylgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygncm90YXRlMzYwT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIG1hcmdpblJpZ2h0OiAtMTIsXG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luVG9wOiAxMixcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2xlZnRSb3RhdGUzNjBJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2xlZnRSb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5UT1BdOiB7XG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IDEyLFxuICAgIHRvcDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogMTIsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCd0b3BSb3RhdGUzNjBJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0yMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCd0b3BSb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0yMDAlKSwgcm90YXRlKDM2MGRlZylgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uQk9UVE9NXToge1xuICAgIHJpZ2h0OiAwLFxuICAgIG1hcmdpblJpZ2h0OiAxMixcbiAgICBib3R0b206ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IDEyLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnYm90dG9tUm90YXRlMzYwSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgyMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdib3R0b21Sb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDIwMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc2hlZXRDbG9zZUNsYXNzTmFtZUNhY2hlID0ge31cblxuY29uc3QgZ2V0U2hlZXRDbG9zZUNsYXNzTmFtZSA9IHBvc2l0aW9uID0+IHtcbiAgaWYgKCFzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGVbcG9zaXRpb25dKSB7XG4gICAgc2hlZXRDbG9zZUNsYXNzTmFtZUNhY2hlW3Bvc2l0aW9uXSA9IGNzcyh7XG4gICAgICAuLi5zaGVldENsb3NlU3R5bGVzW3Bvc2l0aW9uXSxcbiAgICAgIC4uLnNoYXJlZFN0eWxlc1xuICAgIH0pLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiBzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGVbcG9zaXRpb25dXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWV0Q2xvc2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuICAgIGlzQ2xvc2luZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFQsXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5CT1RUT01cbiAgICBdKS5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0Nsb3NpbmcsIHBvc2l0aW9uLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2dldFNoZWV0Q2xvc2VDbGFzc05hbWUocG9zaXRpb24pfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxDcm9zc0ljb24gY29sb3I9XCIjZmZmXCIgLz5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl19