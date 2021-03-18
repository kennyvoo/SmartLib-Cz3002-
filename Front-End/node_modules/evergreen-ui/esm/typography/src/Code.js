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
var Code = memo(forwardRef(function Code(props, ref) {
  var theme = useTheme();

  var className = props.className,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      restProps = _objectWithoutProperties(props, ["className", "appearance"]);

  var _theme$getCodeProps = theme.getCodeProps(appearance),
      _theme$getCodeProps$c = _theme$getCodeProps.className,
      themedClassName = _theme$getCodeProps$c === void 0 ? '' : _theme$getCodeProps$c,
      themeProps = _objectWithoutProperties(_theme$getCodeProps, ["className"]);

  return React.createElement(Text, _extends({
    is: "code",
    ref: ref,
    className: cx(className, themedClassName),
    fontFamily: "mono"
  }, themeProps, restProps));
}));
Code.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * The appearance of the code.
   */
  appearance: PropTypes.oneOf(['default', 'minimal']),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default Code;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Db2RlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm1lbW8iLCJjeCIsIlByb3BUeXBlcyIsInVzZVRoZW1lIiwiVGV4dCIsIkNvZGUiLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiYXBwZWFyYW5jZSIsInJlc3RQcm9wcyIsImdldENvZGVQcm9wcyIsInRoZW1lZENsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjtBQUVBLElBQU1DLElBQUksR0FBR0wsSUFBSSxDQUNmRCxVQUFVLENBQUMsU0FBU00sSUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxHQUFyQixFQUEwQjtBQUNuQyxNQUFNQyxLQUFLLEdBQUdMLFFBQVEsRUFBdEI7O0FBRG1DLE1BRTNCTSxTQUYyQixHQUV5QkgsS0FGekIsQ0FFM0JHLFNBRjJCO0FBQUEsMEJBRXlCSCxLQUZ6QixDQUVoQkksVUFGZ0I7QUFBQSxNQUVoQkEsVUFGZ0Isa0NBRUgsU0FGRztBQUFBLE1BRVdDLFNBRlgsNEJBRXlCTCxLQUZ6Qjs7QUFBQSw0QkFPL0JFLEtBQUssQ0FBQ0ksWUFBTixDQUFtQkYsVUFBbkIsQ0FQK0I7QUFBQSxrREFLakNELFNBTGlDO0FBQUEsTUFLdEJJLGVBTHNCLHNDQUtKLEVBTEk7QUFBQSxNQU05QkMsVUFOOEI7O0FBU25DLFNBQ0Usb0JBQUMsSUFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLE1BREw7QUFFRSxJQUFBLEdBQUcsRUFBRVAsR0FGUDtBQUdFLElBQUEsU0FBUyxFQUFFTixFQUFFLENBQUNRLFNBQUQsRUFBWUksZUFBWixDQUhmO0FBSUUsSUFBQSxVQUFVLEVBQUM7QUFKYixLQUtNQyxVQUxOLEVBTU1ILFNBTk4sRUFERjtBQVVELENBbkJTLENBREssQ0FBakI7QUF1QkFOLElBQUksQ0FBQ1UsU0FBTCxtQ0FDS1gsSUFBSSxDQUFDVyxTQURWO0FBR0U7OztBQUdBTCxFQUFBQSxVQUFVLEVBQUVSLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLENBQWhCLENBTmQ7O0FBUUU7Ozs7QUFJQVAsRUFBQUEsU0FBUyxFQUFFUCxTQUFTLENBQUNlO0FBWnZCO0FBZUEsZUFBZVosSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmNvbnN0IENvZGUgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIENvZGUocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBhcHBlYXJhbmNlID0gJ2RlZmF1bHQnLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWU6IHRoZW1lZENsYXNzTmFtZSA9ICcnLFxuICAgICAgLi4udGhlbWVQcm9wc1xuICAgIH0gPSB0aGVtZS5nZXRDb2RlUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImNvZGVcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIHRoZW1lZENsYXNzTmFtZSl9XG4gICAgICAgIGZvbnRGYW1pbHk9XCJtb25vXCJcbiAgICAgICAgey4uLnRoZW1lUHJvcHN9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuQ29kZS5wcm9wVHlwZXMgPSB7XG4gIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY29kZS5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbWluaW1hbCddKSxcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVcbiJdfQ==