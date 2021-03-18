import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Intent } from '../../constants';
import { TickCircleIcon, ErrorIcon, WarningSignIcon, InfoSignIcon } from '../../icons';
/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 */

export var getIconForIntent = function getIconForIntent(intent) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (intent) {
    case Intent.SUCCESS:
      return React.createElement(TickCircleIcon, _extends({
        color: "success"
      }, props));

    case Intent.DANGER:
      return React.createElement(ErrorIcon, _extends({
        color: "danger"
      }, props));

    case Intent.WARNING:
      return React.createElement(WarningSignIcon, _extends({
        color: "warning"
      }, props));

    case Intent.NONE:
    default:
      return React.createElement(InfoSignIcon, _extends({
        color: "info"
      }, props));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvZ2V0SWNvbkZvckludGVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkludGVudCIsIlRpY2tDaXJjbGVJY29uIiwiRXJyb3JJY29uIiwiV2FybmluZ1NpZ25JY29uIiwiSW5mb1NpZ25JY29uIiwiZ2V0SWNvbkZvckludGVudCIsImludGVudCIsInByb3BzIiwiU1VDQ0VTUyIsIkRBTkdFUiIsIldBUk5JTkciLCJOT05FIl0sIm1hcHBpbmdzIjoiO0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsaUJBQXZCO0FBQ0EsU0FDRUMsY0FERixFQUVFQyxTQUZGLEVBR0VDLGVBSEYsRUFJRUMsWUFKRixRQUtPLGFBTFA7QUFPQTs7Ozs7QUFJQSxPQUFPLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsTUFBRCxFQUF3QjtBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTzs7QUFDdEQsVUFBUUQsTUFBUjtBQUNFLFNBQUtOLE1BQU0sQ0FBQ1EsT0FBWjtBQUNFLGFBQU8sb0JBQUMsY0FBRDtBQUFnQixRQUFBLEtBQUssRUFBQztBQUF0QixTQUFvQ0QsS0FBcEMsRUFBUDs7QUFDRixTQUFLUCxNQUFNLENBQUNTLE1BQVo7QUFDRSxhQUFPLG9CQUFDLFNBQUQ7QUFBVyxRQUFBLEtBQUssRUFBQztBQUFqQixTQUE4QkYsS0FBOUIsRUFBUDs7QUFDRixTQUFLUCxNQUFNLENBQUNVLE9BQVo7QUFDRSxhQUFPLG9CQUFDLGVBQUQ7QUFBaUIsUUFBQSxLQUFLLEVBQUM7QUFBdkIsU0FBcUNILEtBQXJDLEVBQVA7O0FBQ0YsU0FBS1AsTUFBTSxDQUFDVyxJQUFaO0FBQ0E7QUFDRSxhQUFPLG9CQUFDLFlBQUQ7QUFBYyxRQUFBLEtBQUssRUFBQztBQUFwQixTQUErQkosS0FBL0IsRUFBUDtBQVRKO0FBV0QsQ0FaTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEludGVudCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7XG4gIFRpY2tDaXJjbGVJY29uLFxuICBFcnJvckljb24sXG4gIFdhcm5pbmdTaWduSWNvbixcbiAgSW5mb1NpZ25JY29uXG59IGZyb20gJy4uLy4uL2ljb25zJ1xuXG4vKipcbiAqIEdldCB0aGUgcHJvcGVydGllcyBmb3IgYW4gaWNvbiBiYXNlZCBvbiB0aGUgaW50ZW50LlxuICogQHBhcmFtIHtJbnRlbnR9IGludGVudFxuICovXG5leHBvcnQgY29uc3QgZ2V0SWNvbkZvckludGVudCA9IChpbnRlbnQsIHByb3BzID0ge30pID0+IHtcbiAgc3dpdGNoIChpbnRlbnQpIHtcbiAgICBjYXNlIEludGVudC5TVUNDRVNTOlxuICAgICAgcmV0dXJuIDxUaWNrQ2lyY2xlSWNvbiBjb2xvcj1cInN1Y2Nlc3NcIiB7Li4ucHJvcHN9IC8+XG4gICAgY2FzZSBJbnRlbnQuREFOR0VSOlxuICAgICAgcmV0dXJuIDxFcnJvckljb24gY29sb3I9XCJkYW5nZXJcIiB7Li4ucHJvcHN9IC8+XG4gICAgY2FzZSBJbnRlbnQuV0FSTklORzpcbiAgICAgIHJldHVybiA8V2FybmluZ1NpZ25JY29uIGNvbG9yPVwid2FybmluZ1wiIHsuLi5wcm9wc30gLz5cbiAgICBjYXNlIEludGVudC5OT05FOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPEluZm9TaWduSWNvbiBjb2xvcj1cImluZm9cIiB7Li4ucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==