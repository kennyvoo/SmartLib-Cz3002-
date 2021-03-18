"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StringAndBoolPropType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]);

var emptyObject = {};
var Pane = (0, _react.memo)((0, _react.forwardRef)(function Pane(props, ref) {
  var background = props.background,
      elevation = props.elevation,
      hoverElevation = props.hoverElevation,
      activeElevation = props.activeElevation,
      border = props.border,
      borderTop = props.borderTop,
      borderRight = props.borderRight,
      borderBottom = props.borderBottom,
      borderLeft = props.borderLeft,
      _props$css = props.css,
      css = _props$css === void 0 ? emptyObject : _props$css,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["background", "elevation", "hoverElevation", "activeElevation", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "css"]);
  var theme = (0, _theme.useTheme)();

  function getHoverElevationStyle(hoverElevation, css) {
    if (!Number.isInteger(hoverElevation)) return {};
    return {
      transitionDuration: '150ms',
      transitionProperty: 'box-shadow, transform',
      transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      ':hover': _objectSpread(_objectSpread({}, css[':hover'] || {}), {}, {
        transform: 'translateY(-2px)',
        boxShadow: theme.getElevation(hoverElevation)
      })
    };
  }

  function getActiveElevationStyle(activeElevation, css) {
    if (!Number.isInteger(activeElevation)) return {};
    return {
      ':active': _objectSpread(_objectSpread({}, css[':active'] || {}), {}, {
        transform: 'translateY(-1px)',
        boxShadow: theme.getElevation(activeElevation)
      })
    };
  }

  function getBorderSideProperty(_ref) {
    var borderSideProperty = _ref.borderSideProperty,
        border = _ref.border;

    if (Object.prototype.hasOwnProperty.call(theme.colors.border, borderSideProperty)) {
      return "1px solid ".concat(theme.colors.border[borderSideProperty]);
    }

    if (borderSideProperty === true) {
      return "1px solid ".concat(theme.colors.border["default"]);
    }

    if (borderSideProperty === false) {
      return null;
    }

    if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
      return "1px solid ".concat(theme.colors.border[border]);
    }

    if (border === true) {
      return "1px solid ".concat(theme.colors.border["default"]);
    }

    return borderSideProperty;
  }

  var elevationStyle = theme.getElevation(elevation);
  var hoverElevationStyle = getHoverElevationStyle(hoverElevation, css);
  var activeElevationStyle = getActiveElevationStyle(activeElevation, css);

  var _map = [borderTop, borderRight, borderBottom, borderLeft].map(function (borderSideProperty) {
    return getBorderSideProperty({
      borderSideProperty: borderSideProperty,
      border: border
    });
  }),
      _map2 = (0, _slicedToArray2["default"])(_map, 4),
      _borderTop = _map2[0],
      _borderRight = _map2[1],
      _borderBottom = _map2[2],
      _borderLeft = _map2[3];

  var className = (0, _classnames["default"])(props.className, (0, _glamor.css)(_objectSpread(_objectSpread(_objectSpread({}, css), hoverElevationStyle), activeElevationStyle)).toString());
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    ref: ref,
    borderTop: _borderTop,
    borderRight: _borderRight,
    borderBottom: _borderBottom,
    borderLeft: _borderLeft,
    boxShadow: elevationStyle,
    background: theme.getBackground(background)
  }, restProps, {
    className: className
  }));
}));
Pane.propTypes = _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: _propTypes["default"].string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, muted, default.
   */
  border: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderTop: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderRight: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderBottom: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderLeft: StringAndBoolPropType
});
var _default = Pane;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL1BhbmUuanMiXSwibmFtZXMiOlsiU3RyaW5nQW5kQm9vbFByb3BUeXBlIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYm9vbCIsImVtcHR5T2JqZWN0IiwiUGFuZSIsInByb3BzIiwicmVmIiwiYmFja2dyb3VuZCIsImVsZXZhdGlvbiIsImhvdmVyRWxldmF0aW9uIiwiYWN0aXZlRWxldmF0aW9uIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJMZWZ0IiwiY3NzIiwicmVzdFByb3BzIiwidGhlbWUiLCJnZXRIb3ZlckVsZXZhdGlvblN0eWxlIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwidHJhbnNmb3JtIiwiYm94U2hhZG93IiwiZ2V0RWxldmF0aW9uIiwiZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUiLCJnZXRCb3JkZXJTaWRlUHJvcGVydHkiLCJib3JkZXJTaWRlUHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb2xvcnMiLCJlbGV2YXRpb25TdHlsZSIsImhvdmVyRWxldmF0aW9uU3R5bGUiLCJhY3RpdmVFbGV2YXRpb25TdHlsZSIsIm1hcCIsIl9ib3JkZXJUb3AiLCJfYm9yZGVyUmlnaHQiLCJfYm9yZGVyQm90dG9tIiwiX2JvcmRlckxlZnQiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsImdldEJhY2tncm91bmQiLCJwcm9wVHlwZXMiLCJCb3giLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0Msc0JBQVVDLFNBQVYsQ0FBb0IsQ0FDaERELHNCQUFVRSxNQURzQyxFQUVoREYsc0JBQVVHLElBRnNDLENBQXBCLENBQTlCOztBQUtBLElBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUVBLElBQU1DLElBQUksR0FBRyxpQkFDWCx1QkFBVyxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQUEsTUFFakNDLFVBRmlDLEdBZ0IvQkYsS0FoQitCLENBRWpDRSxVQUZpQztBQUFBLE1BSWpDQyxTQUppQyxHQWdCL0JILEtBaEIrQixDQUlqQ0csU0FKaUM7QUFBQSxNQUtqQ0MsY0FMaUMsR0FnQi9CSixLQWhCK0IsQ0FLakNJLGNBTGlDO0FBQUEsTUFNakNDLGVBTmlDLEdBZ0IvQkwsS0FoQitCLENBTWpDSyxlQU5pQztBQUFBLE1BUWpDQyxNQVJpQyxHQWdCL0JOLEtBaEIrQixDQVFqQ00sTUFSaUM7QUFBQSxNQVNqQ0MsU0FUaUMsR0FnQi9CUCxLQWhCK0IsQ0FTakNPLFNBVGlDO0FBQUEsTUFVakNDLFdBVmlDLEdBZ0IvQlIsS0FoQitCLENBVWpDUSxXQVZpQztBQUFBLE1BV2pDQyxZQVhpQyxHQWdCL0JULEtBaEIrQixDQVdqQ1MsWUFYaUM7QUFBQSxNQVlqQ0MsVUFaaUMsR0FnQi9CVixLQWhCK0IsQ0FZakNVLFVBWmlDO0FBQUEsbUJBZ0IvQlYsS0FoQitCLENBY2pDVyxHQWRpQztBQUFBLE1BY2pDQSxHQWRpQywyQkFjM0JiLFdBZDJCO0FBQUEsTUFlOUJjLFNBZjhCLDZDQWdCL0JaLEtBaEIrQjtBQWlCbkMsTUFBTWEsS0FBSyxHQUFHLHNCQUFkOztBQUVBLFdBQVNDLHNCQUFULENBQWdDVixjQUFoQyxFQUFnRE8sR0FBaEQsRUFBcUQ7QUFDbkQsUUFBSSxDQUFDSSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJaLGNBQWpCLENBQUwsRUFBdUMsT0FBTyxFQUFQO0FBRXZDLFdBQU87QUFDTGEsTUFBQUEsa0JBQWtCLEVBQUUsT0FEZjtBQUVMQyxNQUFBQSxrQkFBa0IsRUFBRSx1QkFGZjtBQUdMQyxNQUFBQSx3QkFBd0Isa0NBSG5CO0FBSUwsZ0RBQ01SLEdBQUcsQ0FBQyxRQUFELENBQUgsSUFBaUIsRUFEdkI7QUFFRVMsUUFBQUEsU0FBUyxFQUFFLGtCQUZiO0FBR0VDLFFBQUFBLFNBQVMsRUFBRVIsS0FBSyxDQUFDUyxZQUFOLENBQW1CbEIsY0FBbkI7QUFIYjtBQUpLLEtBQVA7QUFVRDs7QUFFRCxXQUFTbUIsdUJBQVQsQ0FBaUNsQixlQUFqQyxFQUFrRE0sR0FBbEQsRUFBdUQ7QUFDckQsUUFBSSxDQUFDSSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJYLGVBQWpCLENBQUwsRUFBd0MsT0FBTyxFQUFQO0FBRXhDLFdBQU87QUFDTCxpREFDTU0sR0FBRyxDQUFDLFNBQUQsQ0FBSCxJQUFrQixFQUR4QjtBQUVFUyxRQUFBQSxTQUFTLEVBQUUsa0JBRmI7QUFHRUMsUUFBQUEsU0FBUyxFQUFFUixLQUFLLENBQUNTLFlBQU4sQ0FBbUJqQixlQUFuQjtBQUhiO0FBREssS0FBUDtBQU9EOztBQUVELFdBQVNtQixxQkFBVCxPQUErRDtBQUFBLFFBQTlCQyxrQkFBOEIsUUFBOUJBLGtCQUE4QjtBQUFBLFFBQVZuQixNQUFVLFFBQVZBLE1BQVU7O0FBQzdELFFBQ0VvQixNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUNFaEIsS0FBSyxDQUFDaUIsTUFBTixDQUFheEIsTUFEZixFQUVFbUIsa0JBRkYsQ0FERixFQUtFO0FBQ0EsaUNBQW9CWixLQUFLLENBQUNpQixNQUFOLENBQWF4QixNQUFiLENBQW9CbUIsa0JBQXBCLENBQXBCO0FBQ0Q7O0FBRUQsUUFBSUEsa0JBQWtCLEtBQUssSUFBM0IsRUFBaUM7QUFDL0IsaUNBQW9CWixLQUFLLENBQUNpQixNQUFOLENBQWF4QixNQUFiLFdBQXBCO0FBQ0Q7O0FBRUQsUUFBSW1CLGtCQUFrQixLQUFLLEtBQTNCLEVBQWtDO0FBQ2hDLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUlDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDaEIsS0FBSyxDQUFDaUIsTUFBTixDQUFheEIsTUFBbEQsRUFBMERBLE1BQTFELENBQUosRUFBdUU7QUFDckUsaUNBQW9CTyxLQUFLLENBQUNpQixNQUFOLENBQWF4QixNQUFiLENBQW9CQSxNQUFwQixDQUFwQjtBQUNEOztBQUVELFFBQUlBLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CLGlDQUFvQk8sS0FBSyxDQUFDaUIsTUFBTixDQUFheEIsTUFBYixXQUFwQjtBQUNEOztBQUVELFdBQU9tQixrQkFBUDtBQUNEOztBQUVELE1BQU1NLGNBQWMsR0FBR2xCLEtBQUssQ0FBQ1MsWUFBTixDQUFtQm5CLFNBQW5CLENBQXZCO0FBQ0EsTUFBTTZCLG1CQUFtQixHQUFHbEIsc0JBQXNCLENBQUNWLGNBQUQsRUFBaUJPLEdBQWpCLENBQWxEO0FBQ0EsTUFBTXNCLG9CQUFvQixHQUFHVix1QkFBdUIsQ0FBQ2xCLGVBQUQsRUFBa0JNLEdBQWxCLENBQXBEOztBQTdFbUMsYUErRTRCLENBQzdESixTQUQ2RCxFQUU3REMsV0FGNkQsRUFHN0RDLFlBSDZELEVBSTdEQyxVQUo2RCxFQUs3RHdCLEdBTDZELENBS3pELFVBQUFULGtCQUFrQjtBQUFBLFdBQ3RCRCxxQkFBcUIsQ0FBQztBQUFFQyxNQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUFGO0FBQXNCbkIsTUFBQUEsTUFBTSxFQUFOQTtBQUF0QixLQUFELENBREM7QUFBQSxHQUx1QyxDQS9FNUI7QUFBQTtBQUFBLE1BK0U1QjZCLFVBL0U0QjtBQUFBLE1BK0VoQkMsWUEvRWdCO0FBQUEsTUErRUZDLGFBL0VFO0FBQUEsTUErRWFDLFdBL0ViOztBQXdGbkMsTUFBTUMsU0FBUyxHQUFHLDRCQUNoQnZDLEtBQUssQ0FBQ3VDLFNBRFUsRUFFaEIsK0RBQ0s1QixHQURMLEdBRUtxQixtQkFGTCxHQUdLQyxvQkFITCxHQUlHTyxRQUpILEVBRmdCLENBQWxCO0FBU0EsU0FDRSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsR0FBRyxFQUFFdkMsR0FEUDtBQUVFLElBQUEsU0FBUyxFQUFFa0MsVUFGYjtBQUdFLElBQUEsV0FBVyxFQUFFQyxZQUhmO0FBSUUsSUFBQSxZQUFZLEVBQUVDLGFBSmhCO0FBS0UsSUFBQSxVQUFVLEVBQUVDLFdBTGQ7QUFNRSxJQUFBLFNBQVMsRUFBRVAsY0FOYjtBQU9FLElBQUEsVUFBVSxFQUFFbEIsS0FBSyxDQUFDNEIsYUFBTixDQUFvQnZDLFVBQXBCO0FBUGQsS0FRTVUsU0FSTjtBQVNFLElBQUEsU0FBUyxFQUFFMkI7QUFUYixLQURGO0FBYUQsQ0E5R0QsQ0FEVyxDQUFiO0FBa0hBeEMsSUFBSSxDQUFDMkMsU0FBTCxtQ0FJS0Msa0JBQUlELFNBSlQ7QUFNRTs7OztBQUlBeEMsRUFBQUEsVUFBVSxFQUFFUixzQkFBVUUsTUFWeEI7O0FBWUU7Ozs7QUFJQU8sRUFBQUEsU0FBUyxFQUFFVCxzQkFBVWtELEtBQVYsQ0FBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFoQixDQWhCYjs7QUFrQkU7Ozs7QUFJQXhDLEVBQUFBLGNBQWMsRUFBRVYsc0JBQVVrRCxLQUFWLENBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBaEIsQ0F0QmxCOztBQXdCRTs7OztBQUlBdkMsRUFBQUEsZUFBZSxFQUFFWCxzQkFBVWtELEtBQVYsQ0FBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFoQixDQTVCbkI7O0FBOEJFOzs7O0FBSUF0QyxFQUFBQSxNQUFNLEVBQUViLHFCQWxDVjs7QUFvQ0U7Ozs7QUFJQWMsRUFBQUEsU0FBUyxFQUFFZCxxQkF4Q2I7O0FBMENFOzs7O0FBSUFlLEVBQUFBLFdBQVcsRUFBRWYscUJBOUNmOztBQWdERTs7OztBQUlBZ0IsRUFBQUEsWUFBWSxFQUFFaEIscUJBcERoQjs7QUFzREU7Ozs7QUFJQWlCLEVBQUFBLFVBQVUsRUFBRWpCO0FBMURkO2VBNkRlTSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgU3RyaW5nQW5kQm9vbFByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5ib29sXG5dKVxuXG5jb25zdCBlbXB0eU9iamVjdCA9IHt9XG5cbmNvbnN0IFBhbmUgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFBhbmUocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGJhY2tncm91bmQsXG5cbiAgICAgIGVsZXZhdGlvbixcbiAgICAgIGhvdmVyRWxldmF0aW9uLFxuICAgICAgYWN0aXZlRWxldmF0aW9uLFxuXG4gICAgICBib3JkZXIsXG4gICAgICBib3JkZXJUb3AsXG4gICAgICBib3JkZXJSaWdodCxcbiAgICAgIGJvcmRlckJvdHRvbSxcbiAgICAgIGJvcmRlckxlZnQsXG5cbiAgICAgIGNzcyA9IGVtcHR5T2JqZWN0LFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICBmdW5jdGlvbiBnZXRIb3ZlckVsZXZhdGlvblN0eWxlKGhvdmVyRWxldmF0aW9uLCBjc3MpIHtcbiAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihob3ZlckVsZXZhdGlvbikpIHJldHVybiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcxNTBtcycsXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ2JveC1zaGFkb3csIHRyYW5zZm9ybScsXG4gICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgLi4uKGNzc1snOmhvdmVyJ10gfHwge30pLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTJweCknLFxuICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuZ2V0RWxldmF0aW9uKGhvdmVyRWxldmF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUoYWN0aXZlRWxldmF0aW9uLCBjc3MpIHtcbiAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihhY3RpdmVFbGV2YXRpb24pKSByZXR1cm4ge31cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJzphY3RpdmUnOiB7XG4gICAgICAgICAgLi4uKGNzc1snOmFjdGl2ZSddIHx8IHt9KSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xcHgpJyxcbiAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLmdldEVsZXZhdGlvbihhY3RpdmVFbGV2YXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb3JkZXJTaWRlUHJvcGVydHkoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KSB7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYm9yZGVyLFxuICAgICAgICAgIGJvcmRlclNpZGVQcm9wZXJ0eVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyW2JvcmRlclNpZGVQcm9wZXJ0eV19YFxuICAgICAgfVxuXG4gICAgICBpZiAoYm9yZGVyU2lkZVByb3BlcnR5ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5kZWZhdWx0fWBcbiAgICAgIH1cblxuICAgICAgaWYgKGJvcmRlclNpZGVQcm9wZXJ0eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGVtZS5jb2xvcnMuYm9yZGVyLCBib3JkZXIpKSB7XG4gICAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcltib3JkZXJdfWBcbiAgICAgIH1cblxuICAgICAgaWYgKGJvcmRlciA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuZGVmYXVsdH1gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBib3JkZXJTaWRlUHJvcGVydHlcbiAgICB9XG5cbiAgICBjb25zdCBlbGV2YXRpb25TdHlsZSA9IHRoZW1lLmdldEVsZXZhdGlvbihlbGV2YXRpb24pXG4gICAgY29uc3QgaG92ZXJFbGV2YXRpb25TdHlsZSA9IGdldEhvdmVyRWxldmF0aW9uU3R5bGUoaG92ZXJFbGV2YXRpb24sIGNzcylcbiAgICBjb25zdCBhY3RpdmVFbGV2YXRpb25TdHlsZSA9IGdldEFjdGl2ZUVsZXZhdGlvblN0eWxlKGFjdGl2ZUVsZXZhdGlvbiwgY3NzKVxuXG4gICAgY29uc3QgW19ib3JkZXJUb3AsIF9ib3JkZXJSaWdodCwgX2JvcmRlckJvdHRvbSwgX2JvcmRlckxlZnRdID0gW1xuICAgICAgYm9yZGVyVG9wLFxuICAgICAgYm9yZGVyUmlnaHQsXG4gICAgICBib3JkZXJCb3R0b20sXG4gICAgICBib3JkZXJMZWZ0XG4gICAgXS5tYXAoYm9yZGVyU2lkZVByb3BlcnR5ID0+XG4gICAgICBnZXRCb3JkZXJTaWRlUHJvcGVydHkoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGN4KFxuICAgICAgcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZ2xhbW9yQ3NzKHtcbiAgICAgICAgLi4uY3NzLFxuICAgICAgICAuLi5ob3ZlckVsZXZhdGlvblN0eWxlLFxuICAgICAgICAuLi5hY3RpdmVFbGV2YXRpb25TdHlsZVxuICAgICAgfSkudG9TdHJpbmcoKVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBib3JkZXJUb3A9e19ib3JkZXJUb3B9XG4gICAgICAgIGJvcmRlclJpZ2h0PXtfYm9yZGVyUmlnaHR9XG4gICAgICAgIGJvcmRlckJvdHRvbT17X2JvcmRlckJvdHRvbX1cbiAgICAgICAgYm9yZGVyTGVmdD17X2JvcmRlckxlZnR9XG4gICAgICAgIGJveFNoYWRvdz17ZWxldmF0aW9uU3R5bGV9XG4gICAgICAgIGJhY2tncm91bmQ9e3RoZW1lLmdldEJhY2tncm91bmQoYmFja2dyb3VuZCl9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG5cblBhbmUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIEJveCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIHByb3BlcnR5LlxuICAgKiBgdGludDFgLCBgdGludDJgIGV0Yy4gZnJvbSBgdGhlbWUuY29sb3JzLmJhY2tncm91bmRgIGFyZSBhdmFpbGFibGUuXG4gICAqL1xuICBiYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBFbGV2YXRpb24gb2YgdGhlIFBhbmUuXG4gICAqIFZhbHVlczogMCwgMSwgMiwgMywgNC5cbiAgICovXG4gIGVsZXZhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFswLCAxLCAyLCAzLCA0XSksXG5cbiAgLyoqXG4gICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZSBvbiBob3Zlci4gTWlnaHQgZ2V0IGRlcHJlY2F0ZWQuXG4gICAqIFZhbHVlczogMCwgMSwgMiwgMywgNC5cbiAgICovXG4gIGhvdmVyRWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAvKipcbiAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lIG9uIGNsaWNrLiBNaWdodCBnZXQgZGVwcmVjYXRlZC5cbiAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgKi9cbiAgYWN0aXZlRWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICogVmFsdWVzOiB0cnVlLCBtdXRlZCwgZGVmYXVsdC5cbiAgICovXG4gIGJvcmRlcjogU3RyaW5nQW5kQm9vbFByb3BUeXBlLFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgKiBWYWx1ZXM6IHRydWUsIGV4dHJhTXV0ZWQsIG11dGVkLCBkZWZhdWx0LlxuICAgKi9cbiAgYm9yZGVyVG9wOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAqL1xuICBib3JkZXJSaWdodDogU3RyaW5nQW5kQm9vbFByb3BUeXBlLFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgKiBWYWx1ZXM6IHRydWUsIGV4dHJhTXV0ZWQsIG11dGVkLCBkZWZhdWx0LlxuICAgKi9cbiAgYm9yZGVyQm90dG9tOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAqL1xuICBib3JkZXJMZWZ0OiBTdHJpbmdBbmRCb29sUHJvcFR5cGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZVxuIl19