import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { StackingOrder } from '../../constants';
import Toast from './Toast';
var wrapperClass = css({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: StackingOrder.TOASTER,
  pointerEvents: 'none'
});

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager = memo(function ToastManager(props) {
  var bindNotify = props.bindNotify,
      bindRemove = props.bindRemove,
      bindGetToasts = props.bindGetToasts,
      bindCloseAll = props.bindCloseAll;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      toasts = _useState2[0],
      setToasts = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
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
    setToasts([instance].concat(_toConsumableArray(tempToasts)));
  };

  bindNotify(notify);
  bindRemove(safeCloseToast);
  bindGetToasts(getToasts);
  bindCloseAll(closeAll);
  return React.createElement("span", {
    className: wrapperClass
  }, toasts.map(function (_ref) {
    var id = _ref.id,
        description = _ref.description,
        rest = _objectWithoutProperties(_ref, ["id", "description"]);

    return React.createElement(Toast, _extends({
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
  bindNotify: PropTypes.func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: PropTypes.func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: PropTypes.func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: PropTypes.func.isRequired
};
export default ToastManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdE1hbmFnZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwidXNlU3RhdGUiLCJjc3MiLCJQcm9wVHlwZXMiLCJTdGFja2luZ09yZGVyIiwiVG9hc3QiLCJ3cmFwcGVyQ2xhc3MiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJyaWdodCIsInBvc2l0aW9uIiwiekluZGV4IiwiVE9BU1RFUiIsInBvaW50ZXJFdmVudHMiLCJoYXNDdXN0b21JZCIsInNldHRpbmdzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVG9hc3RNYW5hZ2VyIiwicHJvcHMiLCJiaW5kTm90aWZ5IiwiYmluZFJlbW92ZSIsImJpbmRHZXRUb2FzdHMiLCJiaW5kQ2xvc2VBbGwiLCJ0b2FzdHMiLCJzZXRUb2FzdHMiLCJpZENvdW50ZXIiLCJzZXRJZENvdW50ZXIiLCJnZXRUb2FzdHMiLCJjbG9zZUFsbCIsIm1hcCIsInRvYXN0IiwiaXNTaG93biIsImNsb3NlVG9hc3QiLCJpZCIsInNhZmVDbG9zZVRvYXN0IiwidG9hc3RUb1JlbW92ZSIsImZpbmQiLCJTdHJpbmciLCJzdGFydHNXaXRoIiwicmVtb3ZlVG9hc3QiLCJ1cGRhdGVkVG9hc3RzIiwiZmlsdGVyIiwiY3JlYXRlVG9hc3RJbnN0YW5jZSIsInRpdGxlIiwidW5pcXVlSWQiLCJkZXNjcmlwdGlvbiIsImhhc0Nsb3NlQnV0dG9uIiwiZHVyYXRpb24iLCJjbG9zZSIsImludGVudCIsIm5vdGlmeSIsInRlbXBUb2FzdHMiLCJpbnN0YW5jZSIsInJlc3QiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxRQUF0QixRQUFzQyxPQUF0QztBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlB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IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0J1xuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBtYXhXaWR0aDogNTYwLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgekluZGV4OiBTdGFja2luZ09yZGVyLlRPQVNURVIsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJ1xufSlcblxuY29uc3QgaGFzQ3VzdG9tSWQgPSBzZXR0aW5ncyA9PiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChzZXR0aW5ncywgJ2lkJylcblxuY29uc3QgVG9hc3RNYW5hZ2VyID0gbWVtbyhmdW5jdGlvbiBUb2FzdE1hbmFnZXIocHJvcHMpIHtcbiAgY29uc3QgeyBiaW5kTm90aWZ5LCBiaW5kUmVtb3ZlLCBiaW5kR2V0VG9hc3RzLCBiaW5kQ2xvc2VBbGwgfSA9IHByb3BzXG5cbiAgY29uc3QgW3RvYXN0cywgc2V0VG9hc3RzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaWRDb3VudGVyLCBzZXRJZENvdW50ZXJdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBnZXRUb2FzdHMgPSAoKSA9PiB0b2FzdHNcblxuICBjb25zdCBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICBzZXRUb2FzdHModG9hc3RzLm1hcCh0b2FzdCA9PiAoeyAuLi50b2FzdCwgaXNTaG93bjogZmFsc2UgfSkpKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBzZXQgaXNTaG93biBvbiB0aGUgVG9hc3Qgd2hpY2ggd2lsbCBjbG9zZSB0aGUgdG9hc3QuXG4gICAqIEl0IHdvbid0IHJlbW92ZSB0aGUgdG9hc3QgdW50aWwgb25FeGl0ZWQgdHJpZ2dlcnMgb25SZW1vdmUuXG4gICAqL1xuICBjb25zdCBjbG9zZVRvYXN0ID0gaWQgPT4ge1xuICAgIHNldFRvYXN0cyhcbiAgICAgIHRvYXN0cy5tYXAodG9hc3QgPT4ge1xuICAgICAgICBpZiAodG9hc3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRvYXN0LFxuICAgICAgICAgICAgaXNTaG93bjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG9hc3RcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgY29uc3Qgc2FmZUNsb3NlVG9hc3QgPSBpZCA9PiB7XG4gICAgY29uc3QgdG9hc3RUb1JlbW92ZSA9IHRvYXN0cy5maW5kKHRvYXN0ID0+IFN0cmluZyh0b2FzdC5pZCkuc3RhcnRzV2l0aChpZCkpXG5cbiAgICBpZiAodG9hc3RUb1JlbW92ZSkge1xuICAgICAgY2xvc2VUb2FzdCh0b2FzdFRvUmVtb3ZlLmlkKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRvYXN0ID0gaWQgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUb2FzdHMgPSB0b2FzdHMuZmlsdGVyKFxuICAgICAgdG9hc3QgPT4gIVN0cmluZyh0b2FzdC5pZCkuc3RhcnRzV2l0aChpZClcbiAgICApXG4gICAgc2V0VG9hc3RzKHVwZGF0ZWRUb2FzdHMpXG4gICAgcmV0dXJuIHVwZGF0ZWRUb2FzdHNcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVRvYXN0SW5zdGFuY2UgPSAodGl0bGUsIHNldHRpbmdzKSA9PiB7XG4gICAgY29uc3QgdW5pcXVlSWQgPSBpZENvdW50ZXJcbiAgICBzZXRJZENvdW50ZXIoaWRDb3VudGVyICsgMSlcbiAgICBjb25zdCBpZCA9IGhhc0N1c3RvbUlkKHNldHRpbmdzKSA/IGAke3NldHRpbmdzLmlkfS0ke3VuaXF1ZUlkfWAgOiB1bmlxdWVJZFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2V0dGluZ3MuZGVzY3JpcHRpb24sXG4gICAgICBoYXNDbG9zZUJ1dHRvbjogc2V0dGluZ3MuaGFzQ2xvc2VCdXR0b24gfHwgdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBzZXR0aW5ncy5kdXJhdGlvbiB8fCA1LFxuICAgICAgY2xvc2U6ICgpID0+IHNhZmVDbG9zZVRvYXN0KGlkKSxcbiAgICAgIGludGVudDogc2V0dGluZ3MuaW50ZW50XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgbm90aWZ5ID0gKHRpdGxlLCBzZXR0aW5ncykgPT4ge1xuICAgIGxldCB0ZW1wVG9hc3RzID0gdG9hc3RzXG4gICAgaWYgKGhhc0N1c3RvbUlkKHNldHRpbmdzKSkge1xuICAgICAgdGVtcFRvYXN0cyA9IHJlbW92ZVRvYXN0KHNldHRpbmdzLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gY3JlYXRlVG9hc3RJbnN0YW5jZSh0aXRsZSwgc2V0dGluZ3MpXG4gICAgc2V0VG9hc3RzKFtpbnN0YW5jZSwgLi4udGVtcFRvYXN0c10pXG4gIH1cblxuICBiaW5kTm90aWZ5KG5vdGlmeSlcbiAgYmluZFJlbW92ZShzYWZlQ2xvc2VUb2FzdClcbiAgYmluZEdldFRvYXN0cyhnZXRUb2FzdHMpXG4gIGJpbmRDbG9zZUFsbChjbG9zZUFsbClcblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfT5cbiAgICAgIHt0b2FzdHMubWFwKCh7IGlkLCBkZXNjcmlwdGlvbiwgLi4ucmVzdCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRvYXN0IGtleT17aWR9IG9uUmVtb3ZlPXsoKSA9PiByZW1vdmVUb2FzdChpZCl9IHsuLi5yZXN0fT5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1RvYXN0PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L3NwYW4+XG4gIClcbn0pXG5cblRvYXN0TWFuYWdlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMubm90aWZ5YCBmdW5jdGlvbi5cbiAgICovXG4gIGJpbmROb3RpZnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5yZW1vdmVgIGZ1bmN0aW9uLlxuICAgKi9cbiAgYmluZFJlbW92ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLmdldFRvYXN0c2AgZnVuY3Rpb24uXG4gICAqL1xuICBiaW5kR2V0VG9hc3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMuY2xvc2VBbGxgIGZ1bmN0aW9uLlxuICAgKi9cbiAgYmluZENsb3NlQWxsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0TWFuYWdlclxuIl19