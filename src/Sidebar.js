// Sidebar.js

import React from 'react';
import './Sidebar.css';

const Sidebar = ({ content }) => {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-content">{content}</div>
    </aside>
  );
};

export default Sidebar;