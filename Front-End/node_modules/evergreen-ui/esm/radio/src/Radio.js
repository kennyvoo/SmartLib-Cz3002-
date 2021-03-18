import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import { Text } from '../../typography';
import { useTheme } from '../../theme';
var CircleIcon = memo(function CircleIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, ["size", "fill"]);

  return React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 10 10"
  }, props), React.createElement("circle", {
    fill: fill,
    cx: "5",
    cy: "5",
    r: "5"
  }));
});
CircleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
};

var noop = function noop() {};

var Radio = memo(forwardRef(function Radio(props, ref) {
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
      rest = _objectWithoutProperties(props, ["id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "size", "isRequired", "appearance"]);

  var theme = useTheme();
  var themedClassName = theme.getRadioClassName(appearance);
  return React.createElement(Box, _extends({
    is: "label",
    ref: ref,
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: "relative",
    display: "flex",
    marginY: size === 12 ? 8 : 12
  }, rest), React.createElement(Box, {
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
  }), React.createElement(Box, {
    boxSizing: "border-box",
    borderRadius: 9999,
    display: "flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    width: size,
    height: size
  }, React.createElement(CircleIcon, {
    size: size === 12 ? 4 : 4
  })), label && React.createElement(Text, {
    marginLeft: size === 12 ? 8 : 10,
    size: size === 12 ? 300 : 400,
    color: disabled ? 'muted' : 'default'
  }, label));
}));
Radio.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * Label of the radio.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * Function called when state changes
   * Signature:
   * ```
   * function(event: object, checked: boolean) => void
   * ```
   */
  onChange: PropTypes.func,

  /**
   * When true, the radio is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the radio is checked.
   */
  checked: PropTypes.bool,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string
});
export default Radio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlByb3BUeXBlcyIsIkJveCIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJUZXh0IiwidXNlVGhlbWUiLCJDaXJjbGVJY29uIiwic2l6ZSIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIm5vb3AiLCJSYWRpbyIsInJlZiIsImlkIiwibmFtZSIsImxhYmVsIiwiZGlzYWJsZWQiLCJpc0ludmFsaWQiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJhcHBlYXJhbmNlIiwicmVzdCIsInRoZW1lIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0UmFkaW9DbGFzc05hbWUiLCJub2RlIiwiZnVuYyIsImJvb2wiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxPQUFkLEVBQXVCQyxRQUF2QixFQUFpQ0MsTUFBakMsRUFBeUNDLFVBQXpDLFFBQTJELFFBQTNEO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBRUEsSUFBTUMsVUFBVSxHQUFHVixJQUFJLENBQUMsU0FBU1UsVUFBVCxPQUlyQjtBQUFBLE1BSERDLElBR0MsUUFIREEsSUFHQztBQUFBLHVCQUZEQyxJQUVDO0FBQUEsTUFGREEsSUFFQywwQkFGTSxjQUVOO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUNFO0FBQUssSUFBQSxLQUFLLEVBQUVGLElBQVo7QUFBa0IsSUFBQSxNQUFNLEVBQUVBLElBQTFCO0FBQWdDLElBQUEsT0FBTyxFQUFD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O0FBZ0RFOzs7QUFHQXpCLEVBQUFBLElBQUksRUFBRVQsU0FBUyxDQUFDbUMsS0FBVixDQUFnQixDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWhCLENBbkRSOztBQXFERTs7O0FBR0FULEVBQUFBLFVBQVUsRUFBRTFCLFNBQVMsQ0FBQ2tDLElBeER4Qjs7QUEwREU7Ozs7QUFJQVosRUFBQUEsU0FBUyxFQUFFdEIsU0FBUyxDQUFDa0MsSUE5RHZCOztBQWdFRTs7OztBQUlBUCxFQUFBQSxVQUFVLEVBQUUzQixTQUFTLENBQUNhO0FBcEV4QjtBQXVFQSxlQUFlRyxLQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgQ2lyY2xlSWNvbiA9IG1lbW8oZnVuY3Rpb24gQ2lyY2xlSWNvbih7XG4gIHNpemUsXG4gIGZpbGwgPSAnY3VycmVudENvbG9yJyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMTAgMTBcIiB7Li4ucHJvcHN9PlxuICAgICAgPGNpcmNsZSBmaWxsPXtmaWxsfSBjeD1cIjVcIiBjeT1cIjVcIiByPVwiNVwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn0pXG5cbkNpcmNsZUljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBSYWRpbyA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gUmFkaW8ocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpc0ludmFsaWQgPSBmYWxzZSxcbiAgICAgIGNoZWNrZWQsXG4gICAgICBvbkNoYW5nZSA9IG5vb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIHNpemUgPSAxMixcbiAgICAgIGlzUmVxdWlyZWQgPSBmYWxzZSxcbiAgICAgIGFwcGVhcmFuY2UgPSAnZGVmYXVsdCcsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRSYWRpb0NsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjdXJzb3I9e2Rpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJ31cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgbWFyZ2luWT17c2l6ZSA9PT0gMTIgPyA4IDogMTJ9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgYm94U2l6aW5nPVwiYm9yZGVyLWJveFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPXs5OTk5fVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBmbGV4PVwibm9uZVwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIG1hcmdpblRvcD17Mn1cbiAgICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2lyY2xlSWNvbiBzaXplPXtzaXplID09PSAxMiA/IDQgOiA0fSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgbWFyZ2luTGVmdD17c2l6ZSA9PT0gMTIgPyA4IDogMTB9XG4gICAgICAgICAgICBzaXplPXtzaXplID09PSAxMiA/IDMwMCA6IDQwMH1cbiAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/ICdtdXRlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuUmFkaW8ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogTGFiZWwgb2YgdGhlIHJhZGlvLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzXG4gICAqIFNpZ25hdHVyZTpcbiAgICogYGBgXG4gICAqIGZ1bmN0aW9uKGV2ZW50OiBvYmplY3QsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWRcbiAgICogYGBgXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBpcyBjaGVja2VkLlxuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSByYWRpbyBjaXJjbGUuIFRoaXMgYWxzbyBpbmZvcm1zIHRoZSB0ZXh0IHNpemUgYW5kIHNwYWNpbmcuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzEyLCAxNl0pLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBnZXQgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZS5cbiAgICovXG4gIGlzUmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBhcmlhLWludmFsaWQgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFVzZWQgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAqL1xuICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY2hlY2tib3guXG4gICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgY29tZXMgd2l0aCBhIGRlZmF1bHQgc3R5bGUuXG4gICAqL1xuICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvXG4iXX0=