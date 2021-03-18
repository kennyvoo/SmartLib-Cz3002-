import warning from './warning';
export default (function (propType, explanation) {
  return function (props, propName, componentName) {
    if (process.env.NODE_ENV !== 'production') {
      warning(propName in props, "\"".concat(propName, "\" property of \"").concat(componentName, "\" has been deprecated.\n").concat(explanation));
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZGVwcmVjYXRlZC5qcyJdLCJuYW1lcyI6WyJ3YXJuaW5nIiwicHJvcFR5cGUiLCJleHBsYW5hdGlvbiIsInByb3BzIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicmVzdCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsT0FBUCxNQUFvQixXQUFwQjtBQUVBLGdCQUFlLFVBQUNDLFFBQUQsRUFBV0MsV0FBWCxFQUEyQjtBQUN4QyxTQUFPLFVBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFrQkMsYUFBbEIsRUFBNkM7QUFDbEQsUUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekNSLE1BQUFBLE9BQU8sQ0FDTEksUUFBUSxJQUFJRCxLQURQLGNBRURDLFFBRkMsOEJBRXlCQyxhQUZ6QixzQ0FFaUVILFdBRmpFLEVBQVA7QUFJRDs7QUFOaUQsc0NBQVRPLElBQVM7QUFBVEEsTUFBQUEsSUFBUztBQUFBOztBQVFsRCxXQUFPUixRQUFRLE1BQVIsVUFBU0UsS0FBVCxFQUFnQkMsUUFBaEIsRUFBMEJDLGFBQTFCLFNBQTRDSSxJQUE1QyxFQUFQO0FBQ0QsR0FURDtBQVVELENBWEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2FybmluZyBmcm9tICcuL3dhcm5pbmcnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wVHlwZSwgZXhwbGFuYXRpb24pID0+IHtcbiAgcmV0dXJuIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIC4uLnJlc3QpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgcHJvcE5hbWUgaW4gcHJvcHMsXG4gICAgICAgIGBcIiR7cHJvcE5hbWV9XCIgcHJvcGVydHkgb2YgXCIke2NvbXBvbmVudE5hbWV9XCIgaGFzIGJlZW4gZGVwcmVjYXRlZC5cXG4ke2V4cGxhbmF0aW9ufWBcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCAuLi5yZXN0KVxuICB9XG59XG4iXX0=