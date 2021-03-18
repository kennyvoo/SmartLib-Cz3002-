import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import arrify from 'arrify';
import { Popover } from '../../popover';
import { Position } from '../../constants';
import { SearchIcon } from '../../icons';
import SelectMenuContent from './SelectMenuContent';
import OptionShapePropType from './OptionShapePropType';
import SelectedPropType from './SelectedPropType';

var noop = function noop() {};

var SelectMenu = memo(function SelectMenu(props) {
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
      position = _props$position === void 0 ? Position.BOTTOM_LEFT : _props$position,
      hasTitle = props.hasTitle,
      hasFilter = props.hasFilter,
      _props$filterPlacehol = props.filterPlaceholder,
      filterPlaceholder = _props$filterPlacehol === void 0 ? 'Filter...' : _props$filterPlacehol,
      _props$filterIcon = props.filterIcon,
      filterIcon = _props$filterIcon === void 0 ? SearchIcon : _props$filterIcon,
      detailView = props.detailView,
      emptyView = props.emptyView,
      titleView = props.titleView,
      _props$isMultiSelect = props.isMultiSelect,
      isMultiSelect = _props$isMultiSelect === void 0 ? false : _props$isMultiSelect,
      _props$closeOnSelect = props.closeOnSelect,
      closeOnSelect = _props$closeOnSelect === void 0 ? false : _props$closeOnSelect,
      rest = _objectWithoutProperties(props, ["title", "width", "height", "options", "onSelect", "onDeselect", "onFilterChange", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect"]);

  var selectedArray = useMemo(function () {
    return arrify(selected);
  }, [selected]);
  return React.createElement(Popover, _extends({
    minWidth: width,
    position: position,
    minHeight: height,
    content: function content(_ref) {
      var close = _ref.close;
      return React.createElement(SelectMenuContent, {
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
  title: PropTypes.string,

  /**
   * The width of the Select Menu.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The height of the Select Menu.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: PropTypes.arrayOf(OptionShapePropType),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: PropTypes.func,

  /**
   * The selected value/values.
   */
  selected: SelectedPropType,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, show the title.
   */
  hasTitle: PropTypes.bool,

  /**
   * When true, show the filter.
   */
  hasFilter: PropTypes.bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: PropTypes.string,

  /**
   * The icon of the search filter.
   */
  filterIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: PropTypes.func,

  /**
   * The position of the Select Menu.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool
};
export default SelectMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJ1c2VNZW1vIiwiUHJvcFR5cGVzIiwiYXJyaWZ5IiwiUG9wb3ZlciIsIlBvc2l0aW9uIiwiU2VhcmNoSWNvbiIsIlNlbGVjdE1lbnVDb250ZW50IiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsIlNlbGVjdGVkUHJvcFR5cGUiLCJub29wIiwiU2VsZWN0TWVudSIsInByb3BzIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJvblNlbGVjdCIsIm9uRGVzZWxlY3QiLCJvbkZpbHRlckNoYW5nZSIsInNlbGVjdGVkIiwicG9zaXRpb24iLCJCT1RUT01fTEVGVCIsImhhc1RpdGxlIiwiaGFzRmlsdGVyIiwiZmlsdGVyUGxhY2Vob2xkZXIiLCJmaWx0ZXJJY29uIiwiZGV0YWlsVmlldyIsImVtcHR5VmlldyIsInRpdGxlVmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0IiwicmVzdCIsInNlbGVjdGVkQXJyYXkiLCJjbG9zZSIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5T2YiLCJmdW5jIiwiYm9vbCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCIsIm9uZU9mIiwiVE9QIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT00iLCJCT1RUT01fUklHSFQiLCJub2RlIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixhQUEzQjtBQUNBLE9BQU9DLGlCQUFQ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QUFvQixDQUFDbkMsU0FBUyxDQUFDc0MsSUFBWCxFQUFpQnRDLFNBQVMsQ0FBQ2dELElBQTNCLENBQXBCLENBM0ZVOztBQTZGckI7Ozs7QUFJQXRCLEVBQUFBLFNBQVMsRUFBRTFCLFNBQVMsQ0FBQ21DLFNBQVYsQ0FBb0IsQ0FBQ25DLFNBQVMsQ0FBQ3NDLElBQVgsRUFBaUJ0QyxTQUFTLENBQUNnRCxJQUEzQixDQUFwQixDQWpHVTs7QUFtR3JCOzs7QUFHQW5CLEVBQUFBLGFBQWEsRUFBRTdCLFNBQVMsQ0FBQ3VDO0FBdEdKLENBQXZCO0FBeUdBLGVBQWU5QixVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBhcnJpZnkgZnJvbSAnYXJyaWZ5J1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCBTZWxlY3RNZW51Q29udGVudCBmcm9tICcuL1NlbGVjdE1lbnVDb250ZW50J1xuaW1wb3J0IE9wdGlvblNoYXBlUHJvcFR5cGUgZnJvbSAnLi9PcHRpb25TaGFwZVByb3BUeXBlJ1xuaW1wb3J0IFNlbGVjdGVkUHJvcFR5cGUgZnJvbSAnLi9TZWxlY3RlZFByb3BUeXBlJ1xuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgU2VsZWN0TWVudSA9IG1lbW8oZnVuY3Rpb24gU2VsZWN0TWVudShwcm9wcykge1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgd2lkdGggPSAyNDAsXG4gICAgaGVpZ2h0ID0gMjQ4LFxuICAgIG9wdGlvbnMsXG4gICAgb25TZWxlY3QgPSBub29wLFxuICAgIG9uRGVzZWxlY3QgPSBub29wLFxuICAgIG9uRmlsdGVyQ2hhbmdlLFxuICAgIHNlbGVjdGVkLFxuICAgIHBvc2l0aW9uID0gUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgaGFzVGl0bGUsXG4gICAgaGFzRmlsdGVyLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyID0gJ0ZpbHRlci4uLicsXG4gICAgZmlsdGVySWNvbiA9IFNlYXJjaEljb24sXG4gICAgZGV0YWlsVmlldyxcbiAgICBlbXB0eVZpZXcsXG4gICAgdGl0bGVWaWV3LFxuICAgIGlzTXVsdGlTZWxlY3QgPSBmYWxzZSxcbiAgICBjbG9zZU9uU2VsZWN0ID0gZmFsc2UsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBzZWxlY3RlZEFycmF5ID0gdXNlTWVtbygoKSA9PiBhcnJpZnkoc2VsZWN0ZWQpLCBbc2VsZWN0ZWRdKVxuXG4gIHJldHVybiAoXG4gICAgPFBvcG92ZXJcbiAgICAgIG1pbldpZHRoPXt3aWR0aH1cbiAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgIG1pbkhlaWdodD17aGVpZ2h0fVxuICAgICAgY29udGVudD17KHsgY2xvc2UgfSkgPT4gKFxuICAgICAgICA8U2VsZWN0TWVudUNvbnRlbnRcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgaGFzRmlsdGVyPXtoYXNGaWx0ZXJ9XG4gICAgICAgICAgZmlsdGVyUGxhY2Vob2xkZXI9e2ZpbHRlclBsYWNlaG9sZGVyfVxuICAgICAgICAgIGZpbHRlckljb249e2ZpbHRlckljb259XG4gICAgICAgICAgaGFzVGl0bGU9e2hhc1RpdGxlfVxuICAgICAgICAgIGlzTXVsdGlTZWxlY3Q9e2lzTXVsdGlTZWxlY3R9XG4gICAgICAgICAgdGl0bGVWaWV3PXt0aXRsZVZpZXd9XG4gICAgICAgICAgbGlzdFByb3BzPXt7XG4gICAgICAgICAgICBvblNlbGVjdCxcbiAgICAgICAgICAgIG9uRGVzZWxlY3QsXG4gICAgICAgICAgICBvbkZpbHRlckNoYW5nZSxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZEFycmF5XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbG9zZT17Y2xvc2V9XG4gICAgICAgICAgZGV0YWlsVmlldz17XG4gICAgICAgICAgICB0eXBlb2YgZGV0YWlsVmlldyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IGRldGFpbFZpZXcoeyBjbG9zZSB9KVxuICAgICAgICAgICAgICA6IGRldGFpbFZpZXdcbiAgICAgICAgICB9XG4gICAgICAgICAgZW1wdHlWaWV3PXtcbiAgICAgICAgICAgIHR5cGVvZiBlbXB0eVZpZXcgPT09ICdmdW5jdGlvbicgPyBlbXB0eVZpZXcoeyBjbG9zZSB9KSA6IGVtcHR5Vmlld1xuICAgICAgICAgIH1cbiAgICAgICAgICBjbG9zZU9uU2VsZWN0PXtjbG9zZU9uU2VsZWN0fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gIClcbn0pXG5cblNlbGVjdE1lbnUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIHRpdGxlIG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgKi9cbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogVGhlIG9wdGlvbnMgdG8gc2hvdyBpbiB0aGUgbWVudS5cbiAgICogW3sgbGFiZWw6IFN0cmluZywgdmFsdWU6IFN0cmluZyB8IE51bWJlciB9XVxuICAgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGFuIG9wdGlvbiBpcyBkZXNlbGVjdGVkLlxuICAgKi9cbiAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzZWxlY3RlZCB2YWx1ZS92YWx1ZXMuXG4gICAqL1xuICBzZWxlY3RlZDogU2VsZWN0ZWRQcm9wVHlwZSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICovXG4gIGlzTXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNob3cgdGhlIHRpdGxlLlxuICAgKi9cbiAgaGFzVGl0bGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNob3cgdGhlIGZpbHRlci5cbiAgICovXG4gIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZWhvbGRlciBvZiB0aGUgc2VhcmNoIGZpbHRlci5cbiAgICovXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiBvZiB0aGUgc2VhcmNoIGZpbHRlci5cbiAgICovXG4gIGZpbHRlckljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50VHlwZSwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgYXMgdGhlIG9uQ2hhbmdlKCkgZXZlbnQgZm9yIHRoZSBmaWx0ZXIuXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBQb3NpdGlvbi5UT1AsXG4gICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICBQb3NpdGlvbi5CT1RUT01fUklHSFRcbiAgXSksXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5vZGUsIG9yIGEgbm9kZSBpdHNlbGYsIHRoYXQgaXNcbiAgICogcmVuZGVyZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIFNlbGVjdCBNZW51IHRvIGdpdmUgYWRkaXRpb25hbFxuICAgKiBpbmZvcm1hdGlvbiB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGRldGFpbFZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAqIHJlbmRlcmVkIGluIHRoZSBoZWFkZXIgc2VjdGlvbiBvZiB0aGUgU2VsZWN0IE1lbnUgdG8gY3VzdG9taXplXG4gICAqIHRoZSBoZWFkZXIuXG4gICAqL1xuICB0aXRsZVZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAqIHJlbmRlcmVkIGluc3RlYWQgb2YgdGhlIG9wdGlvbnMgbGlzdCB3aGVuIHRoZXJlIGFyZSBubyBvcHRpb25zLlxuICAgKi9cbiAgZW1wdHlWaWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAvKlxuICAgKiBXaGVuIHRydWUsIG1lbnUgY2xvc2VzIG9uIG9wdGlvbiBzZWxlY3Rpb24uXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RNZW51XG4iXX0=