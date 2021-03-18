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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _typography = require("../../typography");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CircleIcon = (0, _react.memo)(function CircleIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["size", "fill"]);
  return _react["default"].createElement("svg", (0, _extends2["default"])({
    width: size,
    height: size,
    viewBox: "0 0 10 10"
  }, props), _react["default"].createElement("circle", {
    fill: fill,
    cx: "5",
    cy: "5",
    r: "5"
  }));
});
CircleIcon.propTypes = {
  fill: _propTypes["default"].string,
  size: _propTypes["default"].number
};

var noop = function noop() {};

var Radio = (0, _react.memo)((0, _react.forwardRef)(function Radio(props, ref) {
  var id = props.id,
      name = props.name,
      label = props.label,
      disabled = props.disabled,
      _props$isInvalid = props.isInvalid,
      isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
      checked = props.checked,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      value = props.value,
      _props$size = props.size,
      size = _props$size === void 0 ? 12 : _props$size,
      _props$isRequired = props.isRequired,
      isRequired = _props$isRequired === void 0 ? false : _props$isRequired,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      rest = (0, _objectWithoutProperties2["default"])(props, ["id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "size", "isRequired", "appearance"]);
  var theme = (0, _theme.useTheme)();
  var themedClassName = theme.getRadioClassName(appearance);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "label",
    ref: ref,
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: "relative",
    display: "flex",
    marginY: size === 12 ? 8 : 12
  }, rest), _react["default"].createElement(_uiBox["default"], {
    is: "input",
    className: themedClassName,
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": isInvalid,
    required: isRequired
  }), _react["default"].createElement(_uiBox["default"], {
    boxSizing: "border-box",
    borderRadius: 9999,
    display: "flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    width: size,
    height: size
  }, _react["default"].createElement(CircleIcon, {
    size: size === 12 ? 4 : 4
  })), label && _react["default"].createElement(_typography.Text, {
    marginLeft: size === 12 ? 8 : 10,
    size: size === 12 ? 300 : 400,
    color: disabled ? 'muted' : 'default'
  }, label));
}));
Radio.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: _propTypes["default"].string,

  /**
   * The name attribute of the radio.
   */
  name: _propTypes["default"].string,

  /**
   * Label of the radio.
   */
  label: _propTypes["default"].node,

  /**
   * The value attribute of the radio.
   */
  value: _propTypes["default"].string,

  /**
   * Function called when state changes
   * Signature:
   * ```
   * function(event: object, checked: boolean) => void
   * ```
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the radio is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, the radio is checked.
   */
  checked: _propTypes["default"].bool,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: _propTypes["default"].oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: _propTypes["default"].bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string
});
var _default = Radio;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW8uanMiXSwibmFtZXMiOlsiQ2lyY2xlSWNvbiIsInNpemUiLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJub29wIiwiUmFkaW8iLCJyZWYiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImRpc2FibGVkIiwiaXNJbnZhbGlkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJpc1JlcXVpcmVkIiwiYXBwZWFyYW5jZSIsInJlc3QiLCJ0aGVtZSIsInRoZW1lZENsYXNzTmFtZSIsImdldFJhZGlvQ2xhc3NOYW1lIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIm5vZGUiLCJmdW5jIiwiYm9vbCIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsaUJBQUssU0FBU0EsVUFBVCxPQUlyQjtBQUFBLE1BSERDLElBR0MsUUFIREEsSUFHQztBQUFBLHVCQUZEQyxJQUVDO0FBQUEsTUFGREEsSUFFQywwQkFGTSxjQUVOO0FBQUEsTUFERUMsS0FDRjtBQUNELFNBQ0U7QUFBSyxJQUFBLEtBQUssRUFBRUYsSUFBWjtBQUFrQixJQUFBLE1BQU0sRUFBRUEsSUFBMUI7QUFBZ0MsSUFBQSxPQUFPLEVBQUM7QUFBeEMsS0FBd0RFLEtBQXhELEdBQ0U7QUFBUSxJQUFBLElBQUksRUFBRUQsSUFBZDtBQUFvQixJQUFBLEVBQUUsRUFBQyxHQUF2QjtBQUEyQixJQUFBLEVBQUUsRUFBQyxHQUE5QjtBQUFrQyxJQUFBLENBQUMsRUFBQztBQUFwQyxJQURGLENBREY7QUFLRCxDQVZrQixDQUFuQjtBQVlBRixVQUFVLENBQUNJLFNBQVgsR0FBdUI7QUFDckJGLEVBQUFBLElBQUksRUFBRUcsc0JBQVVDLE1BREs7QUFFckJMLEVBQUFBLElBQUksRUFBRUksc0JBQVVFO0FBRkssQ0FBdkI7O0FBS0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLEtBQUssR0FBRyxpQkFDWix1QkFBVyxTQUFTQSxLQUFULENBQWVOLEtBQWYsRUFBc0JPLEdBQXRCLEVBQTJCO0FBQUEsTUFFbENDLEVBRmtDLEdBY2hDUixLQWRnQyxDQUVsQ1EsRUFGa0M7QUFBQSxNQUdsQ0MsSUFIa0MsR0FjaENULEtBZGdDLENBR2xDUyxJQUhrQztBQUFBLE1BSWxDQyxLQUprQyxHQWNoQ1YsS0FkZ0MsQ0FJbENVLEtBSmtDO0FBQUEsTUFLbENDLFFBTGtDLEdBY2hDWCxLQWRnQyxDQUtsQ1csUUFMa0M7QUFBQSx5QkFjaENYLEtBZGdDLENBTWxDWSxTQU5rQztBQUFBLE1BTWxDQSxTQU5rQyxpQ0FNdEIsS0FOc0I7QUFBQSxNQU9sQ0MsT0FQa0MsR0FjaENiLEtBZGdDLENBT2xDYSxPQVBrQztBQUFBLHdCQWNoQ2IsS0FkZ0MsQ0FRbENjLFFBUmtDO0FBQUEsTUFRbENBLFFBUmtDLGdDQVF2QlQsSUFSdUI7QUFBQSxNQVNsQ1UsS0FUa0MsR0FjaENmLEtBZGdDLENBU2xDZSxLQVRrQztBQUFBLG9CQWNoQ2YsS0FkZ0MsQ0FVbENGLElBVmtDO0FBQUEsTUFVbENBLElBVmtDLDRCQVUzQixFQVYyQjtBQUFBLDBCQWNoQ0UsS0FkZ0MsQ0FXbENnQixVQVhrQztBQUFBLE1BV2xDQSxVQVhrQyxrQ0FXckIsS0FYcUI7QUFBQSwwQkFjaENoQixLQWRnQyxDQVlsQ2lCLFVBWmtDO0FBQUEsTUFZbENBLFVBWmtDLGtDQVlyQixTQVpxQjtBQUFBLE1BYS9CQyxJQWIrQiw2Q0FjaENsQixLQWRnQztBQWdCcEMsTUFBTW1CLEtBQUssR0FBRyxzQkFBZDtBQUNBLE1BQU1DLGVBQWUsR0FBR0QsS0FBSyxDQUFDRSxpQkFBTixDQUF3QkosVUFBeEIsQ0FBeEI7QUFFQSxTQUNFLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsT0FETDtBQUVFLElBQUEsR0FBRyxFQUFFVixHQUZQO0FBR0UsSUFBQSxNQUFNLEVBQUVJLFFBQVEsR0FBRyxhQUFILEdBQW1CLFNBSHJDO0FBSUUsSUFBQSxRQUFRLEVBQUMsVUFKWDtBQUtFLElBQUEsT0FBTyxFQUFDLE1BTFY7QUFNRSxJQUFBLE9BQU8sRUFBRWIsSUFBSSxLQUFLLEVBQVQsR0FBYyxDQUFkLEdBQWtCO0FBTjdCLEtBT01vQixJQVBOLEdBU0UsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxPQURMO0FBRUUsSUFBQSxTQUFTLEVBQUVFLGVBRmI7QUFHRSxJQUFBLEVBQUUsRUFBRVosRUFITjtBQUlFLElBQUEsSUFBSSxFQUFDLE9BSlA7QUFLRSxJQUFBLElBQUksRUFBRUMsSUFMUjtBQU1FLElBQUEsS0FBSyxFQUFFTSxLQU5UO0FBT0UsSUFBQSxPQUFPLEVBQUVGLE9BUFg7QUFRRSxJQUFBLFFBQVEsRUFBRUMsUUFSWjtBQVNFLElBQUEsUUFBUSxFQUFFSCxRQVRaO0FBVUUsb0JBQWNDLFNBVmhCO0FBV0UsSUFBQSxRQUFRLEVBQUVJO0FBWFosSUFURixFQXNCRSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLFlBRFo7QUFFRSxJQUFBLFlBQVksRUFBRSxJQUZoQjtBQUdFLElBQUEsT0FBTyxFQUFDLE1BSFY7QUFJRSxJQUFBLElBQUksRUFBQyxNQUpQO0FBS0UsSUFBQSxVQUFVLEVBQUMsUUFMYjtBQU1FLElBQUEsY0FBYyxFQUFDLFFBTmpCO0FBT0UsSUFBQSxTQUFTLEVBQUUsQ0FQYjtBQVFFLElBQUEsS0FBSyxFQUFFbEIsSUFSVDtBQVNFLElBQUEsTUFBTSxFQUFFQTtBQVRWLEtBV0UsZ0NBQUMsVUFBRDtBQUFZLElBQUEsSUFBSSxFQUFFQSxJQUFJLEtBQUssRUFBVCxHQUFjLENBQWQsR0FBa0I7QUFBcEMsSUFYRixDQXRCRixFQW1DR1ksS0FBSyxJQUNKLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVaLElBQUksS0FBSyxFQUFULEdBQWMsQ0FBZCxHQUFrQixFQURoQztBQUVFLElBQUEsSUFBSSxFQUFFQSxJQUFJLEtBQUssRUFBVCxHQUFjLEdBQWQsR0FBb0IsR0FGNUI7QUFHRSxJQUFBLEtBQUssRUFBRWEsUUFBUSxHQUFHLE9BQUgsR0FBYTtBQUg5QixLQUtHRCxLQUxILENBcENKLENBREY7QUErQ0QsQ0FsRUQsQ0FEWSxDQUFkO0FBc0VBSixLQUFLLENBQUNMLFNBQU4sNkVBSUtxQixlQUFRckIsU0FKYixHQUtLc0IsZ0JBQVN0QixTQUxkLEdBTUt1QixjQUFPdkIsU0FOWixHQU9Ld0Isa0JBQVd4QixTQVBoQjtBQVNFOzs7QUFHQU8sRUFBQUEsRUFBRSxFQUFFTixzQkFBVUMsTUFaaEI7O0FBY0U7OztBQUdBTSxFQUFBQSxJQUFJLEVBQUVQLHNCQUFVQyxNQWpCbEI7O0FBbUJFOzs7QUFHQU8sRUFBQUEsS0FBSyxFQUFFUixzQkFBVXdCLElBdEJuQjs7QUF3QkU7OztBQUdBWCxFQUFBQSxLQUFLLEVBQUViLHNCQUFVQyxNQTNCbkI7O0FBNkJFOzs7Ozs7O0FBT0FXLEVBQUFBLFFBQVEsRUFBRVosc0JBQVV5QixJQXBDdEI7O0FBc0NFOzs7QUFHQWhCLEVBQUFBLFFBQVEsRUFBRVQsc0JBQVUwQixJQXpDdEI7O0FBMkNFOzs7QUFHQWYsRUFBQUEsT0FBTyxFQUFFWCxzQkFBVTBCLElBOUNyQjs7QUFnREU7OztBQUdBOUIsRUFBQUEsSUFBSSxFQUFFSSxzQkFBVTJCLEtBQVYsQ0FBZ0IsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFoQixDQW5EUjs7QUFxREU7OztBQUdBYixFQUFBQSxVQUFVLEVBQUVkLHNCQUFVMEIsSUF4RHhCOztBQTBERTs7OztBQUlBaEIsRUFBQUEsU0FBUyxFQUFFVixzQkFBVTBCLElBOUR2Qjs7QUFnRUU7Ozs7QUFJQVgsRUFBQUEsVUFBVSxFQUFFZixzQkFBVUM7QUFwRXhCO2VBdUVlRyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgQ2lyY2xlSWNvbiA9IG1lbW8oZnVuY3Rpb24gQ2lyY2xlSWNvbih7XG4gIHNpemUsXG4gIGZpbGwgPSAnY3VycmVudENvbG9yJyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMTAgMTBcIiB7Li4ucHJvcHN9PlxuICAgICAgPGNpcmNsZSBmaWxsPXtmaWxsfSBjeD1cIjVcIiBjeT1cIjVcIiByPVwiNVwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn0pXG5cbkNpcmNsZUljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBSYWRpbyA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gUmFkaW8ocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpc0ludmFsaWQgPSBmYWxzZSxcbiAgICAgIGNoZWNrZWQsXG4gICAgICBvbkNoYW5nZSA9IG5vb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIHNpemUgPSAxMixcbiAgICAgIGlzUmVxdWlyZWQgPSBmYWxzZSxcbiAgICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRSYWRpb0NsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjdXJzb3I9e2Rpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJ31cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgbWFyZ2luWT17c2l6ZSA9PT0gMTIgPyA4IDogMTJ9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgYm94U2l6aW5nPVwiYm9yZGVyLWJveFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPXs5OTk5fVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBmbGV4PVwibm9uZVwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIG1hcmdpblRvcD17Mn1cbiAgICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2lyY2xlSWNvbiBzaXplPXtzaXplID09PSAxMiA/IDQgOiA0fSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgbWFyZ2luTGVmdD17c2l6ZSA9PT0gMTIgPyA4IDogMTB9XG4gICAgICAgICAgICBzaXplPXtzaXplID09PSAxMiA/IDMwMCA6IDQwMH1cbiAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/ICdtdXRlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuUmFkaW8ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogTGFiZWwgb2YgdGhlIHJhZGlvLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzXG4gICAqIFNpZ25hdHVyZTpcbiAgICogYGBgXG4gICAqIGZ1bmN0aW9uKGV2ZW50OiBvYmplY3QsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWRcbiAgICogYGBgXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBpcyBjaGVja2VkLlxuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSByYWRpbyBjaXJjbGUuIFRoaXMgYWxzbyBpbmZvcm1zIHRoZSB0ZXh0IHNpemUgYW5kIHNwYWNpbmcuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzEyLCAxNl0pLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBnZXQgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZS5cbiAgICovXG4gIGlzUmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBhcmlhLWludmFsaWQgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFVzZWQgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAqL1xuICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY2hlY2tib3guXG4gICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgY29tZXMgd2l0aCBhIGRlZmF1bHQgc3R5bGUuXG4gICAqL1xuICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvXG4iXX0=