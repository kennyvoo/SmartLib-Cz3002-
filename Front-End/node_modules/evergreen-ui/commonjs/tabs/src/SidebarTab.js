"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _Tab = _interopRequireDefault(require("./Tab"));

var styles = {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
};
var SidebarTab = (0, _react.memo)((0, _react.forwardRef)(function SidebarTab(props, ref) {
  var children = props.children,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      isSelected = props.isSelected,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "height", "isSelected"]);
  return _react["default"].createElement(_Tab["default"], (0, _extends2["default"])({
    isSelected: isSelected,
    height: height
  }, styles, rest, {
    ref: ref,
    display: "flex"
  }), _react["default"].createElement(_uiBox["default"], {
    is: "span",
    flex: "1"
  }, children));
}));
SidebarTab.propTypes = _Tab["default"].propTypes;
var _default = SidebarTab;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9TaWRlYmFyVGFiLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsIndpZHRoIiwicGFkZGluZ1giLCJwYWRkaW5nTGVmdCIsIm1hcmdpblgiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsIlNpZGViYXJUYWIiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwiaGVpZ2h0IiwiaXNTZWxlY3RlZCIsInJlc3QiLCJwcm9wVHlwZXMiLCJUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxLQUFLLEVBQUUsTUFETTtBQUViQyxFQUFBQSxRQUFRLEVBQUUsQ0FGRztBQUdiQyxFQUFBQSxXQUFXLEVBQUUsQ0FIQTtBQUliQyxFQUFBQSxPQUFPLEVBQUUsQ0FKSTtBQUtiQyxFQUFBQSxZQUFZLEVBQUUsQ0FMRDtBQU1iQyxFQUFBQSxjQUFjLEVBQUU7QUFOSCxDQUFmO0FBU0EsSUFBTUMsVUFBVSxHQUFHLGlCQUNqQix1QkFBVyxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFBQSxNQUNqQ0MsUUFEaUMsR0FDY0YsS0FEZCxDQUNqQ0UsUUFEaUM7QUFBQSxzQkFDY0YsS0FEZCxDQUN2QkcsTUFEdUI7QUFBQSxNQUN2QkEsTUFEdUIsOEJBQ2QsRUFEYztBQUFBLE1BQ1ZDLFVBRFUsR0FDY0osS0FEZCxDQUNWSSxVQURVO0FBQUEsTUFDS0MsSUFETCw2Q0FDY0wsS0FEZDtBQUd6QyxTQUNFLGdDQUFDLGVBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUksVUFEZDtBQUVFLElBQUEsTUFBTSxFQUFFRDtBQUZWLEtBR01YLE1BSE4sRUFJTWEsSUFKTjtBQUtFLElBQUEsR0FBRyxFQUFFSixHQUxQO0FBTUUsSUFBQSxPQUFPLEVBQUM7QUFOVixNQVFFLGdDQUFDLGlCQUFEO0FBQUssSUFBQSxFQUFFLEVBQUMsTUFBUjtBQUFlLElBQUEsSUFBSSxFQUFDO0FBQXBCLEtBQ0dDLFFBREgsQ0FSRixDQURGO0FBY0QsQ0FqQkQsQ0FEaUIsQ0FBbkI7QUFxQkFILFVBQVUsQ0FBQ08sU0FBWCxHQUF1QkMsZ0JBQUlELFNBQTNCO2VBRWVQLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgVGFiIGZyb20gJy4vVGFiJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIHBhZGRpbmdYOiAwLFxuICBwYWRkaW5nTGVmdDogOCxcbiAgbWFyZ2luWDogMCxcbiAgbWFyZ2luQm90dG9tOiA0LFxuICBqdXN0aWZ5Q29udGVudDogJ2F1dG8nXG59XG5cbmNvbnN0IFNpZGViYXJUYWIgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFNpZGViYXJUYWIocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhlaWdodCA9IDMyLCBpc1NlbGVjdGVkLCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJcbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5zdHlsZXN9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgPlxuICAgICAgICA8Qm94IGlzPVwic3BhblwiIGZsZXg9XCIxXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvVGFiPlxuICAgIClcbiAgfSlcbilcblxuU2lkZWJhclRhYi5wcm9wVHlwZXMgPSBUYWIucHJvcFR5cGVzXG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJUYWJcbiJdfQ==