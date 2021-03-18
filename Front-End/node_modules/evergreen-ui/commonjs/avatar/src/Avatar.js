"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _image = require("../../image");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _getInitials = _interopRequireDefault(require("./utils/getInitials"));

var _hash = _interopRequireDefault(require("./utils/hash"));

var isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style;
var initialsStyleClass = (0, _glamor.css)({
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1
}).toString();

function getColorProps(_ref) {
  var isSolid = _ref.isSolid,
      theme = _ref.theme,
      color = _ref.color,
      name = _ref.name,
      propsHashValue = _ref.propsHashValue;

  if (color === 'automatic') {
    var hashValue = (0, _hash["default"])(propsHashValue || name);
    return theme.getAvatarProps({
      isSolid: isSolid,
      color: color,
      hashValue: hashValue
    });
  }

  return theme.getAvatarProps({
    isSolid: isSolid,
    color: color
  });
}

var Avatar = (0, _react.memo)((0, _react.forwardRef)(function Avatar(props, ref) {
  var src = props.src,
      name = props.name,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      _props$isSolid = props.isSolid,
      isSolid = _props$isSolid === void 0 ? false : _props$isSolid,
      _props$color = props.color,
      color = _props$color === void 0 ? 'automatic' : _props$color,
      _props$forceShowIniti = props.forceShowInitials,
      forceShowInitials = _props$forceShowIniti === void 0 ? false : _props$forceShowIniti,
      _props$sizeLimitOneCh = props.sizeLimitOneCharacter,
      sizeLimitOneCharacter = _props$sizeLimitOneCh === void 0 ? 20 : _props$sizeLimitOneCh,
      _props$getInitials = props.getInitials,
      getInitials = _props$getInitials === void 0 ? _getInitials["default"] : _props$getInitials,
      propsHashValue = props.hashValue,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["src", "name", "size", "isSolid", "color", "forceShowInitials", "sizeLimitOneCharacter", "getInitials", "hashValue"]);
  var theme = (0, _theme.useTheme)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      imageHasFailedLoading = _useState2[0],
      setImageHasFailedLoading = _useState2[1];

  var imageUnavailable = !src || imageHasFailedLoading;
  var colorProps = getColorProps({
    isSolid: isSolid,
    theme: theme,
    color: color,
    name: name,
    propsHashValue: propsHashValue
  });
  var initialsFontSize = "".concat(theme.getAvatarInitialsFontSize(size, sizeLimitOneCharacter), "px");
  var initials = getInitials(name);

  if (size <= sizeLimitOneCharacter) {
    initials = initials.substring(0, 1);
  }

  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    width: size,
    height: size,
    overflow: "hidden",
    borderRadius: 9999,
    position: "relative",
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    backgroundColor: colorProps.backgroundColor,
    title: name,
    ref: ref
  }, restProps), (imageUnavailable || forceShowInitials) && _react["default"].createElement(_typography.Text, {
    className: initialsStyleClass,
    fontSize: initialsFontSize,
    lineHeight: initialsFontSize,
    width: size,
    height: size,
    color: colorProps.color
  }, initials), !imageUnavailable && _react["default"].createElement(_image.Image, {
    style: {
      objectFit: 'cover'
    } // Unsupported by ui-box directly
    ,
    width: isObjectFitSupported ? '100%' : 'auto' // Fallback to old behaviour on IE
    ,
    height: "100%",
    src: src,
    onError: function onError() {
      return setImageHasFailedLoading(true);
    }
  }));
}));
Avatar.propTypes = {
  /**
   * The src attribute of the image.
   * When it's not available, render initials instead.
   */
  src: _propTypes["default"].string,

  /**
   * The size of the avatar.
   */
  size: _propTypes["default"].number,

  /**
   * The name used for the initials and title attribute.
   */
  name: _propTypes["default"].string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: _propTypes["default"].string,

  /**
   * When true, render a solid avatar.
   */
  isSolid: _propTypes["default"].bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: _propTypes["default"].string,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: _propTypes["default"].func,

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials: _propTypes["default"].bool,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: _propTypes["default"].number
};
var _default = Avatar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmF0YXIvc3JjL0F2YXRhci5qcyJdLCJuYW1lcyI6WyJpc09iamVjdEZpdFN1cHBvcnRlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJpbml0aWFsc1N0eWxlQ2xhc3MiLCJ0b3AiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidG9TdHJpbmciLCJnZXRDb2xvclByb3BzIiwiaXNTb2xpZCIsInRoZW1lIiwiY29sb3IiLCJuYW1lIiwicHJvcHNIYXNoVmFsdWUiLCJoYXNoVmFsdWUiLCJnZXRBdmF0YXJQcm9wcyIsIkF2YXRhciIsInByb3BzIiwicmVmIiwic3JjIiwic2l6ZSIsImZvcmNlU2hvd0luaXRpYWxzIiwic2l6ZUxpbWl0T25lQ2hhcmFjdGVyIiwiZ2V0SW5pdGlhbHMiLCJnbG9iYWxHZXRJbml0aWFscyIsInJlc3RQcm9wcyIsImltYWdlSGFzRmFpbGVkTG9hZGluZyIsInNldEltYWdlSGFzRmFpbGVkTG9hZGluZyIsImltYWdlVW5hdmFpbGFibGUiLCJjb2xvclByb3BzIiwiaW5pdGlhbHNGb250U2l6ZSIsImdldEF2YXRhckluaXRpYWxzRm9udFNpemUiLCJpbml0aWFscyIsInN1YnN0cmluZyIsImJhY2tncm91bmRDb2xvciIsIm9iamVjdEZpdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUN4QixPQUFPQyxRQUFQLEtBQW9CLFdBQXBCLElBQ0EsZUFBZUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxLQUYxQztBQUlBLElBQU1DLGtCQUFrQixHQUFHLGlCQUFJO0FBQzdCQyxF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YUFBTVEsd0JBQXdCLENBQUMsSUFBRCxDQUE5QjtBQUFBO0FBTFgsSUEzQkosQ0FERjtBQXNDRCxDQXhFRCxDQURhLENBQWY7QUE0RUFYLE1BQU0sQ0FBQ29CLFNBQVAsR0FBbUI7QUFDakI7Ozs7QUFJQWpCLEVBQUFBLEdBQUcsRUFBRWtCLHNCQUFVQyxNQUxFOztBQU9qQjs7O0FBR0FsQixFQUFBQSxJQUFJLEVBQUVpQixzQkFBVUUsTUFWQzs7QUFZakI7OztBQUdBM0IsRUFBQUEsSUFBSSxFQUFFeUIsc0JBQVVDLE1BZkM7O0FBaUJqQjs7Ozs7QUFLQXhCLEVBQUFBLFNBQVMsRUFBRXVCLHNCQUFVQyxNQXRCSjs7QUF3QmpCOzs7QUFHQTdCLEVBQUFBLE9BQU8sRUFBRTRCLHNCQUFVRyxJQTNCRjs7QUE2QmpCOzs7O0FBSUE3QixFQUFBQSxLQUFLLEVBQUUwQixzQkFBVUMsTUFqQ0E7O0FBbUNqQjs7O0FBR0FmLEVBQUFBLFdBQVcsRUFBRWMsc0JBQVVJLElBdENOOztBQXdDakI7Ozs7QUFJQXBCLEVBQUFBLGlCQUFpQixFQUFFZ0Isc0JBQVVHLElBNUNaOztBQThDakI7OztBQUdBbEIsRUFBQUEscUJBQXFCLEVBQUVlLHNCQUFVRTtBQWpEaEIsQ0FBbkI7ZUFvRGV2QixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vaW1hZ2UnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgZ2xvYmFsR2V0SW5pdGlhbHMgZnJvbSAnLi91dGlscy9nZXRJbml0aWFscydcbmltcG9ydCBnbG9iYWxIYXNoIGZyb20gJy4vdXRpbHMvaGFzaCdcblxuY29uc3QgaXNPYmplY3RGaXRTdXBwb3J0ZWQgPVxuICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICdvYmplY3RGaXQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVxuXG5jb25zdCBpbml0aWFsc1N0eWxlQ2xhc3MgPSBjc3Moe1xuICB0b3A6IDAsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGxpbmVIZWlnaHQ6IDFcbn0pLnRvU3RyaW5nKClcblxuZnVuY3Rpb24gZ2V0Q29sb3JQcm9wcyh7IGlzU29saWQsIHRoZW1lLCBjb2xvciwgbmFtZSwgcHJvcHNIYXNoVmFsdWUgfSkge1xuICBpZiAoY29sb3IgPT09ICdhdXRvbWF0aWMnKSB7XG4gICAgY29uc3QgaGFzaFZhbHVlID0gZ2xvYmFsSGFzaChwcm9wc0hhc2hWYWx1ZSB8fCBuYW1lKVxuICAgIHJldHVybiB0aGVtZS5nZXRBdmF0YXJQcm9wcyh7IGlzU29saWQsIGNvbG9yLCBoYXNoVmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiB0aGVtZS5nZXRBdmF0YXJQcm9wcyh7IGlzU29saWQsIGNvbG9yIH0pXG59XG5cbmNvbnN0IEF2YXRhciA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gQXZhdGFyKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBzcmMsXG4gICAgICBuYW1lLFxuICAgICAgc2l6ZSA9IDI0LFxuICAgICAgaXNTb2xpZCA9IGZhbHNlLFxuICAgICAgY29sb3IgPSAnYXV0b21hdGljJyxcbiAgICAgIGZvcmNlU2hvd0luaXRpYWxzID0gZmFsc2UsXG4gICAgICBzaXplTGltaXRPbmVDaGFyYWN0ZXIgPSAyMCxcbiAgICAgIGdldEluaXRpYWxzID0gZ2xvYmFsR2V0SW5pdGlhbHMsXG4gICAgICBoYXNoVmFsdWU6IHByb3BzSGFzaFZhbHVlLFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCBbaW1hZ2VIYXNGYWlsZWRMb2FkaW5nLCBzZXRJbWFnZUhhc0ZhaWxlZExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgaW1hZ2VVbmF2YWlsYWJsZSA9ICFzcmMgfHwgaW1hZ2VIYXNGYWlsZWRMb2FkaW5nXG4gICAgY29uc3QgY29sb3JQcm9wcyA9IGdldENvbG9yUHJvcHMoe1xuICAgICAgaXNTb2xpZCxcbiAgICAgIHRoZW1lLFxuICAgICAgY29sb3IsXG4gICAgICBuYW1lLFxuICAgICAgcHJvcHNIYXNoVmFsdWVcbiAgICB9KVxuICAgIGNvbnN0IGluaXRpYWxzRm9udFNpemUgPSBgJHt0aGVtZS5nZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplKFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemVMaW1pdE9uZUNoYXJhY3RlclxuICAgICl9cHhgXG5cbiAgICBsZXQgaW5pdGlhbHMgPSBnZXRJbml0aWFscyhuYW1lKVxuICAgIGlmIChzaXplIDw9IHNpemVMaW1pdE9uZUNoYXJhY3Rlcikge1xuICAgICAgaW5pdGlhbHMgPSBpbml0aWFscy5zdWJzdHJpbmcoMCwgMSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIGJvcmRlclJhZGl1cz17OTk5OX1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPXtjb2xvclByb3BzLmJhY2tncm91bmRDb2xvcn1cbiAgICAgICAgdGl0bGU9e25hbWV9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgPlxuICAgICAgICB7KGltYWdlVW5hdmFpbGFibGUgfHwgZm9yY2VTaG93SW5pdGlhbHMpICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbml0aWFsc1N0eWxlQ2xhc3N9XG4gICAgICAgICAgICBmb250U2l6ZT17aW5pdGlhbHNGb250U2l6ZX1cbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9e2luaXRpYWxzRm9udFNpemV9XG4gICAgICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvclByb3BzLmNvbG9yfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbml0aWFsc31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHshaW1hZ2VVbmF2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicgfX0gLy8gVW5zdXBwb3J0ZWQgYnkgdWktYm94IGRpcmVjdGx5XG4gICAgICAgICAgICB3aWR0aD17aXNPYmplY3RGaXRTdXBwb3J0ZWQgPyAnMTAwJScgOiAnYXV0byd9IC8vIEZhbGxiYWNrIHRvIG9sZCBiZWhhdmlvdXIgb24gSUVcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBvbkVycm9yPXsoKSA9PiBzZXRJbWFnZUhhc0ZhaWxlZExvYWRpbmcodHJ1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBzcmMgYXR0cmlidXRlIG9mIHRoZSBpbWFnZS5cbiAgICogV2hlbiBpdCdzIG5vdCBhdmFpbGFibGUsIHJlbmRlciBpbml0aWFscyBpbnN0ZWFkLlxuICAgKi9cbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgYXZhdGFyLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIG5hbWUgdXNlZCBmb3IgdGhlIGluaXRpYWxzIGFuZCB0aXRsZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgdXNlZCBmb3IgdGhlIGhhc2ggZnVuY3Rpb24uXG4gICAqIFRoZSBuYW1lIGlzIHVzZWQgYXMgdGhlIGhhc2hWYWx1ZSBieSBkZWZhdWx0LlxuICAgKiBXaGVuIGRlYWxpbmcgd2l0aCBhbm9ueW1vdXMgdXNlcnMgeW91IHNob3VsZCB1c2UgdGhlIGlkIGluc3RlYWQuXG4gICAqL1xuICBoYXNoVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgcmVuZGVyIGEgc29saWQgYXZhdGFyLlxuICAgKi9cbiAgaXNTb2xpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciB1c2VkIGZvciB0aGUgYXZhdGFyLlxuICAgKiBXaGVuIHRoZSB2YWx1ZSBpcyBgYXV0b21hdGljYCwgdXNlIHRoZSBoYXNoIGZ1bmN0aW9uIHRvIGRldGVybWluZSB0aGUgY29sb3IuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZ2V0IHRoZSBpbml0aWFscyBiYXNlZCBvbiB0aGUgbmFtZS5cbiAgICovXG4gIGdldEluaXRpYWxzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBmb3JjZSBzaG93IHRoZSBpbml0aWFscy5cbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gc29tZSBjYXNlcyB3aGVuIHVzaW5nIEdyYXZhdGFyIGFuZCB0cmFuc3BhcmVudCBwbmdzLlxuICAgKi9cbiAgZm9yY2VTaG93SW5pdGlhbHM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBzaXplIGlzIHNtYWxsZXIgdGhhbiB0aGlzIG51bWJlciwgdXNlIGEgc2luZ2xlIGluaXRpYWwgZm9yIHRoZSBhdmF0YXIuXG4gICAqL1xuICBzaXplTGltaXRPbmVDaGFyYWN0ZXI6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyXG4iXX0=