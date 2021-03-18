"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _layers = require("../../layers");

var _TableBody = _interopRequireDefault(require("./TableBody"));

var _TableVirtualBody = _interopRequireDefault(require("./TableVirtualBody"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _TableHead = _interopRequireDefault(require("./TableHead"));

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TextTableHeaderCell = _interopRequireDefault(require("./TextTableHeaderCell"));

var _SearchTableHeaderCell = _interopRequireDefault(require("./SearchTableHeaderCell"));

var _EditableCell = _interopRequireDefault(require("./EditableCell"));

var _SelectMenuCell = _interopRequireDefault(require("./SelectMenuCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Table = (0, _react.memo)(function Table(props) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children"]);
  return _react["default"].createElement(_layers.Pane, rest, children);
});
Table.Body = _TableBody["default"];
Table.VirtualBody = _TableVirtualBody["default"];
Table.Head = _TableHead["default"];
Table.HeaderCell = _TableHeaderCell["default"];
Table.TextHeaderCell = _TextTableHeaderCell["default"];
Table.SearchHeaderCell = _SearchTableHeaderCell["default"];
Table.Row = _TableRow["default"];
Table.Cell = _TableCell["default"];
Table.TextCell = _TextTableCell["default"];
Table.EditableCell = _EditableCell["default"];
Table.SelectMenuCell = _SelectMenuCell["default"];
Table.propTypes = _objectSpread({}, _layers.Pane.propTypes);
var _default = Table;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGUuanMiXSwibmFtZXMiOlsiVGFibGUiLCJwcm9wcyIsImNoaWxkcmVuIiwicmVzdCIsIkJvZHkiLCJUYWJsZUJvZHkiLCJWaXJ0dWFsQm9keSIsIlRhYmxlVmlydHVhbEJvZHkiLCJIZWFkIiwiVGFibGVIZWFkIiwiSGVhZGVyQ2VsbCIsIlRhYmxlSGVhZGVyQ2VsbCIsIlRleHRIZWFkZXJDZWxsIiwiVGV4dFRhYmxlSGVhZGVyQ2VsbCIsIlNlYXJjaEhlYWRlckNlbGwiLCJTZWFyY2hUYWJsZUhlYWRlckNlbGwiLCJSb3ciLCJUYWJsZVJvdyIsIkNlbGwiLCJUYWJsZUNlbGwiLCJUZXh0Q2VsbCIsIlRleHRUYWJsZUNlbGwiLCJFZGl0YWJsZUNlbGwiLCJTZWxlY3RNZW51Q2VsbCIsInByb3BUeXBlcyIsIlBhbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsaUJBQUssU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUEsTUFDL0JDLFFBRCtCLEdBQ1RELEtBRFMsQ0FDL0JDLFFBRCtCO0FBQUEsTUFDbEJDLElBRGtCLDZDQUNURixLQURTO0FBRXZDLFNBQU8sZ0NBQUMsWUFBRCxFQUFVRSxJQUFWLEVBQWlCRCxRQUFqQixDQUFQO0FBQ0QsQ0FIYSxDQUFkO0FBS0FGLEtBQUssQ0FBQ0ksSUFBTixHQUFhQyxxQkFBYjtBQUNBTCxLQUFLLENBQUNNLFdBQU4sR0FBb0JDLDRCQUFwQjtBQUNBUCxLQUFLLENBQUNRLElBQU4sR0FBYUMscUJBQWI7QUFDQVQsS0FBSyxDQUFDVSxVQUFOLEdBQW1CQywyQkFBbkI7QUFDQVgsS0FBSyxDQUFDWSxjQUFOLEdBQXVCQywrQkFBdkI7QUFDQWIsS0FBSyxDQUFDYyxnQkFBTixHQUF5QkMsaUNBQXpCO0FBQ0FmLEtBQUssQ0FBQ2dCLEdBQU4sR0FBWUMsb0JBQVo7QUFDQWpCLEtBQUssQ0FBQ2tCLElBQU4sR0FBYUMscUJBQWI7QUFDQW5CLEtBQUssQ0FBQ29CLFFBQU4sR0FBaUJDLHlCQUFqQjtBQUNBckIsS0FBSyxDQUFDc0IsWUFBTixHQUFxQkEsd0JBQXJCO0FBQ0F0QixLQUFLLENBQUN1QixjQUFOLEdBQXVCQSwwQkFBdkI7QUFFQXZCLEtBQUssQ0FBQ3dCLFNBQU4scUJBQ0tDLGFBQUtELFNBRFY7ZUFJZXhCLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnLi9UYWJsZUJvZHknXG5pbXBvcnQgVGFibGVWaXJ0dWFsQm9keSBmcm9tICcuL1RhYmxlVmlydHVhbEJvZHknXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICcuL1RhYmxlSGVhZCdcbmltcG9ydCBUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UYWJsZUhlYWRlckNlbGwnXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi9UYWJsZVJvdydcbmltcG9ydCBUZXh0VGFibGVDZWxsIGZyb20gJy4vVGV4dFRhYmxlQ2VsbCdcbmltcG9ydCBUZXh0VGFibGVIZWFkZXJDZWxsIGZyb20gJy4vVGV4dFRhYmxlSGVhZGVyQ2VsbCdcbmltcG9ydCBTZWFyY2hUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9TZWFyY2hUYWJsZUhlYWRlckNlbGwnXG5pbXBvcnQgRWRpdGFibGVDZWxsIGZyb20gJy4vRWRpdGFibGVDZWxsJ1xuaW1wb3J0IFNlbGVjdE1lbnVDZWxsIGZyb20gJy4vU2VsZWN0TWVudUNlbGwnXG5cbmNvbnN0IFRhYmxlID0gbWVtbyhmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wc1xuICByZXR1cm4gPFBhbmUgey4uLnJlc3R9PntjaGlsZHJlbn08L1BhbmU+XG59KVxuXG5UYWJsZS5Cb2R5ID0gVGFibGVCb2R5XG5UYWJsZS5WaXJ0dWFsQm9keSA9IFRhYmxlVmlydHVhbEJvZHlcblRhYmxlLkhlYWQgPSBUYWJsZUhlYWRcblRhYmxlLkhlYWRlckNlbGwgPSBUYWJsZUhlYWRlckNlbGxcblRhYmxlLlRleHRIZWFkZXJDZWxsID0gVGV4dFRhYmxlSGVhZGVyQ2VsbFxuVGFibGUuU2VhcmNoSGVhZGVyQ2VsbCA9IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbFxuVGFibGUuUm93ID0gVGFibGVSb3dcblRhYmxlLkNlbGwgPSBUYWJsZUNlbGxcblRhYmxlLlRleHRDZWxsID0gVGV4dFRhYmxlQ2VsbFxuVGFibGUuRWRpdGFibGVDZWxsID0gRWRpdGFibGVDZWxsXG5UYWJsZS5TZWxlY3RNZW51Q2VsbCA9IFNlbGVjdE1lbnVDZWxsXG5cblRhYmxlLnByb3BUeXBlcyA9IHtcbiAgLi4uUGFuZS5wcm9wVHlwZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiJdfQ==