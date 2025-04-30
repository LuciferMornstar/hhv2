import React from "react";

// Basic Sidenav component placeholder
const Sidenav = ({ color }) => (
  <aside style={{ background: color || '#1976d2', width: 250, minHeight: '100vh', color: '#fff', padding: 16 }}>
    <h2>Navigation</h2>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Help</li>
    </ul>
    <div style={{ marginTop: 32, fontSize: 12 }}>
      <p>Contact: helpme@homeless.website</p>
      <p>Service Dogs: dogs@homeless.website</p>
      <p>Volunteer: volunteer@homeless.website</p>
      <p>Info: info@homeless.website</p>
      <p>Phone/WhatsApp: +447853811172</p>
      <p>Facebook: www.facebook.com/homelesshelpuk</p>
    </div>
  </aside>
);

export default Sidenav;
