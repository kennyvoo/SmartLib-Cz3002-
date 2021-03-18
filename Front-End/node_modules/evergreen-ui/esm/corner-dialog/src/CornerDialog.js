import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { memo, useState, useEffect, useCallback } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { Pane, Card } from '../../layers';
import { Portal } from '../../portal';
import { Paragraph, Heading } from '../../typography';
import { Button, IconButton } from '../../buttons';
import absolutePositions from '../../constants/src/AbsolutePosition';
import positions from '../../constants/src/Position';
import { CrossIcon } from '../../icons';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
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
var CornerDialog = memo(function CornerDialog(props) {
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
      position = _props$position === void 0 ? positions.BOTTOM_RIGHT : _props$position;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      exiting = _useState2[0],
      setExiting = _useState2[1];

  var _useState3 = useState(!props.isShown),
      _useState4 = _slicedToArray(_useState3, 2),
      exited = _useState4[0],
      setExited = _useState4[1];

  useEffect(function () {
    if (isShown) {
      setExited(false);
    }
  }, [isShown]);
  var handleExited = useCallback(function () {
    setExiting(false);
    setExited(true);
    onCloseComplete();
  }, [onCloseComplete]);
  var handleClose = useCallback(function () {
    return setExiting(true);
  });
  var handleCancel = useCallback(function () {
    onCancel(handleClose);
  }, [onCancel]);
  var handleConfirm = useCallback(function () {
    onConfirm(handleClose);
  }, [onConfirm]);
  var renderChildren = useCallback(function () {
    if (typeof children === 'function') {
      return children({
        close: handleClose
      });
    }

    if (typeof children === 'string') {
      return React.createElement(Paragraph, {
        size: 400,
        color: "muted"
      }, children);
    }

    return children;
  }, [children]);

  if (exited) {
    return null;
  }

  return React.createElement(Portal, null, React.createElement(Transition, {
    appear: true,
    unmountOnExit: true,
    timeout: ANIMATION_DURATION,
    "in": isShown && !exiting,
    onExited: handleExited,
    onEntered: onOpenComplete
  }, function (state) {
    return React.createElement(Card, _extends({
      role: "dialog",
      backgroundColor: "white",
      elevation: 4,
      width: width,
      css: animationStyles,
      "data-state": state,
      padding: 32,
      position: "fixed"
    }, absolutePositions[Object.keys(absolutePositions).includes(position) ? position : positions.BOTTOM_RIGHT], containerProps), React.createElement(Pane, {
      display: "flex",
      alignItems: "center",
      marginBottom: 12
    }, React.createElement(Heading, {
      is: "h4",
      size: 600,
      flex: "1"
    }, title), hasClose && React.createElement(IconButton, {
      height: 32,
      icon: CrossIcon,
      appearance: "minimal",
      onClick: handleClose
    })), React.createElement(Pane, {
      overflowY: "auto",
      "data-state": state
    }, renderChildren()), hasFooter && React.createElement(Pane, {
      marginTop: 24,
      flexShrink: 0,
      display: "flex",
      flexDirection: "row-reverse"
    }, React.createElement(Button, {
      appearance: "primary",
      intent: intent,
      marginLeft: 8,
      onClick: handleConfirm
    }, confirmLabel), hasCancel && React.createElement(Button, {
      onClick: handleCancel
    }, cancelLabel)));
  }));
});
CornerDialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * When true, the dialog is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: PropTypes.node,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: PropTypes.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: PropTypes.string,

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: PropTypes.string,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that will set position of corner dialog
   */
  position: PropTypes.oneOf([positions.TOP_LEFT, positions.TOP_RIGHT, positions.BOTTOM_LEFT, positions.BOTTOM_RIGHT])
};
export default CornerDialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JuZXItZGlhbG9nL3NyYy9Db3JuZXJEaWFsb2cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsImNzcyIsIlByb3BUeXBlcyIsIlRyYW5zaXRpb24iLCJQYW5lIiwiQ2FyZCIsIlBvcnRhbCIsIlBhcmFncmFwaCIsIkhlYWRpbmciLCJCdXR0b24iLCJJY29uQnV0dG9uIiwiYWJzb2x1dGVQb3NpdGlvbnMiLCJwb3NpdGlvbnMiLCJDcm9zc0ljb24iLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJzcHJpbmciLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRyYW5zZm9ybSIsInRvIiwiY2xvc2VBbmltYXRpb24iLCJvcGFjaXR5IiwiYW5pbWF0aW9uU3R5bGVzIiwiYW5pbWF0aW9uIiwiY2xvc2VIYW5kbGVyIiwiY2xvc2UiLCJub29wIiwiZW1wdHlQcm9wcyIsIkNvcm5lckRpYWxvZyIsInByb3BzIiwidGl0bGUiLCJ3aWR0aCIsImNoaWxkcmVuIiwiaW50ZW50IiwiaXNTaG93biIsImhhc0Zvb3RlciIsImhhc0NhbmNlbCIsImhhc0Nsb3NlIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJvbk9wZW5Db21wbGV0ZSIsIm9uQ2xvc2VDb21wbGV0ZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwiY29udGFpbmVyUHJvcHMiLCJwb3NpdGlvbiIsIkJPVFRPTV9SSUdIVCIsImV4aXRpbmciLCJzZXRFeGl0aW5nIiwiZXhpdGVkIiwic2V0RXhpdGVkIiwiaGFuZGxlRXhpdGVkIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVDb25maXJtIiwicmVuZGVyQ2hpbGRyZW4iLCJzdGF0ZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFFBQXRCLEVBQWdDQyxTQUFoQyxFQUEyQ0MsV0FBM0MsUUFBOEQsT0FBOUQ7QUFDQSxTQUFTQyxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsd0JBQTNCO0FBQ0EsU0FBU0MsSUFBVCxFQUFlQyxJQUFmLFFBQTJCLGNBQTNCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixjQUF2QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLE9BQXBCLFFBQW1DLGtCQUFuQztBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLFVBQWpCLFFBQW1DLGVBQW5DO0FBQ0EsT0FBT0MsaUJBQVAsTUFBOEIsc0NBQTlCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw4QkFBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBRUEsSUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxZQUFZLGtDQURVO0FBRXRCQyxFQUFBQSxZQUFZLGdDQUZVO0FBR3RCQyxFQUFBQSxNQUFNO0FBSGdCLENBQXhCO0FBTUEsSUFBTUMsa0JBQWtCLEdBQUcsR0FBM0I7QUFFQSxJQUFNQyxhQUFhLEdBQUdsQixHQUFHLENBQUNtQixTQUFKLENBQWMsZUFBZCxFQUErQjtBQUNuREMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLFNBQVMsRUFBRTtBQURQLEdBRDZDO0FBSW5EQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkQsSUFBQUEsU0FBUyxFQUFFO0FBRFQ7QUFKK0MsQ0FBL0IsQ0FBdEI7QUFTQSxJQUFNRSxjQUFjLEdBQUd2QixHQUFHLENBQUNtQixTQUFKLENBQWMsZ0JB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dCwgeyBtZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgeyBQYW5lLCBDYXJkIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgUGFyYWdyYXBoLCBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgYWJzb2x1dGVQb3NpdGlvbnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL3NyYy9BYnNvbHV0ZVBvc2l0aW9uJ1xuaW1wb3J0IHBvc2l0aW9ucyBmcm9tICcuLi8uLi9jb25zdGFudHMvc3JjL1Bvc2l0aW9uJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNwcmluZzogYGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjE3NSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCBvcGVuQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnb3BlbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgfVxufSlcblxuY29uc3QgY2xvc2VBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdjbG9zZUFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC45KScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSB7XG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBhbmltYXRpb246IGAke29wZW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ30gYm90aGBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtjbG9zZUFuaW1hdGlvbn0gMTIwbXMgJHthbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9ufSBib3RoYFxuICB9XG59XG5cbmNvbnN0IGNsb3NlSGFuZGxlciA9IGNsb3NlID0+IGNsb3NlKClcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IENvcm5lckRpYWxvZyA9IG1lbW8oZnVuY3Rpb24gQ29ybmVyRGlhbG9nKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICB3aWR0aCA9IDM5MixcbiAgICBjaGlsZHJlbixcbiAgICBpbnRlbnQgPSAnbm9uZScsXG4gICAgaXNTaG93bixcbiAgICBoYXNGb290ZXIgPSB0cnVlLFxuICAgIGhhc0NhbmNlbCA9IHRydWUsXG4gICAgaGFzQ2xvc2UgPSB0cnVlLFxuICAgIGNhbmNlbExhYmVsID0gJ0Nsb3NlJyxcbiAgICBjb25maXJtTGFiZWwgPSAnTGVhcm4gTW9yZScsXG4gICAgb25PcGVuQ29tcGxldGUsXG4gICAgb25DbG9zZUNvbXBsZXRlID0gbm9vcCxcbiAgICBvbkNhbmNlbCA9IGNsb3NlSGFuZGxlcixcbiAgICBvbkNvbmZpcm0gPSBjbG9zZUhhbmRsZXIsXG4gICAgY29udGFpbmVyUHJvcHMgPSBlbXB0eVByb3BzLFxuICAgIHBvc2l0aW9uID0gcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBbZXhpdGluZywgc2V0RXhpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2V4aXRlZCwgc2V0RXhpdGVkXSA9IHVzZVN0YXRlKCFwcm9wcy5pc1Nob3duKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU2hvd24pIHtcbiAgICAgIHNldEV4aXRlZChmYWxzZSlcbiAgICB9XG4gIH0sIFtpc1Nob3duXSlcblxuICBjb25zdCBoYW5kbGVFeGl0ZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0RXhpdGluZyhmYWxzZSlcbiAgICBzZXRFeGl0ZWQodHJ1ZSlcblxuICAgIG9uQ2xvc2VDb21wbGV0ZSgpXG4gIH0sIFtvbkNsb3NlQ29tcGxldGVdKVxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0RXhpdGluZyh0cnVlKSlcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgb25DYW5jZWwoaGFuZGxlQ2xvc2UpXG4gIH0sIFtvbkNhbmNlbF0pXG5cbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvbkNvbmZpcm0oaGFuZGxlQ2xvc2UpXG4gIH0sIFtvbkNvbmZpcm1dKVxuXG4gIGNvbnN0IHJlbmRlckNoaWxkcmVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7IGNsb3NlOiBoYW5kbGVDbG9zZSB9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFyYWdyYXBoIHNpemU9ezQwMH0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH0sIFtjaGlsZHJlbl0pXG5cbiAgaWYgKGV4aXRlZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQb3J0YWw+XG4gICAgICA8VHJhbnNpdGlvblxuICAgICAgICBhcHBlYXJcbiAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICB0aW1lb3V0PXtBTklNQVRJT05fRFVSQVRJT059XG4gICAgICAgIGluPXtpc1Nob3duICYmICFleGl0aW5nfVxuICAgICAgICBvbkV4aXRlZD17aGFuZGxlRXhpdGVkfVxuICAgICAgICBvbkVudGVyZWQ9e29uT3BlbkNvbXBsZXRlfVxuICAgICAgPlxuICAgICAgICB7c3RhdGUgPT4gKFxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICBwYWRkaW5nPXszMn1cbiAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgey4uLmFic29sdXRlUG9zaXRpb25zW1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhYnNvbHV0ZVBvc2l0aW9ucykuaW5jbHVkZXMocG9zaXRpb24pXG4gICAgICAgICAgICAgICAgPyBwb3NpdGlvblxuICAgICAgICAgICAgICAgIDogcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYXJnaW5Cb3R0b209ezEyfT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgaXM9XCJoNFwiIHNpemU9ezYwMH0gZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAge2hhc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgICAgIGljb249e0Nyb3NzSWNvbn1cbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1BhbmU+XG5cbiAgICAgICAgICAgIDxQYW5lIG92ZXJmbG93WT1cImF1dG9cIiBkYXRhLXN0YXRlPXtzdGF0ZX0+XG4gICAgICAgICAgICAgIHtyZW5kZXJDaGlsZHJlbigpfVxuICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICB7aGFzRm9vdGVyICYmIChcbiAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezI0fVxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3ctcmV2ZXJzZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25maXJtfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAge2hhc0NhbmNlbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0+e2NhbmNlbExhYmVsfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApfVxuICAgICAgPC9UcmFuc2l0aW9uPlxuICAgIDwvUG9ydGFsPlxuICApXG59KVxuXG5Db3JuZXJEaWFsb2cucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ2hpbGRyZW4gY2FuIGJlIGEgc3RyaW5nLCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAqIFdoZW4gcGFzc2luZyBhIHN0cmluZywgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIiAvPiBpcyB1c2VkIHRvIHdyYXAgdGhlIHN0cmluZy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgaW50ZW50IG9mIHRoZSBDb3JuZXJEaWFsb2cuIFVzZWQgZm9yIHRoZSBidXR0b24uXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgZGlhbG9nIGlzIHNob3duLlxuICAgKi9cbiAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSBEaWFsb2cuIFRpdGxlcyBzaG91bGQgdXNlIFRpdGxlIENhc2UuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBmb290ZXIgd2l0aCB0aGUgY2FuY2VsIGFuZCBjb25maXJtIGJ1dHRvbiBpcyBzaG93bi5cbiAgICovXG4gIGhhc0Zvb3RlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY29uZmlybSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogVGhpcyBkb2VzIG5vdCBjbG9zZSB0aGUgRGlhbG9nLiBBIGNsb3NlIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkXG4gICAqIGFzIGEgcGFyYW1hdGVyIHlvdSBjYW4gdXNlIHRvIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAqXG4gICAqIGBvbkNvbmZpcm09eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAqL1xuICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBMYWJlbCBvZiB0aGUgY29uZmlybSBidXR0b24uXG4gICAqL1xuICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGNhbmNlbCBidXR0b24gaXMgc2hvd24uXG4gICAqL1xuICBoYXNDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjbG9zZSBidXR0b24gaXMgc2hvd24uXG4gICAqL1xuICBoYXNDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBUaGlzIGNsb3NlcyB0aGUgRGlhbG9nIGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIGBvbkNhbmNlbD17KGNsb3NlKSA9PiBjbG9zZSgpfWBcbiAgICovXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogTGFiZWwgb2YgdGhlIGNhbmNlbCBidXR0b24uXG4gICAqL1xuICBjYW5jZWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIERpYWxvZy5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgZGlhbG9nIGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQcm9wcyB0aGF0IHdpbGwgc2V0IHBvc2l0aW9uIG9mIGNvcm5lciBkaWFsb2dcbiAgICovXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIHBvc2l0aW9ucy5UT1BfTEVGVCxcbiAgICBwb3NpdGlvbnMuVE9QX1JJR0hULFxuICAgIHBvc2l0aW9ucy5CT1RUT01fTEVGVCxcbiAgICBwb3NpdGlvbnMuQk9UVE9NX1JJR0hUXG4gIF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvcm5lckRpYWxvZ1xuIl19