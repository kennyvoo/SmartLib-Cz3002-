import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { css } from 'glamor';
import React, { memo, forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { SearchIcon } from '../../icons';
import TableHeaderCell from './TableHeaderCell';
var invisibleInputClass = css({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    color: "rgba(67, 90, 111, 0.7)"
  }
}).toString();

var noop = function noop() {};

var SearchTableHeaderCell = memo(forwardRef(function SearchTableHeaderCell(props, ref) {
  var value = props.value,
      children = props.children,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      autoFocus = props.autoFocus,
      _props$spellCheck = props.spellCheck,
      spellCheck = _props$spellCheck === void 0 ? true : _props$spellCheck,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Filter...' : _props$placeholder,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? SearchIcon : _props$icon,
      rest = _objectWithoutProperties(props, ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"]);

  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  return React.createElement(TableHeaderCell, rest, React.createElement(IconWrapper, {
    icon: icon,
    color: "muted",
    marginLeft: 2,
    marginRight: 10,
    size: 12
  }), React.createElement(Text, {
    is: "input",
    size: 300,
    flex: "1",
    className: invisibleInputClass,
    value: value,
    onChange: handleChange,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    fontWeight: 500,
    marginLeft: -2,
    paddingLeft: 0,
    placeholder: placeholder,
    ref: ref
  }));
}));
SearchTableHeaderCell.propTypes = _objectSpread(_objectSpread({}, TableHeaderCell.propTypes), {}, {
  /**
   * The value of the input.
   */
  value: PropTypes.string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: PropTypes.func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: PropTypes.bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: PropTypes.bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: PropTypes.string,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element])
});
export default SearchTableHeaderCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VhcmNoVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJ1c2VDYWxsYmFjayIsIlByb3BUeXBlcyIsIlRleHQiLCJJY29uV3JhcHBlciIsIlNlYXJjaEljb24iLCJUYWJsZUhlYWRlckNlbGwiLCJpbnZpc2libGVJbnB1dENsYXNzIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiV2Via2l0QXBwZWFyYW5jZSIsIk1vekFwcGVhcmFuY2UiLCJXZWJraXRGb250U21vb3RoaW5nIiwib3V0bGluZSIsImNvbG9yIiwidG9TdHJpbmciLCJub29wIiwiU2VhcmNoVGFibGVIZWFkZXJDZWxsIiwicHJvcHMiLCJyZWYiLCJ2YWx1ZSIsImNoaWxkcmVuIiwib25DaGFuZ2UiLCJhdXRvRm9jdXMiLCJzcGVsbENoZWNrIiwicGxhY2Vob2xkZXIiLCJpY29uIiwicmVzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm9uZU9mVHlwZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVNBLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsRUFBa0NDLFdBQWxDLFFBQXFELE9BQXJEO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0Qiw2QkFBNUI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGFBQTNCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixtQkFBNUI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBR1YsR0FBRyxDQUFDO0FBQzlCVyxFQUFBQSxNQUFNLEVBQUUsTUFEc0I7QUFFOUJDLEVBQUFBLGVBQWUsRUFB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R0FOLEVBQUFBLElBQUksRUFBRXhCLFNBQVMsQ0FBQ2lDLFNBQVYsQ0FBb0IsQ0FBQ2pDLFNBQVMsQ0FBQ2tDLFdBQVgsRUFBd0JsQyxTQUFTLENBQUNtQyxPQUFsQyxDQUFwQjtBQWxDUjtBQXFDQSxlQUFlcEIscUJBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tICcuLi8uLi9pY29ucy9zcmMvSWNvbldyYXBwZXInXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgVGFibGVIZWFkZXJDZWxsIGZyb20gJy4vVGFibGVIZWFkZXJDZWxsJ1xuXG5jb25zdCBpbnZpc2libGVJbnB1dENsYXNzID0gY3NzKHtcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICBNb3pBcHBlYXJhbmNlOiAnbm9uZScsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG5cbiAgJyY6Zm9jdXMnOiB7XG4gICAgb3V0bGluZTogJ25vbmUnXG4gIH0sXG5cbiAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgIGNvbG9yOiBgcmdiYSg2NywgOTAsIDExMSwgMC43KWBcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgU2VhcmNoVGFibGVIZWFkZXJDZWxsID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBTZWFyY2hUYWJsZUhlYWRlckNlbGwocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBvbkNoYW5nZSA9IG5vb3AsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBzcGVsbENoZWNrID0gdHJ1ZSxcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0ZpbHRlci4uLicsXG4gICAgICBpY29uID0gU2VhcmNoSWNvbixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKGUgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpLCBbb25DaGFuZ2VdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUhlYWRlckNlbGwgey4uLnJlc3R9PlxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGNvbG9yPVwibXV0ZWRcIlxuICAgICAgICAgIG1hcmdpbkxlZnQ9ezJ9XG4gICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgIHNpemU9ezEyfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnZpc2libGVJbnB1dENsYXNzfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxuICAgICAgICAgIHNwZWxsQ2hlY2s9e3NwZWxsQ2hlY2t9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIG1hcmdpbkxlZnQ9ey0yfVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGVIZWFkZXJDZWxsPlxuICAgIClcbiAgfSlcbilcblxuU2VhcmNoVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUYWJsZUhlYWRlckNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgYXV0b21hdGljYWxseSBmb2N1c2VkIG9uIGNvbXBvbmVudCByZW5kZXIuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgdG8gYXBwbHkgc3BlbGwgY2hlY2tpbmcgdG8gdGhlIGNvbnRlbnQuXG4gICAqL1xuICBzcGVsbENoZWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IGluIHRoZSBpbnB1dCBpZiB0aGUgaW5wdXQgaXMgZW1wdHkuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIEV2ZXJncmVlbiBvciBjdXN0b20gaWNvbiBiZWZvcmUgdGhlIGxhYmVsLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbFxuIl19