import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import removeUndefined from '../../lib/remove-undefined';
var UnorderedList = memo(forwardRef(function UnorderedList(props, ref) {
  var children = props.children,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      icon = props.icon,
      iconColor = props.iconColor,
      rest = _objectWithoutProperties(props, ["children", "size", "icon", "iconColor"]);

  var enrichedChildren = React.Children.map(children, function (child) {
    if (!React.isValidElement(child)) {
      return child;
    }

    return React.cloneElement(child, removeUndefined(_objectSpread({
      icon: icon,
      size: size,
      iconColor: iconColor
    }, child.props)));
  });
  var marginLeft;
  if (size === 300) marginLeft = 16;
  if (size === 400) marginLeft = 18;
  if (size === 500) marginLeft = 18;
  if (size === 600) marginLeft = 20;
  return React.createElement(Box, _extends({
    is: "ul",
    listStyle: "disc",
    padding: 0,
    margin: 0,
    marginLeft: marginLeft
  }, rest, {
    ref: ref
  }), enrichedChildren);
}));
UnorderedList.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]),

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor: PropTypes.string
});
export default UnorderedList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Vbm9yZGVyZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJQcm9wVHlwZXMiLCJCb3giLCJyZW1vdmVVbmRlZmluZWQiLCJVbm9yZGVyZWRMaXN0IiwicHJvcHMiLCJyZWYiLCJjaGlsZHJlbiIsInNpemUiLCJpY29uIiwiaWNvbkNvbG9yIiwicmVzdCIsImVucmljaGVkQ2hpbGRyZW4iLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJtYXJnaW5MZWZ0IiwicHJvcFR5cGVzIiwib25lT2YiLCJvbmVPZlR5cGUiLCJlbGVtZW50VHlwZSIsImVsZW1lbnQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLDRCQUE1QjtBQUVBLElBQU1DLGFBQWEsR0FBR0wsSUFBSSxDQUN4QkMsVUFBVSxDQUFDLFNBQVNJLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxHQUE5QixFQUFtQztBQUFBLE1BQ3BDQyxRQURvQyxHQUNlRixLQURmLENBQ3BDRSxRQURvQztBQUFBLG9CQUNlRixLQURmLENBQzFCRyxJQUQwQjtBQUFBLE1BQzFCQSxJQUQwQiw0QkFDbkIsR0FEbUI7QUFBQSxNQUNkQyxJQURjLEdBQ2VKLEtBRGYsQ0FDZEksSUFEYztBQUFBLE1BQ1JDLFNBRFEsR0FDZUwsS0FEZixDQUNSSyxTQURRO0FBQUEsTUFDTUMsSUFETiw0QkFDZU4sS0FEZjs7QUFHNUMsTUFBTU8sZ0JBQWdCLEdBQUdkLEtBQUssQ0FBQ2UsUUFBTixDQUFlQyxHQUFmLENBQW1CUCxRQUFuQixFQUE2QixVQUFBUSxLQUFLLEVBQUk7QUFDN0QsUUFBSSxDQUFDakIsS0FBSyxDQUFDa0IsY0FBTixDQUFxQkQsS0FBckIsQ0FBTCxFQUFrQztBQUNoQyxhQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsV0FBT2pCLEtBQUssQ0FBQ21CLFlBQU4sQ0FDTEYsS0FESyxFQUVMWixlQUFlO0FBQ2JNLE1BQUFBLElBQUksRUFBSkEsSUFEYTtBQUViRCxNQUFBQSxJQUFJLEVBQUpBLElBRmE7QUFHYkUsTUFBQUEsU0FBUyxFQUFUQTtBQUhhLE9BS1ZLLEtBQUssQ0FBQ1YsS0FMSSxFQUZWLENBQVA7QUFVRCxHQWZ3QixDQUF6QjtBQWlCQSxNQUFJYSxVQUFKO0FBQ0EsTUFBSVYsSUFBSSxLQUFLLEdBQWIsRUFBa0JVLFVBQVUsR0FBRyxFQUFiO0FBQ2xCLE1BQUlWLElBQUksS0FBSyxHQUFiLEVBQWtCVSxVQUFVLEdBQUcsRUFBYjtBQUNsQixNQUFJVixJQUFJLEtBQUssR0FBYixFQUFrQlUsVUFBVSxHQUFHLEVBQWI7QUFDbEIsTUFBSVYsSUFBSSxLQUFLLEdBQWIsRUFBa0JVLFVBQVUsR0FBRyxFQUFiO0FBRWxCLFNBQ0Usb0JBQUMsR0FBRDtBQUNFLElBQUEsRUFBRSxFQUFDLElBREw7QUFFRSxJQUFBLFNBQVMsRUFBQyxNQUZaO0FBR0UsSUFBQSxPQUFPLEVBQUUsQ0FIWDtBQUlFLElBQUEsTUFBTSxFQUFFLENBSlY7QUFLRSxJQUFBLFVBQVUsRUFBRUE7QUFMZCxLQU1NUCxJQU5OO0FBT0UsSUFBQSxHQUFHLEVBQUVMO0FBUFAsTUFTR00sZ0JBVEgsQ0FERjtBQWFELENBdkNTLENBRGMsQ0FBMUI7QUEyQ0FSLGFBQWEsQ0FBQ2UsU0FBZCxtQ0FDS2pCLEdBQUcsQ0FBQ2lCLFNBRFQ7QUFHRTs7OztBQUlBWCxFQUFBQSxJQUFJLEVBQUVQLFNBQVMsQ0FBQ21CLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsQ0FQUjs7QUFTRTs7OztBQUlBWCxFQUFBQSxJQUFJLEVBQUVSLFNBQVMsQ0FBQ29CLFNBQVYsQ0FBb0IsQ0FBQ3BCLFNBQVMsQ0FBQ3FCLFdBQVgsRUFBd0JyQixTQUFTLENBQUNzQixPQUFsQyxDQUFwQixDQWJSOztBQWVFOzs7QUFHQWIsRUFBQUEsU0FBUyxFQUFFVCxTQUFTLENBQUN1QjtBQWxCdkI7QUFxQkEsZUFBZXBCLGFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgcmVtb3ZlVW5kZWZpbmVkIGZyb20gJy4uLy4uL2xpYi9yZW1vdmUtdW5kZWZpbmVkJ1xuXG5jb25zdCBVbm9yZGVyZWRMaXN0ID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBVbm9yZGVyZWRMaXN0KHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplID0gNDAwLCBpY29uLCBpY29uQ29sb3IsIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICBjb25zdCBlbnJpY2hlZENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIHJlbW92ZVVuZGVmaW5lZCh7XG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBzaXplLFxuICAgICAgICAgIGljb25Db2xvcixcbiAgICAgICAgICAvLyBQcmVmZXIgbW9yZSBncmFudWxhcmx5IGRlZmluZWQgcHJvcHMgaWYgcHJlc2VudFxuICAgICAgICAgIC4uLmNoaWxkLnByb3BzXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSlcblxuICAgIGxldCBtYXJnaW5MZWZ0XG4gICAgaWYgKHNpemUgPT09IDMwMCkgbWFyZ2luTGVmdCA9IDE2XG4gICAgaWYgKHNpemUgPT09IDQwMCkgbWFyZ2luTGVmdCA9IDE4XG4gICAgaWYgKHNpemUgPT09IDUwMCkgbWFyZ2luTGVmdCA9IDE4XG4gICAgaWYgKHNpemUgPT09IDYwMCkgbWFyZ2luTGVmdCA9IDIwXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cInVsXCJcbiAgICAgICAgbGlzdFN0eWxlPVwiZGlzY1wiXG4gICAgICAgIHBhZGRpbmc9ezB9XG4gICAgICAgIG1hcmdpbj17MH1cbiAgICAgICAgbWFyZ2luTGVmdD17bWFyZ2luTGVmdH1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgPlxuICAgICAgICB7ZW5yaWNoZWRDaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuVW5vcmRlcmVkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIHRleHQgdXNlZCBpbiBhIGxpc3QgaXRlbS5cbiAgICogQ2FuIGJlOiAzMDAsIDQwMCwgNTAwLCA2MDAuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDAsIDYwMF0pLFxuXG4gIC8qKlxuICAgKiBXaGVuIHBhc3NlZCwgYWRkcyBhIGljb24gYmVmb3JlIGVhY2ggbGlzdCBpdGVtIGluIHRoZSBsaXN0XG4gICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBvbiBhIGluZGl2aWR1YWwgbGlzdCBpdGVtLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGljb24gaW4gZWFjaCBsaXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAqL1xuICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5vcmRlcmVkTGlzdFxuIl19