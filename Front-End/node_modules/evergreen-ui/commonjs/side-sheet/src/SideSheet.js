"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _overlay = require("../../overlay");

var _constants = require("../../constants");

var _SheetClose = _interopRequireDefault(require("./SheetClose"));

var _paneProps, _subpaneProps, _animationStylesClass;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var paneProps = (_paneProps = {}, (0, _defineProperty2["default"])(_paneProps, _constants.Position.LEFT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  left: 0,
  right: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.RIGHT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  right: 0,
  left: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.TOP, {
  width: '100vw',
  position: 'absolute',
  maxHeight: '100vh',
  top: 0,
  bottom: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.BOTTOM, {
  width: '100vw',
  maxHeight: '100vh',
  position: 'absolute',
  bottom: 0,
  top: 'auto'
}), _paneProps);
var subpaneProps = (_subpaneProps = {}, (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.LEFT, {
  height: '100vh'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.RIGHT, {
  height: '100vh'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.TOP, {
  width: '100vw'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.BOTTOM, {
  width: '100vw'
}), _subpaneProps);
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;

var withAnimations = function withAnimations(animateIn, animateOut) {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: "".concat(animateIn, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]': {
      animation: "".concat(animateOut, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};

var animationStylesClass = (_animationStylesClass = {}, (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.LEFT, _objectSpread({
  transform: "translateX(-100%)"
}, withAnimations(_glamor.css.keyframes('anchoredLeftSlideInAnimation', {
  from: {
    transform: "translateX(-100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), _glamor.css.keyframes('anchoredLeftSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(-100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.RIGHT, _objectSpread({
  transform: "translateX(100%)"
}, withAnimations(_glamor.css.keyframes('anchoredRightSlideInAnimation', {
  from: {
    transform: "translateX(100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), _glamor.css.keyframes('anchoredRightSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.TOP, _objectSpread({
  transform: "translateY(-100%)"
}, withAnimations(_glamor.css.keyframes('anchoredTopSlideInAnimation', {
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), _glamor.css.keyframes('anchoredTopSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.BOTTOM, _objectSpread({
  transform: "translateY(100%)"
}, withAnimations(_glamor.css.keyframes('anchoredBottomSlideInAnimation', {
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), _glamor.css.keyframes('anchoredBottomSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(100%)"
  }
})))), _animationStylesClass);

var noop = function noop() {};

var SideSheet = (0, _react.memo)(function SideSheet(props) {
  var _props$width = props.width,
      width = _props$width === void 0 ? 620 : _props$width,
      isShown = props.isShown,
      children = props.children,
      containerProps = props.containerProps,
      _props$onOpenComplete = props.onOpenComplete,
      onOpenComplete = _props$onOpenComplete === void 0 ? noop : _props$onOpenComplete,
      _props$onCloseComplet = props.onCloseComplete,
      onCloseComplete = _props$onCloseComplet === void 0 ? noop : _props$onCloseComplet,
      onBeforeClose = props.onBeforeClose,
      _props$shouldCloseOnO = props.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _props$shouldCloseOnO === void 0 ? true : _props$shouldCloseOnO,
      _props$shouldCloseOnE = props.shouldCloseOnEscapePress,
      shouldCloseOnEscapePress = _props$shouldCloseOnE === void 0 ? true : _props$shouldCloseOnE,
      _props$position = props.position,
      position = _props$position === void 0 ? _constants.Position.RIGHT : _props$position,
      preventBodyScrolling = props.preventBodyScrolling;
  return _react["default"].createElement(_overlay.Overlay, {
    isShown: isShown,
    shouldCloseOnClick: shouldCloseOnOverlayClick,
    shouldCloseOnEscapePress: shouldCloseOnEscapePress,
    onBeforeClose: onBeforeClose,
    onExited: onCloseComplete,
    onEntered: onOpenComplete,
    preventBodyScrolling: preventBodyScrolling
  }, function (_ref) {
    var state = _ref.state,
        close = _ref.close;
    return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
      width: width
    }, paneProps[position], {
      css: animationStylesClass[position],
      "data-state": state
    }), _react["default"].createElement(_SheetClose["default"], {
      position: position,
      "data-state": state,
      isClosing: false,
      onClick: close
    }), _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
      elevation: 4,
      backgroundColor: "white",
      overflowY: "auto",
      maxHeight: "100vh",
      "data-state": state,
      width: width
    }, subpaneProps[position], containerProps), typeof children === 'function' ? children({
      close: close
    }) : children));
  });
});
SideSheet.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * When true, the Side Sheet is shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: _propTypes["default"].func,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Width of the SideSheet.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.BOTTOM, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: _propTypes["default"].bool
};
var _default = SideSheet;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaWRlU2hlZXQuanMiXSwibmFtZXMiOlsicGFuZVByb3BzIiwiUG9zaXRpb24iLCJMRUZUIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsIlJJR0hUIiwiVE9QIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJCT1RUT00iLCJzdWJwYW5lUHJvcHMiLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJ3aXRoQW5pbWF0aW9ucyIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXNDbGFzcyIsInRyYW5zZm9ybSIsImNzcyIsImtleWZyYW1lcyIsImZyb20iLCJ0byIsIm5vb3AiLCJTaWRlU2hlZXQiLCJwcm9wcyIsImlzU2hvd24iLCJjaGlsZHJlbiIsImNvbnRhaW5lclByb3BzIiwib25PcGVuQ29tcGxldGUiLCJvbkNsb3NlQ29tcGxldGUiLCJvbkJlZm9yZUNsb3NlIiwic2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwic3RhdGUiLCJjbG9zZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxrRUFDWkMsb0JBQVNDLElBREcsRUFDSTtBQUNmQyxFQUFBQSxNQUFNLEVBQUUsT0FETztBQUVmQyxFQUFBQSxRQUFRLEVBQUUsT0FGSztBQUdmQyxFQUFBQSxRQUFRLEVBQUUsVUFISztBQUlmQyxFQUFBQSxJQUFJLEVBQUUsQ0FKUztBQUtmQyxFQUFBQSxLQUFLLEVBQUU7QUFMUSxDQURKLGdEQVFaTixvQkFBU08sS0FSRyxFQVFLO0FBQ2hCTCxFQUFBQSxNQUFNLEVBQUUsT0FEUTtBQUVoQkMsRUFBQUEsUUFBUSxFQUFFLE9BRk07QUFHaEJDLEVBQUFBLFFBQVEsRUFBRSxVQUhNO0FBSWhCRSxFQUFBQSxLQUFLLEVBQUUsQ0FKUztBQUtoQkQsRUFBQUEsSUFBSSxFQUFFO0FBTFUsQ0FSTCxnREFlWkwsb0JBQVNRLEdBZkcsRUFlRztBQUNkQyxFQUFBQSxLQUFLLEVBQUUsT0FETztBQUVkTCxFQUFBQSxRQUFRLEVBQUUsVUFGSTtBQUdkTSxFQUFBQSxTQUFTLEVBQUUsT0FIRztBQUlkQyxFQUFBQSxHQUFHLEVBQUUsQ0FKUztBQUtkQyxFQUFBQSxNQUFNLEVBQUU7QUFMTSxDQWZILGdEQXNCWlosb0JBQVNhLE1BdEJHLEVBc0JNO0FBQ2pCSixFQUFBQSxLQUFLLEVBQUUsT0FEVTtBQUVqQkMsRUFBQUEsU0FBUyxFQUFFLE9BRk07QUFHakJOLEVBQUFBLFFBQVEsRUFBRSxVQUhPO0FBSWpCUSxFQUFBQSxNQUFNLEVBQUUsQ0FKUztBQUtqQkQsRUFBQUEsR0FBRyxFQUFFO0FBTFksQ0F0Qk4sY0FBZjtBQStCQSxJQUFNRyxZQUFZLHdFQUNmZCxvQkFBU0MsSUFETSxFQUNDO0FBQ2ZDLEVBQUFBLE1BQU0sRUFBRTtBQURPLENBREQsbURBSWZGLG9CQUFTTyxLQUpNLEVBSUU7QUFDaEJMLEVBQUFBLE1BQU0sRUFBRTtBQURRLENBSkYsbURBT2ZGLG9CQUFTUSxHQVBNLEVBT0E7QUFDZEMsRUFBQUEsS0FBSyxFQUFFO0FBRE8sQ0FQQSxtREFVZlQsb0JBQVNhLE1BVk0sRUFVRztBQUNqQkosRUFBQUEsS0FBSyxFQUFFO0FBRFUsQ0FWSCxpQkFBbEI7QUFlQSxJQUFNTSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLFlBQVksa0NBRFU7QUFFdEJDLEVBQUFBLFlBQVk7QUFGVSxDQUF4QjtBQUtBLElBQU1DLGtCQUFrQixHQUFHLEdBQTNCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsU0FBRCxFQUFZQyxVQUFaLEVBQTJCO0FBQ2hELFNBQU87QUFDTCx5REFBcUQ7QUFDbkRDLE1BQUFBLFNBQVMsWUFBS0YsU0FBTCxjQUFrQkYsa0JBQWxCLGdCQUEwQ0gsZUFBZSxDQUFDQyxZQUExRDtBQUQwQyxLQURoRDtBQUlMLCtCQUEyQjtBQUN6Qk0sTUFBQUEsU0FBUyxZQUFLRCxVQUFMLGNBQW1CSCxrQkFBbkIsZ0JBQTJDSCxlQUFlLENBQUNFLFlBQTNEO0FBRGdCO0FBSnRCLEdBQVA7QUFRRCxDQVREOztBQVdBLElBQU1NLG9CQUFvQix3RkFDdkJ2QixvQkFBU0MsSUFEYztBQUV0QnVCLEVBQUFBLFNBQVM7QUFGYSxHQUduQkwsY0FBYyxDQUNmTSxZQUFJQyxTQUFKLENBQWMsOEJBQWQsRUFBOEM7QUFDNUNDLEVBQUFBLElBQUksRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVgsR0FEc0M7QUFFNUNJLEVBQUFBLEVBQUUsRUFBRTtBQUFFSixJQUFBQSxTQUFTO0FBQVg7QUFGd0MsQ0FBOUMsQ0FEZSxFQUtmQyxZQUFJQyxTQUFKLENBQWMsK0JBQWQsRUFBK0M7QUFDN0NDLEVBQUFBLElBQUksRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVgsR0FEdUM7QUFFN0NJLEVBQUFBLEVBQUUsRUFBRTtBQUFFSixJQUFBQSxTQUFTO0FBQVg7QUFGeUMsQ0FBL0MsQ0FMZSxDQUhLLDREQWN2QnhCLG9CQUFTTyxLQWRjO0FBZXRCaUIsRUFBQUEsU0FBUztBQWZhLEdBZ0JuQkwsY0FBYyxDQUNmTSxZQUFJQyxTQUFKLENBQWMsK0JBQWQsRUFBK0M7QUFDN0NDLEVBQUFBLElBQUksRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVgsR0FEdUM7QUFFN0NJLEVBQUFBLEVBQUUsRUFBRTtBQUFFSixJQUFBQSxTQUFTO0FBQVg7QUFGeUMsQ0FBL0MsQ0FEZSxFQUtmQyxZQUFJQyxTQUFKLENBQWMsZ0NBQWQsRUFBZ0Q7QUFDOUNDLEVBQUFBLElBQUksRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVgsR0FEd0M7QUFFOUNJLEVBQUFBLEVBQUUsRUFBRTtBQUFFSixJQUFBQSxTQUFTO0FBQVg7QUFGMEMsQ0FBaEQsQ0FMZSxDQWhCSyw0REEyQnZCeEIsb0JBQVNRLEdBM0JjO0FBNEJ0QmdCLEVBQUFBLFNBQVM7QUE1QmEsR0E2Qm5CTCxjQUFjLENBQ2ZNLFlBQUlDLFNBQUosQ0FBYyw2QkFBZCxFQUE2QztBQUMzQ0MsRUFBQUEsSUFBSSxFQUFFO0FBQUVILElBQUFBLFNBQVM7QUFBWCxHQURxQztBQUUzQ0ksRUFBQUEsRUFBRSxFQUFFO0FBQUVKLElBQUFBLFNBQVM7QUFBWDtBQUZ1QyxDQUE3QyxDQURlLEVBS2ZDLFlBQUlDLFNBQUosQ0FBYyw4QkFBZCxFQUE4QztBQUM1Q0MsRUFBQUEsSUFBSSxFQUFFO0FBQUVILElBQUFBLFNBQVM7QUFBWCxHQURzQztBQUU1Q0ksRUFBQUEsRUFBRSxFQUFFO0FBQUVKLElBQUFBLFNBQVM7QUFBWDtBQUZ3QyxDQUE5QyxDQUxlLENBN0JLLDREQXdDdkJ4QixvQkFBU2EsTUF4Q2M7QUF5Q3RCVyxFQUFBQSxTQUFTO0FBekNhLEdBMENuQkwsY0FBYyxDQUNmTSxZQUFJQyxTQUFKLENBQWMsZ0NBQWQsRUFBZ0Q7QUFDOUNDLEVBQUFBLElBQUksRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVgsR0FEd0M7QUFFOUNJLEVBQUFBLEVBQUUsRUFBRTtBQUFFSixJQUFBQSxTQUFTO0FBQVg7QUFGMEMsQ0FBaEQsQ0FEZSxFQUtmQyxZQUFJQyxTQUFKLENBQWMsaUNBQWQsRUFBaUQ7QUFDL0NDLEVBQUFBLElBQUksRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVgsR0FEeUM7QUFFL0NJLEVBQUFBLEVBQUUsRUFBRTtBQUFFSixJQUFBQSxTQUFTO0FBQVg7QUFGMkMsQ0FBakQsQ0FMZSxDQTFDSywwQkFBMUI7O0FBdURBLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsaUJBQUssU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxxQkFhM0NBLEtBYjJDLENBRTdDdEIsS0FGNkM7QUFBQSxNQUU3Q0EsS0FGNkMsNkJBRXJDLEdBRnFDO0FBQUEsTUFHN0N1QixPQUg2QyxHQWEzQ0QsS0FiMkMsQ0FHN0NDLE9BSDZDO0FBQUEsTUFJN0NDLFFBSjZDLEdBYTNDRixLQWIyQyxDQUk3Q0UsUUFKNkM7QUFBQSxNQUs3Q0MsY0FMNkMsR0FhM0NILEtBYjJDLENBSzdDRyxjQUw2QztBQUFBLDhCQWEzQ0gsS0FiMkMsQ0FNN0NJLGNBTjZDO0FBQUEsTUFNN0NBLGNBTjZDLHNDQU01Qk4sSUFONEI7QUFBQSw4QkFhM0NFLEtBYjJDLENBTzdDSyxlQVA2QztBQUFBLE1BTzdDQSxlQVA2QyxzQ0FPM0JQLElBUDJCO0FBQUEsTUFRN0NRLGFBUjZDLEdBYTNDTixLQWIyQyxDQVE3Q00sYUFSNkM7QUFBQSw4QkFhM0NOLEtBYjJDLENBUzdDTyx5QkFUNkM7QUFBQSxNQVM3Q0EseUJBVDZDLHNDQVNqQixJQVRpQjtBQUFBLDhCQWEzQ1AsS0FiMkMsQ0FVN0NRLHdCQVY2QztBQUFBLE1BVTdDQSx3QkFWNkMsc0NBVWxCLElBVmtCO0FBQUEsd0JBYTNDUixLQWIyQyxDQVc3QzNCLFFBWDZDO0FBQUEsTUFXN0NBLFFBWDZDLGdDQVdsQ0osb0JBQVNPLEtBWHlCO0FBQUEsTUFZN0NpQyxvQkFaNkMsR0FhM0NULEtBYjJDLENBWTdDUyxvQkFaNkM7QUFlL0MsU0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFUixPQURYO0FBRUUsSUFBQSxrQkFBa0IsRUFBRU0seUJBRnRCO0FBR0UsSUFBQSx3QkFBd0IsRUFBRUMsd0JBSDVCO0FBSUUsSUFBQSxhQUFhLEVBQUVGLGFBSmpCO0FBS0UsSUFBQSxRQUFRLEVBQUVELGVBTFo7QUFNRSxJQUFBLFNBQVMsRUFBRUQsY0FOYjtBQU9FLElBQUEsb0JBQW9CLEVBQUVLO0FBUHhCLEtBU0c7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxRQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxXQUNDLGdDQUFDLFlBQUQ7QUFDRSxNQUFBLEtBQUssRUFBRWpDO0FBRFQsT0FFTVYsU0FBUyxDQUFDSyxRQUFELENBRmY7QUFHRSxNQUFBLEdBQUcsRUFBRW1CLG9CQUFvQixDQUFDbkIsUUFBRCxDQUgzQjtBQUlFLG9CQUFZcUM7QUFKZCxRQU1FLGdDQUFDLHNCQUFEO0FBQ0UsTUFBQSxRQUFRLEVBQUVyQyxRQURaO0FBRUUsb0JBQVlxQyxLQUZkO0FBR0UsTUFBQSxTQUFTLEVBQUUsS0FIYjtBQUlFLE1BQUEsT0FBTyxFQUFFQztBQUpYLE1BTkYsRUFZRSxnQ0FBQyxZQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUUsQ0FEYjtBQUVFLE1BQUEsZUFBZSxFQUFDLE9BRmxCO0FBR0UsTUFBQSxTQUFTLEVBQUMsTUFIWjtBQUlFLE1BQUEsU0FBUyxFQUFDLE9BSlo7QUFLRSxvQkFBWUQsS0FMZDtBQU1FLE1BQUEsS0FBSyxFQUFFaEM7QUFOVCxPQU9NSyxZQUFZLENBQUNWLFFBQUQsQ0FQbEIsRUFRTThCLGNBUk4sR0FVRyxPQUFPRCxRQUFQLEtBQW9CLFVBQXBCLEdBQWlDQSxRQUFRLENBQUM7QUFBRVMsTUFBQUEsS0FBSyxFQUFMQTtBQUFGLEtBQUQsQ0FBekMsR0FBdURULFFBVjFELENBWkYsQ0FERDtBQUFBLEdBVEgsQ0FERjtBQXVDRCxDQXREaUIsQ0FBbEI7QUF3REFILFNBQVMsQ0FBQ2EsU0FBVixHQUFzQjtBQUNwQjs7O0FBR0FWLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0Qsc0JBQVVFLElBQVgsRUFBaUJGLHNCQUFVRyxJQUEzQixDQUFwQixFQUFzREMsVUFKNUM7O0FBTXBCOzs7QUFHQWhCLEVBQUFBLE9BQU8sRUFBRVksc0JBQVVLLElBVEM7O0FBV3BCOzs7QUFHQWIsRUFBQUEsZUFBZSxFQUFFUSxzQkFBVUcsSUFkUDs7QUFnQnBCOzs7QUFHQVosRUFBQUEsY0FBYyxFQUFFUyxzQkFBVUcsSUFuQk47O0FBcUJwQjs7Ozs7QUFLQVYsRUFBQUEsYUFBYSxFQUFFTyxzQkFBVUcsSUExQkw7O0FBNEJwQjs7O0FBR0FULEVBQUFBLHlCQUF5QixFQUFFTSxzQkFBVUssSUEvQmpCOztBQWlDcEI7OztBQUdBVixFQUFBQSx3QkFBd0IsRUFBRUssc0JBQVVLLElBcENoQjs7QUFzQ3BCOzs7QUFHQXhDLEVBQUFBLEtBQUssRUFBRW1DLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVTSxNQUFYLEVBQW1CTixzQkFBVU8sTUFBN0IsQ0FBcEIsQ0F6Q2E7O0FBMkNwQjs7O0FBR0FqQixFQUFBQSxjQUFjLEVBQUVVLHNCQUFVUSxNQTlDTjs7QUFnRHBCOzs7QUFHQWhELEVBQUFBLFFBQVEsRUFBRXdDLHNCQUFVUyxLQUFWLENBQWdCLENBQ3hCckQsb0JBQVNRLEdBRGUsRUFFeEJSLG9CQUFTYSxNQUZlLEVBR3hCYixvQkFBU0MsSUFIZSxFQUl4QkQsb0JBQVNPLEtBSmUsQ0FBaEIsQ0FuRFU7O0FBMERwQjs7O0FBR0FpQyxFQUFBQSxvQkFBb0IsRUFBRUksc0JBQVVLO0FBN0RaLENBQXRCO2VBZ0VlbkIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uLy4uL292ZXJsYXknXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBTaGVldENsb3NlIGZyb20gJy4vU2hlZXRDbG9zZSdcblxuY29uc3QgcGFuZVByb3BzID0ge1xuICBbUG9zaXRpb24uTEVGVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgbWF4V2lkdGg6ICcxMDB2dycsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogJ2F1dG8nXG4gIH0sXG4gIFtQb3NpdGlvbi5SSUdIVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgbWF4V2lkdGg6ICcxMDB2dycsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcmlnaHQ6IDAsXG4gICAgbGVmdDogJ2F1dG8nXG4gIH0sXG4gIFtQb3NpdGlvbi5UT1BdOiB7XG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwdmgnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uQk9UVE9NXToge1xuICAgIHdpZHRoOiAnMTAwdncnLFxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDAsXG4gICAgdG9wOiAnYXV0bydcbiAgfVxufVxuXG5jb25zdCBzdWJwYW5lUHJvcHMgPSB7XG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIGhlaWdodDogJzEwMHZoJ1xuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnXG4gIH0sXG4gIFtQb3NpdGlvbi5UT1BdOiB7XG4gICAgd2lkdGg6ICcxMDB2dydcbiAgfSxcbiAgW1Bvc2l0aW9uLkJPVFRPTV06IHtcbiAgICB3aWR0aDogJzEwMHZ3J1xuICB9XG59XG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IHdpdGhBbmltYXRpb25zID0gKGFuaW1hdGVJbiwgYW5pbWF0ZU91dCkgPT4ge1xuICByZXR1cm4ge1xuICAgICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICAgIGFuaW1hdGlvbjogYCR7YW5pbWF0ZUlufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5kZWNlbGVyYXRpb259IGJvdGhgXG4gICAgfSxcbiAgICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICAgIGFuaW1hdGlvbjogYCR7YW5pbWF0ZU91dH0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9ufSBib3RoYFxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXNDbGFzcyA9IHtcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRMZWZ0U2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZExlZnRTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5SSUdIVF06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkUmlnaHRTbGlkZUluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRSaWdodFNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkVG9wU2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFRvcFNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTEwMCUpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLkJPVFRPTV06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkQm90dG9tU2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDEwMCUpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkQm90dG9tU2xpZGVPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IFNpZGVTaGVldCA9IG1lbW8oZnVuY3Rpb24gU2lkZVNoZWV0KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCA9IDYyMCxcbiAgICBpc1Nob3duLFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbnRhaW5lclByb3BzLFxuICAgIG9uT3BlbkNvbXBsZXRlID0gbm9vcCxcbiAgICBvbkNsb3NlQ29tcGxldGUgPSBub29wLFxuICAgIG9uQmVmb3JlQ2xvc2UsXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayA9IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzID0gdHJ1ZSxcbiAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLlJJR0hULFxuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPE92ZXJsYXlcbiAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICBzaG91bGRDbG9zZU9uQ2xpY2s9e3Nob3VsZENsb3NlT25PdmVybGF5Q2xpY2t9XG4gICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M9e3Nob3VsZENsb3NlT25Fc2NhcGVQcmVzc31cbiAgICAgIG9uQmVmb3JlQ2xvc2U9e29uQmVmb3JlQ2xvc2V9XG4gICAgICBvbkV4aXRlZD17b25DbG9zZUNvbXBsZXRlfVxuICAgICAgb25FbnRlcmVkPXtvbk9wZW5Db21wbGV0ZX1cbiAgICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nPXtwcmV2ZW50Qm9keVNjcm9sbGluZ31cbiAgICA+XG4gICAgICB7KHsgc3RhdGUsIGNsb3NlIH0pID0+IChcbiAgICAgICAgPFBhbmVcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgey4uLnBhbmVQcm9wc1twb3NpdGlvbl19XG4gICAgICAgICAgY3NzPXthbmltYXRpb25TdHlsZXNDbGFzc1twb3NpdGlvbl19XG4gICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgID5cbiAgICAgICAgICA8U2hlZXRDbG9zZVxuICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICBpc0Nsb3Npbmc9e2ZhbHNlfVxuICAgICAgICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgZWxldmF0aW9uPXs0fVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgb3ZlcmZsb3dZPVwiYXV0b1wiXG4gICAgICAgICAgICBtYXhIZWlnaHQ9XCIxMDB2aFwiXG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIHsuLi5zdWJwYW5lUHJvcHNbcG9zaXRpb25dfVxuICAgICAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7IGNsb3NlIH0pIDogY2hpbGRyZW59XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1BhbmU+XG4gICAgICApfVxuICAgIDwvT3ZlcmxheT5cbiAgKVxufSlcblxuU2lkZVNoZWV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENoaWxkcmVuIGNhbiBiZSBhIHN0cmluZywgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIFNpZGUgU2hlZXQgaXMgc2hvd24uXG4gICAqL1xuICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAqL1xuICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAqL1xuICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIG92ZXJsYXkgaXMgYWJvdXQgdG8gY2xvc2UuXG4gICAqIFJldHVybiBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIHNoZWV0IGZyb20gY2xvc2luZy5cbiAgICogdHlwZTogYEZ1bmN0aW9uIC0+IEJvb2xlYW5gXG4gICAqL1xuICBvbkJlZm9yZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIFNpZGVTaGVldC5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgdG8gcGFzcyB0aHJvdWdoIHRoZSBTaWRlU2hlZXQgY29udGFpbmVyIFBhbmUuXG4gICAqL1xuICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUG9zaXRpb25zIHRoZSBzaGVldCB0byB0aGUgdG9wLCBsZWZ0LCByaWdodCwgb3IgYm90dG9tIG9mIHRoZSBzY3JlZW4uXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBQb3NpdGlvbi5UT1AsXG4gICAgUG9zaXRpb24uQk9UVE9NLFxuICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgUG9zaXRpb24uUklHSFRcbiAgXSksXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgc2Nyb2xsaW5nIGluIHRoZSBvdXRlciBib2R5XG4gICAqL1xuICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZVNoZWV0XG4iXX0=