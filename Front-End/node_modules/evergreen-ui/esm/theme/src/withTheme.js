import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { ThemeConsumer } from './ThemeContext';
/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */

function withTheme(WrappedComponent) {
  var _class, _temp;

  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class = /*#__PURE__*/function (_React$Component) {
    _inherits(_class, _React$Component);

    var _super = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _this = this;

        return React.createElement(ThemeConsumer, null, function (theme) {
          return React.createElement(WrappedComponent, _extends({
            theme: theme
          }, _this.props));
        });
      }
    }]);

    return _class;
  }(React.Component), _defineProperty(_class, "displayName", "withTheme(".concat(displayName, ")")), _temp;
}

export default withTheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZS9zcmMvd2l0aFRoZW1lLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGhlbWVDb25zdW1lciIsIndpdGhUaGVtZSIsIldyYXBwZWRDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJ0aGVtZSIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixnQkFBOUI7QUFFQTs7Ozs7QUFJQSxTQUFTQyxTQUFULENBQW1CQyxnQkFBbkIsRUFBcUM7QUFBQTs7QUFDbkMsTUFBTUMsV0FBVyxHQUNmRCxnQkFBZ0IsQ0FBQ0MsV0FBakIsSUFBZ0NELGdCQUFnQixDQUFDRSxJQUFqRCxJQUF5RCxXQUQzRDtBQUdBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFHVztBQUFBOztBQUNQLGVBQ0Usb0JBQUMsYUFBRCxRQUNHLFVBQUFDLEtBQUs7QUFBQSxpQkFBSSxvQkFBQyxnQkFBRDtBQUFrQixZQUFBLEtBQUssRUFBRUE7QUFBekIsYUFBb0MsS0FBSSxDQUFDQyxLQUF6QyxFQUFKO0FBQUEsU0FEUixDQURGO0FBS0Q7QUFUSDs7QUFBQTtBQUFBLElBQXFCUCxLQUFLLENBQUNRLFNBQTNCLDhEQUNvQ0osV0FEcEM7QUFXRDs7QUFFRCxlQUFlRixTQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVDb25zdW1lciB9IGZyb20gJy4vVGhlbWVDb250ZXh0J1xuXG4vKipcbiAqIEhPQyB0aGF0IHVzZXMgVGhlbWVDb25zdW1lci5cbiAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50fSBXcmFwcGVkQ29tcG9uZW50IC0gQ29tcG9uZW50IHRoYXQgZ2V0cyB0aGVtZS5cbiAqL1xuZnVuY3Rpb24gd2l0aFRoZW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY29uc3QgZGlzcGxheU5hbWUgPVxuICAgIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnXG5cbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgd2l0aFRoZW1lKCR7ZGlzcGxheU5hbWV9KWBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZUNvbnN1bWVyPlxuICAgICAgICAgIHt0aGVtZSA9PiA8V3JhcHBlZENvbXBvbmVudCB0aGVtZT17dGhlbWV9IHsuLi50aGlzLnByb3BzfSAvPn1cbiAgICAgICAgPC9UaGVtZUNvbnN1bWVyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWVcbiJdfQ==