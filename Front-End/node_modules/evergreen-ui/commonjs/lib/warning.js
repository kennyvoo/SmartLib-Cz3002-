"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var shownWarnings = [];

var _default = function _default(condition, warning) {
  if (condition && !shownWarnings.includes(warning)) {
    console.error("Warning: ".concat(warning));
    shownWarnings.push(warning);
  }
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd2FybmluZy5qcyJdLCJuYW1lcyI6WyJzaG93bldhcm5pbmdzIiwiY29uZGl0aW9uIiwid2FybmluZyIsImluY2x1ZGVzIiwiY29uc29sZSIsImVycm9yIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxHQUFHLEVBQXRCOztlQUVlLGtCQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBd0I7QUFDckMsTUFBSUQsU0FBUyxJQUFJLENBQUNELGFBQWEsQ0FBQ0csUUFBZCxDQUF1QkQsT0FBdkIsQ0FBbEIsRUFBbUQ7QUFDakRFLElBQUFBLE9BQU8sQ0FBQ0MsS0FBUixvQkFBMEJILE9BQTFCO0FBQ0FGLElBQUFBLGFBQWEsQ0FBQ00sSUFBZCxDQUFtQkosT0FBbkI7QUFDRDtBQUNGLEMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaG93bldhcm5pbmdzID0gW11cblxuZXhwb3J0IGRlZmF1bHQgKGNvbmRpdGlvbiwgd2FybmluZykgPT4ge1xuICBpZiAoY29uZGl0aW9uICYmICFzaG93bldhcm5pbmdzLmluY2x1ZGVzKHdhcm5pbmcpKSB7XG4gICAgY29uc29sZS5lcnJvcihgV2FybmluZzogJHt3YXJuaW5nfWApXG4gICAgc2hvd25XYXJuaW5ncy5wdXNoKHdhcm5pbmcpXG4gIH1cbn1cbiJdfQ==