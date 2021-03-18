import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from '../../theme';
import Text from './Text';
var Link = memo(forwardRef(function Link(props, ref) {
  var theme = useTheme();

  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      restProps = _objectWithoutProperties(props, ["className", "color"]);

  var themedClassName = theme.getLinkClassName(color);
  return React.createElement(Text, _extends({
    is: "a",
    ref: ref,
    className: cx(className, themedClassName),
    textDecoration: "underline",
    color: null
  }, restProps));
}));
Link.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: PropTypes.string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: PropTypes.string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: PropTypes.string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: PropTypes.string,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm1lbW8iLCJjeCIsIlByb3BUeXBlcyIsInVzZVRoZW1lIiwiVGV4dCIsIkxpbmsiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJyZXN0UHJvcHMiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRMaW5rQ2xhc3NOYW1lIiwicHJvcFR5cGVzIiwicmVsIiwic3RyaW5nIiwiaHJlZiIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjtBQUVBLElBQU1DLElBQUksR0FBR0wsSUFBSSxDQUNmRCxVQUFVLENBQUMsU0FBU00sSUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxHQUFyQixFQUEwQjtBQUNuQyxNQUFNQyxLQUFLLEdBQUdMLFFBQVEsRUFBdEI7O0FBRG1DLE1BRTNCTSxTQUYyQixHQUVvQkgsS0FGcEIsQ0FFM0JHLFNBRjJCO0FBQUEscUJBRW9CSCxLQUZwQixDQUVoQkksS0FGZ0I7QUFBQSxNQUVoQkEsS0FGZ0IsNkJBRVIsU0FGUTtBQUFBLE1BRU1DLFNBRk4sNEJBRW9CTCxLQUZwQjs7QUFHbkMsTUFBTU0sZUFBZSxHQUFHSixLQUFLLENBQUNLLGdCQUFOLENBQXVCSCxLQUF2QixDQUF4QjtBQUVBLFNBQ0Usb0JBQUMsSUFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLEdBREw7QUFFRSxJQUFBLEdBQUcsRUFBRUgsR0FGUDtBQUdFLElBQUEsU0FBUyxFQUFFTixFQUFFLENBQUNRLFNBQUQsRUFBWUcsZUFBWixDQUhmO0FBSUUsSUFBQSxjQUFjLEVBQUMsV0FKakI7QUFLRSxJQUFBLEtBQUssRUFBRTtBQUxULEtBTU1ELFNBTk4sRUFERjtBQVVELENBZlMsQ0FESyxDQUFqQjtBQW1CQU4sSUFBSSxDQUFDUyxTQUFMLG1DQUNLVixJQUFJLENBQUNVLFNBRFY7QUFHRTs7OztBQUlBQyxFQUFBQSxHQUFHLEVBQUViLFNBQVMsQ0FBQ2MsTUFQakI7O0FBU0U7OztBQUdBQyxFQUFBQSxJQUFJLEVBQUVmLFNBQVMsQ0FBQ2MsTUFabEI7O0FBY0U7OztBQUdBRSxFQUFBQSxNQUFNLEVBQUVoQixTQUFTLENBQUNjLE1BakJwQjs7QUFtQkU7OztBQUdBTixFQUFBQSxLQUFLLEVBQUVSLFNBQVMsQ0FBQ2MsTUF0Qm5COztBQXdCRTs7OztBQUlBUCxFQUFBQSxTQUFTLEVBQUVQLFNBQVMsQ0FBQ2M7QUE1QnZCO0FBK0JBLGVBQWVYLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jb25zdCBMaW5rID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBMaW5rKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY29sb3IgPSAnZGVmYXVsdCcsIC4uLnJlc3RQcm9wcyB9ID0gcHJvcHNcbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRMaW5rQ2xhc3NOYW1lKGNvbG9yKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYVwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxuICAgICAgICBjb2xvcj17bnVsbH1cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFRoaXMgYXR0cmlidXRlIG5hbWVzIGEgcmVsYXRpb25zaGlwIG9mIHRoZSBsaW5rZWQgZG9jdW1lbnQgdG8gdGhlIGN1cnJlbnQgZG9jdW1lbnQuXG4gICAqIENvbW1vbiB1c2UgY2FzZSBpczogcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiLlxuICAgKi9cbiAgcmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIFVSTCBvZiB0aGUgbGlua2VkIHJlc291cmNlLiBBIFVSTCBtaWdodCBiZSBhYnNvbHV0ZSBvciByZWxhdGl2ZS5cbiAgICovXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRhcmdldCBhdHJyaWJ1dGUsIGNvbW1vbiB1c2UgY2FzZSBpcyB0YXJnZXQ9XCJfYmxhbmsuXCJcbiAgICovXG4gIHRhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIChhbmQgc3R5bGluZykgb2YgdGhlIExpbmsuIENhbiBiZSBkZWZhdWx0LCBibHVlLCBncmVlbiBvciBuZXV0cmFsLlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBsaW5rLlxuICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIl19