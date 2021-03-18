import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _sheetCloseStyles;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { css } from 'glamor';
import { CrossIcon } from '../../icons';
import { Position } from '../../constants';
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

var sheetCloseStyles = (_sheetCloseStyles = {}, _defineProperty(_sheetCloseStyles, Position.RIGHT, _objectSpread({
  left: 0,
  marginLeft: -12,
  marginTop: 12,
  transform: "translateX(-100%)"
}, withAnimations(css.keyframes('rotate360InAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%) rotate(-360deg)"
  }
}), css.keyframes('rotate360OutAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%) rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.LEFT, _objectSpread({
  marginRight: -12,
  right: 0,
  marginTop: 12,
  transform: "translateX(100%)"
}, withAnimations(css.keyframes('leftRotate360InAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%), rotate(360deg)"
  }
}), css.keyframes('leftRotate360OutAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%), rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.TOP, _objectSpread({
  right: 0,
  marginRight: 12,
  top: '100%',
  marginTop: 12,
  transform: "translateY(0)"
}, withAnimations(css.keyframes('topRotate360InAnimation', {
  from: {
    transform: "translateY(-200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), css.keyframes('topRotate360OutAnimation', {
  from: {
    transform: "translateY(0%) rotate(0deg)"
  },
  to: {
    transform: "translateY(-200%), rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.BOTTOM, _objectSpread({
  right: 0,
  marginRight: 12,
  bottom: '100%',
  marginBottom: 12,
  transform: "translateY(0)"
}, withAnimations(css.keyframes('bottomRotate360InAnimation', {
  from: {
    transform: "translateY(200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), css.keyframes('bottomRotate360OutAnimation', {
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
    sheetCloseClassNameCache[position] = css(_objectSpread(_objectSpread({}, sheetCloseStyles[position]), sharedStyles)).toString();
  }

  return sheetCloseClassNameCache[position];
};

var SheetClose = /*#__PURE__*/function (_PureComponent) {
  _inherits(SheetClose, _PureComponent);

  var _super = _createSuper(SheetClose);

  function SheetClose() {
    _classCallCheck(this, SheetClose);

    return _super.apply(this, arguments);
  }

  _createClass(SheetClose, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isClosing = _this$props.isClosing,
          position = _this$props.position,
          props = _objectWithoutProperties(_this$props, ["isClosing", "position"]);

      return React.createElement(Box, _extends({
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        className: getSheetCloseClassName(position)
      }, props), React.createElement(CrossIcon, {
        color: "#fff"
      }));
    }
  }]);

  return SheetClose;
}(PureComponent);

SheetClose.displayName = "SheetClose";

_defineProperty(SheetClose, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  isClosing: PropTypes.bool,
  position: PropTypes.oneOf([Position.LEFT, Position.RIGHT, Position.TOP, Position.BOTTOM]).isRequired
}));

export { SheetClose as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaGVldENsb3NlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsImNzcyIsIkNyb3NzSWNvbiIsIlBvc2l0aW9uIiwiYW5pbWF0aW9uRWFzaW5nIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwic2hhcmVkU3R5bGVzIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsIndpdGhBbmltYXRpb25zIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsImFuaW1hdGlvbiIsInNoZWV0Q2xvc2VTdHlsZXMiLCJSSUdIVCIsImxlZnQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwidHJhbnNmb3JtIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRvIiwiTEVGVCIsIm1hcmdpblJpZ2h0IiwicmlnaHQiLCJUT1AiLCJ0b3AiLCJCT1RUT00iLCJib3R0b20iLCJtYXJnaW5Cb3R0b20iLCJzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGUiLCJnZXRTaGVldENsb3NlQ2xhc3NOYW1lIiwidG9TdHJpbmciLCJTaGVldENsb3NlIiwicHJvcHMiLCJpc0Nsb3NpbmciLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixpQkFBekI7QUFFQSxJQUFNQyxlQUFlLEdB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YWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCBzaGFyZWRTdHlsZXMgPSB7XG4gIHBhZGRpbmc6IDQsXG4gIGJvcmRlclJhZGl1czogOTk5OSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClgLFxuICB0cmFuc2l0aW9uOiBgYmFja2dyb3VuZC1jb2xvciAxMjBtc2AsXG4gICcmOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KWBcbiAgfSxcbiAgJyY6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KWBcbiAgfVxufVxuXG5jb25zdCB3aXRoQW5pbWF0aW9ucyA9IChhbmltYXRlSW4sIGFuaW1hdGVPdXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVJbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9ufSBib3RoYFxuICAgIH0sXG4gICAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVPdXR9ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvbn0gYm90aGBcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc2hlZXRDbG9zZVN0eWxlcyA9IHtcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIGxlZnQ6IDAsXG4gICAgbWFyZ2luTGVmdDogLTEyLFxuICAgIG1hcmdpblRvcDogMTIsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygncm90YXRlMzYwSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgtMzYwZGVnKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdyb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgbWFyZ2luUmlnaHQ6IC0xMixcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW5Ub3A6IDEyLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnbGVmdFJvdGF0ZTM2MEluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSwgcm90YXRlKDM2MGRlZylgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnbGVmdFJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW5SaWdodDogMTIsXG4gICAgdG9wOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiAxMixcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ3RvcFJvdGF0ZTM2MEluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTIwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ3RvcFJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTIwMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IDEyLFxuICAgIGJvdHRvbTogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdib3R0b21Sb3RhdGUzNjBJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDIwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2JvdHRvbVJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMjAwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGUgPSB7fVxuXG5jb25zdCBnZXRTaGVldENsb3NlQ2xhc3NOYW1lID0gcG9zaXRpb24gPT4ge1xuICBpZiAoIXNoZWV0Q2xvc2VDbGFzc05hbWVDYWNoZVtwb3NpdGlvbl0pIHtcbiAgICBzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGVbcG9zaXRpb25dID0gY3NzKHtcbiAgICAgIC4uLnNoZWV0Q2xvc2VTdHlsZXNbcG9zaXRpb25dLFxuICAgICAgLi4uc2hhcmVkU3R5bGVzXG4gICAgfSkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHNoZWV0Q2xvc2VDbGFzc05hbWVDYWNoZVtwb3NpdGlvbl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hlZXRDbG9zZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG4gICAgaXNDbG9zaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVCxcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTVxuICAgIF0pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzQ2xvc2luZywgcG9zaXRpb24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U2hlZXRDbG9zZUNsYXNzTmFtZShwb3NpdGlvbil9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPENyb3NzSWNvbiBjb2xvcj1cIiNmZmZcIiAvPlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG4iXX0=