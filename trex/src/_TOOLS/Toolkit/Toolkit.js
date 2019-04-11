import React, { Component } from 'react';
import './Toolkit.css';
import { NavLink } from 'react-router-dom';

class Toolkit extends Component {
  render() {
    return (
      <div>
        <p className="page-title">
            Toolkit: Introduction

        </p> 

        <p className="page-descr">         
            Following materials and design tools were created and based on passenger studies that took place in Tampere and Helsinki, Finland in 2016 and conducted by Living Lab Bus staff.
        </p>
        <p className="note-useful">
            Papers and download links related to these researches can be found in <NavLink to="/resources" className="internal-link">Resources</NavLink> page.
        </p>
        <div className="toolkit-list">
            <div className="toolkit-item">
                <img src="/img/icons/persona.png" />
                <NavLink exact to="/toolkit/personas" className="item-title">Passenger archetypes</NavLink>
                <p className="item-descr">These archetypes represent several groups of passengers who share similar travel habits and age groups as well as factors that influence their travel experience. Useful for learning about potential users.</p>
            </div>
            <div className="toolkit-item">
                  <img src="/img/icons/model.png" />
                <NavLink exact to="/toolkit/model" className="item-title">Travel Experience Model</NavLink>
                <p className="item-descr"> This model describes the central experience elements – passenger, context and the system – for bus journeys. It demonstrates holistic view of travel context and its attributes that influence travel process. Useful for specifying the context of use of the future product.</p>
            </div>
            <div className="toolkit-item">
                <img src="/img/icons/cards.png" />
                <NavLink exact to="/toolkit/contextcards" className="item-title">Context Cards</NavLink>
                <p className="item-descr">Set of ten bus-specific ideation cards that can be used when ideating new service concepts for public transportation context. Useful for brainstorming ideas of the future product.</p>
            </div>
            <div className="toolkit-item">
                <img src="/img/icons/journeymap.png" />
                <NavLink exact to="/toolkit/journeymap" className="item-title">Passenger Journey Map</NavLink>
                <p className="item-descr">Also known as <NavLink to="/glossary#journeymap" className="glossary-link">customer journey map</NavLink>, this tool breaks down typical bus travel situation into set of sequential actions that also represent different touchpoints between passenger and the bus.  Useful for specifying the context of use of the future product.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Toolkit;