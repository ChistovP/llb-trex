import React, { Component } from 'react';
import './Resources.css';

class Resources extends Component {
  render() {
    return (
      <div>
        <p className="page-title">
            Resources

        </p> 
        <div className="resources">
            <p>Public transportation</p>
            <ul>
                <li>
                    <a href="https://dl.acm.org/citation.cfm?id=2987677" target="_blank">
                        <i className="fas fa-external-link-alt"></i> Improving Attractiveness of Public Transportation with Interactive Experiences (2016)
                    </a>
                </li>
            </ul>

            <p>Passenger experience</p>
            <ul>
                <li>
                    <a href="https://dl.acm.org/citation.cfm?id=2996733" target="_blank">
                        <i className="fas fa-external-link-alt"></i> User Needs and Expectations for Future Traveling Services in Buses (2016)
                    </a>
                </li>
                <li>
                    <a href="https://dl.acm.org/citation.cfm?id=3131092" target="_blank">
                        <i className="fas fa-external-link-alt"></i> Development of context cards: a bus-specific ideation tool for co-design workshops (2017) 
                    </a>
                </li>
                <li>
                    <a href="https://dl.acm.org/citation.cfm?id=3282916" target="_blank">
                        <i className="fas fa-external-link-alt"></i> Travel Experience Toolkit: Bus-Specific Tools for Digital Service Design (2018)
                    </a>
                </li>
                <li>
                    <a href="https://dl.acm.org/citation.cfm?id=3275120" target="_blank">
                        <i className="fas fa-external-link-alt"></i> Modeling Bus Travel Experience to Guide the Design of Digital Services for the Bus Context (2018)
                    </a>
                </li>
            </ul>


            <p>Design and inspiration materials</p>
            <ul>
                <li>
                    <a href="../docs/LLBDesignmaterials.pdf" target="_blank">
                        <i className="fas fa-download"></i> Bus Travel Experience model 
                    </a>
                </li>                        
                <li>
                    <a href="../docs/LLBDesignmaterials.pdf" target="_blank">
                        <i className="fas fa-download"></i> Passenger Personas 
                    </a>
                </li> 
                <li>
                    <a href="../docs/contextcards.pdf" target="_blank">
                       <i className="fas fa-download"></i> Context Cards
                    </a>
                </li>                        
                <li>
                    <a href="../docs/journeymap.pdf" target="_blank">
                       <i className="fas fa-download"></i> Passenger Journey Map
                    </a>
                </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Resources;
