/**
 * Helper function to convert any valid hex code to rgb value
 * @param {*} hex a value denoting a valid hex code
 * @returns the corresponding rgb value for that hex code
 */
const hexToRgb = (hex) => {
  const HEX_REGEXP = /^#[0-9A-Fa-f]{6}$/i;
  if (!HEX_REGEXP.test(hex)) return [];

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
};

// should be [ 0, 180, 0 ]
// console.log(hexToRgb("#008000"));
