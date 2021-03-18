"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fuzzaldrinPlus = _interopRequireDefault(require("fuzzaldrin-plus"));

var _downshift = _interopRequireDefault(require("downshift"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _popover = require("../../popover");

var _constants = require("../../constants");

var _typography = require("../../typography");

var _layers = require("../../layers");

var _AutocompleteItem = _interopRequireDefault(require("./AutocompleteItem"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return _fuzzaldrinPlus["default"].filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return _fuzzaldrinPlus["default"].filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return _react["default"].createElement(_AutocompleteItem["default"], props);
};

autocompleteItemRenderer.displayName = "autocompleteItemRenderer";

/* eslint-disable react/prop-types */
var AutocompleteItems = function AutocompleteItems(_ref2) {
  var getItemProps = _ref2.getItemProps,
      getMenuProps = _ref2.getMenuProps,
      highlightedIndex = _ref2.highlightedIndex,
      inputValue = _ref2.inputValue,
      isFilterDisabled = _ref2.isFilterDisabled,
      itemsFilter = _ref2.itemsFilter,
      itemSize = _ref2.itemSize,
      itemToString = _ref2.itemToString,
      originalItems = _ref2.originalItems,
      popoverMaxHeight = _ref2.popoverMaxHeight,
      _renderItem = _ref2.renderItem,
      selectedItem = _ref2.selectedItem,
      title = _ref2.title,
      width = _ref2.width;
  itemsFilter = itemsFilter || fuzzyFilter(itemToString);
  var items = isFilterDisabled || inputValue.trim() === '' ? originalItems : itemsFilter(originalItems, inputValue);
  if (items.length === 0) return null; // Pass the actual DOM ref to downshift, this fixes touch support

  var menuProps = getMenuProps();
  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    width: width
  }, menuProps), title && _react["default"].createElement(_layers.Pane, {
    padding: 8,
    borderBottom: "muted"
  }, _react["default"].createElement(_typography.Heading, {
    size: 100
  }, title)), items.length > 0 && _react["default"].createElement(_reactTinyVirtualList["default"], {
    width: "100%",
    height: Math.min(items.length * itemSize, popoverMaxHeight),
    itemSize: itemSize,
    itemCount: items.length,
    scrollToIndex: highlightedIndex || 0,
    overscanCount: 3,
    scrollToAlignment: "auto",
    renderItem: function renderItem(_ref3) {
      var index = _ref3.index,
          style = _ref3.style;
      var item = items[index];
      var itemString = itemToString(item);
      return _renderItem(getItemProps({
        item: item,
        key: itemString,
        index: index,
        style: style,
        children: itemString,
        isSelected: itemToString(selectedItem) === itemString,
        isHighlighted: highlightedIndex === index
      }));
    }
  }));
};

AutocompleteItems.displayName = "AutocompleteItems";

/* eslint-enable react/prop-types */
var Autocomplete = (0, _react.memo)((0, _react.forwardRef)(function Autocomplete(props, ref) {
  var children = props.children,
      _props$itemSize = props.itemSize,
      itemSize = _props$itemSize === void 0 ? 32 : _props$itemSize,
      position = props.position,
      _props$renderItem = props.renderItem,
      renderItem = _props$renderItem === void 0 ? autocompleteItemRenderer : _props$renderItem,
      _props$isFilterDisabl = props.isFilterDisabled,
      isFilterDisabled = _props$isFilterDisabl === void 0 ? false : _props$isFilterDisabl,
      itemsFilter = props.itemsFilter,
      _props$itemToString = props.itemToString,
      itemToString = _props$itemToString === void 0 ? function (i) {
    return i ? String(i) : '';
  } : _props$itemToString,
      _props$popoverMaxHeig = props.popoverMaxHeight,
      popoverMaxHeight = _props$popoverMaxHeig === void 0 ? 240 : _props$popoverMaxHeig,
      _props$popoverMinWidt = props.popoverMinWidth,
      popoverMinWidth = _props$popoverMinWidt === void 0 ? 240 : _props$popoverMinWidt,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["children", "itemSize", "position", "renderItem", "isFilterDisabled", "itemsFilter", "itemToString", "popoverMaxHeight", "popoverMinWidth"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      targetWidth = _useState2[0],
      setTargetWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      targetRef = _useState4[0],
      setTargetRef = _useState4[1];

  (0, _react.useEffect)(function () {
    if (targetRef) {
      setTargetWidth(targetRef.getBoundingClientRect().width);
    }
  }, [targetRef]);
  var stateReducer = (0, _react.useCallback)(function (state, changes) {
    var items = props.items;

    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
      return _objectSpread(_objectSpread({}, changes), {}, {
        highlightedIndex: items.indexOf(state.selectedItem)
      });
    }

    return changes;
  }, [props.items]);
  return _react["default"].createElement(_downshift["default"], (0, _extends2["default"])({
    stateReducer: stateReducer,
    scrollIntoView: noop,
    itemToString: itemToString,
    ref: ref
  }, restProps), function (_ref4) {
    var isShown = _ref4.isOpen,
        inputValue = _ref4.inputValue,
        getItemProps = _ref4.getItemProps,
        getMenuProps = _ref4.getMenuProps,
        selectedItem = _ref4.selectedItem,
        highlightedIndex = _ref4.highlightedIndex,
        getRootProps = _ref4.getRootProps,
        restDownshiftProps = (0, _objectWithoutProperties2["default"])(_ref4, ["isOpen", "inputValue", "getItemProps", "getMenuProps", "selectedItem", "highlightedIndex", "getRootProps"]);
    return _react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, _react["default"].createElement(_popover.Popover, {
      bringFocusInside: false,
      isShown: isShown,
      minWidth: popoverMinWidth,
      position: position || (targetWidth < popoverMinWidth ? _constants.Position.BOTTOM_LEFT : _constants.Position.BOTTOM),
      content: function content() {
        return _react["default"].createElement(AutocompleteItems, {
          getItemProps: getItemProps,
          getMenuProps: getMenuProps,
          highlightedIndex: highlightedIndex,
          inputValue: inputValue,
          isFilterDisabled: isFilterDisabled,
          itemsFilter: itemsFilter,
          itemSize: itemSize,
          itemToString: itemToString,
          originalItems: props.items,
          popoverMaxHeight: popoverMaxHeight,
          renderItem: renderItem,
          selectedItem: selectedItem,
          title: props.title,
          width: Math.max(targetWidth, popoverMinWidth)
        });
      },
      minHeight: 0,
      animationDuration: 0
    }, function (_ref5) {
      var isShownPopover = _ref5.isShown,
          toggle = _ref5.toggle,
          _getRef = _ref5.getRef;
      return children(_objectSpread({
        isShown: isShownPopover,
        toggle: toggle,
        getRef: function getRef(ref) {
          // Use the ref internally to determine the width
          setTargetRef(ref);

          _getRef(ref);
        },
        inputValue: inputValue,
        selectedItem: selectedItem,
        highlightedIndex: highlightedIndex
      }, restDownshiftProps));
    }));
  });
}));
Autocomplete.propTypes = _objectSpread({
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * An array of items to be used as options for the select
   */
  items: _propTypes["default"].array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: _propTypes["default"].any,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: _propTypes["default"].func,

  /**
   * Function that will render the 'filter' component.
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: _propTypes["default"].number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: _propTypes["default"].func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: _propTypes["default"].func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: _propTypes["default"].bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: _propTypes["default"].number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: _propTypes["default"].number
}, _downshift["default"].propTypes);
var _default = Autocomplete;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZS5qcyJdLCJuYW1lcyI6WyJmdXp6eUZpbHRlciIsIml0ZW1Ub1N0cmluZyIsIml0ZW1zIiwiaW5wdXQiLCJ3cmFwcGVkSXRlbXMiLCJtYXAiLCJpdGVtIiwia2V5IiwiZnV6emFsZHJpbiIsImZpbHRlciIsIm5vb3AiLCJhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIiLCJwcm9wcyIsIkF1dG9jb21wbGV0ZUl0ZW1zIiwiZ2V0SXRlbVByb3BzIiwiZ2V0TWVudVByb3BzIiwiaGlnaGxpZ2h0ZWRJbmRleCIsImlucHV0VmFsdWUiLCJpc0ZpbHRlckRpc2FibGVkIiwiaXRlbXNGaWx0ZXIiLCJpdGVtU2l6ZSIsIm9yaWdpbmFsSXRlbXMiLCJwb3BvdmVyTWF4SGVpZ2h0IiwicmVuZGVySXRlbSIsInNlbGVjdGVkSXRlbSIsInRpdGxlIiwid2lkdGgiLCJ0cmltIiwibGVuZ3RoIiwibWVudVByb3BzIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwic3R5bGUiLCJpdGVtU3RyaW5nIiwiY2hpbGRyZW4iLCJpc1NlbGVjdGVkIiwiaXNIaWdobGlnaHRlZCIsIkF1dG9jb21wbGV0ZSIsInJlZiIsInBvc2l0aW9uIiwiaSIsIlN0cmluZyIsInBvcG92ZXJNaW5XaWR0aCIsInJlc3RQcm9wcyIsInRhcmdldFdpZHRoIiwic2V0VGFyZ2V0V2lkdGgiLCJ0YXJnZXRSZWYiLCJzZXRUYXJnZXRSZWYiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImNoYW5nZXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpc09wZW4iLCJpbmRleE9mIiwiaXNTaG93biIsImdldFJvb3RQcm9wcyIsInJlc3REb3duc2hpZnRQcm9wcyIsIlBvc2l0aW9uIiwiQk9UVE9NX0xFRlQiLCJCT1RUT00iLCJtYXgiLCJpc1Nob3duUG9wb3ZlciIsInRvZ2dsZSIsImdldFJlZiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJhbnkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTV9SSUdIVCIsIkxFRlQiLCJSSUdIVCIsImJvb2wiLCJEb3duc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsWUFBWSxFQUFJO0FBQ2xDLE1BQUlBLFlBQUosRUFBa0I7QUFDaEIsV0FBTyxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDdkIsVUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsZUFBSztBQUN0Q0MsVUFBQUEsR0FBRyxFQUFFTixZQUFZLENBQUNLLElBQUQsQ0FEcUI7QUFFdENBLFVBQUFBLElBQUksRUFBSkE7QUFGc0MsU0FBTDtBQUFBLE9BQWQsQ0FBckI7QUFLQSxhQUFPRSwyQkFDSkMsTUFESSxDQUNHTCxZQURILEVBQ2lCRCxLQURqQixFQUN3QjtBQUFFSSxRQUFBQSxHQUFHLEVBQUU7QUFBUCxPQUR4QixFQUVKRixHQUZJLENBRUE7QUFBQSxZQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxlQUFjQSxJQUFkO0FBQUEsT0FGQSxDQUFQO0FBR0QsS0FURDtBQVVEOztBQUVELFNBQU8sVUFBQ0osS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FBa0JLLDJCQUFXQyxNQUFYLENBQWtCUCxLQUFsQixFQUF5QkMsS0FBekIsQ0FBbEI7QUFBQSxHQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztB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QnBCLG9CQUFTRSxNQUplLEVBS3hCRixvQkFBU0MsV0FMZSxFQU14QkQsb0JBQVNxQixZQU5lLEVBT3hCckIsb0JBQVNzQixJQVBlLEVBUXhCdEIsb0JBQVN1QixLQVJlLENBQWhCLENBMUNaOztBQXFERTs7Ozs7QUFLQWxFLEVBQUFBLFdBQVcsRUFBRW1ELHNCQUFVTyxJQTFEekI7O0FBNERFOzs7OztBQUtBM0QsRUFBQUEsZ0JBQWdCLEVBQUVvRCxzQkFBVWdCLElBakU5Qjs7QUFtRUU7OztBQUdBM0MsRUFBQUEsZUFBZSxFQUFFMkIsc0JBQVVRLE1BdEU3Qjs7QUF3RUU7OztBQUdBeEQsRUFBQUEsZ0JBQWdCLEVBQUVnRCxzQkFBVVE7QUEzRTlCLEdBNkVLUyxzQkFBVWxCLFNBN0VmO2VBZ0ZlL0IsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBtZW1vLFxuICBmb3J3YXJkUmVmLFxuICB1c2VTdGF0ZSxcbiAgdXNlRWZmZWN0LFxuICB1c2VDYWxsYmFja1xufSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBmdXp6YWxkcmluIGZyb20gJ2Z1enphbGRyaW4tcGx1cydcbmltcG9ydCBEb3duc2hpZnQgZnJvbSAnZG93bnNoaWZ0J1xuaW1wb3J0IFZpcnR1YWxMaXN0IGZyb20gJ3JlYWN0LXRpbnktdmlydHVhbC1saXN0J1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBBdXRvY29tcGxldGVJdGVtIGZyb20gJy4vQXV0b2NvbXBsZXRlSXRlbSdcblxuY29uc3QgZnV6enlGaWx0ZXIgPSBpdGVtVG9TdHJpbmcgPT4ge1xuICBpZiAoaXRlbVRvU3RyaW5nKSB7XG4gICAgcmV0dXJuIChpdGVtcywgaW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IHdyYXBwZWRJdGVtcyA9IGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGtleTogaXRlbVRvU3RyaW5nKGl0ZW0pLFxuICAgICAgICBpdGVtXG4gICAgICB9KSlcblxuICAgICAgcmV0dXJuIGZ1enphbGRyaW5cbiAgICAgICAgLmZpbHRlcih3cmFwcGVkSXRlbXMsIGlucHV0LCB7IGtleTogJ2tleScgfSlcbiAgICAgICAgLm1hcCgoeyBpdGVtIH0pID0+IGl0ZW0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChpdGVtcywgaW5wdXQpID0+IGZ1enphbGRyaW4uZmlsdGVyKGl0ZW1zLCBpbnB1dClcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IGF1dG9jb21wbGV0ZUl0ZW1SZW5kZXJlciA9IHByb3BzID0+IDxBdXRvY29tcGxldGVJdGVtIHsuLi5wcm9wc30gLz5cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuY29uc3QgQXV0b2NvbXBsZXRlSXRlbXMgPSAoe1xuICBnZXRJdGVtUHJvcHMsXG4gIGdldE1lbnVQcm9wcyxcbiAgaGlnaGxpZ2h0ZWRJbmRleCxcbiAgaW5wdXRWYWx1ZSxcbiAgaXNGaWx0ZXJEaXNhYmxlZCxcbiAgaXRlbXNGaWx0ZXIsXG4gIGl0ZW1TaXplLFxuICBpdGVtVG9TdHJpbmcsXG4gIG9yaWdpbmFsSXRlbXMsXG4gIHBvcG92ZXJNYXhIZWlnaHQsXG4gIHJlbmRlckl0ZW0sXG4gIHNlbGVjdGVkSXRlbSxcbiAgdGl0bGUsXG4gIHdpZHRoXG59KSA9PiB7XG4gIGl0ZW1zRmlsdGVyID0gaXRlbXNGaWx0ZXIgfHwgZnV6enlGaWx0ZXIoaXRlbVRvU3RyaW5nKVxuICBjb25zdCBpdGVtcyA9XG4gICAgaXNGaWx0ZXJEaXNhYmxlZCB8fCBpbnB1dFZhbHVlLnRyaW0oKSA9PT0gJydcbiAgICAgID8gb3JpZ2luYWxJdGVtc1xuICAgICAgOiBpdGVtc0ZpbHRlcihvcmlnaW5hbEl0ZW1zLCBpbnB1dFZhbHVlKVxuXG4gIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgLy8gUGFzcyB0aGUgYWN0dWFsIERPTSByZWYgdG8gZG93bnNoaWZ0LCB0aGlzIGZpeGVzIHRvdWNoIHN1cHBvcnRcbiAgY29uc3QgbWVudVByb3BzID0gZ2V0TWVudVByb3BzKClcblxuICByZXR1cm4gKFxuICAgIDxQYW5lIHdpZHRoPXt3aWR0aH0gey4uLm1lbnVQcm9wc30+XG4gICAgICB7dGl0bGUgJiYgKFxuICAgICAgICA8UGFuZSBwYWRkaW5nPXs4fSBib3JkZXJCb3R0b209XCJtdXRlZFwiPlxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9ezEwMH0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgKX1cbiAgICAgIHtpdGVtcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPFZpcnR1YWxMaXN0XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9e01hdGgubWluKGl0ZW1zLmxlbmd0aCAqIGl0ZW1TaXplLCBwb3BvdmVyTWF4SGVpZ2h0KX1cbiAgICAgICAgICBpdGVtU2l6ZT17aXRlbVNpemV9XG4gICAgICAgICAgaXRlbUNvdW50PXtpdGVtcy5sZW5ndGh9XG4gICAgICAgICAgc2Nyb2xsVG9JbmRleD17aGlnaGxpZ2h0ZWRJbmRleCB8fCAwfVxuICAgICAgICAgIG92ZXJzY2FuQ291bnQ9ezN9XG4gICAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ9XCJhdXRvXCJcbiAgICAgICAgICByZW5kZXJJdGVtPXsoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XVxuICAgICAgICAgICAgY29uc3QgaXRlbVN0cmluZyA9IGl0ZW1Ub1N0cmluZyhpdGVtKVxuXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVySXRlbShcbiAgICAgICAgICAgICAgZ2V0SXRlbVByb3BzKHtcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIGtleTogaXRlbVN0cmluZyxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbVN0cmluZyxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBpdGVtVG9TdHJpbmcoc2VsZWN0ZWRJdGVtKSA9PT0gaXRlbVN0cmluZyxcbiAgICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkOiBoaWdobGlnaHRlZEluZGV4ID09PSBpbmRleFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUGFuZT5cbiAgKVxufVxuLyogZXNsaW50LWVuYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5cbmNvbnN0IEF1dG9jb21wbGV0ZSA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gQXV0b2NvbXBsZXRlKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGl0ZW1TaXplID0gMzIsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIHJlbmRlckl0ZW0gPSBhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIsXG4gICAgICBpc0ZpbHRlckRpc2FibGVkID0gZmFsc2UsXG4gICAgICBpdGVtc0ZpbHRlcixcbiAgICAgIGl0ZW1Ub1N0cmluZyA9IGkgPT4gKGkgPyBTdHJpbmcoaSkgOiAnJyksXG4gICAgICBwb3BvdmVyTWF4SGVpZ2h0ID0gMjQwLFxuICAgICAgcG9wb3Zlck1pbldpZHRoID0gMjQwLFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBbdGFyZ2V0V2lkdGgsIHNldFRhcmdldFdpZHRoXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW3RhcmdldFJlZiwgc2V0VGFyZ2V0UmVmXSA9IHVzZVN0YXRlKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAodGFyZ2V0UmVmKSB7XG4gICAgICAgIHNldFRhcmdldFdpZHRoKHRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aClcbiAgICAgIH1cbiAgICB9LCBbdGFyZ2V0UmVmXSlcblxuICAgIGNvbnN0IHN0YXRlUmVkdWNlciA9IHVzZUNhbGxiYWNrKFxuICAgICAgKHN0YXRlLCBjaGFuZ2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHByb3BzXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjaGFuZ2VzLCAnaXNPcGVuJykgJiZcbiAgICAgICAgICBjaGFuZ2VzLmlzT3BlblxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2hhbmdlcyxcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGl0ZW1zLmluZGV4T2Yoc3RhdGUuc2VsZWN0ZWRJdGVtKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGFuZ2VzXG4gICAgICB9LFxuICAgICAgW3Byb3BzLml0ZW1zXVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8RG93bnNoaWZ0XG4gICAgICAgIHN0YXRlUmVkdWNlcj17c3RhdGVSZWR1Y2VyfVxuICAgICAgICBzY3JvbGxJbnRvVmlldz17bm9vcH1cbiAgICAgICAgaXRlbVRvU3RyaW5nPXtpdGVtVG9TdHJpbmd9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgPlxuICAgICAgICB7KHtcbiAgICAgICAgICBpc09wZW46IGlzU2hvd24sXG4gICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICBnZXRJdGVtUHJvcHMsXG4gICAgICAgICAgZ2V0TWVudVByb3BzLFxuICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICAuLi5yZXN0RG93bnNoaWZ0UHJvcHNcbiAgICAgICAgfSkgPT4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgIGJyaW5nRm9jdXNJbnNpZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBpc1Nob3duPXtpc1Nob3dufVxuICAgICAgICAgICAgICBtaW5XaWR0aD17cG9wb3Zlck1pbldpZHRofVxuICAgICAgICAgICAgICBwb3NpdGlvbj17XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gfHxcbiAgICAgICAgICAgICAgICAodGFyZ2V0V2lkdGggPCBwb3BvdmVyTWluV2lkdGhcbiAgICAgICAgICAgICAgICAgID8gUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgICAgICAgICAgICAgICAgIDogUG9zaXRpb24uQk9UVE9NKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9eygpID0+IChcbiAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlSXRlbXNcbiAgICAgICAgICAgICAgICAgIGdldEl0ZW1Qcm9wcz17Z2V0SXRlbVByb3BzfVxuICAgICAgICAgICAgICAgICAgZ2V0TWVudVByb3BzPXtnZXRNZW51UHJvcHN9XG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4PXtoaWdobGlnaHRlZEluZGV4fVxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIGlzRmlsdGVyRGlzYWJsZWQ9e2lzRmlsdGVyRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBpdGVtc0ZpbHRlcj17aXRlbXNGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICBpdGVtU2l6ZT17aXRlbVNpemV9XG4gICAgICAgICAgICAgICAgICBpdGVtVG9TdHJpbmc9e2l0ZW1Ub1N0cmluZ31cbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSXRlbXM9e3Byb3BzLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgcG9wb3Zlck1heEhlaWdodD17cG9wb3Zlck1heEhlaWdodH1cbiAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckl0ZW19XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkSXRlbX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtNYXRoLm1heCh0YXJnZXRXaWR0aCwgcG9wb3Zlck1pbldpZHRoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezB9XG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KHsgaXNTaG93bjogaXNTaG93blBvcG92ZXIsIHRvZ2dsZSwgZ2V0UmVmIH0pID0+XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgaXNTaG93bjogaXNTaG93blBvcG92ZXIsXG4gICAgICAgICAgICAgICAgICB0b2dnbGUsXG4gICAgICAgICAgICAgICAgICBnZXRSZWY6IHJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgcmVmIGludGVybmFsbHkgdG8gZGV0ZXJtaW5lIHRoZSB3aWR0aFxuICAgICAgICAgICAgICAgICAgICBzZXRUYXJnZXRSZWYocmVmKVxuICAgICAgICAgICAgICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgICAgICAgICAgLi4ucmVzdERvd25zaGlmdFByb3BzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Eb3duc2hpZnQ+XG4gICAgKVxuICB9KVxuKVxuXG5BdXRvY29tcGxldGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhpcyBwcm9wIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBOb2RlLlxuICAgKiBJdCB3aWxsIHByb3ZpZGUgYSB0aXRsZSBmb3IgdGhlIGl0ZW1zXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgaXRlbXMgdG8gYmUgdXNlZCBhcyBvcHRpb25zIGZvciB0aGUgc2VsZWN0XG4gICAqL1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBzZWxlY3RlZCBJdGVtIHRvIGJlIHNob3duIG9uIHRoZSBhdXRvY29tcGxldGVcbiAgICovXG4gIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSW4gY2FzZSB0aGUgYXJyYXkgb2YgaXRlbXMgaXMgbm90IGFuIGFycmF5IG9mIHN0cmluZ3MsXG4gICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvbiBlYWNoIGl0ZW0gdG8gcmV0dXJuIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHNob3duIG9uIHRoZSBmaWx0ZXJcbiAgICovXG4gIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCByZW5kZXIgdGhlICdmaWx0ZXInIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSBpbiB0aGUgbGlzdFxuICAgKiBCZWNhdXNlIHRoZSBsaXN0IGlzIHZpcnR1YWxpemVkIHRoaXMgaXMgcmVxdWlyZWQgYmVmb3JlaGFuZC5cbiAgICovXG4gIGl0ZW1TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBjb21wb25lbnQgdG8gcmVuZGVyIHRoZSBpdGVtXG4gICAqL1xuICByZW5kZXJJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBQb3BvdmVyIHRoZSBBdXRvY29tcGxldGUgaXMgcmVuZGVyZWQgaW4uXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBQb3NpdGlvbi5UT1AsXG4gICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgUG9zaXRpb24uTEVGVCxcbiAgICBQb3NpdGlvbi5SSUdIVFxuICBdKSxcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZmlsdGVyIHRoZSBpdGVtcy5cbiAgICogSXQgc2hvdWxkIHJldHVybiBhIHN1YnNldCBvZiB0aGUgaW5pdGlhbCBpdGVtcy5cbiAgICogQnkgZGVmYXVsdCB0aGUgXCJmdXp6YWxkcmluLXBsdXNcIiBwYWNrYWdlIGlzIHVzZWQuXG4gICAqL1xuICBpdGVtc0ZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFByb3AgdGhhdCBlbmFibGVzIGFuZCBkaXNhYmxlcyBmaWx0ZXJpbmdcbiAgICogVHJ1ZTogRW5hYmxlcyBGaWx0ZXJpbmdcbiAgICogRmFsc2U6IERpc2FibGVzIEZpbHRlcmluZ1xuICAgKi9cbiAgaXNGaWx0ZXJEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG1pbmltdW0gaGVpZ2h0IHRoZSByZXN1bHRzIGNvbnRhaW5lciB3aWxsIGJlXG4gICAqL1xuICBwb3BvdmVyTWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG1heGltdW0gaGVpZ2h0IHRoZSByZXN1bHRzIGNvbnRhaW5lciB3aWxsIGJlXG4gICAqL1xuICBwb3BvdmVyTWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC4uLkRvd25zaGlmdC5wcm9wVHlwZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0b2NvbXBsZXRlXG4iXX0=