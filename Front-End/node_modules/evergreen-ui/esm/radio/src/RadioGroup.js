import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { spacing, position, layout, dimensions } from 'ui-box';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { useId } from '../../hooks';
import Radio from './Radio';

var noop = function noop() {};

var emptyArray = [];
var RadioGroup = memo(forwardRef(function RadioGroup(props, ref) {
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
      rest = _objectWithoutProperties(props, ["size", "label", "defaultValue", "value", "options", "onChange", "isRequired"]);

  var name = useId('RadioGroup');
  var selected = value || defaultValue || props.options[0].value;
  return React.createElement(Pane, _extends({
    role: "group",
    "aria-label": label
  }, rest, {
    ref: ref
  }), label && React.createElement(Text, {
    color: "muted",
    fontWeight: 500
  }, label), options.map(function (item) {
    return React.createElement(Radio, {
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
RadioGroup.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The options for the radios of the Radio Group.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool
  })).isRequired,

  /**
   * The selected item value when controlled.
   */
  value: PropTypes.string,

  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue: PropTypes.string,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * Label to display above the radio button options.
   */
  label: PropTypes.string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool
});
export default RadioGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW9Hcm91cC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiUHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlBhbmUiLCJUZXh0IiwidXNlSWQiLCJSYWRpbyIsIm5vb3AiLCJlbXB0eUFycmF5IiwiUmFkaW9Hcm91cCIsInByb3BzIiwicmVmIiwic2l6ZSIsImxhYmVsIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJpc1JlcXVpcmVkIiwicmVzdCIsIm5hbWUiLCJzZWxlY3RlZCIsIm1hcCIsIml0ZW0iLCJpc0Rpc2FibGVkIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwibm9kZSIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsVUFBcEMsUUFBc0QsUUFBdEQ7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGFBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBRUEsSUFBTUMsVUFBVSxHQUFHYixJQUFJLENBQ3JCQyxVQUFVLENBQUMsU0FBU1ksVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQUEsb0JBVXJDRCxLQVZxQyxDQUV2Q0UsSUFG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Ozs7QUFHQWQsRUFBQUEsVUFBVSxFQUFFcEIsU0FBUyxDQUFDZ0M7QUFoRHhCO0FBbURBLGVBQWVyQixVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB1c2VJZCB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vUmFkaW8nXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgZW1wdHlBcnJheSA9IFtdXG5cbmNvbnN0IFJhZGlvR3JvdXAgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFJhZGlvR3JvdXAocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIHNpemUgPSAxMixcbiAgICAgIGxhYmVsLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgdmFsdWUsXG4gICAgICBvcHRpb25zID0gZW1wdHlBcnJheSxcbiAgICAgIG9uQ2hhbmdlID0gbm9vcCxcbiAgICAgIGlzUmVxdWlyZWQgPSBmYWxzZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IG5hbWUgPSB1c2VJZCgnUmFkaW9Hcm91cCcpXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB2YWx1ZSB8fCBkZWZhdWx0VmFsdWUgfHwgcHJvcHMub3B0aW9uc1swXS52YWx1ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9e2xhYmVsfSB7Li4ucmVzdH0gcmVmPXtyZWZ9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwibXV0ZWRcIiBmb250V2VpZ2h0PXs1MDB9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAge29wdGlvbnMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxSYWRpb1xuICAgICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQgPT09IGl0ZW0udmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5pc0Rpc2FibGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH0pXG4pXG5cblJhZGlvR3JvdXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9ucyBmb3IgdGhlIHJhZGlvcyBvZiB0aGUgUmFkaW8gR3JvdXAuXG4gICAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBzZWxlY3RlZCBpdGVtIHZhbHVlIHdoZW4gY29udHJvbGxlZC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgUmFkaW8gR3JvdXAgd2hlbiB1bmNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIExhYmVsIHRvIGRpc3BsYXkgYWJvdmUgdGhlIHJhZGlvIGJ1dHRvbiBvcHRpb25zLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSByYWRpbyBjaXJjbGUuIFRoaXMgYWxzbyBpbmZvcm1zIHRoZSB0ZXh0IHNpemUgYW5kIHNwYWNpbmcuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzEyLCAxNl0pLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBnZXQgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZS5cbiAgICovXG4gIGlzUmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvR3JvdXBcbiJdfQ==