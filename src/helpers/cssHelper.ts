/**
 * CSS Helper Functions
 * @module cssHelper
 */

/**
 * When given an integer, returns a string with commas placed every 3 digits
 *
 * @param {string} color - The hexadecimal color with or without hash
 * @param {number} value - A negative (darken) or positive (lighten) number up to 100
 * @returns {string} The new hexadecimal value with or without hash based on input string
 */
export function LightenDarkenColor(color: string, value: number): string {
  let usePound: boolean = false;

  // See if # was used on color, remove from string and set flag if found
  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  // Parse number using base 16
  const num: number = parseInt(color, 16);

  // Get new red value
  let red: number = (num >> 16) + value;

  // Don't let values go above or below 0, 255
  if (red > 255) red = 255;
  else if (red < 0) red = 0;

  // Get new blue value
  let blue: number = ((num >> 8) & 0x00ff) + value;

  if (blue > 255) blue = 255;
  else if (blue < 0) blue = 0;

  let green: number = (num & 0x0000ff) + value;

  if (green > 255) green = 255;
  else if (green < 0) green = 0;

  return (
    (usePound ? "#" : "") + (green | (blue << 8) | (red << 16)).toString(16)
  );
}
