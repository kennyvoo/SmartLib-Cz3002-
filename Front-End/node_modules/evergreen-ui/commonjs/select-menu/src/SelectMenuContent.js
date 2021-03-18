"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _icons = require("../../icons");

var _OptionsList = _interopRequireDefault(require("./OptionsList"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var DefaultTitleView = function DefaultTitleView(_ref) {
  var close = _ref.close,
      title = _ref.title,
      headerHeight = _ref.headerHeight;
  return _react["default"].createElement(_layers.Pane, {
    display: "flex",
    alignItems: "center",
    borderBottom: "default",
    padding: 8,
    height: headerHeight,
    boxSizing: "border-box"
  }, _react["default"].createElement(_layers.Pane, {
    flex: "1",
    display: "flex",
    alignItems: "center"
  }, _react["default"].createElement(_typography.Heading, {
    size: 400
  }, title)), _react["default"].createElement(_buttons.IconButton, {
    icon: _icons.CrossIcon,
    appearance: "minimal",
    height: 24,
    onClick: close
  }));
};

DefaultTitleView.displayName = "DefaultTitleView";
DefaultTitleView.propTypes = {
  close: _propTypes["default"].func,
  title: _propTypes["default"].string,
  headerHeight: _propTypes["default"].number
};
var emptyArray = [];
var SelectMenuContent = (0, _react.memo)(function SelectMenuContent(props) {
  var title = props.title,
      width = props.width,
      height = props.height,
      _props$options = props.options,
      options = _props$options === void 0 ? emptyArray : _props$options,
      _props$hasTitle = props.hasTitle,
      hasTitle = _props$hasTitle === void 0 ? true : _props$hasTitle,
      _props$hasFilter = props.hasFilter,
      hasFilter = _props$hasFilter === void 0 ? true : _props$hasFilter,
      filterPlaceholder = props.filterPlaceholder,
      filterIcon = props.filterIcon,
      close = props.close,
      listProps = props.listProps,
      _props$titleView = props.titleView,
      titleView = _props$titleView === void 0 ? DefaultTitleView : _props$titleView,
      detailView = props.detailView,
      emptyView = props.emptyView,
      isMultiSelect = props.isMultiSelect,
      closeOnSelect = props.closeOnSelect;
  var headerHeight = 40;
  var optionsListHeight = hasTitle ? height - headerHeight : height;
  var hasDetailView = Boolean(detailView);
  var hasEmptyView = Boolean(emptyView);
  return _react["default"].createElement(_layers.Pane, {
    display: "flex",
    height: height
  }, _react["default"].createElement(_layers.Pane, {
    width: width,
    height: height,
    display: "flex",
    flexDirection: "column",
    borderRight: hasDetailView ? 'muted' : null
  }, hasTitle && titleView({
    close: close,
    title: title,
    headerHeight: headerHeight
  }), options.length === 0 && hasEmptyView ? _react["default"].createElement(_layers.Pane, {
    height: optionsListHeight
  }, emptyView) : _react["default"].createElement(_OptionsList["default"], (0, _extends2["default"])({
    height: optionsListHeight,
    hasFilter: hasFilter,
    filterPlaceholder: filterPlaceholder,
    filterIcon: filterIcon,
    options: options,
    isMultiSelect: isMultiSelect,
    close: close,
    closeOnSelect: closeOnSelect
  }, listProps))), hasDetailView && detailView);
});
SelectMenuContent.propTypes = {
  close: _propTypes["default"].func,
  title: _propTypes["default"].string,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  headerHeight: _propTypes["default"].number,
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),
  hasTitle: _propTypes["default"].bool,
  hasFilter: _propTypes["default"].bool,
  filterPlaceholder: _propTypes["default"].string,
  filterIcon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),
  listProps: _propTypes["default"].shape(_OptionsList["default"].propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: _propTypes["default"].node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: _propTypes["default"].node
};
var _default = SelectMenuContent;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudUNvbnRlbnQuanMiXSwibmFtZXMiOlsiRGVmYXVsdFRpdGxlVmlldyIsImNsb3NlIiwidGl0bGUiLCJoZWFkZXJIZWlnaHQiLCJDcm9zc0ljb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiZW1wdHlBcnJheSIsIlNlbGVjdE1lbnVDb250ZW50IiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJoYXNUaXRsZSIsImhhc0ZpbHRlciIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsImxpc3RQcm9wcyIsInRpdGxlVmlldyIsImRldGFpbFZpZXciLCJlbXB0eVZpZXciLCJpc011bHRpU2VsZWN0IiwiY2xvc2VPblNlbGVjdCIsIm9wdGlvbnNMaXN0SGVpZ2h0IiwiaGFzRGV0YWlsVmlldyIsIkJvb2xlYW4iLCJoYXNFbXB0eVZpZXciLCJsZW5ndGgiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsImJvb2wiLCJlbGVtZW50VHlwZSIsImVsZW1lbnQiLCJzaGFwZSIsIk9wdGlvbnNMaXN0Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsWUFBakIsUUFBaUJBLFlBQWpCO0FBQUEsU0FDdkIsZ0NBQUMsWUFBRDtBQUNFLElBQUEsT0FBTyxFQUFDLE1BRFY7QUFFRSxJQUFBLFVBQVUsRUFBQyxRQUZiO0FBR0UsSUFBQSxZQUFZLEVBQUMsU0FIZjtBQUlFLElBQUEsT0FBTyxFQUFFLENBSlg7QUFLRSxJ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QkFBbEIsQ0FObUI7QUFPNUJqQixFQUFBQSxRQUFRLEVBQUVWLHNCQUFVNEIsSUFQUTtBQVE1QmpCLEVBQUFBLFNBQVMsRUFBRVgsc0JBQVU0QixJQVJPO0FBUzVCaEIsRUFBQUEsaUJBQWlCLEVBQUVaLHNCQUFVRSxNQVREO0FBVTVCVyxFQUFBQSxVQUFVLEVBQUViLHNCQUFVeUIsU0FBVixDQUFvQixDQUFDekIsc0JBQVU2QixXQUFYLEVBQXdCN0Isc0JBQVU4QixPQUFsQyxDQUFwQixDQVZnQjtBQVc1QmhCLEVBQUFBLFNBQVMsRUFBRWQsc0JBQVUrQixLQUFWLENBQWdCQyx3QkFBWWpDLFNBQTVCLENBWGlCOztBQWE1Qjs7O0FBR0FtQixFQUFBQSxhQUFhLEVBQUVsQixzQkFBVTRCLElBaEJHOztBQWtCNUI7OztBQUdBVCxFQUFBQSxhQUFhLEVBQUVuQixzQkFBVTRCLElBckJHOztBQXVCNUI7OztBQUdBYixFQUFBQSxTQUFTLEVBQUVmLHNCQUFVeUIsU0FBVixDQUFvQixDQUFDekIsc0JBQVVDLElBQVgsRUFBaUJELHNCQUFVaUMsSUFBM0IsQ0FBcEIsQ0ExQmlCOztBQTRCNUI7OztBQUdBakIsRUFBQUEsVUFBVSxFQUFFaEIsc0JBQVVpQyxJQS9CTTs7QUFpQzVCOzs7QUFHQWhCLEVBQUFBLFNBQVMsRUFBRWpCLHNCQUFVaUM7QUFwQ08sQ0FBOUI7ZUF1Q2U1QixpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IE9wdGlvbnNMaXN0IGZyb20gJy4vT3B0aW9uc0xpc3QnXG5pbXBvcnQgT3B0aW9uU2hhcGVQcm9wVHlwZSBmcm9tICcuL09wdGlvblNoYXBlUHJvcFR5cGUnXG5cbmNvbnN0IERlZmF1bHRUaXRsZVZpZXcgPSAoeyBjbG9zZSwgdGl0bGUsIGhlYWRlckhlaWdodCB9KSA9PiAoXG4gIDxQYW5lXG4gICAgZGlzcGxheT1cImZsZXhcIlxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGJvcmRlckJvdHRvbT1cImRlZmF1bHRcIlxuICAgIHBhZGRpbmc9ezh9XG4gICAgaGVpZ2h0PXtoZWFkZXJIZWlnaHR9XG4gICAgYm94U2l6aW5nPVwiYm9yZGVyLWJveFwiXG4gID5cbiAgICA8UGFuZSBmbGV4PVwiMVwiIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgPEhlYWRpbmcgc2l6ZT17NDAwfT57dGl0bGV9PC9IZWFkaW5nPlxuICAgIDwvUGFuZT5cbiAgICA8SWNvbkJ1dHRvblxuICAgICAgaWNvbj17Q3Jvc3NJY29ufVxuICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIG9uQ2xpY2s9e2Nsb3NlfVxuICAgIC8+XG4gIDwvUGFuZT5cbilcblxuRGVmYXVsdFRpdGxlVmlldy5wcm9wVHlwZXMgPSB7XG4gIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5jb25zdCBlbXB0eUFycmF5ID0gW11cblxuY29uc3QgU2VsZWN0TWVudUNvbnRlbnQgPSBtZW1vKGZ1bmN0aW9uIFNlbGVjdE1lbnVDb250ZW50KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgb3B0aW9ucyA9IGVtcHR5QXJyYXksXG4gICAgaGFzVGl0bGUgPSB0cnVlLFxuICAgIGhhc0ZpbHRlciA9IHRydWUsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXIsXG4gICAgZmlsdGVySWNvbixcbiAgICBjbG9zZSxcbiAgICBsaXN0UHJvcHMsXG4gICAgdGl0bGVWaWV3ID0gRGVmYXVsdFRpdGxlVmlldyxcbiAgICBkZXRhaWxWaWV3LFxuICAgIGVtcHR5VmlldyxcbiAgICBpc011bHRpU2VsZWN0LFxuICAgIGNsb3NlT25TZWxlY3RcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gNDBcbiAgY29uc3Qgb3B0aW9uc0xpc3RIZWlnaHQgPSBoYXNUaXRsZSA/IGhlaWdodCAtIGhlYWRlckhlaWdodCA6IGhlaWdodFxuXG4gIGNvbnN0IGhhc0RldGFpbFZpZXcgPSBCb29sZWFuKGRldGFpbFZpZXcpXG4gIGNvbnN0IGhhc0VtcHR5VmlldyA9IEJvb2xlYW4oZW1wdHlWaWV3KVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8UGFuZVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBib3JkZXJSaWdodD17aGFzRGV0YWlsVmlldyA/ICdtdXRlZCcgOiBudWxsfVxuICAgICAgPlxuICAgICAgICB7aGFzVGl0bGUgJiYgdGl0bGVWaWV3KHsgY2xvc2UsIHRpdGxlLCBoZWFkZXJIZWlnaHQgfSl9XG4gICAgICAgIHtvcHRpb25zLmxlbmd0aCA9PT0gMCAmJiBoYXNFbXB0eVZpZXcgPyAoXG4gICAgICAgICAgPFBhbmUgaGVpZ2h0PXtvcHRpb25zTGlzdEhlaWdodH0+e2VtcHR5Vmlld308L1BhbmU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE9wdGlvbnNMaXN0XG4gICAgICAgICAgICBoZWlnaHQ9e29wdGlvbnNMaXN0SGVpZ2h0fVxuICAgICAgICAgICAgaGFzRmlsdGVyPXtoYXNGaWx0ZXJ9XG4gICAgICAgICAgICBmaWx0ZXJQbGFjZWhvbGRlcj17ZmlsdGVyUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBmaWx0ZXJJY29uPXtmaWx0ZXJJY29ufVxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIGlzTXVsdGlTZWxlY3Q9e2lzTXVsdGlTZWxlY3R9XG4gICAgICAgICAgICBjbG9zZT17Y2xvc2V9XG4gICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXtjbG9zZU9uU2VsZWN0fVxuICAgICAgICAgICAgey4uLmxpc3RQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9QYW5lPlxuICAgICAge2hhc0RldGFpbFZpZXcgJiYgZGV0YWlsVmlld31cbiAgICA8L1BhbmU+XG4gIClcbn0pXG5cblNlbGVjdE1lbnVDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG4gIGhhc1RpdGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGFzRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpbHRlckljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50VHlwZSwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgbGlzdFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoT3B0aW9uc0xpc3QucHJvcFR5cGVzKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICovXG4gIGlzTXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qXG4gICAqIFdoZW4gdHJ1ZSwgbWVudSBjbG9zZXMgb24gb3B0aW9uIHNlbGVjdGlvbi5cbiAgICovXG4gIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOb2RlIHRoYXQgaXMgcGxhY2VkIGluIHRoZSBoZWFkZXIgc2VjdGlvbiwgYWJvdmUgdGhlIG9wdGlvbnMuXG4gICAqL1xuICB0aXRsZVZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKlxuICAgKiBOb2RlIHRoYXQgaXMgcGxhY2VkIHJpZ2h0IG5leHQgdG8gdGhlIG9wdGlvbnMuXG4gICAqL1xuICBkZXRhaWxWaWV3OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogTm9kZSB0aGF0IGlzIGRpc3BsYXllZCBpbnN0ZWFkIG9mIG9wdGlvbnMgbGlzdCB3aGVuIHRoZXJlIGFyZSBubyBvcHRpb25zLlxuICAgKi9cbiAgZW1wdHlWaWV3OiBQcm9wVHlwZXMubm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RNZW51Q29udGVudFxuIl19