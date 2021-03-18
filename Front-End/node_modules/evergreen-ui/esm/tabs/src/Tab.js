import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import cx from 'classnames';
import React, { forwardRef, memo } from 'react';
import safeInvoke from '../../lib/safe-invoke';
import warning from '../../lib/warning';
import { useTheme } from '../../theme';
import { Text } from '../../typography';
var styles = {
  display: 'inline-flex',
  fontWeight: 500,
  paddingX: 8,
  marginX: 4,
  borderRadius: 3,
  lineHeight: '28px',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  tabIndex: 0
};

var noop = function noop() {};

var Tab = memo(forwardRef(function Tab(props, ref) {
  var theme = useTheme();

  var appearance = props.appearance,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$height = props.height,
      height = _props$height === void 0 ? 28 : _props$height,
      _props$is = props.is,
      is = _props$is === void 0 ? 'span' : _props$is,
      isSelected = props.isSelected,
      _props$onKeyPress = props.onKeyPress,
      onKeyPress = _props$onKeyPress === void 0 ? noop : _props$onKeyPress,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      className = props.className,
      rest = _objectWithoutProperties(props, ["appearance", "disabled", "height", "is", "isSelected", "onKeyPress", "onSelect", "className"]);

  var handleClick = function handleClick(e) {
    safeInvoke(props.onClick, e);
    onSelect();
  };

  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelect();
      e.preventDefault();
    }

    onKeyPress(e);
  };

  if (process.env.NODE_ENV !== 'production') {
    warning(typeof props.onClick === 'function', '<Tab> expects `onSelect` prop, but you passed `onClick`.');
  }

  var textSize = theme.getTextSizeForControlHeight(height);
  var elementBasedProps;

  if (disabled) {
    elementBasedProps = {
      'aria-disabled': true
    };
  }

  if (is === 'a') {
    // Use aria-current when it's a link
    // https://tink.uk/using-the-aria-current-attribute/
    elementBasedProps = isSelected ? _objectSpread(_objectSpread({}, elementBasedProps), {}, {
      'aria-current': 'page'
    }) : {};
  } else {
    // Use a role="tablist" around the tabs
    // Also pass down a aria-controls="panelId"
    // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
    elementBasedProps = _objectSpread(_objectSpread({}, elementBasedProps), {}, {
      'aria-selected': isSelected,
      role: 'tab'
    });
  }

  var classNames = cx(theme.getTabClassName(appearance), className);
  return React.createElement(Text, _extends({
    className: classNames,
    is: is,
    size: textSize,
    height: height,
    ref: ref
  }, styles, rest, {
    onClick: handleClick,
    onKeyPress: handleKeyPress
  }, elementBasedProps));
}));
Tab.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * Function triggered when tab is selected.
   */
  onSelect: PropTypes.func,

  /**
   * When true, the tab is selected.
   */
  isSelected: PropTypes.bool,

  /**
   * The appearance of the tab.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string,

  /**
   * Class name passed to the Tab.
   * Only use this if you know what you are doing.
   */
  className: PropTypes.string
});
export default Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9UYWIuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiY3giLCJSZWFjdCIsImZvcndhcmRSZWYiLCJtZW1vIiwic2FmZUludm9rZSIsIndhcm5pbmciLCJ1c2VUaGVtZSIsIlRleHQiLCJzdHlsZXMiLCJkaXNwbGF5IiwiZm9udFdlaWdodCIsInBhZGRpbmdYIiwibWFyZ2luWCIsImJvcmRlclJhZGl1cyIsImxpbmVIZWlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0RGVjb3JhdGlvbiIsInRhYkluZGV4Iiwibm9vcCIsIlRhYiIsInByb3BzIiwicmVmIiwidGhlbWUiLCJhcHBlYXJhbmNlIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJpcyIsImlzU2VsZWN0ZWQiLCJvbktleVByZXNzIiwib25TZWxlY3QiLCJjbGFzc05hbWUiLCJyZXN0IiwiaGFuZGxlQ2xpY2siLCJlIiwib25DbGljayIsImhhbmRsZUtleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImVsZW1lbnRCYXNlZFByb3BzIiwicm9sZSIsImNsYXNzTmFtZXMiLCJnZXRUYWJDbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxPQUFPQyxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsbUJBQXBCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixhQUF6QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsSUFB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QUFHZmlCLE1BQUFBLElBQUksRUFBRTtBQUhTLE1BQWpCO0FBS0Q7O0FBRUQsTUFBTUMsVUFBVSxHQUFHOUMsRUFBRSxDQUFDdUIsS0FBSyxDQUFDd0IsZUFBTixDQUFzQnZCLFVBQXRCLENBQUQsRUFBb0NPLFNBQXBDLENBQXJCO0FBRUEsU0FDRSxvQkFBQyxJQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVlLFVBRGI7QUFFRSxJQUFBLEVBQUUsRUFBRW5CLEVBRk47QUFHRSxJQUFBLElBQUksRUFBRWUsUUFIUjtBQUlFLElBQUEsTUFBTSxFQUFFaEIsTUFKVjtBQUtFLElBQUEsR0FBRyxFQUFFSjtBQUxQLEtBTU1kLE1BTk4sRUFPTXdCLElBUE47QUFRRSxJQUFBLE9BQU8sRUFBRUMsV0FSWDtBQVNFLElBQUEsVUFBVSxFQUFFRztBQVRkLEtBVU1RLGlCQVZOLEVBREY7QUFjRCxDQWpGUyxDQURJLENBQWhCO0FBcUZBeEIsR0FBRyxDQUFDNEIsU0FBSixtQ0FJS3pDLElBQUksQ0FBQ3lDLFNBSlY7QUFNRTs7O0FBR0FsQixFQUFBQSxRQUFRLEVBQUUvQixTQUFTLENBQUNrRCxJQVR0Qjs7QUFXRTs7O0FBR0FyQixFQUFBQSxVQUFVLEVBQUU3QixTQUFTLENBQUNtRCxJQWR4Qjs7QUFnQkU7Ozs7QUFJQTFCLEVBQUFBLFVBQVUsRUFBRXpCLFNBQVMsQ0FBQ29ELE1BcEJ4Qjs7QUFzQkU7Ozs7QUFJQXBCLEVBQUFBLFNBQVMsRUFBRWhDLFNBQVMsQ0FBQ29EO0FBMUJ2QjtBQTZCQSxlQUFlL0IsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4uLy4uL2xpYi93YXJuaW5nJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgcGFkZGluZ1g6IDgsXG4gIG1hcmdpblg6IDQsXG4gIGJvcmRlclJhZGl1czogMyxcbiAgbGluZUhlaWdodDogJzI4cHgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0YWJJbmRleDogMFxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgVGFiID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUYWIocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuXG4gICAgY29uc3Qge1xuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBoZWlnaHQgPSAyOCxcbiAgICAgIGlzID0gJ3NwYW4nLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIG9uS2V5UHJlc3MgPSBub29wLFxuICAgICAgb25TZWxlY3QgPSBub29wLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICAgIHNhZmVJbnZva2UocHJvcHMub25DbGljaywgZSlcbiAgICAgIG9uU2VsZWN0KClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IGUgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnICcpIHtcbiAgICAgICAgb25TZWxlY3QoKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgb25LZXlQcmVzcyhlKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICB0eXBlb2YgcHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgJzxUYWI+IGV4cGVjdHMgYG9uU2VsZWN0YCBwcm9wLCBidXQgeW91IHBhc3NlZCBgb25DbGlja2AuJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIGxldCBlbGVtZW50QmFzZWRQcm9wc1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZWxlbWVudEJhc2VkUHJvcHMgPSB7XG4gICAgICAgICdhcmlhLWRpc2FibGVkJzogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpcyA9PT0gJ2EnKSB7XG4gICAgICAvLyBVc2UgYXJpYS1jdXJyZW50IHdoZW4gaXQncyBhIGxpbmtcbiAgICAgIC8vIGh0dHBzOi8vdGluay51ay91c2luZy10aGUtYXJpYS1jdXJyZW50LWF0dHJpYnV0ZS9cbiAgICAgIGVsZW1lbnRCYXNlZFByb3BzID0gaXNTZWxlY3RlZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmVsZW1lbnRCYXNlZFByb3BzLFxuICAgICAgICAgICAgJ2FyaWEtY3VycmVudCc6ICdwYWdlJ1xuICAgICAgICAgIH1cbiAgICAgICAgOiB7fVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgYSByb2xlPVwidGFibGlzdFwiIGFyb3VuZCB0aGUgdGFic1xuICAgICAgLy8gQWxzbyBwYXNzIGRvd24gYSBhcmlhLWNvbnRyb2xzPVwicGFuZWxJZFwiXG4gICAgICAvLyBodHRwczovL3d3dy5zdGVmYW5qdWRpcy5jb20vYmxvZy9hcmlhLXNlbGVjdGVkLWFuZC13aGVuLXRvLXVzZS1pdC9cbiAgICAgIGVsZW1lbnRCYXNlZFByb3BzID0ge1xuICAgICAgICAuLi5lbGVtZW50QmFzZWRQcm9wcyxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICByb2xlOiAndGFiJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjeCh0aGVtZS5nZXRUYWJDbGFzc05hbWUoYXBwZWFyYW5jZSksIGNsYXNzTmFtZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAgIGlzPXtpc31cbiAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnN0eWxlc31cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgey4uLmVsZW1lbnRCYXNlZFByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG5cblRhYi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGV4dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gdGFiIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSB0YWIgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHRhYi5cbiAgICogVGhlIGRlZmF1bHQgdGhlbWUgb25seSBjb21lcyB3aXRoIGEgZGVmYXVsdCBzdHlsZS5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBUYWIuXG4gICAqIE9ubHkgdXNlIHRoaXMgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIl19