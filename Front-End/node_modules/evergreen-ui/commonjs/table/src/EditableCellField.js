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

var _textarea = require("../../textarea");

var EditableCellField = (0, _react.memo)(function EditableCellField(props) {
  var getTargetRef = props.getTargetRef;

  var getTableBodyRef = function getTableBodyRef() {
    var ref = getTargetRef();
    if (!ref) return;

    while (ref) {
      var isTableBody = ref.hasAttribute('data-evergreen-table-body');

      if (isTableBody) {
        return ref;
      }

      if (ref.parentElement) {
        ref = ref.parentElement;
      } else {
        return null;
      }
    }

    return ref;
  };

  var latestAnimationFrame = (0, _react.useRef)();
  var textareaRef = (0, _react.useRef)();
  var tableBodyRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)({
    top: 0,
    left: 0,
    height: 0,
    width: 0
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      _useState2$ = _useState2[0],
      height = _useState2$.height,
      width = _useState2$.width,
      top = _useState2$.top,
      left = _useState2$.left,
      setDimensions = _useState2[1]; // Mirrors functionality of componentDidMount and componentWillUnmount.
  // Focus on mount


  (0, _react.useEffect)(function () {
    update();
    var requestId = requestAnimationFrame(function () {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    });
    return function () {
      cancelAnimationFrame(requestId);

      if (latestAnimationFrame.current) {
        cancelAnimationFrame(latestAnimationFrame.current);
      }

      props.onCancel();
    };
  }, []);

  var update = function update() {
    var getTargetRef = props.getTargetRef;
    var targetRef = getTargetRef();
    if (!targetRef) return;
    tableBodyRef.current = getTableBodyRef();

    var _targetRef$getBoundin = targetRef.getBoundingClientRect(),
        targetLeft = _targetRef$getBoundin.left,
        targetTop = _targetRef$getBoundin.top,
        targetHeight = _targetRef$getBoundin.height,
        targetWidth = _targetRef$getBoundin.width;

    var calculatedTop;

    if (tableBodyRef.current) {
      var bounds = tableBodyRef.current.getBoundingClientRect();
      calculatedTop = Math.min(Math.max(targetTop, bounds.top), bounds.bottom - targetHeight);
    } else {
      calculatedTop = targetTop;
    }

    setDimensions({
      top: calculatedTop,
      left: targetLeft,
      height: targetHeight,
      width: targetWidth
    });
    latestAnimationFrame.current = requestAnimationFrame(function () {
      return update();
    });
  };

  var handleFocus = function handleFocus(e) {
    e.target.selectionStart = e.target.value.length;
  };

  var handleBlur = function handleBlur() {
    if (textareaRef.current) props.onChangeComplete(textareaRef.current.value);
  };

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.key) {
      case 'Escape':
        props.onCancel();
        if (textareaRef.current) textareaRef.current.blur();
        break;

      case 'Enter':
        if (textareaRef.current) textareaRef.current.blur();
        e.preventDefault();
        break;

      case 'Tab':
        if (textareaRef.current) textareaRef.current.blur();
        break;

      default:
        break;
    }
  };

  var size = props.size,
      value = props.value,
      _props$minWidth = props.minWidth,
      minWidth = _props$minWidth === void 0 ? 80 : _props$minWidth,
      _props$minHeight = props.minHeight,
      minHeight = _props$minHeight === void 0 ? 40 : _props$minHeight,
      zIndex = props.zIndex;
  return _react["default"].createElement(_textarea.Textarea, {
    ref: textareaRef,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: handleFocus,
    appearance: "editable-cell",
    size: size,
    style: {
      left: left,
      top: top,
      height: height,
      minHeight: Math.max(height, minHeight),
      width: width,
      minWidth: Math.max(width, minWidth),
      zIndex: zIndex
    },
    height: null,
    width: null,
    minHeight: null,
    position: "fixed",
    defaultValue: value
  });
});
EditableCellField.propTypes = {
  /**
   * Used as the defaultValue of the textarea.
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * The z-index placed on the element.
   */
  zIndex: _propTypes["default"].number.isRequired,

  /**
   * Function to get the target ref of the parent.
   * Used to mirror the position.
   */
  getTargetRef: _propTypes["default"].func.isRequired,

  /**
   * Min width of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minWidth: _propTypes["default"].number,

  /**
   * Min height of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minHeight: _propTypes["default"].number,

  /**
   * Called when the textarea is blurred, pass the value back to the cell.
   */
  onChangeComplete: _propTypes["default"].func.isRequired,

  /**
   * Called when Escape is hit or componentWillUnmount.
   */
  onCancel: _propTypes["default"].func.isRequired,

  /**
   * Text size of the textarea.
   */
  size: _propTypes["default"].number
};
var _default = EditableCellField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvRWRpdGFibGVDZWxsRmllbGQuanMiXSwibmFtZXMiOlsiRWRpdGFibGVDZWxsRmllbGQiLCJwcm9wcyIsImdldFRhcmdldFJlZiIsImdldFRhYmxlQm9keVJlZiIsInJlZiIsImlzVGFibGVCb2R5IiwiaGFzQXR0cmlidXRlIiwicGFyZW50RWxlbWVudCIsImxhdGVzdEFuaW1hdGlvbkZyYW1lIiwidGV4dGFyZWFSZWYiLCJ0YWJsZUJvZHlSZWYiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzZXREaW1lbnNpb25zIiwidXBkYXRlIiwicmVxdWVzdElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudCIsImZvY3VzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvbkNhbmNlbCIsInRhcmdldFJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhcmdldExlZnQiLCJ0YXJnZXRUb3AiLCJ0YXJnZXRIZWlnaHQiLCJ0YXJnZXRXaWR0aCIsImNhbGN1bGF0ZWRUb3AiLCJib3VuZHMiLCJNYXRoIiwibWluIiwibWF4IiwiYm90dG9tIiwiaGFuZGxlRm9jdXMiLCJlIiwidGFyZ2V0Iiwic2VsZWN0aW9uU3RhcnQiLCJ2YWx1ZSIsImxlbmd0aCIsImhhbmRsZUJsdXIiLCJvbkNoYW5nZUNvbXBsZXRlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsInNpemUiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInpJbmRleCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsaUJBQUssU0FBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQUEsTUFDdkRDLFlBRHVELEdBQ3RDRCxL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SUFoQlY7QUFpQkUsSUFBQSxLQUFLLEVBQUUsSUFqQlQ7QUFrQkUsSUFBQSxTQUFTLEVBQUUsSUFsQmI7QUFtQkUsSUFBQSxRQUFRLEVBQUMsT0FuQlg7QUFvQkUsSUFBQSxZQUFZLEVBQUVYO0FBcEJoQixJQURGO0FBd0JELENBN0l5QixDQUExQjtBQStJQXZDLGlCQUFpQixDQUFDbUQsU0FBbEIsR0FBOEI7QUFDNUI7OztBQUdBWixFQUFBQSxLQUFLLEVBQUVhLHNCQUFVQyxNQUFWLENBQWlCQyxVQUpJOztBQU01Qjs7O0FBR0FKLEVBQUFBLE1BQU0sRUFBRUUsc0JBQVVHLE1BQVYsQ0FBaUJELFVBVEc7O0FBVzVCOzs7O0FBSUFwRCxFQUFBQSxZQUFZLEVBQUVrRCxzQkFBVUksSUFBVixDQUFlRixVQWZEOztBQWlCNUI7Ozs7QUFJQU4sRUFBQUEsUUFBUSxFQUFFSSxzQkFBVUcsTUFyQlE7O0FBdUI1Qjs7OztBQUlBTixFQUFBQSxTQUFTLEVBQUVHLHNCQUFVRyxNQTNCTzs7QUE2QjVCOzs7QUFHQWIsRUFBQUEsZ0JBQWdCLEVBQUVVLHNCQUFVSSxJQUFWLENBQWVGLFVBaENMOztBQWtDNUI7OztBQUdBaEMsRUFBQUEsUUFBUSxFQUFFOEIsc0JBQVVJLElBQVYsQ0FBZUYsVUFyQ0c7O0FBdUM1Qjs7O0FBR0FQLEVBQUFBLElBQUksRUFBRUssc0JBQVVHO0FBMUNZLENBQTlCO2VBNkNldkQsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gJy4uLy4uL3RleHRhcmVhJ1xuXG5jb25zdCBFZGl0YWJsZUNlbGxGaWVsZCA9IG1lbW8oZnVuY3Rpb24gRWRpdGFibGVDZWxsRmllbGQocHJvcHMpIHtcbiAgY29uc3QgeyBnZXRUYXJnZXRSZWYgfSA9IHByb3BzXG5cbiAgY29uc3QgZ2V0VGFibGVCb2R5UmVmID0gKCkgPT4ge1xuICAgIGxldCByZWYgPSBnZXRUYXJnZXRSZWYoKVxuXG4gICAgaWYgKCFyZWYpIHJldHVyblxuXG4gICAgd2hpbGUgKHJlZikge1xuICAgICAgY29uc3QgaXNUYWJsZUJvZHkgPSByZWYuaGFzQXR0cmlidXRlKCdkYXRhLWV2ZXJncmVlbi10YWJsZS1ib2R5JylcbiAgICAgIGlmIChpc1RhYmxlQm9keSkge1xuICAgICAgICByZXR1cm4gcmVmXG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZWYgPSByZWYucGFyZW50RWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICBjb25zdCBsYXRlc3RBbmltYXRpb25GcmFtZSA9IHVzZVJlZigpXG4gIGNvbnN0IHRleHRhcmVhUmVmID0gdXNlUmVmKClcbiAgY29uc3QgdGFibGVCb2R5UmVmID0gdXNlUmVmKClcbiAgY29uc3QgW3sgaGVpZ2h0LCB3aWR0aCwgdG9wLCBsZWZ0IH0sIHNldERpbWVuc2lvbnNdID0gdXNlU3RhdGUoe1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9KVxuXG4gIC8vIE1pcnJvcnMgZnVuY3Rpb25hbGl0eSBvZiBjb21wb25lbnREaWRNb3VudCBhbmQgY29tcG9uZW50V2lsbFVubW91bnQuXG4gIC8vIEZvY3VzIG9uIG1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKClcblxuICAgIGNvbnN0IHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAodGV4dGFyZWFSZWYuY3VycmVudCkge1xuICAgICAgICB0ZXh0YXJlYVJlZi5jdXJyZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZClcblxuICAgICAgaWYgKGxhdGVzdEFuaW1hdGlvbkZyYW1lLmN1cnJlbnQpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUobGF0ZXN0QW5pbWF0aW9uRnJhbWUuY3VycmVudClcbiAgICAgIH1cblxuICAgICAgcHJvcHMub25DYW5jZWwoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0VGFyZ2V0UmVmIH0gPSBwcm9wc1xuICAgIGNvbnN0IHRhcmdldFJlZiA9IGdldFRhcmdldFJlZigpXG4gICAgaWYgKCF0YXJnZXRSZWYpIHJldHVyblxuICAgIHRhYmxlQm9keVJlZi5jdXJyZW50ID0gZ2V0VGFibGVCb2R5UmVmKClcblxuICAgIGNvbnN0IHtcbiAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICB0b3A6IHRhcmdldFRvcCxcbiAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IHRhcmdldFdpZHRoXG4gICAgfSA9IHRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgbGV0IGNhbGN1bGF0ZWRUb3BcbiAgICBpZiAodGFibGVCb2R5UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IHRhYmxlQm9keVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjYWxjdWxhdGVkVG9wID0gTWF0aC5taW4oXG4gICAgICAgIE1hdGgubWF4KHRhcmdldFRvcCwgYm91bmRzLnRvcCksXG4gICAgICAgIGJvdW5kcy5ib3R0b20gLSB0YXJnZXRIZWlnaHRcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsY3VsYXRlZFRvcCA9IHRhcmdldFRvcFxuICAgIH1cblxuICAgIHNldERpbWVuc2lvbnMoe1xuICAgICAgdG9wOiBjYWxjdWxhdGVkVG9wLFxuICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IHRhcmdldFdpZHRoXG4gICAgfSlcbiAgICBsYXRlc3RBbmltYXRpb25GcmFtZS5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHVwZGF0ZSgpKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRm9jdXMgPSBlID0+IHtcbiAgICBlLnRhcmdldC5zZWxlY3Rpb25TdGFydCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aFxuICB9XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBpZiAodGV4dGFyZWFSZWYuY3VycmVudCkgcHJvcHMub25DaGFuZ2VDb21wbGV0ZSh0ZXh0YXJlYVJlZi5jdXJyZW50LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHByb3BzLm9uQ2FuY2VsKClcbiAgICAgICAgaWYgKHRleHRhcmVhUmVmLmN1cnJlbnQpIHRleHRhcmVhUmVmLmN1cnJlbnQuYmx1cigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmICh0ZXh0YXJlYVJlZi5jdXJyZW50KSB0ZXh0YXJlYVJlZi5jdXJyZW50LmJsdXIoKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIGlmICh0ZXh0YXJlYVJlZi5jdXJyZW50KSB0ZXh0YXJlYVJlZi5jdXJyZW50LmJsdXIoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IHNpemUsIHZhbHVlLCBtaW5XaWR0aCA9IDgwLCBtaW5IZWlnaHQgPSA0MCwgekluZGV4IH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFRleHRhcmVhXG4gICAgICByZWY9e3RleHRhcmVhUmVmfVxuICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICBhcHBlYXJhbmNlPVwiZWRpdGFibGUtY2VsbFwiXG4gICAgICBzaXplPXtzaXplfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbGVmdCxcbiAgICAgICAgdG9wLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIG1pbkhlaWdodDogTWF0aC5tYXgoaGVpZ2h0LCBtaW5IZWlnaHQpLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgbWluV2lkdGg6IE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksXG4gICAgICAgIHpJbmRleFxuICAgICAgfX1cbiAgICAgIGhlaWdodD17bnVsbH1cbiAgICAgIHdpZHRoPXtudWxsfVxuICAgICAgbWluSGVpZ2h0PXtudWxsfVxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxuICAgIC8+XG4gIClcbn0pXG5cbkVkaXRhYmxlQ2VsbEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFVzZWQgYXMgdGhlIGRlZmF1bHRWYWx1ZSBvZiB0aGUgdGV4dGFyZWEuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgei1pbmRleCBwbGFjZWQgb24gdGhlIGVsZW1lbnQuXG4gICAqL1xuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZ2V0IHRoZSB0YXJnZXQgcmVmIG9mIHRoZSBwYXJlbnQuXG4gICAqIFVzZWQgdG8gbWlycm9yIHRoZSBwb3NpdGlvbi5cbiAgICovXG4gIGdldFRhcmdldFJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogTWluIHdpZHRoIG9mIHRoZSB0ZXh0YXJlYS5cbiAgICogVGhlIHRleHRhcmVhIGNhbiBuZXZlciBiZSBzbWFsbGVyIHRoYW4gdGhlIGNlbGwuXG4gICAqL1xuICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTWluIGhlaWdodCBvZiB0aGUgdGV4dGFyZWEuXG4gICAqIFRoZSB0ZXh0YXJlYSBjYW4gbmV2ZXIgYmUgc21hbGxlciB0aGFuIHRoZSBjZWxsLlxuICAgKi9cbiAgbWluSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdGV4dGFyZWEgaXMgYmx1cnJlZCwgcGFzcyB0aGUgdmFsdWUgYmFjayB0byB0aGUgY2VsbC5cbiAgICovXG4gIG9uQ2hhbmdlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIEVzY2FwZSBpcyBoaXQgb3IgY29tcG9uZW50V2lsbFVubW91bnQuXG4gICAqL1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGV4dCBzaXplIG9mIHRoZSB0ZXh0YXJlYS5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGVDZWxsRmllbGRcbiJdfQ==