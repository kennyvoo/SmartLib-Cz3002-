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

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _selectMenu = require("../../select-menu");

var _icons = require("../../icons");

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MIN_SELECT_MENU_WIDTH = 240;
var emptyProps = {};
var SelectMenuCell = (0, _react.memo)(function SelectMenuCell(props) {
  var _useState = (0, _react.useState)(MIN_SELECT_MENU_WIDTH),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      targetWidth = _useState2[0],
      setTargetWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      shouldClickToggle = _useState4[0],
      setShouldClickToggle = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isFocused = _useState6[0],
      setIsFocused = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
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
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "size", "selectMenuProps", "disabled", "placeholder", "isSelectable", "textProps"]);

  var updateOnResize = function updateOnResize() {
    if (!mainRef) return;
    var mainRefWidth = mainRef.offsetWidth;
    setTargetWidth(Math.max(MIN_SELECT_MENU_WIDTH, mainRefWidth));
  };

  var onResize = (0, _lodash["default"])(updateOnResize, 200);
  (0, _react.useEffect)(function () {
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

  return _react["default"].createElement(_selectMenu.SelectMenu, (0, _extends2["default"])({
    width: targetWidth
  }, selectMenuProps), function (_ref) {
    var toggle = _ref.toggle,
        getRef = _ref.getRef,
        isShown = _ref.isShown;
    return _react["default"].createElement(_TextTableCell["default"], (0, _extends2["default"])({
      ref: onMainRef.bind(null, getRef),
      onClick: handleClick.bind(null, toggle, isShown),
      onFocus: handleFocus.bind(null, toggle, isShown),
      onBlur: handleBlur,
      isSelectable: isSelectable && !disabled,
      rightView: isSelectable ? _react["default"].createElement(_icons.CaretDownIcon, {
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
SelectMenuCell.propTypes = _objectSpread(_objectSpread({}, _TableCell["default"].propTypes), {}, {
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
  selectMenuProps: _propTypes["default"].object
});
var _default = SelectMenuCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VsZWN0TWVudUNlbGwuanMiXSwibmFtZXMiOlsiTUlOX1NFTEVDVF9NRU5VX1dJRFRIIiwiZW1wdHlQcm9wcyIsIlNlbGVjdE1lbnVDZWxsIiwicHJvcHMiLCJ0YXJnZXRXaWR0aCIsInNldFRhcmdldFdpZHRoIiwic2hvdWxkQ2xpY2tUb2dnbGUiLCJzZXRTaG91bGRDbGlja1RvZ2dsZSIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsIm1haW5SZWYiLCJzZXRNYWluUmVmIiwiY2hpbGRyZW4iLCJzaXplIiwic2VsZWN0TWVudVByb3BzIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsImlzU2VsZWN0YWJsZSIsInRleHRQcm9wcyIsInJlc3QiLCJ1cGRhdGVPblJlc2l6ZSIsIm1haW5SZWZXaWR0aCIsIm9mZnNldFdpZHRoIiwiTWF0aCIsIm1heCIsIm9uUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbk1haW5SZWYiLCJnZXRSZWYiLCJyZWYiLCJoYW5kbGVLZXlEb3duIiwidG9nZ2xlIiwiaXNTaG93biIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZURvdWJsZUNsaWNrIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJjdXJzb3IiLCJiaW5kIiwib3BhY2l0eSIsInByb3BUeXBlcyIsIlRhYmxlQ2VsbCIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsR0FBOUI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFFQSxJQUFNQyxjQUFjLEdBQUcsaUJBQUss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RUFBQUEsUUFBUSxFQUFFaUMsc0JBQVVDLElBZnRCOztBQWlCRTs7O0FBR0FqQyxFQUFBQSxXQUFXLEVBQUVnQyxzQkFBVUUsSUFwQnpCOztBQXNCRTs7O0FBR0FyQyxFQUFBQSxJQUFJLEVBQUVtQyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWhCLENBekJSO0FBMkJFckMsRUFBQUEsZUFBZSxFQUFFa0Msc0JBQVVJO0FBM0I3QjtlQThCZWxELGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IFNlbGVjdE1lbnUgfSBmcm9tICcuLi8uLi9zZWxlY3QtbWVudSdcbmltcG9ydCB7IENhcmV0RG93bkljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCBUZXh0VGFibGVDZWxsIGZyb20gJy4vVGV4dFRhYmxlQ2VsbCdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5cbmNvbnN0IE1JTl9TRUxFQ1RfTUVOVV9XSURUSCA9IDI0MFxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IFNlbGVjdE1lbnVDZWxsID0gbWVtbyhmdW5jdGlvbiBTZWxlY3RNZW51Q2VsbChwcm9wcykge1xuICBjb25zdCBbdGFyZ2V0V2lkdGgsIHNldFRhcmdldFdpZHRoXSA9IHVzZVN0YXRlKE1JTl9TRUxFQ1RfTUVOVV9XSURUSClcbiAgY29uc3QgW3Nob3VsZENsaWNrVG9nZ2xlLCBzZXRTaG91bGRDbGlja1RvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbWFpblJlZiwgc2V0TWFpblJlZl0gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIHNpemUgPSAzMDAsXG4gICAgc2VsZWN0TWVudVByb3BzLFxuICAgIGRpc2FibGVkLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzU2VsZWN0YWJsZSA9IHRydWUsXG4gICAgdGV4dFByb3BzID0gZW1wdHlQcm9wcyxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHVwZGF0ZU9uUmVzaXplID0gKCkgPT4ge1xuICAgIGlmICghbWFpblJlZikgcmV0dXJuXG4gICAgY29uc3QgbWFpblJlZldpZHRoID0gbWFpblJlZi5vZmZzZXRXaWR0aFxuICAgIHNldFRhcmdldFdpZHRoKE1hdGgubWF4KE1JTl9TRUxFQ1RfTUVOVV9XSURUSCwgbWFpblJlZldpZHRoKSlcbiAgfVxuXG4gIGNvbnN0IG9uUmVzaXplID0gZGVib3VuY2UodXBkYXRlT25SZXNpemUsIDIwMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZU9uUmVzaXplKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUsIGZhbHNlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uTWFpblJlZiA9IChnZXRSZWYsIHJlZikgPT4ge1xuICAgIHNldE1haW5SZWYocmVmKVxuICAgIGdldFJlZihyZWYpXG4gIH1cblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKHRvZ2dsZSwgaXNTaG93biwgZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmICghaXNTaG93biAmJiBpc1NlbGVjdGFibGUgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgIHRvZ2dsZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAodG9nZ2xlLCBpc1Nob3duKSA9PiB7XG4gICAgaWYgKCFpc1Nob3duICYmIGlzU2VsZWN0YWJsZSAmJiAhZGlzYWJsZWQpIHtcbiAgICAgIHRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodG9nZ2xlLCBpc1Nob3duKSA9PiB7XG4gICAgaWYgKCFzaG91bGRDbGlja1RvZ2dsZSAmJiAhaXNTaG93bikge1xuICAgICAgc2V0U2hvdWxkQ2xpY2tUb2dnbGUodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdGFibGUgJiYgIWRpc2FibGVkKSB7XG4gICAgICB0b2dnbGUoKVxuICAgICAgc2V0U2hvdWxkQ2xpY2tUb2dnbGUodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQodHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgc2V0U2hvdWxkQ2xpY2tUb2dnbGUoZmFsc2UpXG4gICAgc2V0SXNGb2N1c2VkKGZhbHNlKVxuICB9XG5cbiAgbGV0IGN1cnNvciA9ICdkZWZhdWx0J1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBjdXJzb3IgPSAnbm90LWFsbG93ZWQnXG4gIH0gZWxzZSBpZiAoaXNTZWxlY3RhYmxlKSB7XG4gICAgaWYgKGlzRm9jdXNlZCkge1xuICAgICAgY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnNvciA9ICdkZWZhdWx0J1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjdXJzb3IgPSAndGV4dCdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdE1lbnUgd2lkdGg9e3RhcmdldFdpZHRofSB7Li4uc2VsZWN0TWVudVByb3BzfT5cbiAgICAgIHsoeyB0b2dnbGUsIGdldFJlZiwgaXNTaG93biB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRleHRUYWJsZUNlbGxcbiAgICAgICAgICAgIHJlZj17b25NYWluUmVmLmJpbmQobnVsbCwgZ2V0UmVmKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlICYmICFkaXNhYmxlZH1cbiAgICAgICAgICAgIHJpZ2h0Vmlldz17aXNTZWxlY3RhYmxlID8gPENhcmV0RG93bkljb24gY29sb3I9XCJtdXRlZFwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXBcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzU2hvd259XG4gICAgICAgICAgICBjdXJzb3I9e2lzU2hvd24gPyAncG9pbnRlcicgOiBjdXJzb3J9XG4gICAgICAgICAgICB0ZXh0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgfHwgKCFjaGlsZHJlbiAmJiBwbGFjZWhvbGRlcikgPyAwLjUgOiAxLFxuICAgICAgICAgICAgICAuLi50ZXh0UHJvcHNcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd24uYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2suYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgICA8L1RleHRUYWJsZUNlbGw+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9TZWxlY3RNZW51PlxuICApXG59KVxuXG5TZWxlY3RNZW51Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgVGFibGVDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLlRhYmxlQ2VsbC5wcm9wVHlwZXMsXG5cbiAgLypcbiAgICogTWFrZXMgdGhlIFRhYmxlQ2VsbCBmb2N1c2FibGUuXG4gICAqIFdpbGwgYWRkIHRhYkluZGV4PXstMSB8fCB0aGlzLnByb3BzLnRhYkluZGV4fS5cbiAgICovXG4gIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGNlbGwgY2FuJ3QgYmUgZWRpdGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBwbGFjZWhvbGRlciB3aGVuIGNoaWxkcmVuIGlzIGZhbHN5LlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSB1c2VkIGZvciB0aGUgVGV4dFRhYmxlQ2VsbCBhbmQgVGV4dGFyZWEuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwXSksXG5cbiAgc2VsZWN0TWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE1lbnVDZWxsXG4iXX0=