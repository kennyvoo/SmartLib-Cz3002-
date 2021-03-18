"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _icons = require("../../icons");

var _image = require("../../image");

var _TableRow = _interopRequireDefault(require("../../table/src/TableRow"));

var _TextTableCell = _interopRequireDefault(require("../../table/src/TextTableCell"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var disableProps = {
  color: 'muted'
};
var selectedProps = {
  color: 'selected'
};
var emptyProps = {};

var Option = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Option, _PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    (0, _classCallCheck2["default"])(this, Option);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          isSelectable = _this$props.isSelectable,
          disabled = _this$props.disabled,
          style = _this$props.style,
          height = _this$props.height,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["label", "onSelect", "onDeselect", "isHighlighted", "isSelected", "isSelectable", "disabled", "style", "height", "icon"]);
      var textProps = emptyProps;

      if (disabled) {
        textProps = disableProps;
      }

      if (isSelected) {
        textProps = selectedProps;
      }

      return _react["default"].createElement(_TableRow["default"], (0, _extends2["default"])({
        isSelectable: isSelectable && !disabled,
        isHighlighted: isHighlighted,
        onSelect: onSelect,
        onDeselect: onDeselect,
        isSelected: isSelected,
        style: style,
        display: "flex",
        alignItems: "center",
        borderBottom: false
      }, props), _react["default"].createElement(_layers.Pane, {
        paddingLeft: 12,
        paddingRight: 8,
        opacity: isSelected ? 1 : 0,
        flexGrow: 0,
        paddingTop: 4
      }, _react["default"].createElement(_icons.TickIcon, {
        color: "selected",
        size: 14
      })), _react["default"].createElement(_TextTableCell["default"], {
        height: height,
        borderBottom: "muted",
        textProps: textProps,
        paddingLeft: 0,
        borderRight: null,
        flex: 1,
        alignSelf: "stretch",
        cursor: disabled ? 'default' : 'pointer'
      }, _react["default"].createElement(_layers.Pane, {
        alignItems: "center",
        display: "flex"
      }, icon && _react["default"].createElement(_image.Image, {
        src: icon,
        width: 24,
        marginRight: 8
      }), label)));
    }
  }]);
  return Option;
}(_react.PureComponent);

