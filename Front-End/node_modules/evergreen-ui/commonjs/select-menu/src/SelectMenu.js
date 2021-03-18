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

var _arrify = _interopRequireDefault(require("arrify"));

var _popover = require("../../popover");

var _constants = require("../../constants");

var _icons = require("../../icons");

var _SelectMenuContent = _interopRequireDefault(require("./SelectMenuContent"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var _SelectedPropType = _interopRequireDefault(require("./SelectedPropType"));

var noop = function noop() {};

var SelectMenu = (0, _react.memo)(function SelectMenu(props) {
  var title = props.title,
      _props$width = props.width,
      width = _props$width === void 0 ? 240 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 248 : _props$height,
      options = props.options,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      _props$onDeselect = props.onDeselect,
      onDeselect = _props$onDeselect === void 0 ? noop : _props$onDeselect,
      onFilterChange = props.onFilterChange,
      selected = props.selected,
      _props$position = props.position,
      position = _props$position === void 0 ? _constants.Position.BOTTOM_LEFT : _props$position,
      hasTitle = props.hasTitle,
      hasFilter = props.hasFilter,
      _props$filterPlacehol = props.filterPlaceholder,
      filterPlaceholder = _props$filterPlacehol === void 0 ? 'Filter...' : _props$filterPlacehol,
      _props$filterIcon = props.filterIcon,
      filterIcon = _props$filterIcon === void 0 ? _icons.SearchIcon : _props$filterIcon,
      detailView = props.detailView,
      emptyView = props.emptyView,
      titleView = props.titleView,
      _props$isMultiSelect = props.isMultiSelect,
      isMultiSelect = _props$isMultiSelect === void 0 ? false : _props$isMultiSelect,
      _props$closeOnSelect = props.closeOnSelect,
      closeOnSelect = _props$closeOnSelect === void 0 ? false : _props$closeOnSelect,
      rest = (0, _objectWithoutProperties2["default"])(props, ["title", "width", "height", "options", "onSelect", "onDeselect", "onFilterChange", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect"]);
  var selectedArray = (0, _react.useMemo)(function () {
    return (0, _arrify["default"])(selected);
  }, [selected]);
  return _react["default"].createElement(_popover.Popover, (0, _extends2["default"])({
    minWidth: width,
    position: position,
    minHeight: height,
    content: function content(_ref) {
      var close = _ref.close;
      return _react["default"].createElement(_SelectMenuContent["default"], {
        width: width,
        height: height,
        options: options,
        title: title,
        hasFilter: hasFilter,
        filterPlaceholder: filterPlaceholder,
        filterIcon: filterIcon,
        hasTitle: hasTitle,
        isMultiSelect: isMultiSelect,
        titleView: titleView,
        listProps: {
          onSelect: onSelect,
          onDeselect: onDeselect,
          onFilterChange: onFilterChange,
          selected: selectedArray
        },
        close: close,
        detailView: typeof detailView === 'function' ? detailView({
          close: close
        }) : detailView,
        emptyView: typeof emptyView === 'function' ? emptyView({
          close: close
        }) : emptyView,
        closeOnSelect: closeOnSelect
      });
    }
  }, rest));
});
SelectMenu.propTypes = {
  /**
   * The title of the Select Menu.
   */
  title: _propTypes["default"].string,

  /**
   * The width of the Select Menu.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The height of the Select Menu.
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: _propTypes["default"].func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: _propTypes["default"].func,

  /**
   * The selected value/values.
   */
  selected: _SelectedPropType["default"],

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /**
   * When true, show the title.
   */
  hasTitle: _propTypes["default"].bool,

  /**
   * When true, show the filter.
   */
  hasFilter: _propTypes["default"].bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: _propTypes["default"].string,

  /**
   * The icon of the search filter.
   */
  filterIcon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: _propTypes["default"].func,

  /**
   * The position of the Select Menu.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool
};
var _default = SelectMenu;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudS5qcyJdLCJuYW1lcyI6WyJub29wIiwiU2VsZWN0TWVudSIsInByb3BzIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJvblNlbGVjdCIsIm9uRGVzZWxlY3QiLCJvbkZpbHRlckNoYW5nZSIsInNlbGVjdGVkIiwicG9zaXRpb24iLCJQb3NpdGlvbiIsIkJPVFRPTV9MRUZUIiwiaGFzVGl0bGUiLCJoYXNGaWx0ZXIiLCJmaWx0ZXJQbGFjZWhvbGRlciIsImZpbHRlckljb24iLCJTZWFyY2hJY29uIiwiZGV0YWlsVmlldyIsImVtcHR5VmlldyIsInRpdGxlVmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0IiwicmVzdCIsInNlbGVjdGVkQXJyYXkiLCJjbG9zZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5T2YiLCJPcHRpb25TaGFwZVByb3BUeXBlIiwiZnVuYyIsIlNlbGVjdGVkUHJvcFR5cGUiLCJib29sIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Iiwib25lT2YiLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9SSUdIVCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsaUJBQUssU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQSxNQUUvQ0MsS0FGK0MsR0FxQjdDRCxLQXJCNkMsQ0FFL0NDLEtBRitDO0FBQUEscUJBcUI3Q0QsS0FyQjZDLENBRy9DRSxLQUgrQztBQUFBLE1BRy9DQSxLQUgrQyw2QkFH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QW9CLENBQUNGLHNCQUFVUyxXQUFYLEVBQXdCVCxzQkFBVVUsT0FBbEMsQ0FBcEIsQ0E1RFM7O0FBOERyQjs7O0FBR0E3QixFQUFBQSxjQUFjLEVBQUVtQixzQkFBVU0sSUFqRUw7O0FBbUVyQjs7O0FBR0F2QixFQUFBQSxRQUFRLEVBQUVpQixzQkFBVVcsS0FBVixDQUFnQixDQUN4QjNCLG9CQUFTNEIsR0FEZSxFQUV4QjVCLG9CQUFTNkIsUUFGZSxFQUd4QjdCLG9CQUFTOEIsU0FIZSxFQUl4QjlCLG9CQUFTK0IsTUFKZSxFQUt4Qi9CLG9CQUFTQyxXQUxlLEVBTXhCRCxvQkFBU2dDLFlBTmUsQ0FBaEIsQ0F0RVc7O0FBK0VyQjs7Ozs7QUFLQXpCLEVBQUFBLFVBQVUsRUFBRVMsc0JBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0Ysc0JBQVVNLElBQVgsRUFBaUJOLHNCQUFVaUIsSUFBM0IsQ0FBcEIsQ0FwRlM7O0FBc0ZyQjs7Ozs7QUFLQXhCLEVBQUFBLFNBQVMsRUFBRU8sc0JBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0Ysc0JBQVVNLElBQVgsRUFBaUJOLHNCQUFVaUIsSUFBM0IsQ0FBcEIsQ0EzRlU7O0FBNkZyQjs7OztBQUlBekIsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVUUsU0FBVixDQUFvQixDQUFDRixzQkFBVU0sSUFBWCxFQUFpQk4sc0JBQVVpQixJQUEzQixDQUFwQixDQWpHVTs7QUFtR3JCOzs7QUFHQXRCLEVBQUFBLGFBQWEsRUFBRUssc0JBQVVRO0FBdEdKLENBQXZCO2VBeUdlbkMsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgYXJyaWZ5IGZyb20gJ2FycmlmeSdcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICcuLi8uLi9wb3BvdmVyJ1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgU2VsZWN0TWVudUNvbnRlbnQgZnJvbSAnLi9TZWxlY3RNZW51Q29udGVudCdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcbmltcG9ydCBTZWxlY3RlZFByb3BUeXBlIGZyb20gJy4vU2VsZWN0ZWRQcm9wVHlwZSdcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IFNlbGVjdE1lbnUgPSBtZW1vKGZ1bmN0aW9uIFNlbGVjdE1lbnUocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIHdpZHRoID0gMjQwLFxuICAgIGhlaWdodCA9IDI0OCxcbiAgICBvcHRpb25zLFxuICAgIG9uU2VsZWN0ID0gbm9vcCxcbiAgICBvbkRlc2VsZWN0ID0gbm9vcCxcbiAgICBvbkZpbHRlckNoYW5nZSxcbiAgICBzZWxlY3RlZCxcbiAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgIGhhc1RpdGxlLFxuICAgIGhhc0ZpbHRlcixcbiAgICBmaWx0ZXJQbGFjZWhvbGRlciA9ICdGaWx0ZXIuLi4nLFxuICAgIGZpbHRlckljb24gPSBTZWFyY2hJY29uLFxuICAgIGRldGFpbFZpZXcsXG4gICAgZW1wdHlWaWV3LFxuICAgIHRpdGxlVmlldyxcbiAgICBpc011bHRpU2VsZWN0ID0gZmFsc2UsXG4gICAgY2xvc2VPblNlbGVjdCA9IGZhbHNlLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzXG5cbiAgY29uc3Qgc2VsZWN0ZWRBcnJheSA9IHVzZU1lbW8oKCkgPT4gYXJyaWZ5KHNlbGVjdGVkKSwgW3NlbGVjdGVkXSlcblxuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBtaW5XaWR0aD17d2lkdGh9XG4gICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICBtaW5IZWlnaHQ9e2hlaWdodH1cbiAgICAgIGNvbnRlbnQ9eyh7IGNsb3NlIH0pID0+IChcbiAgICAgICAgPFNlbGVjdE1lbnVDb250ZW50XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIGhhc0ZpbHRlcj17aGFzRmlsdGVyfVxuICAgICAgICAgIGZpbHRlclBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICBmaWx0ZXJJY29uPXtmaWx0ZXJJY29ufVxuICAgICAgICAgIGhhc1RpdGxlPXtoYXNUaXRsZX1cbiAgICAgICAgICBpc011bHRpU2VsZWN0PXtpc011bHRpU2VsZWN0fVxuICAgICAgICAgIHRpdGxlVmlldz17dGl0bGVWaWV3fVxuICAgICAgICAgIGxpc3RQcm9wcz17e1xuICAgICAgICAgICAgb25TZWxlY3QsXG4gICAgICAgICAgICBvbkRlc2VsZWN0LFxuICAgICAgICAgICAgb25GaWx0ZXJDaGFuZ2UsXG4gICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRBcnJheVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xvc2U9e2Nsb3NlfVxuICAgICAgICAgIGRldGFpbFZpZXc9e1xuICAgICAgICAgICAgdHlwZW9mIGRldGFpbFZpZXcgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgPyBkZXRhaWxWaWV3KHsgY2xvc2UgfSlcbiAgICAgICAgICAgICAgOiBkZXRhaWxWaWV3XG4gICAgICAgICAgfVxuICAgICAgICAgIGVtcHR5Vmlldz17XG4gICAgICAgICAgICB0eXBlb2YgZW1wdHlWaWV3ID09PSAnZnVuY3Rpb24nID8gZW1wdHlWaWV3KHsgY2xvc2UgfSkgOiBlbXB0eVZpZXdcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xvc2VPblNlbGVjdD17Y2xvc2VPblNlbGVjdH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApXG59KVxuXG5TZWxlY3RNZW51LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgKi9cbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb25zIHRvIHNob3cgaW4gdGhlIG1lbnUuXG4gICAqIFt7IGxhYmVsOiBTdHJpbmcsIHZhbHVlOiBTdHJpbmcgfCBOdW1iZXIgfV1cbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKE9wdGlvblNoYXBlUHJvcFR5cGUpLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICovXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBhbiBvcHRpb24gaXMgZGVzZWxlY3RlZC5cbiAgICovXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2VsZWN0ZWQgdmFsdWUvdmFsdWVzLlxuICAgKi9cbiAgc2VsZWN0ZWQ6IFNlbGVjdGVkUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgbXVsdGkgc2VsZWN0IGlzIGFjY291bnRlZCBmb3IuXG4gICAqL1xuICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBzaG93IHRoZSB0aXRsZS5cbiAgICovXG4gIGhhc1RpdGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBzaG93IHRoZSBmaWx0ZXIuXG4gICAqL1xuICBoYXNGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2Vob2xkZXIgb2YgdGhlIHNlYXJjaCBmaWx0ZXIuXG4gICAqL1xuICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGljb24gb2YgdGhlIHNlYXJjaCBmaWx0ZXIuXG4gICAqL1xuICBmaWx0ZXJJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudFR5cGUsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGFzIHRoZSBvbkNoYW5nZSgpIGV2ZW50IGZvciB0aGUgZmlsdGVyLlxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgUG9zaXRpb24uVE9QLFxuICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgIFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgUG9zaXRpb24uQk9UVE9NX1JJR0hUXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAqIHJlbmRlcmVkIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBTZWxlY3QgTWVudSB0byBnaXZlIGFkZGl0aW9uYWxcbiAgICogaW5mb3JtYXRpb24gd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBkZXRhaWxWaWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbm9kZSwgb3IgYSBub2RlIGl0c2VsZiwgdGhhdCBpc1xuICAgKiByZW5kZXJlZCBpbiB0aGUgaGVhZGVyIHNlY3Rpb24gb2YgdGhlIFNlbGVjdCBNZW51IHRvIGN1c3RvbWl6ZVxuICAgKiB0aGUgaGVhZGVyLlxuICAgKi9cbiAgdGl0bGVWaWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbm9kZSwgb3IgYSBub2RlIGl0c2VsZiwgdGhhdCBpc1xuICAgKiByZW5kZXJlZCBpbnN0ZWFkIG9mIHRoZSBvcHRpb25zIGxpc3Qgd2hlbiB0aGVyZSBhcmUgbm8gb3B0aW9ucy5cbiAgICovXG4gIGVtcHR5VmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgLypcbiAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgKi9cbiAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TWVudVxuIl19