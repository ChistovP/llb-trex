import React, { Component } from 'react';
import './Glossary.css';

class Glossary extends Component {
  render() {
    return (
      <div className="glossary">
        <p className="page-title">
            Glossary
        </p> 
        <div className="term-container">
            <div className="term">
               <h1><a className="term-anchor" id="journeymap"></a>Customer Journey Map</h1>
               <p className="term-descr">A customer journey map shows the story of the customer's experience. It not only identifies key interactions that the customer has with the organization, but it also brings user's feelings, motivations and questions for each of the touchpoints. Finally, a customer journey map has the objective of teaching organizations more about their customers.</p>
            </div>
            <div className="term">
               <h1><a className="term-anchor" id="persona"></a>Persona</h1>
               <p className="term-descr">A persona in user-centered design and marketing is a fictional character created to represent a user type that might use a site, brand, or product in a similar way.</p>
            </div>
            <div className="term">
               <h1><a className="term-anchor" id="plex"></a>Playfulness Experience Cards (PLEX)</h1>
               <p className="term-descr">The cards were created to communicate the 22 categories of the Playful Experiences (PLEX) framework to designers, researchers and other stakeholders who wish to design for playfulness.</p>
            </div>
        </div>

      </div>
    );
  }
}

export default Glossary;