exports["default"] = Option;
Option.displayName = "Option";
(0, _defineProperty2["default"])(Option, "propTypes", {
  label: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  style: _propTypes["default"].any,
  height: _propTypes["default"].number,
  onSelect: _propTypes["default"].func,
  onDeselect: _propTypes["default"].func,
  isHighlighted: _propTypes["default"].bool,
  isSelected: _propTypes["default"].bool,
  isSelectable: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uLmpzIl0sIm5hbWVzIjpbImRpc2FibGVQcm9wcyIsImNvbG9yIiwic2VsZWN0ZWRQcm9wcyIsImVtcHR5UHJvcHMiLCJPcHRpb24iLCJwcm9wcyIsImxhYmVsIiwib25TZWxlY3QiLCJvbkRlc2VsZWN0IiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0ZWQiLCJpc1NlbGVjdGFibGUiLCJkaXNhYmxlZCIsInN0eWxlIiwiaGVpZ2h0IiwiaWNvbiIsInRleHRQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJudW1iZXIiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUFyQjtBQUNBLElBQU1DLGFBQWEsR0FBRztBQUFFRCxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUF0QjtBQUNBLElBQU1FLFVBQVUsR0FBRyxFQUFuQjs7SUFFcUJDLE07Ozs7Ozs7Ozs7Ozs2QkFjVjtBQUFBLHdCQWFILEtBQUtDLEtBYkY7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxRQUhLLGVBR0xBLFFBSEs7QUFBQSxVQUlMQyxVQUpLLGVBSUxBLFVBSks7QUFBQSxVQUtMQyxhQUxLLGVBS0xBLGFBTEs7QUFBQSxVQU1MQyxVQU5LLGVBTUxBLFVBTks7QUFBQSxVQU9MQyxZQVBLLGVBT0xBLFlBUEs7QUFBQSxVQVFMQyxRQVJLLGVBUUxBLFFBUks7QUFBQSxVQVNMQyxLQVRLLGVBU0xBLEtBVEs7QUFBQSxVQVVMQyxNQVZLLGVBVUxBLE1BVks7QUFBQSxVQVdMQyxJQVhLLGVBV0xBLElBWEs7QUFBQSxVQVlGVixLQVpFO0FBZVAsVUFBSVcsU0FBUyxHQUFHYixVQUFoQjs7QUFDQSxVQUFJUyxRQUFKLEVBQWM7QUFDWkksUUFBQUEsU0FBUyxHQUFHaEIsWUFBWjtBQUNEOztBQUVELFVBQUlVLFVBQUosRUFBZ0I7QUFDZE0sUUFBQUEsU0FBUyxHQUFHZCxhQUFaO0FBQ0Q7O0FBRUQsYUFDRSxnQ0FBQyxvQkFBRDtBQUNFLFFBQUEsWUFBWSxFQUFFUyxZQUFZLElBQUksQ0FBQ0MsUUFEakM7QUFFRSxRQUFBLGFBQWEsRUFBRUgsYUFGakI7QUFHRSxRQUFBLFFBQVEsRUFBRUYsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFQyxVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVFLFVBTGQ7QUFNRSxRQUFBLEtBQUssRUFBRUcsS0FOVDtBQU9FLFFBQUEsT0FBTyxFQUFDLE1BUFY7QUFRRSxRQUFBLFVBQVUsRUFBQyxRQVJiO0FBU0UsUUFBQSxZQUFZLEVBQUU7QUFUaEIsU0FVTVIsS0FWTixHQVlFLGdDQUFDLFlBQUQ7QUFDRSxRQUFBLFdBQVcsRUFBRSxFQURmO0FBRUUsUUFBQSxZQUFZLEVBQUUsQ0FGaEI7QUFHRSxRQUFBLE9BQU8sRUFBRUssVUFBVSxHQUFHLENBQUgsR0FBTyxDQUg1QjtBQUlFLFFBQUEsUUFBUSxFQUFFLENBSlo7QUFLRSxRQUFBLFVBQVUsRUFBRTtBQUxkLFNBT0UsZ0NBQUMsZUFBRDtBQUFVLFFBQUEsS0FBSyxFQUFDLFVBQWhCO0FBQTJCLFFBQUEsSUFBSSxFQUFFO0FBQWpDLFFBUEYsQ0FaRixFQXFCRSxnQ0FBQyx5QkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFSSxNQURWO0FBRUUsUUFBQSxZQUFZLEVBQUMsT0FGZjtBQUdFLFFBQUEsU0FBUyxFQUFFRSxTQUhiO0FBSUUsUUFBQSxXQUFXLEVBQUUsQ0FKZjtBQUtFLFFBQUEsV0FBVyxFQUFFLElBTGY7QUFNRSxRQUFBLElBQUksRUFBRSxDQU5SO0FBT0UsUUFBQSxTQUFTLEVBQUMsU0FQWjtBQVFFLFFBQUEsTUFBTSxFQUFFSixRQUFRLEdBQUcsU0FBSCxHQUFlO0FBUmpDLFNBVUUsZ0NBQUMsWUFBRDtBQUFNLFFBQUEsVUFBVSxFQUFDLFFBQWpCO0FBQTBCLFFBQUEsT0FBTyxFQUFDO0FBQWxDLFNBQ0dHLElBQUksSUFBSSxnQ0FBQyxZQUFEO0FBQU8sUUFBQSxHQUFHLEVBQUVBLElBQVo7QUFBa0IsUUFBQSxLQUFLLEVBQUUsRUFBekI7QUFBNkIsUUFBQSxXQUFXLEVBQUU7QUFBMUMsUUFEWCxFQUVHVCxLQUZILENBVkYsQ0FyQkYsQ0FERjtBQXVDRDs7O0VBN0VpQ1csb0I7OztBQUFmYixNO2lDQUFBQSxNLGVBQ0E7QUFDakJFLEVBQUFBLEtBQUssRUFBRVksc0JBQVVDLE1BREE7QUFFakJKLEVBQUFBLElBQUksRUFBRUcsc0JBQVVDLE1BRkM7QUFHakJOLEVBQUFBLEtBQUssRUFBRUssc0JBQVVFLEdBSEE7QUFJakJOLEVBQUFBLE1BQU0sRUFBRUksc0JBQVVHLE1BSkQ7QUFLakJkLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVJLElBTEg7QUFNakJkLEVBQUFBLFVBQVUsRUFBRVUsc0JBQVVJLElBTkw7QUFPakJiLEVBQUFBLGFBQWEsRUFBRVMsc0JBQVVLLElBUFI7QUFRakJiLEVBQUFBLFVBQVUsRUFBRVEsc0JBQVVLLElBUkw7QUFTakJaLEVBQUFBLFlBQVksRUFBRU8sc0JBQVVLLElBVFA7QUFVakJYLEVBQUFBLFFBQVEsRUFBRU0sc0JBQVVLO0FBVkgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGlja0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vaW1hZ2UnXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi4vLi4vdGFibGUvc3JjL1RhYmxlUm93J1xuaW1wb3J0IFRleHRUYWJsZUNlbGwgZnJvbSAnLi4vLi4vdGFibGUvc3JjL1RleHRUYWJsZUNlbGwnXG5cbmNvbnN0IGRpc2FibGVQcm9wcyA9IHsgY29sb3I6ICdtdXRlZCcgfVxuY29uc3Qgc2VsZWN0ZWRQcm9wcyA9IHsgY29sb3I6ICdzZWxlY3RlZCcgfVxuY29uc3QgZW1wdHlQcm9wcyA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpc0hpZ2hsaWdodGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgb25TZWxlY3QsXG4gICAgICBvbkRlc2VsZWN0LFxuICAgICAgaXNIaWdobGlnaHRlZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHN0eWxlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgaWNvbixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB0ZXh0UHJvcHMgPSBlbXB0eVByb3BzXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0ZXh0UHJvcHMgPSBkaXNhYmxlUHJvcHNcbiAgICB9XG5cbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdGV4dFByb3BzID0gc2VsZWN0ZWRQcm9wc1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVSb3dcbiAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGUgJiYgIWRpc2FibGVkfVxuICAgICAgICBpc0hpZ2hsaWdodGVkPXtpc0hpZ2hsaWdodGVkfVxuICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgIG9uRGVzZWxlY3Q9e29uRGVzZWxlY3R9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgYm9yZGVyQm90dG9tPXtmYWxzZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXsxMn1cbiAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgb3BhY2l0eT17aXNTZWxlY3RlZCA/IDEgOiAwfVxuICAgICAgICAgIGZsZXhHcm93PXswfVxuICAgICAgICAgIHBhZGRpbmdUb3A9ezR9XG4gICAgICAgID5cbiAgICAgICAgICA8VGlja0ljb24gY29sb3I9XCJzZWxlY3RlZFwiIHNpemU9ezE0fSAvPlxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgYm9yZGVyQm90dG9tPVwibXV0ZWRcIlxuICAgICAgICAgIHRleHRQcm9wcz17dGV4dFByb3BzfVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICAgIGJvcmRlclJpZ2h0PXtudWxsfVxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgYWxpZ25TZWxmPVwic3RyZXRjaFwiXG4gICAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxQYW5lIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgICAge2ljb24gJiYgPEltYWdlIHNyYz17aWNvbn0gd2lkdGg9ezI0fSBtYXJnaW5SaWdodD17OH0gLz59XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1RleHRUYWJsZUNlbGw+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIClcbiAgfVxufVxuIl19