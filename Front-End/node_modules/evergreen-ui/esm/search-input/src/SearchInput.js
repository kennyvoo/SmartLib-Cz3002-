import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Box, { splitBoxProps } from 'ui-box';
import { SearchIcon } from '../../icons';
import { TextInput } from '../../text-input';
import { useTheme } from '../../theme';
import { StackingOrder } from '../../constants';
var SearchInput = memo(forwardRef(function SearchInput(props, ref) {
  var theme = useTheme();

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      disabled = props.disabled,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      restProps = _objectWithoutProperties(props, ["appearance", "disabled", "height"]);

  var _splitBoxProps = splitBoxProps(restProps),
      matchedProps = _splitBoxProps.matchedProps,
      remainingProps = _splitBoxProps.remainingProps;

  var width = matchedProps.width;
  var iconSize = theme.getIconSizeForInput(height);
  return React.createElement(Box, _extends({
    position: "relative",
    display: "inline-flex",
    height: height,
    ref: ref
  }, matchedProps), React.createElement(Box, {
    height: height,
    width: height,
    pointerEvents: "none",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, React.createElement(SearchIcon, {
    color: "default",
    zIndex: StackingOrder.FOCUSED + 1,
    size: iconSize
  })), React.createElement(TextInput, _extends({
    height: height,
    paddingLeft: height,
    appearance: appearance,
    disabled: disabled,
    width: width,
    type: "search"
  }, remainingProps)));
}));
SearchInput.propTypes = _objectSpread({}, TextInput.propTypes);
export default SearchInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWFyY2gtaW5wdXQvc3JjL1NlYXJjaElucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJCb3giLCJzcGxpdEJveFByb3BzIiwiU2VhcmNoSWNvbiIsIlRleHRJbnB1dCIsInVzZVRoZW1lIiwiU3RhY2tpbmdPcmRlciIsIlNlYXJjaElucHV0IiwicHJvcHMiLCJyZWYiLCJ0aGVtZSIsImFwcGVhcmFuY2UiLCJkaXNhYmxlZCIsImhlaWdodCIsInJlc3RQcm9wcyIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwid2lkdGgiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9ySW5wdXQiLCJGT0NVU0VEIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLE9BQU9DLEdBQVAsSUFBY0MsYUFBZCxRQUFtQyxRQUFuQztBQUNBLFNBQVNDLFVBQVQsUUFBMkIsYUFBM0I7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGlCQUE5QjtBQUVBLElBQU1DLFdBQVcsR0FBR1IsSUFBSSxDQUN0QkMsVUFBVSxDQUFDLFNBQVNPLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMxQyxNQUFNQyxLQUFLLEdBQUdMLFFBQVEsRUFBdEI7O0FBRDBDLDBCQU90Q0csS0FQc0MsQ0FHeENHLFVBSHdDO0FBQUEsTUFHeENBLFVBSHdDLGtDQUczQixTQUgyQjtBQUFBLE1BSXhDQyxRQUp3QyxHQU90Q0osS0FQc0MsQ0FJeENJLFFBSndDO0FBQUEsc0JBT3RDSixLQVBzQyxDQUt4Q0ssTUFMd0M7QUFBQSxNQUt4Q0EsTUFMd0MsOEJBSy9CLEVBTCtCO0FBQUEsTUFNckNDLFNBTnFDLDRCQU90Q04sS0FQc0M7O0FBQUEsdUJBUUROLGFBQWEsQ0FBQ1ksU0FBRCxDQVJaO0FBQUEsTUFRbENDLFlBUmtDLGtCQVFsQ0EsWUFSa0M7QUFBQSxNQVFwQkMsY0FSb0Isa0JBUXBCQSxjQVJvQjs7QUFBQSxNQVNsQ0MsS0FUa0MsR0FTeEJGLFlBVHdCLENBU2xDRSxLQVRrQztBQVUxQyxNQUFNQyxRQUFRLEdBQUdSLEtBQUssQ0FBQ1MsbUJBQU4sQ0FBMEJOLE1BQTFCLENBQWpCO0FBRUEsU0FDRSxvQkFBQyxHQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUMsVUFEWDtBQUVFLElBQUEsT0FBTyxFQUFDLGFBRlY7QUFHRSxJQUFBLE1BQU0sRUFBRUEsTUFIVjtBQUlFLElBQUEsR0FBRyxFQUFFSjtBQUpQLEtBS01NLFlBTE4sR0FPRSxvQkFBQyxHQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUVGLE1BRFY7QUFFRSxJQUFBLEtBQUssRUFBRUEsTUFGVDtBQUdFLElBQUEsYUFBYSxFQUFDLE1BSGhCO0FBSUUsSUFBQSxRQUFRLEVBQUMsVUFKWDtBQUtFLElBQUEsT0FBTyxFQUFDLE1BTFY7QUFNRSxJQUFBLGNBQWMsRUFBQyxRQU5qQjtBQU9FLElBQUEsVUFBVSxFQUFDO0FBUGIsS0FTRSxvQkFBQyxVQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLElBQUEsTUFBTSxFQUFFUCxhQUFhLENBQUNjLE9BQWQsR0FBd0IsQ0FGbEM7QUFHRSxJQUFBLElBQUksRUFBRUY7QUFIUixJQVRGLENBUEYsRUFzQkUsb0JBQUMsU0FBRDtBQUNFLElBQUEsTUFBTSxFQUFFTCxNQURWO0FBRUUsSUFBQSxXQUFXLEVBQUVBLE1BRmY7QUFHRSxJQUFBLFVBQVUsRUFBRUYsVUFIZDtBQUlFLElBQUEsUUFBUSxFQUFFQyxRQUpaO0FBS0UsSUFBQSxLQUFLLEVBQUVLLEtBTFQ7QUFNRSxJQUFBLElBQUksRUFBQztBQU5QLEtBT01ELGNBUE4sRUF0QkYsQ0FERjtBQWtDRCxDQTlDUyxDQURZLENBQXhCO0FBa0RBVCxXQUFXLENBQUNjLFNBQVoscUJBSUtqQixTQUFTLENBQUNpQixTQUpmO0FBT0EsZUFBZWQsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94LCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi90ZXh0LWlucHV0J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmNvbnN0IFNlYXJjaElucHV0ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBTZWFyY2hJbnB1dChwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3Qge1xuICAgICAgYXBwZWFyYW5jZSA9ICdkZWZhdWx0JyxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVpZ2h0ID0gMzIsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocmVzdFByb3BzKVxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG1hdGNoZWRQcm9wc1xuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JJbnB1dChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ubWF0Y2hlZFByb3BzfVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2hJY29uXG4gICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgekluZGV4PXtTdGFja2luZ09yZGVyLkZPQ1VTRUQgKyAxfVxuICAgICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBwYWRkaW5nTGVmdD17aGVpZ2h0fVxuICAgICAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICB7Li4ucmVtYWluaW5nUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cblNlYXJjaElucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUZXh0SW5wdXQgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGV4dElucHV0LnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dFxuIl19