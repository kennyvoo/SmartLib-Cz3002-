"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _uiBox = _interopRequireDefault(require("ui-box"));

var _Alert = _interopRequireDefault(require("../../alert/src/Alert"));

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;

var openAnimation = _glamor.css.keyframes('openAnimation', {
  from: {
    opacity: 0,
    transform: 'translateY(-120%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});

var closeAnimation = _glamor.css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});

var animationStyles = (0, _glamor.css)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 0,
  transition: "all ".concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration),
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
});
var Toast = (0, _react.memo)(function Toast(props) {
  var duration = props.duration,
      onRemove = props.onRemove,
      isShownProp = props.isShown,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      zIndex = props.zIndex,
      title = props.title,
      children = props.children,
      hasCloseButton = props.hasCloseButton;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var closeTimer = (0, _react.useRef)(null);
  var clearCloseTimer = (0, _react.useCallback)(function () {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  });
  var close = (0, _react.useCallback)(function () {
    clearCloseTimer();
    setIsShown(false);
  });
  var startCloseTimer = (0, _react.useCallback)(function () {
    if (duration) {
      clearCloseTimer();
      closeTimer.current = setTimeout(function () {
        close();
      }, duration * 1000);
    }
  });
  (0, _react.useEffect)(function () {
    startCloseTimer();
    return function () {
      clearCloseTimer();
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isShownProp !== isShown && typeof isShownProp === 'boolean') {
      setIsShown(isShownProp);
    }
  }, [isShownProp]);
  var handleMouseEnter = (0, _react.useCallback)(function () {
    return clearCloseTimer();
  });
  var handleMouseLeave = (0, _react.useCallback)(function () {
    return startCloseTimer();
  });
  var onRef = (0, _react.useCallback)(function (ref) {
    if (ref === null) return;

    var _ref$getBoundingClien = ref.getBoundingClientRect(),
        rectHeight = _ref$getBoundingClien.height;

    setHeight(rectHeight);
  });
  var styles = (0, _react.useMemo)(function () {
    return {
      height: height,
      zIndex: zIndex,
      marginBottom: isShown ? 0 : -height
    };
  }, [isShown, height, zIndex]);
  return _react["default"].createElement(_reactTransitionGroup.Transition, {
    appear: true,
    unmountOnExit: true,
    timeout: ANIMATION_DURATION,
    "in": isShown,
    onExited: onRemove
  }, function (state) {
    return _react["default"].createElement("div", {
      "data-state": state,
      className: animationStyles,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      style: styles
    }, _react["default"].createElement(_uiBox["default"], {
      ref: onRef,
      padding: 8
    }, _react["default"].createElement(_Alert["default"], {
      flexShrink: 0,
      appearance: "card",
      elevation: 3,
      intent: intent,
      title: title,
      isRemoveable: hasCloseButton,
      onRemove: close,
      pointerEvents: "all"
    }, children)));
  });
});
Toast.propTypes = {
  /**
   * The z-index of the toast.
   */
  zIndex: _propTypes["default"].number,

  /**
   * Duration of the toast.
   */
  duration: _propTypes["default"].number,

  /**
   * Function called when the toast is all the way closed.
   */
  onRemove: _propTypes["default"].func,

  /**
   * The type of the alert.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The title of the alert.
   */
  title: _propTypes["default"].node,

  /**
   * Description of the alert.
   */
  children: _propTypes["default"].node,

  /**
   * When true, show a close icon button inside of the toast.
   */
  hasCloseButton: _propTypes["default"].bool,

  /**
   * When false, will close the Toast and call onRemove when finished.
   */
  isShown: _propTypes["default"].bool
};
var _default = Toast;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdC5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJzcHJpbmciLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsImFuaW1hdGlvbiIsIlRvYXN0IiwicHJvcHMiLCJkdXJhdGlvbiIsIm9uUmVtb3ZlIiwiaXNTaG93blByb3AiLCJpc1Nob3duIiwiaW50ZW50IiwiekluZGV4IiwidGl0bGUiLCJjaGlsZHJlbiIsImhhc0Nsb3NlQnV0dG9uIiwic2V0SXNTaG93biIsInNldEhlaWdodCIsImNsb3NlVGltZXIiLCJjbGVhckNsb3NlVGltZXIiLCJjdXJyZW50IiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJzdGFydENsb3NlVGltZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJvblJlZiIsInJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3RIZWlnaHQiLCJzdHlsZXMiLCJtYXJnaW5Cb3R0b20iLCJzdGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsIm5vZGUiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxZQUFZLGtDQURVO0FBRXRCQyxFQUFBQSxZQUFZLGdDQUZVO0FBR3RCQyxFQUFBQSxNQUFNO0FBSGdCLENB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QixTQUFwQixFQUErQixRQUEvQixDQUFoQixDQW5CUTs7QUFxQmhCOzs7QUFHQXpCLEVBQUFBLEtBQUssRUFBRXNCLHNCQUFVSSxJQXhCRDs7QUEwQmhCOzs7QUFHQXpCLEVBQUFBLFFBQVEsRUFBRXFCLHNCQUFVSSxJQTdCSjs7QUErQmhCOzs7QUFHQXhCLEVBQUFBLGNBQWMsRUFBRW9CLHNCQUFVSyxJQWxDVjs7QUFvQ2hCOzs7QUFHQTlCLEVBQUFBLE9BQU8sRUFBRXlCLHNCQUFVSztBQXZDSCxDQUFsQjtlQTBDZW5DLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgbWVtbyxcbiAgdXNlTWVtbyxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbiAgdXNlRWZmZWN0LFxuICB1c2VDYWxsYmFja1xufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vLi4vYWxlcnQvc3JjL0FsZXJ0J1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgLFxuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3Qgb3BlbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ29wZW5BbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEyMCUpJ1xuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gIH1cbn0pXG5cbmNvbnN0IGNsb3NlQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnY2xvc2VBbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknLFxuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGhlaWdodDogMCxcbiAgdHJhbnNpdGlvbjogYGFsbCAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5kZWNlbGVyYXRpb259YCxcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7b3BlbkFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuc3ByaW5nfSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBhbmltYXRpb246IGAke2Nsb3NlQW5pbWF0aW9ufSAxMjBtcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gIH1cbn0pXG5cbmNvbnN0IFRvYXN0ID0gbWVtbyhmdW5jdGlvbiBUb2FzdChwcm9wcykge1xuICBjb25zdCB7XG4gICAgZHVyYXRpb24sXG4gICAgb25SZW1vdmUsXG4gICAgaXNTaG93bjogaXNTaG93blByb3AsXG4gICAgLy8gVGVtcGxhdGUgcHJvcHNcbiAgICBpbnRlbnQgPSAnbm9uZScsXG4gICAgekluZGV4LFxuICAgIHRpdGxlLFxuICAgIGNoaWxkcmVuLFxuICAgIGhhc0Nsb3NlQnV0dG9uXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtpc1Nob3duLCBzZXRJc1Nob3duXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBjbG9zZVRpbWVyID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgY2xlYXJDbG9zZVRpbWVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChjbG9zZVRpbWVyLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dChjbG9zZVRpbWVyLmN1cnJlbnQpXG4gICAgICBjbG9zZVRpbWVyLmN1cnJlbnQgPSBudWxsXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNsZWFyQ2xvc2VUaW1lcigpXG4gICAgc2V0SXNTaG93bihmYWxzZSlcbiAgfSlcblxuICBjb25zdCBzdGFydENsb3NlVGltZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICBjbGVhckNsb3NlVGltZXIoKVxuICAgICAgY2xvc2VUaW1lci5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNsb3NlKClcbiAgICAgIH0sIGR1cmF0aW9uICogMTAwMClcbiAgICB9XG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdGFydENsb3NlVGltZXIoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyQ2xvc2VUaW1lcigpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1Nob3duUHJvcCAhPT0gaXNTaG93biAmJiB0eXBlb2YgaXNTaG93blByb3AgPT09ICdib29sZWFuJykge1xuICAgICAgc2V0SXNTaG93bihpc1Nob3duUHJvcClcbiAgICB9XG4gIH0sIFtpc1Nob3duUHJvcF0pXG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IHVzZUNhbGxiYWNrKCgpID0+IGNsZWFyQ2xvc2VUaW1lcigpKVxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4gc3RhcnRDbG9zZVRpbWVyKCkpXG5cbiAgY29uc3Qgb25SZWYgPSB1c2VDYWxsYmFjayhyZWYgPT4ge1xuICAgIGlmIChyZWYgPT09IG51bGwpIHJldHVyblxuXG4gICAgY29uc3QgeyBoZWlnaHQ6IHJlY3RIZWlnaHQgfSA9IHJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHNldEhlaWdodChyZWN0SGVpZ2h0KVxuICB9KVxuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHpJbmRleCxcbiAgICAgIG1hcmdpbkJvdHRvbTogaXNTaG93biA/IDAgOiAtaGVpZ2h0XG4gICAgfSksXG4gICAgW2lzU2hvd24sIGhlaWdodCwgekluZGV4XVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8VHJhbnNpdGlvblxuICAgICAgYXBwZWFyXG4gICAgICB1bm1vdW50T25FeGl0XG4gICAgICB0aW1lb3V0PXtBTklNQVRJT05fRFVSQVRJT059XG4gICAgICBpbj17aXNTaG93bn1cbiAgICAgIG9uRXhpdGVkPXtvblJlbW92ZX1cbiAgICA+XG4gICAgICB7c3RhdGUgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXthbmltYXRpb25TdHlsZXN9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICA+XG4gICAgICAgICAgPEJveCByZWY9e29uUmVmfSBwYWRkaW5nPXs4fT5cbiAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwiY2FyZFwiXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgaXNSZW1vdmVhYmxlPXtoYXNDbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgICAgb25SZW1vdmU9e2Nsb3NlfVxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwiYWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvVHJhbnNpdGlvbj5cbiAgKVxufSlcblxuVG9hc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIHotaW5kZXggb2YgdGhlIHRvYXN0LlxuICAgKi9cbiAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBvZiB0aGUgdG9hc3QuXG4gICAqL1xuICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHRvYXN0IGlzIGFsbCB0aGUgd2F5IGNsb3NlZC5cbiAgICovXG4gIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIGFsZXJ0LlxuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSksXG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgYWxlcnQuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIG9mIHRoZSBhbGVydC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBzaG93IGEgY2xvc2UgaWNvbiBidXR0b24gaW5zaWRlIG9mIHRoZSB0b2FzdC5cbiAgICovXG4gIGhhc0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiBmYWxzZSwgd2lsbCBjbG9zZSB0aGUgVG9hc3QgYW5kIGNhbGwgb25SZW1vdmUgd2hlbiBmaW5pc2hlZC5cbiAgICovXG4gIGlzU2hvd246IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0XG4iXX0=