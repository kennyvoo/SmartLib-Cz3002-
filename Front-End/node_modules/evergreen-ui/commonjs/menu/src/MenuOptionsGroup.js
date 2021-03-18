"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _MenuOption = _interopRequireDefault(require("./MenuOption"));

var MenuOptionsGroup = (0, _react.memo)((0, _react.forwardRef)(function MenuOptionsGroup(props, ref) {
  var title = props.title,
      options = props.options,
      selected = props.selected,
      onChange = props.onChange;
  return _react["default"].createElement(_layers.Pane, {
    ref: ref,
    paddingY: 8
  }, title && _react["default"].createElement(_typography.Heading, {
    size: 100,
    marginLeft: 44,
    marginRight: 16,
    marginY: 8
  }, title), _react["default"].createElement(_layers.Pane, null, options.map(function (option) {
    return _react["default"].createElement(_MenuOption["default"], {
      key: option.value,
      isSelected: option.value === selected,
      onSelect: function onSelect() {
        return onChange(option.value);
      }
    }, option.label);
  })));
}));
MenuOptionsGroup.propTypes = {
  /**
   * Title of the menu group.
   */
  title: _propTypes["default"].node,

  /**
   * The current value of the option group.
   */
  selected: _propTypes["default"].any,

  /**
   * Function called when selection changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * List of options rendered in the group.
   */
  options: _propTypes["default"].array
};
var _default = MenuOptionsGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51T3B0aW9uc0dyb3VwLmpzIl0sIm5hbWVzIjpbIk1lbnVPcHRpb25zR3JvdXAiLCJwcm9wcyIsInJlZiIsInRpdGxlIiwib3B0aW9ucyIsInNlbGVjdGVkIiwib25DaGFuZ2UiLCJtYXAiLCJvcHRpb24iLCJ2YWx1ZSIsImxhYmVsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImFueSIsImZ1bmMiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxpQkFDdkIsdUJBQVcsU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUFBLE1BQ3ZDQyxLQUR1QyxHQUNBRixLQURBLENBQ3ZDRSxLQUR1QztBQUFBLE1BQ2hDQyxPQURnQyxHQUNBSCxLQURBLENBQ2hDRyxPQURnQztBQUFBLE1BQ3ZCQyxRQUR1QixHQUNBSixLQURBLENBQ3ZCSSxRQUR1QjtBQUFBLE1BQ2JDLFFBRGEsR0FDQUwsS0FEQSxDQUNiSyxRQURhO0FBRy9DLFNBQ0UsZ0NBQUMsWUFBRDtBQUFNLElBQUEsR0FBRyxFQUFFSixHQUFYO0FBQWdCLElBQUEsUUFBUSxFQUFFO0FBQTFCLEtBQ0dDLEtBQUssSUFDSixnQ0FBQyxtQkFBRDtBQUFTLElBQUEsSUFBSSxFQUFFLEdBQWY7QUFBb0IsSUFBQSxVQUFVLEVBQUUsRUFBaEM7QUFBb0MsSUFBQSxXQUFXLEVBQUUsRUFBakQ7QUFBcUQsSUFBQSxPQUFPLEVBQUU7QUFBOUQsS0FDR0EsS0FESCxDQUZKLEVBTUUsZ0NBQUMsWUFBRCxRQUNHQyxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFBQyxNQUFNLEVBQUk7QUFDckIsV0FDRSxnQ0FBQyxzQkFBRDtBQUNFLE1BQUEsR0FBRyxFQUFFQSxNQUFNLENBQUNDLEtBRGQ7QUFFRSxNQUFBLFVBQVUsRUFBRUQsTUFBTSxDQUFDQyxLQUFQLEtBQWlCSixRQUYvQjtBQUdFLE1BQUEsUUFBUSxFQUFFO0FBQUEsZUFBTUMsUUFBUSxDQUFDRSxNQUFNLENBQUNDLEtBQVIsQ0FBZDtBQUFBO0FBSFosT0FLR0QsTUFBTSxDQUFDRSxLQUxWLENBREY7QUFTRCxHQVZBLENBREgsQ0FORixDQURGO0FBc0JELENBekJELENBRHVCLENBQXpCO0FBNkJBVixnQkFBZ0IsQ0FBQ1csU0FBakIsR0FBNkI7QUFDM0I7OztBQUdBUixFQUFBQSxLQUFLLEVBQUVTLHNCQUFVQyxJQUpVOztBQU0zQjs7O0FBR0FSLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVFLEdBVE87O0FBVzNCOzs7QUFHQVIsRUFBQUEsUUFBUSxFQUFFTSxzQkFBVUcsSUFkTzs7QUFnQjNCOzs7QUFHQVgsRUFBQUEsT0FBTyxFQUFFUSxzQkFBVUk7QUFuQlEsQ0FBN0I7ZUFzQmVoQixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL01lbnVPcHRpb24nXG5cbmNvbnN0IE1lbnVPcHRpb25zR3JvdXAgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIE1lbnVPcHRpb25zR3JvdXAocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHsgdGl0bGUsIG9wdGlvbnMsIHNlbGVjdGVkLCBvbkNoYW5nZSB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSByZWY9e3JlZn0gcGFkZGluZ1k9ezh9PlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9ezEwMH0gbWFyZ2luTGVmdD17NDR9IG1hcmdpblJpZ2h0PXsxNn0gbWFyZ2luWT17OH0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZT5cbiAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17b3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25DaGFuZ2Uob3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgIDwvTWVudU9wdGlvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfSlcbilcblxuTWVudU9wdGlvbnNHcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgbWVudSBncm91cC5cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIG9wdGlvbiBncm91cC5cbiAgICovXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogTGlzdCBvZiBvcHRpb25zIHJlbmRlcmVkIGluIHRoZSBncm91cC5cbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uc0dyb3VwXG4iXX0=