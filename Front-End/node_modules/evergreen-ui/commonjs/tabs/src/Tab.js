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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _warning = _interopRequireDefault(require("../../lib/warning"));

var _theme = require("../../theme");

var _typography = require("../../typography");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Tab = (0, _react.memo)((0, _react.forwardRef)(function Tab(props, ref) {
  var theme = (0, _theme.useTheme)();
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
      rest = (0, _objectWithoutProperties2["default"])(props, ["appearance", "disabled", "height", "is", "isSelected", "onKeyPress", "onSelect", "className"]);

  var handleClick = function handleClick(e) {
    (0, _safeInvoke["default"])(props.onClick, e);
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
    (0, _warning["default"])(typeof props.onClick === 'function', '<Tab> expects `onSelect` prop, but you passed `onClick`.');
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

  var classNames = (0, _classnames["default"])(theme.getTabClassName(appearance), className);
  return _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
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
Tab.propTypes = _objectSpread(_objectSpread({}, _typography.Text.propTypes), {}, {
  /**
   * Function triggered when tab is selected.
   */
  onSelect: _propTypes["default"].func,

  /**
   * When true, the tab is selected.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * The appearance of the tab.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string,

  /**
   * Class name passed to the Tab.
   * Only use this if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9UYWIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZGlzcGxheSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nWCIsIm1hcmdpblgiLCJib3JkZXJSYWRpdXMiLCJsaW5lSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dERlY29yYXRpb24iLCJ0YWJJbmRleCIsIm5vb3AiLCJUYWIiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiYXBwZWFyYW5jZSIsImRpc2FibGVkIiwiaGVpZ2h0IiwiaXMiLCJpc1NlbGVjdGVkIiwib25LZXlQcmVzcyIsIm9uU2VsZWN0IiwiY2xhc3NOYW1lIiwicmVzdCIsImhhbmRsZUNsaWNrIiwiZSIsIm9uQ2xpY2siLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidGV4dFNpemUiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJlbGVtZW50QmFzZWRQcm9wcyIsInJvbGUiLCJjbGFzc05hbWVzIiwiZ2V0VGFiQ2xhc3NOYW1lIiwicHJvcFR5cGVzIiwiVGV4dCIsIlByb3BUeXBlcyIsImZ1bmMiLCJib29sIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsT0FBTyxFQUFFLGFBREk7QUFFYkMsRUFBQUEsVUFBVSxFQUFFLEdBRkM7QUFHYkMsRUFBQUEsUUFBUSxFQUFFLENBSEc7QUFJYkMsRUFBQUEsT0FBTyxFQUFFLENBSkk7QUFLYkMsRUFBQUEsWUFBWSxFQUFFLENBTEQ7QUFNYkMsRUFBQUEsVUFBVSxFQUFFLE1BTkM7QUFPYkMsRUFBQUEsVUFBVSxFQUFFLFFBUEM7QUFRYkMsRUFBQUEsY0FBYyxFQUFFLFFBUkg7QUFTYkMs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QU9Nd0IsSUFQTjtBQVFFLElBQUEsT0FBTyxFQUFFQyxXQVJYO0FBU0UsSUFBQSxVQUFVLEVBQUVHO0FBVGQsS0FVTVEsaUJBVk4sRUFERjtBQWNELENBakZELENBRFUsQ0FBWjtBQXFGQXhCLEdBQUcsQ0FBQzRCLFNBQUosbUNBSUtDLGlCQUFLRCxTQUpWO0FBTUU7OztBQUdBbEIsRUFBQUEsUUFBUSxFQUFFb0Isc0JBQVVDLElBVHRCOztBQVdFOzs7QUFHQXZCLEVBQUFBLFVBQVUsRUFBRXNCLHNCQUFVRSxJQWR4Qjs7QUFnQkU7Ozs7QUFJQTVCLEVBQUFBLFVBQVUsRUFBRTBCLHNCQUFVRyxNQXBCeEI7O0FBc0JFOzs7O0FBSUF0QixFQUFBQSxTQUFTLEVBQUVtQixzQkFBVUc7QUExQnZCO2VBNkJlakMsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4uLy4uL2xpYi93YXJuaW5nJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgcGFkZGluZ1g6IDgsXG4gIG1hcmdpblg6IDQsXG4gIGJvcmRlclJhZGl1czogMyxcbiAgbGluZUhlaWdodDogJzI4cHgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0YWJJbmRleDogMFxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgVGFiID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUYWIocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuXG4gICAgY29uc3Qge1xuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBoZWlnaHQgPSAyOCxcbiAgICAgIGlzID0gJ3NwYW4nLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIG9uS2V5UHJlc3MgPSBub29wLFxuICAgICAgb25TZWxlY3QgPSBub29wLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICAgIHNhZmVJbnZva2UocHJvcHMub25DbGljaywgZSlcbiAgICAgIG9uU2VsZWN0KClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IGUgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnICcpIHtcbiAgICAgICAgb25TZWxlY3QoKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgb25LZXlQcmVzcyhlKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICB0eXBlb2YgcHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgJzxUYWI+IGV4cGVjdHMgYG9uU2VsZWN0YCBwcm9wLCBidXQgeW91IHBhc3NlZCBgb25DbGlja2AuJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIGxldCBlbGVtZW50QmFzZWRQcm9wc1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZWxlbWVudEJhc2VkUHJvcHMgPSB7XG4gICAgICAgICdhcmlhLWRpc2FibGVkJzogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpcyA9PT0gJ2EnKSB7XG4gICAgICAvLyBVc2UgYXJpYS1jdXJyZW50IHdoZW4gaXQncyBhIGxpbmtcbiAgICAgIC8vIGh0dHBzOi8vdGluay51ay91c2luZy10aGUtYXJpYS1jdXJyZW50LWF0dHJpYnV0ZS9cbiAgICAgIGVsZW1lbnRCYXNlZFByb3BzID0gaXNTZWxlY3RlZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmVsZW1lbnRCYXNlZFByb3BzLFxuICAgICAgICAgICAgJ2FyaWEtY3VycmVudCc6ICdwYWdlJ1xuICAgICAgICAgIH1cbiAgICAgICAgOiB7fVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgYSByb2xlPVwidGFibGlzdFwiIGFyb3VuZCB0aGUgdGFic1xuICAgICAgLy8gQWxzbyBwYXNzIGRvd24gYSBhcmlhLWNvbnRyb2xzPVwicGFuZWxJZFwiXG4gICAgICAvLyBodHRwczovL3d3dy5zdGVmYW5qdWRpcy5jb20vYmxvZy9hcmlhLXNlbGVjdGVkLWFuZC13aGVuLXRvLXVzZS1pdC9cbiAgICAgIGVsZW1lbnRCYXNlZFByb3BzID0ge1xuICAgICAgICAuLi5lbGVtZW50QmFzZWRQcm9wcyxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICByb2xlOiAndGFiJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjeCh0aGVtZS5nZXRUYWJDbGFzc05hbWUoYXBwZWFyYW5jZSksIGNsYXNzTmFtZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAgIGlzPXtpc31cbiAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnN0eWxlc31cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgey4uLmVsZW1lbnRCYXNlZFByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG5cblRhYi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGV4dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gdGFiIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSB0YWIgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHRhYi5cbiAgICogVGhlIGRlZmF1bHQgdGhlbWUgb25seSBjb21lcyB3aXRoIGEgZGVmYXVsdCBzdHlsZS5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBUYWIuXG4gICAqIE9ubHkgdXNlIHRoaXMgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIl19