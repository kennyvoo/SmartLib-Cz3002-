import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import fuzzaldrin from 'fuzzaldrin-plus';
import Downshift from 'downshift';
import VirtualList from 'react-tiny-virtual-list';
import { Popover } from '../../popover';
import { Position } from '../../constants';
import { Heading } from '../../typography';
import { Pane } from '../../layers';
import AutocompleteItem from './AutocompleteItem';

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return fuzzaldrin.filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return fuzzaldrin.filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return React.createElement(AutocompleteItem, props);
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
  return React.createElement(Pane, _extends({
    width: width
  }, menuProps), title && React.createElement(Pane, {
    padding: 8,
    borderBottom: "muted"
  }, React.createElement(Heading, {
    size: 100
  }, title)), items.length > 0 && React.createElement(VirtualList, {
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
var Autocomplete = memo(forwardRef(function Autocomplete(props, ref) {
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
      restProps = _objectWithoutProperties(props, ["children", "itemSize", "position", "renderItem", "isFilterDisabled", "itemsFilter", "itemToString", "popoverMaxHeight", "popoverMinWidth"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      targetWidth = _useState2[0],
      setTargetWidth = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      targetRef = _useState4[0],
      setTargetRef = _useState4[1];

  useEffect(function () {
    if (targetRef) {
      setTargetWidth(targetRef.getBoundingClientRect().width);
    }
  }, [targetRef]);
  var stateReducer = useCallback(function (state, changes) {
    var items = props.items;

    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
      return _objectSpread(_objectSpread({}, changes), {}, {
        highlightedIndex: items.indexOf(state.selectedItem)
      });
    }

    return changes;
  }, [props.items]);
  return React.createElement(Downshift, _extends({
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
        restDownshiftProps = _objectWithoutProperties(_ref4, ["isOpen", "inputValue", "getItemProps", "getMenuProps", "selectedItem", "highlightedIndex", "getRootProps"]);

    return React.createElement("div", {
      style: {
        width: '100%'
      }
    }, React.createElement(Popover, {
      bringFocusInside: false,
      isShown: isShown,
      minWidth: popoverMinWidth,
      position: position || (targetWidth < popoverMinWidth ? Position.BOTTOM_LEFT : Position.BOTTOM),
      content: function content() {
        return React.createElement(AutocompleteItems, {
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * An array of items to be used as options for the select
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: PropTypes.any,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,

  /**
   * Function that will render the 'filter' component.
   */
  children: PropTypes.func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: PropTypes.number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: PropTypes.func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: PropTypes.func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: PropTypes.bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: PropTypes.number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: PropTypes.number
}, Downshift.propTypes);
export default Autocomplete;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIlByb3BUeXBlcyIsImZ1enphbGRyaW4iLCJEb3duc2hpZnQiLCJWaXJ0dWFsTGlzdCIsIlBvcG92ZXIiLCJQb3NpdGlvbiIsIkhlYWRpbmciLCJQYW5lIiwiQXV0b2NvbXBsZXRlSXRlbSIsImZ1enp5RmlsdGVyIiwiaXRlbVRvU3RyaW5nIiwiaXRlbXMiLCJpbnB1dCIsIndyYXBwZWRJdGVtcyIsIm1hcCIsIml0ZW0iLCJrZXkiLCJmaWx0ZXIiLCJub29wIiwiYXV0b2NvbXBsZXRlSXRlbVJlbmRlcmVyIiwicHJvcHMiLCJBdXRvY29tcGxldGVJdGVtcyIsImdldEl0ZW1Qcm9wcyIsImdldE1lbnVQcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJpbnB1dFZhbHVlIiwiaXNGaWx0ZXJEaXNhYmxlZCIsIml0ZW1zRmlsdGVyIiwiaXRlbVNpemUiLCJvcmlnaW5hbEl0ZW1zIiwicG9wb3Zlck1heEhlaWdodCIsInJlbmRlckl0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJ0aXRsZSIsIndpZHRoIiwidHJpbSIsImxlbmd0aCIsIm1lbnVQcm9wcyIsIk1hdGgiLCJtaW4iLCJpbmRleCIsInN0eWxlIiwiaXRlbVN0cmluZyIsImNoaWxkcmVuIiwiaXNTZWxlY3RlZCIsImlzSGlnaGxpZ2h0ZWQiLCJBdXRvY29tcGxldGUiLCJyZWYiLCJwb3NpdGlvbiIsImkiLCJTdHJpbmciLCJwb3BvdmVyTWluV2lkdGgiLCJyZXN0UHJvcHMiLCJ0YXJnZXRXaWR0aCIsInNldFRhcmdldFdpZHRoIiwidGFyZ2V0UmVmIiwic2V0VGFyZ2V0UmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwiaW5kZXhPZiIsImlzU2hvd24iLCJnZXRSb290UHJvcHMiLCJyZXN0RG93bnNoaWZ0UHJvcHMiLCJCT1RUT01fTEVGVCIsIkJPVFRPTSIsIm1heCIsImlzU2hvd25Qb3BvdmVyIiwidG9nZ2xlIiwiZ2V0UmVmIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUNFQyxJQURGLEVBRUVDLFVBRkYsRUFHRUMsUUFIRixFQUlFQyxTQUpGLEVBS0VDLFdBTEYsUUFNTyxPQU5QO0FBT0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixXQUF0QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixrQkFBeEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLFlBQVksRUFBSTtBQUNsQyxNQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLFdBQU8sVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3ZCLFVBQU1DLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLGVBQUs7QUFDdENDLFVBQUFBLEdBQUcsRUFBRU4sWUFBWSxDQUFDSyxJQUFELENB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Z0ZBLGVBQWU5QixZQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIG1lbW8sXG4gIGZvcndhcmRSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUNhbGxiYWNrXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGZ1enphbGRyaW4gZnJvbSAnZnV6emFsZHJpbi1wbHVzJ1xuaW1wb3J0IERvd25zaGlmdCBmcm9tICdkb3duc2hpZnQnXG5pbXBvcnQgVmlydHVhbExpc3QgZnJvbSAncmVhY3QtdGlueS12aXJ0dWFsLWxpc3QnXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnLi4vLi4vcG9wb3ZlcidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IEF1dG9jb21wbGV0ZUl0ZW0gZnJvbSAnLi9BdXRvY29tcGxldGVJdGVtJ1xuXG5jb25zdCBmdXp6eUZpbHRlciA9IGl0ZW1Ub1N0cmluZyA9PiB7XG4gIGlmIChpdGVtVG9TdHJpbmcpIHtcbiAgICByZXR1cm4gKGl0ZW1zLCBpbnB1dCkgPT4ge1xuICAgICAgY29uc3Qgd3JhcHBlZEl0ZW1zID0gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAga2V5OiBpdGVtVG9TdHJpbmcoaXRlbSksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pKVxuXG4gICAgICByZXR1cm4gZnV6emFsZHJpblxuICAgICAgICAuZmlsdGVyKHdyYXBwZWRJdGVtcywgaW5wdXQsIHsga2V5OiAna2V5JyB9KVxuICAgICAgICAubWFwKCh7IGl0ZW0gfSkgPT4gaXRlbSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGl0ZW1zLCBpbnB1dCkgPT4gZnV6emFsZHJpbi5maWx0ZXIoaXRlbXMsIGlucHV0KVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgYXV0b2NvbXBsZXRlSXRlbVJlbmRlcmVyID0gcHJvcHMgPT4gPEF1dG9jb21wbGV0ZUl0ZW0gey4uLnByb3BzfSAvPlxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5jb25zdCBBdXRvY29tcGxldGVJdGVtcyA9ICh7XG4gIGdldEl0ZW1Qcm9wcyxcbiAgZ2V0TWVudVByb3BzLFxuICBoaWdobGlnaHRlZEluZGV4LFxuICBpbnB1dFZhbHVlLFxuICBpc0ZpbHRlckRpc2FibGVkLFxuICBpdGVtc0ZpbHRlcixcbiAgaXRlbVNpemUsXG4gIGl0ZW1Ub1N0cmluZyxcbiAgb3JpZ2luYWxJdGVtcyxcbiAgcG9wb3Zlck1heEhlaWdodCxcbiAgcmVuZGVySXRlbSxcbiAgc2VsZWN0ZWRJdGVtLFxuICB0aXRsZSxcbiAgd2lkdGhcbn0pID0+IHtcbiAgaXRlbXNGaWx0ZXIgPSBpdGVtc0ZpbHRlciB8fCBmdXp6eUZpbHRlcihpdGVtVG9TdHJpbmcpXG4gIGNvbnN0IGl0ZW1zID1cbiAgICBpc0ZpbHRlckRpc2FibGVkIHx8IGlucHV0VmFsdWUudHJpbSgpID09PSAnJ1xuICAgICAgPyBvcmlnaW5hbEl0ZW1zXG4gICAgICA6IGl0ZW1zRmlsdGVyKG9yaWdpbmFsSXRlbXMsIGlucHV0VmFsdWUpXG5cbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICAvLyBQYXNzIHRoZSBhY3R1YWwgRE9NIHJlZiB0byBkb3duc2hpZnQsIHRoaXMgZml4ZXMgdG91Y2ggc3VwcG9ydFxuICBjb25zdCBtZW51UHJvcHMgPSBnZXRNZW51UHJvcHMoKVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmUgd2lkdGg9e3dpZHRofSB7Li4ubWVudVByb3BzfT5cbiAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgIDxQYW5lIHBhZGRpbmc9ezh9IGJvcmRlckJvdHRvbT1cIm11dGVkXCI+XG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT17MTAwfT57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICA8L1BhbmU+XG4gICAgICApfVxuICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8VmlydHVhbExpc3RcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD17TWF0aC5taW4oaXRlbXMubGVuZ3RoICogaXRlbVNpemUsIHBvcG92ZXJNYXhIZWlnaHQpfVxuICAgICAgICAgIGl0ZW1TaXplPXtpdGVtU2l6ZX1cbiAgICAgICAgICBpdGVtQ291bnQ9e2l0ZW1zLmxlbmd0aH1cbiAgICAgICAgICBzY3JvbGxUb0luZGV4PXtoaWdobGlnaHRlZEluZGV4IHx8IDB9XG4gICAgICAgICAgb3ZlcnNjYW5Db3VudD17M31cbiAgICAgICAgICBzY3JvbGxUb0FsaWdubWVudD1cImF1dG9cIlxuICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaW5kZXhdXG4gICAgICAgICAgICBjb25zdCBpdGVtU3RyaW5nID0gaXRlbVRvU3RyaW5nKGl0ZW0pXG5cbiAgICAgICAgICAgIHJldHVybiByZW5kZXJJdGVtKFxuICAgICAgICAgICAgICBnZXRJdGVtUHJvcHMoe1xuICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAga2V5OiBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGl0ZW1Ub1N0cmluZyhzZWxlY3RlZEl0ZW0pID09PSBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgIGlzSGlnaGxpZ2h0ZWQ6IGhpZ2hsaWdodGVkSW5kZXggPT09IGluZGV4XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9QYW5lPlxuICApXG59XG4vKiBlc2xpbnQtZW5hYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuY29uc3QgQXV0b2NvbXBsZXRlID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBBdXRvY29tcGxldGUocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaXRlbVNpemUgPSAzMixcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgcmVuZGVySXRlbSA9IGF1dG9jb21wbGV0ZUl0ZW1SZW5kZXJlcixcbiAgICAgIGlzRmlsdGVyRGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgIGl0ZW1zRmlsdGVyLFxuICAgICAgaXRlbVRvU3RyaW5nID0gaSA9PiAoaSA/IFN0cmluZyhpKSA6ICcnKSxcbiAgICAgIHBvcG92ZXJNYXhIZWlnaHQgPSAyNDAsXG4gICAgICBwb3BvdmVyTWluV2lkdGggPSAyNDAsXG4gICAgICAuLi5yZXN0UHJvcHNcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IFt0YXJnZXRXaWR0aCwgc2V0VGFyZ2V0V2lkdGhdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbdGFyZ2V0UmVmLCBzZXRUYXJnZXRSZWZdID0gdXNlU3RhdGUoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh0YXJnZXRSZWYpIHtcbiAgICAgICAgc2V0VGFyZ2V0V2lkdGgodGFyZ2V0UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKVxuICAgICAgfVxuICAgIH0sIFt0YXJnZXRSZWZdKVxuXG4gICAgY29uc3Qgc3RhdGVSZWR1Y2VyID0gdXNlQ2FsbGJhY2soXG4gICAgICAoc3RhdGUsIGNoYW5nZXMpID0+IHtcbiAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHNcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNoYW5nZXMsICdpc09wZW4nKSAmJlxuICAgICAgICAgIGNoYW5nZXMuaXNPcGVuXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogaXRlbXMuaW5kZXhPZihzdGF0ZS5zZWxlY3RlZEl0ZW0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoYW5nZXNcbiAgICAgIH0sXG4gICAgICBbcHJvcHMuaXRlbXNdXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb3duc2hpZnRcbiAgICAgICAgc3RhdGVSZWR1Y2VyPXtzdGF0ZVJlZHVjZXJ9XG4gICAgICAgIHNjcm9sbEludG9WaWV3PXtub29wfVxuICAgICAgICBpdGVtVG9TdHJpbmc9e2l0ZW1Ub1N0cmluZ31cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIGlzT3BlbjogaXNTaG93bixcbiAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICBnZXRNZW51UHJvcHMsXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgZ2V0Um9vdFByb3BzLFxuICAgICAgICAgIC4uLnJlc3REb3duc2hpZnRQcm9wc1xuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgYnJpbmdGb2N1c0luc2lkZT17ZmFsc2V9XG4gICAgICAgICAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICAgICAgICAgIG1pbldpZHRoPXtwb3BvdmVyTWluV2lkdGh9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiB8fFxuICAgICAgICAgICAgICAgICh0YXJnZXRXaWR0aCA8IHBvcG92ZXJNaW5XaWR0aFxuICAgICAgICAgICAgICAgICAgPyBQb3NpdGlvbi5CT1RUT01fTEVGVFxuICAgICAgICAgICAgICAgICAgOiBQb3NpdGlvbi5CT1RUT00pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGVudD17KCkgPT4gKFxuICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVJdGVtc1xuICAgICAgICAgICAgICAgICAgZ2V0SXRlbVByb3BzPXtnZXRJdGVtUHJvcHN9XG4gICAgICAgICAgICAgICAgICBnZXRNZW51UHJvcHM9e2dldE1lbnVQcm9wc31cbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg9e2hpZ2hsaWdodGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgaXNGaWx0ZXJEaXNhYmxlZD17aXNGaWx0ZXJEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIGl0ZW1zRmlsdGVyPXtpdGVtc0ZpbHRlcn1cbiAgICAgICAgICAgICAgICAgIGl0ZW1TaXplPXtpdGVtU2l6ZX1cbiAgICAgICAgICAgICAgICAgIGl0ZW1Ub1N0cmluZz17aXRlbVRvU3RyaW5nfVxuICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJdGVtcz17cHJvcHMuaXRlbXN9XG4gICAgICAgICAgICAgICAgICBwb3BvdmVyTWF4SGVpZ2h0PXtwb3BvdmVyTWF4SGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVySXRlbX1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRJdGVtfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e01hdGgubWF4KHRhcmdldFdpZHRoLCBwb3BvdmVyTWluV2lkdGgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIG1pbkhlaWdodD17MH1cbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249ezB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoeyBpc1Nob3duOiBpc1Nob3duUG9wb3ZlciwgdG9nZ2xlLCBnZXRSZWYgfSkgPT5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICBpc1Nob3duOiBpc1Nob3duUG9wb3ZlcixcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZSxcbiAgICAgICAgICAgICAgICAgIGdldFJlZjogcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSByZWYgaW50ZXJuYWxseSB0byBkZXRlcm1pbmUgdGhlIHdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHNldFRhcmdldFJlZihyZWYpXG4gICAgICAgICAgICAgICAgICAgIGdldFJlZihyZWYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAuLi5yZXN0RG93bnNoaWZ0UHJvcHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0Rvd25zaGlmdD5cbiAgICApXG4gIH0pXG4pXG5cbkF1dG9jb21wbGV0ZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGlzIHByb3AgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIE5vZGUuXG4gICAqIEl0IHdpbGwgcHJvdmlkZSBhIHRpdGxlIGZvciB0aGUgaXRlbXNcbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBpdGVtcyB0byBiZSB1c2VkIGFzIG9wdGlvbnMgZm9yIHRoZSBzZWxlY3RcbiAgICovXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIHNlbGVjdGVkIEl0ZW0gdG8gYmUgc2hvd24gb24gdGhlIGF1dG9jb21wbGV0ZVxuICAgKi9cbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJbiBjYXNlIHRoZSBhcnJheSBvZiBpdGVtcyBpcyBub3QgYW4gYXJyYXkgb2Ygc3RyaW5ncyxcbiAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9uIGVhY2ggaXRlbSB0byByZXR1cm4gdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgc2hvd24gb24gdGhlIGZpbHRlclxuICAgKi9cbiAgaXRlbVRvU3RyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIHJlbmRlciB0aGUgJ2ZpbHRlcicgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgZWFjaCBpdGVtIGluIHRoZSBsaXN0XG4gICAqIEJlY2F1c2UgdGhlIGxpc3QgaXMgdmlydHVhbGl6ZWQgdGhpcyBpcyByZXF1aXJlZCBiZWZvcmVoYW5kLlxuICAgKi9cbiAgaXRlbVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNvbXBvbmVudCB0byByZW5kZXIgdGhlIGl0ZW1cbiAgICovXG4gIHJlbmRlckl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIFBvcG92ZXIgdGhlIEF1dG9jb21wbGV0ZSBpcyByZW5kZXJlZCBpbi5cbiAgICovXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFBvc2l0aW9uLlRPUCxcbiAgICBQb3NpdGlvbi5UT1BfTEVGVCxcbiAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgUG9zaXRpb24uQk9UVE9NLFxuICAgIFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVCxcbiAgICBQb3NpdGlvbi5MRUZULFxuICAgIFBvc2l0aW9uLlJJR0hUXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBmaWx0ZXIgdGhlIGl0ZW1zLlxuICAgKiBJdCBzaG91bGQgcmV0dXJuIGEgc3Vic2V0IG9mIHRoZSBpbml0aWFsIGl0ZW1zLlxuICAgKiBCeSBkZWZhdWx0IHRoZSBcImZ1enphbGRyaW4tcGx1c1wiIHBhY2thZ2UgaXMgdXNlZC5cbiAgICovXG4gIGl0ZW1zRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUHJvcCB0aGF0IGVuYWJsZXMgYW5kIGRpc2FibGVzIGZpbHRlcmluZ1xuICAgKiBUcnVlOiBFbmFibGVzIEZpbHRlcmluZ1xuICAgKiBGYWxzZTogRGlzYWJsZXMgRmlsdGVyaW5nXG4gICAqL1xuICBpc0ZpbHRlckRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbWluaW11bSBoZWlnaHQgdGhlIHJlc3VsdHMgY29udGFpbmVyIHdpbGwgYmVcbiAgICovXG4gIHBvcG92ZXJNaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbWF4aW11bSBoZWlnaHQgdGhlIHJlc3VsdHMgY29udGFpbmVyIHdpbGwgYmVcbiAgICovXG4gIHBvcG92ZXJNYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLi4uRG93bnNoaWZ0LnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGVcbiJdfQ==