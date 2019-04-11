import React, { Component } from 'react';
import Main from './Main/Main.js';
import Header from './Header/Header.js';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Main />
            </div> 
        </BrowserRouter>
    );
  }
}

export default App;
