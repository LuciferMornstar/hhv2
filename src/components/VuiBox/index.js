import React from "react";

// Basic VuiBox component as a flexible container
const VuiBox = ({ children, style, ...props }) => (
  <div style={{ padding: 16, borderRadius: 8, background: '#fff', ...style }} {...props}>
    {children}
  </div>
);

export default VuiBox;
