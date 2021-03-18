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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Option = _interopRequireDefault(require("../../select-menu/src/Option"));

var AutocompleteItem = (0, _react.memo)((0, _react.forwardRef)(function AutocompleteItem(props, ref) {
  var isHighlighted = props.isHighlighted,
      isSelected = props.isSelected,
      style = props.style,
      children = props.children,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["isHighlighted", "isSelected", "style", "children"]);
  return _react["default"].createElement(_Option["default"], (0, _extends2["default"])({
    ref: ref,
    isHighlighted: isHighlighted,
    isSelected: isSelected,
    label: children,
    style: style
  }, restProps));
}));
AutocompleteItem.propTypes = {
  children: _propTypes["default"].node,
  style: _propTypes["default"].object,
  isSelected: _propTypes["default"].bool,
  isHighlighted: _propTypes["default"].bool
};
var _default = AutocompleteItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZUl0ZW0uanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlSXRlbSIsInByb3BzIiwicmVmIiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0ZWQiLCJzdHlsZSIsImNoaWxkcmVuIiwicmVzdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLGlCQUN2Qix1QkFBVyxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQUEsTUFDdkNDLGFBRHVDLEdBQ3NCRixLQUR0QixDQUN2Q0UsYUFEdUM7QUFBQSxNQUN4QkMsVUFEd0IsR0FDc0JILEtBRHRCLENBQ3hCRyxVQUR3QjtBQUFBLE1BQ1pDLEtBRFksR0FDc0JKLEtBRHRCLENBQ1pJLEtBRFk7QUFBQSxNQUNMQyxRQURLLEdBQ3NCTCxLQUR0QixDQUNMSyxRQURLO0FBQUEsTUFDUUMsU0FEUiw2Q0FDc0JOLEtBRHRCO0FBRy9DLFNBQ0UsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRUMsR0FEUDtBQUVFLElBQUEsYUFBYSxFQUFFQyxhQUZqQjtBQUdFLElBQUEsVUFBVSxFQUFFQyxVQUhkO0FBSUUsSUFBQSxLQUFLLEVBQUVFLFFBSlQ7QUFLRSxJQUFBLEtBQUssRUFBRUQ7QUFMVCxLQU1NRSxTQU5OLEVBREY7QUFVRCxDQWJELENBRHVCLENBQXpCO0FBaUJBUCxnQkFBZ0IsQ0FBQ1EsU0FBakIsR0FBNkI7QUFDM0JGLEVBQUFBLFFBQVEsRUFBRUcsc0JBQVVDLElBRE87QUFFM0JMLEVBQUFBLEtBQUssRUFBRUksc0JBQVVFLE1BRlU7QUFHM0JQLEVBQUFBLFVBQVUsRUFBRUssc0JBQVVHLElBSEs7QUFJM0JULEVBQUFBLGFBQWEsRUFBRU0sc0JBQVVHO0FBSkUsQ0FBN0I7ZUFPZVosZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE9wdGlvbiBmcm9tICcuLi8uLi9zZWxlY3QtbWVudS9zcmMvT3B0aW9uJ1xuXG5jb25zdCBBdXRvY29tcGxldGVJdGVtID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBBdXRvY29tcGxldGVJdGVtKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7IGlzSGlnaGxpZ2h0ZWQsIGlzU2VsZWN0ZWQsIHN0eWxlLCBjaGlsZHJlbiwgLi4ucmVzdFByb3BzIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxPcHRpb25cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGlzSGlnaGxpZ2h0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGxhYmVsPXtjaGlsZHJlbn1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG5cbkF1dG9jb21wbGV0ZUl0ZW0ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNIaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0b2NvbXBsZXRlSXRlbVxuIl19