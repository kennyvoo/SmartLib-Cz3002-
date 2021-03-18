import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Positioner } from '../../positioner';
import { Position } from '../../constants';
import { useId } from '../../hooks';
import TooltipStateless from './TooltipStateless';
var emptyProps = {};
var Tooltip = memo(function Tooltip(props) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$position = props.position,
      position = _props$position === void 0 ? Position.BOTTOM : _props$position,
      content = props.content,
      _props$hideDelay = props.hideDelay,
      hideDelay = _props$hideDelay === void 0 ? 120 : _props$hideDelay,
      _props$showDelay = props.showDelay,
      showDelay = _props$showDelay === void 0 ? 0 : _props$showDelay,
      propIsShown = props.isShown,
      children = props.children,
      _props$statelessProps = props.statelessProps,
      statelessProps = _props$statelessProps === void 0 ? emptyProps : _props$statelessProps;
  var id = useId('evergreen-tooltip');

  var _useState = useState(propIsShown || false),
      _useState2 = _slicedToArray(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShownByTarget = _useState4[0],
      setIsShownByTarget = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      closeTimeout = _useState6[0],
      setCloseTimeout = _useState6[1];

  var mouseLeftTarget = function mouseLeftTarget() {
    setIsShownByTarget(false);
  };

  var handleMouseLeaveTarget = debounce(mouseLeftTarget, hideDelay);

  var hide = function hide() {
    setIsShown(false); // Clean up any timeouts that may have been triggered from `showDelay`

    clearTimeout(closeTimeout);
  };

  var handleHide = debounce(hide, hideDelay); // Component will unmount

  useEffect(function () {
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
          popoverTargetProps = _objectWithoutProperties(_props$popoverProps, ["getTargetRef", "isShown"]);

      return React.cloneElement(children, _objectSpread(_objectSpread(_objectSpread({}, popoverTargetProps), tooltipTargetProps), {}, {
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


    return React.cloneElement(children, _objectSpread(_objectSpread({}, tooltipTargetProps), {}, {
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

  return React.createElement(Positioner, {
    target: renderTarget,
    isShown: shown,
    position: position,
    animationDuration: 160
  }, function (_ref4) {
    var css = _ref4.css,
        style = _ref4.style,
        state = _ref4.state,
        getRef = _ref4.getRef;
    return React.createElement(TooltipStateless, _extends({
      id: id,
      appearance: appearance,
      ref: getRef,
      "data-state": state,
      style: style,
      onMouseEnter: handleMouseEnterTarget,
      onMouseLeave: handleMouseLeaveTarget
    }, statelessProps, {
      className: cx(statelessProps.className, css ? glamorCss(css).toString() : undefined)
    }), content);
  });
});
Tooltip.propTypes = {
  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']),

  /**
   * The position the Popover is on.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * The content of the Popover.
   */
  content: PropTypes.node,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: PropTypes.number,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: PropTypes.number,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: PropTypes.bool,

  /**
   * The target button of the Tooltip.
   */
  children: PropTypes.node,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: PropTypes.object
};
export default Tooltip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbImN4IiwiY3NzIiwiZ2xhbW9yQ3NzIiwiUmVhY3QiLCJtZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9wVHlwZXMiLCJkZWJvdW5jZSIsIlBvc2l0aW9uZXIiLCJQb3NpdGlvbiIsInVzZUlkIiwiVG9vbHRpcFN0YXRlbGVzcyIsImVtcHR5UHJvcHMiLCJUb29sdGlwIiwicHJvcHMiLCJhcHBlYXJhbmNlIiwicG9zaXRpb24iLCJCT1RUT00iLCJjb250ZW50IiwiaGlkZURlbGF5Iiwic2hvd0RlbGF5IiwicHJvcElzU2hvd24iLCJpc1Nob3duIiwiY2hpbGRyZW4iLCJzdGF0ZWxlc3NQcm9wcyIsImlkIiwic2V0SXNTaG93biIsImlzU2hvd25CeVRhcmdldCIsInNldElzU2hvd25CeVRhcmdldCIsImNsb3NlVGltZW91dCIsInNldENsb3NlVGltZW91dCIsIm1vdXNlTGVmdFRhcmdldCIsImhhbmRsZU1vdXNlTGVhdmVUYXJnZXQiLCJoaWRlIiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlSGlkZSIsInNob3ciLCJzZXRUaW1lb3V0IiwicmVuZGVyVGFyZ2V0IiwiZ2V0UmVmIiwidG9vbHRpcFRhcmdldFByb3BzIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicG9wb3ZlclByb3BzIiwiZ2V0VGFyZ2V0UmVmIiwicG9wb3ZlclRhcmdldFByb3BzIiwiY2xvbmVFbGVtZW50IiwicmVmIiwiaXNQb3BvdmVyU2hvd24iLCJoYW5kbGVNb3VzZUVudGVyVGFyZ2V0Iiwic2hvd24iLCJzdHlsZSIsInN0YXRlIiwiY2xhc3NOYW1lIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJvbmVPZiIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJub2RlIiwibnVtYmVy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Q0FoSm1CLENBQXBCO0FBa0pBTCxPQUFPLENBQUMyQyxTQUFSLEdBQW9CO0FBQ2xCOzs7QUFHQXpDLEVBQUFBLFVBQVUsRUFBRVQsU0FBUyxDQUFDbUQsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQWhCLENBSk07O0FBTWxCOzs7QUFHQXpDLEVBQUFBLFFBQVEsRUFBRVYsU0FBUyxDQUFDbUQsS0FBVixDQUFnQixDQUN4QmhELFFBQVEsQ0FBQ2lELEdBRGUsRUFFeEJqRCxRQUFRLENBQUNrRCxRQUZlLEVBR3hCbEQsUUFBUSxDQUFDbUQsU0FIZSxFQUl4Qm5ELFFBQVEsQ0FBQ1EsTUFKZSxFQUt4QlIsUUFBUSxDQUFDb0QsV0FMZSxFQU14QnBELFFBQVEsQ0FBQ3FELFlBTmUsRUFPeEJyRCxRQUFRLENBQUNzRCxJQVBlLEVBUXhCdEQsUUFBUSxDQUFDdUQsS0FSZSxDQUFoQixDQVRROztBQW9CbEI7OztBQUdBOUMsRUFBQUEsT0FBTyxFQUFFWixTQUFTLENBQUMyRCxJQXZCRDs7QUF5QmxCOzs7QUFHQTlDLEVBQUFBLFNBQVMsRUFBRWIsU0FBUyxDQUFDNEQsTUE1Qkg7O0FBOEJsQjs7O0FBR0E5QyxFQUFBQSxTQUFTLEVBQUVkLFNBQVMsQ0FBQzRELE1BakNIOztBQW1DbEI7OztBQUdBNUMsRUFBQUEsT0FBTyxFQUFFaEIsU0FBUyxDQUFDNkQsSUF0Q0Q7O0FBd0NsQjs7O0FBR0E1QyxFQUFBQSxRQUFRLEVBQUVqQixTQUFTLENBQUMyRCxJQTNDRjs7QUE2Q2xCOzs7QUFHQXpDLEVBQUFBLGNBQWMsRUFBRWxCLFNBQVMsQ0FBQzhEO0FBaERSLENBQXBCO0FBbURBLGVBQWV2RCxPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnXG5pbXBvcnQgeyBQb3NpdGlvbmVyIH0gZnJvbSAnLi4vLi4vcG9zaXRpb25lcidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCBUb29sdGlwU3RhdGVsZXNzIGZyb20gJy4vVG9vbHRpcFN0YXRlbGVzcydcblxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IFRvb2x0aXAgPSBtZW1vKGZ1bmN0aW9uIFRvb2x0aXAocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgcG9zaXRpb24gPSBQb3NpdGlvbi5CT1RUT00sXG4gICAgY29udGVudCxcbiAgICBoaWRlRGVsYXkgPSAxMjAsXG4gICAgc2hvd0RlbGF5ID0gMCxcbiAgICBpc1Nob3duOiBwcm9wSXNTaG93bixcbiAgICBjaGlsZHJlbixcbiAgICBzdGF0ZWxlc3NQcm9wcyA9IGVtcHR5UHJvcHNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgaWQgPSB1c2VJZCgnZXZlcmdyZWVuLXRvb2x0aXAnKVxuICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShwcm9wSXNTaG93biB8fCBmYWxzZSlcbiAgY29uc3QgW2lzU2hvd25CeVRhcmdldCwgc2V0SXNTaG93bkJ5VGFyZ2V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY2xvc2VUaW1lb3V0LCBzZXRDbG9zZVRpbWVvdXRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBtb3VzZUxlZnRUYXJnZXQgPSAoKSA9PiB7XG4gICAgc2V0SXNTaG93bkJ5VGFyZ2V0KGZhbHNlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZVRhcmdldCA9IGRlYm91bmNlKG1vdXNlTGVmdFRhcmdldCwgaGlkZURlbGF5KVxuXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgc2V0SXNTaG93bihmYWxzZSlcbiAgICAvLyBDbGVhbiB1cCBhbnkgdGltZW91dHMgdGhhdCBtYXkgaGF2ZSBiZWVuIHRyaWdnZXJlZCBmcm9tIGBzaG93RGVsYXlgXG4gICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZW91dClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUhpZGUgPSBkZWJvdW5jZShoaWRlLCBoaWRlRGVsYXkpXG5cbiAgLy8gQ29tcG9uZW50IHdpbGwgdW5tb3VudFxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZW91dClcbiAgICB9LFxuICAgIFtdXG4gIClcblxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgIGlmIChpc1Nob3duKSByZXR1cm5cblxuICAgIGlmICghc2hvd0RlbGF5KSB7XG4gICAgICBzZXRJc1Nob3duKHRydWUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRDbG9zZVRpbWVvdXQoXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNTaG93bih0cnVlKVxuICAgICAgfSwgc2hvd0RlbGF5KVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclRhcmdldCA9ICh7IGdldFJlZiB9KSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcFRhcmdldFByb3BzID0ge1xuICAgICAgb25Nb3VzZUVudGVyOiBzaG93LFxuICAgICAgb25Nb3VzZUxlYXZlOiBoYW5kbGVIaWRlLFxuICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBpZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBzIGNhbiBiZSB1c2VkIHdpdGhpbiBhIFBvcG92ZXIgKG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZClcbiAgICAgKiBXaGVuIGEgVG9vbHRpcCBpcyB1c2VkIHdpdGhpbiBhIFBvcG92ZXIsIHRoZSBQb3BvdmVyIHBhc3Nlc1xuICAgICAqIGl0cyBwcm9wcyB0byB0aGUgVG9vbHRpcCBpbiBhIGBwb3BvdmVyUHJvcHNgIG9iamVjdC5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIGlmIChwcm9wcy5wb3BvdmVyUHJvcHMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgICAgZ2V0VGFyZ2V0UmVmLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgICBpc1Nob3duLFxuICAgICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgIH0gPSBwcm9wcy5wb3BvdmVyUHJvcHNcblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAvLyBBZGQgdGhlIFBvcG92ZXIgcHJvcHMgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzLFxuICAgICAgICAvLyBBZGQgdGhlIFRvb2x0aXAgcHJvcHMgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLi4udG9vbHRpcFRhcmdldFByb3BzLFxuXG4gICAgICAgIHJlZjogcmVmID0+IHtcbiAgICAgICAgICAvLyBHZXQgdGhlIHJlZiBmb3IgdGhlIFRvb2x0aXAuXG4gICAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgICAgICAvLyBQYXNzIHRoZSByZWYgdG8gdGhlIFBvcG92ZXIuXG4gICAgICAgICAgZ2V0VGFyZ2V0UmVmKHJlZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaXRoIG5vcm1hbCB1c2FnZSBvbmx5IHRoZSBwcm9wcyBmb3IgYSBUb29sdGlwIGFyZSBwYXNzZWQgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAuLi50b29sdGlwVGFyZ2V0UHJvcHMsXG4gICAgICByZWY6IHJlZiA9PiB7XG4gICAgICAgIGdldFJlZihyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gIGNvbnN0IGlzUG9wb3ZlclNob3duID0gKCkgPT4gcHJvcHMucG9wb3ZlclByb3BzICYmIHByb3BzLnBvcG92ZXJQcm9wcy5pc1Nob3duXG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlclRhcmdldCA9ICgpID0+IHtcbiAgICBzZXRJc1Nob3duQnlUYXJnZXQodHJ1ZSlcbiAgfVxuXG4gIGxldCBzaG93biA9IChwcm9wSXNTaG93biB8fCBpc1Nob3duIHx8IGlzU2hvd25CeVRhcmdldCkgJiYgIWlzUG9wb3ZlclNob3duKClcblxuICAvLyBUb29sdGlwIHdhcyBleHBsaWNpdGx5IHNldCB0byBub3QgYmUgc2hvd25cbiAgaWYgKHByb3BJc1Nob3duID09PSBmYWxzZSkge1xuICAgIHNob3duID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBvc2l0aW9uZXJcbiAgICAgIHRhcmdldD17cmVuZGVyVGFyZ2V0fVxuICAgICAgaXNTaG93bj17c2hvd259XG4gICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICBhbmltYXRpb25EdXJhdGlvbj17MTYwfVxuICAgID5cbiAgICAgIHsoeyBjc3MsIHN0eWxlLCBzdGF0ZSwgZ2V0UmVmIH0pID0+IChcbiAgICAgICAgPFRvb2x0aXBTdGF0ZWxlc3NcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICByZWY9e2dldFJlZn1cbiAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyVGFyZ2V0fVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZVRhcmdldH1cbiAgICAgICAgICB7Li4uc3RhdGVsZXNzUHJvcHN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWRcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvVG9vbHRpcFN0YXRlbGVzcz5cbiAgICAgICl9XG4gICAgPC9Qb3NpdGlvbmVyPlxuICApXG59KVxuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjYXJkJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gdGhlIFBvcG92ZXIgaXMgb24uXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBQb3NpdGlvbi5UT1AsXG4gICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgUG9zaXRpb24uTEVGVCxcbiAgICBQb3NpdGlvbi5SSUdIVFxuICBdKSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIFBvcG92ZXIuXG4gICAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGltZSBpbiBtcyBiZWZvcmUgaGlkaW5nIHRoZSBUb29sdGlwLlxuICAgKi9cbiAgaGlkZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaW1lIGluIG1zIGJlZm9yZSBzaG93aW5nIHRoZSBUb29sdGlwLlxuICAgKi9cbiAgc2hvd0RlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBXaGVuIFRydWUsIG1hbnVhbGx5IHNob3cgdGhlIFRvb2x0aXAuXG4gICAqL1xuICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBidXR0b24gb2YgdGhlIFRvb2x0aXAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgcGFzc2VkIHRocm91Z2ggdG8gdGhlIFRvb2x0aXAuXG4gICAqL1xuICBzdGF0ZWxlc3NQcm9wczogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iXX0=