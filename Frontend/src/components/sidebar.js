import React from 'react';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-dark p-3" style={{ width: '250px', marginLeft: '-15px',position: 'fixed' }}>
      <h4 className="mb-3">Menu</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Messages
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
