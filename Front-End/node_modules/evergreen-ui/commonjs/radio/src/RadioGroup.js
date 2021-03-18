"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _hooks = require("../../hooks");

var _Radio = _interopRequireDefault(require("./Radio"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var noop = function noop() {};

var emptyArray = [];
var RadioGroup = (0, _react.memo)((0, _react.forwardRef)(function RadioGroup(props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 12 : _props$size,
      label = props.label,
      defaultValue = props.defaultValue,
      value = props.value,
      _props$options = props.options,
      options = _props$options === void 0 ? emptyArray : _props$options,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      _props$isRequired = props.isRequired,
      isRequired = _props$isRequired === void 0 ? false : _props$isRequired,
      rest = (0, _objectWithoutProperties2["default"])(props, ["size", "label", "defaultValue", "value", "options", "onChange", "isRequired"]);
  var name = (0, _hooks.useId)('RadioGroup');
  var selected = value || defaultValue || props.options[0].value;
  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    role: "group",
    "aria-label": label
  }, rest, {
    ref: ref
  }), label && _react["default"].createElement(_typography.Text, {
    color: "muted",
    fontWeight: 500
  }, label), options.map(function (item) {
    return _react["default"].createElement(_Radio["default"], {
      key: item.value,
      size: size,
      name: name,
      value: item.value,
      label: item.label,
      checked: selected === item.value,
      disabled: item.isDisabled,
      onChange: onChange,
      isRequired: isRequired
    });
  }));
}));
RadioGroup.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The options for the radios of the Radio Group.
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node.isRequired,
    value: _propTypes["default"].string.isRequired,
    isDisabled: _propTypes["default"].bool
  })).isRequired,

  /**
   * The selected item value when controlled.
   */
  value: _propTypes["default"].string,

  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue: _propTypes["default"].string,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * Label to display above the radio button options.
   */
  label: _propTypes["default"].string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: _propTypes["default"].oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: _propTypes["default"].bool
});
var _default = RadioGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW9Hcm91cC5qcyJdLCJuYW1lcyI6WyJub29wIiwiZW1wdHlBcnJheSIsIlJhZGlvR3JvdXAiLCJwcm9wcyIsInJlZiIsInNpemUiLCJsYWJlbCIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiaXNSZXF1aXJlZCIsInJlc3QiLCJuYW1lIiwic2VsZWN0ZWQiLCJtYXAiLCJpdGVtIiwiaXNEaXNhYmxlZCIsInByb3BUeXBlcyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUVBLElBQU1DLFVBQVUsR0FBRyxpQkFDakIsdUJBQVcsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQUEsb0JBVXJDRCxLQVZxQyxDQUV2Q0UsSUFGdUM7QUFBQSxNQUV2Q0EsSUFGdUMsNEJBRWhDLEVBRmdDO0FBQUEsTUFHdkNDLEtBSHVDLEdBVXJDSCxLQVZxQyxDQUd2Q0csS0FIdUM7QUFBQSxNQUl2Q0MsWUFKdUMsR0FVckNKLEtBVnFDLENBSXZDSSxZQUp1QztBQUFBLE1BS3ZDQyxLQUx1QyxHQVVyQ0wsS0FWcUMsQ0FLdkNLLEtBTHVDO0FBQUEsdUJBVXJDTCxLQVZxQyxDQU12Q00sT0FOdUM7QUFBQSxNQU12Q0EsT0FOdUMsK0JBTTdCUixVQU42QjtBQUFBLHdCQVVyQ0UsS0FWcUMsQ0FPdkNPLFFBUHVDO0FBQUEsTUFPdkNBLFFBUHVDLGdDQU81QlYsSUFQNEI7QUFBQSwwQkFVckNHLEtBVnFDLENBUXZDUSxVQVJ1QztBQUFBLE1BUXZDQSxVQVJ1QyxrQ0FRMUIsS0FSMEI7QUFBQSxNQVNwQ0MsSUFUb0MsNkNBVXJDVCxLQVZxQztBQVl6QyxNQUFNVSxJQUFJLEdBQUcsa0JBQU0sWUFBTixDQUFiO0FBQ0EsTUFBTUMsUUFBUSxHQUFHTixLQUFLLElBQUlELFlBQVQsSUFBeUJKLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsRUFBaUJELEtBQTNEO0FBRUEsU0FDRSxnQ0FBQyxZQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUMsT0FBWDtBQUFtQixrQkFBWUY7QUFBL0IsS0FBMENNLElBQTFDO0FBQWdELElBQUEsR0FBRyxFQUFFUjtBQUFyRCxNQUNHRSxLQUFLLElBQ0osZ0NBQUMsZ0JBQUQ7QUFBTSxJQUFBLEtBQUssRUFBQyxPQUFaO0FBQW9CLElBQUEsVUFBVSxFQUFFO0FBQWhDLEtBQ0dBLEtBREgsQ0FGSixFQU1HRyxPQUFPLENBQUNNLEdBQVIsQ0FBWSxVQUFBQyxJQUFJO0FBQUEsV0FDZixnQ0FBQyxpQkFBRDtBQUNFLE1BQUEsR0FBRyxFQUFFQSxJQUFJLENBQUNSLEtBRFo7QUFFRSxNQUFBLElBQUksRUFBRUgsSUFGUjtBQUdFLE1BQUEsSUFBSSxFQUFFUSxJQUhSO0FBSUUsTUFBQSxLQUFLLEVBQUVHLElBQUksQ0FBQ1IsS0FKZDtBQUtFLE1BQUEsS0FBSyxFQUFFUSxJQUFJLENBQUNWLEtBTGQ7QUFNRSxNQUFBLE9BQU8sRUFBRVEsUUFBUSxLQUFLRSxJQUFJLENBQUNSLEtBTjdCO0FBT0UsTUFBQSxRQUFRLEVBQUVRLElBQUksQ0FBQ0MsVUFQakI7QUFRRSxNQUFBLFFBQVEsRUFBRVAsUUFSWjtBQVNFLE1BQUEsVUFBVSxFQUFFQztBQVRkLE1BRGU7QUFBQSxHQUFoQixDQU5ILENBREY7QUFzQkQsQ0FyQ0QsQ0FEaUIsQ0FBbkI7QUF5Q0FULFVBQVUsQ0FBQ2dCLFNBQVgsNkVBSUtDLGVBQVFELFNBSmIsR0FLS0UsZ0JBQVNGLFNBTGQsR0FNS0csY0FBT0gsU0FOWixHQU9LSSxrQkFBV0osU0FQaEI7QUFTRTs7O0FBR0FULEVBQUFBLE9BQU8sRUFBRWMsc0JBQVVDLE9BQVYsQ0FDUEQsc0JBQVVFLEtBQVYsQ0FBZ0I7QUFDZG5CLElBQUFBLEtBQUssRUFBRWlCLHNCQUFVRyxJQUFWLENBQWVmLFVBRFI7QUFFZEgsSUFBQUEsS0FBSyxFQUFFZSxzQkFBVUksTUFBVixDQUFpQmhCLFVBRlY7QUFHZE0sSUFBQUEsVUFBVSxFQUFFTSxzQkFBVUs7QUFIUixHQUFoQixDQURPLEVBTVBqQixVQWxCSjs7QUFvQkU7OztBQUdBSCxFQUFBQSxLQUFLLEVBQUVlLHNCQUFVSSxNQXZCbkI7O0FBeUJFOzs7QUFHQXBCLEVBQUFBLFlBQVksRUFBRWdCLHNCQUFVSSxNQTVCMUI7O0FBOEJFOzs7QUFHQWpCLEVBQUFBLFFBQVEsRUFBRWEsc0JBQVVNLElBakN0Qjs7QUFtQ0U7OztBQUdBdkIsRUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVJLE1BdENuQjs7QUF3Q0U7OztBQUdBdEIsRUFBQUEsSUFBSSxFQUFFa0Isc0JBQVVPLEtBQVYsQ0FBZ0IsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFoQixDQTNDUjs7QUE2Q0U7OztBQUdBbkIsRUFBQUEsVUFBVSxFQUFFWSxzQkFBVUs7QUFoRHhCO2VBbURlMUIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0LCBkaW1lbnNpb25zIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCBSYWRpbyBmcm9tICcuL1JhZGlvJ1xuXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IGVtcHR5QXJyYXkgPSBbXVxuXG5jb25zdCBSYWRpb0dyb3VwID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBSYWRpb0dyb3VwKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBzaXplID0gMTIsXG4gICAgICBsYWJlbCxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIHZhbHVlLFxuICAgICAgb3B0aW9ucyA9IGVtcHR5QXJyYXksXG4gICAgICBvbkNoYW5nZSA9IG5vb3AsXG4gICAgICBpc1JlcXVpcmVkID0gZmFsc2UsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBuYW1lID0gdXNlSWQoJ1JhZGlvR3JvdXAnKVxuICAgIGNvbnN0IHNlbGVjdGVkID0gdmFsdWUgfHwgZGVmYXVsdFZhbHVlIHx8IHByb3BzLm9wdGlvbnNbMF0udmFsdWVcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPXtsYWJlbH0gey4uLnJlc3R9IHJlZj17cmVmfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIm11dGVkXCIgZm9udFdlaWdodD17NTAwfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHtvcHRpb25zLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8UmFkaW9cbiAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkID09PSBpdGVtLnZhbHVlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW0uaXNEaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9KVxuKVxuXG5SYWRpb0dyb3VwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAqL1xuICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogVGhlIG9wdGlvbnMgZm9yIHRoZSByYWRpb3Mgb2YgdGhlIFJhZGlvIEdyb3VwLlxuICAgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGlzRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfSlcbiAgKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSB2YWx1ZSB3aGVuIGNvbnRyb2xsZWQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIFJhZGlvIEdyb3VwIHdoZW4gdW5jb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBMYWJlbCB0byBkaXNwbGF5IGFib3ZlIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucy5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgcmFkaW8gY2lyY2xlLiBUaGlzIGFsc28gaW5mb3JtcyB0aGUgdGV4dCBzaXplIGFuZCBzcGFjaW5nLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsxMiwgMTZdKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgcmFkaW8gZ2V0IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUuXG4gICAqL1xuICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0dyb3VwXG4iXX0=