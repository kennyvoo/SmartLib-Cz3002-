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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _icons = require("../../icons");

var _textInput = require("../../text-input");

var _theme = require("../../theme");

var _constants = require("../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SearchInput = (0, _react.memo)((0, _react.forwardRef)(function SearchInput(props, ref) {
  var theme = (0, _theme.useTheme)();
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      disabled = props.disabled,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["appearance", "disabled", "height"]);

  var _splitBoxProps = (0, _uiBox.splitBoxProps)(restProps),
      matchedProps = _splitBoxProps.matchedProps,
      remainingProps = _splitBoxProps.remainingProps;

  var width = matchedProps.width;
  var iconSize = theme.getIconSizeForInput(height);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    position: "relative",
    display: "inline-flex",
    height: height,
    ref: ref
  }, matchedProps), _react["default"].createElement(_uiBox["default"], {
    height: height,
    width: height,
    pointerEvents: "none",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, _react["default"].createElement(_icons.SearchIcon, {
    color: "default",
    zIndex: _constants.StackingOrder.FOCUSED + 1,
    size: iconSize
  })), _react["default"].createElement(_textInput.TextInput, (0, _extends2["default"])({
    height: height,
    paddingLeft: height,
    appearance: appearance,
    disabled: disabled,
    width: width,
    type: "search"
  }, remainingProps)));
}));
SearchInput.propTypes = _objectSpread({}, _textInput.TextInput.propTypes);
var _default = SearchInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWFyY2gtaW5wdXQvc3JjL1NlYXJjaElucHV0LmpzIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0IiwicHJvcHMiLCJyZWYiLCJ0aGVtZSIsImFwcGVhcmFuY2UiLCJkaXNhYmxlZCIsImhlaWdodCIsInJlc3RQcm9wcyIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwid2lkdGgiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9ySW5wdXQiLCJTdGFja2luZ09yZGVyIiwiRk9DVVNFRCIsInByb3BUeXBlcyIsIlRleHRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLGlCQUNsQix1QkFBVyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDMUMsTUFBTUMsS0FBSyxHQUFHLHNCQUFkO0FBRDBDLDBCQU90Q0YsS0FQc0MsQ0FHeENHLFVBSHdDO0FBQUEsTUFHeENBLFVBSHdDLGtDQUczQixTQUgyQjtBQUFBLE1BSXhDQyxRQUp3QyxHQU90Q0osS0FQc0MsQ0FJeENJLFFBSndDO0FBQUEsc0JBT3RDSixLQVBzQyxDQUt4Q0ssTUFMd0M7QUFBQSxNQUt4Q0EsTUFMd0MsOEJBSy9CLEVBTCtCO0FBQUEsTUFNckNDLFNBTnFDLDZDQU90Q04sS0FQc0M7O0FBQUEsdUJBUUQsMEJBQWNNLFNBQWQsQ0FSQztBQUFBLE1BUWxDQyxZQVJrQyxrQkFRbENBLFlBUmtDO0FBQUEsTUFRcEJDLGNBUm9CLGtCQVFwQkEsY0FSb0I7O0FBQUEsTUFTbENDLEtBVGtDLEdBU3hCRixZQVR3QixDQVNsQ0UsS0FUa0M7QUFVMUMsTUFBTUMsUUFBUSxHQUFHUixLQUFLLENBQUNTLG1CQUFOLENBQTBCTixNQUExQixDQUFqQjtBQUVBLFNBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBQyxVQURYO0FBRUUsSUFBQSxPQUFPLEVBQUMsYUFGVjtBQUdFLElBQUEsTUFBTSxFQUFFQSxNQUhWO0FBSUUsSUFBQSxHQUFHLEVBQUVKO0FBSlAsS0FLTU0sWUFMTixHQU9FLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUVGLE1BRFY7QUFFRSxJQUFBLEtBQUssRUFBRUEsTUFGVDtBQUdFLElBQUEsYUFBYSxFQUFDLE1BSGhCO0FBSUUsSUFBQSxRQUFRLEVBQUMsVUFKWDtBQUtFLElBQUEsT0FBTyxFQUFDLE1BTFY7QUFNRSxJQUFBLGNBQWMsRUFBQyxRQU5qQjtBQU9FLElBQUEsVUFBVSxFQUFDO0FBUGIsS0FTRSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxJQUFBLE1BQU0sRUFBRU8seUJBQWNDLE9BQWQsR0FBd0IsQ0FGbEM7QUFHRSxJQUFBLElBQUksRUFBRUg7QUFIUixJQVRGLENBUEYsRUFzQkUsZ0NBQUMsb0JBQUQ7QUFDRSxJQUFBLE1BQU0sRUFBRUwsTUFEVjtBQUVFLElBQUEsV0FBVyxFQUFFQSxNQUZmO0FBR0UsSUFBQSxVQUFVLEVBQUVGLFVBSGQ7QUFJRSxJQUFBLFFBQVEsRUFBRUMsUUFKWjtBQUtFLElBQUEsS0FBSyxFQUFFSyxLQUxUO0FBTUUsSUFBQSxJQUFJLEVBQUM7QUFOUCxLQU9NRCxjQVBOLEVBdEJGLENBREY7QUFrQ0QsQ0E5Q0QsQ0FEa0IsQ0FBcEI7QUFrREFULFdBQVcsQ0FBQ2UsU0FBWixxQkFJS0MscUJBQVVELFNBSmY7ZUFPZWYsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94LCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi90ZXh0LWlucHV0J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmNvbnN0IFNlYXJjaElucHV0ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBTZWFyY2hJbnB1dChwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3Qge1xuICAgICAgYXBwZWFyYW5jZSA9ICdkZWZhdWx0JyxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVpZ2h0ID0gMzIsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocmVzdFByb3BzKVxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG1hdGNoZWRQcm9wc1xuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JJbnB1dChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ubWF0Y2hlZFByb3BzfVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2hJY29uXG4gICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgekluZGV4PXtTdGFja2luZ09yZGVyLkZPQ1VTRUQgKyAxfVxuICAgICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBwYWRkaW5nTGVmdD17aGVpZ2h0fVxuICAgICAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICB7Li4ucmVtYWluaW5nUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cblNlYXJjaElucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUZXh0SW5wdXQgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGV4dElucHV0LnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dFxuIl19