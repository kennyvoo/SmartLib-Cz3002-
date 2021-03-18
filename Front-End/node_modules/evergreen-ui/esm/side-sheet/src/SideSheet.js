import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _paneProps, _subpaneProps, _animationStylesClass;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Overlay } from '../../overlay';
import { Position } from '../../constants';
import SheetClose from './SheetClose';
var paneProps = (_paneProps = {}, _defineProperty(_paneProps, Position.LEFT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  left: 0,
  right: 'auto'
}), _defineProperty(_paneProps, Position.RIGHT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  right: 0,
  left: 'auto'
}), _defineProperty(_paneProps, Position.TOP, {
  width: '100vw',
  position: 'absolute',
  maxHeight: '100vh',
  top: 0,
  bottom: 'auto'
}), _defineProperty(_paneProps, Position.BOTTOM, {
  width: '100vw',
  maxHeight: '100vh',
  position: 'absolute',
  bottom: 0,
  top: 'auto'
}), _paneProps);
var subpaneProps = (_subpaneProps = {}, _defineProperty(_subpaneProps, Position.LEFT, {
  height: '100vh'
}), _defineProperty(_subpaneProps, Position.RIGHT, {
  height: '100vh'
}), _defineProperty(_subpaneProps, Position.TOP, {
  width: '100vw'
}), _defineProperty(_subpaneProps, Position.BOTTOM, {
  width: '100vw'
}), _subpaneProps);
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;

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

