import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * This component is a utility component to manage state in stories and examples.
 */

var Manager = /*#__PURE__*/function (_React$Component) {
  _inherits(Manager, _React$Component);

  var _super = _createSuper(Manager);

  function Manager(props) {
    var _this;

    _classCallCheck(this, Manager);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_setState", function () {
      var _this2;

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _this.state = _objectSpread({}, props);
    return _this;
  }

  _createClass(Manager, [{
    key: "render",
    value: function render() {
      return this.props.children({
        setState: this._setState,
        state: this.state
      });
    }
  }]);

  return Manager;
}(React.Component);

Manager.displayName = "Manager";

_defineProperty(Manager, "propTypes", {
  children: PropTypes.func
});

export { Manager as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5hZ2VyL3NyYy9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTWFuYWdlciIsInByb3BzIiwic2V0U3RhdGUiLCJzdGF0ZSIsImNoaWxkcmVuIiwiX3NldFN0YXRlIiwiQ29tcG9uZW50IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBRUE7Ozs7SUFHcUJDLE87Ozs7O0FBS25CLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixnRUFPUCxZQUFhO0FBQUE7O0FBQ3ZCLHVCQUFLQyxRQUFMO0FBQ0QsS0FUa0I7O0FBRWpCLFVBQUtDLEtBQUwscUJBQ0tGLEtBREw7QUFGaUI7QUFLbEI7Ozs7NkJBTVE7QUFDUCxhQUFPLEtBQUtBLEtBQUwsQ0FBV0csUUFBWCxDQUFvQjtBQUN6QkYsUUFBQUEsUUFBUSxFQUFFLEtBQUtHLFNBRFU7QUFFekJGLFFBQUFBLEtBQUssRUFBRSxLQUFLQTtBQUZhLE9BQXBCLENBQVA7QUFJRDs7OztFQXJCa0NMLEtBQUssQ0FBQ1EsUzs7QUFBdEJOLE87O2dCQUFBQSxPLGVBQ0E7QUFDakJJLEVBQUFBLFFBQVEsRUFBRUwsU0FBUyxDQUFDUTtBQURILEM7O1NBREFQLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgYSB1dGlsaXR5IGNvbXBvbmVudCB0byBtYW5hZ2Ugc3RhdGUgaW4gc3RvcmllcyBhbmQgZXhhbXBsZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gIH1cblxuICBfc2V0U3RhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoLi4uYXJncylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICBzZXRTdGF0ZTogdGhpcy5fc2V0U3RhdGUsXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==