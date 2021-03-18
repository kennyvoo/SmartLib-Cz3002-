import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VirtualList from 'react-tiny-virtual-list';
import debounce from 'lodash.debounce';
import { Pane } from '../../layers';
import { useForceUpdate } from '../../hooks';
var TableVirtualBody = memo(function TableVirtualBody(props) {
  var inputChildren = props.children,
      paneHeight = props.height,
      _props$defaultHeight = props.defaultHeight,
      defaultHeight = _props$defaultHeight === void 0 ? 48 : _props$defaultHeight,
      _props$allowAutoHeigh = props.allowAutoHeight,
      allowAutoHeight = _props$allowAutoHeigh === void 0 ? false : _props$allowAutoHeigh,
      _props$overscanCount = props.overscanCount,
      overscanCount = _props$overscanCount === void 0 ? 5 : _props$overscanCount,
      estimatedItemSize = props.estimatedItemSize,
      _props$useAverageAuto = props.useAverageAutoHeightEstimation,
      useAverageAutoHeightEstimation = _props$useAverageAuto === void 0 ? true : _props$useAverageAuto,
      scrollToIndex = props.scrollToIndex,
      scrollOffset = props.scrollOffset,
      scrollToAlignment = props.scrollToAlignment,
      onScroll = props.onScroll,
      rest = _objectWithoutProperties(props, ["children", "height", "defaultHeight", "allowAutoHeight", "overscanCount", "estimatedItemSize", "useAverageAutoHeightEstimation", "scrollToIndex", "scrollOffset", "scrollToAlignment", "onScroll"]);

  var forceUpdate = useForceUpdate();
  var autoHeights = [];
  var autoHeightRefs = [];
  var averageAutoHeight = defaultHeight;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      paneRef = _useState2[0],
      setPaneRef = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isIntegerHeight = _useState4[0],
      setIsIntegerHeight = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      calculatedHeight = _useState6[0],
      setCalculatedHeight = _useState6[1];

  var updateOnResize = function updateOnResize() {
    autoHeights = [];
    autoHeightRefs = [];
    averageAutoHeight = defaultHeight; // Simply return when we now the height of the pane is fixed.

    if (isIntegerHeight) return; // Return if we are in a weird edge case in which the ref is no longer valid.

    if (paneRef && paneRef instanceof Node) {
      var tempCalculatedHeight = paneRef.offsetHeight;

      if (tempCalculatedHeight > 0) {
        // Save the calculated height which is needed for the VirtualList.
        setCalculatedHeight(tempCalculatedHeight); // Prevent updateOnResize being called recursively when there is a valid height.

        return;
      }
    } // When height is still 0 (or paneRef is not valid) try recursively until success.


    requestAnimationFrame(function () {
      updateOnResize();
    });
  };

  var onResize = debounce(updateOnResize, 200);
  useEffect(function () {
    if (props.height !== calculatedHeight) {
      setIsIntegerHeight(Number.isInteger(props.height));
    }
  }, [props.height]);
  useEffect(function () {
    if (paneRef && paneRef instanceof Node) {
      updateOnResize();
    }
  }, [paneRef]); // Mirrors functionality of componentDidMount and componentWillUnmount.
  // By passing an empty array, will only run on first render, the function returned
  // will be called on component unmount

  useEffect(function () {
    updateOnResize();
    window.addEventListener('resize', onResize, false);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  /**
   * This function will process all items that have height="auto" set.
   * It will loop through all refs and get calculate the height.
   */

  var processAutoHeights = function processAutoHeights() {
    var isUpdated = false; // This will determine the averageAutoHeight.

    var total = 0;
    var totalAmount = 0; // Loop through all of the refs that have height="auto".

    autoHeightRefs.forEach(function (ref, index) {
      // If the height is already calculated, skip it,
      // but calculate the height for the total.
      if (autoHeights[index]) {
        total += autoHeights[index];
        totalAmount += 1;
        return;
      } // Make sure the ref has a child


      if (ref && ref.childNodes && ref.childNodes[0] && Number.isInteger(ref.childNodes[0].offsetHeight)) {
        var height = ref.childNodes[0].offsetHeight; // Add to the total to calculate the averageAutoHeight.

        total += height;
        totalAmount += 1; // Cache the height.

        autoHeights[index] = height; // Set the update flag to true.

        isUpdated = true;
      }
    }); // Save the average height.

    averageAutoHeight = total / totalAmount; // There are some new heights detected that had previously not been calculated.
    // Call forceUpdate to make sure the virtual list renders again.

    if (isUpdated) forceUpdate();
  };

  var onVirtualHelperRef = function onVirtualHelperRef(index, ref) {
    autoHeightRefs[index] = ref;
    requestAnimationFrame(function () {
      processAutoHeights();
    });
  };

  var getItemSize = function getItemSize(children) {
    // Prefer to return a array of all heights.
    if (!allowAutoHeight) {
      return children.map(function (child) {
        if (!React.isValidElement(child)) return defaultHeight;
        var height = child.props.height;

        if (Number.isInteger(height)) {
          return height;
        }

        return defaultHeight;
      });
    } // If allowAutoHeight is true, return a function instead.


    var itemSizeFn = function itemSizeFn(index) {
      if (!React.isValidElement(children[index])) return defaultHeight;
      var height = children[index].props.height; // When the height is number simply, simply return it.

      if (Number.isInteger(height)) {
        return height;
      } // When allowAutoHeight is set and  the height is set to "auto"...


      if (allowAutoHeight && children[index].props.height === 'auto') {
        // ... and the height is calculated, return the calculated height.
        if (autoHeights[index]) return autoHeights[index]; // ... if the height is not yet calculated, return the averge

        if (useAverageAutoHeightEstimation) return averageAutoHeight;
      } // Return the default height.


      return defaultHeight;
    };

    return itemSizeFn;
  }; // Children always needs to be an array.


  var children = Array.isArray(inputChildren) ? inputChildren : React.Children.toArray(inputChildren);
  var itemSize = getItemSize(children);
  return React.createElement(Pane, _extends({
    "data-evergreen-table-body": true,
    ref: setPaneRef,
    height: paneHeight,
    flex: "1",
    overflow: "hidden"
  }, rest), React.createElement(VirtualList, {
    height: isIntegerHeight ? paneHeight : calculatedHeight,
    width: "100%",
    estimatedItemSize: allowAutoHeight && useAverageAutoHeightEstimation ? averageAutoHeight : estimatedItemSize || null,
    itemSize: itemSize,
    overscanCount: overscanCount,
    itemCount: React.Children.count(children),
    scrollToIndex: scrollToIndex,
    scrollOffset: scrollOffset,
    scrollToAlignment: scrollToAlignment,
    onScroll: onScroll,
    renderItem: function renderItem(_ref) {
      var index = _ref.index,
          style = _ref.style;
      var child = children[index];
      var key = child.key || index;
      var props = {
        key: key,
        style: style
      }; // If some children are strings by accident, support this gracefully.

      if (!React.isValidElement(child)) {
        if (typeof child === 'string') {
          return React.createElement("div", props, child);
        }

        return React.createElement("div", props, "\xA0");
      } // When allowing height="auto" for rows, and a auto height item is
      // rendered for the first time...


      if (allowAutoHeight && React.isValidElement(child) && child.props.height === 'auto' && // ... and only when the height is not already been calculated.
      !autoHeights[index]) {
        // ... render the item in a helper div, the ref is used to calculate
        // the height of its children.
        return React.createElement("div", _extends({
          ref: function ref(_ref2) {
            return onVirtualHelperRef(index, _ref2);
          },
          "data-virtual-index": index
        }, props, {
          style: _objectSpread({
            opacity: 0
          }, props.style)
        }), child);
      } // When allowAutoHeight is false, or when the height is known.
      // Simply render the item.


      return React.cloneElement(child, props);
    }
  }));
});
TableVirtualBody.propTypes = _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * Children needs to be an array of a single node.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight: PropTypes.number,

  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an expirmental feature.
   */
  allowAutoHeight: PropTypes.bool,

  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount: PropTypes.number,

  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize: PropTypes.number,

  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation: PropTypes.bool,

  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex: PropTypes.number,

  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset: PropTypes.number,

  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment: PropTypes.oneOf(['start', 'center', 'end', 'auto']),

  /**
   * The onScroll callback passed to react-tiny-virtual-list
   */
  onScroll: PropTypes.func
});
export default TableVirtualBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVWaXJ0dWFsQm9keS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb3BUeXBlcyIsIlZpcnR1YWxMaXN0IiwiZGVib3VuY2UiLCJQYW5lIiwidXNlRm9yY2VVcGRhdGUiLCJUYWJsZVZpcnR1YWxCb2R5IiwicHJvcHMiLCJpbnB1dENoaWxkcmVuIiwiY2hpbGRyZW4iLCJwYW5lSGVpZ2h0IiwiaGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImFsbG93QXV0b0hlaWdodCIsIm92ZXJzY2FuQ291bnQiLCJlc3RpbWF0ZWRJdGVtU2l6ZSIsInVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbiIsInNjcm9sbFRvSW5kZXgiLCJzY3JvbGxPZmZzZXQiLCJzY3JvbGxUb0FsaWdubWVudCIsIm9uU2Nyb2xsIiwicmVzdCIsImZvcmNlVXBkYXRlIiwiYXV0b0hlaWdodHMiLCJhdXRvSGVpZ2h0UmVmcyIsImF2ZXJhZ2VBdXRvSGVpZ2h0IiwicGFuZVJlZiIsInNldFBhbmVSZWYiLCJpc0ludGVnZXJIZWlnaHQiLCJzZXRJc0ludGVnZXJIZWlnaHQiLCJjYWxjdWxhdGVkSGVpZ2h0Iiwic2V0Q2FsY3VsYXRlZEhlaWdodCIsInVwZGF0ZU9uUmVzaXplIiwiTm9kZSIsInRlbXBDYWxjdWxhdGVkSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25SZXNpemUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb2Nlc3NBdXRvSGVpZ2h0cyIsImlzVXBkYXRlZCIsInRvdGFsIiwidG90YWxBbW91bnQiLCJmb3JFYWNoIiwicmVmIiwiaW5kZXgiLCJjaGlsZE5vZGVzIiwib25WaXJ0dWFsSGVscGVyUmVmIiwiZ2V0SXRlbVNpemUiLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiaXRlbVNpemVGbiIsIkFycmF5IiwiaXNBcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIml0ZW1TaXplIiwiY291bnQiLCJzdHlsZSIsImtleSIsIm9wYWNpdHkiLCJjbG9uZUVsZW1lbnQiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsIm51bWJlciIsImJvb2wiLCJvbmVPZiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxRQUF0QixFQUFnQ0MsU0FBaEMsUUFBaUQsT0FBakQ7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3Qix5QkFBeEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGlCQUFyQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxjQUFULFFBQStCLGFBQS9CO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUdSLElBQUksQ0FBQyxTQUFTUSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFBQSxNQUVqREMsYUFGaUQsR0FjekRELEtBZHlELENBRTNERSxRQUYyRDtBQUFBLE1BR25EQyxVQUhtRCxHQWN6REgsS0FkeUQsQ0FHM0RJLE1BSDJEO0FBQUEsNkJBY3pESixLQWR5RCxDQUkzREssYUFKMkQ7QUFBQSxNQUkzREEsYUFKMkQscUNBSTNDLEVBSjJDO0FBQUEsOEJBY3pETCxLQWR5RCxDQUszRE0sZUFMMkQ7QUFBQSxNQUszREEsZUFMMkQsc0NBS3pDLEtBTHlDO0FBQUEsNkJBY3pETixLQWR5RCxDQU0zRE8sYUFOMkQ7QUFBQSxNQU0zREEsYUFOMkQscUNBTTNDLENBTjJDO0FBQUEsTUFPM0RDLGlCQVAyRCxHQWN6RFIsS0FkeUQsQ0FPM0RRLGlCQVAyRDtBQUFBLDhCQWN6RFIsS0FkeUQsQ0FRM0RTLDhCQVIyRDtBQUFBLE1BUTNEQSw4QkFSMkQsc0NBUTFCLElBUjBCO0FBQUEsTUFTM0RDLGFB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QUFQO0FBQ0Q7QUE3REgsSUFSRixDQURGO0FBMEVELENBbFE0QixDQUE3QjtBQW9RQUQsZ0JBQWdCLENBQUM2RCxTQUFqQixtQ0FJSy9ELElBQUksQ0FBQytELFNBSlY7QUFNRTs7O0FBR0ExRCxFQUFBQSxRQUFRLEVBQUVSLFNBQVMsQ0FBQ21FLFNBQVYsQ0FBb0IsQ0FDNUJuRSxTQUFTLENBQUNvRSxPQUFWLENBQWtCcEUsU0FBUyxDQUFDcUUsSUFBNUIsQ0FENEIsRUFFNUJyRSxTQUFTLENBQUNxRSxJQUZrQixDQUFwQixDQVRaOztBQWNFOzs7O0FBSUExRCxFQUFBQSxhQUFhLEVBQUVYLFNBQVMsQ0FBQ3NFLE1BbEIzQjs7QUFvQkU7Ozs7QUFJQTFELEVBQUFBLGVBQWUsRUFBRVosU0FBUyxDQUFDdUUsSUF4QjdCOztBQTBCRTs7O0FBR0ExRCxFQUFBQSxhQUFhLEVBQUViLFNBQVMsQ0FBQ3NFLE1BN0IzQjs7QUErQkU7Ozs7QUFJQXhELEVBQUFBLGlCQUFpQixFQUFFZCxTQUFTLENBQUNzRSxNQW5DL0I7O0FBcUNFOzs7O0FBSUF2RCxFQUFBQSw4QkFBOEIsRUFBRWYsU0FBUyxDQUFDdUUsSUF6QzVDOztBQTJDRTs7O0FBR0F2RCxFQUFBQSxhQUFhLEVBQUVoQixTQUFTLENBQUNzRSxNQTlDM0I7O0FBK0NFOzs7QUFHQXJELEVBQUFBLFlBQVksRUFBRWpCLFNBQVMsQ0FBQ3NFLE1BbEQxQjs7QUFtREU7OztBQUdBcEQsRUFBQUEsaUJBQWlCLEVBQUVsQixTQUFTLENBQUN3RSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsS0FBcEIsRUFBMkIsTUFBM0IsQ0FBaEIsQ0F0RHJCOztBQXVERTs7O0FBR0FyRCxFQUFBQSxRQUFRLEVBQUVuQixTQUFTLENBQUN5RTtBQTFEdEI7QUE2REEsZUFBZXBFLGdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICdyZWFjdC10aW55LXZpcnR1YWwtbGlzdCdcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgdXNlRm9yY2VVcGRhdGUgfSBmcm9tICcuLi8uLi9ob29rcydcblxuY29uc3QgVGFibGVWaXJ0dWFsQm9keSA9IG1lbW8oZnVuY3Rpb24gVGFibGVWaXJ0dWFsQm9keShwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW46IGlucHV0Q2hpbGRyZW4sXG4gICAgaGVpZ2h0OiBwYW5lSGVpZ2h0LFxuICAgIGRlZmF1bHRIZWlnaHQgPSA0OCxcbiAgICBhbGxvd0F1dG9IZWlnaHQgPSBmYWxzZSxcbiAgICBvdmVyc2NhbkNvdW50ID0gNSxcbiAgICBlc3RpbWF0ZWRJdGVtU2l6ZSxcbiAgICB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb24gPSB0cnVlLFxuICAgIHNjcm9sbFRvSW5kZXgsXG4gICAgc2Nyb2xsT2Zmc2V0LFxuICAgIHNjcm9sbFRvQWxpZ25tZW50LFxuICAgIG9uU2Nyb2xsLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpXG4gIGxldCBhdXRvSGVpZ2h0cyA9IFtdXG4gIGxldCBhdXRvSGVpZ2h0UmVmcyA9IFtdXG4gIGxldCBhdmVyYWdlQXV0b0hlaWdodCA9IGRlZmF1bHRIZWlnaHRcblxuICBjb25zdCBbcGFuZVJlZiwgc2V0UGFuZVJlZl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtpc0ludGVnZXJIZWlnaHQsIHNldElzSW50ZWdlckhlaWdodF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NhbGN1bGF0ZWRIZWlnaHQsIHNldENhbGN1bGF0ZWRIZWlnaHRdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCB1cGRhdGVPblJlc2l6ZSA9ICgpID0+IHtcbiAgICBhdXRvSGVpZ2h0cyA9IFtdXG4gICAgYXV0b0hlaWdodFJlZnMgPSBbXVxuICAgIGF2ZXJhZ2VBdXRvSGVpZ2h0ID0gZGVmYXVsdEhlaWdodFxuXG4gICAgLy8gU2ltcGx5IHJldHVybiB3aGVuIHdlIG5vdyB0aGUgaGVpZ2h0IG9mIHRoZSBwYW5lIGlzIGZpeGVkLlxuICAgIGlmIChpc0ludGVnZXJIZWlnaHQpIHJldHVyblxuXG4gICAgLy8gUmV0dXJuIGlmIHdlIGFyZSBpbiBhIHdlaXJkIGVkZ2UgY2FzZSBpbiB3aGljaCB0aGUgcmVmIGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICBpZiAocGFuZVJlZiAmJiBwYW5lUmVmIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgY29uc3QgdGVtcENhbGN1bGF0ZWRIZWlnaHQgPSBwYW5lUmVmLm9mZnNldEhlaWdodFxuXG4gICAgICBpZiAodGVtcENhbGN1bGF0ZWRIZWlnaHQgPiAwKSB7XG4gICAgICAgIC8vIFNhdmUgdGhlIGNhbGN1bGF0ZWQgaGVpZ2h0IHdoaWNoIGlzIG5lZWRlZCBmb3IgdGhlIFZpcnR1YWxMaXN0LlxuICAgICAgICBzZXRDYWxjdWxhdGVkSGVpZ2h0KHRlbXBDYWxjdWxhdGVkSGVpZ2h0KVxuXG4gICAgICAgIC8vIFByZXZlbnQgdXBkYXRlT25SZXNpemUgYmVpbmcgY2FsbGVkIHJlY3Vyc2l2ZWx5IHdoZW4gdGhlcmUgaXMgYSB2YWxpZCBoZWlnaHQuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoZW4gaGVpZ2h0IGlzIHN0aWxsIDAgKG9yIHBhbmVSZWYgaXMgbm90IHZhbGlkKSB0cnkgcmVjdXJzaXZlbHkgdW50aWwgc3VjY2Vzcy5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdXBkYXRlT25SZXNpemUoKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBvblJlc2l6ZSA9IGRlYm91bmNlKHVwZGF0ZU9uUmVzaXplLCAyMDApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMuaGVpZ2h0ICE9PSBjYWxjdWxhdGVkSGVpZ2h0KSB7XG4gICAgICBzZXRJc0ludGVnZXJIZWlnaHQoTnVtYmVyLmlzSW50ZWdlcihwcm9wcy5oZWlnaHQpKVxuICAgIH1cbiAgfSwgW3Byb3BzLmhlaWdodF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGFuZVJlZiAmJiBwYW5lUmVmIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgdXBkYXRlT25SZXNpemUoKVxuICAgIH1cbiAgfSwgW3BhbmVSZWZdKVxuXG4gIC8vIE1pcnJvcnMgZnVuY3Rpb25hbGl0eSBvZiBjb21wb25lbnREaWRNb3VudCBhbmQgY29tcG9uZW50V2lsbFVubW91bnQuXG4gIC8vIEJ5IHBhc3NpbmcgYW4gZW1wdHkgYXJyYXksIHdpbGwgb25seSBydW4gb24gZmlyc3QgcmVuZGVyLCB0aGUgZnVuY3Rpb24gcmV0dXJuZWRcbiAgLy8gd2lsbCBiZSBjYWxsZWQgb24gY29tcG9uZW50IHVubW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVPblJlc2l6ZSgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplLCBmYWxzZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpXG4gICAgfVxuICB9LCBbXSlcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHByb2Nlc3MgYWxsIGl0ZW1zIHRoYXQgaGF2ZSBoZWlnaHQ9XCJhdXRvXCIgc2V0LlxuICAgKiBJdCB3aWxsIGxvb3AgdGhyb3VnaCBhbGwgcmVmcyBhbmQgZ2V0IGNhbGN1bGF0ZSB0aGUgaGVpZ2h0LlxuICAgKi9cbiAgY29uc3QgcHJvY2Vzc0F1dG9IZWlnaHRzID0gKCkgPT4ge1xuICAgIGxldCBpc1VwZGF0ZWQgPSBmYWxzZVxuXG4gICAgLy8gVGhpcyB3aWxsIGRldGVybWluZSB0aGUgYXZlcmFnZUF1dG9IZWlnaHQuXG4gICAgbGV0IHRvdGFsID0gMFxuICAgIGxldCB0b3RhbEFtb3VudCA9IDBcblxuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIHJlZnMgdGhhdCBoYXZlIGhlaWdodD1cImF1dG9cIi5cbiAgICBhdXRvSGVpZ2h0UmVmcy5mb3JFYWNoKChyZWYsIGluZGV4KSA9PiB7XG4gICAgICAvLyBJZiB0aGUgaGVpZ2h0IGlzIGFscmVhZHkgY2FsY3VsYXRlZCwgc2tpcCBpdCxcbiAgICAgIC8vIGJ1dCBjYWxjdWxhdGUgdGhlIGhlaWdodCBmb3IgdGhlIHRvdGFsLlxuICAgICAgaWYgKGF1dG9IZWlnaHRzW2luZGV4XSkge1xuICAgICAgICB0b3RhbCArPSBhdXRvSGVpZ2h0c1tpbmRleF1cbiAgICAgICAgdG90YWxBbW91bnQgKz0gMVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIHRoZSByZWYgaGFzIGEgY2hpbGRcbiAgICAgIGlmIChcbiAgICAgICAgcmVmICYmXG4gICAgICAgIHJlZi5jaGlsZE5vZGVzICYmXG4gICAgICAgIHJlZi5jaGlsZE5vZGVzWzBdICYmXG4gICAgICAgIE51bWJlci5pc0ludGVnZXIocmVmLmNoaWxkTm9kZXNbMF0ub2Zmc2V0SGVpZ2h0KVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHJlZi5jaGlsZE5vZGVzWzBdLm9mZnNldEhlaWdodFxuXG4gICAgICAgIC8vIEFkZCB0byB0aGUgdG90YWwgdG8gY2FsY3VsYXRlIHRoZSBhdmVyYWdlQXV0b0hlaWdodC5cbiAgICAgICAgdG90YWwgKz0gaGVpZ2h0XG4gICAgICAgIHRvdGFsQW1vdW50ICs9IDFcblxuICAgICAgICAvLyBDYWNoZSB0aGUgaGVpZ2h0LlxuICAgICAgICBhdXRvSGVpZ2h0c1tpbmRleF0gPSBoZWlnaHRcblxuICAgICAgICAvLyBTZXQgdGhlIHVwZGF0ZSBmbGFnIHRvIHRydWUuXG4gICAgICAgIGlzVXBkYXRlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gU2F2ZSB0aGUgYXZlcmFnZSBoZWlnaHQuXG4gICAgYXZlcmFnZUF1dG9IZWlnaHQgPSB0b3RhbCAvIHRvdGFsQW1vdW50XG5cbiAgICAvLyBUaGVyZSBhcmUgc29tZSBuZXcgaGVpZ2h0cyBkZXRlY3RlZCB0aGF0IGhhZCBwcmV2aW91c2x5IG5vdCBiZWVuIGNhbGN1bGF0ZWQuXG4gICAgLy8gQ2FsbCBmb3JjZVVwZGF0ZSB0byBtYWtlIHN1cmUgdGhlIHZpcnR1YWwgbGlzdCByZW5kZXJzIGFnYWluLlxuICAgIGlmIChpc1VwZGF0ZWQpIGZvcmNlVXBkYXRlKClcbiAgfVxuXG4gIGNvbnN0IG9uVmlydHVhbEhlbHBlclJlZiA9IChpbmRleCwgcmVmKSA9PiB7XG4gICAgYXV0b0hlaWdodFJlZnNbaW5kZXhdID0gcmVmXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgcHJvY2Vzc0F1dG9IZWlnaHRzKClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZ2V0SXRlbVNpemUgPSBjaGlsZHJlbiA9PiB7XG4gICAgLy8gUHJlZmVyIHRvIHJldHVybiBhIGFycmF5IG9mIGFsbCBoZWlnaHRzLlxuICAgIGlmICghYWxsb3dBdXRvSGVpZ2h0KSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHJldHVybiBkZWZhdWx0SGVpZ2h0XG4gICAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBjaGlsZC5wcm9wc1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhlaWdodCkpIHtcbiAgICAgICAgICByZXR1cm4gaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdEhlaWdodFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBJZiBhbGxvd0F1dG9IZWlnaHQgaXMgdHJ1ZSwgcmV0dXJuIGEgZnVuY3Rpb24gaW5zdGVhZC5cbiAgICBjb25zdCBpdGVtU2l6ZUZuID0gaW5kZXggPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbltpbmRleF0pKSByZXR1cm4gZGVmYXVsdEhlaWdodFxuICAgICAgY29uc3QgeyBoZWlnaHQgfSA9IGNoaWxkcmVuW2luZGV4XS5wcm9wc1xuXG4gICAgICAvLyBXaGVuIHRoZSBoZWlnaHQgaXMgbnVtYmVyIHNpbXBseSwgc2ltcGx5IHJldHVybiBpdC5cbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhlaWdodCkpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodFxuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIGFsbG93QXV0b0hlaWdodCBpcyBzZXQgYW5kICB0aGUgaGVpZ2h0IGlzIHNldCB0byBcImF1dG9cIi4uLlxuICAgICAgaWYgKGFsbG93QXV0b0hlaWdodCAmJiBjaGlsZHJlbltpbmRleF0ucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgICAgLy8gLi4uIGFuZCB0aGUgaGVpZ2h0IGlzIGNhbGN1bGF0ZWQsIHJldHVybiB0aGUgY2FsY3VsYXRlZCBoZWlnaHQuXG4gICAgICAgIGlmIChhdXRvSGVpZ2h0c1tpbmRleF0pIHJldHVybiBhdXRvSGVpZ2h0c1tpbmRleF1cblxuICAgICAgICAvLyAuLi4gaWYgdGhlIGhlaWdodCBpcyBub3QgeWV0IGNhbGN1bGF0ZWQsIHJldHVybiB0aGUgYXZlcmdlXG4gICAgICAgIGlmICh1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb24pIHJldHVybiBhdmVyYWdlQXV0b0hlaWdodFxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gdGhlIGRlZmF1bHQgaGVpZ2h0LlxuICAgICAgcmV0dXJuIGRlZmF1bHRIZWlnaHRcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVNpemVGblxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gYWx3YXlzIG5lZWRzIHRvIGJlIGFuIGFycmF5LlxuICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkoaW5wdXRDaGlsZHJlbilcbiAgICA/IGlucHV0Q2hpbGRyZW5cbiAgICA6IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoaW5wdXRDaGlsZHJlbilcblxuICBjb25zdCBpdGVtU2l6ZSA9IGdldEl0ZW1TaXplKGNoaWxkcmVuKVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmVcbiAgICAgIGRhdGEtZXZlcmdyZWVuLXRhYmxlLWJvZHlcbiAgICAgIHJlZj17c2V0UGFuZVJlZn1cbiAgICAgIGhlaWdodD17cGFuZUhlaWdodH1cbiAgICAgIGZsZXg9XCIxXCJcbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIDxWaXJ0dWFsTGlzdFxuICAgICAgICBoZWlnaHQ9e2lzSW50ZWdlckhlaWdodCA/IHBhbmVIZWlnaHQgOiBjYWxjdWxhdGVkSGVpZ2h0fVxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBlc3RpbWF0ZWRJdGVtU2l6ZT17XG4gICAgICAgICAgYWxsb3dBdXRvSGVpZ2h0ICYmIHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvblxuICAgICAgICAgICAgPyBhdmVyYWdlQXV0b0hlaWdodFxuICAgICAgICAgICAgOiBlc3RpbWF0ZWRJdGVtU2l6ZSB8fCBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaXRlbVNpemU9e2l0ZW1TaXplfVxuICAgICAgICBvdmVyc2NhbkNvdW50PXtvdmVyc2NhbkNvdW50fVxuICAgICAgICBpdGVtQ291bnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKX1cbiAgICAgICAgc2Nyb2xsVG9JbmRleD17c2Nyb2xsVG9JbmRleH1cbiAgICAgICAgc2Nyb2xsT2Zmc2V0PXtzY3JvbGxPZmZzZXR9XG4gICAgICAgIHNjcm9sbFRvQWxpZ25tZW50PXtzY3JvbGxUb0FsaWdubWVudH1cbiAgICAgICAgb25TY3JvbGw9e29uU2Nyb2xsfVxuICAgICAgICByZW5kZXJJdGVtPXsoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG4gICAgICAgICAgY29uc3Qga2V5ID0gY2hpbGQua2V5IHx8IGluZGV4XG4gICAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBzdHlsZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHNvbWUgY2hpbGRyZW4gYXJlIHN0cmluZ3MgYnkgYWNjaWRlbnQsIHN1cHBvcnQgdGhpcyBncmFjZWZ1bGx5LlxuICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PntjaGlsZH08L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIGFsbG93aW5nIGhlaWdodD1cImF1dG9cIiBmb3Igcm93cywgYW5kIGEgYXV0byBoZWlnaHQgaXRlbSBpc1xuICAgICAgICAgIC8vIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZS4uLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGFsbG93QXV0b0hlaWdodCAmJlxuICAgICAgICAgICAgUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmXG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJyAmJlxuICAgICAgICAgICAgLy8gLi4uIGFuZCBvbmx5IHdoZW4gdGhlIGhlaWdodCBpcyBub3QgYWxyZWFkeSBiZWVuIGNhbGN1bGF0ZWQuXG4gICAgICAgICAgICAhYXV0b0hlaWdodHNbaW5kZXhdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyAuLi4gcmVuZGVyIHRoZSBpdGVtIGluIGEgaGVscGVyIGRpdiwgdGhlIHJlZiBpcyB1c2VkIHRvIGNhbGN1bGF0ZVxuICAgICAgICAgICAgLy8gdGhlIGhlaWdodCBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gb25WaXJ0dWFsSGVscGVyUmVmKGluZGV4LCByZWYpfVxuICAgICAgICAgICAgICAgIGRhdGEtdmlydHVhbC1pbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgLi4ucHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIGFsbG93QXV0b0hlaWdodCBpcyBmYWxzZSwgb3Igd2hlbiB0aGUgaGVpZ2h0IGlzIGtub3duLlxuICAgICAgICAgIC8vIFNpbXBseSByZW5kZXIgdGhlIGl0ZW0uXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvUGFuZT5cbiAgKVxufSlcblxuVGFibGVWaXJ0dWFsQm9keS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5QYW5lLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogQ2hpbGRyZW4gbmVlZHMgdG8gYmUgYW4gYXJyYXkgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgaGVpZ2h0IG9mIGVhY2ggcm93LlxuICAgKiA0OCBpcyB0aGUgZGVmYXVsdCBoZWlnaHQgb2YgYSBUYWJsZVJvdy5cbiAgICovXG4gIGRlZmF1bHRIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgc3VwcG9ydCBgaGVpZ2h0PVwiYXV0b1wiYCBvbiBjaGlsZHJlbiBiZWluZyByZW5kZXJlZC5cbiAgICogVGhpcyBpcyBzb21ld2hhdCBvZiBhbiBleHBpcm1lbnRhbCBmZWF0dXJlLlxuICAgKi9cbiAgYWxsb3dBdXRvSGVpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIG92ZXJzY2FuQ291bnQgcHJvcGVydHkgcGFzc2VkIHRvIHJlYWN0LXRpbnktdmlydHVhbC1saXN0LlxuICAgKi9cbiAgb3ZlcnNjYW5Db3VudDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogV2hlbiBwYXNzZWQsIHRoaXMgaXMgdXNlZCBhcyB0aGUgYGVzdGltYXRlZEl0ZW1TaXplYCBpbiByZWFjdC10aW55LXZpcnR1YWwtbGlzdC5cbiAgICogT25seSB3aGVuIGBhbGxvd0F1dG9IZWlnaHRgIGFuZGB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb25gIGFyZSBmYWxzZS5cbiAgICovXG4gIGVzdGltYXRlZEl0ZW1TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBXaGVuIGFsbG93QXV0b0hlaWdodCBpcyB0cnVlIGFuZCB0aGlzIHByb3AgaXMgdHJ1ZSwgdGhlIGVzdGltYXRlZCBoZWlnaHRcbiAgICogd2lsbCBiZSBjb21wdXRlZCBiYXNlZCBvbiB0aGUgYXZlcmFnZSBoZWlnaHQgb2YgYXV0byBoZWlnaHQgcm93cy5cbiAgICovXG4gIHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBzY3JvbGxUb0luZGV4IHByb3BlcnR5IHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgc2Nyb2xsVG9JbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIFRoZSBzY3JvbGxPZmZzZXQgcHJvcGVydHkgcGFzc2VkIHRvIHJlYWN0LXRpbnktdmlydHVhbC1saXN0XG4gICAqL1xuICBzY3JvbGxPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBUaGUgc2Nyb2xsVG9BbGlnbm1lbnQgcHJvcGVydHkgcGFzc2VkIHRvIHJlYWN0LXRpbnktdmlydHVhbC1saXN0XG4gICAqL1xuICBzY3JvbGxUb0FsaWdubWVudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnY2VudGVyJywgJ2VuZCcsICdhdXRvJ10pLFxuICAvKipcbiAgICogVGhlIG9uU2Nyb2xsIGNhbGxiYWNrIHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlVmlydHVhbEJvZHlcbiJdfQ==