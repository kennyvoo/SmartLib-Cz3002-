import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { spacing, dimensions, position, layout } from 'ui-box';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { getIconForIntent } from './getIconForIntent';
var InlineAlert = memo(forwardRef(function InlineAlert(props, ref) {
  var children = props.children,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$hasIcon = props.hasIcon,
      hasIcon = _props$hasIcon === void 0 ? true : _props$hasIcon,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      restProps = _objectWithoutProperties(props, ["children", "intent", "hasIcon", "size"]);

  return React.createElement(Pane, _extends({
    ref: ref,
    alignItems: "center",
    display: "flex"
  }, restProps), hasIcon && React.createElement(Pane, {
    display: "inline",
    marginRight: 8
  }, getIconForIntent(intent, {
    size: 14,
    marginTop: 2
  })), React.createElement(Text, {
    size: size,
    fontWeight: 500
  }, children));
}));
InlineAlert.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The content of the alert.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: PropTypes.bool,

  /**
   * The size of the Text.
   */
  size: PropTypes.number
});
export default InlineAlert;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvSW5saW5lQWxlcnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlByb3BUeXBlcyIsInNwYWNpbmciLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJsYXlvdXQiLCJQYW5lIiwiVGV4dCIsImdldEljb25Gb3JJbnRlbnQiLCJJbmxpbmVBbGVydCIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJpbnRlbnQiLCJoYXNJY29uIiwic2l6ZSIsInJlc3RQcm9wcyIsIm1hcmdpblRvcCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJvbmVPZiIsImJvb2wiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLFVBQWxCLEVBQThCQyxRQUE5QixFQUF3Q0MsTUFBeEMsUUFBc0QsUUFBdEQ7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxnQkFBVCxRQUFpQyxvQkFBakM7QUFFQSxJQUFNQyxXQUFXLEdBQUdWLElBQUksQ0FDdEJDLFVBQVUsQ0FBQyxTQUFTUyxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFBQSxNQUV4Q0MsUUFGd0MsR0FPdENGLEtBUHNDLENBRXhDRSxRQUZ3QztBQUFBLHNCQU90Q0YsS0FQc0MsQ0FHeENHLE1BSHdDO0FBQUEsTUFHeENBLE1BSHdDLDhCQUcvQixNQUgrQjtBQUFBLHVCQU90Q0gsS0FQc0MsQ0FJeENJLE9BSndDO0FBQUEsTUFJeENBLE9BSndDLCtCQUk5QixJQUo4QjtBQUFBLG9CQU90Q0osS0FQc0MsQ0FLeENLLElBTHdDO0FBQUEsTUFLeENBLElBTHdDLDRCQUtqQyxHQUxpQztBQUFBLE1BTXJDQyxTQU5xQyw0QkFPdENOLEtBUHNDOztBQVMxQyxTQUNFLG9CQUFDLElBQUQ7QUFBTSxJQUFBLEdBQUcsRUFBRUMsR0FBWDtBQUFnQixJQUFBLFVBQVUsRUFBQyxRQUEzQjtBQUFvQyxJQUFBLE9BQU8sRUFBQztBQUE1QyxLQUF1REssU0FBdkQsR0FDR0YsT0FBTyxJQUNOLG9CQUFDLElBQUQ7QUFBTSxJQUFBLE9BQU8sRUFBQyxRQUFkO0FBQXVCLElBQUEsV0FBVyxFQUFFO0FBQXBDLEtBQ0dOLGdCQUFnQixDQUFDSyxNQUFELEVBQVM7QUFBRUUsSUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUUsSUFBQUEsU0FBUyxFQUFFO0FBQXZCLEdBQVQsQ0FEbkIsQ0FGSixFQU1FLG9CQUFDLElBQUQ7QUFBTSxJQUFBLElBQUksRUFBRUYsSUFBWjtBQUFrQixJQUFBLFVBQVUsRUFBRTtBQUE5QixLQUNHSCxRQURILENBTkYsQ0FERjtBQVlELENBckJTLENBRFksQ0FBeEI7QUF5QkFILFdBQVcsQ0FBQ1MsU0FBWiw2RUFJS2hCLE9BQU8sQ0FBQ2dCLFNBSmIsR0FLS2QsUUFBUSxDQUFDYyxTQUxkLEdBTUtiLE1BQU0sQ0FBQ2EsU0FOWixHQU9LZixVQUFVLENBQUNlLFNBUGhCO0FBU0U7OztBQUdBTixFQUFBQSxRQUFRLEVBQUVYLFNBQVMsQ0FBQ2tCLFNBQVYsQ0FBb0IsQ0FBQ2xCLFNBQVMsQ0FBQ21CLE1BQVgsRUFBbUJuQixTQUFTLENBQUNvQixJQUE3QixDQUFwQixDQVpaOztBQWNFOzs7QUFHQVIsRUFBQUEsTUFBTSxFQUFFWixTQUFTLENBQUNxQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsUUFBL0IsQ0FBaEIsQ0FqQlY7O0FBbUJFOzs7O0FBSUFSLEVBQUFBLE9BQU8sRUFBRWIsU0FBUyxDQUFDc0IsSUF2QnJCOztBQXlCRTs7O0FBR0FSLEVBQUFBLElBQUksRUFBRWQsU0FBUyxDQUFDdUI7QUE1QmxCO0FBK0JBLGVBQWVmLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BhY2luZywgZGltZW5zaW9ucywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IGdldEljb25Gb3JJbnRlbnQgfSBmcm9tICcuL2dldEljb25Gb3JJbnRlbnQnXG5cbmNvbnN0IElubGluZUFsZXJ0ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBJbmxpbmVBbGVydChwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpbnRlbnQgPSAnbm9uZScsXG4gICAgICBoYXNJY29uID0gdHJ1ZSxcbiAgICAgIHNpemUgPSA0MDAsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSByZWY9e3JlZn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpc3BsYXk9XCJmbGV4XCIgey4uLnJlc3RQcm9wc30+XG4gICAgICAgIHtoYXNJY29uICYmIChcbiAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiaW5saW5lXCIgbWFyZ2luUmlnaHQ9ezh9PlxuICAgICAgICAgICAge2dldEljb25Gb3JJbnRlbnQoaW50ZW50LCB7IHNpemU6IDE0LCBtYXJnaW5Ub3A6IDIgfSl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICA8VGV4dCBzaXplPXtzaXplfSBmb250V2VpZ2h0PXs1MDB9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfSlcbilcblxuSW5saW5lQWxlcnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYWxlcnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAvKipcbiAgICogVGhlIGludGVudCBvZiB0aGUgYWxlcnQuIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBzZXQgZXhwbGljaXRseS5cbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNob3cgYSBpY29uIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLlxuICAgKiBUaGVyZSBpcyBubyBwb2ludCBub3Qgc2hvd2luZyB0aGlzLlxuICAgKi9cbiAgaGFzSWNvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBUZXh0LlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmxpbmVBbGVydFxuIl19