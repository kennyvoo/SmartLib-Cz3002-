"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _positioner = require("../../positioner");

var _constants = require("../../constants");

var _hooks = require("../../hooks");

var _TooltipStateless = _interopRequireDefault(require("./TooltipStateless"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var emptyProps = {};
var Tooltip = (0, _react.memo)(function Tooltip(props) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$position = props.position,
      position = _props$position === void 0 ? _constants.Position.BOTTOM : _props$position,
      content = props.content,
      _props$hideDelay = props.hideDelay,
      hideDelay = _props$hideDelay === void 0 ? 120 : _props$hideDelay,
      _props$showDelay = props.showDelay,
      showDelay = _props$showDelay === void 0 ? 0 : _props$showDelay,
      propIsShown = props.isShown,
      children = props.children,
      _props$statelessProps = props.statelessProps,
      statelessProps = _props$statelessProps === void 0 ? emptyProps : _props$statelessProps;
  var id = (0, _hooks.useId)('evergreen-tooltip');

  var _useState = (0, _react.useState)(propIsShown || false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isShownByTarget = _useState4[0],
      setIsShownByTarget = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      closeTimeout = _useState6[0],
      setCloseTimeout = _useState6[1];

  var mouseLeftTarget = function mouseLeftTarget() {
    setIsShownByTarget(false);
  };

  var handleMouseLeaveTarget = (0, _lodash["default"])(mouseLeftTarget, hideDelay);

  var hide = function hide() {
    setIsShown(false); // Clean up any timeouts that may have been triggered from `showDelay`

    clearTimeout(closeTimeout);
  };

  var handleHide = (0, _lodash["default"])(hide, hideDelay); // Component will unmount

  (0, _react.useEffect)(function () {
    return function () {
      clearTimeout(closeTimeout);
    };
  }, []);

  var show = function show() {
    if (isShown) return;

    if (!showDelay) {
      setIsShown(true);
      return;
    }

    setCloseTimeout(setTimeout(function () {
      setIsShown(true);
    }, showDelay));
  };

  var renderTarget = function renderTarget(_ref) {
    var getRef = _ref.getRef;
    var tooltipTargetProps = {
      onMouseEnter: show,
      onMouseLeave: handleHide,
      'aria-describedby': id
    };
    /**
     * Tooltips can be used within a Popover (not the other way around)
     * When a Tooltip is used within a Popover, the Popover passes
     * its props to the Tooltip in a `popoverProps` object.
     */
    // eslint-disable-next-line react/prop-types

    if (props.popoverProps) {
      var _props$popoverProps = props.popoverProps,
          getTargetRef = _props$popoverProps.getTargetRef,
          _isShown = _props$popoverProps.isShown,
          popoverTargetProps = (0, _objectWithoutProperties2["default"])(_props$popoverProps, ["getTargetRef", "isShown"]);
      return _react["default"].cloneElement(children, _objectSpread(_objectSpread(_objectSpread({}, popoverTargetProps), tooltipTargetProps), {}, {
        ref: function ref(_ref2) {
          // Get the ref for the Tooltip.
          getRef(_ref2); // Pass the ref to the Popover.

          getTargetRef(_ref2);
        }
      }));
    }
    /**
     * With normal usage only the props for a Tooltip are passed to the target.
     */


    return _react["default"].cloneElement(children, _objectSpread(_objectSpread({}, tooltipTargetProps), {}, {
      ref: function ref(_ref3) {
        getRef(_ref3);
      }
    }));
  }; // eslint-disable-next-line react/prop-types


  var isPopoverShown = function isPopoverShown() {
    return props.popoverProps && props.popoverProps.isShown;
  };

  var handleMouseEnterTarget = function handleMouseEnterTarget() {
    setIsShownByTarget(true);
  };

  var shown = (propIsShown || isShown || isShownByTarget) && !isPopoverShown(); // Tooltip was explicitly set to not be shown

  if (propIsShown === false) {
    shown = false;
  }

  return _react["default"].createElement(_positioner.Positioner, {
    target: renderTarget,
    isShown: shown,
    position: position,
    animationDuration: 160
  }, function (_ref4) {
    var css = _ref4.css,
        style = _ref4.style,
        state = _ref4.state,
        getRef = _ref4.getRef;
    return _react["default"].createElement(_TooltipStateless["default"], (0, _extends2["default"])({
      id: id,
      appearance: appearance,
      ref: getRef,
      "data-state": state,
      style: style,
      onMouseEnter: handleMouseEnterTarget,
      onMouseLeave: handleMouseLeaveTarget
    }, statelessProps, {
      className: (0, _classnames["default"])(statelessProps.className, css ? (0, _glamor.css)(css).toString() : undefined)
    }), content);
  });
});
Tooltip.propTypes = {
  /**
   * The appearance of the tooltip.
   */
  appearance: _propTypes["default"].oneOf(['default', 'card']),

  /**
   * The position the Popover is on.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * The content of the Popover.
   */
  content: _propTypes["default"].node,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: _propTypes["default"].number,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: _propTypes["default"].number,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: _propTypes["default"].bool,

  /**
   * The target button of the Tooltip.
   */
  children: _propTypes["default"].node,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: _propTypes["default"].object
};
var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbImVtcHR5UHJvcHMiLCJUb29sdGlwIiwicHJvcHMiLCJhcHBlYXJhbmNlIiwicG9zaXRpb24iLCJQb3NpdGlvbiIsIkJPVFRPTSIsImNvbnRlbnQiLCJoaWRlRGVsYXkiLCJzaG93RGVsYXkiLCJwcm9wSXNTaG93biIsImlzU2hvd24iLCJjaGlsZHJlbiIsInN0YXRlbGVzc1Byb3BzIiwiaWQiLCJzZXRJc1Nob3duIiwiaXNTaG93bkJ5VGFyZ2V0Iiwic2V0SXNTaG93bkJ5VGFyZ2V0IiwiY2xvc2VUaW1lb3V0Iiwic2V0Q2xvc2VUaW1lb3V0IiwibW91c2VMZWZ0VGFyZ2V0IiwiaGFuZGxlTW91c2VMZWF2ZVRhcmdldCIsImhpZGUiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVIaWRlIiwic2hvdyIsInNldFRpbWVvdXQiLCJyZW5kZXJUYXJnZXQiLCJnZXRSZWYiLCJ0b29sdGlwVGFyZ2V0UHJvcHMiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJwb3BvdmVyUHJvcHMiLCJnZXRUYXJnZXRSZWYiLCJwb3BvdmVyVGFyZ2V0UHJvcHMiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsInJlZiIsImlzUG9wb3ZlclNob3duIiwiaGFuZGxlTW91c2VFbnRlclRhcmdldCIsInNob3duIiwiY3NzIiwic3R5bGUiLCJzdGF0ZSIsImNsYXNzTmFtZSIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwibm9kZSIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7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QyxzQkFBVVUsTUE1Qkg7O0FBOEJsQjs7O0FBR0FqRCxFQUFBQSxTQUFTLEVBQUV1QyxzQkFBVVUsTUFqQ0g7O0FBbUNsQjs7O0FBR0EvQyxFQUFBQSxPQUFPLEVBQUVxQyxzQkFBVVcsSUF0Q0Q7O0FBd0NsQjs7O0FBR0EvQyxFQUFBQSxRQUFRLEVBQUVvQyxzQkFBVVMsSUEzQ0Y7O0FBNkNsQjs7O0FBR0E1QyxFQUFBQSxjQUFjLEVBQUVtQyxzQkFBVVk7QUFoRFIsQ0FBcEI7ZUFtRGUzRCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnXG5pbXBvcnQgeyBQb3NpdGlvbmVyIH0gZnJvbSAnLi4vLi4vcG9zaXRpb25lcidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCBUb29sdGlwU3RhdGVsZXNzIGZyb20gJy4vVG9vbHRpcFN0YXRlbGVzcydcblxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IFRvb2x0aXAgPSBtZW1vKGZ1bmN0aW9uIFRvb2x0aXAocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgcG9zaXRpb24gPSBQb3NpdGlvbi5CT1RUT00sXG4gICAgY29udGVudCxcbiAgICBoaWRlRGVsYXkgPSAxMjAsXG4gICAgc2hvd0RlbGF5ID0gMCxcbiAgICBpc1Nob3duOiBwcm9wSXNTaG93bixcbiAgICBjaGlsZHJlbixcbiAgICBzdGF0ZWxlc3NQcm9wcyA9IGVtcHR5UHJvcHNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgaWQgPSB1c2VJZCgnZXZlcmdyZWVuLXRvb2x0aXAnKVxuICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShwcm9wSXNTaG93biB8fCBmYWxzZSlcbiAgY29uc3QgW2lzU2hvd25CeVRhcmdldCwgc2V0SXNTaG93bkJ5VGFyZ2V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY2xvc2VUaW1lb3V0LCBzZXRDbG9zZVRpbWVvdXRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBtb3VzZUxlZnRUYXJnZXQgPSAoKSA9PiB7XG4gICAgc2V0SXNTaG93bkJ5VGFyZ2V0KGZhbHNlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZVRhcmdldCA9IGRlYm91bmNlKG1vdXNlTGVmdFRhcmdldCwgaGlkZURlbGF5KVxuXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgc2V0SXNTaG93bihmYWxzZSlcbiAgICAvLyBDbGVhbiB1cCBhbnkgdGltZW91dHMgdGhhdCBtYXkgaGF2ZSBiZWVuIHRyaWdnZXJlZCBmcm9tIGBzaG93RGVsYXlgXG4gICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZW91dClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUhpZGUgPSBkZWJvdW5jZShoaWRlLCBoaWRlRGVsYXkpXG5cbiAgLy8gQ29tcG9uZW50IHdpbGwgdW5tb3VudFxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZW91dClcbiAgICB9LFxuICAgIFtdXG4gIClcblxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgIGlmIChpc1Nob3duKSByZXR1cm5cblxuICAgIGlmICghc2hvd0RlbGF5KSB7XG4gICAgICBzZXRJc1Nob3duKHRydWUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRDbG9zZVRpbWVvdXQoXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNTaG93bih0cnVlKVxuICAgICAgfSwgc2hvd0RlbGF5KVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclRhcmdldCA9ICh7IGdldFJlZiB9KSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcFRhcmdldFByb3BzID0ge1xuICAgICAgb25Nb3VzZUVudGVyOiBzaG93LFxuICAgICAgb25Nb3VzZUxlYXZlOiBoYW5kbGVIaWRlLFxuICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBpZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBzIGNhbiBiZSB1c2VkIHdpdGhpbiBhIFBvcG92ZXIgKG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZClcbiAgICAgKiBXaGVuIGEgVG9vbHRpcCBpcyB1c2VkIHdpdGhpbiBhIFBvcG92ZXIsIHRoZSBQb3BvdmVyIHBhc3Nlc1xuICAgICAqIGl0cyBwcm9wcyB0byB0aGUgVG9vbHRpcCBpbiBhIGBwb3BvdmVyUHJvcHNgIG9iamVjdC5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIGlmIChwcm9wcy5wb3BvdmVyUHJvcHMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgICAgZ2V0VGFyZ2V0UmVmLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgICBpc1Nob3duLFxuICAgICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgIH0gPSBwcm9wcy5wb3BvdmVyUHJvcHNcblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAvLyBBZGQgdGhlIFBvcG92ZXIgcHJvcHMgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzLFxuICAgICAgICAvLyBBZGQgdGhlIFRvb2x0aXAgcHJvcHMgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLi4udG9vbHRpcFRhcmdldFByb3BzLFxuXG4gICAgICAgIHJlZjogcmVmID0+IHtcbiAgICAgICAgICAvLyBHZXQgdGhlIHJlZiBmb3IgdGhlIFRvb2x0aXAuXG4gICAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgICAgICAvLyBQYXNzIHRoZSByZWYgdG8gdGhlIFBvcG92ZXIuXG4gICAgICAgICAgZ2V0VGFyZ2V0UmVmKHJlZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaXRoIG5vcm1hbCB1c2FnZSBvbmx5IHRoZSBwcm9wcyBmb3IgYSBUb29sdGlwIGFyZSBwYXNzZWQgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAuLi50b29sdGlwVGFyZ2V0UHJvcHMsXG4gICAgICByZWY6IHJlZiA9PiB7XG4gICAgICAgIGdldFJlZihyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gIGNvbnN0IGlzUG9wb3ZlclNob3duID0gKCkgPT4gcHJvcHMucG9wb3ZlclByb3BzICYmIHByb3BzLnBvcG92ZXJQcm9wcy5pc1Nob3duXG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlclRhcmdldCA9ICgpID0+IHtcbiAgICBzZXRJc1Nob3duQnlUYXJnZXQodHJ1ZSlcbiAgfVxuXG4gIGxldCBzaG93biA9IChwcm9wSXNTaG93biB8fCBpc1Nob3duIHx8IGlzU2hvd25CeVRhcmdldCkgJiYgIWlzUG9wb3ZlclNob3duKClcblxuICAvLyBUb29sdGlwIHdhcyBleHBsaWNpdGx5IHNldCB0byBub3QgYmUgc2hvd25cbiAgaWYgKHByb3BJc1Nob3duID09PSBmYWxzZSkge1xuICAgIHNob3duID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBvc2l0aW9uZXJcbiAgICAgIHRhcmdldD17cmVuZGVyVGFyZ2V0fVxuICAgICAgaXNTaG93bj17c2hvd259XG4gICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICBhbmltYXRpb25EdXJhdGlvbj17MTYwfVxuICAgID5cbiAgICAgIHsoeyBjc3MsIHN0eWxlLCBzdGF0ZSwgZ2V0UmVmIH0pID0+IChcbiAgICAgICAgPFRvb2x0aXBTdGF0ZWxlc3NcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICByZWY9e2dldFJlZn1cbiAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyVGFyZ2V0fVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZVRhcmdldH1cbiAgICAgICAgICB7Li4uc3RhdGVsZXNzUHJvcHN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWRcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvVG9vbHRpcFN0YXRlbGVzcz5cbiAgICAgICl9XG4gICAgPC9Qb3NpdGlvbmVyPlxuICApXG59KVxuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjYXJkJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gdGhlIFBvcG92ZXIgaXMgb24uXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBQb3NpdGlvbi5UT1AsXG4gICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgUG9zaXRpb24uTEVGVCxcbiAgICBQb3NpdGlvbi5SSUdIVFxuICBdKSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIFBvcG92ZXIuXG4gICAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGltZSBpbiBtcyBiZWZvcmUgaGlkaW5nIHRoZSBUb29sdGlwLlxuICAgKi9cbiAgaGlkZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaW1lIGluIG1zIGJlZm9yZSBzaG93aW5nIHRoZSBUb29sdGlwLlxuICAgKi9cbiAgc2hvd0RlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBXaGVuIFRydWUsIG1hbnVhbGx5IHNob3cgdGhlIFRvb2x0aXAuXG4gICAqL1xuICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBidXR0b24gb2YgdGhlIFRvb2x0aXAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgcGFzc2VkIHRocm91Z2ggdG8gdGhlIFRvb2x0aXAuXG4gICAqL1xuICBzdGF0ZWxlc3NQcm9wczogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iXX0=