"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _overlay = require("../../overlay");

var _buttons = require("../../buttons");

var _icons = require("../../icons");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 200;

var openAnimation = _glamor.css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
});

var closeAnimation = _glamor.css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
});

var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
  }
};

var closeHandler = function closeHandler(close) {
  return close();
};

var emptyProps = {};
var Dialog = (0, _react.memo)(function Dialog(_ref) {
  var children = _ref.children,
      _ref$cancelLabel = _ref.cancelLabel,
      cancelLabel = _ref$cancelLabel === void 0 ? 'Cancel' : _ref$cancelLabel,
      _ref$confirmLabel = _ref.confirmLabel,
      confirmLabel = _ref$confirmLabel === void 0 ? 'Confirm' : _ref$confirmLabel,
      _ref$containerProps = _ref.containerProps,
      containerProps = _ref$containerProps === void 0 ? emptyProps : _ref$containerProps,
      contentContainerProps = _ref.contentContainerProps,
      footer = _ref.footer,
      _ref$hasCancel = _ref.hasCancel,
      hasCancel = _ref$hasCancel === void 0 ? true : _ref$hasCancel,
      _ref$hasClose = _ref.hasClose,
      hasClose = _ref$hasClose === void 0 ? true : _ref$hasClose,
      _ref$hasFooter = _ref.hasFooter,
      hasFooter = _ref$hasFooter === void 0 ? true : _ref$hasFooter,
      _ref$hasHeader = _ref.hasHeader,
      hasHeader = _ref$hasHeader === void 0 ? true : _ref$hasHeader,
      header = _ref.header,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? 'none' : _ref$intent,
      _ref$isConfirmDisable = _ref.isConfirmDisabled,
      isConfirmDisabled = _ref$isConfirmDisable === void 0 ? false : _ref$isConfirmDisable,
      _ref$isConfirmLoading = _ref.isConfirmLoading,
      isConfirmLoading = _ref$isConfirmLoading === void 0 ? false : _ref$isConfirmLoading,
      _ref$isShown = _ref.isShown,
      isShown = _ref$isShown === void 0 ? false : _ref$isShown,
      _ref$minHeightContent = _ref.minHeightContent,
      minHeightContent = _ref$minHeightContent === void 0 ? 80 : _ref$minHeightContent,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? closeHandler : _ref$onCancel,
      onCloseComplete = _ref.onCloseComplete,
      _ref$onConfirm = _ref.onConfirm,
      onConfirm = _ref$onConfirm === void 0 ? closeHandler : _ref$onConfirm,
      onOpenComplete = _ref.onOpenComplete,
      _ref$overlayProps = _ref.overlayProps,
      overlayProps = _ref$overlayProps === void 0 ? emptyProps : _ref$overlayProps,
      _ref$preventBodyScrol = _ref.preventBodyScrolling,
      preventBodyScrolling = _ref$preventBodyScrol === void 0 ? false : _ref$preventBodyScrol,
      _ref$shouldCloseOnEsc = _ref.shouldCloseOnEscapePress,
      shouldCloseOnEscapePress = _ref$shouldCloseOnEsc === void 0 ? true : _ref$shouldCloseOnEsc,
      _ref$shouldCloseOnOve = _ref.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _ref$shouldCloseOnOve === void 0 ? true : _ref$shouldCloseOnOve,
      _ref$sideOffset = _ref.sideOffset,
      sideOffset = _ref$sideOffset === void 0 ? '16px' : _ref$sideOffset,
      title = _ref.title,
      _ref$topOffset = _ref.topOffset,
      topOffset = _ref$topOffset === void 0 ? '12vmin' : _ref$topOffset,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 560 : _ref$width;
  var sideOffsetWithUnit = Number.isInteger(sideOffset) ? "".concat(sideOffset, "px") : sideOffset;
  var maxWidth = "calc(100% - ".concat(sideOffsetWithUnit, " * 2)");
  var topOffsetWithUnit = Number.isInteger(topOffset) ? "".concat(topOffset, "px") : topOffset;
  var maxHeight = "calc(100% - ".concat(topOffsetWithUnit, " * 2)");

  var renderChildren = function renderChildren(close) {
    if (typeof children === 'function') {
      return children({
        close: close
      });
    }

    if (typeof children === 'string') {
      return _react["default"].createElement(_typography.Paragraph, null, children);
    }

    return children;
  };

  var renderNode = function renderNode(node, close) {
    if (typeof node === 'function') {
      return node({
        close: close
      });
    }

    return node;
  };

  var renderHeader = function renderHeader(close) {
    if (!header && !hasHeader) {
      return undefined;
    }

    return _react["default"].createElement(_layers.Pane, {
      padding: 16,
      flexShrink: 0,
      borderBottom: "muted",
      display: "flex",
      alignItems: "center"
    }, header ? renderNode(header, close) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_typography.Heading, {
      is: "h4",
      size: 600,
      flex: "1"
    }, title), hasClose && _react["default"].createElement(_buttons.IconButton, {
      appearance: "minimal",
      icon: _icons.CrossIcon,
      onClick: function onClick() {
        return onCancel(close);
      }
    })));
  };

  var renderFooter = function renderFooter(close) {
    if (!footer && !hasFooter) {
      return undefined;
    }

    return _react["default"].createElement(_layers.Pane, {
      borderTop: "muted",
      clearfix: true
    }, _react["default"].createElement(_layers.Pane, {
      padding: 16,
      "float": "right"
    }, footer ? renderNode(footer, close) : _react["default"].createElement(_react["default"].Fragment, null, hasCancel && _react["default"].createElement(_buttons.Button, {
      tabIndex: 0,
      onClick: function onClick() {
        return onCancel(close);
      }
    }, cancelLabel), _react["default"].createElement(_buttons.Button, {
      tabIndex: 0,
      marginLeft: 8,
      appearance: "primary",
      isLoading: isConfirmLoading,
      disabled: isConfirmDisabled,
      onClick: function onClick() {
        return onConfirm(close);
      },
      intent: intent
    }, confirmLabel))));
  };

  return _react["default"].createElement(_overlay.Overlay, {
    isShown: isShown,
    shouldCloseOnClick: shouldCloseOnOverlayClick,
    shouldCloseOnEscapePress: shouldCloseOnEscapePress,
    onExited: onCloseComplete,
    onEntered: onOpenComplete,
    containerProps: _objectSpread({
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }, overlayProps),
    preventBodyScrolling: preventBodyScrolling
  }, function (_ref2) {
    var state = _ref2.state,
        close = _ref2.close;
    return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
      role: "dialog",
      backgroundColor: "white",
      elevation: 4,
      borderRadius: 8,
      width: width,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      marginX: sideOffsetWithUnit,
      marginY: topOffsetWithUnit,
      display: "flex",
      flexDirection: "column",
      css: animationStyles,
      "data-state": state
    }, containerProps), renderHeader(close), _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
      "data-state": state,
      display: "flex",
      overflow: "auto",
      padding: 16,
      flexDirection: "column",
      minHeight: minHeightContent
    }, contentContainerProps), _react["default"].createElement(_layers.Pane, null, renderChildren(close))), renderFooter(close));
  });
});
Dialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * When true, the dialog is shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: _propTypes["default"].node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: _propTypes["default"].bool,

  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: _propTypes["default"].bool,

  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: _propTypes["default"].bool,

  /**
   * When true, the close button is shown
   */
  hasClose: _propTypes["default"].bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: _propTypes["default"].func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: _propTypes["default"].string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: _propTypes["default"].bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: _propTypes["default"].bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: _propTypes["default"].func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: _propTypes["default"].string,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Width of the Dialog.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: _propTypes["default"].object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: _propTypes["default"].bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: _propTypes["default"].object
};
var _default = Dialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWFsb2cvc3JjL0RpYWxvZy5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiYW5pbWF0aW9uIiwiY2xvc2VIYW5kbGVyIiwiY2xvc2UiLCJlbXB0eVByb3BzIiwiRGlhbG9nIiwiY2hpbGRyZW4iLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsImNvbnRhaW5lclByb3BzIiwiY29udGVudENvbnRhaW5lclByb3BzIiwiZm9vdGVyIiwiaGFzQ2FuY2VsIiwiaGFzQ2xvc2UiLCJoYXNGb290ZXIiLCJoYXNIZWFkZXIiLCJoZWFkZXIiLCJpbnRlbnQiLCJpc0NvbmZpcm1EaXNhYmxlZCIsImlzQ29uZmlybUxvYWRpbmciLCJpc1Nob3duIiwibWluSGVpZ2h0Q29udGVudCIsIm9uQ2FuY2VsIiwib25DbG9zZUNvbXBsZXRlIiwib25Db25maXJtIiwib25PcGVuQ29tcGxldGUiLCJvdmVybGF5UHJvcHMiLCJwcmV2ZW50Qm9keVNjcm9sbGluZyIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsInNob3VsZENsb3NlT25PdmVybGF5Q2xpY2siLCJzaWRlT2Zmc2V0IiwidGl0bGUiLCJ0b3BPZmZzZXQiLCJ3aWR0aCIsInNpZGVPZmZzZXRXaXRoVW5pdCIsIk51bWJlciIsImlzSW50ZWdlciIsIm1heFdpZHRoIiwidG9wT2Zmc2V0V2l0aFVuaXQiLCJtYXhIZWlnaHQiLCJyZW5kZXJDaGlsZHJlbiIsInJlbmRlck5vZGUiLCJub2RlIiwicmVuZGVySGVhZGVyIiwidW5kZWZpbmVkIiwiQ3Jvc3NJY29uIiwicmVuZGVyRm9vdGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInN0YXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLFlBQVksa0NBRFU7QUFFdEJDLEVBQUFBLFlBQVk7QUFGVSxDQUF4QjtBQUtBLElBQU1DLGtCQUFrQixHQUFHLEdBQTNCOztBQUVBLElBQU1DLGFBQWEsR0FBR0MsWUFBSUMsU0FBSixDQUFjLGVBQWQsRUFBK0I7QUFDbkRDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxTQUFTLEVBQUUsWUFEUDtBQUVKQyxJQUFBQSxPQUFPLEVBQUU7QUFGTCxHQUQ2QztBQUtuREMsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZGLElBQUFBLFNBQVMsRUFBRSxVQURUO0FBRUZDLElBQUFBLE9BQU8sRUFBRTtBQUZQO0FBTCtDLENBQS9CLENBQXRCOztBQVdBLElBQU1FLGNBQWMsR0FBR04sWUFBSUMsU0FBSixDQUFjLGdCQUFkLEVBQWdDO0FBQ3JEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsU0FBUyxFQUFFLFVBRFA7QUFFSkMsSUFBQUEsT0FBTyxFQUFFO0FBRkwsR0FEK0M7QUFLckRDLEVBQUFBLEVBQUUsRUFBRTtBQUNGRixJQUFBQSxTQUFTLEVBQUUsWUFEVDtBQUVGQyxJQUFBQSxPQUFPLEVBQUU7QUFGUDtBQUxpRCxDQUFoQyxDQUF2Qjs7QUFXQSxJQUFNRyxlQUFlLEdBQUc7QUFDdEIsdURBQXFEO0FBQ25EQyxJQUFBQSxTQUFTLFlBQUtULGFBQUwsY0FBc0JELGtCQUF0QixnQkFBOENILGVBQWUsQ0FBQ0MsWUFBOUQ7QUFEMEMsR0FEL0I7QUFJdEIsNkJBQTJCO0FBQ3pCWSxJQUFBQSxTQUFTLFlBQUtGLGNBQUwsY0FBdUJSLGtCQUF2QixnQkFBK0NILGVBQWUsQ0FBQ0UsWUFBL0Q7QUFEZ0I7QUFKTCxDQUF4Qjs7QUFTQSxJQUFNWSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxFQUFUO0FBQUEsQ0FBMUI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBRUEsSUFBTUMsTUFBTSxHQUFHLGlCQUFLLFNBQVNBLE1BQVQsT0E2QmpCO0FBQUEsTUE1QkRDLFFBNEJDLFFBNUJEQSxRQTRCQztBQUFBLDhCQTNCREMsV0EyQkM7QUFBQSxNQTNCREEsV0EyQkMsaUNBM0JhLFFBMkJiO0FBQUEsK0JBMUJEQyxZQTBCQztBQUFBLE1BMUJEQSxZQTBCQyxrQ0ExQmMsU0EwQmQ7QUFBQSxpQ0F6QkRDLGNBeUJDO0FBQUEsTUF6QkRBLGNBeUJDLG9DQXpCZ0JMLFVBeUJoQjtBQUFBLE1BeEJETSxxQkF3QkMsUUF4QkRBLHFCQXdCQztBQUFBLE1BdkJEQyxNQXVCQyxRQXZCREEsTUF1QkM7QUFBQSw0QkF0QkRDLFNBc0JDO0FBQUEsTUF0QkRBLFNBc0JDLCtCQXRCVyxJQXNCWDtBQUFBLDJCQXJCREMsUUFxQkM7QUFBQSxNQXJCREEsUUFxQkMsOEJBckJVLElBcUJWO0FBQUEsNEJBcEJEQyxTQW9CQztBQUFBLE1BcEJEQSxTQW9CQywrQkFwQlcsSUFvQlg7QUFBQSw0QkFuQkRDLFNBbUJDO0FBQUEsTUFuQkRBLFNBbUJDLCtCQW5CVyxJQW1CWDtBQUFBLE1BbEJEQyxNQWtCQyxRQWxCREEsTUFrQkM7QUFBQSx5QkFqQkRDLE1BaUJDO0FBQUEsTUFqQkRBLE1BaUJDLDRCQWpCUSxNQWlCUjtBQUFBLG1DQWhCREMsaUJBZ0JDO0FBQUEsTUFoQkRBLGlCQWdCQyxzQ0FoQm1CLEtBZ0JuQjtBQUFBLG1DQWZEQyxnQkFlQztBQUFBLE1BZkRBLGdCQWVDLHNDQWZrQixLQWVsQjtBQUFBLDBCQWREQyxPQWNDO0FBQUEsTUFkREEsT0FjQyw2QkFkUyxLQWNUO0FBQUEsbUNBYkRDLGdCQWFDO0FBQUEsTUFiREEsZ0JBYUMsc0NBYmtCLEVBYWxCO0FBQUEsMkJBWkRDLFFBWUM7QUFBQSxNQVpEQSxRQVlDLDhCQVpVcEIsWUFZVjtBQUFBLE1BWERxQixlQVdDLFFBWERBLGVBV0M7QUFBQSw0QkFWREMsU0FVQztBQUFBLE1BVkRBLFNBVUMsK0JBVld0QixZQVVYO0FBQUEsTUFURHVCLGNBU0MsUUFUREEsY0FTQztBQUFBLCtCQVJEQyxZQVFDO0FBQUEsTUFSREEsWUFRQyxrQ0FSY3RCLFVBUWQ7QUFBQSxtQ0FQRHVCLG9CQU9DO0FBQUEsTUFQREEsb0JBT0Msc0NBUHNCLEtBT3RCO0FBQUEsbUNBTkRDLHdCQU1DO0FBQUEsTUFOREEsd0JBTUMsc0NBTjBCLElBTTFCO0FBQUEsbUNBTERDLHlCQUtDO0FBQUEsTUFMREEseUJBS0Msc0NBTDJCLElBSzNCO0FBQUEsNkJBSkRDLFVBSUM7QUFBQSxNQUpEQSxVQUlDLGdDQUpZLE1BSVo7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSw0QkFGREMsU0FFQztBQUFBLE1BRkRBLFNBRUMsK0JBRlcsUUFFWDtBQUFBLHdCQUREQyxLQUNDO0FBQUEsTUFEREEsS0FDQywyQkFETyxHQUNQO0FBQ0QsTUFBTUMsa0JBQWtCLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQk4sVUFBakIsY0FDcEJBLFVBRG9CLFVBRXZCQSxVQUZKO0FBR0EsTUFBTU8sUUFBUSx5QkFBa0JILGtCQUFsQixVQUFkO0FBRUEsTUFBTUksaUJBQWlCLEdBQUdILE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkosU0FBakIsY0FDbkJBLFNBRG1CLFVBRXRCQSxTQUZKO0FBR0EsTUFBTU8sU0FBUyx5QkFBa0JELGlCQUFsQixVQUFmOztBQUVBLE1BQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQXJDLEtBQUssRUFBSTtBQUM5QixRQUFJLE9BQU9HLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDbEMsYUFBT0EsUUFBUSxDQUFDO0FBQUVILFFBQUFBLEtBQUssRUFBTEE7QUFBRixPQUFELENBQWY7QUFDRDs7QUFFRCxRQUFJLE9BQU9HLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsYUFBTyxnQ0FBQyxxQkFBRCxRQUFZQSxRQUFaLENBQVA7QUFDRDs7QUFFRCxXQUFPQSxRQUFQO0FBQ0QsR0FWRDs7QUFZQSxNQUFNbUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFPdkMsS0FBUCxFQUFpQjtBQUNsQyxRQUFJLE9BQU91QyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzlCLGFBQU9BLElBQUksQ0FBQztBQUFFdkMsUUFBQUEsS0FBSyxFQUFMQTtBQUFGLE9BQUQsQ0FBWDtBQUNEOztBQUVELFdBQU91QyxJQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBeEMsS0FBSyxFQUFJO0FBQzVCLFFBQUksQ0FBQ2EsTUFBRCxJQUFXLENBQUNELFNBQWhCLEVBQTJCO0FBQ3pCLGFBQU82QixTQUFQO0FBQ0Q7O0FBRUQsV0FDRSxnQ0FBQyxZQUFEO0FBQ0UsTUFBQSxPQUFPLEVBQUUsRUFEWDtBQUVFLE1BQUEsVUFBVSxFQUFFLENBRmQ7QUFHRSxNQUFBLFlBQVksRUFBQyxPQUhmO0FBSUUsTUFBQSxPQUFPLEVBQUMsTUFKVjtBQUtFLE1BQUEsVUFBVSxFQUFDO0FBTGIsT0FPRzVCLE1BQU0sR0FDTHlCLFVBQVUsQ0FBQ3pCLE1BQUQsRUFBU2IsS0FBVCxDQURMLEdBR0wsa0VBQ0UsZ0NBQUMsbUJBQUQ7QUFBUyxNQUFBLEVBQUUsRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFFLEdBQXZCO0FBQTRCLE1BQUEsSUFBSSxFQUFDO0FBQWpDLE9BQ0c0QixLQURILENBREYsRUFJR2xCLFFBQVEsSUFDUCxnQ0FBQyxtQkFBRDtBQUNFLE1BQUEsVUFBVSxFQUFDLFNBRGI7QUFFRSxNQUFBLElBQUksRUFBRWdDLGdCQUZSO0FBR0UsTUFBQSxPQUFPLEVBQUU7QUFBQSxlQUFNdkIsUUFBUSxDQUFDbkIsS0FBRCxDQUFkO0FBQUE7QUFIWCxNQUxKLENBVkosQ0FERjtBQTBCRCxHQS9CRDs7QUFpQ0EsTUFBTTJDLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUEzQyxLQUFLLEVBQUk7QUFDNUIsUUFBSSxDQUFDUSxNQUFELElBQVcsQ0FBQ0csU0FBaEIsRUFBMkI7QUFDekIsYUFBTzhCLFNBQVA7QUFDRDs7QUFFRCxXQUNFLGdDQUFDLFlBQUQ7QUFBTSxNQUFBLFNBQVMsRUFBQyxPQUFoQjtBQUF3QixNQUFBLFFBQVE7QUFBaEMsT0FDRSxnQ0FBQyxZQUFEO0FBQU0sTUFBQSxPQUFPLEVBQUUsRUFBZjtBQUFtQixlQUFNO0FBQXpCLE9BQ0dqQyxNQUFNLEdBQ0w4QixVQUFVLENBQUM5QixNQUFELEVBQVNSLEtBQVQsQ0FETCxHQUdMLGtFQUVHUyxTQUFTLElBQ1IsZ0NBQUMsZUFBRDtBQUFRLE1BQUEsUUFBUSxFQUFFLENBQWxCO0FBQXFCLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTVUsUUFBUSxDQUFDbkIsS0FBRCxDQUFkO0FBQUE7QUFBOUIsT0FDR0ksV0FESCxDQUhKLEVBUUUsZ0NBQUMsZUFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFLENBRFo7QUFFRSxNQUFBLFVBQVUsRUFBRSxDQUZkO0FBR0UsTUFBQSxVQUFVLEVBQUMsU0FIYjtBQUlFLE1BQUEsU0FBUyxFQUFFWSxnQkFKYjtBQUtFLE1BQUEsUUFBUSxFQUFFRCxpQkFMWjtBQU1FLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTU0sU0FBUyxDQUFDckIsS0FBRCxDQUFmO0FBQUEsT0FOWDtBQU9FLE1BQUEsTUFBTSxFQUFFYztBQVBWLE9BU0dULFlBVEgsQ0FSRixDQUpKLENBREYsQ0FERjtBQThCRCxHQW5DRDs7QUFxQ0EsU0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFWSxPQURYO0FBRUUsSUFBQSxrQkFBa0IsRUFBRVMseUJBRnRCO0FBR0UsSUFBQSx3QkFBd0IsRUFBRUQsd0JBSDVCO0FBSUUsSUFBQSxRQUFRLEVBQUVMLGVBSlo7QUFLRSxJQUFBLFNBQVMsRUFBRUUsY0FMYjtBQU1FLElBQUEsY0FBYztBQUNac0IsTUFBQUEsT0FBTyxFQUFFLE1BREc7QUFFWkMsTUFBQUEsVUFBVSxFQUFFLFlBRkE7QUFHWkMsTUFBQUEsY0FBYyxFQUFFO0FBSEosT0FJVHZCLFlBSlMsQ0FOaEI7QUFZRSxJQUFBLG9CQUFvQixFQUFFQztBQVp4QixLQWNHO0FBQUEsUUFBR3VCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFFBQVUvQyxLQUFWLFNBQVVBLEtBQVY7QUFBQSxXQUNDLGdDQUFDLFlBQUQ7QUFDRSxNQUFBLElBQUksRUFBQyxRQURQO0FBRUUsTUFBQSxlQUFlLEVBQUMsT0FGbEI7QUFHRSxNQUFBLFNBQVMsRUFBRSxDQUhiO0FBSUUsTUFBQSxZQUFZLEVBQUUsQ0FKaEI7QUFLRSxNQUFBLEtBQUssRUFBRThCLEtBTFQ7QUFNRSxNQUFBLFFBQVEsRUFBRUksUUFOWjtBQU9FLE1BQUEsU0FBUyxFQUFFRSxTQVBiO0FBUUUsTUFBQSxPQUFPLEVBQUVMLGtCQVJYO0FBU0UsTUFBQSxPQUFPLEVBQUVJLGlCQVRYO0FBVUUsTUFBQSxPQUFPLEVBQUMsTUFWVjtBQVdFLE1BQUEsYUFBYSxFQUFDLFFBWGhCO0FBWUUsTUFBQSxHQUFHLEVBQUV0QyxlQVpQO0FBYUUsb0JBQVlrRDtBQWJkLE9BY016QyxjQWROLEdBZ0JHa0MsWUFBWSxDQUFDeEMsS0FBRCxDQWhCZixFQWtCRSxnQ0FBQyxZQUFEO0FBQ0Usb0JBQVkrQyxLQURkO0FBRUUsTUFBQSxPQUFPLEVBQUMsTUFGVjtBQUdFLE1BQUEsUUFBUSxFQUFDLE1BSFg7QUFJRSxNQUFBLE9BQU8sRUFBRSxFQUpYO0FBS0UsTUFBQSxhQUFhLEVBQUMsUUFMaEI7QUFNRSxNQUFBLFNBQVMsRUFBRTdCO0FBTmIsT0FPTVgscUJBUE4sR0FTRSxnQ0FBQyxZQUFELFFBQU84QixjQUFjLENBQUNyQyxLQUFELENBQXJCLENBVEYsQ0FsQkYsRUE4QkcyQyxZQUFZLENBQUMzQyxLQUFELENBOUJmLENBREQ7QUFBQSxHQWRILENBREY7QUFtREQsQ0FyTGMsQ0FBZjtBQXVMQUUsTUFBTSxDQUFDOEMsU0FBUCxHQUFtQjtBQUNqQjs7OztBQUlBN0MsRUFBQUEsUUFBUSxFQUFFOEMsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0Qsc0JBQVVWLElBQVgsRUFBaUJVLHNCQUFVRSxJQUEzQixDQUFwQixFQUFzREMsVUFML0M7O0FBT2pCOzs7QUFHQXRDLEVBQUFBLE1BQU0sRUFBRW1DLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsUUFBL0IsQ0FBaEIsQ0FWUzs7QUFZakI7OztBQUdBcEMsRUFBQUEsT0FBTyxFQUFFZ0Msc0JBQVVLLElBZkY7O0FBaUJqQjs7O0FBR0ExQixFQUFBQSxLQUFLLEVBQUVxQixzQkFBVVYsSUFwQkE7O0FBc0JqQjs7O0FBR0EzQixFQUFBQSxTQUFTLEVBQUVxQyxzQkFBVUssSUF6Qko7O0FBMkJqQjs7Ozs7Ozs7QUFRQXpDLEVBQUFBLE1BQU0sRUFBRW9DLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVVixJQUFYLEVBQWlCVSxzQkFBVUUsSUFBM0IsQ0FBcEIsQ0FuQ1M7O0FBcUNqQjs7O0FBR0F4QyxFQUFBQSxTQUFTLEVBQUVzQyxzQkFBVUssSUF4Q0o7O0FBMENqQjs7Ozs7Ozs7QUFRQTlDLEVBQUFBLE1BQU0sRUFBRXlDLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVVixJQUFYLEVBQWlCVSxzQkFBVUUsSUFBM0IsQ0FBcEIsQ0FsRFM7O0FBb0RqQjs7O0FBR0ExQyxFQUFBQSxTQUFTLEVBQUV3QyxzQkFBVUssSUF2REo7O0FBeURqQjs7O0FBR0E1QyxFQUFBQSxRQUFRLEVBQUV1QyxzQkFBVUssSUE1REg7O0FBOERqQjs7O0FBR0FsQyxFQUFBQSxlQUFlLEVBQUU2QixzQkFBVUUsSUFqRVY7O0FBbUVqQjs7O0FBR0E3QixFQUFBQSxjQUFjLEVBQUUyQixzQkFBVUUsSUF0RVQ7O0FBd0VqQjs7Ozs7OztBQU9BOUIsRUFBQUEsU0FBUyxFQUFFNEIsc0JBQVVFLElBL0VKOztBQWlGakI7OztBQUdBOUMsRUFBQUEsWUFBWSxFQUFFNEMsc0JBQVVNLE1BcEZQOztBQXNGakI7OztBQUdBdkMsRUFBQUEsZ0JBQWdCLEVBQUVpQyxzQkFBVUssSUF6Rlg7O0FBMkZqQjs7O0FBR0F2QyxFQUFBQSxpQkFBaUIsRUFBRWtDLHNCQUFVSyxJQTlGWjs7QUFnR2pCOzs7Ozs7QUFNQW5DLEVBQUFBLFFBQVEsRUFBRThCLHNCQUFVRSxJQXRHSDs7QUF3R2pCOzs7QUFHQS9DLEVBQUFBLFdBQVcsRUFBRTZDLHNCQUFVTSxNQTNHTjs7QUE2R2pCOzs7QUFHQTdCLEVBQUFBLHlCQUF5QixFQUFFdUIsc0JBQVVLLElBaEhwQjs7QUFrSGpCOzs7QUFHQTdCLEVBQUFBLHdCQUF3QixFQUFFd0Isc0JBQVVLLElBckhuQjs7QUF1SGpCOzs7QUFHQXhCLEVBQUFBLEtBQUssRUFBRW1CLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVTSxNQUFYLEVBQW1CTixzQkFBVU8sTUFBN0IsQ0FBcEIsQ0ExSFU7O0FBNEhqQjs7Ozs7QUFLQTNCLEVBQUFBLFNBQVMsRUFBRW9CLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVTSxNQUFYLEVBQW1CTixzQkFBVU8sTUFBN0IsQ0FBcEIsQ0FqSU07O0FBbUlqQjs7OztBQUlBN0IsRUFBQUEsVUFBVSxFQUFFc0Isc0JBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0Qsc0JBQVVNLE1BQVgsRUFBbUJOLHNCQUFVTyxNQUE3QixDQUFwQixDQXZJSzs7QUF5SWpCOzs7O0FBSUF0QyxFQUFBQSxnQkFBZ0IsRUFBRStCLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVTSxNQUFYLEVBQW1CTixzQkFBVU8sTUFBN0IsQ0FBcEIsQ0E3SUQ7O0FBK0lqQjs7O0FBR0FsRCxFQUFBQSxjQUFjLEVBQUUyQyxzQkFBVVEsTUFsSlQ7O0FBb0pqQjs7O0FBR0FsRCxFQUFBQSxxQkFBcUIsRUFBRTBDLHNCQUFVUSxNQXZKaEI7O0FBeUpqQjs7O0FBR0FqQyxFQUFBQSxvQkFBb0IsRUFBRXlCLHNCQUFVSyxJQTVKZjs7QUE4SmpCOzs7QUFHQS9CLEVBQUFBLFlBQVksRUFBRTBCLHNCQUFVUTtBQWpLUCxDQUFuQjtlQW9LZXZELE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBhcmFncmFwaCwgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vLi4vb3ZlcmxheSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyMDBcblxuY29uc3Qgb3BlbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ29wZW5BbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSlcblxuY29uc3QgY2xvc2VBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdjbG9zZUFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSB7XG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBhbmltYXRpb246IGAke29wZW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvbn0gYm90aGBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtjbG9zZUFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9ufSBib3RoYFxuICB9XG59XG5cbmNvbnN0IGNsb3NlSGFuZGxlciA9IGNsb3NlID0+IGNsb3NlKClcbmNvbnN0IGVtcHR5UHJvcHMgPSB7fVxuXG5jb25zdCBEaWFsb2cgPSBtZW1vKGZ1bmN0aW9uIERpYWxvZyh7XG4gIGNoaWxkcmVuLFxuICBjYW5jZWxMYWJlbCA9ICdDYW5jZWwnLFxuICBjb25maXJtTGFiZWwgPSAnQ29uZmlybScsXG4gIGNvbnRhaW5lclByb3BzID0gZW1wdHlQcm9wcyxcbiAgY29udGVudENvbnRhaW5lclByb3BzLFxuICBmb290ZXIsXG4gIGhhc0NhbmNlbCA9IHRydWUsXG4gIGhhc0Nsb3NlID0gdHJ1ZSxcbiAgaGFzRm9vdGVyID0gdHJ1ZSxcbiAgaGFzSGVhZGVyID0gdHJ1ZSxcbiAgaGVhZGVyLFxuICBpbnRlbnQgPSAnbm9uZScsXG4gIGlzQ29uZmlybURpc2FibGVkID0gZmFsc2UsXG4gIGlzQ29uZmlybUxvYWRpbmcgPSBmYWxzZSxcbiAgaXNTaG93biA9IGZhbHNlLFxuICBtaW5IZWlnaHRDb250ZW50ID0gODAsXG4gIG9uQ2FuY2VsID0gY2xvc2VIYW5kbGVyLFxuICBvbkNsb3NlQ29tcGxldGUsXG4gIG9uQ29uZmlybSA9IGNsb3NlSGFuZGxlcixcbiAgb25PcGVuQ29tcGxldGUsXG4gIG92ZXJsYXlQcm9wcyA9IGVtcHR5UHJvcHMsXG4gIHByZXZlbnRCb2R5U2Nyb2xsaW5nID0gZmFsc2UsXG4gIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyA9IHRydWUsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2sgPSB0cnVlLFxuICBzaWRlT2Zmc2V0ID0gJzE2cHgnLFxuICB0aXRsZSxcbiAgdG9wT2Zmc2V0ID0gJzEydm1pbicsXG4gIHdpZHRoID0gNTYwXG59KSB7XG4gIGNvbnN0IHNpZGVPZmZzZXRXaXRoVW5pdCA9IE51bWJlci5pc0ludGVnZXIoc2lkZU9mZnNldClcbiAgICA/IGAke3NpZGVPZmZzZXR9cHhgXG4gICAgOiBzaWRlT2Zmc2V0XG4gIGNvbnN0IG1heFdpZHRoID0gYGNhbGMoMTAwJSAtICR7c2lkZU9mZnNldFdpdGhVbml0fSAqIDIpYFxuXG4gIGNvbnN0IHRvcE9mZnNldFdpdGhVbml0ID0gTnVtYmVyLmlzSW50ZWdlcih0b3BPZmZzZXQpXG4gICAgPyBgJHt0b3BPZmZzZXR9cHhgXG4gICAgOiB0b3BPZmZzZXRcbiAgY29uc3QgbWF4SGVpZ2h0ID0gYGNhbGMoMTAwJSAtICR7dG9wT2Zmc2V0V2l0aFVuaXR9ICogMilgXG5cbiAgY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSBjbG9zZSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgY2xvc2UgfSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIDxQYXJhZ3JhcGg+e2NoaWxkcmVufTwvUGFyYWdyYXBoPlxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgY29uc3QgcmVuZGVyTm9kZSA9IChub2RlLCBjbG9zZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG5vZGUoeyBjbG9zZSB9KVxuICAgIH1cblxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBjb25zdCByZW5kZXJIZWFkZXIgPSBjbG9zZSA9PiB7XG4gICAgaWYgKCFoZWFkZXIgJiYgIWhhc0hlYWRlcikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBwYWRkaW5nPXsxNn1cbiAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgYm9yZGVyQm90dG9tPVwibXV0ZWRcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICB7aGVhZGVyID8gKFxuICAgICAgICAgIHJlbmRlck5vZGUoaGVhZGVyLCBjbG9zZSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRpbmcgaXM9XCJoNFwiIHNpemU9ezYwMH0gZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAge2hhc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgaWNvbj17Q3Jvc3NJY29ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2FuY2VsKGNsb3NlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyRm9vdGVyID0gY2xvc2UgPT4ge1xuICAgIGlmICghZm9vdGVyICYmICFoYXNGb290ZXIpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgYm9yZGVyVG9wPVwibXV0ZWRcIiBjbGVhcmZpeD5cbiAgICAgICAgPFBhbmUgcGFkZGluZz17MTZ9IGZsb2F0PVwicmlnaHRcIj5cbiAgICAgICAgICB7Zm9vdGVyID8gKFxuICAgICAgICAgICAgcmVuZGVyTm9kZShmb290ZXIsIGNsb3NlKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7LyogQ2FuY2VsIHNob3VsZCBiZSBmaXJzdCB0byBtYWtlIHN1cmUgZm9jdXMgZ2V0cyBvbiBpdCBmaXJzdC4gKi99XG4gICAgICAgICAgICAgIHtoYXNDYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGFiSW5kZXg9ezB9IG9uQ2xpY2s9eygpID0+IG9uQ2FuY2VsKGNsb3NlKX0+XG4gICAgICAgICAgICAgICAgICB7Y2FuY2VsTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezh9XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNDb25maXJtTG9hZGluZ31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDb25maXJtRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Db25maXJtKGNsb3NlKX1cbiAgICAgICAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE92ZXJsYXlcbiAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICBzaG91bGRDbG9zZU9uQ2xpY2s9e3Nob3VsZENsb3NlT25PdmVybGF5Q2xpY2t9XG4gICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M9e3Nob3VsZENsb3NlT25Fc2NhcGVQcmVzc31cbiAgICAgIG9uRXhpdGVkPXtvbkNsb3NlQ29tcGxldGV9XG4gICAgICBvbkVudGVyZWQ9e29uT3BlbkNvbXBsZXRlfVxuICAgICAgY29udGFpbmVyUHJvcHM9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgLi4ub3ZlcmxheVByb3BzXG4gICAgICB9fVxuICAgICAgcHJldmVudEJvZHlTY3JvbGxpbmc9e3ByZXZlbnRCb2R5U2Nyb2xsaW5nfVxuICAgID5cbiAgICAgIHsoeyBzdGF0ZSwgY2xvc2UgfSkgPT4gKFxuICAgICAgICA8UGFuZVxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBlbGV2YXRpb249ezR9XG4gICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBtYXhXaWR0aD17bWF4V2lkdGh9XG4gICAgICAgICAgbWF4SGVpZ2h0PXttYXhIZWlnaHR9XG4gICAgICAgICAgbWFyZ2luWD17c2lkZU9mZnNldFdpdGhVbml0fVxuICAgICAgICAgIG1hcmdpblk9e3RvcE9mZnNldFdpdGhVbml0fVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBjc3M9e2FuaW1hdGlvblN0eWxlc31cbiAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVySGVhZGVyKGNsb3NlKX1cblxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIG92ZXJmbG93PVwiYXV0b1wiXG4gICAgICAgICAgICBwYWRkaW5nPXsxNn1cbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgbWluSGVpZ2h0PXttaW5IZWlnaHRDb250ZW50fVxuICAgICAgICAgICAgey4uLmNvbnRlbnRDb250YWluZXJQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFuZT57cmVuZGVyQ2hpbGRyZW4oY2xvc2UpfTwvUGFuZT5cbiAgICAgICAgICA8L1BhbmU+XG5cbiAgICAgICAgICB7cmVuZGVyRm9vdGVyKGNsb3NlKX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgKX1cbiAgICA8L092ZXJsYXk+XG4gIClcbn0pXG5cbkRpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDaGlsZHJlbiBjYW4gYmUgYSBzdHJpbmcsIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICogV2hlbiBwYXNzaW5nIGEgc3RyaW5nLCA8UGFyYWdyYXBoIC8+IGlzIHVzZWQgdG8gd3JhcCB0aGUgc3RyaW5nLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnRlbnQgb2YgdGhlIERpYWxvZy4gVXNlZCBmb3IgdGhlIGJ1dHRvbi5cbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBkaWFsb2cgaXMgc2hvd24uXG4gICAqL1xuICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIERpYWxvZy4gVGl0bGVzIHNob3VsZCB1c2UgVGl0bGUgQ2FzZS5cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgaGVhZGVyIHdpdGggdGhlIHRpdGxlIGFuZCBjbG9zZSBpY29uIGJ1dHRvbiBpcyBzaG93bi5cbiAgICovXG4gIGhhc0hlYWRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgaGVhZGVyIHdpdGggeW91ciBvd24gY3VzdG9tIGNvbXBvbmVudC5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gcHJvdmlkZSBhIGN1c3RvbSBoZWFkZXIgYW5kIGZvb3Rlciwgd2hpbGVcbiAgICogYWxzbyBlbmFibGluZyB5b3VyIERpYWxvZydzIGNvbnRlbnQgdG8gc2Nyb2xsLlxuICAgKlxuICAgKiBIZWFkZXIgY2FuIGVpdGhlciBiZSBhIFJlYWN0IG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICovXG4gIGhlYWRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGZvb3RlciB3aXRoIHRoZSBjYW5jZWwgYW5kIGNvbmZpcm0gYnV0dG9uIGlzIHNob3duLlxuICAgKi9cbiAgaGFzRm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogWW91IGNhbiBvdmVycmlkZSB0aGUgZGVmYXVsdCBmb290ZXIgd2l0aCB5b3VyIG93biBjdXN0b20gY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byBwcm92aWRlIGEgY3VzdG9tIGhlYWRlciBhbmQgZm9vdGVyLCB3aGlsZVxuICAgKiBhbHNvIGVuYWJsaW5nIHlvdXIgRGlhbG9nJ3MgY29udGVudCB0byBzY3JvbGwuXG4gICAqXG4gICAqIEZvb3RlciBjYW4gZWl0aGVyIGJlIGEgUmVhY3Qgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgKi9cbiAgZm9vdGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBzaG93bi5cbiAgICovXG4gIGhhc0NhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGNsb3NlIGJ1dHRvbiBpcyBzaG93blxuICAgKi9cbiAgaGFzQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBUaGlzIGRvZXMgbm90IGNsb3NlIHRoZSBEaWFsb2cuIEEgY2xvc2UgZnVuY3Rpb24gd2lsbCBiZSBwYXNzZWRcbiAgICogYXMgYSBwYXJhbWF0ZXIgeW91IGNhbiB1c2UgdG8gY2xvc2UgdGhlIGRpYWxvZy5cbiAgICpcbiAgICogYG9uQ29uZmlybT17KGNsb3NlKSA9PiBjbG9zZSgpfWBcbiAgICovXG4gIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIHRoZSBjb25maXJtIGJ1dHRvbi5cbiAgICovXG4gIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgY29uZmlybSBidXR0b24gaXMgc2V0IHRvIGxvYWRpbmcuXG4gICAqL1xuICBpc0NvbmZpcm1Mb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgY29uZmlybSBidXR0b24gaXMgc2V0IHRvIGRpc2FibGVkLlxuICAgKi9cbiAgaXNDb25maXJtRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogVGhpcyBjbG9zZXMgdGhlIERpYWxvZyBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBgb25DYW5jZWw9eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAqL1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgKi9cbiAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyB0aGUgb3ZlcmxheSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHByZXNzaW5nIHRoZSBlc2Mga2V5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBEaWFsb2cuXG4gICAqL1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBUaGUgc3BhY2UgYWJvdmUgdGhlIGRpYWxvZy5cbiAgICogVGhpcyBvZmZzZXQgaXMgYWxzbyB1c2VkIGF0IHRoZSBib3R0b20gd2hlbiB0aGVyZSBpcyBub3QgZW5vdWdoIHZlcnRpY2FsXG4gICAqIHNwYWNlIGF2YWlsYWJsZSBvbiBzY3JlZW4g4oCUIGFuZCB0aGUgZGlhbG9nIHNjcm9sbHMgaW50ZXJuYWxseS5cbiAgICovXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBUaGUgc3BhY2Ugb24gdGhlIGxlZnQvcmlnaHQgc2lkZXMgb2YgdGhlIGRpYWxvZyB3aGVuIHRoZXJlIGlzbid0IGVub3VnaFxuICAgKiBob3Jpem9udGFsIHNwYWNlIGF2YWlsYWJsZSBvbiBzY3JlZW4uXG4gICAqL1xuICBzaWRlT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBib2R5IGNvbnRlbnQuXG4gICAqIE1ha2VzIGl0IGxlc3Mgd2VpcmQgd2hlbiBvbmx5IHNob3dpbmcgbGl0dGxlIGNvbnRlbnQuXG4gICAqL1xuICBtaW5IZWlnaHRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgZGlhbG9nIGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGNvbnRlbnQgY29udGFpbmVyLlxuICAgKi9cbiAgY29udGVudENvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHNjcm9sbGluZyBpbiB0aGUgb3V0ZXIgYm9keVxuICAgKi9cbiAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIE92ZXJsYXkgY29tcG9uZW50LlxuICAgKi9cbiAgb3ZlcmxheVByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1xuIl19