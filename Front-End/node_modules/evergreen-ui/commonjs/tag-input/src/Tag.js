"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _badges = require("../../badges");

var _icons = require("../../icons");

var _scales = require("../../scales");

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
var Tag = (0, _react.memo)((0, _react.forwardRef)(function Tag(props, ref) {
  var children = props.children,
      onRemove = props.onRemove,
      isRemovable = props.isRemovable,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["children", "onRemove", "isRemovable"]);
  var badgeStyles = {
    alignItems: 'center',
    display: 'inline-flex',
    fontWeight: 400,
    textTransform: 'none'
  };

  if (isRemovable) {
    badgeStyles.paddingRight = (0, _scales.minorScale)(1);
  }

  return _react["default"].createElement(_badges.Badge, (0, _extends2["default"])({
    ref: ref,
    isInteractive: true
  }, badgeStyles, restProps), children, isRemovable && _react["default"].createElement(_icons.CrossIcon, {
    marginLeft: (0, _scales.minorScale)(1),
    onClick: onRemove,
    size: (0, _scales.minorScale)(3)
  }));
}));
Tag.propTypes = {
  /** The tag content */
  children: _propTypes["default"].node,

  /**
   * Callback invoked when the removal icon is clicked.
   * (event) => void
   */
  onRemove: _propTypes["default"].func,

  /** Whether or not the tag can be removed. */
  isRemovable: _propTypes["default"].bool
};
var _default = Tag;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWctaW5wdXQvc3JjL1RhZy5qcyJdLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwib25SZW1vdmUiLCJpc1JlbW92YWJsZSIsInJlc3RQcm9wcyIsImJhZGdlU3R5bGVzIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsInBhZGRpbmdSaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBUEE7OztBQVNBLElBQU1BLEdBQUcsR0FBRyxpQkFDVix1QkFBVyxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0JDLEdBQXBCLEVBQXlCO0FBQUEsTUFDMUJDLFFBRDBCLEdBQ3dCRixLQUR4QixDQUMxQkUsUUFEMEI7QUFBQSxNQUNoQkMsUUFEZ0IsR0FDd0JILEtBRHhCLENBQ2hCRyxRQURnQjtBQUFBLE1BQ05DLFdBRE0sR0FDd0JKLEtBRHhCLENBQ05JLFdBRE07QUFBQSxNQUNVQyxTQURWLDZDQUN3QkwsS0FEeEI7QUFHbEMsTUFBTU0sV0FBVyxHQUFHO0FBQ2xCQyxJQUFBQSxVQUFVLEVBQUUsUUFETTtBQUVsQkMsSUFBQUEsT0FBTyxFQUFFLGFBRlM7QUFHbEJDLElBQUFBLFVBQVUsRUFBRSxHQUhNO0FBSWxCQyxJQUFBQSxhQUFhLEVBQUU7QUFKRyxHQUFwQjs7QUFPQSxNQUFJTixXQUFKLEVBQWlCO0FBQ2ZFLElBQUFBLFdBQVcsQ0FBQ0ssWUFBWixHQUEyQix3QkFBVyxDQUFYLENBQTNCO0FBQ0Q7O0FBRUQsU0FDRSxnQ0FBQyxhQUFEO0FBQU8sSUFBQSxHQUFHLEVBQUVWLEdBQVo7QUFBaUIsSUFBQSxhQUFhO0FBQTlCLEtBQW1DSyxXQUFuQyxFQUFvREQsU0FBcEQsR0FDR0gsUUFESCxFQUVHRSxXQUFXLElBQ1YsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRSx3QkFBVyxDQUFYLENBRGQ7QUFFRSxJQUFBLE9BQU8sRUFBRUQsUUFGWDtBQUdFLElBQUEsSUFBSSxFQUFFLHdCQUFXLENBQVg7QUFIUixJQUhKLENBREY7QUFZRCxDQTFCRCxDQURVLENBQVo7QUE4QkFKLEdBQUcsQ0FBQ2EsU0FBSixHQUFnQjtBQUNkO0FBQ0FWLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVDLElBRk47O0FBSWQ7Ozs7QUFJQVgsRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUUsSUFSTjs7QUFTZDtBQUNBWCxFQUFBQSxXQUFXLEVBQUVTLHNCQUFVRztBQVZULENBQWhCO2VBYWVqQixHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAb3ZlcnZpZXcgVGFnSW5wdXQgYWNjZXB0cyBtdWx0aXBsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgaW5kaXZpZHVhbGx5IHJlbW92ZWRcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnLi4vLi4vYmFkZ2VzJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBtaW5vclNjYWxlIH0gZnJvbSAnLi4vLi4vc2NhbGVzJ1xuXG5jb25zdCBUYWcgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRhZyhwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb25SZW1vdmUsIGlzUmVtb3ZhYmxlLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzXG5cbiAgICBjb25zdCBiYWRnZVN0eWxlcyA9IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJ1xuICAgIH1cblxuICAgIGlmIChpc1JlbW92YWJsZSkge1xuICAgICAgYmFkZ2VTdHlsZXMucGFkZGluZ1JpZ2h0ID0gbWlub3JTY2FsZSgxKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QmFkZ2UgcmVmPXtyZWZ9IGlzSW50ZXJhY3RpdmUgey4uLmJhZGdlU3R5bGVzfSB7Li4ucmVzdFByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aXNSZW1vdmFibGUgJiYgKFxuICAgICAgICAgIDxDcm9zc0ljb25cbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9e21pbm9yU2NhbGUoMSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZX1cbiAgICAgICAgICAgIHNpemU9e21pbm9yU2NhbGUoMyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQmFkZ2U+XG4gICAgKVxuICB9KVxuKVxuXG5UYWcucHJvcFR5cGVzID0ge1xuICAvKiogVGhlIHRhZyBjb250ZW50ICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSByZW1vdmFsIGljb24gaXMgY2xpY2tlZC5cbiAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAqL1xuICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGFnIGNhbiBiZSByZW1vdmVkLiAqL1xuICBpc1JlbW92YWJsZTogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXX0=