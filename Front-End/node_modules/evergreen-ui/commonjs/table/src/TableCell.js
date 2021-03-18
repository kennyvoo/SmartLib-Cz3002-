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

var _toaster = require("../../toaster");

var _theme = require("../../theme");

var _layers = require("../../layers");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _hooks = require("../../hooks");

var _TableRowContext = require("./TableRowContext");

var _manageTableCellFocusInteraction = _interopRequireDefault(require("./manageTableCellFocusInteraction"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function executeArrowKeyOverride(override) {
  if (!override) {
    return;
  }

  if (typeof override === 'function') {
    override();
    return;
  }

  if (typeof override === 'string') {
    document.querySelector(override).focus();
    return;
  } // This needs to be the node, not a React ref.


  override.focus();
}

var TableCell = (0, _react.memo)((0, _react.forwardRef)(function TableCell(props, forwardedRef) {
  var children = props.children,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      onClick = props.onClick,
      onKeyPress = props.onKeyPress,
      onKeyDown = props.onKeyDown,
      isSelectable = props.isSelectable,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? -1 : _props$tabIndex,
      className = props.className,
      rightView = props.rightView,
      arrowKeysOverrides = props.arrowKeysOverrides,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "appearance", "onClick", "onKeyPress", "onKeyDown", "isSelectable", "tabIndex", "className", "rightView", "arrowKeysOverrides"]);
  var theme = (0, _theme.useTheme)();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      cellRef = _useState2[0],
      setCellRef = _useState2[1];

  var handleRef = (0, _hooks.useMergedRef)(setCellRef, forwardedRef);
  var styles = {
    paddingX: 12,
    boxSizing: 'border-box',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    overflow: 'hidden'
  };

  var handleKeyDown = function handleKeyDown(e) {
    var _props$arrowKeysOverr = props.arrowKeysOverrides,
        arrowKeysOverrides = _props$arrowKeysOverr === void 0 ? {} : _props$arrowKeysOverr;

    if (isSelectable) {
      var key = e.key;

      if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
        e.preventDefault();

        try {
          // Support arrow key overrides.
          var override = arrowKeysOverrides[key.slice('Arrow'.length).toLowerCase()];
          if (override === false) return;
          if (override) return executeArrowKeyOverride(override);
          (0, _manageTableCellFocusInteraction["default"])(key, cellRef);
        } catch (error) {
          _toaster.toaster.danger('Keyboard interaction not possible');

          console.error('Keyboard interaction not possible', error);
        }
      } else if (key === 'Escape') {
        if (cellRef && cellRef instanceof Node) cellRef.blur();
      }
    }

    (0, _safeInvoke["default"])(onKeyDown, e);
  };

  var themedClassName = theme.getTableCellClassName(appearance);
  return _react["default"].createElement(_TableRowContext.TableRowConsumer, null, function (height) {
    return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
      ref: handleRef,
      height: height,
      className: (0, _classnames["default"])(themedClassName, className),
      tabIndex: isSelectable ? tabIndex : undefined,
      "data-isselectable": isSelectable,
      onClick: onClick,
      onKeyDown: handleKeyDown
    }, styles, rest), children, rightView ? rightView : null);
  });
}));
TableCell.propTypes = _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /*
   * Makes the TableCell focusable. Used by EditableCell.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: _propTypes["default"].bool,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: _propTypes["default"].string,

  /**
   * Optional node to be placed on the right side of the table cell.
   * Useful for icons and icon buttons.
   */
  rightView: _propTypes["default"].node,

  /**
   * Advanced arrow keys overrides for selectable cells.
   * A string will be used as a selector.
   */
  arrowKeysOverrides: _propTypes["default"].shape({
    up: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    down: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    left: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    right: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])])
  }),

  /**
   * Class name passed to the table cell.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = TableCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVDZWxsLmpzIl0sIm5hbWVzIjpbImV4ZWN1dGVBcnJvd0tleU92ZXJyaWRlIiwib3ZlcnJpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIlRhYmxlQ2VsbCIsInByb3BzIiwiZm9yd2FyZGVkUmVmIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwib25DbGljayIsIm9uS2V5UHJlc3MiLCJvbktleURvd24iLCJpc1NlbGVjdGFibGUiLCJ0YWJJbmRleCIsImNsYXNzTmFtZSIsInJpZ2h0VmlldyIsImFycm93S2V5c092ZXJyaWRlcyIsInJlc3QiLCJ0aGVtZSIsImNlbGxSZWYiLCJzZXRDZWxsUmVmIiwiaGFuZGxlUmVmIiwic3R5bGVzIiwicGFkZGluZ1giLCJib3hTaXppbmciLCJmbGV4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4U2hyaW5rIiwib3ZlcmZsb3ciLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic2xpY2UiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImVycm9yIiwidG9hc3RlciIsImRhbmdlciIsImNvbnNvbGUiLCJOb2RlIiwiYmx1ciIsInRoZW1lZENsYXNzTmFtZSIsImdldFRhYmxlQ2VsbENsYXNzTmFtZSIsImhlaWdodCIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlBhbmUiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibm9kZSIsInNoYXBlIiwidXAiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZWxlbWVudCIsIm9uZU9mIiwiZG93biIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSx1QkFBVCxDQUFpQ0MsUUFBakMsRUFBMkM7QUFDekMsTUFB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QSxrQkFBa0IsRUFBRWlDLHNCQUFVSSxLQUFWLENBQWdCO0FBQ2xDQyxJQUFBQSxFQUFFLEVBQUVMLHNCQUFVTSxTQUFWLENBQW9CLENBQ3RCTixzQkFBVUUsTUFEWSxFQUV0QkYsc0JBQVVPLElBRlksRUFHdEJQLHNCQUFVUSxPQUhZLEVBSXRCUixzQkFBVVMsS0FBVixDQUFnQixDQUFDLEtBQUQsQ0FBaEIsQ0FKc0IsQ0FBcEIsQ0FEOEI7QUFPbENDLElBQUFBLElBQUksRUFBRVYsc0JBQVVNLFNBQVYsQ0FBb0IsQ0FDeEJOLHNCQUFVRSxNQURjLEVBRXhCRixzQkFBVU8sSUFGYyxFQUd4QlAsc0JBQVVRLE9BSGMsRUFJeEJSLHNCQUFVUyxLQUFWLENBQWdCLENBQUMsS0FBRCxDQUFoQixDQUp3QixDQUFwQixDQVA0QjtBQWFsQ0UsSUFBQUEsSUFBSSxFQUFFWCxzQkFBVU0sU0FBVixDQUFvQixDQUN4Qk4sc0JBQVVFLE1BRGMsRUFFeEJGLHNCQUFVTyxJQUZjLEVBR3hCUCxzQkFBVVEsT0FIYyxFQUl4QlIsc0JBQVVTLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELENBQWhCLENBSndCLENBQXBCLENBYjRCO0FBbUJsQ0csSUFBQUEsS0FBSyxFQUFFWixzQkFBVU0sU0FBVixDQUFvQixDQUN6Qk4sc0JBQVVFLE1BRGUsRUFFekJGLHNCQUFVTyxJQUZlLEVBR3pCUCxzQkFBVVEsT0FIZSxFQUl6QlIsc0JBQVVTLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELENBQWhCLENBSnlCLENBQXBCO0FBbkIyQixHQUFoQixDQTNCdEI7O0FBc0RFOzs7O0FBSUE1QyxFQUFBQSxTQUFTLEVBQUVtQyxzQkFBVUU7QUExRHZCO2VBNkRlL0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyB0b2FzdGVyIH0gZnJvbSAnLi4vLi4vdG9hc3RlcidcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBUYWJsZVJvd0NvbnN1bWVyIH0gZnJvbSAnLi9UYWJsZVJvd0NvbnRleHQnXG5pbXBvcnQgbWFuYWdlVGFibGVDZWxsRm9jdXNJbnRlcmFjdGlvbiBmcm9tICcuL21hbmFnZVRhYmxlQ2VsbEZvY3VzSW50ZXJhY3Rpb24nXG5cbmZ1bmN0aW9uIGV4ZWN1dGVBcnJvd0tleU92ZXJyaWRlKG92ZXJyaWRlKSB7XG4gIGlmICghb3ZlcnJpZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3ZlcnJpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvdmVycmlkZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIG92ZXJyaWRlID09PSAnc3RyaW5nJykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcnJpZGUpLmZvY3VzKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgdGhlIG5vZGUsIG5vdCBhIFJlYWN0IHJlZi5cbiAgb3ZlcnJpZGUuZm9jdXMoKVxufVxuXG5jb25zdCBUYWJsZUNlbGwgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYmxlQ2VsbChwcm9wcywgZm9yd2FyZGVkUmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBhcHBlYXJhbmNlID0gJ2RlZmF1bHQnLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5UHJlc3MsXG4gICAgICBvbktleURvd24sXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICB0YWJJbmRleCA9IC0xLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcmlnaHRWaWV3LFxuICAgICAgYXJyb3dLZXlzT3ZlcnJpZGVzLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IFtjZWxsUmVmLCBzZXRDZWxsUmVmXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgaGFuZGxlUmVmID0gdXNlTWVyZ2VkUmVmKHNldENlbGxSZWYsIGZvcndhcmRlZFJlZilcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHBhZGRpbmdYOiAxMixcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgZmxleDogMSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICAgIGNvbnN0IHsgYXJyb3dLZXlzT3ZlcnJpZGVzID0ge30gfSA9IHByb3BzXG5cbiAgICAgIGlmIChpc1NlbGVjdGFibGUpIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ0Fycm93VXAnIHx8XG4gICAgICAgICAga2V5ID09PSAnQXJyb3dEb3duJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ0Fycm93TGVmdCcgfHxcbiAgICAgICAgICBrZXkgPT09ICdBcnJvd1JpZ2h0J1xuICAgICAgICApIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gU3VwcG9ydCBhcnJvdyBrZXkgb3ZlcnJpZGVzLlxuICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGUgPVxuICAgICAgICAgICAgICBhcnJvd0tleXNPdmVycmlkZXNba2V5LnNsaWNlKCdBcnJvdycubGVuZ3RoKS50b0xvd2VyQ2FzZSgpXVxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlID09PSBmYWxzZSkgcmV0dXJuXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUpIHJldHVybiBleGVjdXRlQXJyb3dLZXlPdmVycmlkZShvdmVycmlkZSlcblxuICAgICAgICAgICAgbWFuYWdlVGFibGVDZWxsRm9jdXNJbnRlcmFjdGlvbihrZXksIGNlbGxSZWYpXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRvYXN0ZXIuZGFuZ2VyKCdLZXlib2FyZCBpbnRlcmFjdGlvbiBub3QgcG9zc2libGUnKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignS2V5Ym9hcmQgaW50ZXJhY3Rpb24gbm90IHBvc3NpYmxlJywgZXJyb3IpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBpZiAoY2VsbFJlZiAmJiBjZWxsUmVmIGluc3RhbmNlb2YgTm9kZSkgY2VsbFJlZi5ibHVyKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzYWZlSW52b2tlKG9uS2V5RG93biwgZSlcbiAgICB9XG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRUYWJsZUNlbGxDbGFzc05hbWUoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVSb3dDb25zdW1lcj5cbiAgICAgICAge2hlaWdodCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIHJlZj17aGFuZGxlUmVmfVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgIHRhYkluZGV4PXtpc1NlbGVjdGFibGUgPyB0YWJJbmRleCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZGF0YS1pc3NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICB7Li4uc3R5bGVzfVxuICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICB7cmlnaHRWaWV3ID8gcmlnaHRWaWV3IDogbnVsbH1cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1RhYmxlUm93Q29uc3VtZXI+XG4gICAgKVxuICB9KVxuKVxuXG5UYWJsZUNlbGwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgLypcbiAgICogTWFrZXMgdGhlIFRhYmxlQ2VsbCBmb2N1c2FibGUuIFVzZWQgYnkgRWRpdGFibGVDZWxsLlxuICAgKiBXaWxsIGFkZCB0YWJJbmRleD17LTEgfHwgdGhpcy5wcm9wcy50YWJJbmRleH0uXG4gICAqL1xuICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdGFibGUgcm93LiBEZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydCBkZWZhdWx0LlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogT3B0aW9uYWwgbm9kZSB0byBiZSBwbGFjZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHRhYmxlIGNlbGwuXG4gICAqIFVzZWZ1bCBmb3IgaWNvbnMgYW5kIGljb24gYnV0dG9ucy5cbiAgICovXG4gIHJpZ2h0VmlldzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEFkdmFuY2VkIGFycm93IGtleXMgb3ZlcnJpZGVzIGZvciBzZWxlY3RhYmxlIGNlbGxzLlxuICAgKiBBIHN0cmluZyB3aWxsIGJlIHVzZWQgYXMgYSBzZWxlY3Rvci5cbiAgICovXG4gIGFycm93S2V5c092ZXJyaWRlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB1cDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgIF0pLFxuICAgIGRvd246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICBdKSxcbiAgICBsZWZ0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gICAgXSksXG4gICAgcmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICBdKVxuICB9KSxcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIHRhYmxlIGNlbGwuXG4gICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNlbGxcbiJdfQ==