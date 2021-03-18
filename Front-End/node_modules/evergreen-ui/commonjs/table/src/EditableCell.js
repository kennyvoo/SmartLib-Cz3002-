"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _portal = require("../../portal");

var _stack = require("../../stack");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _EditableCellField = _interopRequireDefault(require("./EditableCellField"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var emptyProps = {};
var EditableCell = (0, _react.memo)(function EditableCell(props) {
  var children = props.children,
      _props$size = props.size,
      size = _props$size === void 0 ? 300 : _props$size,
      disabled = props.disabled,
      placeholder = props.placeholder,
      _props$isSelectable = props.isSelectable,
      isSelectable = _props$isSelectable === void 0 ? true : _props$isSelectable,
      _props$textProps = props.textProps,
      textProps = _props$textProps === void 0 ? emptyProps : _props$textProps,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "size", "disabled", "placeholder", "isSelectable", "textProps", "autoFocus"]);
  var cursor = 'text';

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      mainRef = _useState2[0],
      setMainRef = _useState2[1];

  var _useState3 = (0, _react.useState)(children),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(autoFocus),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isEditing = _useState6[0],
      setIsEditing = _useState6[1];

  var handleDoubleClick = function handleDoubleClick() {
    if (disabled || !isSelectable) return;
    setIsEditing(true);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (disabled) return;
    var key = e.key;
    /**
     * When the user presses a character on the keyboard, use that character
     * as the value in the text field.
     */

    if (key === 'Enter' || key === 'Shift') {
      setIsEditing(true);
    } else if (key.match(/^[a-z]{0,10}$/) && !e.metaKey && !e.ctrlKey && !e.altKey) {
      setIsEditing(true);
      setValue(value + key);
    }
  };

  var handleFieldChangeComplete = function handleFieldChangeComplete(value) {
    var onChange = rest.onChange;
    setIsEditing(false);
    setValue(value);
    (0, _safeInvoke["default"])(onChange, value);

    if (mainRef && isSelectable) {
      mainRef.focus();
    }
  };

  var handleFieldCancel = function handleFieldCancel() {
    setIsEditing(false);
  };

  var handleClick = function handleClick() {
    if (mainRef) mainRef.focus();
  };

  if (disabled) {
    cursor = 'not-allowed';
  } else if (isSelectable) {
    cursor = 'default';
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_TextTableCell["default"], (0, _extends2["default"])({
    ref: setMainRef,
    isSelectable: isSelectable,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onKeyDown: handleKeyDown,
    cursor: cursor,
    textProps: _objectSpread({
      size: size,
      opacity: disabled || !children && placeholder ? 0.5 : 1
    }, textProps)
  }, rest), children ? children : placeholder), isEditing && _react["default"].createElement(_portal.Portal, null, _react["default"].createElement(_stack.Stack, null, function (zIndex) {
    return _react["default"].createElement(_EditableCellField["default"], {
      zIndex: zIndex,
      getTargetRef: function getTargetRef() {
        return mainRef;
      },
      value: value,
      onEscape: handleFieldCancel,
      onChangeComplete: handleFieldChangeComplete,
      onCancel: handleFieldCancel,
      size: size
    });
  })));
});
EditableCell.propTypes = _objectSpread(_objectSpread({}, _TableCell["default"].propTypes), {}, {
  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: _propTypes["default"].bool,

  /**
   * When true, the cell can't be edited.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: _propTypes["default"].node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: _propTypes["default"].oneOf([300, 400]),

  /**
   * This is the value of the cell.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Function called when value changes. (value: string) => void.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the cell will initialize in the editing state.
   */
  autoFocus: _propTypes["default"].bool
});
var _default = EditableCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvRWRpdGFibGVDZWxsLmpzIl0sIm5hbWVzIjpbImVtcHR5UHJvcHMiLCJFZGl0YWJsZUNlbGwiLCJwcm9wcyIsImNoaWxkcmVuIiwic2l6ZSIsImRpc2FibGVkIiwicGxhY2Vob2xkZXIiLCJpc1NlbGVjdGFibGUiLCJ0ZXh0UHJvcHMiLCJhdXRvRm9jdXMiLCJyZXN0IiwiY3Vyc29yIiwibWFpblJlZiIsInNldE1haW5SZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsIm1hdGNoIiwibWV0YUtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJoYW5kbGVGaWVsZENoYW5nZUNvbXBsZXRlIiwib25DaGFuZ2UiLCJmb2N1cyIsImhhbmRsZUZpZWxkQ2FuY2VsIiwiaGFuZGxlQ2xpY2siLCJvcGFjaXR5IiwiekluZGV4IiwicHJvcFR5cGVzIiwiVGFibGVDZWxsIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm5vZGUiLCJvbmVPZiIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLEVBQW5CO0FBRUEsSUFBTUMsWUFBWSxHQUFHLGlCQUFLLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUEsTUFFbkRDLFFBRm1ELEdBVWpERCxLQVZpRCxDQUVuREMsUUFGbUQ7QUFBQSxvQkFVakRELEtBVmlELENBR25ERSxJQUhtRDtBQUFBLE1BR25EQSxJQUhtRCw0QkFHNUMsR0FINEM7QUFBQSxNQUluREMsUUFKbUQsR0FVakRILEtBVmlELENBSW5ERyxRQUptRDtBQUFBLE1BS25EQyxXQUxtRCxHQVVqREos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TCxzQkFBVU0sTUFBN0IsQ0FBcEIsQ0E5Qlo7O0FBZ0NFOzs7QUFHQWQsRUFBQUEsUUFBUSxFQUFFUSxzQkFBVU8sSUFuQ3RCOztBQXFDRTs7O0FBR0FqQyxFQUFBQSxTQUFTLEVBQUUwQixzQkFBVUM7QUF4Q3ZCO2VBMkNlbkMsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICcuLi8uLi9zdGFjaydcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCBUZXh0VGFibGVDZWxsIGZyb20gJy4vVGV4dFRhYmxlQ2VsbCdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5pbXBvcnQgRWRpdGFibGVDZWxsRmllbGQgZnJvbSAnLi9FZGl0YWJsZUNlbGxGaWVsZCdcblxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IEVkaXRhYmxlQ2VsbCA9IG1lbW8oZnVuY3Rpb24gRWRpdGFibGVDZWxsKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBzaXplID0gMzAwLFxuICAgIGRpc2FibGVkLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzU2VsZWN0YWJsZSA9IHRydWUsXG4gICAgdGV4dFByb3BzID0gZW1wdHlQcm9wcyxcbiAgICBhdXRvRm9jdXMgPSBmYWxzZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuXG4gIGxldCBjdXJzb3IgPSAndGV4dCdcblxuICBjb25zdCBbbWFpblJlZiwgc2V0TWFpblJlZl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoY2hpbGRyZW4pXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShhdXRvRm9jdXMpXG5cbiAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8ICFpc1NlbGVjdGFibGUpIHJldHVyblxuXG4gICAgc2V0SXNFZGl0aW5nKHRydWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm5cbiAgICBjb25zdCB7IGtleSB9ID0gZVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgdXNlciBwcmVzc2VzIGEgY2hhcmFjdGVyIG9uIHRoZSBrZXlib2FyZCwgdXNlIHRoYXQgY2hhcmFjdGVyXG4gICAgICogYXMgdGhlIHZhbHVlIGluIHRoZSB0ZXh0IGZpZWxkLlxuICAgICAqL1xuICAgIGlmIChrZXkgPT09ICdFbnRlcicgfHwga2V5ID09PSAnU2hpZnQnKSB7XG4gICAgICBzZXRJc0VkaXRpbmcodHJ1ZSlcbiAgICB9IGVsc2UgaWYgKFxuICAgICAga2V5Lm1hdGNoKC9eW2Etel17MCwxMH0kLykgJiZcbiAgICAgICFlLm1ldGFLZXkgJiZcbiAgICAgICFlLmN0cmxLZXkgJiZcbiAgICAgICFlLmFsdEtleVxuICAgICkge1xuICAgICAgc2V0SXNFZGl0aW5nKHRydWUpXG4gICAgICBzZXRWYWx1ZSh2YWx1ZSArIGtleSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVGaWVsZENoYW5nZUNvbXBsZXRlID0gdmFsdWUgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHJlc3RcblxuICAgIHNldElzRWRpdGluZyhmYWxzZSlcbiAgICBzZXRWYWx1ZSh2YWx1ZSlcblxuICAgIHNhZmVJbnZva2Uob25DaGFuZ2UsIHZhbHVlKVxuXG4gICAgaWYgKG1haW5SZWYgJiYgaXNTZWxlY3RhYmxlKSB7XG4gICAgICBtYWluUmVmLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVGaWVsZENhbmNlbCA9ICgpID0+IHtcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAobWFpblJlZikgbWFpblJlZi5mb2N1cygpXG4gIH1cblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBjdXJzb3IgPSAnbm90LWFsbG93ZWQnXG4gIH0gZWxzZSBpZiAoaXNTZWxlY3RhYmxlKSB7XG4gICAgY3Vyc29yID0gJ2RlZmF1bHQnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgIHJlZj17c2V0TWFpblJlZn1cbiAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja31cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICBjdXJzb3I9e2N1cnNvcn1cbiAgICAgICAgdGV4dFByb3BzPXt7XG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgICBvcGFjaXR5OiBkaXNhYmxlZCB8fCAoIWNoaWxkcmVuICYmIHBsYWNlaG9sZGVyKSA/IDAuNSA6IDEsXG4gICAgICAgICAgLi4udGV4dFByb3BzXG4gICAgICAgIH19XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IHBsYWNlaG9sZGVyfVxuICAgICAgPC9UZXh0VGFibGVDZWxsPlxuICAgICAge2lzRWRpdGluZyAmJiAoXG4gICAgICAgIDxQb3J0YWw+XG4gICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAge3pJbmRleCA9PiAoXG4gICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGxGaWVsZFxuICAgICAgICAgICAgICAgIHpJbmRleD17ekluZGV4fVxuICAgICAgICAgICAgICAgIGdldFRhcmdldFJlZj17KCkgPT4gbWFpblJlZn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgb25Fc2NhcGU9e2hhbmRsZUZpZWxkQ2FuY2VsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9e2hhbmRsZUZpZWxkQ2hhbmdlQ29tcGxldGV9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUZpZWxkQ2FuY2VsfVxuICAgICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59KVxuXG5FZGl0YWJsZUNlbGwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UYWJsZUNlbGwucHJvcFR5cGVzLFxuXG4gIC8qXG4gICAqIE1ha2VzIHRoZSBUYWJsZUNlbGwgZm9jdXNhYmxlLlxuICAgKiBXaWxsIGFkZCB0YWJJbmRleD17LTEgfHwgdGhpcy5wcm9wcy50YWJJbmRleH0uXG4gICAqL1xuICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjZWxsIGNhbid0IGJlIGVkaXRlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3B0aW9uYWwgcGxhY2Vob2xkZXIgd2hlbiBjaGlsZHJlbiBpcyBmYWxzeS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIHNpemUgdXNlZCBmb3IgdGhlIFRleHRUYWJsZUNlbGwgYW5kIFRleHRhcmVhLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMF0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMuICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjZWxsIHdpbGwgaW5pdGlhbGl6ZSBpbiB0aGUgZWRpdGluZyBzdGF0ZS5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGVDZWxsXG4iXX0=