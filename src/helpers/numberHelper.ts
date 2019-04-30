/**
 * Number Helper Functions
 * @module numberHelper
 */

/**
 * When given an integer, returns a string with commas placed every 3 digits
 *
 * @param {number} value - The integer to parse
 * @returns {string} A string with commas inserted every 3rd digit
 */
export function numberWithCommas(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
