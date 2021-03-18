"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * This component is a utility component to manage state in stories and examples.
 */
var Manager = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Manager, _React$Component);

  var _super = _createSuper(Manager);

  function Manager(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Manager);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setState", function () {
      var _this2;

      (_this2 = _this).setState.apply(_this2, arguments);
    });
    _this.state = _objectSpread({}, props);
    return _this;
  }

  (0, _createClass2["default"])(Manager, [{
    key: "render",
    value: function render() {
      return this.props.children({
        setState: this._setState,
        state: this.state
      });
    }
  }]);
  return Manager;
}(_react["default"].Component);

exports["default"] = Manager;
Manager.displayName = "Manager";
(0, _defineProperty2["default"])(Manager, "propTypes", {
  children: _propTypes["default"].func
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5hZ2VyL3NyYy9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIk1hbmFnZXIiLCJwcm9wcyIsInNldFN0YXRlIiwic3RhdGUiLCJjaGlsZHJlbiIsIl9zZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJBLE87Ozs7O0FBS25CLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFEaUIsa0dBT1AsWUFBYTtBQUFBOztBQUN2Qix1QkFBS0MsUUFBTDtBQUNELEtBVGtCO0FBRWpCLFVBQUtDLEtBQUwscUJBQ0tGLEtBREw7QUFGaUI7QUFLbEI7Ozs7NkJBTVE7QUFDUCxhQUFPLEtBQUtBLEtBQUwsQ0FBV0csUUFBWCxDQUFvQjtBQUN6QkYsUUFBQUEsUUFBUSxFQUFFLEtBQUtHLFNBRFU7QUFFekJGLFFBQUFBLEtBQUssRUFBRSxLQUFLQTtBQUZhLE9BQXBCLENBQVA7QUFJRDs7O0VBckJrQ0csa0JBQU1DLFM7OztBQUF0QlAsTztpQ0FBQUEsTyxlQUNBO0FBQ2pCSSxFQUFBQSxRQUFRLEVBQUVJLHNCQUFVQztBQURILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgYSB1dGlsaXR5IGNvbXBvbmVudCB0byBtYW5hZ2Ugc3RhdGUgaW4gc3RvcmllcyBhbmQgZXhhbXBsZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gIH1cblxuICBfc2V0U3RhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoLi4uYXJncylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICBzZXRTdGF0ZTogdGhpcy5fc2V0U3RhdGUsXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==