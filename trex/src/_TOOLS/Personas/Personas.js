import React, { Component } from 'react';
import './Personas.css';
import { NavLink } from 'react-router-dom';

class Personas extends Component {
  render() {
    return (
      <div className="personas">
        <p className="page-title">
            Passenger Archetypes: Introduction
            <a href="" target="_blank" className="download-link">Download Personas (PDF)</a>
        </p> 

        <p className="page-descr">         
                Presented archetypes, or <NavLink className="internal-link" exact to="/glossary#persona">personas</NavLink>, contains factors and traveling habbits that influence the travel experience of the specific groups of passengers these personas represent.
        </p>
          <p className="note-useful">
            These archetypes were created based on passenger research that was conducted in 2016 by Living Lab Bus researchers. Research took place in Tampere and Helsinki, Finland and involved large amount of participants. Related research paper is published at <a className="internal-link" href="https://dl.acm.org/citation.cfm?id=2996733" target="_blank">ACM DIgital Library</a>. <br/> <br/>You can familirize yourself with other researches on <NavLink className="internal-link" exact to="/resources">Resources</NavLink> page.
        </p>
        <div className="persona-list">
            <div className="persona-item">
                <img src="/img/personas/edward.png" />
                <p className="persona-name">Edward Enjoyer</p>
                <p className="persona-type">Elderly</p>
                <p className="persona-highlight">Prefers verbal conversations with fellow passengers during his daily leasure and shopping trips.</p>    
                <NavLink exact to="/toolkit/personas/edward">Details</NavLink>    
            </div>
            <div className="persona-item">
                <img src="/img/personas/olivia.png" />
                <p className="persona-name">Olivia Off-line</p>
                <p className="persona-type">Middle-age worker</p>
                <p className="persona-highlight">Travels daily, values clean and quite environment of the bus</p>
                <NavLink exact to="/toolkit/personas/olivia">Details</NavLink>
            </div>
            <div className="persona-item">
                <img src="/img/personas/rachel.png" />
                <p className="persona-name">Rachel Relaxed</p>
                <p className="persona-type">Middle-age mother</p>
                <p className="persona-highlight">Considers daily bus trips as a personal quality time. </p>
                <NavLink exact to="/toolkit/personas/rachel">Details</NavLink>     
 
            </div>
            <div className="persona-item">
                <img src="/img/personas/isac.png" />
                <p className="persona-name">Isac Isolation</p>
                <p className="persona-type">Student</p>
                <p className="persona-highlight">Usually isolates himself from the environment during his daily trips.</p>
                <NavLink exact to="/toolkit/personas/isac">Details</NavLink>    
            </div>
            <div className="persona-item">
                <img src="/img/personas/emma.png" />
                <p className="persona-name">Emma Efficient</p>
                <p className="persona-type">Student </p>
                <p className="persona-highlight">Prefers spending time on various tasks at any given moment during her daily trips.</p>
                <NavLink exact to="/toolkit/personas/emma">Details</NavLink>    
            </div>
      <br/  >
        </div>
              <div className="nav">
            <div className="prev">
                <p>Previous Tool</p>   
                <NavLink  exact to="/toolkit/journeymap">Passenger Journey Map</NavLink> 
            </div>
            <div className="intro">
                <p>Learn about Bus Travel Experience Toolkit</p>   
                <NavLink  exact to="/toolkit/">Introduction</NavLink> 
            </div>
            <div className="next">
                <p>Next tool</p>   
                <NavLink  exact to="/toolkit/model">Travel Experience Model</NavLink> 
            </div>
        </div>
      </div>
    );
  }
}

export default Personas;
