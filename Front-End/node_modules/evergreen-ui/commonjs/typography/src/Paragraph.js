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

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Paragraph = (0, _react.memo)((0, _react.forwardRef)(function Paragraph(props, ref) {
  var theme = (0, _theme.useTheme)();
  var _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'ui' : _props$fontFamily,
      marginTop = props.marginTop,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["size", "color", "fontFamily", "marginTop"]);

  var _theme$getParagraphSt = theme.getParagraphStyle(size),
      defaultMarginTop = _theme$getParagraphSt.marginTop,
      textStyle = (0, _objectWithoutProperties2["default"])(_theme$getParagraphSt, ["marginTop"]);

  var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "p",
    ref: ref,
    color: theme.getTextColor(color),
    fontFamily: theme.getFontFamily(fontFamily),
    marginTop: finalMarginTop || 0,
    marginBottom: 0
  }, textStyle, restProps));
}));
Paragraph.propTypes = _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: _propTypes["default"].oneOf([300, 400, 500]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: _propTypes["default"].string
});
var _default = Paragraph;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOlsiUGFyYWdyYXBoIiwicHJvcHMiLCJyZWYiLCJ0aGVtZSIsInNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJtYXJnaW5Ub3AiLCJyZXN0UHJvcHMiLCJnZXRQYXJhZ3JhcGhTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJwcm9wVHlwZXMiLCJCb3giLCJQcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLGlCQUNoQix1QkFBVyxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFDeEMsTUFBTUMsS0FBSyxHQUFHLHNCQUFkO0FBRHdDLG9CQVFwQ0YsS0FSb0MsQ0FHdENHLElBSHNDO0FBQUEsTUFHdENBLElBSHNDLDRCQUcvQixHQUgrQjtBQUFBLHFCQVFwQ0gsS0FSb0MsQ0FJdENJLEtBSnNDO0FBQUEsTUFJdENBLEtBSnNDLDZCQUk5QixTQUo4QjtBQUFBLDBCQVFwQ0osS0FSb0MsQ0FLdENLLFVBTHNDO0FBQUEsTUFLdENBLFVBTHNDLGtDQUt6QixJQUx5QjtBQUFBLE1BTXRDQyxTQU5zQyxHQVFwQ04sS0FSb0MsQ0FNdENNLFNBTnNDO0FBQUEsTUFPbkNDLFNBUG1DLDZDQVFwQ1AsS0FSb0M7O0FBQUEsOEJBYXBDRSxLQUFLLENBQUNNLGlCQUFOLENBQXdCTCxJQUF4QixDQWJvQztBQUFBLE1BVzNCTSxnQkFYMkIseUJBV3RDSCxTQVhzQztBQUFBLE1BWW5DSSxTQVptQzs7QUFleEMsTUFBTUMsY0FBYyxHQUNsQkwsU0FBUyxLQUFLLFNBQWQsR0FBMEJHLGdCQUExQixHQUE2Q0gsU0FEL0M7QUFHQSxTQUNFLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsR0FETDtBQUVFLElBQUEsR0FBRyxFQUFFTCxHQUZQO0FBR0UsSUFBQSxLQUFLLEVBQUVDLEtBQUssQ0FBQ1UsWUFBTixDQUFtQlIsS0FBbkIsQ0FIVDtBQUlFLElBQUEsVUFBVSxFQUFFRixLQUFLLENBQUNXLGFBQU4sQ0FBb0JSLFVBQXBCLENBSmQ7QUFLRSxJQUFBLFNBQVMsRUFBRU0sY0FBYyxJQUFJLENBTC9CO0FBTUUsSUFBQSxZQUFZLEVBQUU7QUFOaEIsS0FPTUQsU0FQTixFQVFNSCxTQVJOLEVBREY7QUFZRCxDQTlCRCxDQURnQixDQUFsQjtBQWtDQVIsU0FBUyxDQUFDZSxTQUFWLG1DQUlLQyxrQkFBSUQsU0FKVDtBQU1FOzs7O0FBSUFYLEVBQUFBLElBQUksRUFBRWEsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEIsQ0FWUjs7QUFZRTs7OztBQUlBWixFQUFBQSxVQUFVLEVBQUVXLHNCQUFVRTtBQWhCeEI7ZUFtQmVuQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgUGFyYWdyYXBoID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBQYXJhZ3JhcGgocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IHtcbiAgICAgIHNpemUgPSA0MDAsXG4gICAgICBjb2xvciA9ICdkZWZhdWx0JyxcbiAgICAgIGZvbnRGYW1pbHkgPSAndWknLFxuICAgICAgbWFyZ2luVG9wLFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsXG4gICAgICAuLi50ZXh0U3R5bGVcbiAgICB9ID0gdGhlbWUuZ2V0UGFyYWdyYXBoU3R5bGUoc2l6ZSlcblxuICAgIGNvbnN0IGZpbmFsTWFyZ2luVG9wID1cbiAgICAgIG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnID8gZGVmYXVsdE1hcmdpblRvcCA6IG1hcmdpblRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJwXCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGNvbG9yPXt0aGVtZS5nZXRUZXh0Q29sb3IoY29sb3IpfVxuICAgICAgICBmb250RmFtaWx5PXt0aGVtZS5nZXRGb250RmFtaWx5KGZvbnRGYW1pbHkpfVxuICAgICAgICBtYXJnaW5Ub3A9e2ZpbmFsTWFyZ2luVG9wIHx8IDB9XG4gICAgICAgIG1hcmdpbkJvdHRvbT17MH1cbiAgICAgICAgey4uLnRleHRTdHlsZX1cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9KVxuKVxuXG5QYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIEJveCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSB0ZXh0IHN0eWxlLlxuICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDBdKSxcblxuICAvKipcbiAgICogRm9udCBmYW1pbHkuXG4gICAqIENhbiBiZTogYHVpYCwgYGRpc3BsYXlgIG9yIGBtb25vYCBvciBhIGN1c3RvbSBmb250IGZhbWlseS5cbiAgICovXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoXG4iXX0=