var animationStylesClass = (_animationStylesClass = {}, _defineProperty(_animationStylesClass, Position.LEFT, _objectSpread({
  transform: "translateX(-100%)"
}, withAnimations(css.keyframes('anchoredLeftSlideInAnimation', {
  from: {
    transform: "translateX(-100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), css.keyframes('anchoredLeftSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(-100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.RIGHT, _objectSpread({
  transform: "translateX(100%)"
}, withAnimations(css.keyframes('anchoredRightSlideInAnimation', {
  from: {
    transform: "translateX(100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), css.keyframes('anchoredRightSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.TOP, _objectSpread({
  transform: "translateY(-100%)"
}, withAnimations(css.keyframes('anchoredTopSlideInAnimation', {
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), css.keyframes('anchoredTopSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.BOTTOM, _objectSpread({
  transform: "translateY(100%)"
}, withAnimations(css.keyframes('anchoredBottomSlideInAnimation', {
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), css.keyframes('anchoredBottomSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(100%)"
  }
})))), _animationStylesClass);

var noop = function noop() {};

var SideSheet = memo(function SideSheet(props) {
  var _props$width = props.width,
      width = _props$width === void 0 ? 620 : _props$width,
      isShown = props.isShown,
      children = props.children,
      containerProps = props.containerProps,
      _props$onOpenComplete = props.onOpenComplete,
      onOpenComplete = _props$onOpenComplete === void 0 ? noop : _props$onOpenComplete,
      _props$onCloseComplet = props.onCloseComplete,
      onCloseComplete = _props$onCloseComplet === void 0 ? noop : _props$onCloseComplet,
      onBeforeClose = props.onBeforeClose,
      _props$shouldCloseOnO = props.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _props$shouldCloseOnO === void 0 ? true : _props$shouldCloseOnO,
      _props$shouldCloseOnE = props.shouldCloseOnEscapePress,
      shouldCloseOnEscapePress = _props$shouldCloseOnE === void 0 ? true : _props$shouldCloseOnE,
      _props$position = props.position,
      position = _props$position === void 0 ? Position.RIGHT : _props$position,
      preventBodyScrolling = props.preventBodyScrolling;
  return React.createElement(Overlay, {
    isShown: isShown,
    shouldCloseOnClick: shouldCloseOnOverlayClick,
    shouldCloseOnEscapePress: shouldCloseOnEscapePress,
    onBeforeClose: onBeforeClose,
    onExited: onCloseComplete,
    onEntered: onOpenComplete,
    preventBodyScrolling: preventBodyScrolling
  }, function (_ref) {
    var state = _ref.state,
        close = _ref.close;
    return React.createElement(Pane, _extends({
      width: width
    }, paneProps[position], {
      css: animationStylesClass[position],
      "data-state": state
    }), React.createElement(SheetClose, {
      position: position,
      "data-state": state,
      isClosing: false,
      onClick: close
    }), React.createElement(Pane, _extends({
      elevation: 4,
      backgroundColor: "white",
      overflowY: "auto",
      maxHeight: "100vh",
      "data-state": state,
      width: width
    }, subpaneProps[position], containerProps), typeof children === 'function' ? children({
      close: close
    }) : children));
  });
});
SideSheet.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * When true, the Side Sheet is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the SideSheet.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: PropTypes.object,

  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: PropTypes.oneOf([Position.TOP, Position.BOTTOM, Position.LEFT, Position.RIGHT]),

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool
};
export default SideSheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaWRlU2hlZXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiY3NzIiwiUHJvcFR5cGVzIiwiUGFuZSIsIk92ZXJsYXkiLCJQb3NpdGlvbiIsIlNoZWV0Q2xvc2UiLCJwYW5lUHJvcHMiLCJMRUZUIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsIlJJR0hUIiwiVE9QIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJCT1RUT00iLCJzdWJwYW5lUHJvcHMiLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJ3aXRoQW5pbWF0aW9ucyIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXNDbGFzcyIsInRyYW5zZm9ybSIsImtleWZyYW1lcyIsImZyb20iLCJ0byIsIm5vb3AiLCJTaWRlU2hlZXQiLCJwcm9wcyIsImlzU2hvd24iLCJjaGlsZHJlbiIsImNvbnRhaW5lclByb3BzIiwib25PcGVuQ29tcGxldGUiLCJvbkNsb3NlQ29tcGxldGUiLCJvbkJlZm9yZUNsb3NlIiwic2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwic3RhdGUiLCJjbG9zZSIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsUUFBNEIsT0FBNUI7QUFDQSxTQUFTQyxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNB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QW5EVTs7QUEwRHBCOzs7QUFHQWdDLEVBQUFBLG9CQUFvQixFQUFFNUMsU0FBUyxDQUFDb0Q7QUE3RFosQ0FBdEI7QUFnRUEsZUFBZWxCLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi8uLi9vdmVybGF5J1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgU2hlZXRDbG9zZSBmcm9tICcuL1NoZWV0Q2xvc2UnXG5cbmNvbnN0IHBhbmVQcm9wcyA9IHtcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAnYXV0bydcbiAgfSxcbiAgW1Bvc2l0aW9uLkJPVFRPTV06IHtcbiAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogJ2F1dG8nXG4gIH1cbn1cblxuY29uc3Qgc3VicGFuZVByb3BzID0ge1xuICBbUG9zaXRpb24uTEVGVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgfSxcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIGhlaWdodDogJzEwMHZoJ1xuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHdpZHRoOiAnMTAwdncnXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgd2lkdGg6ICcxMDB2dydcbiAgfVxufVxuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCB3aXRoQW5pbWF0aW9ucyA9IChhbmltYXRlSW4sIGFuaW1hdGVPdXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVJbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9ufSBib3RoYFxuICAgIH0sXG4gICAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVPdXR9ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvbn0gYm90aGBcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzQ2xhc3MgPSB7XG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkTGVmdFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRMZWZ0U2xpZGVPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFJpZ2h0U2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkUmlnaHRTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFRvcFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRUb3BTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZEJvdHRvbVNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZEJvdHRvbVNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBTaWRlU2hlZXQgPSBtZW1vKGZ1bmN0aW9uIFNpZGVTaGVldChwcm9wcykge1xuICBjb25zdCB7XG4gICAgd2lkdGggPSA2MjAsXG4gICAgaXNTaG93bixcbiAgICBjaGlsZHJlbixcbiAgICBjb250YWluZXJQcm9wcyxcbiAgICBvbk9wZW5Db21wbGV0ZSA9IG5vb3AsXG4gICAgb25DbG9zZUNvbXBsZXRlID0gbm9vcCxcbiAgICBvbkJlZm9yZUNsb3NlLFxuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2sgPSB0cnVlLFxuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyA9IHRydWUsXG4gICAgcG9zaXRpb24gPSBQb3NpdGlvbi5SSUdIVCxcbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZ1xuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxPdmVybGF5XG4gICAgICBpc1Nob3duPXtpc1Nob3dufVxuICAgICAgc2hvdWxkQ2xvc2VPbkNsaWNrPXtzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrfVxuICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzPXtzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3N9XG4gICAgICBvbkJlZm9yZUNsb3NlPXtvbkJlZm9yZUNsb3NlfVxuICAgICAgb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZz17cHJldmVudEJvZHlTY3JvbGxpbmd9XG4gICAgPlxuICAgICAgeyh7IHN0YXRlLCBjbG9zZSB9KSA9PiAoXG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIHsuLi5wYW5lUHJvcHNbcG9zaXRpb25dfVxuICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzQ2xhc3NbcG9zaXRpb25dfVxuICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICA+XG4gICAgICAgICAgPFNoZWV0Q2xvc2VcbiAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgaXNDbG9zaW5nPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIG92ZXJmbG93WT1cImF1dG9cIlxuICAgICAgICAgICAgbWF4SGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICB7Li4uc3VicGFuZVByb3BzW3Bvc2l0aW9uXX1cbiAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oeyBjbG9zZSB9KSA6IGNoaWxkcmVufVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgKX1cbiAgICA8L092ZXJsYXk+XG4gIClcbn0pXG5cblNpZGVTaGVldC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDaGlsZHJlbiBjYW4gYmUgYSBzdHJpbmcsIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBTaWRlIFNoZWV0IGlzIHNob3duLlxuICAgKi9cbiAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvdmVybGF5IGlzIGFib3V0IHRvIGNsb3NlLlxuICAgKiBSZXR1cm4gYGZhbHNlYCB0byBwcmV2ZW50IHRoZSBzaGVldCBmcm9tIGNsb3NpbmcuXG4gICAqIHR5cGU6IGBGdW5jdGlvbiAtPiBCb29sZWFuYFxuICAgKi9cbiAgb25CZWZvcmVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyB0aGUgb3ZlcmxheSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHByZXNzaW5nIHRoZSBlc2Mga2V5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBTaWRlU2hlZXQuXG4gICAqL1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIHRvIHBhc3MgdGhyb3VnaCB0aGUgU2lkZVNoZWV0IGNvbnRhaW5lciBQYW5lLlxuICAgKi9cbiAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgc2hlZXQgdG8gdGhlIHRvcCwgbGVmdCwgcmlnaHQsIG9yIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgUG9zaXRpb24uVE9QLFxuICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICBQb3NpdGlvbi5MRUZULFxuICAgIFBvc2l0aW9uLlJJR0hUXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHNjcm9sbGluZyBpbiB0aGUgb3V0ZXIgYm9keVxuICAgKi9cbiAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVTaGVldFxuIl19