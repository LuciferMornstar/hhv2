import React from "react";

// Basic Configurator component placeholder
const Configurator = () => (
  <aside style={{ position: 'fixed', top: 0, right: 0, width: 300, height: '100vh', background: '#f5f5f5', boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: 16, zIndex: 100 }}>
    <h3>Settings & Customisation</h3>
    <p>Configure your dashboard and preferences here.</p>
    <ul>
      <li>Theme: Light/Dark</li>
      <li>Accessibility Options</li>
      <li>Contact Support: helpme@homeless.website</li>
      <li>Service Dogs: dogs@homeless.website</li>
      <li>Volunteer: volunteer@homeless.website</li>
      <li>Info: info@homeless.website</li>
      <li>Phone/WhatsApp: +447853811172</li>
      <li>Facebook: www.facebook.com/homelesshelpuk</li>
    </ul>
  </aside>
);

export default Configurator;
