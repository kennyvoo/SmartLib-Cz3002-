import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { SelectMenu } from '../../select-menu';
import { CaretDownIcon } from '../../icons';
import TextTableCell from './TextTableCell';
import TableCell from './TableCell';
var MIN_SELECT_MENU_WIDTH = 240;
var emptyProps = {};
var SelectMenuCell = memo(function SelectMenuCell(props) {
  var _useState = useState(MIN_SELECT_MENU_WIDTH),
      _useState2 = _slicedToArray(_useState, 2),
      targetWidth = _useState2[0],
      setTargetWidth = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      shouldClickToggle = _useState4[0],
      setShouldClickToggle = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isFocused = _useState6[0],
      setIsFocused = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      mainRef = _useState8[0],
      setMainRef = _useState8[1];

  var children = props.children,
      _props$size = props.size,
      size = _props$size === void 0 ? 300 : _props$size,
      selectMenuProps = props.selectMenuProps,
      disabled = props.disabled,
      placeholder = props.placeholder,
      _props$isSelectable = props.isSelectable,
      isSelectable = _props$isSelectable === void 0 ? true : _props$isSelectable,
      _props$textProps = props.textProps,
      textProps = _props$textProps === void 0 ? emptyProps : _props$textProps,
      rest = _objectWithoutProperties(props, ["children", "size", "selectMenuProps", "disabled", "placeholder", "isSelectable", "textProps"]);

  var updateOnResize = function updateOnResize() {
    if (!mainRef) return;
    var mainRefWidth = mainRef.offsetWidth;
    setTargetWidth(Math.max(MIN_SELECT_MENU_WIDTH, mainRefWidth));
  };

  var onResize = debounce(updateOnResize, 200);
  useEffect(function () {
    updateOnResize();
    window.addEventListener('resize', onResize, false);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  var onMainRef = function onMainRef(getRef, ref) {
    setMainRef(ref);
    getRef(ref);
  };

  var handleKeyDown = function handleKeyDown(toggle, isShown, e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();

      if (!isShown && isSelectable && !disabled) {
        toggle();
      }
    }
  };

  var handleDoubleClick = function handleDoubleClick(toggle, isShown) {
    if (!isShown && isSelectable && !disabled) {
      toggle();
    }
  };

  var handleClick = function handleClick(toggle, isShown) {
    if (!shouldClickToggle && !isShown) {
      setShouldClickToggle(true);
      return;
    }

    if (isSelectable && !disabled) {
      toggle();
      setShouldClickToggle(true);
    }
  };

  var handleFocus = function handleFocus() {
    setIsFocused(true);
  };

  var handleBlur = function handleBlur() {
    setShouldClickToggle(false);
    setIsFocused(false);
  };

  var cursor = 'default';

  if (disabled) {
    cursor = 'not-allowed';
  } else if (isSelectable) {
    if (isFocused) {
      cursor = 'pointer';
    } else {
      cursor = 'default';
    }
  } else {
    cursor = 'text';
  }

  return React.createElement(SelectMenu, _extends({
    width: targetWidth
  }, selectMenuProps), function (_ref) {
    var toggle = _ref.toggle,
        getRef = _ref.getRef,
        isShown = _ref.isShown;
    return React.createElement(TextTableCell, _extends({
      ref: onMainRef.bind(null, getRef),
      onClick: handleClick.bind(null, toggle, isShown),
      onFocus: handleFocus.bind(null, toggle, isShown),
      onBlur: handleBlur,
      isSelectable: isSelectable && !disabled,
      rightView: isSelectable ? React.createElement(CaretDownIcon, {
        color: "muted"
      }) : null,
      "aria-haspopup": true,
      "aria-expanded": isShown,
      cursor: isShown ? 'pointer' : cursor,
      textProps: _objectSpread({
        size: size,
        opacity: disabled || !children && placeholder ? 0.5 : 1
      }, textProps),
      onKeyDown: handleKeyDown.bind(null, toggle, isShown),
      onDoubleClick: handleDoubleClick.bind(null, toggle, isShown)
    }, rest), children ? children : placeholder);
  });
});
SelectMenuCell.propTypes = _objectSpread(_objectSpread({}, TableCell.propTypes), {}, {
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
  selectMenuProps: PropTypes.object
});
export default SelectMenuCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VsZWN0TWVudUNlbGwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9wVHlwZXMiLCJkZWJvdW5jZSIsIlNlbGVjdE1lbnUiLCJDYXJldERvd25JY29uIiwiVGV4dFRhYmxlQ2VsbCIsIlRhYmxlQ2VsbCIsIk1JTl9TRUxFQ1RfTUVOVV9XSURUSCIsImVtcHR5UHJvcHMiLCJTZWxlY3RNZW51Q2VsbCIsInByb3BzIiwidGFyZ2V0V2lkdGgiLCJzZXRUYXJnZXRXaWR0aCIsInNob3VsZENsaWNrVG9nZ2xlIiwic2V0U2hvdWxkQ2xpY2tUb2dnbGUiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJtYWluUmVmIiwic2V0TWFpblJlZiIsImNoaWxkcmVuIiwic2l6ZSIsInNlbGVjdE1lbnVQcm9wcyIsImRpc2FibGVkIiwicGxhY2Vob2xkZXIiLCJpc1NlbGVjdGFibGUiLCJ0ZXh0UHJvcHMiLCJyZXN0IiwidXBkYXRlT25SZXNpemUiLCJtYWluUmVmV2lkdGgiLCJvZmZzZXRXaWR0aCIsIk1hdGgiLCJtYXgiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25NYWluUmVmIiwiZ2V0UmVmIiwicmVmIiwiaGFuZGxlS2V5RG93biIsInRvZ2dsZSIsImlzU2hvd24iLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVEb3VibGVDbGljayIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiY3Vyc29yIiwiYmluZCIsIm9wYWNpdHkiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsIm9uZU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsUUFBdEIsRUFB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LENBQW1CLElBQW5CLEVBQXlCWCxNQUF6QixFQUFpQ0MsT0FBakMsQ0FmYjtBQWdCRSxNQUFBLGFBQWEsRUFBRUssaUJBQWlCLENBQUNLLElBQWxCLENBQXVCLElBQXZCLEVBQTZCWCxNQUE3QixFQUFxQ0MsT0FBckM7QUFoQmpCLE9BaUJNZixJQWpCTixHQW1CR1AsUUFBUSxHQUFHQSxRQUFILEdBQWNJLFdBbkJ6QixDQURGO0FBdUJELEdBekJILENBREY7QUE2QkQsQ0F2SDBCLENBQTNCO0FBeUhBZCxjQUFjLENBQUM0QyxTQUFmLG1DQUlLL0MsU0FBUyxDQUFDK0MsU0FKZjtBQU1FOzs7O0FBSUE3QixFQUFBQSxZQUFZLEVBQUV2QixTQUFTLENBQUNxRCxJQVYxQjs7QUFZRTs7O0FBR0FoQyxFQUFBQSxRQUFRLEVBQUVyQixTQUFTLENBQUNxRCxJQWZ0Qjs7QUFpQkU7OztBQUdBL0IsRUFBQUEsV0FBVyxFQUFFdEIsU0FBUyxDQUFDc0QsSUFwQnpCOztBQXNCRTs7O0FBR0FuQyxFQUFBQSxJQUFJLEVBQUVuQixTQUFTLENBQUN1RCxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBaEIsQ0F6QlI7QUEyQkVuQyxFQUFBQSxlQUFlLEVBQUVwQixTQUFTLENBQUN3RDtBQTNCN0I7QUE4QkEsZUFBZWhELGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IFNlbGVjdE1lbnUgfSBmcm9tICcuLi8uLi9zZWxlY3QtbWVudSdcbmltcG9ydCB7IENhcmV0RG93bkljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCBUZXh0VGFibGVDZWxsIGZyb20gJy4vVGV4dFRhYmxlQ2VsbCdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5cbmNvbnN0IE1JTl9TRUxFQ1RfTUVOVV9XSURUSCA9IDI0MFxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IFNlbGVjdE1lbnVDZWxsID0gbWVtbyhmdW5jdGlvbiBTZWxlY3RNZW51Q2VsbChwcm9wcykge1xuICBjb25zdCBbdGFyZ2V0V2lkdGgsIHNldFRhcmdldFdpZHRoXSA9IHVzZVN0YXRlKE1JTl9TRUxFQ1RfTUVOVV9XSURUSClcbiAgY29uc3QgW3Nob3VsZENsaWNrVG9nZ2xlLCBzZXRTaG91bGRDbGlja1RvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbWFpblJlZiwgc2V0TWFpblJlZl0gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIHNpemUgPSAzMDAsXG4gICAgc2VsZWN0TWVudVByb3BzLFxuICAgIGRpc2FibGVkLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzU2VsZWN0YWJsZSA9IHRydWUsXG4gICAgdGV4dFByb3BzID0gZW1wdHlQcm9wcyxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHVwZGF0ZU9uUmVzaXplID0gKCkgPT4ge1xuICAgIGlmICghbWFpblJlZikgcmV0dXJuXG4gICAgY29uc3QgbWFpblJlZldpZHRoID0gbWFpblJlZi5vZmZzZXRXaWR0aFxuICAgIHNldFRhcmdldFdpZHRoKE1hdGgubWF4KE1JTl9TRUxFQ1RfTUVOVV9XSURUSCwgbWFpblJlZldpZHRoKSlcbiAgfVxuXG4gIGNvbnN0IG9uUmVzaXplID0gZGVib3VuY2UodXBkYXRlT25SZXNpemUsIDIwMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZU9uUmVzaXplKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUsIGZhbHNlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uTWFpblJlZiA9IChnZXRSZWYsIHJlZikgPT4ge1xuICAgIHNldE1haW5SZWYocmVmKVxuICAgIGdldFJlZihyZWYpXG4gIH1cblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKHRvZ2dsZSwgaXNTaG93biwgZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmICghaXNTaG93biAmJiBpc1NlbGVjdGFibGUgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgIHRvZ2dsZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAodG9nZ2xlLCBpc1Nob3duKSA9PiB7XG4gICAgaWYgKCFpc1Nob3duICYmIGlzU2VsZWN0YWJsZSAmJiAhZGlzYWJsZWQpIHtcbiAgICAgIHRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodG9nZ2xlLCBpc1Nob3duKSA9PiB7XG4gICAgaWYgKCFzaG91bGRDbGlja1RvZ2dsZSAmJiAhaXNTaG93bikge1xuICAgICAgc2V0U2hvdWxkQ2xpY2tUb2dnbGUodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdGFibGUgJiYgIWRpc2FibGVkKSB7XG4gICAgICB0b2dnbGUoKVxuICAgICAgc2V0U2hvdWxkQ2xpY2tUb2dnbGUodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQodHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgc2V0U2hvdWxkQ2xpY2tUb2dnbGUoZmFsc2UpXG4gICAgc2V0SXNGb2N1c2VkKGZhbHNlKVxuICB9XG5cbiAgbGV0IGN1cnNvciA9ICdkZWZhdWx0J1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBjdXJzb3IgPSAnbm90LWFsbG93ZWQnXG4gIH0gZWxzZSBpZiAoaXNTZWxlY3RhYmxlKSB7XG4gICAgaWYgKGlzRm9jdXNlZCkge1xuICAgICAgY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnNvciA9ICdkZWZhdWx0J1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjdXJzb3IgPSAndGV4dCdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdE1lbnUgd2lkdGg9e3RhcmdldFdpZHRofSB7Li4uc2VsZWN0TWVudVByb3BzfT5cbiAgICAgIHsoeyB0b2dnbGUsIGdldFJlZiwgaXNTaG93biB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRleHRUYWJsZUNlbGxcbiAgICAgICAgICAgIHJlZj17b25NYWluUmVmLmJpbmQobnVsbCwgZ2V0UmVmKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlICYmICFkaXNhYmxlZH1cbiAgICAgICAgICAgIHJpZ2h0Vmlldz17aXNTZWxlY3RhYmxlID8gPENhcmV0RG93bkljb24gY29sb3I9XCJtdXRlZFwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXBcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzU2hvd259XG4gICAgICAgICAgICBjdXJzb3I9e2lzU2hvd24gPyAncG9pbnRlcicgOiBjdXJzb3J9XG4gICAgICAgICAgICB0ZXh0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgfHwgKCFjaGlsZHJlbiAmJiBwbGFjZWhvbGRlcikgPyAwLjUgOiAxLFxuICAgICAgICAgICAgICAuLi50ZXh0UHJvcHNcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd24uYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2suYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgICA8L1RleHRUYWJsZUNlbGw+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9TZWxlY3RNZW51PlxuICApXG59KVxuXG5TZWxlY3RNZW51Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGFibGVDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlRhYmxlQ2VsbC5wcm9wVHlwZXMsXG5cbiAgLypcbiAgICogTWFrZXMgdGhlIFRhYmxlQ2VsbCBmb2N1c2FibGUuXG4gICAqIFdpbGwgYWRkIHRhYkluZGV4PXstMSB8fCB0aGlzLnByb3BzLnRhYkluZGV4fS5cbiAgICovXG4gIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGNlbGwgY2FuJ3QgYmUgZWRpdGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBwbGFjZWhvbGRlciB3aGVuIGNoaWxkcmVuIGlzIGZhbHN5LlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSB1c2VkIGZvciB0aGUgVGV4dFRhYmxlQ2VsbCBhbmQgVGV4dGFyZWEuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwXSksXG5cbiAgc2VsZWN0TWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE1lbnVDZWxsXG4iXX0=