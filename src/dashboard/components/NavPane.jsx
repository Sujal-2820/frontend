import React,{ useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import "./NavPane.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function NavPane({ username }) {
  // for bootstrap functionality
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  
  const location = useLocation();

  // Define a helper function to determine if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        {/* Username display */}
        <div className="username">{username}</div>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
            className={isLinkActive('/dashboard') ? 'nav-link active' : 'nav-link'}
            to="/dashboard"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={isLinkActive('/dashboard/publish') ? 'nav-link active' : 'nav-link'}
            to="/dashboard/publish"
          >
            Publish
          </Link>
        </li>
      </ul>

          <div className='Action-buttons'>
            <button className='logout'>
              <Link className="nav-link" to="/dashboard/logout">
                Logout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavPane;
