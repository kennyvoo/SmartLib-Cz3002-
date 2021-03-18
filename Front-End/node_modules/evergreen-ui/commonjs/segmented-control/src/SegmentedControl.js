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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _hooks = require("../../hooks");

var _SegmentedControlRadio = _interopRequireDefault(require("./SegmentedControlRadio"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SegmentedControl = (0, _react.memo)((0, _react.forwardRef)(function SegmentedControl(props, ref) {
  var value = props.value,
      name = props.name,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      options = props.options,
      onChange = props.onChange,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      rest = (0, _objectWithoutProperties2["default"])(props, ["value", "name", "height", "options", "onChange", "defaultValue", "disabled"]);
  var groupName = (0, _hooks.useId)('SegmentedControl');

  var isControlled = function isControlled() {
    return typeof value !== 'undefined' && value !== null;
  };

  var getDefaultValue = function getDefaultValue() {
    if (isControlled()) {
      return value;
    }

    return typeof defaultValue !== 'undefined' && defaultValue !== null ? defaultValue : options[0].value;
  };

  var _useState = (0, _react.useState)(getDefaultValue()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeValue = _useState2[0],
      setActiveValue = _useState2[1];

  (0, _react.useEffect)(function () {
    if (isControlled() && value !== activeValue) {
      setActiveValue(value);
    }
  }, [value]);

  var handleChange = function handleChange(newValue) {
    // Save a render cycle when it's a controlled input
    if (!isControlled()) {
      setActiveValue(newValue);
    }

    (0, _safeInvoke["default"])(onChange, newValue);
  };

  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    display: "flex",
    marginRight: -1,
    height: height,
    ref: ref
  }, rest), options.map(function (option, index) {
    return _react["default"].createElement(_SegmentedControlRadio["default"], {
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
SegmentedControl.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The options for the radios of the Segmented Control.
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]).isRequired
  })).isRequired,

  /**
   * The current value of the Segmented Control when controlled.
   */
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]),

  /**
   * The default value of the Segmented Control when uncontrolled.
   */
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]),

  /**
   * Function called when the value changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * The name of the radio group.
   */
  name: _propTypes["default"].string,

  /**
   * The height of the Segmented Control.
   */
  height: _propTypes["default"].number,

  /**
   * When true, the Segmented Control is disabled.
   */
  disabled: _propTypes["default"].bool
});
var _default = SegmentedControl;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbC5qcyJdLCJuYW1lcyI6WyJTZWdtZW50ZWRDb250cm9sIiwicHJvcHMiLCJyZWYiLCJ2YWx1ZSIsIm5hbWUiLCJoZWlnaHQiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsInJlc3QiLCJncm91cE5hbWUiLCJpc0NvbnRyb2xsZWQiLCJnZXREZWZhdWx0VmFsdWUiLCJhY3RpdmVWYWx1ZSIsInNldEFjdGl2ZVZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImxhYmVsIiwiU3RyaW5nIiwiYmluZCIsImxlbmd0aCIsInByb3BUeXBlcyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJub2RlIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLGlCQUN2Qix1QkFBVyxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQUEsTUFFN0NDLEtBRjZDLEdBVTNDRixLQVYyQyxDQUU3Q0UsS0FGNkM7QUFBQSxNQUc3Q0MsSUFINkMsR0FVM0NILEtBVjJDLENBRzdDRyxJQUg2QztBQUFBLHNCQVUzQ0gsS0FWMkMsQ0FJN0NJLE1BSjZDO0FBQUEsTUFJN0NBLE1BSjZDLDhCQUlwQyxFQUpvQztBQUFBLE1BSzdDQyxPQUw2QyxHQVUzQ0wsS0FWMkMsQ0FLN0NLLE9BTDZDO0FBQUEsTUFNN0NDLFFBTjZDLEdBVTNDTixLQVYyQyxDQU03Q00sUUFONkM7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QUFnQjtBQUNkWCxJQUFBQSxLQUFLLEVBQUVTLHNCQUFVRyxJQUFWLENBQWVDLFVBRFI7QUFFZC9CLElBQUFBLEtBQUssRUFBRTJCLHNCQUFVSyxTQUFWLENBQW9CLENBQ3pCTCxzQkFBVU0sTUFEZSxFQUV6Qk4sc0JBQVVPLE1BRmUsRUFHekJQLHNCQUFVUSxJQUhlLENBQXBCLEVBSUpKO0FBTlcsR0FBaEIsQ0FETyxFQVNQQSxVQXJCSjs7QUF1QkU7OztBQUdBL0IsRUFBQUEsS0FBSyxFQUFFMkIsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FDekJMLHNCQUFVTSxNQURlLEVBRXpCTixzQkFBVU8sTUFGZSxFQUd6QlAsc0JBQVVRLElBSGUsQ0FBcEIsQ0ExQlQ7O0FBZ0NFOzs7QUFHQTlCLEVBQUFBLFlBQVksRUFBRXNCLHNCQUFVSyxTQUFWLENBQW9CLENBQ2hDTCxzQkFBVU0sTUFEc0IsRUFFaENOLHNCQUFVTyxNQUZzQixFQUdoQ1Asc0JBQVVRLElBSHNCLENBQXBCLENBbkNoQjs7QUF5Q0U7OztBQUdBL0IsRUFBQUEsUUFBUSxFQUFFdUIsc0JBQVVTLElBNUN0Qjs7QUE4Q0U7OztBQUdBbkMsRUFBQUEsSUFBSSxFQUFFMEIsc0JBQVVPLE1BakRsQjs7QUFtREU7OztBQUdBaEMsRUFBQUEsTUFBTSxFQUFFeUIsc0JBQVVNLE1BdERwQjs7QUF3REU7OztBQUdBM0IsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVRO0FBM0R0QjtlQThEZXRDLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgU2VnbWVudGVkQ29udHJvbFJhZGlvIGZyb20gJy4vU2VnbWVudGVkQ29udHJvbFJhZGlvJ1xuXG5jb25zdCBTZWdtZW50ZWRDb250cm9sID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBTZWdtZW50ZWRDb250cm9sKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG5hbWUsXG4gICAgICBoZWlnaHQgPSAzMixcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgZ3JvdXBOYW1lID0gdXNlSWQoJ1NlZ21lbnRlZENvbnRyb2wnKVxuXG4gICAgY29uc3QgaXNDb250cm9sbGVkID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBnZXREZWZhdWx0VmFsdWUgPSAoKSA9PiB7XG4gICAgICBpZiAoaXNDb250cm9sbGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBkZWZhdWx0VmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBkZWZhdWx0VmFsdWVcbiAgICAgICAgOiBvcHRpb25zWzBdLnZhbHVlXG4gICAgfVxuXG4gICAgY29uc3QgW2FjdGl2ZVZhbHVlLCBzZXRBY3RpdmVWYWx1ZV0gPSB1c2VTdGF0ZShnZXREZWZhdWx0VmFsdWUoKSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoaXNDb250cm9sbGVkKCkgJiYgdmFsdWUgIT09IGFjdGl2ZVZhbHVlKSB7XG4gICAgICAgIHNldEFjdGl2ZVZhbHVlKHZhbHVlKVxuICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuZXdWYWx1ZSA9PiB7XG4gICAgICAvLyBTYXZlIGEgcmVuZGVyIGN5Y2xlIHdoZW4gaXQncyBhIGNvbnRyb2xsZWQgaW5wdXRcbiAgICAgIGlmICghaXNDb250cm9sbGVkKCkpIHtcbiAgICAgICAgc2V0QWN0aXZlVmFsdWUobmV3VmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHNhZmVJbnZva2Uob25DaGFuZ2UsIG5ld1ZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgbWFyZ2luUmlnaHQ9ey0xfSBoZWlnaHQ9e2hlaWdodH0gcmVmPXtyZWZ9IHsuLi5yZXN0fT5cbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNlZ21lbnRlZENvbnRyb2xSYWRpb1xuICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICBpZD17Z3JvdXBOYW1lICsgaW5kZXh9XG4gICAgICAgICAgICBuYW1lPXtuYW1lIHx8IGdyb3VwTmFtZX1cbiAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICB2YWx1ZT17U3RyaW5nKG9wdGlvbi52YWx1ZSl9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2FjdGl2ZVZhbHVlID09PSBvcHRpb24udmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlLmJpbmQobnVsbCwgb3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIGlzRmlyc3RJdGVtPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICAgIGlzTGFzdEl0ZW09e2luZGV4ID09PSBvcHRpb25zLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cblNlZ21lbnRlZENvbnRyb2wucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9ucyBmb3IgdGhlIHJhZGlvcyBvZiB0aGUgU2VnbWVudGVkIENvbnRyb2wuXG4gICAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5ib29sXG4gICAgICBdKS5pc1JlcXVpcmVkXG4gICAgfSlcbiAgKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgU2VnbWVudGVkIENvbnRyb2wgd2hlbiBjb250cm9sbGVkLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYm9vbFxuICBdKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sIHdoZW4gdW5jb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmJvb2xcbiAgXSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgcmFkaW8gZ3JvdXAuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBTZWdtZW50ZWQgQ29udHJvbC5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgU2VnbWVudGVkIENvbnRyb2wgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VnbWVudGVkQ29udHJvbFxuIl19