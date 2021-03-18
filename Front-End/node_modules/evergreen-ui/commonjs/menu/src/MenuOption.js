"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _icons = require("../../icons");

var _theme = require("../../theme");

var noop = function noop() {};

var MenuOption = (0, _react.memo)(function MenuOption(props) {
  var id = props.id,
      children = props.children,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      secondaryText = props.secondaryText,
      _props$isSelected = props.isSelected,
      isSelected = _props$isSelected === void 0 ? false : _props$isSelected;
  var handleClick = (0, _react.useCallback)(function (e) {
    return onSelect(e);
  }, [onSelect]);
  var handleKeyPress = (0, _react.useCallback)(function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelect(e);
      e.preventDefault();
    }
  }, [onSelect]);
  var theme = (0, _theme.useTheme)();
  var themedClassName = theme.getMenuItemClassName(appearance, 'none');
  var textProps = isSelected ? {
    color: 'selected',
    fontWeight: 500,
    marginLeft: 16
  } : {
    marginLeft: 44
  };
  return _react["default"].createElement(_layers.Pane, {
    id: id,
    role: "menuitemradio",
    tabIndex: 0,
    className: themedClassName,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    "data-isselectable": "true",
    "aria-checked": isSelected,
    height: 40,
    display: "flex",
    alignItems: "center"
  }, isSelected && _react["default"].createElement(_icons.TickIcon, {
    "aria-hidden": true,
    color: "selected",
    marginLeft: 16,
    marginRight: -4,
    size: 16,
    flexShrink: 0
  }), _react["default"].createElement(_typography.Text, (0, _extends2["default"])({}, textProps, {
    marginRight: 16,
    flex: 1
  }), children), secondaryText && _react["default"].createElement(_typography.Text, {
    marginRight: 16,
    color: "muted"
  }, secondaryText));
});
MenuOption.propTypes = {
  /**
   * The id attribute of the menu option.
   */
  id: _propTypes["default"].string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * The icon before the label.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * The children of the component.
   */
  children: _propTypes["default"].node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: _propTypes["default"].node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: _propTypes["default"].string
};
var _default = MenuOption;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51T3B0aW9uLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJNZW51T3B0aW9uIiwicHJvcHMiLCJpZCIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsIm9uU2VsZWN0Iiwic2Vjb25kYXJ5VGV4dCIsImlzU2VsZWN0ZWQiLCJoYW5kbGVDbGljayIsImUiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwidGhlbWUiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRNZW51SXRlbUNsYXNzTmFtZSIsInRleHRQcm9wcyIsImNvbG9yIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLGlCQUFLLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUEsTUFFL0NDLEVBRitDLEdBUTdDRCxLQVI2QyxDQUUvQ0MsRUFGK0M7QUFBQSxNQUcvQ0MsUUFIK0MsR0FRN0NGLEtBUjZDLENBRy9DRSxRQUgrQztBQUFBLDBCQVE3Q0YsS0FSNkMsQ0FJL0NHLFVBSitDO0FBQUEsTUFJL0NBLFVBSitDLGtDQUlsQyxTQUprQztBQUFBLHdCQVE3Q0gsS0FSNkMsQ0FLL0NJLFFBTCtDO0FBQUEsTUFLL0NBLFFBTCtDLGdDQUtwQ04sSUFMb0M7QUFBQSxNQU0vQ08sYUFOK0MsR0FRN0NMLEtBUjZDLENBTS9DSyxhQU4rQztBQUFBLDBCQVE3Q0wsS0FSNkMsQ0FPL0NNLFVBUCtDO0FBQUEsTUFPL0NBLFVBUCtDLGtDQU9sQyxLQVBrQztBQVVqRCxNQUFNQyxXQUFXLEdBQUcsd0JBQVksVUFBQUMsQ0FBQztBQUFBLFdBQUlKLFFBQVEsQ0FBQ0ksQ0FBRCxDQUFaO0FBQUEsR0FBYixFQUE4QixDQUFDSixRQUFELENBQTlCLENBQXBCO0FBRUEsTUFBTUssY0FBYyxHQUFHLHdCQUNyQixVQUFBRCxDQUFDLEVBQUk7QUFDSCxRQUFJQSxDQUFDLENBQUNFLEdBQUYsS0FBVSxPQUFWLElBQXFCRixDQUFDLENBQUNFLEdBQUYsS0FBVSxHQUFuQyxFQUF3QztBQUN0Q04sTUFBQUEsUUFBUSxDQUFDSSxDQUFELENBQVI7QUFDQUEsTUFBQUEsQ0FBQyxDQUFDRyxjQUFGO0FBQ0Q7QUFDRixHQU5vQixFQU9yQixDQUFDUCxRQUFELENBUHFCLENBQXZCO0FBVUEsTUFBTVEsS0FBSyxHQUFHLHNCQUFkO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRCxLQUFLLENBQUNFLG9CQUFOLENBQTJCWCxVQUEzQixFQUF1QyxNQUF2QyxDQUF4QjtBQUVBLE1BQU1ZLFNBQVMsR0FBR1QsVUFBVSxHQUN4QjtBQUNFVSxJQUFBQSxLQUFLLEVBQUUsVUFEVDtBQUVFQyxJQUFBQSxVQUFVLEVBQUUsR0FGZDtBQUdFQyxJQUFBQSxVQUFVLEVBQUU7QUFIZCxHQUR3QixHQU14QjtBQUFFQSxJQUFBQSxVQUFVLEVBQUU7QUFBZCxHQU5KO0FBUUEsU0FDRSxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUVqQixFQUROO0FBRUUsSUFBQSxJQUFJLEVBQUMsZUFGUDtBQUdFLElBQUEsUUFBUSxFQUFFLENBSFo7QUFJRSxJQUFBLFNBQVMsRUFBRVksZUFKYjtBQUtFLElBQUEsT0FBTyxFQUFFTixXQUxYO0FBTUUsSUFBQSxVQUFVLEVBQUVFLGNBTmQ7QUFPRSx5QkFBa0IsTUFQcEI7QUFRRSxvQkFBY0gsVUFSaEI7QUFTRSxJQUFBLE1BQU0sRUFBRSxFQVRWO0FBVUUsSUFBQSxPQUFPLEVBQUMsTUFWVjtBQVdFLElBQUEsVUFBVSxFQUFDO0FBWGIsS0FhR0EsVUFBVSxJQUNULGdDQUFDLGVBQUQ7QUFDRSx1QkFERjtBQUVFLElBQUEsS0FBSyxFQUFDLFVBRlI7QUFHRSxJQUFBLFVBQVUsRUFBRSxFQUhkO0FBSUUsSUFBQSxXQUFXLEVBQUUsQ0FBQyxDQUpoQjtBQUtFLElBQUEsSUFBSSxFQUFFLEVBTFI7QUFNRSxJQUFBLFVBQVUsRUFBRTtBQU5kLElBZEosRUF1QkUsZ0NBQUMsZ0JBQUQsZ0NBQVVTLFNBQVY7QUFBcUIsSUFBQSxXQUFXLEVBQUUsRUFBbEM7QUFBc0MsSUFBQSxJQUFJLEVBQUU7QUFBNUMsTUFDR2IsUUFESCxDQXZCRixFQTBCR0csYUFBYSxJQUNaLGdDQUFDLGdCQUFEO0FBQU0sSUFBQSxXQUFXLEVBQUUsRUFBbkI7QUFBdUIsSUFBQSxLQUFLLEVBQUM7QUFBN0IsS0FDR0EsYUFESCxDQTNCSixDQURGO0FBa0NELENBbkVrQixDQUFuQjtBQXFFQU4sVUFBVSxDQUFDb0IsU0FBWCxHQUF1QjtBQUNyQjs7O0FBR0FsQixFQUFBQSxFQUFFLEVBQUVtQixzQkFBVUMsTUFKTzs7QUFNckI7OztBQUdBakIsRUFBQUEsUUFBUSxFQUFFZ0Isc0JBQVVFLElBVEM7O0FBV3JCOzs7QUFHQWhCLEVBQUFBLFVBQVUsRUFBRWMsc0JBQVVHLElBZEQ7O0FBZ0JyQjs7O0FBR0FyQixFQUFBQSxRQUFRLEVBQUVrQixzQkFBVUksSUFuQkM7O0FBcUJyQjs7O0FBR0FuQixFQUFBQSxhQUFhLEVBQUVlLHNCQUFVSSxJQXhCSjs7QUEwQnJCOzs7QUFHQXJCLEVBQUFBLFVBQVUsRUFBRWlCLHNCQUFVQztBQTdCRCxDQUF2QjtlQWdDZXRCLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IFRpY2tJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgTWVudU9wdGlvbiA9IG1lbW8oZnVuY3Rpb24gTWVudU9wdGlvbihwcm9wcykge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgY2hpbGRyZW4sXG4gICAgYXBwZWFyYW5jZSA9ICdkZWZhdWx0JyxcbiAgICBvblNlbGVjdCA9IG5vb3AsXG4gICAgc2Vjb25kYXJ5VGV4dCxcbiAgICBpc1NlbGVjdGVkID0gZmFsc2VcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhlID0+IG9uU2VsZWN0KGUpLCBbb25TZWxlY3RdKVxuXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gdXNlQ2FsbGJhY2soXG4gICAgZSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcgJykge1xuICAgICAgICBvblNlbGVjdChlKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvblNlbGVjdF1cbiAgKVxuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRNZW51SXRlbUNsYXNzTmFtZShhcHBlYXJhbmNlLCAnbm9uZScpXG5cbiAgY29uc3QgdGV4dFByb3BzID0gaXNTZWxlY3RlZFxuICAgID8ge1xuICAgICAgICBjb2xvcjogJ3NlbGVjdGVkJyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBtYXJnaW5MZWZ0OiAxNlxuICAgICAgfVxuICAgIDogeyBtYXJnaW5MZWZ0OiA0NCB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZVxuICAgICAgaWQ9e2lkfVxuICAgICAgcm9sZT1cIm1lbnVpdGVtcmFkaW9cIlxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XG4gICAgICBkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIlxuICAgICAgYXJpYS1jaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIHtpc1NlbGVjdGVkICYmIChcbiAgICAgICAgPFRpY2tJY29uXG4gICAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgICBjb2xvcj1cInNlbGVjdGVkXCJcbiAgICAgICAgICBtYXJnaW5MZWZ0PXsxNn1cbiAgICAgICAgICBtYXJnaW5SaWdodD17LTR9XG4gICAgICAgICAgc2l6ZT17MTZ9XG4gICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8VGV4dCB7Li4udGV4dFByb3BzfSBtYXJnaW5SaWdodD17MTZ9IGZsZXg9ezF9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RleHQ+XG4gICAgICB7c2Vjb25kYXJ5VGV4dCAmJiAoXG4gICAgICAgIDxUZXh0IG1hcmdpblJpZ2h0PXsxNn0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgIHtzZWNvbmRhcnlUZXh0fVxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuICAgIDwvUGFuZT5cbiAgKVxufSlcblxuTWVudU9wdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBtZW51IG9wdGlvbi5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAqL1xuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIGJlZm9yZSB0aGUgbGFiZWwuXG4gICAqL1xuICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFNlY29uZGFyeSB0ZXh0IHNob3duIG9uIHRoZSByaWdodC5cbiAgICovXG4gIHNlY29uZGFyeVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IHN1cHBvcnRzIG9uZSBkZWZhdWx0IGFwcGVhcmFuY2UuXG4gICAqL1xuICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVPcHRpb25cbiJdfQ==