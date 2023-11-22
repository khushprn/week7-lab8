// Footer.js

import React from 'react';
import './Footer.css';

const Footer = ({ text }) => {
  return (
    <footer className="footer">
      {text && <p>{text}</p>}
      {/* Additional content can be added here */}
    </footer>
  );
};

export default Footer;