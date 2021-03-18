import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import safeInvoke from '../../lib/safe-invoke';
import TextTableCell from './TextTableCell';
import TableCell from './TableCell';
import EditableCellField from './EditableCellField';
var emptyProps = {};
var EditableCell = memo(function EditableCell(props) {
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
      rest = _objectWithoutProperties(props, ["children", "size", "disabled", "placeholder", "isSelectable", "textProps", "autoFocus"]);

  var cursor = 'text';

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      mainRef = _useState2[0],
      setMainRef = _useState2[1];

  var _useState3 = useState(children),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = useState(autoFocus),
      _useState6 = _slicedToArray(_useState5, 2),
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
    safeInvoke(onChange, value);

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

  return React.createElement(React.Fragment, null, React.createElement(TextTableCell, _extends({
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
  }, rest), children ? children : placeholder), isEditing && React.createElement(Portal, null, React.createElement(Stack, null, function (zIndex) {
    return React.createElement(EditableCellField, {
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
EditableCell.propTypes = _objectSpread(_objectSpread({}, TableCell.propTypes), {}, {
  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool,

  /**
   * When true, the cell can't be edited.
   */
  disabled: PropTypes.bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: PropTypes.node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: PropTypes.oneOf([300, 400]),

  /**
   * This is the value of the cell.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Function called when value changes. (value: string) => void.
   */
  onChange: PropTypes.func,

  /**
   * When true, the cell will initialize in the editing state.
   */
  autoFocus: PropTypes.bool
});
export default EditableCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvRWRpdGFibGVDZWxsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiUG9ydGFsIiwiU3RhY2siLCJzYWZlSW52b2tlIiwiVGV4dFRhYmxlQ2VsbCIsIlRhYmxlQ2VsbCIsIkVkaXRhYmxlQ2VsbEZpZWxkIiwiZW1wdHlQcm9wcyIsIkVkaXRhYmxlQ2VsbCIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsImlzU2VsZWN0YWJsZSIsInRleHRQcm9wcyIsImF1dG9Gb2N1cyIsInJlc3QiLCJjdXJzb3IiLCJtYWluUmVmIiwic2V0TWFpblJlZiIsInZhbHVlIiwic2V0VmFsdWUiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJoYW5kbGVEb3VibGVDbGljayIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwibWF0Y2giLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsImhhbmRsZUZpZWxkQ2hhbmdlQ29tcGxldGUiLCJvbkNoYW5nZSIsImZvY3VzIiwiaGFuZGxlRmllbGRDYW5jZWwiLCJoYW5kbGVDbGljayIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFFBQXRCLFFBQXNDLE9BQXRDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsY0FBdkI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGFBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1Qix1QkFBdkI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsYUFBdEI7QUFDQSxP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QUFiLG1DQUlLbkMsU0FBUyxDQUFDbUMsU0FKZjtBQU1FOzs7O0FBSUExQixFQUFBQSxZQUFZLEVBQUVkLFNBQVMsQ0FBQ3lDLElBVjFCOztBQVlFOzs7QUFHQTdCLEVBQUFBLFFBQVEsRUFBRVosU0FBUyxDQUFDeUMsSUFmdEI7O0FBaUJFOzs7QUFHQTVCLEVBQUFBLFdBQVcsRUFBRWIsU0FBUyxDQUFDMEMsSUFwQnpCOztBQXNCRTs7O0FBR0EvQixFQUFBQSxJQUFJLEVBQUVYLFNBQVMsQ0FBQzJDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFoQixDQXpCUjs7QUEyQkU7OztBQUdBakMsRUFBQUEsUUFBUSxFQUFFVixTQUFTLENBQUM0QyxTQUFWLENBQW9CLENBQUM1QyxTQUFTLENBQUM2QyxNQUFYLEVBQW1CN0MsU0FBUyxDQUFDOEMsTUFBN0IsQ0FBcEIsQ0E5Qlo7O0FBZ0NFOzs7QUFHQVosRUFBQUEsUUFBUSxFQUFFbEMsU0FBUyxDQUFDK0MsSUFuQ3RCOztBQXFDRTs7O0FBR0EvQixFQUFBQSxTQUFTLEVBQUVoQixTQUFTLENBQUN5QztBQXhDdkI7QUEyQ0EsZUFBZWpDLFlBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vLi4vc3RhY2snXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgVGV4dFRhYmxlQ2VsbCBmcm9tICcuL1RleHRUYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuaW1wb3J0IEVkaXRhYmxlQ2VsbEZpZWxkIGZyb20gJy4vRWRpdGFibGVDZWxsRmllbGQnXG5cbmNvbnN0IGVtcHR5UHJvcHMgPSB7fVxuXG5jb25zdCBFZGl0YWJsZUNlbGwgPSBtZW1vKGZ1bmN0aW9uIEVkaXRhYmxlQ2VsbChwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgc2l6ZSA9IDMwMCxcbiAgICBkaXNhYmxlZCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1NlbGVjdGFibGUgPSB0cnVlLFxuICAgIHRleHRQcm9wcyA9IGVtcHR5UHJvcHMsXG4gICAgYXV0b0ZvY3VzID0gZmFsc2UsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHNcblxuICBsZXQgY3Vyc29yID0gJ3RleHQnXG5cbiAgY29uc3QgW21haW5SZWYsIHNldE1haW5SZWZdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNoaWxkcmVuKVxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoYXV0b0ZvY3VzKVxuXG4gIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCB8fCAhaXNTZWxlY3RhYmxlKSByZXR1cm5cblxuICAgIHNldElzRWRpdGluZyh0cnVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuXG4gICAgY29uc3QgeyBrZXkgfSA9IGVcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHVzZXIgcHJlc3NlcyBhIGNoYXJhY3RlciBvbiB0aGUga2V5Ym9hcmQsIHVzZSB0aGF0IGNoYXJhY3RlclxuICAgICAqIGFzIHRoZSB2YWx1ZSBpbiB0aGUgdGV4dCBmaWVsZC5cbiAgICAgKi9cbiAgICBpZiAoa2V5ID09PSAnRW50ZXInIHx8IGtleSA9PT0gJ1NoaWZ0Jykge1xuICAgICAgc2V0SXNFZGl0aW5nKHRydWUpXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGtleS5tYXRjaCgvXlthLXpdezAsMTB9JC8pICYmXG4gICAgICAhZS5tZXRhS2V5ICYmXG4gICAgICAhZS5jdHJsS2V5ICYmXG4gICAgICAhZS5hbHRLZXlcbiAgICApIHtcbiAgICAgIHNldElzRWRpdGluZyh0cnVlKVxuICAgICAgc2V0VmFsdWUodmFsdWUgKyBrZXkpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2VDb21wbGV0ZSA9IHZhbHVlID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSByZXN0XG5cbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpXG4gICAgc2V0VmFsdWUodmFsdWUpXG5cbiAgICBzYWZlSW52b2tlKG9uQ2hhbmdlLCB2YWx1ZSlcblxuICAgIGlmIChtYWluUmVmICYmIGlzU2VsZWN0YWJsZSkge1xuICAgICAgbWFpblJlZi5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRmllbGRDYW5jZWwgPSAoKSA9PiB7XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKG1haW5SZWYpIG1haW5SZWYuZm9jdXMoKVxuICB9XG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgY3Vyc29yID0gJ25vdC1hbGxvd2VkJ1xuICB9IGVsc2UgaWYgKGlzU2VsZWN0YWJsZSkge1xuICAgIGN1cnNvciA9ICdkZWZhdWx0J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8VGV4dFRhYmxlQ2VsbFxuICAgICAgICByZWY9e3NldE1haW5SZWZ9XG4gICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICAgIHRleHRQcm9wcz17e1xuICAgICAgICAgIHNpemUsXG4gICAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgfHwgKCFjaGlsZHJlbiAmJiBwbGFjZWhvbGRlcikgPyAwLjUgOiAxLFxuICAgICAgICAgIC4uLnRleHRQcm9wc1xuICAgICAgICB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBwbGFjZWhvbGRlcn1cbiAgICAgIDwvVGV4dFRhYmxlQ2VsbD5cbiAgICAgIHtpc0VkaXRpbmcgJiYgKFxuICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgIHt6SW5kZXggPT4gKFxuICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsRmllbGRcbiAgICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICAgICAgICAgICAgICBnZXRUYXJnZXRSZWY9eygpID0+IG1haW5SZWZ9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uRXNjYXBlPXtoYW5kbGVGaWVsZENhbmNlbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVGaWVsZENoYW5nZUNvbXBsZXRlfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVGaWVsZENhbmNlbH1cbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufSlcblxuRWRpdGFibGVDZWxsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUYWJsZUNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGFibGVDZWxsLnByb3BUeXBlcyxcblxuICAvKlxuICAgKiBNYWtlcyB0aGUgVGFibGVDZWxsIGZvY3VzYWJsZS5cbiAgICogV2lsbCBhZGQgdGFiSW5kZXg9ey0xIHx8IHRoaXMucHJvcHMudGFiSW5kZXh9LlxuICAgKi9cbiAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgY2VsbCBjYW4ndCBiZSBlZGl0ZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBsYWNlaG9sZGVyIHdoZW4gY2hpbGRyZW4gaXMgZmFsc3kuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIHVzZWQgZm9yIHRoZSBUZXh0VGFibGVDZWxsIGFuZCBUZXh0YXJlYS5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDBdKSxcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgdmFsdWUgb2YgdGhlIGNlbGwuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLiAodmFsdWU6IHN0cmluZykgPT4gdm9pZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgY2VsbCB3aWxsIGluaXRpYWxpemUgaW4gdGhlIGVkaXRpbmcgc3RhdGUuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlQ2VsbFxuIl19