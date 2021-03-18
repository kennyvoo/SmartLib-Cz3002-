import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout } from 'ui-box';
import { useTheme } from '../../theme';
var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var handleStyleClass = css({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString();
var iconContainerStyleClass = css({
  transition: "all 500ms ".concat(animationEasing.spring),
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '> svg': {
    transition: "all 500ms ".concat(animationEasing.spring),
    transform: 'scale(0)'
  },
  '&[data-checked="true"] > svg': {
    transform: 'scale(1)'
  }
}).toString();
var handleContainerStyleClass = css({
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}).toString();
var CheckIcon = memo(function CheckIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, ["size", "fill"]);

  return React.createElement("svg", _extends({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
});
CheckIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
};

var noop = function noop() {};

var Switch = memo(forwardRef(function Switch(props, ref) {
  var id = props.id,
      name = props.name,
      _props$height = props.height,
      height = _props$height === void 0 ? 16 : _props$height,
      _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$hasCheckIcon = props.hasCheckIcon,
      hasCheckIcon = _props$hasCheckIcon === void 0 ? true : _props$hasCheckIcon,
      defaultChecked = props.defaultChecked,
      rest = _objectWithoutProperties(props, ["id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"]);

  var theme = useTheme();
  var themedClassName = theme.getSwitchClassName(appearance);
  return React.createElement(Box, _extends({
    is: "label",
    display: "block",
    width: height * 2,
    position: "relative",
    ref: ref
  }, rest), React.createElement(Box, {
    is: "input",
    className: themedClassName,
    id: id,
    name: name,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    defaultChecked: defaultChecked,
    onChange: onChange
  }), React.createElement(Box, {
    height: height,
    width: height * 2
  }, React.createElement(Box, {
    height: height,
    width: height,
    "data-checked": checked,
    className: iconContainerStyleClass
  }, hasCheckIcon && React.createElement(CheckIcon, {
    size: height / 2 - 3
  })), React.createElement(Box, {
    width: height * 2,
    display: "flex",
    "data-checked": checked,
    className: handleContainerStyleClass
  }, React.createElement(Box, {
    flex: 1,
    padding: 2
  }, React.createElement(Box, {
    width: height - 4,
    height: height - 4,
    className: handleStyleClass
  })))));
}));
Switch.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * The height of the switch.
   */
  height: PropTypes.number,

  /**
   * When true, the switch is checked (on).
   */
  checked: PropTypes.bool,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the switch is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: PropTypes.bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: PropTypes.bool
});
export default Switch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zd2l0Y2gvc3JjL1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiY3NzIiwiUHJvcFR5cGVzIiwiQm94Iiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwidXNlVGhlbWUiLCJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJoYW5kbGVTdHlsZUNsYXNzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidG9TdHJpbmciLCJpY29uQ29udGFpbmVyU3R5bGVDbGFzcyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdMZWZ0IiwidHJhbnNmb3JtIiwiaGFuZGxlQ29udGFpbmVyU3R5bGVDbGFzcyIsIkNoZWNrSWNvbiIsInNpemUiLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJub29wIiwiU3dpdGNoIiwicmVmIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJhcHBlYXJhbmNlIiwiaGFzQ2hlY2tJY29uIiwiZGVmYXVsdENoZWNrZWQiLCJyZXN0IiwidGhlbWUiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRTd2l0Y2hDbGFzc05hbWUiLCJ2YWx1ZSIsImJvb2wiLCJmdW5jIiwiaXNJbnZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxPQUFkLEVBQXVCQyxRQUF2QixFQUFpQ0MsTUFBakMsUUFBK0MsUUFBL0M7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBRUEsSUFB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QTJDRTs7O0FBR0FFLEVBQUFBLFNBQVMsRUFBRS9DLFNBQVMsQ0FBQzZDLElBOUN2Qjs7QUFnREU7Ozs7QUFJQVIsRUFBQUEsVUFBVSxFQUFFckMsU0FBUyxDQUFDMEIsTUFwRHhCOztBQXNERTs7O0FBR0FZLEVBQUFBLFlBQVksRUFBRXRDLFNBQVMsQ0FBQzZDLElBekQxQjs7QUEyREU7Ozs7QUFJQU4sRUFBQUEsY0FBYyxFQUFFdkMsU0FBUyxDQUFDNkM7QUEvRDVCO0FBa0VBLGVBQWVoQixNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgaGFuZGxlU3R5bGVDbGFzcyA9IGNzcyh7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXJSYWRpdXM6IDk5OTlcbn0pLnRvU3RyaW5nKClcblxuY29uc3QgaWNvbkNvbnRhaW5lclN0eWxlQ2xhc3MgPSBjc3Moe1xuICB0cmFuc2l0aW9uOiBgYWxsIDUwMG1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ31gLFxuICBvcGFjaXR5OiAwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBwYWRkaW5nTGVmdDogNCxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9LFxuICAnPiBzdmcnOiB7XG4gICAgdHJhbnNpdGlvbjogYGFsbCA1MDBtcyAke2FuaW1hdGlvbkVhc2luZy5zcHJpbmd9YCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgfSxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSA+IHN2Zyc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzID0gY3NzKHtcbiAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dCcsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSc6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUwJSknXG4gIH1cbn0pLnRvU3RyaW5nKClcblxuY29uc3QgQ2hlY2tJY29uID0gbWVtbyhmdW5jdGlvbiBDaGVja0ljb24oe1xuICBzaXplLFxuICBmaWxsID0gJ2N1cnJlbnRDb2xvcicsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17MTB9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAxMCA3XCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNNCA0LjU4NkwxLjcwNyAyLjI5M0ExIDEgMCAxIDAgLjI5MyAzLjcwN2wzIDNhLjk5Ny45OTcgMCAwIDAgMS40MTQgMGw1LTVBMSAxIDAgMSAwIDguMjkzLjI5M0w0IDQuNTg2elwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59KVxuXG5DaGVja0ljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBTd2l0Y2ggPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFN3aXRjaChwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgaGVpZ2h0ID0gMTYsXG4gICAgICBjaGVja2VkID0gZmFsc2UsXG4gICAgICBvbkNoYW5nZSA9IG5vb3AsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgYXBwZWFyYW5jZSA9ICdkZWZhdWx0JyxcbiAgICAgIGhhc0NoZWNrSWNvbiA9IHRydWUsXG4gICAgICBkZWZhdWx0Q2hlY2tlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFN3aXRjaENsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIHdpZHRoPXtoZWlnaHQgKiAyfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17ZGVmYXVsdENoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17aGVpZ2h0ICogMn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD17aGVpZ2h0fVxuICAgICAgICAgICAgZGF0YS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpY29uQ29udGFpbmVyU3R5bGVDbGFzc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGFzQ2hlY2tJY29uICYmIDxDaGVja0ljb24gc2l6ZT17aGVpZ2h0IC8gMiAtIDN9IC8+fVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHdpZHRoPXtoZWlnaHQgKiAyfVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgZGF0YS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggZmxleD17MX0gcGFkZGluZz17Mn0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD17aGVpZ2h0IC0gNH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIDR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtoYW5kbGVTdHlsZUNsYXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9KVxuKVxuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBzd2l0Y2guXG4gICAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBpcyBjaGVja2VkIChvbikuXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgaW52YWxpZC5cbiAgICovXG4gIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAgICogVGhlIGRlZmF1bHQgdGhlbWUgb25seSBjb21lcyB3aXRoIGEgZGVmYXVsdCBzdHlsZS5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBoYXMgYSBjaGVjayBpY29uLlxuICAgKi9cbiAgaGFzQ2hlY2tJY29uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIHRydWUgYnkgZGVmYXVsdC5cbiAgICogVGhpcyBpcyBmb3IgdW5jb250cm9sbGVkIHVzYWdlLlxuICAgKi9cbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFxuIl19