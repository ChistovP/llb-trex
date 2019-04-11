import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">Content</div>
        <div className="header-logo">LLB Bus Travel Experience Toolkit</div>
        <a href="https://llb.sis.uta.fi/portal/" target="_blank">Developer Portal</a>
        <a href="http://livinglabbus.fi" target="_blank">About Living Lab Bus</a>
      </div>
    );
  }
}

export default Header;
