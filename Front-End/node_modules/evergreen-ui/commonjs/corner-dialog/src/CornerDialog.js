"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _layers = require("../../layers");

var _portal = require("../../portal");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _AbsolutePosition = _interopRequireDefault(require("../../constants/src/AbsolutePosition"));

var _Position = _interopRequireDefault(require("../../constants/src/Position"));

var _icons = require("../../icons");

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;

var openAnimation = _glamor.css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});

var closeAnimation = _glamor.css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});

var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
};

var closeHandler = function closeHandler(close) {
  return close();
};

var noop = function noop() {};

var emptyProps = {};
var CornerDialog = (0, _react.memo)(function CornerDialog(props) {
  var title = props.title,
      _props$width = props.width,
      width = _props$width === void 0 ? 392 : _props$width,
      children = props.children,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      isShown = props.isShown,
      _props$hasFooter = props.hasFooter,
      hasFooter = _props$hasFooter === void 0 ? true : _props$hasFooter,
      _props$hasCancel = props.hasCancel,
      hasCancel = _props$hasCancel === void 0 ? true : _props$hasCancel,
      _props$hasClose = props.hasClose,
      hasClose = _props$hasClose === void 0 ? true : _props$hasClose,
      _props$cancelLabel = props.cancelLabel,
      cancelLabel = _props$cancelLabel === void 0 ? 'Close' : _props$cancelLabel,
      _props$confirmLabel = props.confirmLabel,
      confirmLabel = _props$confirmLabel === void 0 ? 'Learn More' : _props$confirmLabel,
      onOpenComplete = props.onOpenComplete,
      _props$onCloseComplet = props.onCloseComplete,
      onCloseComplete = _props$onCloseComplet === void 0 ? noop : _props$onCloseComplet,
      _props$onCancel = props.onCancel,
      onCancel = _props$onCancel === void 0 ? closeHandler : _props$onCancel,
      _props$onConfirm = props.onConfirm,
      onConfirm = _props$onConfirm === void 0 ? closeHandler : _props$onConfirm,
      _props$containerProps = props.containerProps,
      containerProps = _props$containerProps === void 0 ? emptyProps : _props$containerProps,
      _props$position = props.position,
      position = _props$position === void 0 ? _Position["default"].BOTTOM_RIGHT : _props$position;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      exiting = _useState2[0],
      setExiting = _useState2[1];

  var _useState3 = (0, _react.useState)(!props.isShown),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      exited = _useState4[0],
      setExited = _useState4[1];

  (0, _react.useEffect)(function () {
    if (isShown) {
      setExited(false);
    }
  }, [isShown]);
  var handleExited = (0, _react.useCallback)(function () {
    setExiting(false);
    setExited(true);
    onCloseComplete();
  }, [onCloseComplete]);
  var handleClose = (0, _react.useCallback)(function () {
    return setExiting(true);
  });
  var handleCancel = (0, _react.useCallback)(function () {
    onCancel(handleClose);
  }, [onCancel]);
  var handleConfirm = (0, _react.useCallback)(function () {
    onConfirm(handleClose);
  }, [onConfirm]);
  var renderChildren = (0, _react.useCallback)(function () {
    if (typeof children === 'function') {
      return children({
        close: handleClose
      });
    }

    if (typeof children === 'string') {
      return _react["default"].createElement(_typography.Paragraph, {
        size: 400,
        color: "muted"
      }, children);
    }

    return children;
  }, [children]);

  if (exited) {
    return null;
  }

  return _react["default"].createElement(_portal.Portal, null, _react["default"].createElement(_reactTransitionGroup.Transition, {
    appear: true,
    unmountOnExit: true,
    timeout: ANIMATION_DURATION,
    "in": isShown && !exiting,
    onExited: handleExited,
    onEntered: onOpenComplete
  }, function (state) {
    return _react["default"].createElement(_layers.Card, (0, _extends2["default"])({
      role: "dialog",
      backgroundColor: "white",
      elevation: 4,
      width: width,
      css: animationStyles,
      "data-state": state,
      padding: 32,
      position: "fixed"
    }, _AbsolutePosition["default"][Object.keys(_AbsolutePosition["default"]).includes(position) ? position : _Position["default"].BOTTOM_RIGHT], containerProps), _react["default"].createElement(_layers.Pane, {
      display: "flex",
      alignItems: "center",
      marginBottom: 12
    }, _react["default"].createElement(_typography.Heading, {
      is: "h4",
      size: 600,
      flex: "1"
    }, title), hasClose && _react["default"].createElement(_buttons.IconButton, {
      height: 32,
      icon: _icons.CrossIcon,
      appearance: "minimal",
      onClick: handleClose
    })), _react["default"].createElement(_layers.Pane, {
      overflowY: "auto",
      "data-state": state
    }, renderChildren()), hasFooter && _react["default"].createElement(_layers.Pane, {
      marginTop: 24,
      flexShrink: 0,
      display: "flex",
      flexDirection: "row-reverse"
    }, _react["default"].createElement(_buttons.Button, {
      appearance: "primary",
      intent: intent,
      marginLeft: 8,
      onClick: handleConfirm
    }, confirmLabel), hasCancel && _react["default"].createElement(_buttons.Button, {
      onClick: handleCancel
    }, cancelLabel)));
  }));
});
CornerDialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
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
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: _propTypes["default"].bool,

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
   * When true, the cancel button is shown.
   */
  hasCancel: _propTypes["default"].bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: _propTypes["default"].bool,

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
   * Width of the Dialog.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Props that will set position of corner dialog
   */
  position: _propTypes["default"].oneOf([_Position["default"].TOP_LEFT, _Position["default"].TOP_RIGHT, _Position["default"].BOTTOM_LEFT, _Position["default"].BOTTOM_RIGHT])
};
var _default = CornerDialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JuZXItZGlhbG9nL3NyYy9Db3JuZXJEaWFsb2cuanMiXSwibmFtZXMiOlsiYW5pbWF0aW9uRWFzaW5nIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwic3ByaW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwib3BlbkFuaW1hdGlvbiIsImNzcyIsImtleWZyYW1lcyIsImZyb20iLCJ0cmFuc2Zvcm0iLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwib3BhY2l0eSIsImFuaW1hdGlvblN0eWxlcyIsImFuaW1hdGlvbiIsImNsb3NlSGFuZGxlciIsImNsb3NlIiwibm9vcCIsImVtcHR5UHJvcHMiLCJDb3JuZXJEaWFsb2ciLCJwcm9wcyIsInRpdGxlIiwid2lkdGgiLCJjaGlsZHJlbiIsImludGVudCIsImlzU2hvd24iLCJoYXNGb290ZXIiLCJoYXNDYW5jZWwiLCJoYXNDbG9zZSIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwib25PcGVuQ29tcGxldGUiLCJvbkNsb3NlQ29tcGxldGUiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImNvbnRhaW5lclByb3BzIiwicG9zaXRpb24iLCJwb3NpdGlvbnMiLCJCT1RUT01fUklHSFQiLCJleGl0aW5nIiwic2V0RXhpdGluZyIsImV4aXRlZCIsInNldEV4aXRlZCIsImhhbmRsZUV4aXRlZCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlQ29uZmlybSIsInJlbmRlckNoaWxkcmVuIiwic3RhdGUiLCJhYnNvbHV0ZVBvc2l0aW9ucyIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsIkNyb3NzSWNvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiXSwibWFw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Y0FBYyxFQUFFb0Isc0JBQVVTLE1BbEZIOztBQW9GdkI7OztBQUdBNUIsRUFBQUEsUUFBUSxFQUFFbUIsc0JBQVVLLEtBQVYsQ0FBZ0IsQ0FDeEJ2QixxQkFBVTRCLFFBRGMsRUFFeEI1QixxQkFBVTZCLFNBRmMsRUFHeEI3QixxQkFBVThCLFdBSGMsRUFJeEI5QixxQkFBVUMsWUFKYyxDQUFoQjtBQXZGYSxDQUF6QjtlQStGZW5CLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IHsgUGFuZSwgQ2FyZCB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFBhcmFncmFwaCwgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBCdXR0b24sIEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IGFic29sdXRlUG9zaXRpb25zIGZyb20gJy4uLy4uL2NvbnN0YW50cy9zcmMvQWJzb2x1dGVQb3NpdGlvbidcbmltcG9ydCBwb3NpdGlvbnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL3NyYy9Qb3NpdGlvbidcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgLFxuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3Qgb3BlbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ29wZW5BbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gIH1cbn0pXG5cbmNvbnN0IGNsb3NlQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnY2xvc2VBbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknLFxuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0ge1xuICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtvcGVuQW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5zcHJpbmd9IGJvdGhgXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7Y2xvc2VBbmltYXRpb259IDEyMG1zICR7YW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvbn0gYm90aGBcbiAgfVxufVxuXG5jb25zdCBjbG9zZUhhbmRsZXIgPSBjbG9zZSA9PiBjbG9zZSgpXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IGVtcHR5UHJvcHMgPSB7fVxuXG5jb25zdCBDb3JuZXJEaWFsb2cgPSBtZW1vKGZ1bmN0aW9uIENvcm5lckRpYWxvZyhwcm9wcykge1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgd2lkdGggPSAzOTIsXG4gICAgY2hpbGRyZW4sXG4gICAgaW50ZW50ID0gJ25vbmUnLFxuICAgIGlzU2hvd24sXG4gICAgaGFzRm9vdGVyID0gdHJ1ZSxcbiAgICBoYXNDYW5jZWwgPSB0cnVlLFxuICAgIGhhc0Nsb3NlID0gdHJ1ZSxcbiAgICBjYW5jZWxMYWJlbCA9ICdDbG9zZScsXG4gICAgY29uZmlybUxhYmVsID0gJ0xlYXJuIE1vcmUnLFxuICAgIG9uT3BlbkNvbXBsZXRlLFxuICAgIG9uQ2xvc2VDb21wbGV0ZSA9IG5vb3AsXG4gICAgb25DYW5jZWwgPSBjbG9zZUhhbmRsZXIsXG4gICAgb25Db25maXJtID0gY2xvc2VIYW5kbGVyLFxuICAgIGNvbnRhaW5lclByb3BzID0gZW1wdHlQcm9wcyxcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9ucy5CT1RUT01fUklHSFRcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgW2V4aXRpbmcsIHNldEV4aXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtleGl0ZWQsIHNldEV4aXRlZF0gPSB1c2VTdGF0ZSghcHJvcHMuaXNTaG93bilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1Nob3duKSB7XG4gICAgICBzZXRFeGl0ZWQoZmFsc2UpXG4gICAgfVxuICB9LCBbaXNTaG93bl0pXG5cbiAgY29uc3QgaGFuZGxlRXhpdGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEV4aXRpbmcoZmFsc2UpXG4gICAgc2V0RXhpdGVkKHRydWUpXG5cbiAgICBvbkNsb3NlQ29tcGxldGUoKVxuICB9LCBbb25DbG9zZUNvbXBsZXRlXSlcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEV4aXRpbmcodHJ1ZSkpXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9uQ2FuY2VsKGhhbmRsZUNsb3NlKVxuICB9LCBbb25DYW5jZWxdKVxuXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgb25Db25maXJtKGhhbmRsZUNsb3NlKVxuICB9LCBbb25Db25maXJtXSlcblxuICBjb25zdCByZW5kZXJDaGlsZHJlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oeyBjbG9zZTogaGFuZGxlQ2xvc2UgfSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblxuICB9LCBbY2hpbGRyZW5dKVxuXG4gIGlmIChleGl0ZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UG9ydGFsPlxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgYXBwZWFyXG4gICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgdGltZW91dD17QU5JTUFUSU9OX0RVUkFUSU9OfVxuICAgICAgICBpbj17aXNTaG93biAmJiAhZXhpdGluZ31cbiAgICAgICAgb25FeGl0ZWQ9e2hhbmRsZUV4aXRlZH1cbiAgICAgICAgb25FbnRlcmVkPXtvbk9wZW5Db21wbGV0ZX1cbiAgICAgID5cbiAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBlbGV2YXRpb249ezR9XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBjc3M9e2FuaW1hdGlvblN0eWxlc31cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgcGFkZGluZz17MzJ9XG4gICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgICAgIHsuLi5hYnNvbHV0ZVBvc2l0aW9uc1tcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWJzb2x1dGVQb3NpdGlvbnMpLmluY2x1ZGVzKHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgID8gcG9zaXRpb25cbiAgICAgICAgICAgICAgICA6IHBvc2l0aW9ucy5CT1RUT01fUklHSFRcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luQm90dG9tPXsxMn0+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGlzPVwiaDRcIiBzaXplPXs2MDB9IGZsZXg9XCIxXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIHtoYXNDbG9zZSAmJiAoXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgICAgICBpY29uPXtDcm9zc0ljb259XG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICA8UGFuZSBvdmVyZmxvd1k9XCJhdXRvXCIgZGF0YS1zdGF0ZT17c3RhdGV9PlxuICAgICAgICAgICAgICB7cmVuZGVyQ2hpbGRyZW4oKX1cbiAgICAgICAgICAgIDwvUGFuZT5cblxuICAgICAgICAgICAge2hhc0Zvb3RlciAmJiAoXG4gICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXsyNH1cbiAgICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93LXJldmVyc2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29uZmlybX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIHtoYXNDYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PntjYW5jZWxMYWJlbH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKX1cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8L1BvcnRhbD5cbiAgKVxufSlcblxuQ29ybmVyRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENoaWxkcmVuIGNhbiBiZSBhIHN0cmluZywgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgKiBXaGVuIHBhc3NpbmcgYSBzdHJpbmcsIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCIgLz4gaXMgdXNlZCB0byB3cmFwIHRoZSBzdHJpbmcuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIGludGVudCBvZiB0aGUgQ29ybmVyRGlhbG9nLiBVc2VkIGZvciB0aGUgYnV0dG9uLlxuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSksXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGRpYWxvZyBpcyBzaG93bi5cbiAgICovXG4gIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgRGlhbG9nLiBUaXRsZXMgc2hvdWxkIHVzZSBUaXRsZSBDYXNlLlxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgZm9vdGVyIHdpdGggdGhlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaXMgc2hvd24uXG4gICAqL1xuICBoYXNGb290ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqIFRoaXMgZG9lcyBub3QgY2xvc2UgdGhlIERpYWxvZy4gQSBjbG9zZSBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZFxuICAgKiBhcyBhIHBhcmFtYXRlciB5b3UgY2FuIHVzZSB0byBjbG9zZSB0aGUgZGlhbG9nLlxuICAgKlxuICAgKiBgb25Db25maXJtPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgKi9cbiAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogTGFiZWwgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLlxuICAgKi9cbiAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHNob3duLlxuICAgKi9cbiAgaGFzQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgY2xvc2UgYnV0dG9uIGlzIHNob3duLlxuICAgKi9cbiAgaGFzQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogVGhpcyBjbG9zZXMgdGhlIERpYWxvZyBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBgb25DYW5jZWw9eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAqL1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgKi9cbiAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBEaWFsb2cuXG4gICAqL1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGRpYWxvZyBjb250YWluZXIuXG4gICAqL1xuICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUHJvcHMgdGhhdCB3aWxsIHNldCBwb3NpdGlvbiBvZiBjb3JuZXIgZGlhbG9nXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBwb3NpdGlvbnMuVE9QX0xFRlQsXG4gICAgcG9zaXRpb25zLlRPUF9SSUdIVCxcbiAgICBwb3NpdGlvbnMuQk9UVE9NX0xFRlQsXG4gICAgcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3JuZXJEaWFsb2dcbiJdfQ==