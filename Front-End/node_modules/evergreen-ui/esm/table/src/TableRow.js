import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Pane } from '../../layers';
import { useTheme } from '../../theme';
import { useMergedRef } from '../../hooks';
import { TableRowProvider } from './TableRowContext';
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction';

var noop = function noop() {};

var TableRow = memo(forwardRef(function TableRow(props, forwardedRef) {
  var className = props.className,
      _props$height = props.height,
      height = _props$height === void 0 ? 48 : _props$height,
      children = props.children,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? -1 : _props$tabIndex,
      onClick = props.onClick,
      _props$onKeyPress = props.onKeyPress,
      onKeyPress = _props$onKeyPress === void 0 ? noop : _props$onKeyPress,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      _props$onDeselect = props.onDeselect,
      onDeselect = _props$onDeselect === void 0 ? noop : _props$onDeselect,
      isHighlighted = props.isHighlighted,
      isSelectable = props.isSelectable,
      isSelected = props.isSelected,
      rest = _objectWithoutProperties(props, ["className", "height", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyPress", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"]);

  var theme = useTheme();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      mainRef = _useState2[0],
      setMainRef = _useState2[1];

  var onRef = useMergedRef(setMainRef, forwardedRef);

  var handleClick = function handleClick(e) {
    if (typeof onClick === 'function') {
      onClick(e);
    }

    if (isSelectable) {
      if (isSelected) {
        onDeselect();
      } else {
        onSelect();
      }
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (isSelectable) {
      var key = e.key;

      if (key === 'Enter' || key === ' ') {
        onSelect();
        e.preventDefault();
      } else if (key === 'ArrowUp' || key === 'ArrowDown') {
        try {
          manageTableRowFocusInteraction(key, mainRef);
        } catch (_) {}
      } else if (key === 'Escape') {
        if (mainRef && mainRef instanceof Node) mainRef.blur();
      }
    }

    onKeyPress(e);
  };

  var themedClassName = theme.getRowClassName(appearance, intent);
  return React.createElement(TableRowProvider, {
    height: height
  }, React.createElement(Pane, _extends({
    ref: onRef,
    className: cx(themedClassName, className),
    display: "flex",
    "aria-selected": isHighlighted,
    "aria-current": isSelected,
    "data-isselectable": isSelectable,
    tabIndex: isSelectable ? tabIndex : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    height: height,
    borderBottom: "muted"
  }, rest), children));
}));
TableRow.propTypes = _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: PropTypes.func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: PropTypes.bool,

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default TableRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiY3giLCJQYW5lIiwidXNlVGhlbWUiLCJ1c2VNZXJnZWRSZWYiLCJUYWJsZVJvd1Byb3ZpZGVyIiwibWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uIiwibm9vcCIsIlRhYmxlUm93IiwicHJvcHMiLCJmb3J3YXJkZWRSZWYiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJjaGlsZHJlbiIsImludGVudCIsImFwcGVhcmFuY2UiLCJ0YWJJbmRleCIsIm9uQ2xpY2siLCJvbktleVByZXNzIiwib25TZWxlY3QiLCJvbkRlc2VsZWN0IiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0YWJsZSIsImlzU2VsZWN0ZWQiLCJyZXN0IiwidGhlbWUiLCJtYWluUmVmIiwic2V0TWFpblJlZiIsIm9uUmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiXyIsIk5vZGUiLCJibHVyIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0Um93Q2xhc3NOYW1lIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLEVBQWtDQyxRQUFsQyxRQUFrRCxPQUFsRDtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixhQUE3QjtBQUNBLFNBQVNDLGdCQUFULFFBQWlDLG1CQUFqQztBQUNBLE9BQU9DLDhCQUFQLE1BQTJDLGtDQUEzQzs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHWCxJQUFJLENBQ25CQyxVQUFVLENBQUMsU0FBU1UsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLFlBQXpCLEVBQXVDO0FBQUEsTUFFOUNDLFNBRjhDLEdBbUI1Q0YsS0FuQjRDLENBRTlDRSxTQUY4QztBQUFBLHNCQW1CNUNGLEtBbkI0QyxDQUc5Q0csTUFIOEM7QUFBQSxNQUc5Q0EsTUFIOEMsOEJBR3JDLEVBSHFDO0FBQUEsTUFJOUNDLFFBSjhDLEdBbUI1Q0osS0FuQjRDLENBSTlDSSxRQUo4QztBQUFBLHNCQW1CNUNKLEtBbkI0QyxDQUs5Q0ssTUFMOEM7QUFBQSxNQUs5Q0EsTUFMOEMsOEJBS3JDLE1BTHFDO0FBQUEsMEJBbUI1Q0wsS0FuQjRDLENBTTlDTSxVQU44QztBQUFBLE1BTTlDQSxVQU44QyxrQ0FNakMsU0FOaUM7QUFBQSx3QkFtQjVDTixLQW5CNEMsQ0FPOUNPLFFBUDhDO0FBQUEsTUFPOUNBLFFBUDhDLGdDQU9uQyxDQUFDLENBUGtDO0FBQUEsTUFVOUNDLE9BVjhDLEdBbUI1Q1IsS0FuQjRDLENBVTlDUSxPQVY4QztBQUFBLDBCQW1CNUNSLEtBbkI0QyxDQVc5Q1MsVUFYOEM7QUFBQSxNQVc5Q0EsVUFYOEMsa0NBV2pDWCxJQVhpQztBQUFBLHdCQW1CNUNFLEtBbkI0QyxDQVk5Q1UsUUFaOEM7QUFBQSxNQVk5Q0EsUUFaOEMsZ0NBWW5DWixJQVptQztBQUFBLDBCQW1CNUNFLEtBbkI0QyxDQWE5Q1csVUFiOEM7QUFBQSxNQWE5Q0EsVUFiOEMsa0NBYWpDYixJQWJpQztBQUFBLE1BZTlDYyxhQWY4QyxHQW1CNUNaLEtBbkI0QyxDQWU5Q1ksYUFmOEM7QUFBQSxNQWdCOUNDLFlBaEI4QyxHQW1CNUNiLEtBbkI0QyxDQWdCOUNhLFlBaEI4QztBQUFBLE1BaUI5Q0MsVUFqQjhDLEdBbUI1Q2QsS0FuQjRDLENBaUI5Q2MsVUFqQjhDO0FBQUEsTUFrQjNDQyxJQWxCMkMsNEJBbUI1Q2YsS0FuQjRDOztBQXFCaEQsTUFBTWdCLEtBQUssR0FBR3RCLFFBQVEsRUFBdEI7O0FBckJnRCxrQkFzQmxCSixRQUFRLEVBdEJVO0FBQUE7QUFBQSxNQXNCekMyQixPQXRCeUM7QUFBQSxNQXNCaENDLFVBdEJnQzs7QUF1QmhELE1BQU1DLEtBQUssR0FBR3hCLFlBQVksQ0FBQ3VCLFVBQUQsRUFBYWpCLFlBQWIsQ0FBMUI7O0FBRUEsTUFBTW1CLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLENBQUMsRUFBSTtBQUN2QixRQUFJLE9BQU9iLE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakNBLE1BQUFBLE9BQU8sQ0FBQ2EsQ0FBRCxDQUFQO0FBQ0Q7O0FBRUQsUUFBSVIsWUFBSixFQUFrQjtBQUNoQixVQUFJQyxVQUFKLEVBQWdCO0FBQ2RILFFBQUFBLFVBQVU7QUFDWCxPQUZELE1BRU87QUFDTEQsUUFBQUEsUUFBUTtBQUNUO0FBQ0Y7QUFDRixHQVpEOztBQWNBLE1BQU1ZLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUQsQ0FBQyxFQUFJO0FBQ3pCLFFBQUlSLFlBQUosRUFBa0I7QUFBQSxVQUNSVSxHQURRLEdBQ0FGLENBREEsQ0FDUkUsR0FEUTs7QUFFaEIsVUFBSUEsR0FBRyxLQUFLLE9BQVIsSUFBbUJBLEdBQUcsS0FBSyxHQUEvQixFQUFvQztBQUNsQ2IsUUFBQUEsUUFBUTtBQUNSVyxRQUFBQSxDQUFDLENBQUNHLGNBQUY7QUFDRCxPQUhELE1BR08sSUFBSUQsR0FBRyxLQUFLLFNBQVIsSUFBcUJBLEdBQUcsS0FBSyxXQUFqQyxFQUE4QztBQUNuRCxZQUFJO0FBQ0YxQixVQUFBQSw4QkFBOEIsQ0FBQzBCLEdBQUQsRUFBTU4sT0FBTixDQUE5QjtBQUNELFNBRkQsQ0FFRSxPQUFPUSxDQUFQLEVBQVUsQ0FBRTtBQUNmLE9BSk0sTUFJQSxJQUFJRixHQUFHLEtBQUssUUFBWixFQUFzQjtBQUMzQixZQUFJTixPQUFPLElBQUlBLE9BQU8sWUFBWVMsSUFBbEMsRUFBd0NULE9BQU8sQ0FBQ1UsSUFBUjtBQUN6QztBQUNGOztBQUVEbEIsSUFBQUEsVUFBVSxDQUFDWSxDQUFELENBQVY7QUFDRCxHQWhCRDs7QUFrQkEsTUFBTU8sZUFBZSxHQUFHWixLQUFLLENBQUNhLGVBQU4sQ0FBc0J2QixVQUF0QixFQUFrQ0QsTUFBbEMsQ0FBeEI7QUFFQSxTQUNFLG9CQUFDLGdCQUFEO0FBQWtCLElBQUEsTUFBTSxFQUFFRjtBQUExQixLQUNFLG9CQUFDLElBQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRWdCLEtBRFA7QUFFRSxJQUFBLFNBQVMsRUFBRTNCLEVBQUUsQ0FBQ29DLGVBQUQsRUFBa0IxQixTQUFsQixDQUZmO0FBR0UsSUFBQSxPQUFPLEVBQUMsTUFIVjtBQUlFLHFCQUFlVSxhQUpqQjtBQUtFLG9CQUFjRSxVQUxoQjtBQU1FLHlCQUFtQkQsWUFOckI7QUFPRSxJQUFBLFFBQVEsRUFBRUEsWUFBWSxHQUFHTixRQUFILEdBQWN1QixTQVB0QztBQVFFLElBQUEsT0FBTyxFQUFFVixXQVJYO0FBU0UsSUFBQSxTQUFTLEVBQUVFLGFBVGI7QUFVRSxJQUFBLE1BQU0sRUFBRW5CLE1BVlY7QUFXRSxJQUFBLFlBQVksRUFBQztBQVhmLEtBWU1ZLElBWk4sR0FjR1gsUUFkSCxDQURGLENBREY7QUFvQkQsQ0EvRVMsQ0FEUyxDQUFyQjtBQW1GQUwsUUFBUSxDQUFDZ0MsU0FBVCxtQ0FJS3RDLElBQUksQ0FBQ3NDLFNBSlY7QUFNRTs7O0FBR0E1QixFQUFBQSxNQUFNLEVBQUVaLFNBQVMsQ0FBQ3lDLFNBQVYsQ0FBb0IsQ0FBQ3pDLFNBQVMsQ0FBQzBDLE1BQVgsRUFBbUIxQyxTQUFTLENBQUMyQyxNQUE3QixDQUFwQixDQVRWOztBQVdFOzs7QUFHQXhCLEVBQUFBLFFBQVEsRUFBRW5CLFNBQVMsQ0FBQzRDLElBZHRCOztBQWdCRTs7O0FBR0F4QixFQUFBQSxVQUFVLEVBQUVwQixTQUFTLENBQUM0QyxJQW5CeEI7O0FBcUJFOzs7QUFHQXRCLEVBQUFBLFlBQVksRUFBRXRCLFNBQVMsQ0FBQzZDLElBeEIxQjs7QUEwQkU7OztBQUdBdEIsRUFBQUEsVUFBVSxFQUFFdkIsU0FBUyxDQUFDNkMsSUE3QnhCOztBQStCRTs7O0FBR0F4QixFQUFBQSxhQUFhLEVBQUVyQixTQUFTLENBQUM2QyxJQWxDM0I7O0FBb0NFOzs7QUFHQS9CLEVBQUFBLE1BQU0sRUFBRWQsU0FBUyxDQUFDOEMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLENBdkNWOztBQXlDRTs7O0FBR0EvQixFQUFBQSxVQUFVLEVBQUVmLFNBQVMsQ0FBQzJDLE1BNUN4Qjs7QUE4Q0U7Ozs7QUFJQWhDLEVBQUFBLFNBQVMsRUFBRVgsU0FBUyxDQUFDMkM7QUFsRHZCO0FBcURBLGVBQWVuQyxRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBUYWJsZVJvd1Byb3ZpZGVyIH0gZnJvbSAnLi9UYWJsZVJvd0NvbnRleHQnXG5pbXBvcnQgbWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uIGZyb20gJy4vbWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uJ1xuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgVGFibGVSb3cgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYmxlUm93KHByb3BzLCBmb3J3YXJkZWRSZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBoZWlnaHQgPSA0OCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaW50ZW50ID0gJ25vbmUnLFxuICAgICAgYXBwZWFyYW5jZSA9ICdkZWZhdWx0JyxcbiAgICAgIHRhYkluZGV4ID0gLTEsXG5cbiAgICAgIC8vIEZpbHRlciBvdXRcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvbktleVByZXNzID0gbm9vcCxcbiAgICAgIG9uU2VsZWN0ID0gbm9vcCxcbiAgICAgIG9uRGVzZWxlY3QgPSBub29wLFxuXG4gICAgICBpc0hpZ2hsaWdodGVkLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IFttYWluUmVmLCBzZXRNYWluUmVmXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBvblJlZiA9IHVzZU1lcmdlZFJlZihzZXRNYWluUmVmLCBmb3J3YXJkZWRSZWYpXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uQ2xpY2soZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2VsZWN0YWJsZSkge1xuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgIG9uRGVzZWxlY3QoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uU2VsZWN0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICAgIGlmIChpc1NlbGVjdGFibGUpIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGVcbiAgICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICcgJykge1xuICAgICAgICAgIG9uU2VsZWN0KClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbihrZXksIG1haW5SZWYpXG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgaWYgKG1haW5SZWYgJiYgbWFpblJlZiBpbnN0YW5jZW9mIE5vZGUpIG1haW5SZWYuYmx1cigpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25LZXlQcmVzcyhlKVxuICAgIH1cblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFJvd0NsYXNzTmFtZShhcHBlYXJhbmNlLCBpbnRlbnQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlUm93UHJvdmlkZXIgaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIHJlZj17b25SZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgICAgYXJpYS1jdXJyZW50PXtpc1NlbGVjdGVkfVxuICAgICAgICAgIGRhdGEtaXNzZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgICAgdGFiSW5kZXg9e2lzU2VsZWN0YWJsZSA/IHRhYkluZGV4IDogdW5kZWZpbmVkfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBib3JkZXJCb3R0b209XCJtdXRlZFwiXG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvVGFibGVSb3dQcm92aWRlcj5cbiAgICApXG4gIH0pXG4pXG5cblRhYmxlUm93LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBQYW5lIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSByb3cuIFJlbWVtYmVyIHRvIGFkZCBwYWRkaW5ncyB3aGVuIHVzaW5nIFwiYXV0b1wiLlxuICAgKi9cbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIG9uIGNsaWNrIGFuZCBlbnRlci9zcGFjZSBrZXlwcmVzcy5cbiAgICovXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb24gY2xpY2sgYW5kIGVudGVyL3NwYWNlIGtleXByZXNzLlxuICAgKi9cbiAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSBUYWJsZVJvdyBzZWxlY3RhYmxlLlxuICAgKi9cbiAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWFrZXMgdGhlIFRhYmxlUm93IHNlbGVjdGVkLlxuICAgKi9cbiAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IHNldCB0aGUgVGFibGVSb3cgdG8gYmUgaGlnaGxpZ2h0ZWQuXG4gICAqL1xuICBpc0hpZ2hsaWdodGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGludGVudCBvZiB0aGUgYWxlcnQuXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKSxcblxuICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHRhYmxlIHJvdy4gRGVmYXVsdCB0aGVtZSBvbmx5IHN1cHBvcnQgZGVmYXVsdC5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSB0YWJsZSByb3cuXG4gICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVJvd1xuIl19