import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import safeInvoke from '../../lib/safe-invoke';
import { useId } from '../../hooks';
import SegmentedControlRadio from './SegmentedControlRadio';
var SegmentedControl = memo(forwardRef(function SegmentedControl(props, ref) {
  var value = props.value,
      name = props.name,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      options = props.options,
      onChange = props.onChange,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["value", "name", "height", "options", "onChange", "defaultValue", "disabled"]);

  var groupName = useId('SegmentedControl');

  var isControlled = function isControlled() {
    return typeof value !== 'undefined' && value !== null;
  };

  var getDefaultValue = function getDefaultValue() {
    if (isControlled()) {
      return value;
    }

    return typeof defaultValue !== 'undefined' && defaultValue !== null ? defaultValue : options[0].value;
  };

  var _useState = useState(getDefaultValue()),
      _useState2 = _slicedToArray(_useState, 2),
      activeValue = _useState2[0],
      setActiveValue = _useState2[1];

  useEffect(function () {
    if (isControlled() && value !== activeValue) {
      setActiveValue(value);
    }
  }, [value]);

  var handleChange = function handleChange(newValue) {
    // Save a render cycle when it's a controlled input
    if (!isControlled()) {
      setActiveValue(newValue);
    }

    safeInvoke(onChange, newValue);
  };

  return React.createElement(Box, _extends({
    display: "flex",
    marginRight: -1,
    height: height,
    ref: ref
  }, rest), options.map(function (option, index) {
    return React.createElement(SegmentedControlRadio, {
      key: option.value,
      id: groupName + index,
      name: name || groupName,
      label: option.label,
      value: String(option.value),
      height: height,
      checked: activeValue === option.value,
      onChange: handleChange.bind(null, option.value),
      appearance: "default",
      isFirstItem: index === 0,
      isLastItem: index === options.length - 1,
      disabled: disabled
    });
  }));
}));
SegmentedControl.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The options for the radios of the Segmented Control.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired
  })).isRequired,

  /**
   * The current value of the Segmented Control when controlled.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /**
   * The default value of the Segmented Control when uncontrolled.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /**
   * Function called when the value changes.
   */
  onChange: PropTypes.func,

  /**
   * The name of the radio group.
   */
  name: PropTypes.string,

  /**
   * The height of the Segmented Control.
   */
  height: PropTypes.number,

  /**
   * When true, the Segmented Control is disabled.
   */
  disabled: PropTypes.bool
});
export default SegmentedControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9wVHlwZXMiLCJCb3giLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwic2FmZUludm9rZSIsInVzZUlkIiwiU2VnbWVudGVkQ29udHJvbFJhZGlvIiwiU2VnbWVudGVkQ29udHJvbCIsInByb3BzIiwicmVmIiwidmFsdWUiLCJuYW1lIiwiaGVpZ2h0Iiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJyZXN0IiwiZ3JvdXBOYW1lIiwiaXNDb250cm9sbGVkIiwiZ2V0RGVmYXVsdFZhbHVlIiwiYWN0aXZlVmFsdWUiLCJzZXRBY3RpdmVWYWx1ZSIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJsYWJlbCIsIlN0cmluZyIsImJpbmQiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJub2RlIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsRUFBa0NDLFFBQWxDLEVBQTRDQyxTQUE1QyxRQUE2RCxPQUE3RDtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLElBQWNDLE9BQWQsRUFBdUJDLFFBQXZCLEVBQWlDQyxNQUFqQyxFQUF5Q0MsVUFBekMsUUFBMkQsUUFBM0Q7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsYUFBdEI7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQyx5QkFBbEM7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBR2IsSUFBSSxDQUMzQkMsVUFBVSxDQUFDLFNBQVNZLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFBQSxNQUU3Q0MsS0FGNkMsR0FVM0NGLEtBVjJDLENBRTdDRSxLQUY2QztBQUFBLE1BRzdDQyxJQUg2QyxHQVUzQ0gsS0FWMkMsQ0FHN0NHLElBSDZDO0FBQUEsc0JBVTNDSCxLQVYyQyxDQUk3Q0ksTUFKNkM7QUFBQSxNQUk3Q0EsTUFKNkMsOEJBSXBDLEVBSm9DO0FBQUEsTUFLN0NDLE9BTDZDLEdBVTNDTCxLQVYyQyxDQUs3Q0ssT0FMNkM7QUFBQSxNQU03Q0MsUUFONkMsR0FVM0NOLEtBVjJDLENBTTdDTSxRQU42QztBQUFBLE1BTzdDQyxZQVA2QyxHQVUzQ1AsS0FWMkMsQ0FPN0NPLFlBUDZDO0FBQUEsTUFRN0NDLFFBUjZDLEdBVTNDUixLQVYyQyxDQVE3Q1EsUUFSNkM7QUFBQSxNQVMxQ0MsSUFUMEMsNEJBVTNDVCxLQVYyQzs7QUFZL0MsTUFBTVUsU0FBUyxHQUFHYixLQUFLLENBQUMsa0JBQUQsQ0FBdkI7O0FBRUEsTUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixXQUFPLE9BQU9ULEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NBLEtBQUssS0FBSyxJQUFqRDtBQUNELEdBRkQ7O0FBSUEsTUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQUlELFlBQVksRUFBaEIsRUFBb0I7QUFDbEIsYUFBT1QsS0FBUDtBQUNEOztBQUVELFdBQU8sT0FBT0ssWUFBUCxLQUF3QixXQUF4QixJQUF1Q0EsWUFBWSxLQUFLLElBQXhELEdBQ0hBLFlBREcsR0FFSEYsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxLQUZmO0FBR0QsR0FSRDs7QUFsQitDLGtCQTRCVGQsUUFBUSxDQUFDd0IsZUFBZSxFQUFoQixDQTVCQztBQUFBO0FBQUEsTUE0QnhDQyxXQTVCd0M7QUFBQSxNQTRCM0JDLGNBNUIyQjs7QUE4Qi9DekIsRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZCxRQUFJc0IsWUFBWSxNQUFNVCxLQUFLLEtBQUtXLFdBQWhDLEVBQTZDO0FBQzNDQyxNQUFBQSxjQUFjLENBQUNaLEtBQUQsQ0FBZDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLEtBQUQsQ0FKTSxDQUFUOztBQU1BLE1BQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLFFBQVEsRUFBSTtBQUMvQjtBQUNBLFFBQUksQ0FBQ0wsWUFBWSxFQUFqQixFQUFxQjtBQUNuQkcsTUFBQUEsY0FBYyxDQUFDRSxRQUFELENBQWQ7QUFDRDs7QUFFRHBCLElBQUFBLFVBQVUsQ0FBQ1UsUUFBRCxFQUFXVSxRQUFYLENBQVY7QUFDRCxHQVBEOztBQVNBLFNBQ0Usb0JBQUMsR0FBRDtBQUFLLElBQUEsT0FBTyxFQUFDLE1BQWI7QUFBb0IsSUFBQSxXQUFXLEVBQUUsQ0FBQyxDQUFsQztBQUFxQyxJQUFBLE1BQU0sRUFBRVosTUFBN0M7QUFBcUQsSUFBQSxHQUFHLEVBQUVIO0FBQTFELEtBQW1FUSxJQUFuRSxHQUNHSixPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxXQUNYLG9CQUFDLHFCQUFEO0FBQ0UsTUFBQSxHQUFHLEVBQUVELE1BQU0sQ0FBQ2hCLEtBRGQ7QUFFRSxNQUFBLEVBQUUsRUFBRVEsU0FBUyxHQUFHUyxLQUZsQjtBQUdFLE1BQUEsSUFBSSxFQUFFaEIsSUFBSSxJQUFJTyxTQUhoQjtBQUlFLE1BQUEsS0FBSyxFQUFFUSxNQUFNLENBQUNFLEtBSmhCO0FBS0UsTUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDaEIsS0FBUixDQUxmO0FBTUUsTUFBQSxNQUFNLEVBQUVFLE1BTlY7QUFPRSxNQUFBLE9BQU8sRUFBRVMsV0FBVyxLQUFLSyxNQUFNLENBQUNoQixLQVBsQztBQVFFLE1BQUEsUUFBUSxFQUFFYSxZQUFZLENBQUNPLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0JKLE1BQU0sQ0FBQ2hCLEtBQS9CLENBUlo7QUFTRSxNQUFBLFVBQVUsRUFBQyxTQVRiO0FBVUUsTUFBQSxXQUFXLEVBQUVpQixLQUFLLEtBQUssQ0FWekI7QUFXRSxNQUFBLFVBQVUsRUFBRUEsS0FBSyxLQUFLZCxPQUFPLENBQUNrQixNQUFSLEdBQWlCLENBWHpDO0FBWUUsTUFBQSxRQUFRLEVBQUVmO0FBWlosTUFEVztBQUFBLEdBQVosQ0FESCxDQURGO0FBb0JELENBakVTLENBRGlCLENBQTdCO0FBcUVBVCxnQkFBZ0IsQ0FBQ3lCLFNBQWpCLDZFQUlLaEMsT0FBTyxDQUFDZ0MsU0FKYixHQUtLL0IsUUFBUSxDQUFDK0IsU0FMZCxHQU1LOUIsTUFBTSxDQUFDOEIsU0FOWixHQU9LN0IsVUFBVSxDQUFDNkIsU0FQaEI7QUFTRTs7O0FBR0FuQixFQUFBQSxPQUFPLEVBQUVmLFNBQVMsQ0FBQ21DLE9BQVYsQ0FDUG5DLFNBQVMsQ0FBQ29DLEtBQVYsQ0FBZ0I7QUFDZE4sSUFBQUEsS0FBSyxFQUFFOUIsU0FBUyxDQUFDcUMsSUFBVixDQUFlQyxVQURSO0FBRWQxQixJQUFBQSxLQUFLLEVBQUVaLFNBQVMsQ0FBQ3VDLFNBQVYsQ0FBb0IsQ0FDekJ2QyxTQUFTLENBQUN3QyxNQURlLEVBRXpCeEMsU0FBUyxDQUFDeUMsTUFGZSxFQUd6QnpDLFNBQVMsQ0FBQzBDLElBSGUsQ0FBcEIsRUFJSko7QUFOVyxHQUFoQixDQURPLEVBU1BBLFVBckJKOztBQXVCRTs7O0FBR0ExQixFQUFBQSxLQUFLLEVBQUVaLFNBQVMsQ0FBQ3VDLFNBQVYsQ0FBb0IsQ0FDekJ2QyxTQUFTLENBQUN3QyxNQURlLEVBRXpCeEMsU0FBUyxDQUFDeUMsTUFGZSxFQUd6QnpDLFNBQVMsQ0FBQzBDLElBSGUsQ0FBcEIsQ0ExQlQ7O0FBZ0NFOzs7QUFHQXpCLEVBQUFBLFlBQVksRUFBRWpCLFNBQVMsQ0FBQ3VDLFNBQVYsQ0FBb0IsQ0FDaEN2QyxTQUFTLENBQUN3QyxNQURzQixFQUVoQ3hDLFNBQVMsQ0FBQ3lDLE1BRnNCLEVBR2hDekMsU0FBUyxDQUFDMEMsSUFIc0IsQ0FBcEIsQ0FuQ2hCOztBQXlDRTs7O0FBR0ExQixFQUFBQSxRQUFRLEVBQUVoQixTQUFTLENBQUMyQyxJQTVDdEI7O0FBOENFOzs7QUFHQTlCLEVBQUFBLElBQUksRUFBRWIsU0FBUyxDQUFDeUMsTUFqRGxCOztBQW1ERTs7O0FBR0EzQixFQUFBQSxNQUFNLEVBQUVkLFNBQVMsQ0FBQ3dDLE1BdERwQjs7QUF3REU7OztBQUdBdEIsRUFBQUEsUUFBUSxFQUFFbEIsU0FBUyxDQUFDMEM7QUEzRHRCO0FBOERBLGVBQWVqQyxnQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgeyB1c2VJZCB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IFNlZ21lbnRlZENvbnRyb2xSYWRpbyBmcm9tICcuL1NlZ21lbnRlZENvbnRyb2xSYWRpbydcblxuY29uc3QgU2VnbWVudGVkQ29udHJvbCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gU2VnbWVudGVkQ29udHJvbChwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBuYW1lLFxuICAgICAgaGVpZ2h0ID0gMzIsXG4gICAgICBvcHRpb25zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGdyb3VwTmFtZSA9IHVzZUlkKCdTZWdtZW50ZWRDb250cm9sJylcblxuICAgIGNvbnN0IGlzQ29udHJvbGxlZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGVmYXVsdFZhbHVlID0gKCkgPT4ge1xuICAgICAgaWYgKGlzQ29udHJvbGxlZCgpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVmYXVsdFZhbHVlICE9PSBudWxsXG4gICAgICAgID8gZGVmYXVsdFZhbHVlXG4gICAgICAgIDogb3B0aW9uc1swXS52YWx1ZVxuICAgIH1cblxuICAgIGNvbnN0IFthY3RpdmVWYWx1ZSwgc2V0QWN0aXZlVmFsdWVdID0gdXNlU3RhdGUoZ2V0RGVmYXVsdFZhbHVlKCkpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGlzQ29udHJvbGxlZCgpICYmIHZhbHVlICE9PSBhY3RpdmVWYWx1ZSkge1xuICAgICAgICBzZXRBY3RpdmVWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9LCBbdmFsdWVdKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmV3VmFsdWUgPT4ge1xuICAgICAgLy8gU2F2ZSBhIHJlbmRlciBjeWNsZSB3aGVuIGl0J3MgYSBjb250cm9sbGVkIGlucHV0XG4gICAgICBpZiAoIWlzQ29udHJvbGxlZCgpKSB7XG4gICAgICAgIHNldEFjdGl2ZVZhbHVlKG5ld1ZhbHVlKVxuICAgICAgfVxuXG4gICAgICBzYWZlSW52b2tlKG9uQ2hhbmdlLCBuZXdWYWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIG1hcmdpblJpZ2h0PXstMX0gaGVpZ2h0PXtoZWlnaHR9IHJlZj17cmVmfSB7Li4ucmVzdH0+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTZWdtZW50ZWRDb250cm9sUmFkaW9cbiAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgaWQ9e2dyb3VwTmFtZSArIGluZGV4fVxuICAgICAgICAgICAgbmFtZT17bmFtZSB8fCBncm91cE5hbWV9XG4gICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgdmFsdWU9e1N0cmluZyhvcHRpb24udmFsdWUpfVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBjaGVja2VkPXthY3RpdmVWYWx1ZSA9PT0gb3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZS5iaW5kKG51bGwsIG9wdGlvbi52YWx1ZSl9XG4gICAgICAgICAgICBhcHBlYXJhbmNlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICBpc0ZpcnN0SXRlbT17aW5kZXggPT09IDB9XG4gICAgICAgICAgICBpc0xhc3RJdGVtPXtpbmRleCA9PT0gb3B0aW9ucy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9KVxuKVxuXG5TZWdtZW50ZWRDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAqL1xuICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIG9wdGlvbnMgZm9yIHRoZSByYWRpb3Mgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sLlxuICAgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMuYm9vbFxuICAgICAgXSkuaXNSZXF1aXJlZFxuICAgIH0pXG4gICkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sIHdoZW4gY29udHJvbGxlZC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmJvb2xcbiAgXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBTZWdtZW50ZWQgQ29udHJvbCB3aGVuIHVuY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ib29sXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHJhZGlvIGdyb3VwLlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgU2VnbWVudGVkIENvbnRyb2wuXG4gICAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIFNlZ21lbnRlZCBDb250cm9sIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlZ21lbnRlZENvbnRyb2xcbiJdfQ==