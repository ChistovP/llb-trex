import React, { Component } from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar.js';
import Content from '../Content/Content.js';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <LeftSidebar />
        <Content />
 
      </div>
    );
  }
}

export default Main;
