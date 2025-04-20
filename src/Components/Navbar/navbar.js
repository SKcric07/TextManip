import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-left'> {/* Contains all the Logo Navbar links */}
            {/* Brand text */}
            <div className='navbar-brand'>
              <span className='Brand-text'>TextManip</span>
            </div>

            {/* Nagivation Links */}
            <div className='navbar-links'>
              <a href="/" className='nav-link'>
                Home
              </a>
              <a href="/" className='nav-link'>
                About
              </a>
              <a href="/" className='nav-link'>
                Contact Us
              </a>
            </div>
          </div>

          {/* Right-side: User logo, User name, Logout button, Dark mode Toggle */}
          <div className='navbar-right'>
            <div className='user-info'>
              <a href="/user-profile" className='user-link'>
                <div className='user-avatar'>
                  <span className='user-icon'>
                  <i className="fa-solid fa-circle-user"></i>
                  </span>
                </div>
                <span className='username'>Sanjay Kriplani</span>
              </a>
            </div>

            {/* <button className='dark-mode-toggle'>

            </button> */}

            <button className='logout-button'>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
