"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuildIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M15.39 12.41L7.7 6l1.07-1.1c.34-.34-.12-.63.12-1.26.88-2.17 3.41-2.35 3.41-2.35s.36-.37.71-.72C9.74-.81 7.53.53 6.54 1.4L3.12 4.9l-.71.72c-.39.4-.39 1.05 0 1.45l-.7.72c-.39-.4-1.02-.4-1.41 0s-.39 1.05 0 1.45l1.41 1.45c.39.4 1.02.4 1.41 0s.39-1.05 0-1.45l.71-.72c.39.4 1.02.4 1.41 0l.8-.82 6.39 7.67c.82.82 2.14.82 2.96 0 .81-.82.81-2.15 0-2.96z'];
var svgPaths20 = ['M19.43 16.67L9.31 7.81l1.47-1.56c.41-.44-.15-.8.15-1.6 1.08-2.76 4.19-2.99 4.19-2.99s.45-.47.87-.92C11.98-1 9.26.7 8.04 1.8L3.83 6.25l-.86.92c-.48.51-.48 1.33 0 1.84l-.87.92c-.48-.51-1.26-.51-1.74 0s-.48 1.33 0 1.84l1.74 1.84c.48.51 1.26.51 1.74 0s.48-1.33 0-1.84l.87-.92c.48.51 1.26.51 1.74 0l1.41-1.49 8.81 10.07c.76.76 2 .76 2.76 0 .76-.76.76-2 0-2.76z'];
var BuildIcon = (0, _react.memo)((0, _react.forwardRef)(function BuildIcon(props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "build"
  }, props));
}));
exports.BuildIcon = BuildIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvQnVpbGRJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiQnVpbGRJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsMFZBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLHFXQURpQixDQUFuQjtBQUlPLElBQU1DLFNBQVMsR0FBRyxpQkFDdkIsdUJBQVcsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQ3hDLFNBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFERjtBQVNELENBVkQsQ0FEdUIsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNMTUuMzkgMTIuNDFMNy43IDZsMS4wNy0xLjFjLjM0LS4zNC0uMTItLjYzLjEyLTEuMjYuODgtMi4xNyAzLjQxLTIuMzUgMy40MS0yLjM1cy4zNi0uMzcuNzEtLjcyQzkuNzQtLjgxIDcuNTMuNTMgNi41NCAxLjRMMy4xMiA0LjlsLS43MS43MmMtLjM5LjQtLjM5IDEuMDUgMCAxLjQ1bC0uNy43MmMtLjM5LS40LTEuMDItLjQtMS40MSAwcy0uMzkgMS4wNSAwIDEuNDVsMS40MSAxLjQ1Yy4zOS40IDEuMDIuNCAxLjQxIDBzLjM5LTEuMDUgMC0xLjQ1bC43MS0uNzJjLjM5LjQgMS4wMi40IDEuNDEgMGwuOC0uODIgNi4zOSA3LjY3Yy44Mi44MiAyLjE0LjgyIDIuOTYgMCAuODEtLjgyLjgxLTIuMTUgMC0yLjk2eidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTkuNDMgMTYuNjdMOS4zMSA3LjgxbDEuNDctMS41NmMuNDEtLjQ0LS4xNS0uOC4xNS0xLjYgMS4wOC0yLjc2IDQuMTktMi45OSA0LjE5LTIuOTlzLjQ1LS40Ny44Ny0uOTJDMTEuOTgtMSA5LjI2LjcgOC4wNCAxLjhMMy44MyA2LjI1bC0uODYuOTJjLS40OC41MS0uNDggMS4zMyAwIDEuODRsLS44Ny45MmMtLjQ4LS41MS0xLjI2LS41MS0xLjc0IDBzLS40OCAxLjMzIDAgMS44NGwxLjc0IDEuODRjLjQ4LjUxIDEuMjYuNTEgMS43NCAwcy40OC0xLjMzIDAtMS44NGwuODctLjkyYy40OC41MSAxLjI2LjUxIDEuNzQgMGwxLjQxLTEuNDkgOC44MSAxMC4wN2MuNzYuNzYgMiAuNzYgMi43NiAwIC43Ni0uNzYuNzYtMiAwLTIuNzZ6J1xuXVxuXG5leHBvcnQgY29uc3QgQnVpbGRJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBCdWlsZEljb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvblxuICAgICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgbmFtZT1cImJ1aWxkXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG4pXG4iXX0=