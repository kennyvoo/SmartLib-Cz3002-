"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _portal = require("../../portal");

var _stack = require("../../stack");

var _constants = require("../../constants");

var _hooks = require("../../hooks");

var _getPosition2 = _interopRequireDefault(require("./getPosition"));

var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};

var getCSS = function getCSS(_ref) {
  var initialScale = _ref.initialScale,
      animationDuration = _ref.animationDuration;
  return {
    position: 'fixed',
    opacity: 0,
    transitionTimingFunction: animationEasing.spring,
    transitionDuration: "".concat(animationDuration, "ms"),
    transitionProperty: 'opacity, transform',
    transform: "scale(".concat(initialScale, ") translateY(-1px)"),
    '&[data-state="entering"], &[data-state="entered"]': {
      opacity: 1,
      visibility: 'visible',
      transform: "scale(1)"
    },
    '&[data-state="exiting"]': {
      opacity: 0,
      transform: 'scale(1)'
    }
  };
};

var noop = function noop() {};

var initialDimensions = {
  left: 0,
  top: 0,
  height: 0,
  width: 0,
  transformOrigin: null
};
var Positioner = (0, _react.memo)(function Positioner(props) {
  var target = props.target,
      isShown = props.isShown,
      children = props.children,
      _props$initialScale = props.initialScale,
      initialScale = _props$initialScale === void 0 ? 0.9 : _props$initialScale,
      _props$animationDurat = props.animationDuration,
      animationDuration = _props$animationDurat === void 0 ? 300 : _props$animationDurat,
      _props$position = props.position,
      position = _props$position === void 0 ? _constants.Position.BOTTOM : _props$position,
      _props$bodyOffset = props.bodyOffset,
      bodyOffset = _props$bodyOffset === void 0 ? 6 : _props$bodyOffset,
      _props$targetOffset = props.targetOffset,
      targetOffset = _props$targetOffset === void 0 ? 6 : _props$targetOffset,
      _props$onOpenComplete = props.onOpenComplete,
      onOpenComplete = _props$onOpenComplete === void 0 ? noop : _props$onOpenComplete,
      _props$onCloseComplet = props.onCloseComplete,
      onCloseComplete = _props$onCloseComplet === void 0 ? noop : _props$onCloseComplet;

  var _useState = (0, _react.useState)(initialDimensions),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var previousDimensions = (0, _hooks.usePrevious)(dimensions, initialDimensions);
  var latestAnimationFrame = (0, _react.useRef)();
  var transitionState = (0, _react.useRef)();
  var positionerRef = (0, _react.useRef)();
  var targetRef = (0, _react.useRef)();
  var setTargetRef = (0, _hooks.useMergedRef)(targetRef);
  var getRef = (0, _hooks.useMergedRef)(positionerRef); // Call `update` whenever the component has "entered" and dimensions change

  (0, _react.useEffect)(function () {
    if (transitionState.current === 'entered') {
      latestAnimationFrame.current = requestAnimationFrame(function () {
        update(previousDimensions.height, previousDimensions.width);
      });
    }

    return function () {
      if (latestAnimationFrame.current) {
        cancelAnimationFrame(latestAnimationFrame.current);
      }
    };
  }, [dimensions]);

  var handleEnter = function handleEnter() {
    transitionState.current = 'entered';
    update();
  };

  var update = function update() {
    var prevHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var prevWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!isShown || !targetRef.current || !positionerRef.current) return;
    var targetRect = targetRef.current.getBoundingClientRect();
    var hasEntered = positionerRef.current.getAttribute('data-state') === 'entered';
    var viewportHeight = document.documentElement.clientHeight;
    var viewportWidth = document.documentElement.clientWidth;
    var height;
    var width;

    if (hasEntered) {
      // Only when the animation is done should we opt-in to `getBoundingClientRect`
      var positionerRect = positionerRef.current.getBoundingClientRect(); // https://github.com/segmentio/evergreen/issues/255
      // We need to ceil the width and height to prevent jitter when
      // the window is zoomed (when `window.devicePixelRatio` is not an integer)

      height = Math.round(positionerRect.height);
      width = Math.round(positionerRect.width);
    } else {
      // When the animation is in flight use `offsetWidth/Height` which
      // does not calculate the `transform` property as part of its result.
      // There is still change on jitter during the animation (although unoticable)
      // When the browser is zoomed in — we fix this with `Math.max`.
      height = Math.max(positionerRef.current.offsetHeight, prevHeight);
      width = Math.max(positionerRef.current.offsetWidth, prevWidth);
    }

    var _getPosition = (0, _getPosition2["default"])({
      position: position,
      targetRect: targetRect,
      targetOffset: targetOffset,
      dimensions: {
        height: height,
        width: width
      },
      viewport: {
        width: viewportWidth,
        height: viewportHeight
      },
      viewportOffset: bodyOffset
    }),
        rect = _getPosition.rect,
        transformOrigin = _getPosition.transformOrigin;

    setDimensions({
      left: rect.left,
      top: rect.top,
      height: height,
      width: width,
      transformOrigin: transformOrigin
    });
  };

  var handleExited = function handleExited() {
    transitionState.current = 'exited';
    setDimensions(initialDimensions);
    onCloseComplete();
  };

  return _react["default"].createElement(_stack.Stack, {
    value: _constants.StackingOrder.POSITIONER
  }, function (zIndex) {
    return _react["default"].createElement(_react["default"].Fragment, null, target({
      getRef: setTargetRef,
      isShown: isShown
    }), _react["default"].createElement(_reactTransitionGroup.Transition, {
      appear: true,
      "in": isShown,
      timeout: animationDuration,
      onEnter: handleEnter,
      onEntered: onOpenComplete,
      onExited: handleExited,
      unmountOnExit: true
    }, function (state) {
      return _react["default"].createElement(_portal.Portal, null, children({
        top: dimensions.top,
        left: dimensions.left,
        state: state,
        zIndex: zIndex,
        css: getCSS({
          initialScale: initialScale,
          animationDuration: animationDuration
        }),
        style: {
          transformOrigin: dimensions.transformOrigin,
          left: dimensions.left,
          top: dimensions.top,
          zIndex: zIndex
        },
        getRef: getRef,
        animationDuration: animationDuration
      }));
    }));
  });
});
Positioner.propTypes = {
  /**
   * The position the element that is being positioned is on.
   * Smart positioning might override this.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * When true, show the element being positioned.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Function that returns the element being positioned.
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * The minimum distance from the body to the element being positioned.
   */
  bodyOffset: _propTypes["default"].number,

  /**
   * The minimum distance from the target to the element being positioned.
   */
  targetOffset: _propTypes["default"].number,

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: _propTypes["default"].func.isRequired,

  /**
   * Initial scale of the element being positioned.
   */
  initialScale: _propTypes["default"].number,

  /**
   * Duration of the animation.
   */
  animationDuration: _propTypes["default"].number,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func
};
var _default = Positioner;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3NpdGlvbmVyL3NyYy9Qb3NpdGlvbmVyLmpzIl0sIm5hbWVzIjpbImFuaW1hdGlvbkVhc2luZyIsInNwcmluZyIsImdldENTUyIsImluaXRpYWxTY2FsZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwicG9zaXRpb24iLCJvcGFjaXR5IiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNmb3JtIiwidmlzaWJpbGl0eSIsIm5vb3AiLCJpbml0aWFsRGltZW5zaW9ucyIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJ3aWR0aCIsInRyYW5zZm9ybU9yaWdpbiIsIlBvc2l0aW9uZXIiLCJwcm9wcyIsInRhcmdldCIsImlzU2hvd24iLCJjaGlsZHJlbiIsIlBvc2l0aW9uIiwiQk9UVE9NIiwiYm9keU9mZnNldCIsInRhcmdldE9mZnNldCIsIm9uT3BlbkNvbXBsZXRlIiwib25DbG9zZUNvbXBsZXRlIiwiZGltZW5zaW9ucyIsInNldERpbWVuc2lvbnMiLCJwcmV2aW91c0RpbWVuc2lvbnMiLCJsYXRlc3RBbmltYXRpb25GcmFtZSIsInRyYW5zaXRpb25TdGF0ZSIsInBvc2l0aW9uZXJSZWYiLCJ0YXJnZXRSZWYiLCJzZXRUYXJnZXRSZWYiLCJnZXRSZWYiLCJjdXJyZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJoYW5kbGVFbnRlciIsInByZXZIZWlnaHQiLCJwcmV2V2lkdGgiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFzRW50ZXJlZCIsImdldEF0dHJpYnV0ZSIsInZpZXdwb3J0SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJ2aWV3cG9ydFdpZHRoIiwiY2xpZW50V2lkdGgiLCJwb3NpdGlvbmVyUmVjdCIsIk1hdGgiLCJyb3VuZCIsIm1heCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwidmlld3BvcnQiLCJ2aWV3cG9ydE9mZnNldCIsInJlY3QiLCJoYW5kbGVFeGl0ZWQiLCJTdGFja2luZ09yZGVyIiwiUE9TSVRJT05FUiIsInpJbmRleCIsInN0YXRlIiwiY3NzIiwic3R5bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU07QUFEZ0IsQ0FBeEI7O0FBSUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxZQUFILFFBQUdBLFlBQUg7QUFBQSxNQUFpQkMsaUJBQWpCLFFBQWlCQSxpQkFBakI7QUFBQSxTQUEwQztBQUN2REMsSUFBQUEsUUFBUSxFQUFFLE9BRDZDO0FBRXZEQyxJQUFBQSxPQUFPLEVBQUUsQ0FGOEM7QUFHdkRDLElBQUFBLHdCQUF3QixFQUFFUCxlQUFlLENBQUNDLE1BSGE7QUFJdkRPLElBQUFBLGtCQUFrQixZQUFLSixpQkFBTCxPQUpxQztBQUt2REssSUFBQUEsa0JBQWtCLEVBQUUsb0JBTG1DO0FBTXZEQyxJQUFBQSxTQUFTLGtCQUFXUCxZQUFYLHVCQU44QztBQU92RCx5REFBcUQ7QUFDbkRHLE1BQUFBLE9BQU8sRUFBRSxDQUQwQztBQUVuREssTUFBQUEsVUFBVSxFQUFFLFNBRnVDO0FBR25ERCxNQUFBQSxTQUFTO0FBSDBDLEtBUEU7QUFZdkQsK0JBQTJCO0FBQ3pCSixNQUFBQSxPQUFPLEVBQUUsQ0FEZ0I7QUFFekJJLE1BQUFBLFNBQVMsRUFBRTtBQUZj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b0JBQVNvRCxRQUZlLEVBR3hCcEQsb0JBQVNxRCxTQUhlLEVBSXhCckQsb0JBQVNDLE1BSmUsRUFLeEJELG9CQUFTc0QsV0FMZSxFQU14QnRELG9CQUFTdUQsWUFOZSxFQU94QnZELG9CQUFTd0QsSUFQZSxFQVF4QnhELG9CQUFTeUQsS0FSZSxDQUFoQixDQUxXOztBQWdCckI7OztBQUdBM0QsRUFBQUEsT0FBTyxFQUFFbUQsc0JBQVVTLElBbkJFOztBQXFCckI7OztBQUdBM0QsRUFBQUEsUUFBUSxFQUFFa0Qsc0JBQVVVLElBQVYsQ0FBZUMsVUF4Qko7O0FBMEJyQjs7O0FBR0ExRCxFQUFBQSxVQUFVLEVBQUUrQyxzQkFBVVksTUE3QkQ7O0FBK0JyQjs7O0FBR0ExRCxFQUFBQSxZQUFZLEVBQUU4QyxzQkFBVVksTUFsQ0g7O0FBb0NyQjs7OztBQUlBaEUsRUFBQUEsTUFBTSxFQUFFb0Qsc0JBQVVVLElBQVYsQ0FBZUMsVUF4Q0Y7O0FBMENyQjs7O0FBR0FqRixFQUFBQSxZQUFZLEVBQUVzRSxzQkFBVVksTUE3Q0g7O0FBK0NyQjs7O0FBR0FqRixFQUFBQSxpQkFBaUIsRUFBRXFFLHNCQUFVWSxNQWxEUjs7QUFvRHJCOzs7QUFHQXhELEVBQUFBLGVBQWUsRUFBRTRDLHNCQUFVVSxJQXZETjs7QUF5RHJCOzs7QUFHQXZELEVBQUFBLGNBQWMsRUFBRTZDLHNCQUFVVTtBQTVETCxDQUF2QjtlQStEZWhFLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vLi4vc3RhY2snXG5pbXBvcnQgeyBTdGFja2luZ09yZGVyLCBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHVzZU1lcmdlZFJlZiwgdXNlUHJldmlvdXMgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCBnZXRQb3NpdGlvbiBmcm9tICcuL2dldFBvc2l0aW9uJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIHNwcmluZzogYGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjE3NSlgXG59XG5cbmNvbnN0IGdldENTUyA9ICh7IGluaXRpYWxTY2FsZSwgYW5pbWF0aW9uRHVyYXRpb24gfSkgPT4gKHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIG9wYWNpdHk6IDAsXG4gIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogYW5pbWF0aW9uRWFzaW5nLnNwcmluZyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHthbmltYXRpb25EdXJhdGlvbn1tc2AsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ29wYWNpdHksIHRyYW5zZm9ybScsXG4gIHRyYW5zZm9ybTogYHNjYWxlKCR7aW5pdGlhbFNjYWxlfSkgdHJhbnNsYXRlWSgtMXB4KWAsXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufSlcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBpbml0aWFsRGltZW5zaW9ucyA9IHtcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICBoZWlnaHQ6IDAsXG4gIHdpZHRoOiAwLFxuICB0cmFuc2Zvcm1PcmlnaW46IG51bGxcbn1cblxuY29uc3QgUG9zaXRpb25lciA9IG1lbW8oZnVuY3Rpb24gUG9zaXRpb25lcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgdGFyZ2V0LFxuICAgIGlzU2hvd24sXG4gICAgY2hpbGRyZW4sXG4gICAgaW5pdGlhbFNjYWxlID0gMC45LFxuICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gMzAwLFxuICAgIHBvc2l0aW9uID0gUG9zaXRpb24uQk9UVE9NLFxuICAgIGJvZHlPZmZzZXQgPSA2LFxuICAgIHRhcmdldE9mZnNldCA9IDYsXG4gICAgb25PcGVuQ29tcGxldGUgPSBub29wLFxuICAgIG9uQ2xvc2VDb21wbGV0ZSA9IG5vb3BcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgW2RpbWVuc2lvbnMsIHNldERpbWVuc2lvbnNdID0gdXNlU3RhdGUoaW5pdGlhbERpbWVuc2lvbnMpXG4gIGNvbnN0IHByZXZpb3VzRGltZW5zaW9ucyA9IHVzZVByZXZpb3VzKGRpbWVuc2lvbnMsIGluaXRpYWxEaW1lbnNpb25zKVxuICBjb25zdCBsYXRlc3RBbmltYXRpb25GcmFtZSA9IHVzZVJlZigpXG4gIGNvbnN0IHRyYW5zaXRpb25TdGF0ZSA9IHVzZVJlZigpXG4gIGNvbnN0IHBvc2l0aW9uZXJSZWYgPSB1c2VSZWYoKVxuICBjb25zdCB0YXJnZXRSZWYgPSB1c2VSZWYoKVxuICBjb25zdCBzZXRUYXJnZXRSZWYgPSB1c2VNZXJnZWRSZWYodGFyZ2V0UmVmKVxuICBjb25zdCBnZXRSZWYgPSB1c2VNZXJnZWRSZWYocG9zaXRpb25lclJlZilcblxuICAvLyBDYWxsIGB1cGRhdGVgIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaGFzIFwiZW50ZXJlZFwiIGFuZCBkaW1lbnNpb25zIGNoYW5nZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uU3RhdGUuY3VycmVudCA9PT0gJ2VudGVyZWQnKSB7XG4gICAgICBsYXRlc3RBbmltYXRpb25GcmFtZS5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdXBkYXRlKHByZXZpb3VzRGltZW5zaW9ucy5oZWlnaHQsIHByZXZpb3VzRGltZW5zaW9ucy53aWR0aClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChsYXRlc3RBbmltYXRpb25GcmFtZS5jdXJyZW50KSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGxhdGVzdEFuaW1hdGlvbkZyYW1lLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbZGltZW5zaW9uc10pXG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgdHJhbnNpdGlvblN0YXRlLmN1cnJlbnQgPSAnZW50ZXJlZCdcbiAgICB1cGRhdGUoKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKHByZXZIZWlnaHQgPSAwLCBwcmV2V2lkdGggPSAwKSA9PiB7XG4gICAgaWYgKCFpc1Nob3duIHx8ICF0YXJnZXRSZWYuY3VycmVudCB8fCAhcG9zaXRpb25lclJlZi5jdXJyZW50KSByZXR1cm5cblxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgY29uc3QgaGFzRW50ZXJlZCA9XG4gICAgICBwb3NpdGlvbmVyUmVmLmN1cnJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJykgPT09ICdlbnRlcmVkJ1xuXG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuXG4gICAgbGV0IGhlaWdodFxuICAgIGxldCB3aWR0aFxuICAgIGlmIChoYXNFbnRlcmVkKSB7XG4gICAgICAvLyBPbmx5IHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBkb25lIHNob3VsZCB3ZSBvcHQtaW4gdG8gYGdldEJvdW5kaW5nQ2xpZW50UmVjdGBcbiAgICAgIGNvbnN0IHBvc2l0aW9uZXJSZWN0ID0gcG9zaXRpb25lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vZXZlcmdyZWVuL2lzc3Vlcy8yNTVcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2VpbCB0aGUgd2lkdGggYW5kIGhlaWdodCB0byBwcmV2ZW50IGppdHRlciB3aGVuXG4gICAgICAvLyB0aGUgd2luZG93IGlzIHpvb21lZCAod2hlbiBgd2luZG93LmRldmljZVBpeGVsUmF0aW9gIGlzIG5vdCBhbiBpbnRlZ2VyKVxuICAgICAgaGVpZ2h0ID0gTWF0aC5yb3VuZChwb3NpdGlvbmVyUmVjdC5oZWlnaHQpXG4gICAgICB3aWR0aCA9IE1hdGgucm91bmQocG9zaXRpb25lclJlY3Qud2lkdGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gdGhlIGFuaW1hdGlvbiBpcyBpbiBmbGlnaHQgdXNlIGBvZmZzZXRXaWR0aC9IZWlnaHRgIHdoaWNoXG4gICAgICAvLyBkb2VzIG5vdCBjYWxjdWxhdGUgdGhlIGB0cmFuc2Zvcm1gIHByb3BlcnR5IGFzIHBhcnQgb2YgaXRzIHJlc3VsdC5cbiAgICAgIC8vIFRoZXJlIGlzIHN0aWxsIGNoYW5nZSBvbiBqaXR0ZXIgZHVyaW5nIHRoZSBhbmltYXRpb24gKGFsdGhvdWdoIHVub3RpY2FibGUpXG4gICAgICAvLyBXaGVuIHRoZSBicm93c2VyIGlzIHpvb21lZCBpbiDigJQgd2UgZml4IHRoaXMgd2l0aCBgTWF0aC5tYXhgLlxuICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgocG9zaXRpb25lclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCwgcHJldkhlaWdodClcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgocG9zaXRpb25lclJlZi5jdXJyZW50Lm9mZnNldFdpZHRoLCBwcmV2V2lkdGgpXG4gICAgfVxuXG4gICAgY29uc3QgeyByZWN0LCB0cmFuc2Zvcm1PcmlnaW4gfSA9IGdldFBvc2l0aW9uKHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHRhcmdldE9mZnNldCxcbiAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aFxuICAgICAgfSxcbiAgICAgIHZpZXdwb3J0OiB7XG4gICAgICAgIHdpZHRoOiB2aWV3cG9ydFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHZpZXdwb3J0SGVpZ2h0XG4gICAgICB9LFxuICAgICAgdmlld3BvcnRPZmZzZXQ6IGJvZHlPZmZzZXRcbiAgICB9KVxuXG4gICAgc2V0RGltZW5zaW9ucyh7XG4gICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXhpdGVkID0gKCkgPT4ge1xuICAgIHRyYW5zaXRpb25TdGF0ZS5jdXJyZW50ID0gJ2V4aXRlZCdcbiAgICBzZXREaW1lbnNpb25zKGluaXRpYWxEaW1lbnNpb25zKVxuICAgIG9uQ2xvc2VDb21wbGV0ZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdGFjayB2YWx1ZT17U3RhY2tpbmdPcmRlci5QT1NJVElPTkVSfT5cbiAgICAgIHt6SW5kZXggPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHt0YXJnZXQoeyBnZXRSZWY6IHNldFRhcmdldFJlZiwgaXNTaG93biB9KX1cblxuICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICAgIGluPXtpc1Nob3dufVxuICAgICAgICAgICAgICB0aW1lb3V0PXthbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgb25FbnRlcj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICAgICAgICAgIG9uRXhpdGVkPXtoYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBkaW1lbnNpb25zLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGltZW5zaW9ucy5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjc3M6IGdldENTUyh7XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogZGltZW5zaW9ucy50cmFuc2Zvcm1PcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogZGltZW5zaW9ucy5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogZGltZW5zaW9ucy50b3AsXG4gICAgICAgICAgICAgICAgICAgICAgekluZGV4XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldFJlZixcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9TdGFjaz5cbiAgKVxufSlcblxuUG9zaXRpb25lci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWluZyBwb3NpdGlvbmVkIGlzIG9uLlxuICAgKiBTbWFydCBwb3NpdGlvbmluZyBtaWdodCBvdmVycmlkZSB0aGlzLlxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgUG9zaXRpb24uVE9QLFxuICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgIFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgUG9zaXRpb24uQk9UVE9NX1JJR0hULFxuICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgUG9zaXRpb24uUklHSFRcbiAgXSksXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgc2hvdyB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgKi9cbiAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGRpc3RhbmNlIGZyb20gdGhlIGJvZHkgdG8gdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICovXG4gIGJvZHlPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGRpc3RhbmNlIGZyb20gdGhlIHRhcmdldCB0byB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgKi9cbiAgdGFyZ2V0T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gYSBub2RlIGZvciB0aGUgdGFyZ2V0LlxuICAgKiAoeyBnZXRSZWY6ICgpIC0+IFJlZiwgaXNTaG93bjogQm9vbCB9KSAtPiBSZWFjdCBOb2RlXG4gICAqL1xuICB0YXJnZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEluaXRpYWwgc2NhbGUgb2YgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICovXG4gIGluaXRpYWxTY2FsZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbi5cbiAgICovXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvbmVyXG4iXX0=