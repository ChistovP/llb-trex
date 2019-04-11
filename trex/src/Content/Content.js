import React, { Component } from 'react';
import './Content.css';
import { Route,Switch } from 'react-router-dom';



import Toolkit from '../_TOOLS/Toolkit/Toolkit.js';

import Personas from '../_TOOLS/Personas/Personas.js';
import Persona from '../_TOOLS/Persona/Persona.js';
import Model from '../_TOOLS/Model/Model.js';
import ModelContext from '../_TOOLS/ModelContext/ModelContext.js';
import ContextCards from '../_TOOLS/ContextCards/ContextCards.js';
import JourneyMap from '../_TOOLS/JourneyMap/JourneyMap.js';
import SensorData from '../_TOOLS/SensorData/SensorData.js';

import Home from '../_OTHER/Home/Home.js';
import Feedback from '../_OTHER/Feedback/Feedback.js';
import Glossary from '../_OTHER/Glossary/Glossary.js';
import Resources from '../_OTHER/Resources/Resources.js';

import { SocialContext, PhysicalContext, TaskContext, TemporalContext, Passenger, DigitalServices, EdwardEnjoyer, OliviaOffline, RachelRelaxed, IsacIsolation, EmmaEfficient, SocialContextNav, PhysicalContextNav, TaskContextNav, TemporaryContextNav, DigitalNav, PassengerNav, TransportationNav} from '../data.js';

class Content extends Component {   
    
  render() {

    return (
      <Switch>
        <Route path='/toolkit/personas/edward' render={(props) => <Persona {...props} name="Edward Enjoyer" data={EdwardEnjoyer}/>}></Route>
        <Route path='/toolkit/personas/olivia' render={(props) => <Persona {...props} name="Olivia Off-line" data={OliviaOffline}/>}></Route>
        <Route path='/toolkit/personas/rachel' render={(props) => <Persona {...props} name="Rachel Relaxed" data={RachelRelaxed}/>}></Route>
        <Route path='/toolkit/personas/isac' render={(props) => <Persona {...props} name="Isac Isolation" data={IsacIsolation}/>}></Route>
        <Route path='/toolkit/personas/emma' render={(props) => <Persona {...props} name="Emma Efficient" data={EmmaEfficient}/>}></Route>
        
        <Route path='/toolkit/model/social' render={(props) => <ModelContext {...props} name="Social Context" data={SocialContext} dataNav={SocialContextNav}/>}></Route>        
        <Route path='/toolkit/model/physical' render={(props) => <ModelContext {...props} name="Physical Context" data={PhysicalContext} dataNav={PhysicalContextNav}/>}></Route>   
        <Route path='/toolkit/model/task' render={(props) => <ModelContext {...props} name="Task Context" data={TaskContext} dataNav={TaskContextNav}/>}></Route>        
        <Route path='/toolkit/model/temporal' render={(props) => <ModelContext {...props} name="Temporal Context" data={TemporalContext} dataNav={TemporaryContextNav}/>}></Route>
        <Route path='/toolkit/model/passenger' render={(props) => <ModelContext {...props} name="Passenger" data={Passenger} dataNav={PassengerNav}/>}></Route>
        <Route path='/toolkit/model/digitalservices' render={(props) => <ModelContext {...props} name="Digital Services" data={DigitalServices} dataNav={DigitalNav}/>}></Route>



        
        <Route  path='/toolkit/model' component={Model}></Route>
        <Route  path='/toolkit/contextcards' component={ContextCards}></Route>
        <Route  path='/toolkit/journeymap' component={JourneyMap}></Route>
        <Route  path='/toolkit/personas' component={Personas}></Route>

        <Route  path='/toolkit' component={Toolkit}></Route>
        
        <Route  path='/sensordata' component={SensorData}></Route>
        <Route  path='/glossary' component={Glossary}></Route>
        <Route  path='/feedback' component={Feedback}></Route>
        <Route  path='/resources' component={Resources}></Route>
        
        <Route  path='/' component={Home}></Route>

      </Switch>
    );
  }
}

export default Content;
