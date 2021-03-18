"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _StackingContext = _interopRequireDefault(require("./StackingContext"));

var Stack = (0, _react.memo)(function Stack(_ref) {
  var children = _ref.children,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? _constants.StackingOrder.STACKING_CONTEXT : _ref$value;
  var previousValue = (0, _react.useContext)(_StackingContext["default"]);
  var currentValue = Math.max(value, previousValue);
  var nextValue = currentValue + 1;
  return _react["default"].createElement(_StackingContext["default"].Provider, {
    value: nextValue
  }, children(currentValue));
});
Stack.propTypes = {
  /**
   * Function that takes the current z-index and returns a React Node.
   * (zIndex) => ReactNode.
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * Set the value of the stack. This will increment for children.
   */
  value: _propTypes["default"].number
};
var _default = Stack;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGFjay9zcmMvU3RhY2suanMiXSwibmFtZXMiOlsiU3RhY2siLCJjaGlsZHJlbiIsInZhbHVlIiwiU3RhY2tpbmdPcmRlciIsIlNUQUNLSU5HX0NPTlRFWFQiLCJwcmV2aW91c1ZhbHVlIiwiU3RhY2tpbmdDb250ZXh0IiwiY3VycmVudFZhbHVlIiwiTWF0aCIsIm1heCIsIm5leHRWYWx1ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxpQkFBSyxTQUFTQSxLQUFULE9BR2hCO0FBQUEsTUFGREMsUUFFQyxRQUZEQSxRQUVDO0FBQUEsd0JBRERDLEtBQ0M7QUFBQSxNQUREQSxLQUNDLDJCQURPQyx5QkFBY0MsZ0JBQ3JCO0FBQ0QsTUFBTUMsYUFBYSxHQUFHLHVCQUFXQywyQkFBWCxDQUF0QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNQLEtBQVQsRUFBZ0JHLGFBQWhCLENBQXJCO0FBQ0EsTUFBTUssU0FBUyxHQUFHSCxZQUFZLEdBQUcsQ0FBakM7QUFFQSxTQUNFLGdDQUFDLDJCQUFELENBQWlCLFFBQWpCO0FBQTBCLElBQUEsS0FBSyxFQUFFRztBQUFqQyxLQUNHVCxRQUFRLENBQUNNLFlBQUQsQ0FEWCxDQURGO0FBS0QsQ0FiYSxDQUFkO0FBZUFQLEtBQUssQ0FBQ1csU0FBTixHQUFrQjtBQUNoQjs7OztBQUlBVixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVQyxJQUFWLENBQWVDLFVBTFQ7O0FBT2hCOzs7QUFHQVosRUFBQUEsS0FBSyxFQUFFVSxzQkFBVUc7QUFWRCxDQUFsQjtlQWFlZixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgU3RhY2tpbmdDb250ZXh0IGZyb20gJy4vU3RhY2tpbmdDb250ZXh0J1xuXG5jb25zdCBTdGFjayA9IG1lbW8oZnVuY3Rpb24gU3RhY2soe1xuICBjaGlsZHJlbixcbiAgdmFsdWUgPSBTdGFja2luZ09yZGVyLlNUQUNLSU5HX0NPTlRFWFRcbn0pIHtcbiAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHVzZUNvbnRleHQoU3RhY2tpbmdDb250ZXh0KVxuICBjb25zdCBjdXJyZW50VmFsdWUgPSBNYXRoLm1heCh2YWx1ZSwgcHJldmlvdXNWYWx1ZSlcbiAgY29uc3QgbmV4dFZhbHVlID0gY3VycmVudFZhbHVlICsgMVxuXG4gIHJldHVybiAoXG4gICAgPFN0YWNraW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bmV4dFZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbihjdXJyZW50VmFsdWUpfVxuICAgIDwvU3RhY2tpbmdDb250ZXh0LlByb3ZpZGVyPlxuICApXG59KVxuXG5TdGFjay5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBjdXJyZW50IHotaW5kZXggYW5kIHJldHVybnMgYSBSZWFjdCBOb2RlLlxuICAgKiAoekluZGV4KSA9PiBSZWFjdE5vZGUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgc3RhY2suIFRoaXMgd2lsbCBpbmNyZW1lbnQgZm9yIGNoaWxkcmVuLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhY2tcbiJdfQ==