"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var noop = function noop() {};

var ScrollbarSize = (0, _react.memo)(function ScrollbarSize(_ref) {
  var _ref$handleScrollbarS = _ref.handleScrollbarSize,
      handleScrollbarSize = _ref$handleScrollbarS === void 0 ? noop : _ref$handleScrollbarS;
  var innerRef = (0, _react.useRef)();
  var outerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)({
    innerWidth: null,
    outerWidth: null
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      widths = _useState2[0],
      setWidths = _useState2[1];

  (0, _react.useEffect)(function () {
    var newWidths = {
      innerWidth: null,
      outerWidth: null
    };

    if (innerRef.current) {
      newWidths.innerWidth = innerRef.current.getBoundingClientRect().width;
    }

    if (outerRef.current) {
      newWidths.outerWidth = outerRef.current.getBoundingClientRect().width;
    }

    setWidths(newWidths);
  }, []);
  (0, _react.useEffect)(function () {
    if (widths.innerWidth && widths.outerWidth) {
      handleScrollbarSize(widths.outerWidth - widths.innerWidth);
    }
  });
  return _react["default"].createElement("div", {
    ref: outerRef,
    "aria-hidden": true,
    style: {
      position: 'fixed',
      top: -500,
      left: -500,
      width: 100,
      overflowY: 'scroll'
    }
  }, _react["default"].createElement("div", {
    ref: innerRef
  }));
});
ScrollbarSize.propTypes = {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: _propTypes["default"].func
};
var _default = ScrollbarSize;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2Nyb2xsYmFyU2l6ZS5qcyJdLCJuYW1lcyI6WyJub29wIiwiU2Nyb2xsYmFyU2l6ZSIsImhhbmRsZVNjcm9sbGJhclNpemUiLCJpbm5lclJlZiIsIm91dGVyUmVmIiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJ3aWR0aHMiLCJzZXRXaWR0aHMiLCJuZXdXaWR0aHMiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJvdmVyZmxvd1kiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxpQkFBSyxTQUFTQSxhQUFULE9BRXhCO0FBQUEsbUNBRERDLG1CQUNDO0FBQUEsTUFEREEsbUJBQ0Msc0NBRHFCRixJQUNyQjtBQUNELE1BQU1HLFFBQVEsR0FBRyxvQkFBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsb0JBQWpCOztBQUZDLGtCQUcyQixxQkFBUztBQUFFQyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsVUFBVSxFQUFFO0FBQWhDLEdBQVQsQ0FIM0I7QUFBQTtBQUFBLE1BR01DLE1BSE47QUFBQSxNQUdjQyxTQUhkOztBQUtELHdCQUFVLFlBQU07QUFDZCxRQUFNQyxTQUFTLEdBQUc7QUFBRUosTUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JDLE1BQUFBLFVBQVUsRUFBRTtBQUFoQyxLQUFsQjs7QUFFQSxRQUFJSCxRQUFRLENBQUNPLE9BQWIsRUFBc0I7QUFDcEJELE1BQUFBLFNBQVMsQ0FBQ0osVUFBVixHQUF1QkYsUUFBUSxDQUFDTyxPQUFULENBQWlCQyxxQkFBakIsR0FBeUNDLEtBQWhFO0FBQ0Q7O0FBRUQsUUFBSVIsUUFBUSxDQUFDTSxPQUFiLEVBQXNCO0FBQ3BCRCxNQUFBQSxTQUFTLENBQUNILFVBQVYsR0FBdUJGLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQkMscUJBQWpCLEdBQXlDQyxLQUFoRTtBQUNEOztBQUVESixJQUFBQSxTQUFTLENBQUNDLFNBQUQsQ0FBVDtBQUNELEdBWkQsRUFZRyxFQVpIO0FBY0Esd0JBQVUsWUFBTTtBQUNkLFFBQUlGLE1BQU0sQ0FBQ0YsVUFBUCxJQUFxQkUsTUFBTSxDQUFDRCxVQUFoQyxFQUE0QztBQUMxQ0osTUFBQUEsbUJBQW1CLENBQUNLLE1BQU0sQ0FBQ0QsVUFBUCxHQUFvQkMsTUFBTSxDQUFDRixVQUE1QixDQUFuQjtBQUNEO0FBQ0YsR0FKRDtBQU1BLFNBQ0U7QUFDRSxJQUFBLEdBQUcsRUFBRUQsUUFEUDtBQUVFLHVCQUZGO0FBR0UsSUFBQSxLQUFLLEVBQUU7QUFDTFMsTUFBQUEsUUFBUSxFQUFFLE9BREw7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLENBQUMsR0FGRDtBQUdMQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxHQUhGO0FBSUxILE1BQUFBLEtBQUssRUFBRSxHQUpGO0FBS0xJLE1BQUFBLFNBQVMsRUFBRTtBQUxOO0FBSFQsS0FXRTtBQUFLLElBQUEsR0FBRyxFQUFFYjtBQUFWLElBWEYsQ0FERjtBQWVELENBMUNxQixDQUF0QjtBQTRDQUYsYUFBYSxDQUFDZ0IsU0FBZCxHQUEwQjtBQUN4Qjs7O0FBR0FmLEVBQUFBLG1CQUFtQixFQUFFZ0Isc0JBQVVDO0FBSlAsQ0FBMUI7ZUFPZWxCLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBTY3JvbGxiYXJTaXplID0gbWVtbyhmdW5jdGlvbiBTY3JvbGxiYXJTaXplKHtcbiAgaGFuZGxlU2Nyb2xsYmFyU2l6ZSA9IG5vb3Bcbn0pIHtcbiAgY29uc3QgaW5uZXJSZWYgPSB1c2VSZWYoKVxuICBjb25zdCBvdXRlclJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IFt3aWR0aHMsIHNldFdpZHRoc10gPSB1c2VTdGF0ZSh7IGlubmVyV2lkdGg6IG51bGwsIG91dGVyV2lkdGg6IG51bGwgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld1dpZHRocyA9IHsgaW5uZXJXaWR0aDogbnVsbCwgb3V0ZXJXaWR0aDogbnVsbCB9XG5cbiAgICBpZiAoaW5uZXJSZWYuY3VycmVudCkge1xuICAgICAgbmV3V2lkdGhzLmlubmVyV2lkdGggPSBpbm5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgfVxuXG4gICAgaWYgKG91dGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIG5ld1dpZHRocy5vdXRlcldpZHRoID0gb3V0ZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgIH1cblxuICAgIHNldFdpZHRocyhuZXdXaWR0aHMpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpZHRocy5pbm5lcldpZHRoICYmIHdpZHRocy5vdXRlcldpZHRoKSB7XG4gICAgICBoYW5kbGVTY3JvbGxiYXJTaXplKHdpZHRocy5vdXRlcldpZHRoIC0gd2lkdGhzLmlubmVyV2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtvdXRlclJlZn1cbiAgICAgIGFyaWEtaGlkZGVuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wOiAtNTAwLFxuICAgICAgICBsZWZ0OiAtNTAwLFxuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgcmVmPXtpbm5lclJlZn0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuU2Nyb2xsYmFyU2l6ZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzaXplIG9mIHRoZSBzY3JvbGxiYXIgYnkgY3JlYXRpbmcgYSBoaWRkZW4gZml4ZWQgZGl2LlxuICAgKi9cbiAgaGFuZGxlU2Nyb2xsYmFyU2l6ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsYmFyU2l6ZVxuIl19