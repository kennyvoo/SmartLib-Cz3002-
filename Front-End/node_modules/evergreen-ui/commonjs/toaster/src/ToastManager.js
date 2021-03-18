"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _Toast = _interopRequireDefault(require("./Toast"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var wrapperClass = (0, _glamor.css)({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: _constants.StackingOrder.TOASTER,
  pointerEvents: 'none'
});

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager = (0, _react.memo)(function ToastManager(props) {
  var bindNotify = props.bindNotify,
      bindRemove = props.bindRemove,
      bindGetToasts = props.bindGetToasts,
      bindCloseAll = props.bindCloseAll;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      toasts = _useState2[0],
      setToasts = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      idCounter = _useState4[0],
      setIdCounter = _useState4[1];

  var getToasts = function getToasts() {
    return toasts;
  };

  var closeAll = function closeAll() {
    setToasts(toasts.map(function (toast) {
      return _objectSpread(_objectSpread({}, toast), {}, {
        isShown: false
      });
    }));
  };
  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */


  var closeToast = function closeToast(id) {
    setToasts(toasts.map(function (toast) {
      if (toast.id === id) {
        return _objectSpread(_objectSpread({}, toast), {}, {
          isShown: false
        });
      }

      return toast;
    }));
  };

  var safeCloseToast = function safeCloseToast(id) {
    var toastToRemove = toasts.find(function (toast) {
      return String(toast.id).startsWith(id);
    });

    if (toastToRemove) {
      closeToast(toastToRemove.id);
    }
  };

  var removeToast = function removeToast(id) {
    var updatedToasts = toasts.filter(function (toast) {
      return !String(toast.id).startsWith(id);
    });
    setToasts(updatedToasts);
    return updatedToasts;
  };

  var createToastInstance = function createToastInstance(title, settings) {
    var uniqueId = idCounter;
    setIdCounter(idCounter + 1);
    var id = hasCustomId(settings) ? "".concat(settings.id, "-").concat(uniqueId) : uniqueId;
    return {
      id: id,
      title: title,
      description: settings.description,
      hasCloseButton: settings.hasCloseButton || true,
      duration: settings.duration || 5,
      close: function close() {
        return safeCloseToast(id);
      },
      intent: settings.intent
    };
  };

  var notify = function notify(title, settings) {
    var tempToasts = toasts;

    if (hasCustomId(settings)) {
      tempToasts = removeToast(settings.id);
    }

    var instance = createToastInstance(title, settings);
    setToasts([instance].concat((0, _toConsumableArray2["default"])(tempToasts)));
  };

  bindNotify(notify);
  bindRemove(safeCloseToast);
  bindGetToasts(getToasts);
  bindCloseAll(closeAll);
  return _react["default"].createElement("span", {
    className: wrapperClass
  }, toasts.map(function (_ref) {
    var id = _ref.id,
        description = _ref.description,
        rest = (0, _objectWithoutProperties2["default"])(_ref, ["id", "description"]);
    return _react["default"].createElement(_Toast["default"], (0, _extends2["default"])({
      key: id,
      onRemove: function onRemove() {
        return removeToast(id);
      }
    }, rest), description);
  }));
});
ToastManager.propTypes = {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: _propTypes["default"].func.isRequired
};
var _default = ToastManager;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdE1hbmFnZXIuanMiXSwibmFtZXMiOlsid3JhcHBlckNsYXNzIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJwb3NpdGlvbiIsInpJbmRleCIsIlN0YWNraW5nT3JkZXIiLCJUT0FTVEVSIiwicG9pbnRlckV2ZW50cyIsImhhc0N1c3RvbUlkIiwic2V0dGluZ3MiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUb2FzdE1hbmFnZXIiLCJwcm9wcyIsImJpbmROb3RpZnkiLCJiaW5kUmVtb3ZlIiwiYmluZEdldFRvYXN0cyIsImJpbmRDbG9zZUFsbCIsInRvYXN0cyIsInNldFRvYXN0cyIsImlkQ291bnRlciIsInNldElkQ291bnRlciIsImdldFRvYXN0cyIsImNsb3NlQWxsIiwibWFwIiwidG9hc3QiLCJpc1Nob3duIiwiY2xvc2VUb2FzdCIsImlkIiwic2FmZUNsb3NlVG9hc3QiLCJ0b2FzdFRvUmVtb3ZlIiwiZmluZCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJyZW1vdmVUb2FzdCIsInVwZGF0ZWRUb2FzdHMiLCJmaWx0ZXIiLCJjcmVhdGVUb2FzdEluc3RhbmNlIiwidGl0bGUiLCJ1bmlxdWVJZCIsImRlc2NyaXB0aW9uIiwiaGFzQ2xvc2VCdXR0b24iLCJkdXJhdGlvbiIsImNsb3NlIiwiaW50ZW50Iiwibm90aWZ5IiwidGVtcFRvYXN0cyIsImluc3RhbmNlIiwicmVzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLGlCQUFJO0FBQ3ZCQyxFQUFBQSxRQUFRLEVBQUUsR0FEYTtBQUV2QkMsRUFBQUEsTUFBTSxFQUFFLFFBRmU7QUFHdkJDLEVBQUFBLEdBQUcs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QVksQ0FBQ00sUUFBRCxDQUFaO0FBRUEsU0FDRTtBQUFNLElBQUEsU0FBUyxFQUFFM0I7QUFBakIsS0FDR3NCLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLGdCQUFrQztBQUFBLFFBQS9CSSxFQUErQixRQUEvQkEsRUFBK0I7QUFBQSxRQUEzQlksV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsUUFBWFEsSUFBVztBQUM1QyxXQUNFLGdDQUFDLGlCQUFEO0FBQU8sTUFBQSxHQUFHLEVBQUVwQixFQUFaO0FBQWdCLE1BQUEsUUFBUSxFQUFFO0FBQUEsZUFBTU0sV0FBVyxDQUFDTixFQUFELENBQWpCO0FBQUE7QUFBMUIsT0FBcURvQixJQUFyRCxHQUNHUixXQURILENBREY7QUFLRCxHQU5BLENBREgsQ0FERjtBQVdELENBekZvQixDQUFyQjtBQTJGQTVCLFlBQVksQ0FBQ3FDLFNBQWIsR0FBeUI7QUFDdkI7OztBQUdBbkMsRUFBQUEsVUFBVSxFQUFFb0Msc0JBQVVDLElBQVYsQ0FBZUMsVUFKSjs7QUFNdkI7OztBQUdBckMsRUFBQUEsVUFBVSxFQUFFbUMsc0JBQVVDLElBQVYsQ0FBZUMsVUFUSjs7QUFXdkI7OztBQUdBcEMsRUFBQUEsYUFBYSxFQUFFa0Msc0JBQVVDLElBQVYsQ0FBZUMsVUFkUDs7QUFnQnZCOzs7QUFHQW5DLEVBQUFBLFlBQVksRUFBRWlDLHNCQUFVQyxJQUFWLENBQWVDO0FBbkJOLENBQXpCO2VBc0JleEMsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0J1xuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBtYXhXaWR0aDogNTYwLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgekluZGV4OiBTdGFja2luZ09yZGVyLlRPQVNURVIsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJ1xufSlcblxuY29uc3QgaGFzQ3VzdG9tSWQgPSBzZXR0aW5ncyA9PiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChzZXR0aW5ncywgJ2lkJylcblxuY29uc3QgVG9hc3RNYW5hZ2VyID0gbWVtbyhmdW5jdGlvbiBUb2FzdE1hbmFnZXIocHJvcHMpIHtcbiAgY29uc3QgeyBiaW5kTm90aWZ5LCBiaW5kUmVtb3ZlLCBiaW5kR2V0VG9hc3RzLCBiaW5kQ2xvc2VBbGwgfSA9IHByb3BzXG5cbiAgY29uc3QgW3RvYXN0cywgc2V0VG9hc3RzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaWRDb3VudGVyLCBzZXRJZENvdW50ZXJdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBnZXRUb2FzdHMgPSAoKSA9PiB0b2FzdHNcblxuICBjb25zdCBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICBzZXRUb2FzdHModG9hc3RzLm1hcCh0b2FzdCA9PiAoeyAuLi50b2FzdCwgaXNTaG93bjogZmFsc2UgfSkpKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBzZXQgaXNTaG93biBvbiB0aGUgVG9hc3Qgd2hpY2ggd2lsbCBjbG9zZSB0aGUgdG9hc3QuXG4gICAqIEl0IHdvbid0IHJlbW92ZSB0aGUgdG9hc3QgdW50aWwgb25FeGl0ZWQgdHJpZ2dlcnMgb25SZW1vdmUuXG4gICAqL1xuICBjb25zdCBjbG9zZVRvYXN0ID0gaWQgPT4ge1xuICAgIHNldFRvYXN0cyhcbiAgICAgIHRvYXN0cy5tYXAodG9hc3QgPT4ge1xuICAgICAgICBpZiAodG9hc3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRvYXN0LFxuICAgICAgICAgICAgaXNTaG93bjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG9hc3RcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgY29uc3Qgc2FmZUNsb3NlVG9hc3QgPSBpZCA9PiB7XG4gICAgY29uc3QgdG9hc3RUb1JlbW92ZSA9IHRvYXN0cy5maW5kKHRvYXN0ID0+IFN0cmluZyh0b2FzdC5pZCkuc3RhcnRzV2l0aChpZCkpXG5cbiAgICBpZiAodG9hc3RUb1JlbW92ZSkge1xuICAgICAgY2xvc2VUb2FzdCh0b2FzdFRvUmVtb3ZlLmlkKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRvYXN0ID0gaWQgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUb2FzdHMgPSB0b2FzdHMuZmlsdGVyKFxuICAgICAgdG9hc3QgPT4gIVN0cmluZyh0b2FzdC5pZCkuc3RhcnRzV2l0aChpZClcbiAgICApXG4gICAgc2V0VG9hc3RzKHVwZGF0ZWRUb2FzdHMpXG4gICAgcmV0dXJuIHVwZGF0ZWRUb2FzdHNcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVRvYXN0SW5zdGFuY2UgPSAodGl0bGUsIHNldHRpbmdzKSA9PiB7XG4gICAgY29uc3QgdW5pcXVlSWQgPSBpZENvdW50ZXJcbiAgICBzZXRJZENvdW50ZXIoaWRDb3VudGVyICsgMSlcbiAgICBjb25zdCBpZCA9IGhhc0N1c3RvbUlkKHNldHRpbmdzKSA/IGAke3NldHRpbmdzLmlkfS0ke3VuaXF1ZUlkfWAgOiB1bmlxdWVJZFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2V0dGluZ3MuZGVzY3JpcHRpb24sXG4gICAgICBoYXNDbG9zZUJ1dHRvbjogc2V0dGluZ3MuaGFzQ2xvc2VCdXR0b24gfHwgdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBzZXR0aW5ncy5kdXJhdGlvbiB8fCA1LFxuICAgICAgY2xvc2U6ICgpID0+IHNhZmVDbG9zZVRvYXN0KGlkKSxcbiAgICAgIGludGVudDogc2V0dGluZ3MuaW50ZW50XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgbm90aWZ5ID0gKHRpdGxlLCBzZXR0aW5ncykgPT4ge1xuICAgIGxldCB0ZW1wVG9hc3RzID0gdG9hc3RzXG4gICAgaWYgKGhhc0N1c3RvbUlkKHNldHRpbmdzKSkge1xuICAgICAgdGVtcFRvYXN0cyA9IHJlbW92ZVRvYXN0KHNldHRpbmdzLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gY3JlYXRlVG9hc3RJbnN0YW5jZSh0aXRsZSwgc2V0dGluZ3MpXG4gICAgc2V0VG9hc3RzKFtpbnN0YW5jZSwgLi4udGVtcFRvYXN0c10pXG4gIH1cblxuICBiaW5kTm90aWZ5KG5vdGlmeSlcbiAgYmluZFJlbW92ZShzYWZlQ2xvc2VUb2FzdClcbiAgYmluZEdldFRvYXN0cyhnZXRUb2FzdHMpXG4gIGJpbmRDbG9zZUFsbChjbG9zZUFsbClcblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfT5cbiAgICAgIHt0b2FzdHMubWFwKCh7IGlkLCBkZXNjcmlwdGlvbiwgLi4ucmVzdCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRvYXN0IGtleT17aWR9IG9uUmVtb3ZlPXsoKSA9PiByZW1vdmVUb2FzdChpZCl9IHsuLi5yZXN0fT5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1RvYXN0PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L3NwYW4+XG4gIClcbn0pXG5cblRvYXN0TWFuYWdlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMubm90aWZ5YCBmdW5jdGlvbi5cbiAgICovXG4gIGJpbmROb3RpZnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5yZW1vdmVgIGZ1bmN0aW9uLlxuICAgKi9cbiAgYmluZFJlbW92ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLmdldFRvYXN0c2AgZnVuY3Rpb24uXG4gICAqL1xuICBiaW5kR2V0VG9hc3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMuY2xvc2VBbGxgIGZ1bmN0aW9uLlxuICAgKi9cbiAgYmluZENsb3NlQWxsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0TWFuYWdlclxuIl19