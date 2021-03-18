import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo, useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import Box from 'ui-box';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import { StackingOrder } from '../../constants';
import { useTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import preventBodyScroll from '../../lib/prevent-body-scroll';

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
var fadeInAnimation = css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var fadeOutAnimation = css.keyframes('fadeOutAnimation', {
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


var Overlay = memo(function Overlay(_ref) {
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
      props = _objectWithoutProperties(_ref, ["children", "containerProps", "preventBodyScrolling", "shouldCloseOnClick", "shouldCloseOnEscapePress", "onBeforeClose", "onExit", "onExiting", "onExited", "onEnter", "onEntering", "onEntered", "isShown"]);

  var theme = useTheme();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      previousActiveElement = _useState2[0],
      setPreviousActiveElement = _useState2[1];

  var _useState3 = useState(isShown ? 'entering' : 'exited'),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var containerRef = useRef();
  useEffect(function () {
    if (isShown) {
      setStatus('entering');
    }
  }, [isShown]);

  var close = function close() {
    var shouldClose = safeInvoke(props.onBeforeClose);

    if (shouldClose !== false) {
      setStatus('exiting');
    }
  };

  var onEsc = function onEsc(event) {
    if (event.key === 'Escape' && shouldCloseOnEscapePress) {
      close();
    }
  };

  useEffect(function () {
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

  useEffect(function () {
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
      preventBodyScroll(preventScroll);
    }
  };

  var handleEnter = function handleEnter(node, isAppearing) {
    handleBodyScroll(true);
    safeInvoke(onEnter, node, isAppearing);
  };

  var handleEntering = function handleEntering(node, isAppearing) {
    setStatus('entering');
    safeInvoke(onEntering, node, isAppearing);
  };

  var handleEntered = function handleEntered(node, isAppearing) {
    setStatus('entered');
    safeInvoke(onEntered, node, isAppearing);
  };

  var handleExit = function handleExit(node) {
    handleBodyScroll(false);
    safeInvoke(onExit, node);
  };

  var handleExiting = function handleExiting(node) {
    setStatus('exiting');
    safeInvoke(onExiting, node);
  };

  var handleExited = function handleExited(node) {
    setStatus('exited');
    safeInvoke(onExited, node);
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

  return React.createElement(Stack, {
    value: StackingOrder.OVERLAY
  }, function (zIndex) {
    return React.createElement(Portal, null, React.createElement(Transition, {
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
      return React.createElement(Box, _extends({
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
        className: cx(containerProps.className, css(animationStyles(theme.overlayBackgroundColor)).toString())
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: PropTypes.bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: PropTypes.object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: PropTypes.func
};
export default Overlay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vdmVybGF5L3NyYy9PdmVybGF5LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiY3giLCJjc3MiLCJQcm9wVHlwZXMiLCJUcmFuc2l0aW9uIiwiQm94IiwiUG9ydGFsIiwiU3RhY2siLCJTdGFja2luZ09yZGVyIiwidXNlVGhlbWUiLCJzYWZlSW52b2tlIiwicHJldmVudEJvZHlTY3JvbGwiLCJub29wIiwiZW1wdHlQcm9wcyIsImFuaW1hdGlvbkVhc2luZyIsInN0YW5kYXJkIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwic2hhcnAiLCJzcHJpbmciLCJBTklNQVRJT05fRFVSQVRJT04iLCJmYWRlSW5BbmltYXRpb24iLCJrZXlmcmFtZXMiLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZmFkZU91dEFuaW1hdGlvbiIsImFuaW1hdGlvblN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImxlZnQiLCJ0b3AiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRlbnQiLCJhbmltYXRpb24iLCJPdmVybGF5IiwiY2hpbGRyZW4iLCJjb250YWluZXJQcm9wcyIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwic2hvdWxkQ2xvc2VPbkNsaWNrIiwic2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzIiwib25CZWZvcmVDbG9zZSIsIm9uRXhpdCIsIm9uRXhpdGluZyIsIm9uRXhpdGVkIiwib25FbnRlciIsIm9uRW50ZXJpbmciLCJvbkVudGVyZWQiLCJpc1Nob3duIiwicHJvcHMiLCJ0aGVtZSIsInByZXZpb3VzQWN0aXZlRWxlbWVudCIsInNldFByZXZpb3VzQWN0aXZlRWxlbWVudCIsInN0YXR1cyIsInNldFN0YXR1cyIsImNvbnRhaW5lclJlZiIsImNsb3NlIiwic2hvdWxkQ2xvc2UiLCJvbkVzYyIsImV2ZW50Iiwia2V5IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYnJpbmdGb2N1c0luc2lkZU92ZXJsYXkiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJicmluZ0ZvY3VzQmFja1RvVGFyZ2V0IiwiaGFuZGxlQm9keVNjcm9sbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1cnJlbnQiLCJpc0ZvY3VzT3V0c2lkZU1vZGFsIiwiY29udGFpbnMiLCJhdXRvZm9jdXNFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIndyYXBwZXJFbGVtZW50IiwiYnV0dG9uRWxlbWVudCIsImZvY3VzIiwiaXNGb2N1c0luc2lkZU1vZGFsIiwicHJldmVudFNjcm9sbCIsImhhbmRsZUVudGVyIiwibm9kZSIsImlzQXBwZWFyaW5nIiwiaGFuZGxlRW50ZXJpbmciLCJoYW5kbGVFbnRlcmVkIiwiaGFuZGxlRXhpdCIsImhhbmRsZUV4aXRpbmciLCJoYW5kbGVFeGl0ZWQiLCJoYW5kbGVCYWNrZHJvcENsaWNrIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIk9WRVJMQVkiLCJ6SW5kZXgiLCJzdGF0ZSIsImNsYXNzTmFtZSIsIm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3IiLCJ0b1N0cmluZyIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFFBQXRCLEVBQWdDQyxTQUFoQyxFQUEyQ0MsTUFBM0MsUUFBeUQsT0FBekQ7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQix3QkFBM0I7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixjQUF2QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsYUFBdEI7QUFDQSxT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bEI7Ozs7QUFJQXhELEVBQUFBLFNBQVMsRUFBRTFDLFNBQVMsQ0FBQ2tHLElBakRIOztBQW1EbEI7Ozs7QUFJQXZELEVBQUFBLFFBQVEsRUFBRTNDLFNBQVMsQ0FBQ2tHLElBdkRGOztBQXlEbEI7Ozs7Ozs7QUFPQXRELEVBQUFBLE9BQU8sRUFBRTVDLFNBQVMsQ0FBQ2tHLElBaEVEOztBQWtFbEI7Ozs7Ozs7QUFPQXJELEVBQUFBLFVBQVUsRUFBRTdDLFNBQVMsQ0FBQ2tHLElBekVKOztBQTJFbEI7Ozs7Ozs7QUFPQXBELEVBQUFBLFNBQVMsRUFBRTlDLFNBQVMsQ0FBQ2tHO0FBbEZILENBQXBCO0FBcUZBLGVBQWVoRSxPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICcuLi8uLi9zdGFjaydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHByZXZlbnRCb2R5U2Nyb2xsIGZyb20gJy4uLy4uL2xpYi9wcmV2ZW50LWJvZHktc2Nyb2xsJ1xuXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IGVtcHR5UHJvcHMgPSB7fVxuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIHN0YW5kYXJkOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpYCxcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNoYXJwOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2ZhZGVJbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgdG86IHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn0pXG5cbmNvbnN0IGZhZGVPdXRBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdmYWRlT3V0QW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0gYmFja2dyb3VuZENvbG9yID0+ICh7XG4gICcmOjpiZWZvcmUnOiB7XG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBjb250ZW50OiAnXCIgXCInXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXTo6YmVmb3JlLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdOjpiZWZvcmUnOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtmYWRlSW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvbn0gYm90aGBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl06OmJlZm9yZSwgJltkYXRhLXN0YXRlPVwiZXhpdGVkXCJdOjpiZWZvcmUnOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtmYWRlT3V0QW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gIH1cbn0pXG5cbi8qKlxuICogT3ZlcmxheSBpcyBlc3NlbnRpYWxseSBhIHdyYXBwZXIgYXJvdW5kIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvblxuICovXG5jb25zdCBPdmVybGF5ID0gbWVtbyhmdW5jdGlvbiBPdmVybGF5KHtcbiAgY2hpbGRyZW4sXG4gIGNvbnRhaW5lclByb3BzID0gZW1wdHlQcm9wcyxcbiAgcHJldmVudEJvZHlTY3JvbGxpbmcgPSBmYWxzZSxcbiAgc2hvdWxkQ2xvc2VPbkNsaWNrID0gdHJ1ZSxcbiAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzID0gdHJ1ZSxcbiAgb25CZWZvcmVDbG9zZSxcbiAgb25FeGl0ID0gbm9vcCxcbiAgb25FeGl0aW5nID0gbm9vcCxcbiAgb25FeGl0ZWQgPSBub29wLFxuICBvbkVudGVyID0gbm9vcCxcbiAgb25FbnRlcmluZyA9IG5vb3AsXG4gIG9uRW50ZXJlZCA9IG5vb3AsXG4gIGlzU2hvd24sXG4gIC4uLnByb3BzXG59KSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICBjb25zdCBbcHJldmlvdXNBY3RpdmVFbGVtZW50LCBzZXRQcmV2aW91c0FjdGl2ZUVsZW1lbnRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGlzU2hvd24gPyAnZW50ZXJpbmcnIDogJ2V4aXRlZCcpXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNTaG93bikge1xuICAgICAgc2V0U3RhdHVzKCdlbnRlcmluZycpXG4gICAgfVxuICB9LCBbaXNTaG93bl0pXG5cbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkQ2xvc2UgPSBzYWZlSW52b2tlKHByb3BzLm9uQmVmb3JlQ2xvc2UpXG4gICAgaWYgKHNob3VsZENsb3NlICE9PSBmYWxzZSkge1xuICAgICAgc2V0U3RhdHVzKCdleGl0aW5nJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkVzYyA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MpIHtcbiAgICAgIGNsb3NlKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09ICdlbnRlcmVkJykge1xuICAgICAgc2V0UHJldmlvdXNBY3RpdmVFbGVtZW50KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICBicmluZ0ZvY3VzSW5zaWRlT3ZlcmxheSgpXG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2VudGVyaW5nJykge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2MsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09ICdleGl0aW5nJykge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2MsIGZhbHNlKVxuICAgICAgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCgpXG4gICAgfVxuICB9LCBbc3RhdHVzXSlcblxuICAvLyBDb21wb25lbnRXaWxsVW5tb3VudFxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjLCBmYWxzZSlcbiAgICB9LFxuICAgIFtdXG4gIClcblxuICAvKipcbiAgICogTWV0aG9kcyBib3Jyb3dlZCBmcm9tIEJsdWVwcmludEpTXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi9yZWxlYXNlLzIuMC4wL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LnRzeFxuICAgKi9cbiAgY29uc3QgYnJpbmdGb2N1c0luc2lkZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgLy8gQWx3YXlzIGRlbGF5IGZvY3VzIG1hbmlwdWxhdGlvbiB0byBqdXN0IGJlZm9yZSByZXBhaW50IHRvIHByZXZlbnQgc2Nyb2xsIGp1bXBpbmdcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIENvbnRhaW5lciByZWYgbWF5IGJlIHVuZGVmaW5lZCBiZXR3ZWVuIGNvbXBvbmVudCBtb3VudGluZyBhbmQgUG9ydGFsIHJlbmRlcmluZ1xuICAgICAgLy8gYWN0aXZlRWxlbWVudCBtYXkgYmUgdW5kZWZpbmVkIGluIHNvbWUgcmFyZSBjYXNlcyBpbiBJRVxuXG4gICAgICBpZiAoXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICFpc1Nob3duXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRm9jdXNPdXRzaWRlTW9kYWwgPSAhY29udGFpbmVyUmVmLmN1cnJlbnQuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgIC8vIEVsZW1lbnQgbWFya2VkIGF1dG9mb2N1cyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIG90aGVyIGNsb3duc1xuICAgICAgICBjb25zdCBhdXRvZm9jdXNFbGVtZW50ID0gY29udGFpbmVyUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnW2F1dG9mb2N1c10nXG4gICAgICAgIClcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSBjb250YWluZXJSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXhdJylcbiAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGNvbnRhaW5lclJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG5cbiAgICAgICAgaWYgKGF1dG9mb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgICBhdXRvZm9jdXNFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVyRWxlbWVudCkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbGVtZW50KSB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNBY3RpdmVFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gQnJpbmcgYmFjayBmb2N1cyBvbiB0aGUgdGFyZ2V0LlxuICAgICAgY29uc3QgaXNGb2N1c0luc2lkZU1vZGFsID0gY29udGFpbmVyUmVmLmN1cnJlbnQuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbCkge1xuICAgICAgICBwcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVCb2R5U2Nyb2xsID0gcHJldmVudFNjcm9sbCA9PiB7XG4gICAgaWYgKHByZXZlbnRCb2R5U2Nyb2xsaW5nKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChwcmV2ZW50U2Nyb2xsKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKG5vZGUsIGlzQXBwZWFyaW5nKSA9PiB7XG4gICAgaGFuZGxlQm9keVNjcm9sbCh0cnVlKVxuICAgIHNhZmVJbnZva2Uob25FbnRlciwgbm9kZSwgaXNBcHBlYXJpbmcpXG4gIH1cblxuICBjb25zdCBoYW5kbGVFbnRlcmluZyA9IChub2RlLCBpc0FwcGVhcmluZykgPT4ge1xuICAgIHNldFN0YXR1cygnZW50ZXJpbmcnKVxuICAgIHNhZmVJbnZva2Uob25FbnRlcmluZywgbm9kZSwgaXNBcHBlYXJpbmcpXG4gIH1cblxuICBjb25zdCBoYW5kbGVFbnRlcmVkID0gKG5vZGUsIGlzQXBwZWFyaW5nKSA9PiB7XG4gICAgc2V0U3RhdHVzKCdlbnRlcmVkJylcbiAgICBzYWZlSW52b2tlKG9uRW50ZXJlZCwgbm9kZSwgaXNBcHBlYXJpbmcpXG4gIH1cblxuICBjb25zdCBoYW5kbGVFeGl0ID0gbm9kZSA9PiB7XG4gICAgaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICBzYWZlSW52b2tlKG9uRXhpdCwgbm9kZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUV4aXRpbmcgPSBub2RlID0+IHtcbiAgICBzZXRTdGF0dXMoJ2V4aXRpbmcnKVxuICAgIHNhZmVJbnZva2Uob25FeGl0aW5nLCBub2RlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXhpdGVkID0gbm9kZSA9PiB7XG4gICAgc2V0U3RhdHVzKCdleGl0ZWQnKVxuICAgIHNhZmVJbnZva2Uob25FeGl0ZWQsIG5vZGUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVCYWNrZHJvcENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgIXNob3VsZENsb3NlT25DbGljaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xvc2UoKVxuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2V4aXRlZCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgdmFsdWU9e1N0YWNraW5nT3JkZXIuT1ZFUkxBWX0+XG4gICAgICB7ekluZGV4ID0+IChcbiAgICAgICAgPFBvcnRhbD5cbiAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgICB0aW1lb3V0PXtBTklNQVRJT05fRFVSQVRJT059XG4gICAgICAgICAgICBpbj17aXNTaG93biAmJiBzdGF0dXMgIT09ICdleGl0aW5nJ31cbiAgICAgICAgICAgIG9uRXhpdD17aGFuZGxlRXhpdH1cbiAgICAgICAgICAgIG9uRXhpdGluZz17aGFuZGxlRXhpdGluZ31cbiAgICAgICAgICAgIG9uRXhpdGVkPXtoYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgICBvbkVudGVyPXtoYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uRW50ZXJpbmc9e2hhbmRsZUVudGVyaW5nfVxuICAgICAgICAgICAgb25FbnRlcmVkPXtoYW5kbGVFbnRlcmVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdGF0ZSA9PiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrZHJvcENsaWNrfVxuICAgICAgICAgICAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgICAgICAgIGJvdHRvbT17MH1cbiAgICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgIGNzcyhhbmltYXRpb25TdHlsZXModGhlbWUub3ZlcmxheUJhY2tncm91bmRDb2xvcikpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyBjaGlsZHJlbih7IHN0YXRlLCBjbG9zZSB9KVxuICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICApfVxuICAgIDwvU3RhY2s+XG4gIClcbn0pXG5cbk92ZXJsYXkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ2hpbGRyZW4gY2FuIGJlIGEgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgY2xvc2U6IGZ1bmNgXG4gICAqIGFuZCBgc3RhdGU6IEVOVEVSSU5HIHwgRU5URVJFRCB8IEVYSVRJTkcgfCBFWElURURgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgc3RhdGVzLlxuICAgKi9cbiAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIHRvIGJlIHBhc3NlZCB0aHJvdWdoIG9uIHRoZSBpbm5lciBCb3guXG4gICAqL1xuICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCBib2R5IHNjcm9sbGluZyBvdXRzaWRlIHRoZSBjb250ZXh0IG9mIHRoZSBvdmVybGF5XG4gICAqL1xuICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyB0aGUgb3ZlcmxheSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBzaG91bGRDbG9zZU9uQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb3ZlcmxheSBpcyBhYm91dCB0byBjbG9zZS5cbiAgICogUmV0dXJuIGBmYWxzZWAgdG8gcHJldmVudCB0aGUgc2hlZXQgZnJvbSBjbG9zaW5nLlxuICAgKiB0eXBlOiBgRnVuY3Rpb24gLT4gQm9vbGVhbmBcbiAgICovXG4gIG9uQmVmb3JlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRgXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKiB0eXBlOiBgRnVuY3Rpb24oZXhpdFN0YXRlOiBBbnk/LCBub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICogaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50LlxuICAgKlxuICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICogaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50LlxuICAgKlxuICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgKiBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnQuXG4gICAqXG4gICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXlcbiJdfQ==