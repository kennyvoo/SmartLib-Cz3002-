"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _layers = require("../../layers");

var _theme = require("../../theme");

var _hooks = require("../../hooks");

var _TableRowContext = require("./TableRowContext");

var _manageTableRowFocusInteraction = _interopRequireDefault(require("./manageTableRowFocusInteraction"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var noop = function noop() {};

var TableRow = (0, _react.memo)((0, _react.forwardRef)(function TableRow(props, forwardedRef) {
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
      rest = (0, _objectWithoutProperties2["default"])(props, ["className", "height", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyPress", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"]);
  var theme = (0, _theme.useTheme)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      mainRef = _useState2[0],
      setMainRef = _useState2[1];

  var onRef = (0, _hooks.useMergedRef)(setMainRef, forwardedRef);

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
          (0, _manageTableRowFocusInteraction["default"])(key, mainRef);
        } catch (_) {}
      } else if (key === 'Escape') {
        if (mainRef && mainRef instanceof Node) mainRef.blur();
      }
    }

    onKeyPress(e);
  };

  var themedClassName = theme.getRowClassName(appearance, intent);
  return _react["default"].createElement(_TableRowContext.TableRowProvider, {
    height: height
  }, _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    ref: onRef,
    className: (0, _classnames["default"])(themedClassName, className),
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
TableRow.propTypes = _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: _propTypes["default"].func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: _propTypes["default"].bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: _propTypes["default"].bool,

  /**
   * The intent of the alert.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: _propTypes["default"].string,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = TableRow;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVSb3cuanMiXSwibmFtZXMiOlsibm9vcCIsIlRhYmxlUm93IiwicHJvcHMiLCJmb3J3YXJkZWRSZWYiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJjaGlsZHJlbiIsImludGVudCIsImFwcGVhcmFuY2UiLCJ0YWJJbmRleCIsIm9uQ2xpY2siLCJvbktleVByZXNzIiwib25TZWxlY3QiLCJvbkRlc2VsZWN0IiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0YWJsZSIsImlzU2VsZWN0ZWQiLCJyZXN0IiwidGhlbWUiLCJtYWluUmVmIiwic2V0TWFpblJlZiIsIm9uUmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiXyIsIk5vZGUiLCJibHVyIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0Um93Q2xhc3NOYW1lIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUGFuZSIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm51bWJlciIsInN0cmluZyIsImZ1bmMiLCJib29sIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxpQkFDZix1QkFBVyxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QkMsWUFBekIsRUFBdUM7QUFBQSxNQUU5Q0MsU0FGOEMsR0FtQjVDRixLQW5CNEMsQ0FFOUNFLFNBRjhDO0FBQUEsc0JBbUI1Q0YsS0FuQjRDLENBRzlDRyxNQUg4QztBQUFBLE1BRzlDQSxNQUg4Qyw4QkFHckMsRUFIcUM7QUFBQSxNQUk5Q0MsUUFKOEMsR0FtQjVDSixLQW5CNEMsQ0FJOUNJLFFBSjhDO0FBQUEsc0JBbUI1Q0os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ICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyB1c2VNZXJnZWRSZWYgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCB7IFRhYmxlUm93UHJvdmlkZXIgfSBmcm9tICcuL1RhYmxlUm93Q29udGV4dCdcbmltcG9ydCBtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24gZnJvbSAnLi9tYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24nXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBUYWJsZVJvdyA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gVGFibGVSb3cocHJvcHMsIGZvcndhcmRlZFJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGhlaWdodCA9IDQ4LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpbnRlbnQgPSAnbm9uZScsXG4gICAgICBhcHBlYXJhbmNlID0gJ2RlZmF1bHQnLFxuICAgICAgdGFiSW5kZXggPSAtMSxcblxuICAgICAgLy8gRmlsdGVyIG91dFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5UHJlc3MgPSBub29wLFxuICAgICAgb25TZWxlY3QgPSBub29wLFxuICAgICAgb25EZXNlbGVjdCA9IG5vb3AsXG5cbiAgICAgIGlzSGlnaGxpZ2h0ZWQsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3QgW21haW5SZWYsIHNldE1haW5SZWZdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IG9uUmVmID0gdXNlTWVyZ2VkUmVmKHNldE1haW5SZWYsIGZvcndhcmRlZFJlZilcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25DbGljayhlKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZWxlY3RhYmxlKSB7XG4gICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgb25EZXNlbGVjdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25TZWxlY3QoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgICAgaWYgKGlzU2VsZWN0YWJsZSkge1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gZVxuICAgICAgICBpZiAoa2V5ID09PSAnRW50ZXInIHx8IGtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgb25TZWxlY3QoKVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnIHx8IGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uKGtleSwgbWFpblJlZilcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBpZiAobWFpblJlZiAmJiBtYWluUmVmIGluc3RhbmNlb2YgTm9kZSkgbWFpblJlZi5ibHVyKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbktleVByZXNzKGUpXG4gICAgfVxuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0Um93Q2xhc3NOYW1lKGFwcGVhcmFuY2UsIGludGVudClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVSb3dQcm92aWRlciBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgcmVmPXtvblJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYXJpYS1zZWxlY3RlZD17aXNIaWdobGlnaHRlZH1cbiAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgZGF0YS1pc3NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZX1cbiAgICAgICAgICB0YWJJbmRleD17aXNTZWxlY3RhYmxlID8gdGFiSW5kZXggOiB1bmRlZmluZWR9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGJvcmRlckJvdHRvbT1cIm11dGVkXCJcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9UYWJsZVJvd1Byb3ZpZGVyPlxuICAgIClcbiAgfSlcbilcblxuVGFibGVSb3cucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHJvdy4gUmVtZW1iZXIgdG8gYWRkIHBhZGRpbmdzIHdoZW4gdXNpbmcgXCJhdXRvXCIuXG4gICAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb24gY2xpY2sgYW5kIGVudGVyL3NwYWNlIGtleXByZXNzLlxuICAgKi9cbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAqL1xuICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogTWFrZXMgdGhlIFRhYmxlUm93IHNlbGVjdGFibGUuXG4gICAqL1xuICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNYWtlcyB0aGUgVGFibGVSb3cgc2VsZWN0ZWQuXG4gICAqL1xuICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWFudWFsbHkgc2V0IHRoZSBUYWJsZVJvdyB0byBiZSBoaWdobGlnaHRlZC5cbiAgICovXG4gIGlzSGlnaGxpZ2h0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaW50ZW50IG9mIHRoZSBhbGVydC5cbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdGFibGUgcm93LiBEZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydCBkZWZhdWx0LlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIHRhYmxlIHJvdy5cbiAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93XG4iXX0=