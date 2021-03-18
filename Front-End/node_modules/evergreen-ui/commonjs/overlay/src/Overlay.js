"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _uiBox = _interopRequireDefault(require("ui-box"));

var _portal = require("../../portal");

var _stack = require("../../stack");

var _constants = require("../../constants");

var _theme = require("../../theme");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _preventBodyScroll = _interopRequireDefault(require("../../lib/prevent-body-scroll"));

var noop = function noop() {};

var emptyProps = {};
var animationEasing = {
  standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0.0, 0.6, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;

var fadeInAnimation = _glamor.css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

var fadeOutAnimation = _glamor.css.keyframes('fadeOutAnimation', {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});

var animationStyles = function animationStyles(backgroundColor) {
  return {
    '&::before': {
      backgroundColor: backgroundColor,
      left: 0,
      top: 0,
      position: 'fixed',
      display: 'block',
      width: '100%',
      height: '100%',
      content: '" "'
    },
    '&[data-state="entering"]::before, &[data-state="entered"]::before': {
      animation: "".concat(fadeInAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]::before, &[data-state="exited"]::before': {
      animation: "".concat(fadeOutAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};
/**
 * Overlay is essentially a wrapper around react-transition-group/Transition
 */


var Overlay = (0, _react.memo)(function Overlay(_ref) {
  var children = _ref.children,
      _ref$containerProps = _ref.containerProps,
      containerProps = _ref$containerProps === void 0 ? emptyProps : _ref$containerProps,
      _ref$preventBodyScrol = _ref.preventBodyScrolling,
      preventBodyScrolling = _ref$preventBodyScrol === void 0 ? false : _ref$preventBodyScrol,
      _ref$shouldCloseOnCli = _ref.shouldCloseOnClick,
      shouldCloseOnClick = _ref$shouldCloseOnCli === void 0 ? true : _ref$shouldCloseOnCli,
      _ref$shouldCloseOnEsc = _ref.shouldCloseOnEscapePress,
      shouldCloseOnEscapePress = _ref$shouldCloseOnEsc === void 0 ? true : _ref$shouldCloseOnEsc,
      onBeforeClose = _ref.onBeforeClose,
      _ref$onExit = _ref.onExit,
      onExit = _ref$onExit === void 0 ? noop : _ref$onExit,
      _ref$onExiting = _ref.onExiting,
      onExiting = _ref$onExiting === void 0 ? noop : _ref$onExiting,
      _ref$onExited = _ref.onExited,
      onExited = _ref$onExited === void 0 ? noop : _ref$onExited,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? noop : _ref$onEnter,
      _ref$onEntering = _ref.onEntering,
      onEntering = _ref$onEntering === void 0 ? noop : _ref$onEntering,
      _ref$onEntered = _ref.onEntered,
      onEntered = _ref$onEntered === void 0 ? noop : _ref$onEntered,
      isShown = _ref.isShown,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children", "containerProps", "preventBodyScrolling", "shouldCloseOnClick", "shouldCloseOnEscapePress", "onBeforeClose", "onExit", "onExiting", "onExited", "onEnter", "onEntering", "onEntered", "isShown"]);
  var theme = (0, _theme.useTheme)();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      previousActiveElement = _useState2[0],
      setPreviousActiveElement = _useState2[1];

  var _useState3 = (0, _react.useState)(isShown ? 'entering' : 'exited'),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var containerRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (isShown) {
      setStatus('entering');
    }
  }, [isShown]);

  var close = function close() {
    var shouldClose = (0, _safeInvoke["default"])(props.onBeforeClose);

    if (shouldClose !== false) {
      setStatus('exiting');
    }
  };

  var onEsc = function onEsc(event) {
    if (event.key === 'Escape' && shouldCloseOnEscapePress) {
      close();
    }
  };

  (0, _react.useEffect)(function () {
    if (status === 'entered') {
      setPreviousActiveElement(document.activeElement);
      bringFocusInsideOverlay();
    }

    if (status === 'entering') {
      document.body.addEventListener('keydown', onEsc, false);
    }

    if (status === 'exiting') {
      document.body.removeEventListener('keydown', onEsc, false);
      bringFocusBackToTarget();
    }
  }, [status]); // ComponentWillUnmount

  (0, _react.useEffect)(function () {
    return function () {
      handleBodyScroll(false);
      document.body.removeEventListener('keydown', onEsc, false);
    };
  }, []);
  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */

  var bringFocusInsideOverlay = function bringFocusInsideOverlay() {
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(function () {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE
      if (containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
      document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
      !isShown) {
        return;
      }

      var isFocusOutsideModal = !containerRef.current.contains(document.activeElement);

      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other clowns
        var autofocusElement = containerRef.current.querySelector('[autofocus]');
        var wrapperElement = containerRef.current.querySelector('[tabindex]');
        var buttonElement = containerRef.current.querySelector('button');

        if (autofocusElement) {
          autofocusElement.focus();
        } else if (wrapperElement) {
          wrapperElement.focus();
        } else if (buttonElement) {
          buttonElement.focus();
        }
      }
    });
  };

  var bringFocusBackToTarget = function bringFocusBackToTarget() {
    return requestAnimationFrame(function () {
      if (previousActiveElement == null || // eslint-disable-line eqeqeq, no-eq-null
      containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
      document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
          return;
        } // Bring back focus on the target.


      var isFocusInsideModal = containerRef.current.contains(document.activeElement);

      if (document.activeElement === document.body || isFocusInsideModal) {
        previousActiveElement.focus();
      }
    });
  };

  var handleBodyScroll = function handleBodyScroll(preventScroll) {
    if (preventBodyScrolling) {
      (0, _preventBodyScroll["default"])(preventScroll);
    }
  };

  var handleEnter = function handleEnter(node, isAppearing) {
    handleBodyScroll(true);
    (0, _safeInvoke["default"])(onEnter, node, isAppearing);
  };

  var handleEntering = function handleEntering(node, isAppearing) {
    setStatus('entering');
    (0, _safeInvoke["default"])(onEntering, node, isAppearing);
  };

  var handleEntered = function handleEntered(node, isAppearing) {
    setStatus('entered');
    (0, _safeInvoke["default"])(onEntered, node, isAppearing);
  };

  var handleExit = function handleExit(node) {
    handleBodyScroll(false);
    (0, _safeInvoke["default"])(onExit, node);
  };

  var handleExiting = function handleExiting(node) {
    setStatus('exiting');
    (0, _safeInvoke["default"])(onExiting, node);
  };

  var handleExited = function handleExited(node) {
    setStatus('exited');
    (0, _safeInvoke["default"])(onExited, node);
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget || !shouldCloseOnClick) {
      return;
    }

    close();
  };

  if (status === 'exited') {
    return null;
  }

  return _react["default"].createElement(_stack.Stack, {
    value: _constants.StackingOrder.OVERLAY
  }, function (zIndex) {
    return _react["default"].createElement(_portal.Portal, null, _react["default"].createElement(_reactTransitionGroup.Transition, {
      appear: true,
      unmountOnExit: true,
      timeout: ANIMATION_DURATION,
      "in": isShown && status !== 'exiting',
      onExit: handleExit,
      onExiting: handleExiting,
      onExited: handleExited,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered
    }, function (state) {
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        onClick: handleBackdropClick,
        ref: containerRef,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: zIndex,
        "data-state": state
      }, containerProps, {
        className: (0, _classnames["default"])(containerProps.className, (0, _glamor.css)(animationStyles(theme.overlayBackgroundColor)).toString())
      }), typeof children === 'function' ? children({
        state: state,
        close: close
      }) : children);
    }));
  });
});
Overlay.propTypes = {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   */
  preventBodyScrolling: _propTypes["default"].bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: _propTypes["default"].func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: _propTypes["default"].func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: _propTypes["default"].func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: _propTypes["default"].func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: _propTypes["default"].func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: _propTypes["default"].func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: _propTypes["default"].func
};
var _default = Overlay;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vdmVybGF5L3NyYy9PdmVybGF5LmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJlbXB0eVByb3BzIiwiYW5pbWF0aW9uRWFzaW5nIiwic3RhbmRhcmQiLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJzaGFycCIsInNwcmluZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsImZhZGVJbkFuaW1hdGlvbiIsImNzcyIsImtleWZyYW1lcyIsImZyb20iLCJvcGFjaXR5IiwidG8iLCJmYWRlT3V0QW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdCIsInRvcCIsInBvc2l0aW9uIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGVudCIsImFuaW1hdGlvbiIsIk92ZXJsYXkiLCJjaGlsZHJlbiIsImNvbnRhaW5lclByb3BzIiwicHJldmVudEJvZHlTY3JvbGxpbmciLCJzaG91bGRDbG9zZU9uQ2xpY2siLCJzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MiLCJvbkJlZm9yZUNsb3NlIiwib25FeGl0Iiwib25FeGl0aW5nIiwib25FeGl0ZWQiLCJvbkVudGVyIiwib25FbnRlcmluZyIsIm9uRW50ZXJlZCIsImlzU2hvd24iLCJwcm9wcyIsInRoZW1lIiwicHJldmlvdXNBY3RpdmVFbGVtZW50Iiwic2V0UHJldmlvdXNBY3RpdmVFbGVtZW50Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwiY29udGFpbmVyUmVmIiwiY2xvc2UiLCJzaG91bGRDbG9zZSIsIm9uRXNjIiwiZXZlbnQiLCJrZXkiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJicmluZ0ZvY3VzSW5zaWRlT3ZlcmxheSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJyaW5nRm9jdXNCYWNrVG9UYXJnZXQiLCJoYW5kbGVCb2R5U2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudCIsImlzRm9jdXNPdXRzaWRlTW9kYWwiLCJjb250YWlucyIsImF1dG9mb2N1c0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlckVsZW1lbnQiLCJidXR0b25FbGVtZW50IiwiZm9jdXMiLCJpc0ZvY3VzSW5zaWRlTW9kYWwiLCJwcmV2ZW50U2Nyb2xsIiwiaGFuZGxlRW50ZXIiLCJub2RlIiwiaXNBcHBlYXJpbmciLCJoYW5kbGVFbnRlcmluZyIsImhhbmRsZUVudGVyZWQiLCJoYW5kbGVFeGl0IiwiaGFuZGxlRXhpdGluZyIsImhhbmRsZUV4aXRlZCIsImhhbmRsZUJhY2tkcm9wQ2xpY2siLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiU3RhY2tpbmdPcmRlciIsIk9WRVJMQVkiLCJ6SW5kZXgiLCJzdGF0ZSIsImNsYXNzTmFtZSIsIm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3IiLCJ0b1N0cmluZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBRUEsSUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFRLGtDQURjO0FBRXRCQyxFQUFBQSxZQUFZLGtDQUZVO0FBR3RCQyxFQUFBQSxZQUFZLGdDQUhVO0FBSXRCQyxFQUFBQSxLQUFLLGtDQUppQjtBQUt0QkMsRUFBQUEsTUFBTTtBQUxnQixDQUF4QjtBQVFBLElBQU1DLGtCQUFrQixHQUFHLEdBQTNCOztBQUVBLElBQU1DLGVBQWUsR0FBR0MsWUFBSUMsU0FBSixDQUFjLGlCQUFkLEVBQWlDO0FBQ3ZEQyxFQUFBQSxJQUFJLEVBQUU7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QUFFNEQsc0JBQVVJLElBekJaOztBQTJCbEI7OztBQUdBL0QsRUFBQUEsd0JBQXdCLEVBQUUyRCxzQkFBVUksSUE5QmxCOztBQWdDbEI7Ozs7O0FBS0E5RCxFQUFBQSxhQUFhLEVBQUUwRCxzQkFBVUUsSUFyQ1A7O0FBdUNsQjs7OztBQUlBM0QsRUFBQUEsTUFBTSxFQUFFeUQsc0JBQVVFLElBM0NBOztBQTZDbEI7Ozs7QUFJQTFELEVBQUFBLFNBQVMsRUFBRXdELHNCQUFVRSxJQWpESDs7QUFtRGxCOzs7O0FBSUF6RCxFQUFBQSxRQUFRLEVBQUV1RCxzQkFBVUUsSUF2REY7O0FBeURsQjs7Ozs7OztBQU9BeEQsRUFBQUEsT0FBTyxFQUFFc0Qsc0JBQVVFLElBaEVEOztBQWtFbEI7Ozs7Ozs7QUFPQXZELEVBQUFBLFVBQVUsRUFBRXFELHNCQUFVRSxJQXpFSjs7QUEyRWxCOzs7Ozs7O0FBT0F0RCxFQUFBQSxTQUFTLEVBQUVvRCxzQkFBVUU7QUFsRkgsQ0FBcEI7ZUFxRmVsRSxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICcuLi8uLi9zdGFjaydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHByZXZlbnRCb2R5U2Nyb2xsIGZyb20gJy4uLy4uL2xpYi9wcmV2ZW50LWJvZHktc2Nyb2xsJ1xuXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IGVtcHR5UHJvcHMgPSB7fVxuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIHN0YW5kYXJkOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpYCxcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNoYXJwOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2ZhZGVJbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgdG86IHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn0pXG5cbmNvbnN0IGZhZGVPdXRBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdmYWRlT3V0QW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0gYmFja2dyb3VuZENvbG9yID0+ICh7XG4gICcmOjpiZWZvcmUnOiB7XG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBjb250ZW50OiAnXCIgXCInXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXTo6YmVmb3JlLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdOjpiZWZvcmUnOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtmYWRlSW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvbn0gYm90aGBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl06OmJlZm9yZSwgJltkYXRhLXN0YXRlPVwiZXhpdGVkXCJdOjpiZWZvcmUnOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtmYWRlT3V0QW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gIH1cbn0pXG5cbi8qKlxuICogT3ZlcmxheSBpcyBlc3NlbnRpYWxseSBhIHdyYXBwZXIgYXJvdW5kIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvblxuICovXG5jb25zdCBPdmVybGF5ID0gbWVtbyhmdW5jdGlvbiBPdmVybGF5KHtcbiAgY2hpbGRyZW4sXG4gIGNvbnRhaW5lclByb3BzID0gZW1wdHlQcm9wcyxcbiAgcHJldmVudEJvZHlTY3JvbGxpbmcgPSBmYWxzZSxcbiAgc2hvdWxkQ2xvc2VPbkNsaWNrID0gdHJ1ZSxcbiAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzID0gdHJ1ZSxcbiAgb25CZWZvcmVDbG9zZSxcbiAgb25FeGl0ID0gbm9vcCxcbiAgb25FeGl0aW5nID0gbm9vcCxcbiAgb25FeGl0ZWQgPSBub29wLFxuICBvbkVudGVyID0gbm9vcCxcbiAgb25FbnRlcmluZyA9IG5vb3AsXG4gIG9uRW50ZXJlZCA9IG5vb3AsXG4gIGlzU2hvd24sXG4gIC4uLnByb3BzXG59KSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICBjb25zdCBbcHJldmlvdXNBY3RpdmVFbGVtZW50LCBzZXRQcmV2aW91c0FjdGl2ZUVsZW1lbnRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGlzU2hvd24gPyAnZW50ZXJpbmcnIDogJ2V4aXRlZCcpXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNTaG93bikge1xuICAgICAgc2V0U3RhdHVzKCdlbnRlcmluZycpXG4gICAgfVxuICB9LCBbaXNTaG93bl0pXG5cbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkQ2xvc2UgPSBzYWZlSW52b2tlKHByb3BzLm9uQmVmb3JlQ2xvc2UpXG4gICAgaWYgKHNob3VsZENsb3NlICE9PSBmYWxzZSkge1xuICAgICAgc2V0U3RhdHVzKCdleGl0aW5nJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkVzYyA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MpIHtcbiAgICAgIGNsb3NlKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09ICdlbnRlcmVkJykge1xuICAgICAgc2V0UHJldmlvdXNBY3RpdmVFbGVtZW50KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICBicmluZ0ZvY3VzSW5zaWRlT3ZlcmxheSgpXG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2VudGVyaW5nJykge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2MsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09ICdleGl0aW5nJykge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2MsIGZhbHNlKVxuICAgICAgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCgpXG4gICAgfVxuICB9LCBbc3RhdHVzXSlcblxuICAvLyBDb21wb25lbnRXaWxsVW5tb3VudFxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjLCBmYWxzZSlcbiAgICB9LFxuICAgIFtdXG4gIClcblxuICAvKipcbiAgICogTWV0aG9kcyBib3Jyb3dlZCBmcm9tIEJsdWVwcmludEpTXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi9yZWxlYXNlLzIuMC4wL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LnRzeFxuICAgKi9cbiAgY29uc3QgYnJpbmdGb2N1c0luc2lkZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgLy8gQWx3YXlzIGRlbGF5IGZvY3VzIG1hbmlwdWxhdGlvbiB0byBqdXN0IGJlZm9yZSByZXBhaW50IHRvIHByZXZlbnQgc2Nyb2xsIGp1bXBpbmdcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIENvbnRhaW5lciByZWYgbWF5IGJlIHVuZGVmaW5lZCBiZXR3ZWVuIGNvbXBvbmVudCBtb3VudGluZyBhbmQgUG9ydGFsIHJlbmRlcmluZ1xuICAgICAgLy8gYWN0aXZlRWxlbWVudCBtYXkgYmUgdW5kZWZpbmVkIGluIHNvbWUgcmFyZSBjYXNlcyBpbiBJRVxuXG4gICAgICBpZiAoXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICFpc1Nob3duXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRm9jdXNPdXRzaWRlTW9kYWwgPSAhY29udGFpbmVyUmVmLmN1cnJlbnQuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgIC8vIEVsZW1lbnQgbWFya2VkIGF1dG9mb2N1cyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIG90aGVyIGNsb3duc1xuICAgICAgICBjb25zdCBhdXRvZm9jdXNFbGVtZW50ID0gY29udGFpbmVyUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnW2F1dG9mb2N1c10nXG4gICAgICAgIClcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSBjb250YWluZXJSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXhdJylcbiAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGNvbnRhaW5lclJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG5cbiAgICAgICAgaWYgKGF1dG9mb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgICBhdXRvZm9jdXNFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVyRWxlbWVudCkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbGVtZW50KSB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNBY3RpdmVFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gQnJpbmcgYmFjayBmb2N1cyBvbiB0aGUgdGFyZ2V0LlxuICAgICAgY29uc3QgaXNGb2N1c0luc2lkZU1vZGFsID0gY29udGFpbmVyUmVmLmN1cnJlbnQuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbCkge1xuICAgICAgICBwcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVCb2R5U2Nyb2xsID0gcHJldmVudFNjcm9sbCA9PiB7XG4gICAgaWYgKHByZXZlbnRCb2R5U2Nyb2xsaW5nKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChwcmV2ZW50U2Nyb2xsKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKG5vZGUsIGlzQXBwZWFyaW5nKSA9PiB7XG4gICAgaGFuZGxlQm9keVNjcm9sbCh0cnVlKVxuICAgIHNhZmVJbnZva2Uob25FbnRlciwgbm9kZSwgaXNBcHBlYXJpbmcpXG4gIH1cblxuICBjb25zdCBoYW5kbGVFbnRlcmluZyA9IChub2RlLCBpc0FwcGVhcmluZykgPT4ge1xuICAgIHNldFN0YXR1cygnZW50ZXJpbmcnKVxuICAgIHNhZmVJbnZva2Uob25FbnRlcmluZywgbm9kZSwgaXNBcHBlYXJpbmcpXG4gIH1cblxuICBjb25zdCBoYW5kbGVFbnRlcmVkID0gKG5vZGUsIGlzQXBwZWFyaW5nKSA9PiB7XG4gICAgc2V0U3RhdHVzKCdlbnRlcmVkJylcbiAgICBzYWZlSW52b2tlKG9uRW50ZXJlZCwgbm9kZSwgaXNBcHBlYXJpbmcpXG4gIH1cblxuICBjb25zdCBoYW5kbGVFeGl0ID0gbm9kZSA9PiB7XG4gICAgaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICBzYWZlSW52b2tlKG9uRXhpdCwgbm9kZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUV4aXRpbmcgPSBub2RlID0+IHtcbiAgICBzZXRTdGF0dXMoJ2V4aXRpbmcnKVxuICAgIHNhZmVJbnZva2Uob25FeGl0aW5nLCBub2RlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXhpdGVkID0gbm9kZSA9PiB7XG4gICAgc2V0U3RhdHVzKCdleGl0ZWQnKVxuICAgIHNhZmVJbnZva2Uob25FeGl0ZWQsIG5vZGUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVCYWNrZHJvcENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgIXNob3VsZENsb3NlT25DbGljaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xvc2UoKVxuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2V4aXRlZCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgdmFsdWU9e1N0YWNraW5nT3JkZXIuT1ZFUkxBWX0+XG4gICAgICB7ekluZGV4ID0+IChcbiAgICAgICAgPFBvcnRhbD5cbiAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgICB0aW1lb3V0PXtBTklNQVRJT05fRFVSQVRJT059XG4gICAgICAgICAgICBpbj17aXNTaG93biAmJiBzdGF0dXMgIT09ICdleGl0aW5nJ31cbiAgICAgICAgICAgIG9uRXhpdD17aGFuZGxlRXhpdH1cbiAgICAgICAgICAgIG9uRXhpdGluZz17aGFuZGxlRXhpdGluZ31cbiAgICAgICAgICAgIG9uRXhpdGVkPXtoYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgICBvbkVudGVyPXtoYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uRW50ZXJpbmc9e2hhbmRsZUVudGVyaW5nfVxuICAgICAgICAgICAgb25FbnRlcmVkPXtoYW5kbGVFbnRlcmVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdGF0ZSA9PiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrZHJvcENsaWNrfVxuICAgICAgICAgICAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgICAgICAgIGJvdHRvbT17MH1cbiAgICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgIGNzcyhhbmltYXRpb25TdHlsZXModGhlbWUub3ZlcmxheUJhY2tncm91bmRDb2xvcikpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyBjaGlsZHJlbih7IHN0YXRlLCBjbG9zZSB9KVxuICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICApfVxuICAgIDwvU3RhY2s+XG4gIClcbn0pXG5cbk92ZXJsYXkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ2hpbGRyZW4gY2FuIGJlIGEgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgY2xvc2U6IGZ1bmNgXG4gICAqIGFuZCBgc3RhdGU6IEVOVEVSSU5HIHwgRU5URVJFRCB8IEVYSVRJTkcgfCBFWElURURgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgc3RhdGVzLlxuICAgKi9cbiAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIHRvIGJlIHBhc3NlZCB0aHJvdWdoIG9uIHRoZSBpbm5lciBCb3guXG4gICAqL1xuICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCBib2R5IHNjcm9sbGluZyBvdXRzaWRlIHRoZSBjb250ZXh0IG9mIHRoZSBvdmVybGF5XG4gICAqL1xuICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyB0aGUgb3ZlcmxheSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBzaG91bGRDbG9zZU9uQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb3ZlcmxheSBpcyBhYm91dCB0byBjbG9zZS5cbiAgICogUmV0dXJuIGBmYWxzZWAgdG8gcHJldmVudCB0aGUgc2hlZXQgZnJvbSBjbG9zaW5nLlxuICAgKiB0eXBlOiBgRnVuY3Rpb24gLT4gQm9vbGVhbmBcbiAgICovXG4gIG9uQmVmb3JlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRgXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKiB0eXBlOiBgRnVuY3Rpb24oZXhpdFN0YXRlOiBBbnk/LCBub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICogaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50LlxuICAgKlxuICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICogaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50LlxuICAgKlxuICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgKiBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnQuXG4gICAqXG4gICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXlcbiJdfQ==