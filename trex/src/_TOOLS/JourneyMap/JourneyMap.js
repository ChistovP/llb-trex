import React, { Component } from 'react';
import './JourneyMap.css';
import { NavLink } from 'react-router-dom';

class JourneyMap extends Component {
  render() {
    return (
      <div>

        <p className="page-title">
            Passenger Journey Map
            <a href="" className="download-link">Download Journey Map (PDF)</a>
        </p> 

        <p className="page-descr">         
            This map describes typical bus travel situation broken down to a set of actions and events that represent touch points between passenger (user) and bus (system).
        </p>
        <div className="journey-map">
            <a href="/img/journeymap.png" target="_blank"><img src="/img/journeymap.png"/></a>
        </div>
        <div className="nav">
            <div className="prev">
                <p>Previous Tool</p>   
                <NavLink  exact to="/toolkit/contextcards">Context Cards</NavLink> 
            </div>
            <div className="intro">
                <p>Learn about Bus Travel Experience Toolkit</p>   
                <NavLink  exact to="/toolkit/">Introduction</NavLink> 
            </div>
            <div className="next">
                <p>Next tool</p>   
                <NavLink  exact to="/toolkit/personas">Passenger Archetypes</NavLink> 
            </div>
        </div>
      </div>
    );
  }
}

export default JourneyMap;