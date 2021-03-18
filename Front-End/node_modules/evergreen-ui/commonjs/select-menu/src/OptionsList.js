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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fuzzaldrinPlus = _interopRequireDefault(require("fuzzaldrin-plus"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _layers = require("../../layers");

var _icons = require("../../icons");

var _TableHead = _interopRequireDefault(require("../../table/src/TableHead"));

var _SearchTableHeaderCell = _interopRequireDefault(require("../../table/src/SearchTableHeaderCell"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var _Option = _interopRequireDefault(require("./Option"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */
var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return _fuzzaldrinPlus["default"].filter(options, input, {
    key: key
  });
};
/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */


var itemRenderer = function itemRenderer(props) {
  return _react["default"].createElement(_Option["default"], props);
};

itemRenderer.displayName = "itemRenderer";

var noop = function noop() {};

var OptionsList = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(OptionsList, _PureComponent);

  var _super = _createSuper(OptionsList);

  function OptionsList(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, OptionsList);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isSelected", function (item) {
      var selected = _this.state.selected;
      return Boolean(selected.find(function (selectedItem) {
        return selectedItem === item.value;
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "search", function (options) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCurrentIndex", function () {
      var selected = _this.props.selected;

      var options = _this.getFilteredOptions();

      return options.findIndex(function (option) {
        return option.value === selected[selected.length - 1];
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleArrowUp", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleArrowDown", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      var isSelected = _this.getCurrentIndex() !== -1;

      if (isSelected) {
        if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
          _this.props.close();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      });

      _this.props.onFilterChange(searchValue);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelect", function (item) {
      if (_this.isSelected(item)) {
        _this.props.onDeselect(item);
      } else {
        _this.props.onSelect(item);
      }

      if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
        _this.props.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDeselect", function (item) {
      _this.props.onDeselect(item);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assignSearchRef", function (ref) {
      _this.searchRef = ref;
    });
    _this.state = {
      searchValue: props.defaultSearchValue,
      selected: props.selected
    };
    return _this;
  }

  (0, _createClass2["default"])(OptionsList, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["options", "close", "closeOnSelect", "width", "height", "onSelect", "onDeselect", "onFilterChange", "selected", "hasFilter", "filterPlaceholder", "filterIcon", "optionSize", "renderItem", "optionsFilter", "isMultiSelect", "defaultSearchValue"]);
      var options = this.search(originalOptions);
      var listHeight = height - (hasFilter ? 32 : 0);
      var currentIndex = this.getCurrentIndex();
      var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column"
      }, props), hasFilter && _react["default"].createElement(_TableHead["default"], null, _react["default"].createElement(_SearchTableHeaderCell["default"], {
        onChange: this.handleChange,
        ref: this.assignSearchRef,
        borderRight: null,
        height: 32,
        placeholder: filterPlaceholder,
        icon: filterIcon
      })), _react["default"].createElement(_layers.Pane, {
        flex: 1
      }, _react["default"].createElement(_reactTinyVirtualList["default"], {
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
}(_react.PureComponent);

exports["default"] = OptionsList;
OptionsList.displayName = "OptionsList";
(0, _defineProperty2["default"])(OptionsList, "propTypes", {
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),
  close: _propTypes["default"].func,
  height: _propTypes["default"].number,
  width: _propTypes["default"].number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool,

  /**
   * This holds the values of the options
   */
  selected: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  onSelect: _propTypes["default"].func,
  onDeselect: _propTypes["default"].func,
  onFilterChange: _propTypes["default"].func,
  hasFilter: _propTypes["default"].bool,
  optionSize: _propTypes["default"].number,
  renderItem: _propTypes["default"].func,
  filterPlaceholder: _propTypes["default"].string,
  filterIcon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),
  optionsFilter: _propTypes["default"].func,
  defaultSearchValue: _propTypes["default"].string
});
(0, _defineProperty2["default"])(OptionsList, "defaultProps", {
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
  filterIcon: _icons.SearchIcon,
  defaultSearchValue: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uc0xpc3QuanMiXSwibmFtZXMiOlsiZnV6enlGaWx0ZXIiLCJvcHRpb25zIiwiaW5wdXQiLCJrZXkiLCJmdXp6YWxkcmluIiwiZmlsdGVyIiwiaXRlbVJlbmRlcmVyIiwicHJvcHMiLCJub29wIiwiT3B0aW9uc0xpc3QiLCJjb250ZXh0IiwiaXRlbSIsInNlbGVjdGVkIiwic3RhdGUiLCJCb29sZWFuIiwiZmluZCIsInNlbGVjdGVkSXRlbSIsInZhbHVlIiwib3B0aW9uc0ZpbHRlciIsInNlYXJjaFZhbHVlIiwidHJpbSIsIm1hcCIsImxhYmVsIiwibmFtZSIsImdldEZpbHRlcmVkT3B0aW9ucyIsImZpbmRJbmRleCIsIm9wdGlvbiIsImxlbmd0aCIsImUiLCJoYW5kbGVBcnJvd1VwIiwiaGFuZGxlQXJyb3dEb3duIiwiaGFuZGxlRW50ZXIiLCJjbG9zZSIsIm9uU2VsZWN0IiwibmV4dEluZGV4IiwiZ2V0Q3VycmVudEluZGV4IiwiaXNTZWxlY3RlZCIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwic2V0U3RhdGUiLCJvbkZpbHRlckNoYW5nZSIsIm9uRGVzZWxlY3QiLCJyZWYiLCJzZWFyY2hSZWYiLCJkZWZhdWx0U2VhcmNoVmFsdWUiLCJoYXNGaWx0ZXIiLCJyZXF1ZXN0SWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmb2N1cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldlByb3BzIiwic2VhcmNoIiwib3JpZ2luYWxPcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJmaWx0ZXJQbGFjZWhvbGRlciIsImZpbHRlckljb24iLCJvcHRpb25TaXplIiwicmVuZGVySXRlbSIsImxpc3RIZWlnaHQiLCJjdXJyZW50SW5kZXgiLCJzY3JvbGxUb0luZGV4IiwiaGFuZGxlQ2hhbmdlIiwiYXNzaWduU2VhcmNoUmVmIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJzdHlsZSIsImljb24iLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVEZXNlbGVjdCIsImlzU2VsZWN0YWJsZSIsImRpc2FibGVkIiwidGFiSW5kZXgiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIk9wdGlvblNoYXBlUHJvcFR5cGUiLCJmdW5jIiwibnVtYmVyIiwiYm9vbCIsIm9uZU9mVHlwZSIsInN0cmluZyIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCIsIlNlYXJjaEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQVVDLEtBQVYsUUFBNkI7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDL0MsU0FBT0MsMkJBQVdDLE1BQVgsQ0FBa0JKLE9BQWxCLEVBQTJCQyxLQUEzQixFQUFrQztBQUFFQyxJQUFBQSxHQUFHLEVBQUhBO0FBQUYsR0FBbEMsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7O0FBSUEsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSztBQUFBLFNBQUksZ0NBQUMsa0JBQUQsRUFBWUEsS0FBWixDQUFKO0FBQUEsQ0FBMUI7O0FBQU1ELFk7O0FBRU4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztJQUVxQkMsVzs7Ozs7QUFxRG5CLHVCQUFZRixLQUFaLEVBQW1CRyxPQUFuQixFQUE0QjtBQUFBOztBQUFBO0FBQzFCLDhCQUFNSCxLQUFOLEVBQWFHLE9BQWI7QUFEMEIsbUdBcUNmLFVBQUFDLElBQUksRUFBSTtBQUFBLFVBQ1hDLFFBRFcsR0FDRSxNQUFLQyxLQURQLENB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QUFBQSxVQUFVLEVBQUVxQyxzQkFBVUcsSUF2Qkw7QUF3QmpCekMsRUFBQUEsY0FBYyxFQUFFc0Msc0JBQVVHLElBeEJUO0FBeUJqQnBDLEVBQUFBLFNBQVMsRUFBRWlDLHNCQUFVSyxJQXpCSjtBQTBCakJ0QixFQUFBQSxVQUFVLEVBQUVpQixzQkFBVUksTUExQkw7QUEyQmpCcEIsRUFBQUEsVUFBVSxFQUFFZ0Isc0JBQVVHLElBM0JMO0FBNEJqQnRCLEVBQUFBLGlCQUFpQixFQUFFbUIsc0JBQVVPLE1BNUJaO0FBNkJqQnpCLEVBQUFBLFVBQVUsRUFBRWtCLHNCQUFVTSxTQUFWLENBQW9CLENBQUNOLHNCQUFVUSxXQUFYLEVBQXdCUixzQkFBVVMsT0FBbEMsQ0FBcEIsQ0E3Qks7QUE4QmpCckUsRUFBQUEsYUFBYSxFQUFFNEQsc0JBQVVHLElBOUJSO0FBK0JqQnJDLEVBQUFBLGtCQUFrQixFQUFFa0Msc0JBQVVPO0FBL0JiLEM7aUNBREE1RSxXLGtCQW1DRztBQUNwQlIsRUFBQUEsT0FBTyxFQUFFLEVBRFc7O0FBRXBCOzs7OztBQUtBNEQsRUFBQUEsVUFBVSxFQUFFLEVBUFE7QUFRcEI1QixFQUFBQSxRQUFRLEVBQUV6QixJQVJVO0FBU3BCaUMsRUFBQUEsVUFBVSxFQUFFakMsSUFUUTtBQVVwQmdDLEVBQUFBLGNBQWMsRUFBRWhDLElBVkk7QUFXcEJJLEVBQUFBLFFBQVEsRUFBRSxFQVhVO0FBWXBCa0QsRUFBQUEsVUFBVSxFQUFFeEQsWUFaUTtBQWFwQnFELEVBQUFBLGlCQUFpQixFQUFFLFdBYkM7QUFjcEJDLEVBQUFBLFVBQVUsRUFBRTRCLGlCQWRRO0FBZXBCNUMsRUFBQUEsa0JBQWtCLEVBQUU7QUFmQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBmdXp6YWxkcmluIGZyb20gJ2Z1enphbGRyaW4tcGx1cydcbmltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICdyZWFjdC10aW55LXZpcnR1YWwtbGlzdCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJy4uLy4uL3RhYmxlL3NyYy9UYWJsZUhlYWQnXG5pbXBvcnQgU2VhcmNoVGFibGVIZWFkZXJDZWxsIGZyb20gJy4uLy4uL3RhYmxlL3NyYy9TZWFyY2hUYWJsZUhlYWRlckNlbGwnXG5pbXBvcnQgT3B0aW9uU2hhcGVQcm9wVHlwZSBmcm9tICcuL09wdGlvblNoYXBlUHJvcFR5cGUnXG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJ1xuXG4vKipcbiAqIEZ1enphbGRyaW4tcGx1cyBpcyB0aGUgZGVmYXVsdCBmaWx0ZXIsIGJ1dCB5b3UgY2FuIHVzZSB5b3VyIG93blxuICogYXMgbG9uZyBhcyB0aGV5IGZvbGxvdyB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZTpcbiAqIEBwYXJhbSBvcHRpb25zIDxBcnJheVtTdHJpbmddPiAtIFsnbGFiZWwnLCAnbGFiZWwyJywgLi4uXVxuICogQHBhcmFtIGlucHV0IDxTdHJpbmc+XG4gKi9cbmNvbnN0IGZ1enp5RmlsdGVyID0gKG9wdGlvbnMsIGlucHV0LCB7IGtleSB9KSA9PiB7XG4gIHJldHVybiBmdXp6YWxkcmluLmZpbHRlcihvcHRpb25zLCBpbnB1dCwgeyBrZXkgfSlcbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGl0ZW0gcmVuZGVyZXIgb2Ygb3B0aW9uc1xuICogeW91IGNhbiBwYXNzIGN1c3RvbSByZW5kZXJlcnMgYXMgbG9uZyBhcyB0aGV5IHdvcmsgdGhlIHNhbWUgYXMgdGhlIE9wdGlvblxuICovXG5jb25zdCBpdGVtUmVuZGVyZXIgPSBwcm9wcyA9PiA8T3B0aW9uIHsuLi5wcm9wc30gLz5cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnNMaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbXVsdGkgc2VsZWN0IGlzIGFjY291bnRlZCBmb3IuXG4gICAgICovXG4gICAgaXNNdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG1lbnUgY2xvc2VzIG9uIG9wdGlvbiBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGhvbGRzIHRoZSB2YWx1ZXMgb2YgdGhlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGFzRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcHRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJlbmRlckl0ZW06IFByb3BUeXBlcy5mdW5jLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpbHRlckljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50VHlwZSwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBvcHRpb25zRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkZWZhdWx0U2VhcmNoVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgLyoqXG4gICAgICogSW5jbHVkaW5nIGJvcmRlciBib3R0b21cbiAgICAgKiBGb3Igc29tZSByZWFzb24gcGFzc2luZyBoZWlnaHQgdG8gVGFibGVSb3cgZG9lc24ndCB3b3JrXG4gICAgICogVE9ETzogZml4IGhhY2t5IHNvbHV0aW9uXG4gICAgICovXG4gICAgb3B0aW9uU2l6ZTogMzMsXG4gICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgb25EZXNlbGVjdDogbm9vcCxcbiAgICBvbkZpbHRlckNoYW5nZTogbm9vcCxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgcmVuZGVySXRlbTogaXRlbVJlbmRlcmVyLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiAnRmlsdGVyLi4uJyxcbiAgICBmaWx0ZXJJY29uOiBTZWFyY2hJY29uLFxuICAgIGRlZmF1bHRTZWFyY2hWYWx1ZTogJydcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsdWU6IHByb3BzLmRlZmF1bHRTZWFyY2hWYWx1ZSxcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5zZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaGFzRmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFoYXNGaWx0ZXIpIHJldHVyblxuICAgIC8qKlxuICAgICAqIEhhY2t5IHNvbHV0aW9uIGZvciBicm9rZW4gYXV0b0ZvY3VzXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9ldmVyZ3JlZW4vaXNzdWVzLzkwXG4gICAgICovXG4gICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VhcmNoUmVmKSB0aGlzLnNlYXJjaFJlZi5mb2N1cygpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaXNTZWxlY3RlZCA9IGl0ZW0gPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiBCb29sZWFuKHNlbGVjdGVkLmZpbmQoc2VsZWN0ZWRJdGVtID0+IHNlbGVjdGVkSXRlbSA9PT0gaXRlbS52YWx1ZSkpXG4gIH1cblxuICBzZWFyY2ggPSBvcHRpb25zID0+IHtcbiAgICBjb25zdCB7IG9wdGlvbnNGaWx0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlYXJjaFZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoc2VhcmNoVmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICB9XG5cbiAgICAvLyBQcmVzZXJ2ZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGFsbG93aW5nIGN1c3RvbSBmaWx0ZXJzLCB3aGljaCBhY2NlcHQgYXJyYXkgb2Ygc3RyaW5nc1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc0ZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9wdGlvbnNGaWx0ZXIoXG4gICAgICAgIG9wdGlvbnMubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICAgIHNlYXJjaFZhbHVlXG4gICAgICApLm1hcChuYW1lID0+IG9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IG5hbWUpKVxuICAgIH1cblxuICAgIHJldHVybiBmdXp6eUZpbHRlcihvcHRpb25zLCBzZWFyY2hWYWx1ZSwgeyBrZXk6ICdsYWJlbCcgfSlcbiAgfVxuXG4gIGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKClcblxuICAgIHJldHVybiBvcHRpb25zLmZpbmRJbmRleChcbiAgICAgIG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkW3NlbGVjdGVkLmxlbmd0aCAtIDFdXG4gICAgKVxuICB9XG5cbiAgZ2V0RmlsdGVyZWRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKG9wdGlvbnMpXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dVcCgpXG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0Rvd24oKVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5oYW5kbGVFbnRlcigpXG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQXJyb3dVcCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKClcblxuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpIC0gMVxuXG4gICAgaWYgKG5leHRJbmRleCA8IDApIHtcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQob3B0aW9uc1tuZXh0SW5kZXhdKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgb25TZWxlY3Qob3B0aW9uc1tuZXh0SW5kZXhdKVxuICB9XG5cbiAgaGFuZGxlQXJyb3dEb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKVxuXG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgKyAxXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBvcHRpb25zLmxlbmd0aCkge1xuICAgICAgbmV4dEluZGV4ID0gMFxuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKG9wdGlvbnNbbmV4dEluZGV4XSkpIHtcbiAgICAgIG9uU2VsZWN0KG9wdGlvbnNbbmV4dEluZGV4XSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAhPT0gLTFcblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNNdWx0aVNlbGVjdCAmJiB0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gc2VhcmNoVmFsdWUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoVmFsdWVcbiAgICB9KVxuICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2Uoc2VhcmNoVmFsdWUpXG4gIH1cblxuICBoYW5kbGVTZWxlY3QgPSBpdGVtID0+IHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKGl0ZW0pKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpU2VsZWN0ICYmIHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGVzZWxlY3QgPSBpdGVtID0+IHtcbiAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgfVxuXG4gIGFzc2lnblNlYXJjaFJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5zZWFyY2hSZWYgPSByZWZcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zOiBvcmlnaW5hbE9wdGlvbnMsXG4gICAgICBjbG9zZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcbiAgICAgIG9uRmlsdGVyQ2hhbmdlLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBoYXNGaWx0ZXIsXG4gICAgICBmaWx0ZXJQbGFjZWhvbGRlcixcbiAgICAgIGZpbHRlckljb24sXG4gICAgICBvcHRpb25TaXplLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIG9wdGlvbnNGaWx0ZXIsXG4gICAgICBpc011bHRpU2VsZWN0LFxuICAgICAgZGVmYXVsdFNlYXJjaFZhbHVlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnNlYXJjaChvcmlnaW5hbE9wdGlvbnMpXG4gICAgY29uc3QgbGlzdEhlaWdodCA9IGhlaWdodCAtIChoYXNGaWx0ZXIgPyAzMiA6IDApXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKVxuICAgIGNvbnN0IHNjcm9sbFRvSW5kZXggPSBjdXJyZW50SW5kZXggPT09IC0xID8gMCA6IGN1cnJlbnRJbmRleFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc0ZpbHRlciAmJiAoXG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxTZWFyY2hUYWJsZUhlYWRlckNlbGxcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICByZWY9e3RoaXMuYXNzaWduU2VhcmNoUmVmfVxuICAgICAgICAgICAgICBib3JkZXJSaWdodD17bnVsbH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpbHRlclBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBpY29uPXtmaWx0ZXJJY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgKX1cbiAgICAgICAgPFBhbmUgZmxleD17MX0+XG4gICAgICAgICAgPFZpcnR1YWxMaXN0XG4gICAgICAgICAgICBoZWlnaHQ9e2xpc3RIZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaXRlbVNpemU9e29wdGlvblNpemV9XG4gICAgICAgICAgICBpdGVtQ291bnQ9e29wdGlvbnMubGVuZ3RofVxuICAgICAgICAgICAgb3ZlcnNjYW5Db3VudD17MjB9XG4gICAgICAgICAgICBzY3JvbGxUb0FsaWdubWVudD1cImF1dG9cIlxuICAgICAgICAgICAgc2Nyb2xsVG9JbmRleD17c2Nyb2xsVG9JbmRleCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gb3B0aW9uc1tpbmRleF1cbiAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChpdGVtKVxuICAgICAgICAgICAgICByZXR1cm4gcmVuZGVySXRlbSh7XG4gICAgICAgICAgICAgICAga2V5OiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG9wdGlvblNpemUsXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q6ICgpID0+IHRoaXMuaGFuZGxlU2VsZWN0KGl0ZW0pLFxuICAgICAgICAgICAgICAgIG9uRGVzZWxlY3Q6ICgpID0+IHRoaXMuaGFuZGxlRGVzZWxlY3QoaXRlbSksXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RhYmxlOiAhaXNTZWxlY3RlZCB8fCBpc011bHRpU2VsZWN0LFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg6IDBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl19