import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fuzzaldrin from 'fuzzaldrin-plus';
import VirtualList from 'react-tiny-virtual-list';
import { Pane } from '../../layers';
import { SearchIcon } from '../../icons';
import TableHead from '../../table/src/TableHead';
import SearchTableHeaderCell from '../../table/src/SearchTableHeaderCell';
import OptionShapePropType from './OptionShapePropType';
import Option from './Option';
/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */

var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return fuzzaldrin.filter(options, input, {
    key: key
  });
};
/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */


var itemRenderer = function itemRenderer(props) {
  return React.createElement(Option, props);
};

itemRenderer.displayName = "itemRenderer";

var noop = function noop() {};

var OptionsList = /*#__PURE__*/function (_PureComponent) {
  _inherits(OptionsList, _PureComponent);

  var _super = _createSuper(OptionsList);

  function OptionsList(props, context) {
    var _this;

    _classCallCheck(this, OptionsList);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (item) {
      var selected = _this.state.selected;
      return Boolean(selected.find(function (selectedItem) {
        return selectedItem === item.value;
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "search", function (options) {
      var optionsFilter = _this.props.optionsFilter;
      var searchValue = _this.state.searchValue;

      if (searchValue.trim() === '') {
        return options;
      } // Preserve backwards compatibility with allowing custom filters, which accept array of strings


      if (typeof optionsFilter === 'function') {
        return optionsFilter(options.map(function (item) {
          return item.label;
        }), searchValue).map(function (name) {
          return options.find(function (item) {
            return item.label === name;
          });
        });
      }

      return fuzzyFilter(options, searchValue, {
        key: 'label'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentIndex", function () {
      var selected = _this.props.selected;

      var options = _this.getFilteredOptions();

      return options.findIndex(function (option) {
        return option.value === selected[selected.length - 1];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowUp') {
        _this.handleArrowUp();
      }

      if (e.key === 'ArrowDown') {
        _this.handleArrowDown();
      }

      if (e.key === 'Enter') {
        _this.handleEnter();
      }

      if (e.key === 'Escape') {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowUp", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() - 1;

      if (nextIndex < 0) {
        nextIndex = options.length - 1;
      }

      if (_this.isSelected(options[nextIndex])) {
        return;
      }

      onSelect(options[nextIndex]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowDown", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() + 1;

      if (nextIndex === options.length) {
        nextIndex = 0;
      }

      if (!_this.isSelected(options[nextIndex])) {
        onSelect(options[nextIndex]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      var isSelected = _this.getCurrentIndex() !== -1;

      if (isSelected) {
        if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
          _this.props.close();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      });

      _this.props.onFilterChange(searchValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (item) {
      if (_this.isSelected(item)) {
        _this.props.onDeselect(item);
      } else {
        _this.props.onSelect(item);
      }

      if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeselect", function (item) {
      _this.props.onDeselect(item);
    });

    _defineProperty(_assertThisInitialized(_this), "assignSearchRef", function (ref) {
      _this.searchRef = ref;
    });

    _this.state = {
      searchValue: props.defaultSearchValue,
      selected: props.selected
    };
    return _this;
  }

  _createClass(OptionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var hasFilter = this.props.hasFilter;
      if (!hasFilter) return;
      /**
       * Hacky solution for broken autoFocus
       * https://github.com/segmentio/evergreen/issues/90
       */

      this.requestId = requestAnimationFrame(function () {
        if (_this2.searchRef) _this2.searchRef.focus();
      });
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.requestId);
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selected !== this.props.selected) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          selected: this.props.selected
        });
      }
    }
  }, {
    key: "getFilteredOptions",
    value: function getFilteredOptions() {
      var options = this.props.options;
      return this.search(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          originalOptions = _this$props.options,
          close = _this$props.close,
          closeOnSelect = _this$props.closeOnSelect,
          width = _this$props.width,
          height = _this$props.height,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          onFilterChange = _this$props.onFilterChange,
          selected = _this$props.selected,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          optionSize = _this$props.optionSize,
          _renderItem = _this$props.renderItem,
          optionsFilter = _this$props.optionsFilter,
          isMultiSelect = _this$props.isMultiSelect,
          defaultSearchValue = _this$props.defaultSearchValue,
          props = _objectWithoutProperties(_this$props, ["options", "close", "closeOnSelect", "width", "height", "onSelect", "onDeselect", "onFilterChange", "selected", "hasFilter", "filterPlaceholder", "filterIcon", "optionSize", "renderItem", "optionsFilter", "isMultiSelect", "defaultSearchValue"]);

      var options = this.search(originalOptions);
      var listHeight = height - (hasFilter ? 32 : 0);
      var currentIndex = this.getCurrentIndex();
      var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
      return React.createElement(Pane, _extends({
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column"
      }, props), hasFilter && React.createElement(TableHead, null, React.createElement(SearchTableHeaderCell, {
        onChange: this.handleChange,
        ref: this.assignSearchRef,
        borderRight: null,
        height: 32,
        placeholder: filterPlaceholder,
        icon: filterIcon
      })), React.createElement(Pane, {
        flex: 1
      }, React.createElement(VirtualList, {
        height: listHeight,
        width: "100%",
        itemSize: optionSize,
        itemCount: options.length,
        overscanCount: 20,
        scrollToAlignment: "auto",
        scrollToIndex: scrollToIndex || undefined,
        renderItem: function renderItem(_ref2) {
          var index = _ref2.index,
              style = _ref2.style;
          var item = options[index];

          var isSelected = _this3.isSelected(item);

          return _renderItem({
            key: item.value,
            label: item.label,
            icon: item.icon,
            style: style,
            height: optionSize,
            onSelect: function onSelect() {
              return _this3.handleSelect(item);
            },
            onDeselect: function onDeselect() {
              return _this3.handleDeselect(item);
            },
            isSelectable: !isSelected || isMultiSelect,
            isSelected: isSelected,
            disabled: item.disabled,
            tabIndex: 0
          });
        }
      })));
    }
  }]);

  return OptionsList;
}(PureComponent);

OptionsList.displayName = "OptionsList";

_defineProperty(OptionsList, "propTypes", {
  options: PropTypes.arrayOf(OptionShapePropType),
  close: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * This holds the values of the options
   */
  selected: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onFilterChange: PropTypes.func,
  hasFilter: PropTypes.bool,
  optionSize: PropTypes.number,
  renderItem: PropTypes.func,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
  optionsFilter: PropTypes.func,
  defaultSearchValue: PropTypes.string
});

_defineProperty(OptionsList, "defaultProps", {
  options: [],

  /**
   * Including border bottom
   * For some reason passing height to TableRow doesn't work
   * TODO: fix hacky solution
   */
  optionSize: 33,
  onSelect: noop,
  onDeselect: noop,
  onFilterChange: noop,
  selected: [],
  renderItem: itemRenderer,
  filterPlaceholder: 'Filter...',
  filterIcon: SearchIcon,
  defaultSearchValue: ''
});

export { OptionsList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uc0xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnV6emFsZHJpbiIsIlZpcnR1YWxMaXN0IiwiUGFuZSIsIlNlYXJjaEljb24iLCJUYWJsZUhlYWQiLCJTZWFyY2hUYWJsZUhlYWRlckNlbGwiLCJPcHRpb25TaGFwZVByb3BUeXBlIiwiT3B0aW9uIiwiZnV6enlGaWx0ZXIiLCJvcHRpb25zIiwiaW5wdXQiLCJrZXkiLCJmaWx0ZXIiLCJpdGVtUmVuZGVyZXIiLCJwcm9wcyIsIm5vb3AiLCJPcHRpb25zTGlzdCIsImNvbnRleHQiLCJpdGVtIiwic2VsZWN0ZWQiLCJzdGF0ZSIsIkJvb2xlYW4iLCJmaW5kIiwic2VsZWN0ZWRJdGVtIiwidmFsdWUiLCJvcHRpb25zRmlsdGVyIiwic2VhcmNoVmFsdWUiLCJ0cmltIiwibWFwIiwibGFiZWwiLCJuYW1lIiwiZ2V0RmlsdGVyZWRPcHRpb25zIiwiZmluZEluZGV4Iiwib3B0aW9uIiwibGVuZ3RoIiwiZSIsImhhbmRsZUFycm93VXAiLCJoYW5kbGVBcnJvd0Rvd24iLCJoYW5kbGVFbnRlciIsImNsb3NlIiwib25TZWxlY3QiLCJuZXh0SW5kZXgiLCJnZXRDdXJyZW50SW5kZXgiLCJpc1NlbGVjdGVkIiwiaXNNdWx0aVNlbGVjdCIsImNsb3NlT25TZWxlY3QiLCJzZXRTdGF0ZSIsIm9uRmlsdGVyQ2hhbmdlIiwib25EZXNlbGVjdCIsInJlZiIsInNlYXJjaFJlZiIsImRlZmF1bHRTZWFyY2hWYWx1ZSIsImhhc0ZpbHRlciIsInJlcXVlc3RJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZvY3VzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2UHJvcHMiLCJzZWFyY2giLCJvcmlnaW5hbE9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsIm9wdGlvblNpemUiLCJyZW5kZXJJdGVtIiwibGlzdEhlaWdodCIsImN1cnJlbnRJbmRleCIsInNjcm9sbFRvSW5kZXgiLCJoYW5kbGVDaGFuZ2UiLCJhc3NpZ25TZWFyY2hSZWYiLCJ1bmRlZmluZWQiLCJpbmRleCIsInN0eWxlIiwiaWNvbiIsImhhbmRsZVNlbGVjdCIsImhhbmRsZURlc2VsZWN0IiwiaXNTZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsImFycmF5T2YiLCJmdW5jIiwibnVtYmVyIiwiYm9vbCIsIm9uZU9mVHlwZSIsInN0cmluZyIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGlCQUF2QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsYUFBM0I7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLDJCQUF0QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLHVDQUFsQztBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7QUFFQTs7Ozs7OztBQU1BLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBVUMsS0FBVixRQUE2QjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUMvQyxTQUFPWCxVQUFVLENBQUNZLE1BQVgsQ0FBa0JILE9BQWxCLEVBQTJCQyxLQUEzQixFQUFrQztBQUFFQyxJQUFBQSxHQUFHLEVBQUhBO0FBQUYsR0FBbEMsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7O0FBSUEs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RUFBQUEsVUFBVSxFQUFFLEVBUFE7QUFRcEI1QixFQUFBQSxRQUFRLEVBQUV6QixJQVJVO0FBU3BCaUMsRUFBQUEsVUFBVSxFQUFFakMsSUFUUTtBQVVwQmdDLEVBQUFBLGNBQWMsRUFBRWhDLElBVkk7QUFXcEJJLEVBQUFBLFFBQVEsRUFBRSxFQVhVO0FBWXBCa0QsRUFBQUEsVUFBVSxFQUFFeEQsWUFaUTtBQWFwQnFELEVBQUFBLGlCQUFpQixFQUFFLFdBYkM7QUFjcEJDLEVBQUFBLFVBQVUsRUFBRWhFLFVBZFE7QUFlcEJnRCxFQUFBQSxrQkFBa0IsRUFBRTtBQWZBLEM7O1NBbkNIbkMsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZnV6emFsZHJpbiBmcm9tICdmdXp6YWxkcmluLXBsdXMnXG5pbXBvcnQgVmlydHVhbExpc3QgZnJvbSAncmVhY3QtdGlueS12aXJ0dWFsLWxpc3QnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICcuLi8uLi90YWJsZS9zcmMvVGFibGVIZWFkJ1xuaW1wb3J0IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuLi8uLi90YWJsZS9zcmMvU2VhcmNoVGFibGVIZWFkZXJDZWxsJ1xuaW1wb3J0IE9wdGlvblNoYXBlUHJvcFR5cGUgZnJvbSAnLi9PcHRpb25TaGFwZVByb3BUeXBlJ1xuaW1wb3J0IE9wdGlvbiBmcm9tICcuL09wdGlvbidcblxuLyoqXG4gKiBGdXp6YWxkcmluLXBsdXMgaXMgdGhlIGRlZmF1bHQgZmlsdGVyLCBidXQgeW91IGNhbiB1c2UgeW91ciBvd25cbiAqIGFzIGxvbmcgYXMgdGhleSBmb2xsb3cgdGhlIGZvbGxvd2luZyBzaWduYXR1cmU6XG4gKiBAcGFyYW0gb3B0aW9ucyA8QXJyYXlbU3RyaW5nXT4gLSBbJ2xhYmVsJywgJ2xhYmVsMicsIC4uLl1cbiAqIEBwYXJhbSBpbnB1dCA8U3RyaW5nPlxuICovXG5jb25zdCBmdXp6eUZpbHRlciA9IChvcHRpb25zLCBpbnB1dCwgeyBrZXkgfSkgPT4ge1xuICByZXR1cm4gZnV6emFsZHJpbi5maWx0ZXIob3B0aW9ucywgaW5wdXQsIHsga2V5IH0pXG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBpdGVtIHJlbmRlcmVyIG9mIG9wdGlvbnNcbiAqIHlvdSBjYW4gcGFzcyBjdXN0b20gcmVuZGVyZXJzIGFzIGxvbmcgYXMgdGhleSB3b3JrIHRoZSBzYW1lIGFzIHRoZSBPcHRpb25cbiAqL1xuY29uc3QgaXRlbVJlbmRlcmVyID0gcHJvcHMgPT4gPE9wdGlvbiB7Li4ucHJvcHN9IC8+XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKE9wdGlvblNoYXBlUHJvcFR5cGUpLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG11bHRpIHNlbGVjdCBpcyBhY2NvdW50ZWQgZm9yLlxuICAgICAqL1xuICAgIGlzTXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBob2xkcyB0aGUgdmFsdWVzIG9mIHRoZSBvcHRpb25zXG4gICAgICovXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25GaWx0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3B0aW9uU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZW5kZXJJdGVtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWx0ZXJJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudFR5cGUsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgb3B0aW9uc0ZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGVmYXVsdFNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFtdLFxuICAgIC8qKlxuICAgICAqIEluY2x1ZGluZyBib3JkZXIgYm90dG9tXG4gICAgICogRm9yIHNvbWUgcmVhc29uIHBhc3NpbmcgaGVpZ2h0IHRvIFRhYmxlUm93IGRvZXNuJ3Qgd29ya1xuICAgICAqIFRPRE86IGZpeCBoYWNreSBzb2x1dGlvblxuICAgICAqL1xuICAgIG9wdGlvblNpemU6IDMzLFxuICAgIG9uU2VsZWN0OiBub29wLFxuICAgIG9uRGVzZWxlY3Q6IG5vb3AsXG4gICAgb25GaWx0ZXJDaGFuZ2U6IG5vb3AsXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIHJlbmRlckl0ZW06IGl0ZW1SZW5kZXJlcixcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogJ0ZpbHRlci4uLicsXG4gICAgZmlsdGVySWNvbjogU2VhcmNoSWNvbixcbiAgICBkZWZhdWx0U2VhcmNoVmFsdWU6ICcnXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFZhbHVlOiBwcm9wcy5kZWZhdWx0U2VhcmNoVmFsdWUsXG4gICAgICBzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWRcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGhhc0ZpbHRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghaGFzRmlsdGVyKSByZXR1cm5cbiAgICAvKipcbiAgICAgKiBIYWNreSBzb2x1dGlvbiBmb3IgYnJva2VuIGF1dG9Gb2N1c1xuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vZXZlcmdyZWVuL2lzc3Vlcy85MFxuICAgICAqL1xuICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaFJlZikgdGhpcy5zZWFyY2hSZWYuZm9jdXMoKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bilcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuc2VsZWN0ZWQgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlzU2VsZWN0ZWQgPSBpdGVtID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gQm9vbGVhbihzZWxlY3RlZC5maW5kKHNlbGVjdGVkSXRlbSA9PiBzZWxlY3RlZEl0ZW0gPT09IGl0ZW0udmFsdWUpKVxuICB9XG5cbiAgc2VhcmNoID0gb3B0aW9ucyA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zRmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWFyY2hWYWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKHNlYXJjaFZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBvcHRpb25zXG4gICAgfVxuXG4gICAgLy8gUHJlc2VydmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBhbGxvd2luZyBjdXN0b20gZmlsdGVycywgd2hpY2ggYWNjZXB0IGFycmF5IG9mIHN0cmluZ3NcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNGaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvcHRpb25zRmlsdGVyKFxuICAgICAgICBvcHRpb25zLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgICBzZWFyY2hWYWx1ZVxuICAgICAgKS5tYXAobmFtZSA9PiBvcHRpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBuYW1lKSlcbiAgICB9XG5cbiAgICByZXR1cm4gZnV6enlGaWx0ZXIob3B0aW9ucywgc2VhcmNoVmFsdWUsIHsga2V5OiAnbGFiZWwnIH0pXG4gIH1cblxuICBnZXRDdXJyZW50SW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucygpXG5cbiAgICByZXR1cm4gb3B0aW9ucy5maW5kSW5kZXgoXG4gICAgICBvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZFtzZWxlY3RlZC5sZW5ndGggLSAxXVxuICAgIClcbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaChvcHRpb25zKVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93VXAoKVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dEb3duKClcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuaGFuZGxlRW50ZXIoKVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFycm93VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucygpXG5cbiAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAtIDFcblxuICAgIGlmIChuZXh0SW5kZXggPCAwKSB7XG4gICAgICBuZXh0SW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDFcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKG9wdGlvbnNbbmV4dEluZGV4XSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG9uU2VsZWN0KG9wdGlvbnNbbmV4dEluZGV4XSlcbiAgfVxuXG4gIGhhbmRsZUFycm93RG93biA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKClcblxuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpICsgMVxuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIG5leHRJbmRleCA9IDBcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNTZWxlY3RlZChvcHRpb25zW25leHRJbmRleF0pKSB7XG4gICAgICBvblNlbGVjdChvcHRpb25zW25leHRJbmRleF0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgIT09IC0xXG5cbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzTXVsdGlTZWxlY3QgJiYgdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IHNlYXJjaFZhbHVlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFZhbHVlXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKHNlYXJjaFZhbHVlKVxuICB9XG5cbiAgaGFuZGxlU2VsZWN0ID0gaXRlbSA9PiB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZChpdGVtKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkRlc2VsZWN0KGl0ZW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaXNNdWx0aVNlbGVjdCAmJiB0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURlc2VsZWN0ID0gaXRlbSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkRlc2VsZWN0KGl0ZW0pXG4gIH1cblxuICBhc3NpZ25TZWFyY2hSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuc2VhcmNoUmVmID0gcmVmXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9uczogb3JpZ2luYWxPcHRpb25zLFxuICAgICAgY2xvc2UsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3QsXG4gICAgICBvbkZpbHRlckNoYW5nZSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgaGFzRmlsdGVyLFxuICAgICAgZmlsdGVyUGxhY2Vob2xkZXIsXG4gICAgICBmaWx0ZXJJY29uLFxuICAgICAgb3B0aW9uU2l6ZSxcbiAgICAgIHJlbmRlckl0ZW0sXG4gICAgICBvcHRpb25zRmlsdGVyLFxuICAgICAgaXNNdWx0aVNlbGVjdCxcbiAgICAgIGRlZmF1bHRTZWFyY2hWYWx1ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zZWFyY2gob3JpZ2luYWxPcHRpb25zKVxuICAgIGNvbnN0IGxpc3RIZWlnaHQgPSBoZWlnaHQgLSAoaGFzRmlsdGVyID8gMzIgOiAwKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KClcbiAgICBjb25zdCBzY3JvbGxUb0luZGV4ID0gY3VycmVudEluZGV4ID09PSAtMSA/IDAgOiBjdXJyZW50SW5kZXhcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtoYXNGaWx0ZXIgJiYgKFxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8U2VhcmNoVGFibGVIZWFkZXJDZWxsXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcmVmPXt0aGlzLmFzc2lnblNlYXJjaFJlZn1cbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ9e251bGx9XG4gICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgaWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICl9XG4gICAgICAgIDxQYW5lIGZsZXg9ezF9PlxuICAgICAgICAgIDxWaXJ0dWFsTGlzdFxuICAgICAgICAgICAgaGVpZ2h0PXtsaXN0SGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGl0ZW1TaXplPXtvcHRpb25TaXplfVxuICAgICAgICAgICAgaXRlbUNvdW50PXtvcHRpb25zLmxlbmd0aH1cbiAgICAgICAgICAgIG92ZXJzY2FuQ291bnQ9ezIwfVxuICAgICAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ9XCJhdXRvXCJcbiAgICAgICAgICAgIHNjcm9sbFRvSW5kZXg9e3Njcm9sbFRvSW5kZXggfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IG9wdGlvbnNbaW5kZXhdXG4gICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSlcbiAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckl0ZW0oe1xuICAgICAgICAgICAgICAgIGtleTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBvcHRpb25TaXplLFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0OiAoKSA9PiB0aGlzLmhhbmRsZVNlbGVjdChpdGVtKSxcbiAgICAgICAgICAgICAgICBvbkRlc2VsZWN0OiAoKSA9PiB0aGlzLmhhbmRsZURlc2VsZWN0KGl0ZW0pLFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0YWJsZTogIWlzU2VsZWN0ZWQgfHwgaXNNdWx0aVNlbGVjdCxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIHRhYkluZGV4OiAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==