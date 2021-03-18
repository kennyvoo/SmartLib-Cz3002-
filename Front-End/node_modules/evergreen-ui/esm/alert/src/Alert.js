import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { spacing, dimensions, position, layout } from 'ui-box';
import { useTheme } from '../../theme';
import { Pane } from '../../layers';
import { Heading, Paragraph } from '../../typography';
import { IconButton } from '../../buttons';
import { CrossIcon } from '../../icons';
import { getIconForIntent } from './getIconForIntent';
var Alert = memo(forwardRef(function Alert(props, ref) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      children = props.children,
      _props$hasIcon = props.hasIcon,
      hasIcon = _props$hasIcon === void 0 ? true : _props$hasIcon,
      _props$hasTrim = props.hasTrim,
      hasTrim = _props$hasTrim === void 0 ? true : _props$hasTrim,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$isRemoveable = props.isRemoveable,
      isRemoveable = _props$isRemoveable === void 0 ? false : _props$isRemoveable,
      onRemove = props.onRemove,
      title = props.title,
      restProps = _objectWithoutProperties(props, ["appearance", "children", "hasIcon", "hasTrim", "intent", "isRemoveable", "onRemove", "title"]);

  var theme = useTheme();
  /**
   * Note that Alert return a className and additional properties.
   */

  var _theme$getAlertProps = theme.getAlertProps({
    appearance: appearance,
    intent: intent,
    hasTrim: hasTrim
  }),
      className = _theme$getAlertProps.className,
      themeProps = _objectWithoutProperties(_theme$getAlertProps, ["className"]);

  return React.createElement(Pane, _extends({
    ref: ref,
    className: className,
    role: "alert",
    backgroundColor: "white",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    paddingY: 12,
    paddingX: 16
  }, themeProps, restProps), hasIcon && React.createElement(Pane, {
    marginRight: 10,
    marginLeft: 2,
    height: 20,
    display: "flex",
    alignItems: "center"
  }, getIconForIntent(intent, {
    size: 14
  })), React.createElement(Pane, {
    display: "flex",
    width: "100%"
  }, React.createElement(Pane, {
    flex: 1
  }, React.createElement(Heading, {
    is: "h4",
    fontWeight: 600,
    size: 400,
    marginTop: 0,
    marginBottom: 0
  }, title), typeof children === 'string' ? React.createElement(Paragraph, {
    size: 400,
    color: "muted"
  }, children) : children), isRemoveable && React.createElement(Pane, {
    marginLeft: 24,
    flexShrink: 0,
    marginBottom: -2,
    marginTop: -2,
    marginRight: -2
  }, React.createElement(IconButton, {
    icon: CrossIcon,
    appearance: "minimal",
    height: 24,
    onClick: onRemove
  }))));
}));
Alert.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim: PropTypes.bool,

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: PropTypes.bool,

  /**
   * When true, show a remove icon button.
   */
  isRemoveable: PropTypes.bool,

  /**
   * Function called when the remove button is clicked.
   */
  onRemove: PropTypes.func,

  /**
   * The appearance of the alert.
   */
  appearance: PropTypes.oneOf(['default', 'card'])
});
export default Alert;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvQWxlcnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlByb3BUeXBlcyIsInNwYWNpbmciLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJsYXlvdXQiLCJ1c2VUaGVtZSIsIlBhbmUiLCJIZWFkaW5nIiwiUGFyYWdyYXBoIiwiSWNvbkJ1dHRvbiIsIkNyb3NzSWNvbiIsImdldEljb25Gb3JJbnRlbnQiLCJBbGVydCIsInByb3BzIiwicmVmIiwiYXBwZWFyYW5jZSIsImNoaWxkcmVuIiwiaGFzSWNvbiIsImhhc1RyaW0iLCJpbnRlbnQiLCJpc1JlbW92ZWFibGUiLCJvblJlbW92ZSIsInRpdGxlIiwicmVzdFByb3BzIiwidGhlbWUiLCJnZXRBbGVydFByb3BzIiwiY2xhc3NOYW1lIiwidGhlbWVQcm9wcyIsInNpemUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25lT2YiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsVUFBbEIsRUFBOEJDLFFBQTlCLEVBQXdDQyxNQUF4QyxRQUFzRCxRQUF0RDtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsUUFBbUMsa0JBQW5DO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixlQUEzQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxTQUFTQyxnQkFBVCxRQUFpQyxvQkFBakM7QUFFQSxJQUFNQyxLQUFLLEdBQUdkLElBQUksQ0FDaEJDLFVBQVUsQ0FBQyxTQUFTYSxLQUFULENBQWVDLEtBQWYsRUFBc0JD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ZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGFjaW5nLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nLCBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IGdldEljb25Gb3JJbnRlbnQgfSBmcm9tICcuL2dldEljb25Gb3JJbnRlbnQnXG5cbmNvbnN0IEFsZXJ0ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBBbGVydChwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXBwZWFyYW5jZSA9ICdkZWZhdWx0JyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaGFzSWNvbiA9IHRydWUsXG4gICAgICBoYXNUcmltID0gdHJ1ZSxcbiAgICAgIGludGVudCA9ICdub25lJyxcbiAgICAgIGlzUmVtb3ZlYWJsZSA9IGZhbHNlLFxuICAgICAgb25SZW1vdmUsXG4gICAgICB0aXRsZSxcbiAgICAgIC4uLnJlc3RQcm9wc1xuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICAvKipcbiAgICAgKiBOb3RlIHRoYXQgQWxlcnQgcmV0dXJuIGEgY2xhc3NOYW1lIGFuZCBhZGRpdGlvbmFsIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnRoZW1lUHJvcHMgfSA9IHRoZW1lLmdldEFsZXJ0UHJvcHMoe1xuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGludGVudCxcbiAgICAgIGhhc1RyaW1cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIHBhZGRpbmdZPXsxMn1cbiAgICAgICAgcGFkZGluZ1g9ezE2fVxuICAgICAgICB7Li4udGhlbWVQcm9wc31cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc0ljb24gJiYgKFxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICBtYXJnaW5SaWdodD17MTB9XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXsyfVxuICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtnZXRJY29uRm9ySW50ZW50KGludGVudCwgeyBzaXplOiAxNCB9KX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPFBhbmUgZmxleD17MX0+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBpcz1cImg0XCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD17NjAwfVxuICAgICAgICAgICAgICBzaXplPXs0MDB9XG4gICAgICAgICAgICAgIG1hcmdpblRvcD17MH1cbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIHtpc1JlbW92ZWFibGUgJiYgKFxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17MjR9XG4gICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17LTJ9XG4gICAgICAgICAgICAgIG1hcmdpblRvcD17LTJ9XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0PXstMn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBpY29uPXtDcm9zc0ljb259XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfSlcbilcblxuQWxlcnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYWxlcnQuIFdoZW4gYSBzdHJpbmcgaXMgcGFzc2VkIGl0IGlzIHdyYXBwZWQgaW4gYSBgPFRleHQgc2l6ZT17NDAwfSAvPmAgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgLyoqXG4gICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSksXG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgYWxlcnQuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGJvcmRlciBvbiB0aGUgbGVmdCBtYXRjaGluZyB0aGUgdHlwZS5cbiAgICovXG4gIGhhc1RyaW06IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNob3cgYSBpY29uIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLFxuICAgKi9cbiAgaGFzSWNvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIHJlbW92ZSBpY29uIGJ1dHRvbi5cbiAgICovXG4gIGlzUmVtb3ZlYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSByZW1vdmUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbGVydC5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2FyZCddKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIl19