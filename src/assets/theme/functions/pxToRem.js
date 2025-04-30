// pxToRem.js - converts pixel values to rem units
export default function pxToRem(number, base = 16) {
  return `${number / base}rem`;
}
