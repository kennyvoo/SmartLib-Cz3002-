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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _autocomplete = require("../../autocomplete");

var _textInput = require("../../text-input");

var _buttons = require("../../buttons");

var _icons = require("../../icons");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Combobox = (0, _react.memo)(function Combobox(props) {
  var items = props.items,
      selectedItem = props.selectedItem,
      initialSelectedItem = props.initialSelectedItem,
      itemToString = props.itemToString,
      _props$width = props.width,
      width = _props$width === void 0 ? 240 : _props$width,
      height = props.height,
      onChange = props.onChange,
      placeholder = props.placeholder,
      inputProps = props.inputProps,
      buttonProps = props.buttonProps,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      autocompleteProps = props.autocompleteProps,
      _props$isLoading = props.isLoading,
      isLoading = _props$isLoading === void 0 ? false : _props$isLoading,
      rest = (0, _objectWithoutProperties2["default"])(props, ["items", "selectedItem", "initialSelectedItem", "itemToString", "width", "height", "onChange", "placeholder", "inputProps", "buttonProps", "openOnFocus", "autocompleteProps", "isLoading"]);
  var disabled = props.disabled || isLoading;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpenedByButton = _useState2[0],
      setIsOpenedByButton = _useState2[1];

  var handleStateChange = function handleStateChange(changes, stateAndHelpers) {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      if (!changes.isOpen) {
        setIsOpenedByButton(false);
      }
    }

    if (autocompleteProps && typeof autocompleteProps.onStateChange === 'function') {
      autocompleteProps.onStateChange(changes, stateAndHelpers);
    }
  };

  return _react["default"].createElement(_autocomplete.Autocomplete, (0, _extends2["default"])({
    items: items,
    selectedItem: selectedItem,
    initialSelectedItem: initialSelectedItem,
    itemToString: itemToString,
    onChange: onChange,
    isFilterDisabled: isOpenedByButton
  }, autocompleteProps, {
    onStateChange: handleStateChange
  }), function (_ref) {
    var getRef = _ref.getRef,
        isShown = _ref.isShown,
        openMenu = _ref.openMenu,
        inputValue = _ref.inputValue,
        getInputProps = _ref.getInputProps,
        getToggleButtonProps = _ref.getToggleButtonProps,
        clearSelection = _ref.clearSelection;
    return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
      ref: getRef,
      display: "inline-flex",
      width: width
    }, rest), _react["default"].createElement(_textInput.TextInput, (0, _extends2["default"])({
      width: 0,
      flex: 1,
      height: height,
      value: inputValue,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      disabled: disabled
    }, getInputProps(_objectSpread(_objectSpread({}, inputProps), {}, {
      placeholder: placeholder,
      onFocus: function onFocus() {
        if (openOnFocus) openMenu();
      },
      onChange: function onChange(e) {
        if (isOpenedByButton) {
          setIsOpenedByButton(false);
        }

        if (e.target.value.trim() === '') {
          // Prevent the selected item from sticking around
          clearSelection();
        }
      }
    })))), _react["default"].createElement(_buttons.IconButton, (0, _extends2["default"])({
      color: "muted",
      icon: isLoading ? undefined : _icons.CaretDownIcon,
      appearance: "default",
      height: height,
      marginLeft: -1,
      paddingLeft: isLoading ? 12 : 0,
      paddingRight: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      disabled: disabled,
      isLoading: isLoading
    }, getToggleButtonProps(_objectSpread(_objectSpread({}, buttonProps), {}, {
      onClick: function onClick() {
        if (!isShown) {
          setIsOpenedByButton(true);
        }
      }
    })))));
  });
});
Combobox.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * The options to show in the menu.
   */
  items: _propTypes["default"].array.isRequired,

  /**
   * The selected item when controlled.
   */
  selectedItem: _propTypes["default"].any,

  /**
   * Function called when value changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: _propTypes["default"].bool,

  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: _propTypes["default"].any,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: _propTypes["default"].string,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: _propTypes["default"].func,

  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: _propTypes["default"].object,

  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: _propTypes["default"].object,

  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: _propTypes["default"].object,

  /**
   * Makes the input element disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: _propTypes["default"].bool
});
var _default = Combobox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21ib2JveC9zcmMvQ29tYm9ib3guanMiXSwibmFtZXMiOlsiQ29tYm9ib3giLCJwcm9wcyIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtIiwiaW5pdGlhbFNlbGVjdGVkSXRlbSIsIml0ZW1Ub1N0cmluZyIsIndpZHRoIiwiaGVpZ2h0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImlucHV0UHJvcHMiLCJidXR0b25Qcm9wcyIsIm9wZW5PbkZvY3VzIiwiYXV0b2NvbXBsZXRlUHJvcHMiLCJpc0xvYWRpbmciLCJyZXN0IiwiZGlzYWJsZWQiLCJpc09wZW5lZEJ5QnV0dG9uIiwic2V0SXNPcGVuZWRCeUJ1dHRvbiIsImhhbmRsZVN0YXRlQ2hhbmdlIiwiY2hhbmdlcyIsInN0YXRlQW5kSGVscGVycyIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImlzT3BlbiIsIm9uU3RhdGVDaGFuZ2UiLCJnZXRSZWYiLCJpc1Nob3duIiwib3Blbk1lbnUiLCJpbnB1dFZhbHVlIiwiZ2V0SW5wdXRQcm9wcyIsImdldFRvZ2dsZUJ1dHRvblByb3BzIiwiY2xlYXJTZWxlY3Rpb24iLCJvbkZvY3VzIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsInVuZGVmaW5lZCIsIkNhcmV0RG93bkljb24iLCJvbkNsaWNrIiwicHJvcFR5cGVzIiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImZ1bmMiLCJib29sIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxpQkFBSyxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBLE1BRTNDQyxLQUYyQyxH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WUFBSSxDQUFDYixPQUFMLEVBQWM7QUFDWlgsVUFBQUEsbUJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNEO0FBQ0Y7QUFOcUIsT0FaMUIsRUEzQkYsQ0FURDtBQUFBLEdBVkgsQ0FERjtBQXdFRCxDQTdHZ0IsQ0FBakI7QUErR0FsQixRQUFRLENBQUMyQyxTQUFULDZFQUlLQyxrQkFBV0QsU0FKaEIsR0FLS0UsZUFBUUYsU0FMYixHQU1LRyxnQkFBU0gsU0FOZCxHQU9LSSxjQUFPSixTQVBaO0FBU0U7OztBQUdBekMsRUFBQUEsS0FBSyxFQUFFOEMsc0JBQVVDLEtBQVYsQ0FBZ0JDLFVBWnpCOztBQWNFOzs7QUFHQS9DLEVBQUFBLFlBQVksRUFBRTZDLHNCQUFVRyxHQWpCMUI7O0FBbUJFOzs7QUFHQTNDLEVBQUFBLFFBQVEsRUFBRXdDLHNCQUFVSSxJQXRCdEI7O0FBd0JFOzs7QUFHQXhDLEVBQUFBLFdBQVcsRUFBRW9DLHNCQUFVSyxJQTNCekI7O0FBNkJFOzs7QUFHQWpELEVBQUFBLG1CQUFtQixFQUFFNEMsc0JBQVVHLEdBaENqQzs7QUFrQ0U7OztBQUdBMUMsRUFBQUEsV0FBVyxFQUFFdUMsc0JBQVVNLE1BckN6Qjs7QUF1Q0U7Ozs7QUFJQWpELEVBQUFBLFlBQVksRUFBRTJDLHNCQUFVSSxJQTNDMUI7O0FBNkNFOzs7QUFHQTFDLEVBQUFBLFVBQVUsRUFBRXNDLHNCQUFVTyxNQWhEeEI7O0FBa0RFOzs7QUFHQTVDLEVBQUFBLFdBQVcsRUFBRXFDLHNCQUFVTyxNQXJEekI7O0FBdURFOzs7QUFHQTFDLEVBQUFBLGlCQUFpQixFQUFFbUMsc0JBQVVPLE1BMUQvQjs7QUE0REU7OztBQUdBdkMsRUFBQUEsUUFBUSxFQUFFZ0Msc0JBQVVLLElBL0R0Qjs7QUFpRUU7OztBQUdBdkMsRUFBQUEsU0FBUyxFQUFFa0Msc0JBQVVLO0FBcEV2QjtlQXVFZXJELFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gJy4uLy4uL2F1dG9jb21wbGV0ZSdcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL3RleHQtaW5wdXQnXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCB7IENhcmV0RG93bkljb24gfSBmcm9tICcuLi8uLi9pY29ucydcblxuY29uc3QgQ29tYm9ib3ggPSBtZW1vKGZ1bmN0aW9uIENvbWJvYm94KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICBzZWxlY3RlZEl0ZW0sXG4gICAgaW5pdGlhbFNlbGVjdGVkSXRlbSxcbiAgICBpdGVtVG9TdHJpbmcsXG4gICAgd2lkdGggPSAyNDAsXG4gICAgaGVpZ2h0LFxuICAgIG9uQ2hhbmdlLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlucHV0UHJvcHMsXG4gICAgYnV0dG9uUHJvcHMsXG4gICAgb3Blbk9uRm9jdXMgPSBmYWxzZSxcbiAgICBhdXRvY29tcGxldGVQcm9wcyxcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQgfHwgaXNMb2FkaW5nXG5cbiAgY29uc3QgW2lzT3BlbmVkQnlCdXR0b24sIHNldElzT3BlbmVkQnlCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoY2hhbmdlcywgc3RhdGVBbmRIZWxwZXJzKSA9PiB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjaGFuZ2VzLCAnaXNPcGVuJykpIHtcbiAgICAgIGlmICghY2hhbmdlcy5pc09wZW4pIHtcbiAgICAgICAgc2V0SXNPcGVuZWRCeUJ1dHRvbihmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBhdXRvY29tcGxldGVQcm9wcyAmJlxuICAgICAgdHlwZW9mIGF1dG9jb21wbGV0ZVByb3BzLm9uU3RhdGVDaGFuZ2UgPT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIGF1dG9jb21wbGV0ZVByb3BzLm9uU3RhdGVDaGFuZ2UoY2hhbmdlcywgc3RhdGVBbmRIZWxwZXJzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dG9jb21wbGV0ZVxuICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19XG4gICAgICBpbml0aWFsU2VsZWN0ZWRJdGVtPXtpbml0aWFsU2VsZWN0ZWRJdGVtfVxuICAgICAgaXRlbVRvU3RyaW5nPXtpdGVtVG9TdHJpbmd9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICBpc0ZpbHRlckRpc2FibGVkPXtpc09wZW5lZEJ5QnV0dG9ufVxuICAgICAgey4uLmF1dG9jb21wbGV0ZVByb3BzfVxuICAgICAgb25TdGF0ZUNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XG4gICAgPlxuICAgICAgeyh7XG4gICAgICAgIGdldFJlZixcbiAgICAgICAgaXNTaG93bixcbiAgICAgICAgb3Blbk1lbnUsXG4gICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgIGdldElucHV0UHJvcHMsXG4gICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICBjbGVhclNlbGVjdGlvblxuICAgICAgfSkgPT4gKFxuICAgICAgICA8Qm94IHJlZj17Z2V0UmVmfSBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIiB3aWR0aD17d2lkdGh9IHsuLi5yZXN0fT5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9ezB9XG4gICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz17MH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcbiAgICAgICAgICAgICAgLi4uaW5wdXRQcm9wcyxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIG9uRm9jdXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3Blbk9uRm9jdXMpIG9wZW5NZW51KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc09wZW5lZEJ5QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICBzZXRJc09wZW5lZEJ5QnV0dG9uKGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSBzZWxlY3RlZCBpdGVtIGZyb20gc3RpY2tpbmcgYXJvdW5kXG4gICAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cIm11dGVkXCJcbiAgICAgICAgICAgIGljb249e2lzTG9hZGluZyA/IHVuZGVmaW5lZCA6IENhcmV0RG93bkljb259XG4gICAgICAgICAgICBhcHBlYXJhbmNlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ey0xfVxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ9e2lzTG9hZGluZyA/IDEyIDogMH1cbiAgICAgICAgICAgIHBhZGRpbmdSaWdodD17MH1cbiAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPXswfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoe1xuICAgICAgICAgICAgICAuLi5idXR0b25Qcm9wcyxcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNTaG93bikge1xuICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuZWRCeUJ1dHRvbih0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQXV0b2NvbXBsZXRlPlxuICApXG59KVxuXG5Db21ib2JveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzIHNvbWUgQVBJcyBmcm9tIHVpLWJveC5cbiAgICovXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9ucyB0byBzaG93IGluIHRoZSBtZW51LlxuICAgKi9cbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSB3aGVuIGNvbnRyb2xsZWQuXG4gICAqL1xuICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgb3BlbiB0aGUgYXV0b2NvbXBsZXRlIG9uIGZvY3VzLlxuICAgKi9cbiAgb3Blbk9uRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHNlbGVjdGVkIGl0ZW0gd2hlbiB1bmNvbnRyb2xsZWQuXG4gICAqL1xuICBpbml0aWFsU2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2Vob2xkZXIgdGV4dCB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlIHByZXNlbnQuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSW4gY2FzZSB0aGUgYXJyYXkgb2YgaXRlbXMgaXMgbm90IGFuIGFycmF5IG9mIHN0cmluZ3MsXG4gICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvbiBlYWNoIGl0ZW0gdG8gcmV0dXJuIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHNob3duIG9uIHRoZSBmaWx0ZXJcbiAgICovXG4gIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgZm9yd2FyZGVkIHRvIHRoZSBpbnB1dC4gVXNlIHdpdGggY2F1dGlvbi5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgZm9yd2FyZGVkIHRvIHRoZSBidXR0b24uIFVzZSB3aXRoIGNhdXRpb24uXG4gICAqL1xuICBidXR0b25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUHJvcGVydGllcyBmb3J3YXJkZWQgdG8gdGhlIGF1dG9jb21wbGV0ZSBjb21wb25lbnQuIFVzZSB3aXRoIGNhdXRpb24uXG4gICAqL1xuICBhdXRvY29tcGxldGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogTWFrZXMgdGhlIGlucHV0IGVsZW1lbnQgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGxvYWRpbmcgc3Bpbm5lci4gVGhpcyBhbHNvIGRpc2FibGVzIHRoZSBidXR0b24uXG4gICAqL1xuICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbWJvYm94XG4iXX0=