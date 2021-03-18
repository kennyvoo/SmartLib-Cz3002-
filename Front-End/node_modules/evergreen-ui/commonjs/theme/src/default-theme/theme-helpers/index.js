"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextColor = exports.getFontFamily = exports.getParagraphStyle = exports.getTextStyle = exports.getHeadingStyle = exports.getIconColor = exports.getElevation = exports.getBackground = exports.getIconSizeForIconButton = exports.getIconSizeForSelect = exports.getIconSizeForInput = exports.getIconSizeForButton = exports.getTextSizeForControlHeight = exports.getBorderRadiusForControlHeight = void 0;

var _themedProperty = _interopRequireDefault(require("../utils/themedProperty"));

var _foundationalStyles = require("../foundational-styles");

var _typography = require("../typography");

/**
 * Controls include:
 * - Button
 * - IconButton
 * - TextInput
 * @param {number} height
 * @return {number} border radius
 */
var getBorderRadiusForControlHeight = function getBorderRadiusForControlHeight(height) {
  if (height <= 40) return 3;
  return 4;
};
/**
 * Get the text size for a control with a certain height.
 * @param {number} height
 * @return {number} text size of the control height.
 */


exports.getBorderRadiusForControlHeight = getBorderRadiusForControlHeight;

var getTextSizeForControlHeight = function getTextSizeForControlHeight(height) {
  if (height <= 24) return 300;
  if (height <= 28) return 300;
  if (height <= 32) return 300;
  if (height <= 36) return 400;
  if (height <= 40) return 400;
  return 500;
};
/**
 * Get the size for a icon in a Button with a certain height.
 * @param {number} height
 * @return {number} icon size
 */


exports.getTextSizeForControlHeight = getTextSizeForControlHeight;

var getIconSizeForButton = function getIconSizeForButton(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 12;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
}; // Use the same for input components.


exports.getIconSizeForButton = getIconSizeForButton;
var getIconSizeForInput = getIconSizeForButton;
exports.getIconSizeForInput = getIconSizeForInput;
var getIconSizeForSelect = getIconSizeForButton;
/**
 * Get the size for a icon in a IconButton with a certain height.
 * @param {number} height
 * @return {number} icon size
 */

exports.getIconSizeForSelect = getIconSizeForSelect;

var getIconSizeForIconButton = function getIconSizeForIconButton(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 14; // Slightly bigger than getIconSizeForButton

  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};
/**
 * Get background property.
 * @param {string} background
 * @return {string} background property.
 */


exports.getIconSizeForIconButton = getIconSizeForIconButton;

var getBackground = function getBackground(background) {
  /**
   * Return one of theme presets or the original value.
   */
  return (0, _themedProperty["default"])(_foundationalStyles.colors.background, background);
};
/**
 * Get box-shadow (elevation).
 * @param {string} level — level of elevation.
 * @return {string} elevation box-shadow.
 */


exports.getBackground = getBackground;

var getElevation = function getElevation(level) {
  /**
   * There is no fallback, undefined will be returned.
   */
  return _foundationalStyles.elevations[level];
};
/**
 * Get the color for an icon.
 * @param {string} color
 * @return {string} color of the icon
 */


exports.getElevation = getElevation;

var getIconColor = function getIconColor(color) {
  /**
   * Check if there is a preset in the theme for the icon color.
   */
  return (0, _themedProperty["default"])(_foundationalStyles.colors.icon, color);
};
/**
 * Heading styles.
 * @param {number} size - 100–900. 500 is default.
 * @return {Object} heading style.
 */


exports.getIconColor = getIconColor;

var getHeadingStyle = function getHeadingStyle(size) {
  return (0, _themedProperty["default"])(_typography.headings, String(size));
};
/**
 * Text styles for single line text.
 * This is used in the Text component. The Text component is used by:
 * - Small
 * - Strong
 * - Code
 * - ListItem
 * - Label
 * @param {number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */


exports.getHeadingStyle = getHeadingStyle;

