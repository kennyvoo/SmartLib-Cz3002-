import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { dimensions, spacing, position, layout } from 'ui-box';
import { useTheme } from '../../theme';
import { IconWrapper } from '../../icons/src/IconWrapper';
import Button from './Button';
var IconButton = memo(forwardRef(function IconButton(props, ref) {
  var theme = useTheme();

  var icon = props.icon,
      iconSize = props.iconSize,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      restProps = _objectWithoutProperties(props, ["icon", "iconSize", "height", "intent"]);

  return React.createElement(Button, _extends({
    ref: ref,
    intent: intent,
    height: height,
    width: height,
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
    justifyContent: "center"
  }, restProps), React.createElement(IconWrapper, {
    icon: icon,
    color: intent === 'none' ? 'default' : 'currentColor',
    size: iconSize || theme.getIconSizeForIconButton(height)
  }));
}));
IconButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The Evergreen icon or custom icon to render
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: PropTypes.number,

  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']),

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default IconButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9JY29uQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJQcm9wVHlwZXMiLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwidXNlVGhlbWUiLCJJY29uV3JhcHBlciIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiaWNvbiIsImljb25TaXplIiwiaGVpZ2h0IiwiaW50ZW50IiwicmVzdFByb3BzIiwiZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50IiwibnVtYmVyIiwib25lT2YiLCJhcHBlYXJhbmNlIiwiaXNBY3RpdmUiLCJib29sIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLE9BQXJCLEVBQThCQyxRQUE5QixFQUF3Q0MsTUFBeEMsUUFBc0QsUUFBdEQ7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0Qiw2QkFBNUI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBRUEsSUFBTUMsVUFBVSxHQUFHVixJQUFJLENBQ3JCQyxVQUFVLENBQUMsU0FBU1MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQ3pDLE1BQU1DLEtBQUssR0FBR04sUUFBUSxFQUF0Qjs7QUFEeUMsTUFFakNPLElBRmlDLEdBRThCSCxLQUY5QixDQUVqQ0csSUFGaUM7QUFBQSxNQUUzQkMsUUFGMkIsR0FFOEJKLEtBRjlCLENBRTNCSSxRQUYyQjtBQUFBLHNCQUU4QkosS0FGOUIsQ0FFakJLLE1BRmlCO0FBQUEsTUFFakJBLE1BRmlCLDhCQUVSLEVBRlE7QUFBQSxzQkFFOEJMLEtBRjlCLENBRUpNLE1BRkk7QUFBQSxNQUVKQSxNQUZJLDhCQUVLLE1BRkw7QUFBQSxNQUVnQkMsU0FGaEIsNEJBRThCUCxLQUY5Qjs7QUFJekMsU0FDRSxvQkFBQyxNQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUVDLEdBRFA7QUFFRSxJQUFBLE1BQU0sRUFBRUssTUFGVjtBQUdFLElBQUEsTUFBTSxFQUFFRCxNQUhWO0FBSUUsSUFBQSxLQUFLLEVBQUVBLE1BSlQ7QUFLRSxJQUFBLFdBQVcsRUFBRSxDQUxmO0FBTUUsSUFBQSxZQUFZLEVBQUUsQ0FOaEI7QUFPRSxJQUFBLE9BQU8sRUFBQyxNQVBWO0FBUUUsSUFBQSxjQUFjLEVBQUM7QUFSakIsS0FTTUUsU0FUTixHQVdFLG9CQUFDLFdBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUosSUFEUjtBQUVFLElBQUEsS0FBSyxFQUFFRyxNQUFNLEtBQUssTUFBWCxHQUFvQixTQUFwQixHQUFnQyxjQUZ6QztBQUdFLElBQUEsSUFBSSxFQUFFRixRQUFRLElBQUlGLEtBQUssQ0FBQ00sd0JBQU4sQ0FBK0JILE1BQS9CO0FBSHBCLElBWEYsQ0FERjtBQW1CRCxDQXZCUyxDQURXLENBQXZCO0FBMkJBTixVQUFVLENBQUNVLFNBQVgsNkVBSUtqQixVQUFVLENBQUNpQixTQUpoQixHQVNLaEIsT0FBTyxDQUFDZ0IsU0FUYixHQWNLZixRQUFRLENBQUNlLFNBZGQsR0FtQktkLE1BQU0sQ0FBQ2MsU0FuQlo7QUFxQkU7OztBQUdBTixFQUFBQSxJQUFJLEVBQUVaLFNBQVMsQ0FBQ21CLFNBQVYsQ0FBb0IsQ0FBQ25CLFNBQVMsQ0FBQ29CLFdBQVgsRUFBd0JwQixTQUFTLENBQUNxQixPQUFsQyxDQUFwQixDQXhCUjs7QUEwQkU7OztBQUdBUixFQUFBQSxRQUFRLEVBQUViLFNBQVMsQ0FBQ3NCLE1BN0J0Qjs7QUErQkU7OztBQUdBUCxFQUFBQSxNQUFNLEVBQUVmLFNBQVMsQ0FBQ3VCLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixDQWxDVjs7QUFvQ0U7OztBQUdBQyxFQUFBQSxVQUFVLEVBQUV4QixTQUFTLENBQUN1QixLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FBaEIsQ0F2Q2Q7O0FBeUNFOzs7O0FBSUFFLEVBQUFBLFFBQVEsRUFBRXpCLFNBQVMsQ0FBQzBCLElBN0N0Qjs7QUErQ0U7Ozs7QUFJQUMsRUFBQUEsUUFBUSxFQUFFM0IsU0FBUyxDQUFDMEIsSUFuRHRCOztBQXFERTs7OztBQUlBRSxFQUFBQSxTQUFTLEVBQUU1QixTQUFTLENBQUM2QjtBQXpEdkI7QUE0REEsZUFBZXJCLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBJY29uV3JhcHBlciB9IGZyb20gJy4uLy4uL2ljb25zL3NyYy9JY29uV3JhcHBlcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5cbmNvbnN0IEljb25CdXR0b24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEljb25CdXR0b24ocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IHsgaWNvbiwgaWNvblNpemUsIGhlaWdodCA9IDMyLCBpbnRlbnQgPSAnbm9uZScsIC4uLnJlc3RQcm9wcyB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHdpZHRoPXtoZWlnaHR9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9ezB9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgPlxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGNvbG9yPXtpbnRlbnQgPT09ICdub25lJyA/ICdkZWZhdWx0JyA6ICdjdXJyZW50Q29sb3InfVxuICAgICAgICAgIHNpemU9e2ljb25TaXplIHx8IHRoZW1lLmdldEljb25TaXplRm9ySWNvbkJ1dHRvbihoZWlnaHQpfVxuICAgICAgICAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICB9KVxuKVxuXG5JY29uQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICovXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICovXG4gIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgRXZlcmdyZWVuIGljb24gb3IgY3VzdG9tIGljb24gdG8gcmVuZGVyXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudFR5cGUsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhbiBleHBsaWNpdCBpY29uIHNpemUgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgKi9cbiAgaWNvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtaW5pbWFsJywgJ3ByaW1hcnknXSksXG5cbiAgLyoqXG4gICAqIEZvcmNlZnVsbHkgc2V0IHRoZSBhY3RpdmUgc3RhdGUgb2YgYSBidXR0b24uXG4gICAqIFVzZWZ1bCBpbiBjb25qdWN0aW9uIHdpdGggYSBQb3BvdmVyLlxuICAgKi9cbiAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqIGlzTG9hZGluZyBhbHNvIHNldHMgdGhlIGJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b25cbiJdfQ==