import React, { Component } from 'react';
import './ModelContext.css';
import { NavLink } from 'react-router-dom';

class ModelContext extends Component {
  render() {
      

      const contextNav = this.props.dataNav.map(function(item, index){
          return(
            <div className="nav" key={index}>
                <div className="prev">
                    <p>Previous context</p>   
                    <NavLink  exact to={item.prevContextLink}>{item.prevContext}</NavLink> 
                </div>
                <div className="intro">
                    <p>Learn about Travel Experience Model</p>   
                    <NavLink  exact to="/toolkit/model">Introduction</NavLink> 
                </div>
                <div className="next">
                    <p>Next context</p>   
                    <NavLink  exact to={item.nextContextLink}>{item.nextContext}</NavLink> 
                </div>
            </div>
          )
      }) 

      const contextTemplate = this.props.data.map(item =>
            <div className="context-attr" >
                <input type="checkbox" className="collapsable" id={item.collapseId} />
                <label className="attribute-title" htmlFor={item.collapseId}>{item.attributeName}</label>
                <p className="attribute-descr">{item.attributeDescr}</p>
                <div className="attribute-quote">
                      <p className="quote-title">Quotes from participants</p>
                      {item.attributeQuote}
                </div>
                <div className="context-attr-also">
                    <p className="see-also-persona">Related Passenger Archetype</p>
                    <div className="see-also-tooltip" id="persona-tooltip">
                        <i className="far fa-question-circle"></i> Listed passenger archetype is a part of Bus Travel Experience toolkit and it may be realted to this part of context. <br/><br/>
                        <i className="far fa-question-circle"></i> Check introduction to Passenger Personas to learn about these tools.
                    </div>   
                    <p className="attribute-personas">
                    {
                        Object.values(item.relatedPersonas).map(it => 
                            <div><NavLink  exact to={it.personaLink}>{it.personaName}</NavLink><br/></div>
                    )}
                    </p>  
                    <p className="see-also-sensor">Related sensor group</p>
                    <div className="see-also-tooltip" id="sensor-tooltip">
                        <i className="far fa-question-circle"></i> Listed bus sensor group and its data may provide technical details for this part of context. <br/><br/>
                        <i className="far fa-question-circle"></i> Check introduction Bus Sensor Data to learn about these tools.
                    </div>               
                    <p className="attribute-sensors">
                    {
                        Object.values(item.relatedSensors).map(it => 
                            <div><NavLink  exact to={it.sensorLink}>{it.sensorName}</NavLink><br/></div>
                    )}
                    </p>
                </div> 
            </div>

      )      
 
    return (
        
      <div className="model-context">
            <p className="page-title">
                {this.props.name}      
                <a href="/home" target="_blank" className="download-link">Download Model (PDF)</a>
            </p>
               
            {contextTemplate}

            {contextNav}
      </div>
    );
  }
}

export default ModelContext;