var getTextStyle = function getTextStyle(size) {
  return (0, _themedProperty["default"])(_typography.text, String(size));
};
/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @param {number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */


exports.getTextStyle = getTextStyle;

var getParagraphStyle = function getParagraphStyle(size) {
  return (0, _themedProperty["default"])(_typography.paragraph, String(size));
};
/**
 * Get the font family. This is used to override the font family.
 * @param {string} fontFamily
 * @return {string} font family
 */


exports.getParagraphStyle = getParagraphStyle;

var getFontFamily = function getFontFamily(fontFamily) {
  /**
   * Allow for passing in a custom fontFamily not in the theme.
   */
  return (0, _themedProperty["default"])(_typography.fontFamilies, fontFamily);
};
/**
 * Get the text color. This is used to override the color.
 * @param {string} fontFamily
 * @return {string} font family
 */


exports.getFontFamily = getFontFamily;

var getTextColor = function getTextColor(color) {
  /**
   * Allow for passing in a custom text color not in the theme.
   */
  return (0, _themedProperty["default"])(_foundationalStyles.colors.text, color);
};

exports.getTextColor = getTextColor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90aGVtZS1oZWxwZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJoZWlnaHQiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJnZXRJY29uU2l6ZUZvckJ1dHRvbiIsImdldEljb25TaXplRm9ySW5wdXQiLCJnZXRJY29uU2l6ZUZvclNlbGVjdCIsImdldEljb25TaXplRm9ySWNvbkJ1dHRvbiIsImdldEJhY2tncm91bmQiLCJiYWNrZ3JvdW5kIiwiY29sb3JzIiwiZ2V0RWxldmF0aW9uIiwibGV2ZWwiLCJlbGV2YXRpb25zIiwiZ2V0SWNvbkNvbG9yIiwiY29sb3IiLCJpY29uIiwiZ2V0SGVhZGluZ1N0eWxlIiwic2l6ZSIsImhlYWRpbmdzIiwiU3RyaW5nIiwiZ2V0VGV4dFN0eWxlIiwidGV4dCIsImdldFBhcmFncmFwaFN0eWxlIiwicGFyYWdyYXBoIiwiZ2V0Rm9udEZhbWlseSIsImZvbnRGYW1pbHkiLCJmb250RmFtaWxpZXMiLCJnZXRUZXh0Q29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQVFBLElBQU1BLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsQ0FBQUMsTUFBTSxFQUFJO0FBQ2hELE1BQUlBLE1BQU0sSUFBSSxFQUFkLEVBQWtCLE9BQU8sQ0FBUDtBQUNsQixTQUFPLENBQVA7QUFDRCxDQUhEO0FBS0E7Ozs7Ozs7OztBQUtBLElBQU1DLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQUQsTUFBTSxFQUFJO0FBQzVDLE1BQUlBLE1BQU0sSUFBSSxFQUFkLEVBQWtCLE9BQU8sR0FBUDtBQUNsQixNQUFJQSxNQUFNLElBQUksRUFBZCxFQUFrQixPQUFPLEdBQVA7QUFDbEIsTUFBSUEsTUFBTSxJQUFJLEVBQWQsRUFBa0IsT0FBTyxHQUFQ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ZFByb3BlcnR5J1xuaW1wb3J0IHsgY29sb3JzLCBlbGV2YXRpb25zIH0gZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcydcbmltcG9ydCB7IGZvbnRGYW1pbGllcywgaGVhZGluZ3MsIHBhcmFncmFwaCwgdGV4dCB9IGZyb20gJy4uL3R5cG9ncmFwaHknXG5cbi8qKlxuICogQ29udHJvbHMgaW5jbHVkZTpcbiAqIC0gQnV0dG9uXG4gKiAtIEljb25CdXR0b25cbiAqIC0gVGV4dElucHV0XG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlciByYWRpdXNcbiAqL1xuY29uc3QgZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCA9IGhlaWdodCA9PiB7XG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAzXG4gIHJldHVybiA0XG59XG5cbi8qKlxuICogR2V0IHRoZSB0ZXh0IHNpemUgZm9yIGEgY29udHJvbCB3aXRoIGEgY2VydGFpbiBoZWlnaHQuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRleHQgc2l6ZSBvZiB0aGUgY29udHJvbCBoZWlnaHQuXG4gKi9cbmNvbnN0IGdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCA9IGhlaWdodCA9PiB7XG4gIGlmIChoZWlnaHQgPD0gMjQpIHJldHVybiAzMDBcbiAgaWYgKGhlaWdodCA8PSAyOCkgcmV0dXJuIDMwMFxuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMzAwXG4gIGlmIChoZWlnaHQgPD0gMzYpIHJldHVybiA0MDBcbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuIDQwMFxuICByZXR1cm4gNTAwXG59XG5cbi8qKlxuICogR2V0IHRoZSBzaXplIGZvciBhIGljb24gaW4gYSBCdXR0b24gd2l0aCBhIGNlcnRhaW4gaGVpZ2h0LlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHJldHVybiB7bnVtYmVyfSBpY29uIHNpemVcbiAqL1xuY29uc3QgZ2V0SWNvblNpemVGb3JCdXR0b24gPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMTJcbiAgaWYgKGhlaWdodCA8PSAzMikgcmV0dXJuIDEyXG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAxNlxuICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gMThcbiAgcmV0dXJuIDIwXG59XG5cbi8vIFVzZSB0aGUgc2FtZSBmb3IgaW5wdXQgY29tcG9uZW50cy5cbmNvbnN0IGdldEljb25TaXplRm9ySW5wdXQgPSBnZXRJY29uU2l6ZUZvckJ1dHRvblxuY29uc3QgZ2V0SWNvblNpemVGb3JTZWxlY3QgPSBnZXRJY29uU2l6ZUZvckJ1dHRvblxuXG4vKipcbiAqIEdldCB0aGUgc2l6ZSBmb3IgYSBpY29uIGluIGEgSWNvbkJ1dHRvbiB3aXRoIGEgY2VydGFpbiBoZWlnaHQuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IGljb24gc2l6ZVxuICovXG5jb25zdCBnZXRJY29uU2l6ZUZvckljb25CdXR0b24gPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMTJcbiAgaWYgKGhlaWdodCA8PSAzMikgcmV0dXJuIDE0IC8vIFNsaWdodGx5IGJpZ2dlciB0aGFuIGdldEljb25TaXplRm9yQnV0dG9uXG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAxNlxuICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gMThcbiAgcmV0dXJuIDIwXG59XG5cbi8qKlxuICogR2V0IGJhY2tncm91bmQgcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZFxuICogQHJldHVybiB7c3RyaW5nfSBiYWNrZ3JvdW5kIHByb3BlcnR5LlxuICovXG5jb25zdCBnZXRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZCA9PiB7XG4gIC8qKlxuICAgKiBSZXR1cm4gb25lIG9mIHRoZW1lIHByZXNldHMgb3IgdGhlIG9yaWdpbmFsIHZhbHVlLlxuICAgKi9cbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KGNvbG9ycy5iYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKVxufVxuXG4vKipcbiAqIEdldCBib3gtc2hhZG93IChlbGV2YXRpb24pLlxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIOKAlCBsZXZlbCBvZiBlbGV2YXRpb24uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGVsZXZhdGlvbiBib3gtc2hhZG93LlxuICovXG5jb25zdCBnZXRFbGV2YXRpb24gPSBsZXZlbCA9PiB7XG4gIC8qKlxuICAgKiBUaGVyZSBpcyBubyBmYWxsYmFjaywgdW5kZWZpbmVkIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqL1xuICByZXR1cm4gZWxldmF0aW9uc1tsZXZlbF1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNvbG9yIGZvciBhbiBpY29uLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbG9yIG9mIHRoZSBpY29uXG4gKi9cbmNvbnN0IGdldEljb25Db2xvciA9IGNvbG9yID0+IHtcbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZXJlIGlzIGEgcHJlc2V0IGluIHRoZSB0aGVtZSBmb3IgdGhlIGljb24gY29sb3IuXG4gICAqL1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkoY29sb3JzLmljb24sIGNvbG9yKVxufVxuXG4vKipcbiAqIEhlYWRpbmcgc3R5bGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSAxMDDigJM5MDAuIDUwMCBpcyBkZWZhdWx0LlxuICogQHJldHVybiB7T2JqZWN0fSBoZWFkaW5nIHN0eWxlLlxuICovXG5jb25zdCBnZXRIZWFkaW5nU3R5bGUgPSBzaXplID0+IHtcbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KGhlYWRpbmdzLCBTdHJpbmcoc2l6ZSkpXG59XG5cbi8qKlxuICogVGV4dCBzdHlsZXMgZm9yIHNpbmdsZSBsaW5lIHRleHQuXG4gKiBUaGlzIGlzIHVzZWQgaW4gdGhlIFRleHQgY29tcG9uZW50LiBUaGUgVGV4dCBjb21wb25lbnQgaXMgdXNlZCBieTpcbiAqIC0gU21hbGxcbiAqIC0gU3Ryb25nXG4gKiAtIENvZGVcbiAqIC0gTGlzdEl0ZW1cbiAqIC0gTGFiZWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gMzAw4oCTNTAwLiA0MDAgaXMgZGVmYXVsdC5cbiAqIEByZXR1cm4ge09iamVjdH0gdGV4dCBzdHlsZS5cbiAqL1xuY29uc3QgZ2V0VGV4dFN0eWxlID0gc2l6ZSA9PiB7XG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eSh0ZXh0LCBTdHJpbmcoc2l6ZSkpXG59XG5cbi8qKlxuICogVGV4dCBzdHlsZXMgZm9yIHBhcmFncmFwaHMgKG11bHRpIGxpbmUgdGV4dCkuXG4gKiBUaGlzIGlzIHVzZWQgaW4gdGhlIFBhcmFncmFwaC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gMzAw4oCTNTAwLiA0MDAgaXMgZGVmYXVsdC5cbiAqIEByZXR1cm4ge09iamVjdH0gdGV4dCBzdHlsZS5cbiAqL1xuY29uc3QgZ2V0UGFyYWdyYXBoU3R5bGUgPSBzaXplID0+IHtcbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KHBhcmFncmFwaCwgU3RyaW5nKHNpemUpKVxufVxuXG4vKipcbiAqIEdldCB0aGUgZm9udCBmYW1pbHkuIFRoaXMgaXMgdXNlZCB0byBvdmVycmlkZSB0aGUgZm9udCBmYW1pbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9udEZhbWlseVxuICogQHJldHVybiB7c3RyaW5nfSBmb250IGZhbWlseVxuICovXG5jb25zdCBnZXRGb250RmFtaWx5ID0gZm9udEZhbWlseSA9PiB7XG4gIC8qKlxuICAgKiBBbGxvdyBmb3IgcGFzc2luZyBpbiBhIGN1c3RvbSBmb250RmFtaWx5IG5vdCBpbiB0aGUgdGhlbWUuXG4gICAqL1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkoZm9udEZhbWlsaWVzLCBmb250RmFtaWx5KVxufVxuXG4vKipcbiAqIEdldCB0aGUgdGV4dCBjb2xvci4gVGhpcyBpcyB1c2VkIHRvIG92ZXJyaWRlIHRoZSBjb2xvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmb250RmFtaWx5XG4gKiBAcmV0dXJuIHtzdHJpbmd9IGZvbnQgZmFtaWx5XG4gKi9cbmNvbnN0IGdldFRleHRDb2xvciA9IGNvbG9yID0+IHtcbiAgLyoqXG4gICAqIEFsbG93IGZvciBwYXNzaW5nIGluIGEgY3VzdG9tIHRleHQgY29sb3Igbm90IGluIHRoZSB0aGVtZS5cbiAgICovXG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eShjb2xvcnMudGV4dCwgY29sb3IpXG59XG5cbmV4cG9ydCB7XG4gIGdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQsXG4gIGdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCxcbiAgZ2V0SWNvblNpemVGb3JCdXR0b24sXG4gIGdldEljb25TaXplRm9ySW5wdXQsXG4gIGdldEljb25TaXplRm9yU2VsZWN0LFxuICBnZXRJY29uU2l6ZUZvckljb25CdXR0b24sXG4gIGdldEJhY2tncm91bmQsXG4gIGdldEVsZXZhdGlvbixcbiAgZ2V0SWNvbkNvbG9yLFxuICBnZXRIZWFkaW5nU3R5bGUsXG4gIGdldFRleHRTdHlsZSxcbiAgZ2V0UGFyYWdyYXBoU3R5bGUsXG4gIGdldEZvbnRGYW1pbHksXG4gIGdldFRleHRDb2xvclxufVxuIl19