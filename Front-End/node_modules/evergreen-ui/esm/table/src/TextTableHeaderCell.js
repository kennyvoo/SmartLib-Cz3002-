import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import TableHeaderCell from './TableHeaderCell';
var TextTableHeaderCell = memo(function TextTableHeaderCell(props) {
  var children = props.children,
      textProps = props.textProps,
      isSortable = props.isSortable,
      sortOrder = props.sortOrder,
      rest = _objectWithoutProperties(props, ["children", "textProps", "isSortable", "sortOrder"]);

  return React.createElement(TableHeaderCell, rest, React.createElement(Text, _extends({
    fontWeight: 500,
    size: 300,
    flex: "1"
  }, textProps), children, ' '));
});
TextTableHeaderCell.propTypes = _objectSpread(_objectSpread({}, TableHeaderCell.propTypes), {}, {
  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.objectOf(PropTypes.string)
});
export default TextTableHeaderCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlSGVhZGVyQ2VsbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJQcm9wVHlwZXMiLCJUZXh0IiwiVGFibGVIZWFkZXJDZWxsIiwiVGV4dFRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0ZXh0UHJvcHMiLCJpc1NvcnRhYmxlIiwic29ydE9yZGVyIiwicmVzdCIsInByb3BUeXBlcyIsIm9iamVjdE9mIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLFFBQTRCLE9BQTVCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixtQkFBNUI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBR0osSUFBSSxDQUFDLFNBQVNJLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUFBLE1BQzNEQyxRQUQyRCxHQUNIRCxLQURHLENBQzNEQyxRQUQyRDtBQUFBLE1BQ2pEQyxTQURpRCxHQUNIRixLQURHLENBQ2pERSxTQURpRDtBQUFBLE1BQ3RDQyxVQURzQyxHQUNISCxLQURHLENBQ3RDRyxVQURzQztBQUFBLE1BQzFCQyxTQUQwQixHQUNISixLQURHLENBQzFCSSxTQUQwQjtBQUFBLE1BQ1pDLElBRFksNEJBQ0hMLEtBREc7O0FBR25FLFNBQ0Usb0JBQUMsZUFBRCxFQUFxQkssSUFBckIsRUFDRSxvQkFBQyxJQUFEO0FBQU0sSUFBQSxVQUFVLEVBQUUsR0FBbEI7QUFBdUIsSUFBQSxJQUFJLEVBQUUsR0FBN0I7QUFBa0MsSUFBQSxJQUFJLEVBQUM7QUFBdkMsS0FBK0NILFNBQS9DLEdBQ0dELFFBREgsRUFDYSxHQURiLENBREYsQ0FERjtBQU9ELENBVitCLENBQWhDO0FBWUFGLG1CQUFtQixDQUFDTyxTQUFwQixtQ0FJS1IsZUFBZSxDQUFDUSxTQUpyQjtBQU1FOzs7QUFHQUosRUFBQUEsU0FBUyxFQUFFTixTQUFTLENBQUNXLFFBQVYsQ0FBbUJYLFNBQVMsQ0FBQ1ksTUFBN0I7QUFUYjtBQVlBLGVBQWVULG1CQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcblxuY29uc3QgVGV4dFRhYmxlSGVhZGVyQ2VsbCA9IG1lbW8oZnVuY3Rpb24gVGV4dFRhYmxlSGVhZGVyQ2VsbChwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCB0ZXh0UHJvcHMsIGlzU29ydGFibGUsIHNvcnRPcmRlciwgLi4ucmVzdCB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUhlYWRlckNlbGwgey4uLnJlc3R9PlxuICAgICAgPFRleHQgZm9udFdlaWdodD17NTAwfSBzaXplPXszMDB9IGZsZXg9XCIxXCIgey4uLnRleHRQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAgPC9UZXh0PlxuICAgIDwvVGFibGVIZWFkZXJDZWxsPlxuICApXG59KVxuXG5UZXh0VGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBUYWJsZUhlYWRlckNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgKi9cbiAgLi4uVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogUGFzcyBhZGRpdGlvbmFsIHByb3BzIHRvIHRoZSBUZXh0IGNvbXBvbmVudC5cbiAgICovXG4gIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5zdHJpbmcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRUYWJsZUhlYWRlckNlbGxcbiJdfQ==