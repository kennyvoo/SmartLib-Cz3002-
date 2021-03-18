import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import { ArrowLeftIcon } from '../../icons';
import Button from './Button';
var BackButton = memo(forwardRef(function BackButton(_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'Back' : _ref$children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Button, _extends({
    iconBefore: ArrowLeftIcon
  }, props, {
    ref: ref
  }), children);
}));
BackButton.propTypes = _objectSpread({}, Button.propTypes);
export default BackButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CYWNrQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm1lbW8iLCJBcnJvd0xlZnRJY29uIiwiQnV0dG9uIiwiQmFja0J1dHRvbiIsInJlZiIsImNoaWxkcmVuIiwicHJvcHMiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLElBQTVCLFFBQXdDLE9BQXhDO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixhQUE5QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7QUFFQSxJQUFNQyxVQUFVLEdBQUdILElBQUksQ0FDckJELFVBQVUsQ0FBQyxTQUFTSSxVQUFULE9BQXFEQyxHQUFyRCxFQUEwRDtBQUFBLDJCQUFwQ0MsUUFBb0M7QUFBQSxNQUFwQ0EsUUFBb0MsOEJBQXpCLE1BQXlCO0FBQUEsTUFBZEMsS0FBYzs7QUFDbkUsU0FDRSxvQkFBQyxNQUFEO0FBQVEsSUFBQSxVQUFVLEVBQUVMO0FBQXBCLEtBQXVDSyxLQUF2QztBQUE4QyxJQUFBLEdBQUcsRUFBRUY7QUFBbkQsTUFDR0MsUUFESCxDQURGO0FBS0QsQ0FOUyxDQURXLENBQXZCO0FBVUFGLFVBQVUsQ0FBQ0ksU0FBWCxxQkFFS0wsTUFBTSxDQUFDSyxTQUZaO0FBS0EsZUFBZUosVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcnJvd0xlZnRJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jb25zdCBCYWNrQnV0dG9uID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBCYWNrQnV0dG9uKHsgY2hpbGRyZW4gPSAnQmFjaycsIC4uLnByb3BzIH0sIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uIGljb25CZWZvcmU9e0Fycm93TGVmdEljb259IHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG4gIH0pXG4pXG5cbkJhY2tCdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKiogQ29tcG9zZXMgdGhlIEJ1dHRvbiBjb21wb25lbnQgYXMgdGhlIGJhc2UuICovXG4gIC4uLkJ1dHRvbi5wcm9wVHlwZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja0J1dHRvblxuIl19