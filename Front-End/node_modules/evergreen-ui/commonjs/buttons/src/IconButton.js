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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _theme = require("../../theme");

var _IconWrapper = require("../../icons/src/IconWrapper");

var _Button = _interopRequireDefault(require("./Button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var IconButton = (0, _react.memo)((0, _react.forwardRef)(function IconButton(props, ref) {
  var theme = (0, _theme.useTheme)();
  var icon = props.icon,
      iconSize = props.iconSize,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["icon", "iconSize", "height", "intent"]);
  return _react["default"].createElement(_Button["default"], (0, _extends2["default"])({
    ref: ref,
    intent: intent,
    height: height,
    width: height,
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
    justifyContent: "center"
  }, restProps), _react["default"].createElement(_IconWrapper.IconWrapper, {
    icon: icon,
    color: intent === 'none' ? 'default' : 'currentColor',
    size: iconSize || theme.getIconSizeForIconButton(height)
  }));
}));
IconButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * The Evergreen icon or custom icon to render
   */
  icon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: _propTypes["default"].number,

  /**
   * The intent of the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal', 'primary']),

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes["default"].bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = IconButton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9JY29uQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkljb25CdXR0b24iLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiaWNvbiIsImljb25TaXplIiwiaGVpZ2h0IiwiaW50ZW50IiwicmVzdFByb3BzIiwiZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uIiwicHJvcFR5cGVzIiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCIsIm51bWJlciIsIm9uZU9mIiwiYXBwZWFyYW5jZSIsImlzQWN0aXZlIiwiYm9vbCIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsaUJBQ2pCLHVCQUFXLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxHQUEzQixFQUFnQztBQUN6QyxNQUFNQyxLQUFLLEdBQUcsc0JBQWQ7QUFEeUMsTUFFakNDLElBRmlDLEdBRThCSCxLQUY5QixDQUVqQ0csSUFGaUM7QUFBQSxNQUUzQkMsUUFGMkIsR0FFOEJKLEtBRjlCLENBRTNCSSxRQUYyQjtBQUFBLHNCQUU4QkosS0FGOUIsQ0FFakJLLE1BRmlCO0FBQUEsTUFFakJBLE1BRmlCLDhCQUVSLEVBRlE7QUFBQSxzQkFFOEJMLEtBRjlCLENBRUpNLE1BRkk7QUFBQSxNQUVKQSxNQUZJLDhCQUVLLE1BRkw7QUFBQSxNQUVnQkMsU0FGaEIsNkNBRThCUCxLQUY5QjtBQUl6QyxTQUNFLGdDQUFDLGtCQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUVDLEdBRFA7QUFFRSxJQUFBLE1BQU0sRUFBRUssTUFGVjtBQUdFLElBQUEsTUFBTSxFQUFFRCxNQUhWO0FBSUUsSUFBQSxLQUFLLEVBQUVBLE1BSlQ7QUFLRSxJQUFBLFdBQVcsRUFBRSxDQUxmO0FBTUUsSUFBQSxZQUFZLEVBQUUsQ0FOaEI7QUFPRSxJQUFBLE9BQU8sRUFBQyxNQVBWO0FBUUUsSUFBQSxjQUFjLEVBQUM7QUFSakIsS0FTTUUsU0FUTixHQVdFLGdDQUFDLHdCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVKLElBRFI7QUFFRSxJQUFBLEtBQUssRUFBRUcsTUFBTSxLQUFLLE1BQVgsR0FBb0IsU0FBcEIsR0FBZ0MsY0FGekM7QUFHRSxJQUFBLElBQUksRUFBRUYsUUFBUSxJQUFJRixLQUFLLENBQUNNLHdCQUFOLENBQStCSCxNQUEvQjtBQUhwQixJQVhGLENBREY7QUFtQkQsQ0F2QkQsQ0FEaUIsQ0FBbkI7QUEyQkFOLFVBQVUsQ0FBQ1UsU0FBWCw2RUFJS0Msa0JBQVdELFNBSmhCLEdBU0tFLGVBQVFGLFNBVGIsR0FjS0csZ0JBQVNILFNBZGQsR0FtQktJLGNBQU9KLFNBbkJaO0FBcUJFOzs7QUFHQU4sRUFBQUEsSUFBSSxFQUFFVyxzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUUsV0FBWCxFQUF3QkYsc0JBQVVHLE9BQWxDLENBQXBCLENBeEJSOztBQTBCRTs7O0FBR0FiLEVBQUFBLFFBQVEsRUFBRVUsc0JBQVVJLE1BN0J0Qjs7QUErQkU7OztBQUdBWixFQUFBQSxNQUFNLEVBQUVRLHNCQUFVSyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsUUFBL0IsQ0FBaEIsQ0FsQ1Y7O0FBb0NFOzs7QUFHQUMsRUFBQUEsVUFBVSxFQUFFTixzQkFBVUssS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBQWhCLENBdkNkOztBQXlDRTs7OztBQUlBRSxFQUFBQSxRQUFRLEVBQUVQLHNCQUFVUSxJQTdDdEI7O0FBK0NFOzs7O0FBSUFDLEVBQUFBLFFBQVEsRUFBRVQsc0JBQVVRLElBbkR0Qjs7QUFxREU7Ozs7QUFJQUUsRUFBQUEsU0FBUyxFQUFFVixzQkFBVVc7QUF6RHZCO2VBNERlMUIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IEljb25XcmFwcGVyIH0gZnJvbSAnLi4vLi4vaWNvbnMvc3JjL0ljb25XcmFwcGVyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuY29uc3QgSWNvbkJ1dHRvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gSWNvbkJ1dHRvbihwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3QgeyBpY29uLCBpY29uU2l6ZSwgaGVpZ2h0ID0gMzIsIGludGVudCA9ICdub25lJywgLi4ucmVzdFByb3BzIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgIHBhZGRpbmdSaWdodD17MH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJY29uV3JhcHBlclxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgY29sb3I9e2ludGVudCA9PT0gJ25vbmUnID8gJ2RlZmF1bHQnIDogJ2N1cnJlbnRDb2xvcid9XG4gICAgICAgICAgc2l6ZT17aWNvblNpemUgfHwgdGhlbWUuZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uKGhlaWdodCl9XG4gICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG4gIH0pXG4pXG5cbkljb25CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICovXG4gIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICovXG4gIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFRoZSBFdmVyZ3JlZW4gaWNvbiBvciBjdXN0b20gaWNvbiB0byByZW5kZXJcbiAgICovXG4gIGljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50VHlwZSwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGFuIGV4cGxpY2l0IGljb24gc2l6ZSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAqL1xuICBpY29uU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIGludGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSksXG5cbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gICAqL1xuICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ21pbmltYWwnLCAncHJpbWFyeSddKSxcblxuICAvKipcbiAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICogVXNlZnVsIGluIGNvbmp1Y3Rpb24gd2l0aCBhIFBvcG92ZXIuXG4gICAqL1xuICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbkJ1dHRvblxuIl19