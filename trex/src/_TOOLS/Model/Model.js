import React, { Component } from 'react';
import './Model.css';
import { NavLink } from 'react-router-dom';

class Model extends Component {
  render() {
    return (
      <div>
        <p className="page-title">
            Travel Experience Model: Introduction
            <a href="" target="_blank" className="download-link">Download Model (PDF)</a>
        </p> 

        <p className="page-descr">         
            Bus Travel Experience Model is a visual description of possible contexts and factors that may affect travel experience in general. Each of the presented blocks contains attrubites and subthemes that details the context and includes descriptions and quotes from passengers.
        </p>
        <p className="note-useful">
            Model simply maps the knowledge collected during passenger experiences and is not meant to be used in actual development.
        </p>
        <div  className="model">
            <p className="model-title">Bus (Context)</p>
            <div className="context">
                <NavLink exact to="/toolkit/model/social" className="context-title">Social Context</NavLink>
                <p className="context-sub">Fellow passengers</p>
                <p className="context-sub">Disruptive behaviour</p>
                <p className="context-sub">Social encounters with unfamiliar people</p>
                <p className="context-sub">Bus driver</p> 
            </div>
            <div className="context">
                <NavLink exact to="/toolkit/model/task" className="context-title">Task Context</NavLink>
                <p className="context-sub">Actions and routines</p>
                <p className="context-sub">Peak hours and traffic jams</p>
                <p className="context-sub">Driver’s actions</p>     
            </div>
            <div className="context">
                  <NavLink exact to="/toolkit/model/temporal" className="context-title">Temporal Context</NavLink>
                <p className="context-sub">Time of day</p>
                <p className="context-sub">Length of the trip</p>
    
            </div>
            <div className="context">
                <NavLink exact to="/toolkit/model/physical" className="context-title">Physical Context</NavLink>
                <p className="context-sub">Air quality</p>
                <p className="context-sub">Cleanliness of the interior</p>
                <p className="context-sub">Soundscape of the bus</p>
                <p className="context-sub">The state and model of the vehicle</p>
            </div>
            <div className="context" id="digital">
                <NavLink exact to="/toolkit/model/digitalservices" className="context-title">Digital Services (System)</NavLink>
                <p className="context-link">Used by <b>Passenger</b></p>
                <p className="context-sub">Journey planning</p>
                <p className="context-sub">Entertainment</p>
                <p className="context-sub">Social media</p>
                <p className="context-sub">Other digital tasks</p>    
            </div>
            <div className="context" id="system">
                <p className="context-title" id="pub">Public Transportation (System)</p>
                <p className="context-link">Involves <b>Passenger</b> as a system user</p>
                <p className="context-sub" id="bus">Bus transportation system (lines, timetables, etc)</p>
                <p className="context-sub" id="comms">Communication of travel information</p>      
            </div>
            <div className="context" id="passenger">
                    <NavLink exact to="/toolkit/model/passenger" className="context-title">Passenger (User)</NavLink>
                    <p className="context-link">Uses <b>Digital Services</b></p>
                    <p className="context-sub">Mood (Automatic, Relaxed, (Un)social, Confident)</p>
                    <p className="context-sub">Motivations (Carefree, Affordable, Quick and easy)</p>
                    <p className="context-sub">Ecological value</p>    
            </div>
        </div>
      <br/><br/>
        <div className="nav">
            <div className="prev">
                <p>Previous Tool</p>   
                <NavLink  exact to="/toolkit/personas">Passenger Archetypes</NavLink> 
            </div>
            <div className="intro">
                <p>Learn about Bus Travel Experience Toolkit</p>   
                <NavLink  exact to="/toolkit/">Introduction</NavLink> 
            </div>
            <div className="next">
                <p>Next tool</p>   
                <NavLink  exact to="/toolkit/contextcards">Context Cards</NavLink> 
            </div>
        </div>
      </div>
    );
  }
}

export default Model;
