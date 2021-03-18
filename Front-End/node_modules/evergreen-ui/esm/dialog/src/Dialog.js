import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Paragraph, Heading } from '../../typography';
import { Overlay } from '../../overlay';
import { Button, IconButton } from '../../buttons';
import { CrossIcon } from '../../icons';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 200;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
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
var Dialog = memo(function Dialog(_ref) {
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
      return React.createElement(Paragraph, null, children);
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

    return React.createElement(Pane, {
      padding: 16,
      flexShrink: 0,
      borderBottom: "muted",
      display: "flex",
      alignItems: "center"
    }, header ? renderNode(header, close) : React.createElement(React.Fragment, null, React.createElement(Heading, {
      is: "h4",
      size: 600,
      flex: "1"
    }, title), hasClose && React.createElement(IconButton, {
      appearance: "minimal",
      icon: CrossIcon,
      onClick: function onClick() {
        return onCancel(close);
      }
    })));
  };

  var renderFooter = function renderFooter(close) {
    if (!footer && !hasFooter) {
      return undefined;
    }

    return React.createElement(Pane, {
      borderTop: "muted",
      clearfix: true
    }, React.createElement(Pane, {
      padding: 16,
      "float": "right"
    }, footer ? renderNode(footer, close) : React.createElement(React.Fragment, null, hasCancel && React.createElement(Button, {
      tabIndex: 0,
      onClick: function onClick() {
        return onCancel(close);
      }
    }, cancelLabel), React.createElement(Button, {
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

  return React.createElement(Overlay, {
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
    return React.createElement(Pane, _extends({
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
    }, containerProps), renderHeader(close), React.createElement(Pane, _extends({
      "data-state": state,
      display: "flex",
      overflow: "auto",
      padding: 16,
      flexDirection: "column",
      minHeight: minHeightContent
    }, contentContainerProps), React.createElement(Pane, null, renderChildren(close))), renderFooter(close));
  });
});
Dialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
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
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: PropTypes.bool,

  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

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
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: PropTypes.bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: PropTypes.bool,

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
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: PropTypes.object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: PropTypes.object
};
export default Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWFsb2cvc3JjL0RpYWxvZy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJjc3MiLCJQcm9wVHlwZXMiLCJQYW5lIiwiUGFyYWdyYXBoIiwiSGVhZGluZyIsIk92ZXJsYXkiLCJCdXR0b24iLCJJY29uQnV0dG9uIiwiQ3Jvc3NJY29uIiwiYW5pbWF0aW9uRWFzaW5nIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwib3BlbkFuaW1hdGlvbiIsImtleWZyYW1lcyIsImZyb20iLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwidG8iLCJjbG9zZUFuaW1hdGlvbiIsImFuaW1hdGlvblN0eWxlcyIsImFuaW1hdGlvbiIsImNsb3NlSGFuZGxlciIsImNsb3NlIiwiZW1wdHlQcm9wcyIsIkRpYWxvZyIsImNoaWxkcmVuIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjb250YWluZXJQcm9wcyIsImNvbnRlbnRDb250YWluZXJQcm9wcyIsImZvb3RlciIsImhhc0NhbmNlbCIsImhhc0Nsb3NlIiwiaGFzRm9vdGVyIiwiaGFzSGVhZGVyIiwiaGVhZGVyIiwiaW50ZW50IiwiaXNDb25maXJtRGlzYWJsZWQiLCJpc0NvbmZpcm1Mb2FkaW5nIiwiaXNTaG93biIsIm1pbkhlaWdodENvbnRlbnQiLCJvbkNhbmNlbCIsIm9uQ2xvc2VDb21wbGV0ZSIsIm9uQ29uZmlybSIsIm9uT3BlbkNvbXBsZXRlIiwib3ZlcmxheVByb3BzIiwicHJldmVudEJvZHlTY3JvbGxpbmciLCJzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MiLCJzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrIiwic2lkZU9mZnNldCIsInRpdGxlIiwidG9wT2Zmc2V0Iiwid2lkdGgiLCJzaWRlT2Zmc2V0V2l0aFVuaXQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJtYXhXaWR0aCIsInRvcE9mZnNldFdpdGhVbml0IiwibWF4SGVpZ2h0IiwicmVuZGVyQ2hpbGRyZW4iLCJyZW5kZXJOb2RlIiwibm9kZSIsInJlbmRlckhlYWRlciIsInVuZGVmaW5lZCIsInJlbmRlckZvb3RlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJzdGF0ZSIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsUUFBNEIsT0FBNUI7QUFDQSxTQUFTQyxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxPQUFwQixRQUFtQyxrQkFBbkM7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGVBQXhCO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsVUFBakIsUUFBbUMsZUFBbkM7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBRUEsSUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxZQUFZLGtDQURVO0FBRXRCQyxFQUFBQSxZQUFZO0FBRlUsQ0FBeEI7QUFLQSxJQUFNQyxrQkFBa0IsR0FBRyxHQUEzQjtBQUVBLElBQU1DLGFBQWEsR0FBR2IsR0FBRyxDQUFDYyxTQUFKLENBQWMsZUFBZCxFQUErQjtBQUNuREMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLFNBQVMsRUFBRSxZQURQO0FBRUpDLElBQUFBLE9BQU8sRUFBRTtBQUZMLEdBRDZDO0FBS25EQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkYsSUFBQUEsU0FBUyxFQUFFLFVBRFQ7QUFFRkMsSUFBQUEsT0FBTyxFQUFFO0FBRlA7QUFMK0MsQ0FBL0IsQ0FBdEI7QUFXQSxJQUFNRSxjQUFjLEdBQUduQixHQUFHLENBQUNjLFNBQUosQ0FBYyxnQkFBZCxFQUFnQztBQUNyREMsRUFBQUEs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QjNFLFNBQVMsQ0FBQzRFLE1BQTdCLENBQXBCLENBMUhVOztBQTRIakI7Ozs7O0FBS0F6QixFQUFBQSxTQUFTLEVBQUVuRCxTQUFTLENBQUNzRSxTQUFWLENBQW9CLENBQUN0RSxTQUFTLENBQUMyRSxNQUFYLEVBQW1CM0UsU0FBUyxDQUFDNEUsTUFBN0IsQ0FBcEIsQ0FqSU07O0FBbUlqQjs7OztBQUlBM0IsRUFBQUEsVUFBVSxFQUFFakQsU0FBUyxDQUFDc0UsU0FBVixDQUFvQixDQUFDdEUsU0FBUyxDQUFDMkUsTUFBWCxFQUFtQjNFLFNBQVMsQ0FBQzRFLE1BQTdCLENBQXBCLENBdklLOztBQXlJakI7Ozs7QUFJQXBDLEVBQUFBLGdCQUFnQixFQUFFeEMsU0FBUyxDQUFDc0UsU0FBVixDQUFvQixDQUFDdEUsU0FBUyxDQUFDMkUsTUFBWCxFQUFtQjNFLFNBQVMsQ0FBQzRFLE1BQTdCLENBQXBCLENBN0lEOztBQStJakI7OztBQUdBaEQsRUFBQUEsY0FBYyxFQUFFNUIsU0FBUyxDQUFDNkUsTUFsSlQ7O0FBb0pqQjs7O0FBR0FoRCxFQUFBQSxxQkFBcUIsRUFBRTdCLFNBQVMsQ0FBQzZFLE1BdkpoQjs7QUF5SmpCOzs7QUFHQS9CLEVBQUFBLG9CQUFvQixFQUFFOUMsU0FBUyxDQUFDMEUsSUE1SmY7O0FBOEpqQjs7O0FBR0E3QixFQUFBQSxZQUFZLEVBQUU3QyxTQUFTLENBQUM2RTtBQWpLUCxDQUFuQjtBQW9LQSxlQUFlckQsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgUGFyYWdyYXBoLCBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi8uLi9vdmVybGF5J1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDIwMFxuXG5jb25zdCBvcGVuQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnb3BlbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KVxuXG5jb25zdCBjbG9zZUFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2Nsb3NlQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IHtcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7b3BlbkFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9ufSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBhbmltYXRpb246IGAke2Nsb3NlQW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gIH1cbn1cblxuY29uc3QgY2xvc2VIYW5kbGVyID0gY2xvc2UgPT4gY2xvc2UoKVxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmNvbnN0IERpYWxvZyA9IG1lbW8oZnVuY3Rpb24gRGlhbG9nKHtcbiAgY2hpbGRyZW4sXG4gIGNhbmNlbExhYmVsID0gJ0NhbmNlbCcsXG4gIGNvbmZpcm1MYWJlbCA9ICdDb25maXJtJyxcbiAgY29udGFpbmVyUHJvcHMgPSBlbXB0eVByb3BzLFxuICBjb250ZW50Q29udGFpbmVyUHJvcHMsXG4gIGZvb3RlcixcbiAgaGFzQ2FuY2VsID0gdHJ1ZSxcbiAgaGFzQ2xvc2UgPSB0cnVlLFxuICBoYXNGb290ZXIgPSB0cnVlLFxuICBoYXNIZWFkZXIgPSB0cnVlLFxuICBoZWFkZXIsXG4gIGludGVudCA9ICdub25lJyxcbiAgaXNDb25maXJtRGlzYWJsZWQgPSBmYWxzZSxcbiAgaXNDb25maXJtTG9hZGluZyA9IGZhbHNlLFxuICBpc1Nob3duID0gZmFsc2UsXG4gIG1pbkhlaWdodENvbnRlbnQgPSA4MCxcbiAgb25DYW5jZWwgPSBjbG9zZUhhbmRsZXIsXG4gIG9uQ2xvc2VDb21wbGV0ZSxcbiAgb25Db25maXJtID0gY2xvc2VIYW5kbGVyLFxuICBvbk9wZW5Db21wbGV0ZSxcbiAgb3ZlcmxheVByb3BzID0gZW1wdHlQcm9wcyxcbiAgcHJldmVudEJvZHlTY3JvbGxpbmcgPSBmYWxzZSxcbiAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzID0gdHJ1ZSxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayA9IHRydWUsXG4gIHNpZGVPZmZzZXQgPSAnMTZweCcsXG4gIHRpdGxlLFxuICB0b3BPZmZzZXQgPSAnMTJ2bWluJyxcbiAgd2lkdGggPSA1NjBcbn0pIHtcbiAgY29uc3Qgc2lkZU9mZnNldFdpdGhVbml0ID0gTnVtYmVyLmlzSW50ZWdlcihzaWRlT2Zmc2V0KVxuICAgID8gYCR7c2lkZU9mZnNldH1weGBcbiAgICA6IHNpZGVPZmZzZXRcbiAgY29uc3QgbWF4V2lkdGggPSBgY2FsYygxMDAlIC0gJHtzaWRlT2Zmc2V0V2l0aFVuaXR9ICogMilgXG5cbiAgY29uc3QgdG9wT2Zmc2V0V2l0aFVuaXQgPSBOdW1iZXIuaXNJbnRlZ2VyKHRvcE9mZnNldClcbiAgICA/IGAke3RvcE9mZnNldH1weGBcbiAgICA6IHRvcE9mZnNldFxuICBjb25zdCBtYXhIZWlnaHQgPSBgY2FsYygxMDAlIC0gJHt0b3BPZmZzZXRXaXRoVW5pdH0gKiAyKWBcblxuICBjb25zdCByZW5kZXJDaGlsZHJlbiA9IGNsb3NlID0+IHtcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oeyBjbG9zZSB9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gPFBhcmFncmFwaD57Y2hpbGRyZW59PC9QYXJhZ3JhcGg+XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH1cblxuICBjb25zdCByZW5kZXJOb2RlID0gKG5vZGUsIGNsb3NlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbm9kZSh7IGNsb3NlIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckhlYWRlciA9IGNsb3NlID0+IHtcbiAgICBpZiAoIWhlYWRlciAmJiAhaGFzSGVhZGVyKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIHBhZGRpbmc9ezE2fVxuICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICBib3JkZXJCb3R0b209XCJtdXRlZFwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIHtoZWFkZXIgPyAoXG4gICAgICAgICAgcmVuZGVyTm9kZShoZWFkZXIsIGNsb3NlKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGluZyBpcz1cImg0XCIgc2l6ZT17NjAwfSBmbGV4PVwiMVwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICB7aGFzQ2xvc2UgJiYgKFxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICBpY29uPXtDcm9zc0ljb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DYW5jZWwoY2xvc2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJGb290ZXIgPSBjbG9zZSA9PiB7XG4gICAgaWYgKCFmb290ZXIgJiYgIWhhc0Zvb3Rlcikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBib3JkZXJUb3A9XCJtdXRlZFwiIGNsZWFyZml4PlxuICAgICAgICA8UGFuZSBwYWRkaW5nPXsxNn0gZmxvYXQ9XCJyaWdodFwiPlxuICAgICAgICAgIHtmb290ZXIgPyAoXG4gICAgICAgICAgICByZW5kZXJOb2RlKGZvb3RlciwgY2xvc2UpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHsvKiBDYW5jZWwgc2hvdWxkIGJlIGZpcnN0IHRvIG1ha2Ugc3VyZSBmb2N1cyBnZXRzIG9uIGl0IGZpcnN0LiAqL31cbiAgICAgICAgICAgICAge2hhc0NhbmNlbCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0YWJJbmRleD17MH0gb25DbGljaz17KCkgPT4gb25DYW5jZWwoY2xvc2UpfT5cbiAgICAgICAgICAgICAgICAgIHtjYW5jZWxMYWJlbH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdD17OH1cbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0NvbmZpcm1Mb2FkaW5nfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0NvbmZpcm1EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm0oY2xvc2UpfVxuICAgICAgICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8T3ZlcmxheVxuICAgICAgaXNTaG93bj17aXNTaG93bn1cbiAgICAgIHNob3VsZENsb3NlT25DbGljaz17c2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja31cbiAgICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcz17c2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzfVxuICAgICAgb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICBjb250YWluZXJQcm9wcz17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAuLi5vdmVybGF5UHJvcHNcbiAgICAgIH19XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZz17cHJldmVudEJvZHlTY3JvbGxpbmd9XG4gICAgPlxuICAgICAgeyh7IHN0YXRlLCBjbG9zZSB9KSA9PiAoXG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIG1heFdpZHRoPXttYXhXaWR0aH1cbiAgICAgICAgICBtYXhIZWlnaHQ9e21heEhlaWdodH1cbiAgICAgICAgICBtYXJnaW5YPXtzaWRlT2Zmc2V0V2l0aFVuaXR9XG4gICAgICAgICAgbWFyZ2luWT17dG9wT2Zmc2V0V2l0aFVuaXR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJIZWFkZXIoY2xvc2UpfVxuXG4gICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCJcbiAgICAgICAgICAgIHBhZGRpbmc9ezE2fVxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBtaW5IZWlnaHQ9e21pbkhlaWdodENvbnRlbnR9XG4gICAgICAgICAgICB7Li4uY29udGVudENvbnRhaW5lclByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYW5lPntyZW5kZXJDaGlsZHJlbihjbG9zZSl9PC9QYW5lPlxuICAgICAgICAgIDwvUGFuZT5cblxuICAgICAgICAgIHtyZW5kZXJGb290ZXIoY2xvc2UpfVxuICAgICAgICA8L1BhbmU+XG4gICAgICApfVxuICAgIDwvT3ZlcmxheT5cbiAgKVxufSlcblxuRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENoaWxkcmVuIGNhbiBiZSBhIHN0cmluZywgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgKiBXaGVuIHBhc3NpbmcgYSBzdHJpbmcsIDxQYXJhZ3JhcGggLz4gaXMgdXNlZCB0byB3cmFwIHRoZSBzdHJpbmcuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIGludGVudCBvZiB0aGUgRGlhbG9nLiBVc2VkIGZvciB0aGUgYnV0dG9uLlxuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSksXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGRpYWxvZyBpcyBzaG93bi5cbiAgICovXG4gIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgRGlhbG9nLiBUaXRsZXMgc2hvdWxkIHVzZSBUaXRsZSBDYXNlLlxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBoZWFkZXIgd2l0aCB0aGUgdGl0bGUgYW5kIGNsb3NlIGljb24gYnV0dG9uIGlzIHNob3duLlxuICAgKi9cbiAgaGFzSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogWW91IGNhbiBvdmVycmlkZSB0aGUgZGVmYXVsdCBoZWFkZXIgd2l0aCB5b3VyIG93biBjdXN0b20gY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byBwcm92aWRlIGEgY3VzdG9tIGhlYWRlciBhbmQgZm9vdGVyLCB3aGlsZVxuICAgKiBhbHNvIGVuYWJsaW5nIHlvdXIgRGlhbG9nJ3MgY29udGVudCB0byBzY3JvbGwuXG4gICAqXG4gICAqIEhlYWRlciBjYW4gZWl0aGVyIGJlIGEgUmVhY3Qgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgKi9cbiAgaGVhZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgZm9vdGVyIHdpdGggdGhlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaXMgc2hvd24uXG4gICAqL1xuICBoYXNGb290ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZvb3RlciB3aXRoIHlvdXIgb3duIGN1c3RvbSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHByb3ZpZGUgYSBjdXN0b20gaGVhZGVyIGFuZCBmb290ZXIsIHdoaWxlXG4gICAqIGFsc28gZW5hYmxpbmcgeW91ciBEaWFsb2cncyBjb250ZW50IHRvIHNjcm9sbC5cbiAgICpcbiAgICogRm9vdGVyIGNhbiBlaXRoZXIgYmUgYSBSZWFjdCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAqL1xuICBmb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHNob3duLlxuICAgKi9cbiAgaGFzQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgY2xvc2UgYnV0dG9uIGlzIHNob3duXG4gICAqL1xuICBoYXNDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqIFRoaXMgZG9lcyBub3QgY2xvc2UgdGhlIERpYWxvZy4gQSBjbG9zZSBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZFxuICAgKiBhcyBhIHBhcmFtYXRlciB5b3UgY2FuIHVzZSB0byBjbG9zZSB0aGUgZGlhbG9nLlxuICAgKlxuICAgKiBgb25Db25maXJtPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgKi9cbiAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogTGFiZWwgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLlxuICAgKi9cbiAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBzZXQgdG8gbG9hZGluZy5cbiAgICovXG4gIGlzQ29uZmlybUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBzZXQgdG8gZGlzYWJsZWQuXG4gICAqL1xuICBpc0NvbmZpcm1EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBUaGlzIGNsb3NlcyB0aGUgRGlhbG9nIGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIGBvbkNhbmNlbD17KGNsb3NlKSA9PiBjbG9zZSgpfWBcbiAgICovXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogTGFiZWwgb2YgdGhlIGNhbmNlbCBidXR0b24uXG4gICAqL1xuICBjYW5jZWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIERpYWxvZy5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFRoZSBzcGFjZSBhYm92ZSB0aGUgZGlhbG9nLlxuICAgKiBUaGlzIG9mZnNldCBpcyBhbHNvIHVzZWQgYXQgdGhlIGJvdHRvbSB3aGVuIHRoZXJlIGlzIG5vdCBlbm91Z2ggdmVydGljYWxcbiAgICogc3BhY2UgYXZhaWxhYmxlIG9uIHNjcmVlbiDigJQgYW5kIHRoZSBkaWFsb2cgc2Nyb2xscyBpbnRlcm5hbGx5LlxuICAgKi9cbiAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFRoZSBzcGFjZSBvbiB0aGUgbGVmdC9yaWdodCBzaWRlcyBvZiB0aGUgZGlhbG9nIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoXG4gICAqIGhvcml6b250YWwgc3BhY2UgYXZhaWxhYmxlIG9uIHNjcmVlbi5cbiAgICovXG4gIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIGJvZHkgY29udGVudC5cbiAgICogTWFrZXMgaXQgbGVzcyB3ZWlyZCB3aGVuIG9ubHkgc2hvd2luZyBsaXR0bGUgY29udGVudC5cbiAgICovXG4gIG1pbkhlaWdodENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBkaWFsb2cgY29udGFpbmVyLlxuICAgKi9cbiAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgY29udGVudCBjb250YWluZXIuXG4gICAqL1xuICBjb250ZW50Q29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgc2Nyb2xsaW5nIGluIHRoZSBvdXRlciBib2R5XG4gICAqL1xuICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgT3ZlcmxheSBjb21wb25lbnQuXG4gICAqL1xuICBvdmVybGF5UHJvcHM6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nXG4iXX0=