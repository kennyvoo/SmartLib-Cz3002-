"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _layers = require("../../layers");

var _hooks = require("../../hooks");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TableVirtualBody = (0, _react.memo)(function TableVirtualBody(props) {
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
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "height", "defaultHeight", "allowAutoHeight", "overscanCount", "estimatedItemSize", "useAverageAutoHeightEstimation", "scrollToIndex", "scrollOffset", "scrollToAlignment", "onScroll"]);
  var forceUpdate = (0, _hooks.useForceUpdate)();
  var autoHeights = [];
  var autoHeightRefs = [];
  var averageAutoHeight = defaultHeight;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      paneRef = _useState2[0],
      setPaneRef = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isIntegerHeight = _useState4[0],
      setIsIntegerHeight = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
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

  var onResize = (0, _lodash["default"])(updateOnResize, 200);
  (0, _react.useEffect)(function () {
    if (props.height !== calculatedHeight) {
      setIsIntegerHeight(Number.isInteger(props.height));
    }
  }, [props.height]);
  (0, _react.useEffect)(function () {
    if (paneRef && paneRef instanceof Node) {
      updateOnResize();
    }
  }, [paneRef]); // Mirrors functionality of componentDidMount and componentWillUnmount.
  // By passing an empty array, will only run on first render, the function returned
  // will be called on component unmount

  (0, _react.useEffect)(function () {
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
        if (!_react["default"].isValidElement(child)) return defaultHeight;
        var height = child.props.height;

        if (Number.isInteger(height)) {
          return height;
        }

        return defaultHeight;
      });
    } // If allowAutoHeight is true, return a function instead.


    var itemSizeFn = function itemSizeFn(index) {
      if (!_react["default"].isValidElement(children[index])) return defaultHeight;
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


  var children = Array.isArray(inputChildren) ? inputChildren : _react["default"].Children.toArray(inputChildren);
  var itemSize = getItemSize(children);
  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    "data-evergreen-table-body": true,
    ref: setPaneRef,
    height: paneHeight,
    flex: "1",
    overflow: "hidden"
  }, rest), _react["default"].createElement(_reactTinyVirtualList["default"], {
    height: isIntegerHeight ? paneHeight : calculatedHeight,
    width: "100%",
    estimatedItemSize: allowAutoHeight && useAverageAutoHeightEstimation ? averageAutoHeight : estimatedItemSize || null,
    itemSize: itemSize,
    overscanCount: overscanCount,
    itemCount: _react["default"].Children.count(children),
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

      if (!_react["default"].isValidElement(child)) {
        if (typeof child === 'string') {
          return _react["default"].createElement("div", props, child);
        }

        return _react["default"].createElement("div", props, "\xA0");
      } // When allowing height="auto" for rows, and a auto height item is
      // rendered for the first time...


      if (allowAutoHeight && _react["default"].isValidElement(child) && child.props.height === 'auto' && // ... and only when the height is not already been calculated.
      !autoHeights[index]) {
        // ... render the item in a helper div, the ref is used to calculate
        // the height of its children.
        return _react["default"].createElement("div", (0, _extends2["default"])({
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


      return _react["default"].cloneElement(child, props);
    }
  }));
});
TableVirtualBody.propTypes = _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /**
   * Children needs to be an array of a single node.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),

  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight: _propTypes["default"].number,

  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an expirmental feature.
   */
  allowAutoHeight: _propTypes["default"].bool,

  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount: _propTypes["default"].number,

  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize: _propTypes["default"].number,

  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation: _propTypes["default"].bool,

  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex: _propTypes["default"].number,

  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset: _propTypes["default"].number,

  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment: _propTypes["default"].oneOf(['start', 'center', 'end', 'auto']),

  /**
   * The onScroll callback passed to react-tiny-virtual-list
   */
  onScroll: _propTypes["default"].func
});
var _default = TableVirtualBody;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVWaXJ0dWFsQm9keS5qcyJdLCJuYW1lcyI6WyJUYWJsZVZpcnR1YWxCb2R5IiwicHJvcHMiLCJpbnB1dENoaWxkcmVuIiwiY2hpbGRyZW4iLCJwYW5lSGVpZ2h0IiwiaGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImFsbG93QXV0b0hlaWdodCIsIm92ZXJzY2FuQ291bnQiLCJlc3RpbWF0ZWRJdGVtU2l6ZSIsInVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbiIsInNjcm9sbFRvSW5kZXgiLCJzY3JvbGxPZmZzZXQiLCJzY3JvbGxUb0FsaWdubWVudCIsIm9uU2Nyb2xsIiwicmVzdCIsImZvcmNlVXBkYXRlIiwiYXV0b0hlaWdodHMiLCJhdXRvSGVpZ2h0UmVmcyIsImF2ZXJhZ2VBdXRvSGVpZ2h0IiwicGFuZVJlZiIsInNldFBhbmVSZWYiLCJpc0ludGVnZXJIZWlnaHQiLCJzZXRJc0ludGVnZXJIZWlnaHQiLCJjYWxjdWxhdGVkSGVpZ2h0Iiwic2V0Q2FsY3VsYXRlZEhlaWdodCIsInVwZGF0ZU9uUmVzaXplIiwiTm9kZSIsInRlbXBDYWxjdWxhdGVkSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25SZXNpemUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb2Nlc3NBdXRvSGVpZ2h0cyIsImlzVXBkYXRlZCIsInRvdGFsIiwidG90YWxBbW91bnQiLCJmb3JFYWNoIiwicmVmIiwiaW5kZXgiLCJjaGlsZE5vZGVzIiwib25WaXJ0dWFsSGVscGVyUmVmIiwiZ2V0SXRlbVNpemUiLCJtYXAiLCJjaGlsZCIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJpdGVtU2l6ZUZuIiwiQXJyYXkiLCJpc0FycmF5IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiaXRlbVNpemUiLCJjb3VudCIsInN0eWxlIiwia2V5Iiwib3BhY2l0eSIsImNsb25lRWxlbWVudCIsInByb3BUeXBlcyIsIlBhbmUiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsIm51bWJlciIsImJvb2wiLCJvbmVPZiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsaUJBQUssU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQUEsTUFFakRDLGFBRmlELEdBY3pERCxLQWR5RCxDQUUzREUsUUFGMkQ7QUFBQSxNQUduREMsVUFIbUQsR0FjekRILEtBZHlELENBRzNESSxNQUgyRDtBQUFBLDZCQWN6REosS0FkeUQsQ0FJM0RLLGFBSjJEO0FBQUEsTUFJM0RBLGFBSjJELHFDQUkzQyxFQUoyQztBQUFBLDhCQWN6REwsS0FkeUQsQ0FLM0RNLGVBTDJEO0FBQUEsTUFLM0RBLGVBTDJELHNDQUt6QyxLQUx5QztBQUFBLDZCQWN6RE4sS0FkeUQsQ0FNM0RPLGFBTjJEO0FBQUEsTUFNM0RBLGFBTjJELHFDQU0zQyxDQU4yQztBQUFBLE1BTzNEQyxpQkFQMkQsR0FjekRSLEtBZHlELENBTzNEUSxpQkFQMkQ7QUFBQSw4QkFjekRSLEtBZHlELENBUTNEUyw4QkFSMkQ7QUFBQSxNQVEzREEsOEJBUjJELHNDQVExQixJQVIwQjtBQUFBLE1BUzNEQyxhQVQyRCxHQWN6RFYsS0FkeUQsQ0FTM0RVLGFBVDJEO0FBQUEsTUFVM0RDLFlBVjJELEdBY3pEWCxLQWR5RCxDQVUzRFcsWUFWMkQ7QUFBQSxNQVczREMsaUJBWDJELEdBY3pEWixLQWR5RCxDQVczRFksaUJBWDJEO0FBQUEsTUFZM0RDLFFBWjJELEdBY3pEYixLQWR5RCxDQVkzRGEsUUFaMkQ7QUFBQSxNQWF4REMsSUFid0QsNkNBY3pEZCxLQWR5RDtBQWdCN0QsTUFBTWUsV0FBVyxHQUFHLDRCQUFwQjtBQUNBLE1BQUlD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M0I7O0FBK0JFOzs7O0FBSUEzRCxFQUFBQSxpQkFBaUIsRUFBRXVELHNCQUFVSSxNQW5DL0I7O0FBcUNFOzs7O0FBSUExRCxFQUFBQSw4QkFBOEIsRUFBRXNELHNCQUFVSyxJQXpDNUM7O0FBMkNFOzs7QUFHQTFELEVBQUFBLGFBQWEsRUFBRXFELHNCQUFVSSxNQTlDM0I7O0FBK0NFOzs7QUFHQXhELEVBQUFBLFlBQVksRUFBRW9ELHNCQUFVSSxNQWxEMUI7O0FBbURFOzs7QUFHQXZELEVBQUFBLGlCQUFpQixFQUFFbUQsc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixLQUFwQixFQUEyQixNQUEzQixDQUFoQixDQXREckI7O0FBdURFOzs7QUFHQXhELEVBQUFBLFFBQVEsRUFBRWtELHNCQUFVTztBQTFEdEI7ZUE2RGV2RSxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVmlydHVhbExpc3QgZnJvbSAncmVhY3QtdGlueS12aXJ0dWFsLWxpc3QnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IHVzZUZvcmNlVXBkYXRlIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbmNvbnN0IFRhYmxlVmlydHVhbEJvZHkgPSBtZW1vKGZ1bmN0aW9uIFRhYmxlVmlydHVhbEJvZHkocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuOiBpbnB1dENoaWxkcmVuLFxuICAgIGhlaWdodDogcGFuZUhlaWdodCxcbiAgICBkZWZhdWx0SGVpZ2h0ID0gNDgsXG4gICAgYWxsb3dBdXRvSGVpZ2h0ID0gZmFsc2UsXG4gICAgb3ZlcnNjYW5Db3VudCA9IDUsXG4gICAgZXN0aW1hdGVkSXRlbVNpemUsXG4gICAgdXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uID0gdHJ1ZSxcbiAgICBzY3JvbGxUb0luZGV4LFxuICAgIHNjcm9sbE9mZnNldCxcbiAgICBzY3JvbGxUb0FsaWdubWVudCxcbiAgICBvblNjcm9sbCxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKVxuICBsZXQgYXV0b0hlaWdodHMgPSBbXVxuICBsZXQgYXV0b0hlaWdodFJlZnMgPSBbXVxuICBsZXQgYXZlcmFnZUF1dG9IZWlnaHQgPSBkZWZhdWx0SGVpZ2h0XG5cbiAgY29uc3QgW3BhbmVSZWYsIHNldFBhbmVSZWZdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbaXNJbnRlZ2VySGVpZ2h0LCBzZXRJc0ludGVnZXJIZWlnaHRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjYWxjdWxhdGVkSGVpZ2h0LCBzZXRDYWxjdWxhdGVkSGVpZ2h0XSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgdXBkYXRlT25SZXNpemUgPSAoKSA9PiB7XG4gICAgYXV0b0hlaWdodHMgPSBbXVxuICAgIGF1dG9IZWlnaHRSZWZzID0gW11cbiAgICBhdmVyYWdlQXV0b0hlaWdodCA9IGRlZmF1bHRIZWlnaHRcblxuICAgIC8vIFNpbXBseSByZXR1cm4gd2hlbiB3ZSBub3cgdGhlIGhlaWdodCBvZiB0aGUgcGFuZSBpcyBmaXhlZC5cbiAgICBpZiAoaXNJbnRlZ2VySGVpZ2h0KSByZXR1cm5cblxuICAgIC8vIFJldHVybiBpZiB3ZSBhcmUgaW4gYSB3ZWlyZCBlZGdlIGNhc2UgaW4gd2hpY2ggdGhlIHJlZiBpcyBubyBsb25nZXIgdmFsaWQuXG4gICAgaWYgKHBhbmVSZWYgJiYgcGFuZVJlZiBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlbXBDYWxjdWxhdGVkSGVpZ2h0ID0gcGFuZVJlZi5vZmZzZXRIZWlnaHRcblxuICAgICAgaWYgKHRlbXBDYWxjdWxhdGVkSGVpZ2h0ID4gMCkge1xuICAgICAgICAvLyBTYXZlIHRoZSBjYWxjdWxhdGVkIGhlaWdodCB3aGljaCBpcyBuZWVkZWQgZm9yIHRoZSBWaXJ0dWFsTGlzdC5cbiAgICAgICAgc2V0Q2FsY3VsYXRlZEhlaWdodCh0ZW1wQ2FsY3VsYXRlZEhlaWdodClcblxuICAgICAgICAvLyBQcmV2ZW50IHVwZGF0ZU9uUmVzaXplIGJlaW5nIGNhbGxlZCByZWN1cnNpdmVseSB3aGVuIHRoZXJlIGlzIGEgdmFsaWQgaGVpZ2h0LlxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGVuIGhlaWdodCBpcyBzdGlsbCAwIChvciBwYW5lUmVmIGlzIG5vdCB2YWxpZCkgdHJ5IHJlY3Vyc2l2ZWx5IHVudGlsIHN1Y2Nlc3MuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHVwZGF0ZU9uUmVzaXplKClcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25SZXNpemUgPSBkZWJvdW5jZSh1cGRhdGVPblJlc2l6ZSwgMjAwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmhlaWdodCAhPT0gY2FsY3VsYXRlZEhlaWdodCkge1xuICAgICAgc2V0SXNJbnRlZ2VySGVpZ2h0KE51bWJlci5pc0ludGVnZXIocHJvcHMuaGVpZ2h0KSlcbiAgICB9XG4gIH0sIFtwcm9wcy5oZWlnaHRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBhbmVSZWYgJiYgcGFuZVJlZiBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIHVwZGF0ZU9uUmVzaXplKClcbiAgICB9XG4gIH0sIFtwYW5lUmVmXSlcblxuICAvLyBNaXJyb3JzIGZ1bmN0aW9uYWxpdHkgb2YgY29tcG9uZW50RGlkTW91bnQgYW5kIGNvbXBvbmVudFdpbGxVbm1vdW50LlxuICAvLyBCeSBwYXNzaW5nIGFuIGVtcHR5IGFycmF5LCB3aWxsIG9ubHkgcnVuIG9uIGZpcnN0IHJlbmRlciwgdGhlIGZ1bmN0aW9uIHJldHVybmVkXG4gIC8vIHdpbGwgYmUgY2FsbGVkIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlT25SZXNpemUoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSwgZmFsc2UpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBwcm9jZXNzIGFsbCBpdGVtcyB0aGF0IGhhdmUgaGVpZ2h0PVwiYXV0b1wiIHNldC5cbiAgICogSXQgd2lsbCBsb29wIHRocm91Z2ggYWxsIHJlZnMgYW5kIGdldCBjYWxjdWxhdGUgdGhlIGhlaWdodC5cbiAgICovXG4gIGNvbnN0IHByb2Nlc3NBdXRvSGVpZ2h0cyA9ICgpID0+IHtcbiAgICBsZXQgaXNVcGRhdGVkID0gZmFsc2VcblxuICAgIC8vIFRoaXMgd2lsbCBkZXRlcm1pbmUgdGhlIGF2ZXJhZ2VBdXRvSGVpZ2h0LlxuICAgIGxldCB0b3RhbCA9IDBcbiAgICBsZXQgdG90YWxBbW91bnQgPSAwXG5cbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIG9mIHRoZSByZWZzIHRoYXQgaGF2ZSBoZWlnaHQ9XCJhdXRvXCIuXG4gICAgYXV0b0hlaWdodFJlZnMuZm9yRWFjaCgocmVmLCBpbmRleCkgPT4ge1xuICAgICAgLy8gSWYgdGhlIGhlaWdodCBpcyBhbHJlYWR5IGNhbGN1bGF0ZWQsIHNraXAgaXQsXG4gICAgICAvLyBidXQgY2FsY3VsYXRlIHRoZSBoZWlnaHQgZm9yIHRoZSB0b3RhbC5cbiAgICAgIGlmIChhdXRvSGVpZ2h0c1tpbmRleF0pIHtcbiAgICAgICAgdG90YWwgKz0gYXV0b0hlaWdodHNbaW5kZXhdXG4gICAgICAgIHRvdGFsQW1vdW50ICs9IDFcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmVmIGhhcyBhIGNoaWxkXG4gICAgICBpZiAoXG4gICAgICAgIHJlZiAmJlxuICAgICAgICByZWYuY2hpbGROb2RlcyAmJlxuICAgICAgICByZWYuY2hpbGROb2Rlc1swXSAmJlxuICAgICAgICBOdW1iZXIuaXNJbnRlZ2VyKHJlZi5jaGlsZE5vZGVzWzBdLm9mZnNldEhlaWdodClcbiAgICAgICkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSByZWYuY2hpbGROb2Rlc1swXS5vZmZzZXRIZWlnaHRcblxuICAgICAgICAvLyBBZGQgdG8gdGhlIHRvdGFsIHRvIGNhbGN1bGF0ZSB0aGUgYXZlcmFnZUF1dG9IZWlnaHQuXG4gICAgICAgIHRvdGFsICs9IGhlaWdodFxuICAgICAgICB0b3RhbEFtb3VudCArPSAxXG5cbiAgICAgICAgLy8gQ2FjaGUgdGhlIGhlaWdodC5cbiAgICAgICAgYXV0b0hlaWdodHNbaW5kZXhdID0gaGVpZ2h0XG5cbiAgICAgICAgLy8gU2V0IHRoZSB1cGRhdGUgZmxhZyB0byB0cnVlLlxuICAgICAgICBpc1VwZGF0ZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFNhdmUgdGhlIGF2ZXJhZ2UgaGVpZ2h0LlxuICAgIGF2ZXJhZ2VBdXRvSGVpZ2h0ID0gdG90YWwgLyB0b3RhbEFtb3VudFxuXG4gICAgLy8gVGhlcmUgYXJlIHNvbWUgbmV3IGhlaWdodHMgZGV0ZWN0ZWQgdGhhdCBoYWQgcHJldmlvdXNseSBub3QgYmVlbiBjYWxjdWxhdGVkLlxuICAgIC8vIENhbGwgZm9yY2VVcGRhdGUgdG8gbWFrZSBzdXJlIHRoZSB2aXJ0dWFsIGxpc3QgcmVuZGVycyBhZ2Fpbi5cbiAgICBpZiAoaXNVcGRhdGVkKSBmb3JjZVVwZGF0ZSgpXG4gIH1cblxuICBjb25zdCBvblZpcnR1YWxIZWxwZXJSZWYgPSAoaW5kZXgsIHJlZikgPT4ge1xuICAgIGF1dG9IZWlnaHRSZWZzW2luZGV4XSA9IHJlZlxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHByb2Nlc3NBdXRvSGVpZ2h0cygpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGdldEl0ZW1TaXplID0gY2hpbGRyZW4gPT4ge1xuICAgIC8vIFByZWZlciB0byByZXR1cm4gYSBhcnJheSBvZiBhbGwgaGVpZ2h0cy5cbiAgICBpZiAoIWFsbG93QXV0b0hlaWdodCkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm4gZGVmYXVsdEhlaWdodFxuICAgICAgICBjb25zdCB7IGhlaWdodCB9ID0gY2hpbGQucHJvcHNcblxuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihoZWlnaHQpKSB7XG4gICAgICAgICAgcmV0dXJuIGhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRIZWlnaHRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gSWYgYWxsb3dBdXRvSGVpZ2h0IGlzIHRydWUsIHJldHVybiBhIGZ1bmN0aW9uIGluc3RlYWQuXG4gICAgY29uc3QgaXRlbVNpemVGbiA9IGluZGV4ID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW5baW5kZXhdKSkgcmV0dXJuIGRlZmF1bHRIZWlnaHRcbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBjaGlsZHJlbltpbmRleF0ucHJvcHNcblxuICAgICAgLy8gV2hlbiB0aGUgaGVpZ2h0IGlzIG51bWJlciBzaW1wbHksIHNpbXBseSByZXR1cm4gaXQuXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihoZWlnaHQpKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHRcbiAgICAgIH1cblxuICAgICAgLy8gV2hlbiBhbGxvd0F1dG9IZWlnaHQgaXMgc2V0IGFuZCAgdGhlIGhlaWdodCBpcyBzZXQgdG8gXCJhdXRvXCIuLi5cbiAgICAgIGlmIChhbGxvd0F1dG9IZWlnaHQgJiYgY2hpbGRyZW5baW5kZXhdLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIC8vIC4uLiBhbmQgdGhlIGhlaWdodCBpcyBjYWxjdWxhdGVkLCByZXR1cm4gdGhlIGNhbGN1bGF0ZWQgaGVpZ2h0LlxuICAgICAgICBpZiAoYXV0b0hlaWdodHNbaW5kZXhdKSByZXR1cm4gYXV0b0hlaWdodHNbaW5kZXhdXG5cbiAgICAgICAgLy8gLi4uIGlmIHRoZSBoZWlnaHQgaXMgbm90IHlldCBjYWxjdWxhdGVkLCByZXR1cm4gdGhlIGF2ZXJnZVxuICAgICAgICBpZiAodXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uKSByZXR1cm4gYXZlcmFnZUF1dG9IZWlnaHRcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHRoZSBkZWZhdWx0IGhlaWdodC5cbiAgICAgIHJldHVybiBkZWZhdWx0SGVpZ2h0XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1TaXplRm5cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGFsd2F5cyBuZWVkcyB0byBiZSBhbiBhcnJheS5cbiAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGlucHV0Q2hpbGRyZW4pXG4gICAgPyBpbnB1dENoaWxkcmVuXG4gICAgOiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGlucHV0Q2hpbGRyZW4pXG5cbiAgY29uc3QgaXRlbVNpemUgPSBnZXRJdGVtU2l6ZShjaGlsZHJlbilcblxuICByZXR1cm4gKFxuICAgIDxQYW5lXG4gICAgICBkYXRhLWV2ZXJncmVlbi10YWJsZS1ib2R5XG4gICAgICByZWY9e3NldFBhbmVSZWZ9XG4gICAgICBoZWlnaHQ9e3BhbmVIZWlnaHR9XG4gICAgICBmbGV4PVwiMVwiXG4gICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8VmlydHVhbExpc3RcbiAgICAgICAgaGVpZ2h0PXtpc0ludGVnZXJIZWlnaHQgPyBwYW5lSGVpZ2h0IDogY2FsY3VsYXRlZEhlaWdodH1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgZXN0aW1hdGVkSXRlbVNpemU9e1xuICAgICAgICAgIGFsbG93QXV0b0hlaWdodCAmJiB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb25cbiAgICAgICAgICAgID8gYXZlcmFnZUF1dG9IZWlnaHRcbiAgICAgICAgICAgIDogZXN0aW1hdGVkSXRlbVNpemUgfHwgbnVsbFxuICAgICAgICB9XG4gICAgICAgIGl0ZW1TaXplPXtpdGVtU2l6ZX1cbiAgICAgICAgb3ZlcnNjYW5Db3VudD17b3ZlcnNjYW5Db3VudH1cbiAgICAgICAgaXRlbUNvdW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbil9XG4gICAgICAgIHNjcm9sbFRvSW5kZXg9e3Njcm9sbFRvSW5kZXh9XG4gICAgICAgIHNjcm9sbE9mZnNldD17c2Nyb2xsT2Zmc2V0fVxuICAgICAgICBzY3JvbGxUb0FsaWdubWVudD17c2Nyb2xsVG9BbGlnbm1lbnR9XG4gICAgICAgIG9uU2Nyb2xsPXtvblNjcm9sbH1cbiAgICAgICAgcmVuZGVySXRlbT17KHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuICAgICAgICAgIGNvbnN0IGtleSA9IGNoaWxkLmtleSB8fCBpbmRleFxuICAgICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgc3R5bGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiBzb21lIGNoaWxkcmVuIGFyZSBzdHJpbmdzIGJ5IGFjY2lkZW50LCBzdXBwb3J0IHRoaXMgZ3JhY2VmdWxseS5cbiAgICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT57Y2hpbGR9PC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBhbGxvd2luZyBoZWlnaHQ9XCJhdXRvXCIgZm9yIHJvd3MsIGFuZCBhIGF1dG8gaGVpZ2h0IGl0ZW0gaXNcbiAgICAgICAgICAvLyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWUuLi5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBhbGxvd0F1dG9IZWlnaHQgJiZcbiAgICAgICAgICAgIFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSAmJlxuICAgICAgICAgICAgY2hpbGQucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgJiZcbiAgICAgICAgICAgIC8vIC4uLiBhbmQgb25seSB3aGVuIHRoZSBoZWlnaHQgaXMgbm90IGFscmVhZHkgYmVlbiBjYWxjdWxhdGVkLlxuICAgICAgICAgICAgIWF1dG9IZWlnaHRzW2luZGV4XVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gLi4uIHJlbmRlciB0aGUgaXRlbSBpbiBhIGhlbHBlciBkaXYsIHRoZSByZWYgaXMgdXNlZCB0byBjYWxjdWxhdGVcbiAgICAgICAgICAgIC8vIHRoZSBoZWlnaHQgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IG9uVmlydHVhbEhlbHBlclJlZihpbmRleCwgcmVmKX1cbiAgICAgICAgICAgICAgICBkYXRhLXZpcnR1YWwtaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgIC4uLnByb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBhbGxvd0F1dG9IZWlnaHQgaXMgZmFsc2UsIG9yIHdoZW4gdGhlIGhlaWdodCBpcyBrbm93bi5cbiAgICAgICAgICAvLyBTaW1wbHkgcmVuZGVyIHRoZSBpdGVtLlxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L1BhbmU+XG4gIClcbn0pXG5cblRhYmxlVmlydHVhbEJvZHkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENoaWxkcmVuIG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGhlaWdodCBvZiBlYWNoIHJvdy5cbiAgICogNDggaXMgdGhlIGRlZmF1bHQgaGVpZ2h0IG9mIGEgVGFibGVSb3cuXG4gICAqL1xuICBkZWZhdWx0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHN1cHBvcnQgYGhlaWdodD1cImF1dG9cImAgb24gY2hpbGRyZW4gYmVpbmcgcmVuZGVyZWQuXG4gICAqIFRoaXMgaXMgc29tZXdoYXQgb2YgYW4gZXhwaXJtZW50YWwgZmVhdHVyZS5cbiAgICovXG4gIGFsbG93QXV0b0hlaWdodDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBvdmVyc2NhbkNvdW50IHByb3BlcnR5IHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdC5cbiAgICovXG4gIG92ZXJzY2FuQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFdoZW4gcGFzc2VkLCB0aGlzIGlzIHVzZWQgYXMgdGhlIGBlc3RpbWF0ZWRJdGVtU2l6ZWAgaW4gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3QuXG4gICAqIE9ubHkgd2hlbiBgYWxsb3dBdXRvSGVpZ2h0YCBhbmRgdXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uYCBhcmUgZmFsc2UuXG4gICAqL1xuICBlc3RpbWF0ZWRJdGVtU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogV2hlbiBhbGxvd0F1dG9IZWlnaHQgaXMgdHJ1ZSBhbmQgdGhpcyBwcm9wIGlzIHRydWUsIHRoZSBlc3RpbWF0ZWQgaGVpZ2h0XG4gICAqIHdpbGwgYmUgY29tcHV0ZWQgYmFzZWQgb24gdGhlIGF2ZXJhZ2UgaGVpZ2h0IG9mIGF1dG8gaGVpZ2h0IHJvd3MuXG4gICAqL1xuICB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2Nyb2xsVG9JbmRleCBwcm9wZXJ0eSBwYXNzZWQgdG8gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3RcbiAgICovXG4gIHNjcm9sbFRvSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBUaGUgc2Nyb2xsT2Zmc2V0IHByb3BlcnR5IHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgc2Nyb2xsT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIHNjcm9sbFRvQWxpZ25tZW50IHByb3BlcnR5IHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgc2Nyb2xsVG9BbGlnbm1lbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YXJ0JywgJ2NlbnRlcicsICdlbmQnLCAnYXV0byddKSxcbiAgLyoqXG4gICAqIFRoZSBvblNjcm9sbCBjYWxsYmFjayBwYXNzZWQgdG8gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3RcbiAgICovXG4gIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVZpcnR1YWxCb2R5XG4iXX0=