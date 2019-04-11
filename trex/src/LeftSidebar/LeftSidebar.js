import React, { Component } from 'react';
import './LeftSidebar.css';
import {  NavLink } from 'react-router-dom';

class LeftSidebar extends Component {
  render() {
    return (
      <div className="sidebar-left">

        <ul className="first-level">
                <li><NavLink  to="/home" activeClassName="selected">Introduction</NavLink></li>
                <li>
                    <input type="checkbox" id="tlbx"checked/>                        
                    <label for="tlbx">Bus Travel Experience Toolkit</label>
                    <ul className="second-level">
                        <li><NavLink  exact to="/toolkit" activeClassName="selected" className="about">Toolkit: Introduction</NavLink></li>
                        <li>
                            <input type="checkbox" id="pers"/>                        
                            <label for="pers">Passenger Archetypes</label>
                            <ul className="third-level">
                                <li><NavLink  exact to="/toolkit/personas" activeClassName="selected" className="about">Passenger Archetypes: Introduction</NavLink></li>
                                <li><NavLink  to="/toolkit/personas/edward" activeClassName="selected">Edward Enjoyer</NavLink></li>
                                <li><NavLink  to="/toolkit/personas/olivia" activeClassName="selected">Olivia Off-line</NavLink></li>
                                <li><NavLink  to="/toolkit/personas/rachel" activeClassName="selected">Rachel Relaxed</NavLink></li>
                                <li><NavLink  to="/toolkit/personas/isac" activeClassName="selected">Isac Isolation</NavLink></li>
                                <li><NavLink  to="/toolkit/personas/emma" activeClassName="selected">Emma Efficient</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <input type="checkbox" id="modl"/>                        
                            <label for="modl" >Travel Experience Model</label>
                            <ul className="third-level">
                                <li><NavLink  exact to="/toolkit/model" activeClassName="selected" className="about">Travel Experience Model: Introduction</NavLink></li>
                                <li><NavLink  to="/toolkit/model/social" activeClassName="selected">Social Context</NavLink></li>
                                <li><NavLink  to="/toolkit/model/task" activeClassName="selected">Task Context</NavLink></li>
                                <li><NavLink  to="/toolkit/model/temporal" activeClassName="selected">Temporal Context</NavLink></li>
                                <li><NavLink  to="/toolkit/model/physical" activeClassName="selected">Physical Context</NavLink></li>
                                <li><NavLink  to="/toolkit/model/digitalservices" activeClassName="selected">Digital Services</NavLink></li>
                                <li><NavLink  to="/toolkit/model/passenger" activeClassName="selected">Passenger</NavLink></li>        
                            </ul>
                        </li>
                        <li><NavLink  to="/toolkit/contextcards" activeClassName="selected">Context Cards</NavLink></li>
                        <li><NavLink  to="/toolkit/journeymap" activeClassName="selected">Passenger Journey Map</NavLink></li>
                    </ul>
            </li>
            <li><NavLink  to="/sensordata" activeClassName="selected">Bus Sensor Data</NavLink></li>

            <li><NavLink  to="/glossary" activeClassName="selected">Glossary</NavLink></li>
            <li><NavLink  to="/resources" activeClassName="selected">Resources</NavLink></li>
            <li><br/></li>            
            <li><NavLink  to="/feedback" activeClassName="selected">Feedback</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default LeftSidebar;
