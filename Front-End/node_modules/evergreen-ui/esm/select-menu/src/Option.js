import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { TickIcon } from '../../icons';
import { Image } from '../../image';
import TableRow from '../../table/src/TableRow';
import TextTableCell from '../../table/src/TextTableCell';
var disableProps = {
  color: 'muted'
};
var selectedProps = {
  color: 'selected'
};
var emptyProps = {};

var Option = /*#__PURE__*/function (_PureComponent) {
  _inherits(Option, _PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super.apply(this, arguments);
  }

  _createClass(Option, [{
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
          props = _objectWithoutProperties(_this$props, ["label", "onSelect", "onDeselect", "isHighlighted", "isSelected", "isSelectable", "disabled", "style", "height", "icon"]);

      var textProps = emptyProps;

      if (disabled) {
        textProps = disableProps;
      }

      if (isSelected) {
        textProps = selectedProps;
      }

      return React.createElement(TableRow, _extends({
        isSelectable: isSelectable && !disabled,
        isHighlighted: isHighlighted,
        onSelect: onSelect,
        onDeselect: onDeselect,
        isSelected: isSelected,
        style: style,
        display: "flex",
        alignItems: "center",
        borderBottom: false
      }, props), React.createElement(Pane, {
        paddingLeft: 12,
        paddingRight: 8,
        opacity: isSelected ? 1 : 0,
        flexGrow: 0,
        paddingTop: 4
      }, React.createElement(TickIcon, {
        color: "selected",
        size: 14
      })), React.createElement(TextTableCell, {
        height: height,
        borderBottom: "muted",
        textProps: textProps,
        paddingLeft: 0,
        borderRight: null,
        flex: 1,
        alignSelf: "stretch",
        cursor: disabled ? 'default' : 'pointer'
      }, React.createElement(Pane, {
        alignItems: "center",
        display: "flex"
      }, icon && React.createElement(Image, {
        src: icon,
        width: 24,
        marginRight: 8
      }), label)));
    }
  }]);

  return Option;
}(PureComponent);

Option.displayName = "Option";

_defineProperty(Option, "propTypes", {
  label: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.any,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool
});

export { Option as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlBhbmUiLCJUaWNrSWNvbiIsIkltYWdlIiwiVGFibGVSb3ciLCJUZXh0VGFibGVDZWxsIiwiZGlzYWJsZVByb3BzIiwiY29sb3IiLCJzZWxlY3RlZFByb3BzIiwiZW1wdHlQcm9wcyIsIk9wdGlvbiIsInByb3BzIiwibGFiZWwiLCJvblNlbGVjdCIsIm9uRGVzZWxlY3QiLCJpc0hpZ2hsaWdodGVkIiwiaXNTZWxlY3RlZCIsImlzU2VsZWN0YWJsZSIsImRpc2FibGVkIiwic3R5bGUiLCJoZWlnaHQiLCJpY29uIiwidGV4dFByb3BzIiwic3RyaW5nIiwiYW55IiwibnVtYmVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixhQUF6QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsYUFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLDBCQUFyQjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIsK0JBQTFCO0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHO0FBQUVELEVBQUFBLEtBQUssRUFBRTtBQUFULENBQXRCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHLEVBQW5COztJQUVxQkMsTTs7Ozs7Ozs7Ozs7Ozs2QkFjVjtBQUFBLHdCQWFILEtBQUtDLEtBYkY7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxRQUhLLGVBR0xBLFFBSEs7QUFBQSxVQUlMQyxVQUpLLGVBSUxBLFVBSks7QUFB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bnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUaWNrSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi9pbWFnZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi8uLi90YWJsZS9zcmMvVGFibGVSb3cnXG5pbXBvcnQgVGV4dFRhYmxlQ2VsbCBmcm9tICcuLi8uLi90YWJsZS9zcmMvVGV4dFRhYmxlQ2VsbCdcblxuY29uc3QgZGlzYWJsZVByb3BzID0geyBjb2xvcjogJ211dGVkJyB9XG5jb25zdCBzZWxlY3RlZFByb3BzID0geyBjb2xvcjogJ3NlbGVjdGVkJyB9XG5jb25zdCBlbXB0eVByb3BzID0ge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzSGlnaGxpZ2h0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3QsXG4gICAgICBpc0hpZ2hsaWdodGVkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc3R5bGUsXG4gICAgICBoZWlnaHQsXG4gICAgICBpY29uLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHRleHRQcm9wcyA9IGVtcHR5UHJvcHNcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRleHRQcm9wcyA9IGRpc2FibGVQcm9wc1xuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICB0ZXh0UHJvcHMgPSBzZWxlY3RlZFByb3BzXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVJvd1xuICAgICAgICBpc1NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZSAmJiAhZGlzYWJsZWR9XG4gICAgICAgIGlzSGlnaGxpZ2h0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgb25EZXNlbGVjdD17b25EZXNlbGVjdH1cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBib3JkZXJCb3R0b209e2ZhbHNlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezEyfVxuICAgICAgICAgIHBhZGRpbmdSaWdodD17OH1cbiAgICAgICAgICBvcGFjaXR5PXtpc1NlbGVjdGVkID8gMSA6IDB9XG4gICAgICAgICAgZmxleEdyb3c9ezB9XG4gICAgICAgICAgcGFkZGluZ1RvcD17NH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUaWNrSWNvbiBjb2xvcj1cInNlbGVjdGVkXCIgc2l6ZT17MTR9IC8+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgICAgPFRleHRUYWJsZUNlbGxcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBib3JkZXJCb3R0b209XCJtdXRlZFwiXG4gICAgICAgICAgdGV4dFByb3BzPXt0ZXh0UHJvcHN9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgICAgYm9yZGVyUmlnaHQ9e251bGx9XG4gICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICBhbGlnblNlbGY9XCJzdHJldGNoXCJcbiAgICAgICAgICBjdXJzb3I9e2Rpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInfVxuICAgICAgICA+XG4gICAgICAgICAgPFBhbmUgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICAgICAgICB7aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSB3aWR0aD17MjR9IG1hcmdpblJpZ2h0PXs4fSAvPn1cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvVGV4dFRhYmxlQ2VsbD5cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgKVxuICB9XG59XG4iXX0=