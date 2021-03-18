"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _FormFieldLabel = _interopRequireDefault(require("./FormFieldLabel"));

var _FormFieldDescription = _interopRequireDefault(require("./FormFieldDescription"));

var _FormFieldValidationMessage = _interopRequireDefault(require("./FormFieldValidationMessage"));

var _FormFieldHint = _interopRequireDefault(require("./FormFieldHint"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormField = (0, _react.memo)((0, _react.forwardRef)(function FormField(props, ref) {
  var hint = props.hint,
      label = props.label,
      labelFor = props.labelFor,
      children = props.children,
      isRequired = props.isRequired,
      _props$labelProps = props.labelProps,
      labelProps = _props$labelProps === void 0 ? {
    size: 400
  } : _props$labelProps,
      description = props.description,
      validationMessage = props.validationMessage,
      rest = (0, _objectWithoutProperties2["default"])(props, ["hint", "label", "labelFor", "children", "isRequired", "labelProps", "description", "validationMessage"]);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({}, rest, {
    ref: ref
  }), _react["default"].createElement(_FormFieldLabel["default"], (0, _extends2["default"])({
    htmlFor: labelFor,
    isAstrixShown: isRequired,
    marginBottom: description ? 0 : 4
  }, labelProps), label), typeof description === 'string' ? _react["default"].createElement(_FormFieldDescription["default"], {
    marginBottom: 4
  }, description) : description, children, typeof validationMessage === 'string' ? _react["default"].createElement(_FormFieldValidationMessage["default"], {
    marginTop: 8
  }, validationMessage) : validationMessage, typeof hint === 'string' ? _react["default"].createElement(_FormFieldHint["default"], {
    marginTop: 6
  }, hint) : hint);
}));
FormField.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
  /**
   * The label used above the input element.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: _propTypes["default"].string,

  /**
   * Whether or not show an asterix after the label.
   */
  isRequired: _propTypes["default"].bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: _propTypes["default"].node,

  /**
   * An optional hint under the input element.
   */
  hint: _propTypes["default"].node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: _propTypes["default"].node
}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes);
var _default = FormField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiRm9ybUZpZWxkIiwicHJvcHMiLCJyZWYiLCJoaW50IiwibGFiZWwiLCJsYWJlbEZvciIsImNoaWxkcmVuIiwiaXNSZXF1aXJlZCIsImxhYmVsUHJvcHMiLCJzaXplIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInJlc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsImRpbWVuc2lvbnMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxpQkFDaEIsdUJBQVcsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQUEsTUFFdENDLElBRnNDLEdBV3BDRixLQVhvQyxDQUV0Q0UsSUFGc0M7QUFBQSxNQUd0Q0MsS0FIc0MsR0FXcENILEtBWG9DLENBR3RDRyxLQUhzQztBQUFBLE1BSXRDQyxRQUpzQyxHQVdwQ0osS0FYb0MsQ0FJdENJLFFBSnNDO0FBQUEsTUFLdENDLFFBTHNDLEdBV3BDTCxLQVhvQyxDQUt0Q0ssUUFMc0M7QUFBQSxNQU10Q0MsVUFOc0MsR0FXcENOLEtBWG9DLENBTXRDTSxVQU5zQztBQUFBLDBCQVdwQ04sS0FYb0MsQ0FPdENPLFVBUHNDO0FBQUEsTUFPdENBLFVBUHNDLGtDQU96QjtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQVB5QjtBQUFBLE1BUXRDQyxXQVJzQyxHQVdwQ1QsS0FYb0MsQ0FRdENTLFdBUnNDO0FBQUEsTUFTdENDLGlCQVRzQyxHQVdwQ1YsS0FYb0MsQ0FTdENVLGlCQVRzQztBQUFBLE1BVW5DQyxJQVZtQyw2Q0FXcENYLEtBWG9DO0FBYXhDLFNBQ0UsZ0NBQUMsaUJBQUQsZ0NBQVNXLElBQVQ7QUFBZSxJQUFBLEdBQUcsRUFBRVY7QUFBcEIsTUFDRSxnQ0FBQywwQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFRyxRQURYO0FBRUUsSUFBQSxhQUFhLEVBQUVFLFVBRmpCO0FBR0UsSUFBQSxZQUFZLEVBQUVHLFdBQVcsR0FBRyxDQUFILEdBQU87QUFIbEMsS0FJTUYsVUFKTixHQU1HSixLQU5ILENBREYsRUFTRyxPQUFPTSxXQUFQLEtBQXVCLFFBQXZCLEdBQ0MsZ0NBQUMsZ0NBQUQ7QUFBc0IsSUFBQSxZQUFZLEVBQUU7QUFBcEMsS0FDR0EsV0FESCxDQURELEdBS0NBLFdBZEosRUFnQkdKLFFBaEJILEVBaUJHLE9BQU9LLGlCQUFQLEtBQTZCLFFBQTdCLEdBQ0MsZ0NBQUMsc0NBQUQ7QUFBNEIsSUFBQSxTQUFTLEVBQUU7QUFBdkMsS0FDR0EsaUJBREgsQ0FERCxHQUtDQSxpQkF0QkosRUF3QkcsT0FBT1IsSUFBUCxLQUFnQixRQUFoQixHQUNDLGdDQUFDLHlCQUFEO0FBQWUsSUFBQSxTQUFTLEVBQUU7QUFBMUIsS0FBOEJBLElBQTlCLENBREQsR0FHQ0EsSUEzQkosQ0FERjtBQWdDRCxDQTdDRCxDQURnQixDQUFsQjtBQWlEQUgsU0FBUyxDQUFDYSxTQUFWO0FBQ0U7OztBQUdBVCxFQUFBQSxLQUFLLEVBQUVVLHNCQUFVQyxJQUFWLENBQWVSLFVBSnhCOztBQU1FOzs7QUFHQUYsRUFBQUEsUUFBUSxFQUFFUyxzQkFBVUUsTUFUdEI7O0FBV0U7OztBQUdBVCxFQUFBQSxVQUFVLEVBQUVPLHNCQUFVRyxJQWR4Qjs7QUFnQkU7OztBQUdBUCxFQUFBQSxXQUFXLEVBQUVJLHNCQUFVQyxJQW5CekI7O0FBcUJFOzs7QUFHQVosRUFBQUEsSUFBSSxFQUFFVyxzQkFBVUMsSUF4QmxCOztBQTBCRTs7OztBQUlBSixFQUFBQSxpQkFBaUIsRUFBRUcsc0JBQVVDO0FBOUIvQixHQW1DS0csa0JBQVdMLFNBbkNoQixHQXdDS00sZUFBUU4sU0F4Q2IsR0E2Q0tPLGdCQUFTUCxTQTdDZCxHQWtES1EsY0FBT1IsU0FsRFo7ZUFxRGViLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IEZvcm1GaWVsZExhYmVsIGZyb20gJy4vRm9ybUZpZWxkTGFiZWwnXG5pbXBvcnQgRm9ybUZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi9Gb3JtRmllbGREZXNjcmlwdGlvbidcbmltcG9ydCBGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlJ1xuaW1wb3J0IEZvcm1GaWVsZEhpbnQgZnJvbSAnLi9Gb3JtRmllbGRIaW50J1xuXG5jb25zdCBGb3JtRmllbGQgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEZvcm1GaWVsZChwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGludCxcbiAgICAgIGxhYmVsLFxuICAgICAgbGFiZWxGb3IsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBsYWJlbFByb3BzID0geyBzaXplOiA0MDAgfSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB7Li4ucmVzdH0gcmVmPXtyZWZ9PlxuICAgICAgICA8Rm9ybUZpZWxkTGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtsYWJlbEZvcn1cbiAgICAgICAgICBpc0FzdHJpeFNob3duPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17ZGVzY3JpcHRpb24gPyAwIDogNH1cbiAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9Gb3JtRmllbGRMYWJlbD5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgPEZvcm1GaWVsZERlc2NyaXB0aW9uIG1hcmdpbkJvdHRvbT17NH0+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9Gb3JtRmllbGREZXNjcmlwdGlvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHt0eXBlb2YgdmFsaWRhdGlvbk1lc3NhZ2UgPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgIDxGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSBtYXJnaW5Ub3A9ezh9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VcbiAgICAgICAgKX1cbiAgICAgICAge3R5cGVvZiBoaW50ID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICA8Rm9ybUZpZWxkSGludCBtYXJnaW5Ub3A9ezZ9PntoaW50fTwvRm9ybUZpZWxkSGludD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBoaW50XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cbkZvcm1GaWVsZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdXNlZCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgKi9cbiAgbGFiZWxGb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAqL1xuICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkIHVuZGVyIHRoZSBsYWJlbCwgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBoaW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgaXMgcGFzc2VkIGl0IGlzIHNob3duIHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50XG4gICAqIGFuZCBhYm92ZSB0aGUgaGludC4gVGhpcyBpcyB1bmFmZmVjdGVkIGJ5IGBpc0ludmFsaWRgLlxuICAgKi9cbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4ubGF5b3V0LnByb3BUeXBlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGRcbiJdfQ==