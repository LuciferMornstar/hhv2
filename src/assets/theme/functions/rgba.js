// rgba.js - creates an rgba color string from a hex color and alpha value
import hexToRgb from "./hexToRgb";

export default function rgba(color, alpha) {
  const rgb = hexToRgb(color);
  if (!rgb) return null;
  return `rgba(${rgb}, ${alpha})`;
}
