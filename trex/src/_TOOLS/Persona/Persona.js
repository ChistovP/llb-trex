import React, { Component } from 'react';
import './Persona.css';
import { NavLink } from 'react-router-dom';

class Persona extends Component {
  render() {
      
  const personaTemplate = this.props.data.map(function(item, index){
      return(
        <div  key={index}>
            <div className="persona-view">
                <div className="persona-view-left">
                    <div className="persona-avatar">
                        <img src={item.avatarLink}/>
                    </div>                
                    <div className="persona-bio">
                        {item.bio}
                    </div>
                    <div className="persona-quote">
                        "{item.quote}"
                    </div>          
                </div>
                <div className="persona-view-right">
                    <div className="persona-travels">
                        <p>Travels by bus</p>    
                        {item.travels}
                    </div> 
                    <div className="persona-mobile">
                        <p>Uses mobile device</p>             
                        {item.mobile}
                    </div> 
                    <div className="persona-needs">
                        <p>Needs related to bus journey</p>   
                        {item.needs}
                    </div>                
                    <div className="persona-other">
 
                        <div className="persona-paper">
                            <p id="related-paper">Related papers </p> 
                            <div className="paper-tooltip">
                                <i class="far fa-question-circle"></i> Listed papers describes the process of creation of the archetypes (personas) based on passenger research conducted by LLB in 2016.
                            </div>  
                            {
                                Object.values(item.relatedPapers).map(it => 
                                    <div><a href={it.paperLink} target="_blank">{it.paperTitle}</a><br/></div>
                            )}
                        </div> 
                        <div className="persona-modelcontext">
                            <p id="related-context">Related contexts </p>   
                            <div className="context-tooltip">
                                <i class="far fa-question-circle"></i> Listed contexts are parts of Travel Experience Model and may be related to this archetype.<br/><br/>
                                <i class="far fa-question-circle"></i> Check introduction to Travel Experience Model page to learn about this tool.
                            </div>
                            {
                                Object.values(item.relatedContexts).map(it => 
                                    <div><NavLink  exact to={it.contextLink}>{it.contextTitle}</NavLink><br/></div>
                            )} 
                        </div>  
                        <div className="persona-contextcard">
                            <p id="related-card">Related Context Cards </p>
                            <div className="card-tooltip">
                                <i class="far fa-question-circle"></i> Listed Context Cards describe high level idea that may be related to this archetype.<br/><br/>
                                <i class="far fa-question-circle"></i> Check Context Cards  page to learn about this tool.          
                            </div>          
                            {
                                Object.values(item.relatedCards).map(it => 
                                    <div><NavLink  exact to={it.cardLink}>{it.cardTitle}</NavLink><br/></div>
                            )} 
                        </div> 
                        <div className="persona-sensor">
                            <p id="related-sensor">Related sensor groups </p>   
                            <div className="sensor-tooltip">
                                <i class="far fa-question-circle"></i> Listed sensor groups may provide additional technical details about this archetype.<br/><br/>
                                <i class="far fa-question-circle"></i> Check Bus Sensor Data page to learn about it.          
                            </div>          
                            {
                                Object.values(item.relatedSensors).map(it => 
                                    <div><NavLink  exact to={it.sensorLink}>{it.sensorName}</NavLink><br/></div>
                            )} 
                        </div>           
                    </div> 
                </div>
            </div> 
            <div className="nav">
                <div className="prev">
                    <p>Previous archetype</p>   
                    <NavLink  exact to={item.prevPersonaLink}>{item.prevPersona}</NavLink> 
                </div>
                <div className="intro">
                    <p>Learn about Passenger Archetypes</p>   
                    <NavLink  exact to="/toolkit/personas">Introduction</NavLink> 
                </div>
                <div className="next">
                    <p>Next archetype</p>   
                    <NavLink  exact to={item.nextPersonaLink}>{item.nextPersona}</NavLink> 
                </div>
            </div>
          </div>


    )
  })      
    return (
      <div className="persona">
        <p className="page-title">
            {this.props.name}
            <a href="" target="_blank" className="download-link">Download Personas (PDF)</a>
        </p> 
        {personaTemplate}
      </div>
    );
  }
}

export default Persona;
