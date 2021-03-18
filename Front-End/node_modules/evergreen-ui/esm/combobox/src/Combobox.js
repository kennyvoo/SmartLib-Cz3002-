import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import { Autocomplete } from '../../autocomplete';
import { TextInput } from '../../text-input';
import { IconButton } from '../../buttons';
import { CaretDownIcon } from '../../icons';
var Combobox = memo(function Combobox(props) {
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
      rest = _objectWithoutProperties(props, ["items", "selectedItem", "initialSelectedItem", "itemToString", "width", "height", "onChange", "placeholder", "inputProps", "buttonProps", "openOnFocus", "autocompleteProps", "isLoading"]);

  var disabled = props.disabled || isLoading;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
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

  return React.createElement(Autocomplete, _extends({
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
    return React.createElement(Box, _extends({
      ref: getRef,
      display: "inline-flex",
      width: width
    }, rest), React.createElement(TextInput, _extends({
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
    })))), React.createElement(IconButton, _extends({
      color: "muted",
      icon: isLoading ? undefined : CaretDownIcon,
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
Combobox.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The options to show in the menu.
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected item when controlled.
   */
  selectedItem: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: PropTypes.bool,

  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: PropTypes.any,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,

  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: PropTypes.object,

  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: PropTypes.object,

  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: PropTypes.object,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: PropTypes.bool
});
export default Combobox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21ib2JveC9zcmMvQ29tYm9ib3guanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJCb3giLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiQXV0b2NvbXBsZXRlIiwiVGV4dElucHV0IiwiSWNvbkJ1dHRvbiIsIkNhcmV0RG93bkljb24iLCJDb21ib2JveCIsInByb3BzIiwiaXRlbXMiLCJzZWxlY3RlZEl0ZW0iLCJpbml0aWFsU2VsZWN0ZWRJdGVtIiwiaXRlbVRvU3RyaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiaW5wdXRQcm9wcyIsImJ1dHRvblByb3BzIiwib3Blbk9uRm9jdXMiLCJhdXRvY29tcGxldGVQcm9wcyIsImlzTG9hZGluZyIsInJlc3QiLCJkaXNhYmxlZCIsImlzT3BlbmVkQnlCdXR0b24iLCJzZXRJc09wZW5lZEJ5QnV0dG9uIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJjaGFuZ2VzIiwic3RhdGVBbmRIZWxwZXJzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwib25TdGF0ZUNoYW5nZSIsImdldFJlZiIsImlzU2hvd24iLCJvcGVuTWVudSIsImlucHV0VmFsdWUiLCJnZXRJbnB1dFByb3BzIiwiZ2V0VG9nZ2xlQnV0dG9uUHJvcHMiLCJjbGVhclNlbGVjdGlvbiIsIm9uRm9jdXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwidW5kZWZpbmVkIiwib25DbGljayIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImZ1bmMiLCJib29sIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsUUFBdEIsUUFBc0MsT0FBdEM7QUFDQSxP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RWYsU0FBUyxDQUFDd0QsSUEzQzFCOztBQTZDRTs7O0FBR0FwQyxFQUFBQSxVQUFVLEVBQUVwQixTQUFTLENBQUMyRCxNQWhEeEI7O0FBa0RFOzs7QUFHQXRDLEVBQUFBLFdBQVcsRUFBRXJCLFNBQVMsQ0FBQzJELE1BckR6Qjs7QUF1REU7OztBQUdBcEMsRUFBQUEsaUJBQWlCLEVBQUV2QixTQUFTLENBQUMyRCxNQTFEL0I7O0FBNERFOzs7QUFHQWpDLEVBQUFBLFFBQVEsRUFBRTFCLFNBQVMsQ0FBQ3lELElBL0R0Qjs7QUFpRUU7OztBQUdBakMsRUFBQUEsU0FBUyxFQUFFeEIsU0FBUyxDQUFDeUQ7QUFwRXZCO0FBdUVBLGVBQWUvQyxRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IGRpbWVuc2lvbnMsIHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tICcuLi8uLi9hdXRvY29tcGxldGUnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi90ZXh0LWlucHV0J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBDYXJldERvd25JY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5cbmNvbnN0IENvbWJvYm94ID0gbWVtbyhmdW5jdGlvbiBDb21ib2JveChwcm9wcykge1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGluaXRpYWxTZWxlY3RlZEl0ZW0sXG4gICAgaXRlbVRvU3RyaW5nLFxuICAgIHdpZHRoID0gMjQwLFxuICAgIGhlaWdodCxcbiAgICBvbkNoYW5nZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpbnB1dFByb3BzLFxuICAgIGJ1dHRvblByb3BzLFxuICAgIG9wZW5PbkZvY3VzID0gZmFsc2UsXG4gICAgYXV0b2NvbXBsZXRlUHJvcHMsXG4gICAgaXNMb2FkaW5nID0gZmFsc2UsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkIHx8IGlzTG9hZGluZ1xuXG4gIGNvbnN0IFtpc09wZW5lZEJ5QnV0dG9uLCBzZXRJc09wZW5lZEJ5QnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKGNoYW5nZXMsIHN0YXRlQW5kSGVscGVycykgPT4ge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2hhbmdlcywgJ2lzT3BlbicpKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICAgIHNldElzT3BlbmVkQnlCdXR0b24oZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYXV0b2NvbXBsZXRlUHJvcHMgJiZcbiAgICAgIHR5cGVvZiBhdXRvY29tcGxldGVQcm9wcy5vblN0YXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICBhdXRvY29tcGxldGVQcm9wcy5vblN0YXRlQ2hhbmdlKGNoYW5nZXMsIHN0YXRlQW5kSGVscGVycylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRvY29tcGxldGVcbiAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRJdGVtfVxuICAgICAgaW5pdGlhbFNlbGVjdGVkSXRlbT17aW5pdGlhbFNlbGVjdGVkSXRlbX1cbiAgICAgIGl0ZW1Ub1N0cmluZz17aXRlbVRvU3RyaW5nfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgaXNGaWx0ZXJEaXNhYmxlZD17aXNPcGVuZWRCeUJ1dHRvbn1cbiAgICAgIHsuLi5hdXRvY29tcGxldGVQcm9wc31cbiAgICAgIG9uU3RhdGVDaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxuICAgID5cbiAgICAgIHsoe1xuICAgICAgICBnZXRSZWYsXG4gICAgICAgIGlzU2hvd24sXG4gICAgICAgIG9wZW5NZW51LFxuICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICBnZXRJbnB1dFByb3BzLFxuICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgY2xlYXJTZWxlY3Rpb25cbiAgICAgIH0pID0+IChcbiAgICAgICAgPEJveCByZWY9e2dldFJlZn0gZGlzcGxheT1cImlubGluZS1mbGV4XCIgd2lkdGg9e3dpZHRofSB7Li4ucmVzdH0+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPXswfVxuICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9ezB9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XG4gICAgICAgICAgICAgIC4uLmlucHV0UHJvcHMsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5PbkZvY3VzKSBvcGVuTWVudSgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNPcGVuZWRCeUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuZWRCeUJ1dHRvbihmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgc2VsZWN0ZWQgaXRlbSBmcm9tIHN0aWNraW5nIGFyb3VuZFxuICAgICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJtdXRlZFwiXG4gICAgICAgICAgICBpY29uPXtpc0xvYWRpbmcgPyB1bmRlZmluZWQgOiBDYXJldERvd25JY29ufVxuICAgICAgICAgICAgYXBwZWFyYW5jZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXstMX1cbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0PXtpc0xvYWRpbmcgPyAxMiA6IDB9XG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezB9XG4gICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPXswfVxuICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz17MH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKHtcbiAgICAgICAgICAgICAgLi4uYnV0dG9uUHJvcHMsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzU2hvd24pIHtcbiAgICAgICAgICAgICAgICAgIHNldElzT3BlbmVkQnlCdXR0b24odHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0F1dG9jb21wbGV0ZT5cbiAgKVxufSlcblxuQ29tYm9ib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSW1wbGVtZW50cyBzb21lIEFQSXMgZnJvbSB1aS1ib3guXG4gICAqL1xuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcbiAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIG9wdGlvbnMgdG8gc2hvdyBpbiB0aGUgbWVudS5cbiAgICovXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIHNlbGVjdGVkIGl0ZW0gd2hlbiBjb250cm9sbGVkLlxuICAgKi9cbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIG9wZW4gdGhlIGF1dG9jb21wbGV0ZSBvbiBmb2N1cy5cbiAgICovXG4gIG9wZW5PbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGVmYXVsdCBzZWxlY3RlZCBpdGVtIHdoZW4gdW5jb250cm9sbGVkLlxuICAgKi9cbiAgaW5pdGlhbFNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBwcmVzZW50LlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEluIGNhc2UgdGhlIGFycmF5IG9mIGl0ZW1zIGlzIG5vdCBhbiBhcnJheSBvZiBzdHJpbmdzLFxuICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgb24gZWFjaCBpdGVtIHRvIHJldHVybiB0aGUgc3RyaW5nIHRoYXQgd2lsbCBiZSBzaG93biBvbiB0aGUgZmlsdGVyXG4gICAqL1xuICBpdGVtVG9TdHJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgaW5wdXQuIFVzZSB3aXRoIGNhdXRpb24uXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgYnV0dG9uLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICAgKi9cbiAgYnV0dG9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgZm9yd2FyZGVkIHRvIHRoZSBhdXRvY29tcGxldGUgY29tcG9uZW50LiBVc2Ugd2l0aCBjYXV0aW9uLlxuICAgKi9cbiAgYXV0b2NvbXBsZXRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNob3cgYSBsb2FkaW5nIHNwaW5uZXIuIFRoaXMgYWxzbyBkaXNhYmxlcyB0aGUgYnV0dG9uLlxuICAgKi9cbiAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21ib2JveFxuIl19