import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div className="home">
    
            <img className="intro-logo" src="/img/icons/llblogo.png"></img>

            <p className="intro-subtitle">Bus Travel Experience Toolkit</p>

            <p className="intro-start"><NavLink exact to="/toolkit">Start to use</NavLink></p>

            <p className="intro-block">Portal is offering a collection of design and inspiration materials that are based on researches conducted by LLB staff as well as bus sensor data visualizations.</p>
            <p className="intro-block">The goal behind this portal is to increase the awareness of the developers about travel experience and its factors that influence passenger experience.</p>

            <div className="intro-toolkit">
                <p className="intro-subtitle">Toolkit offerings</p>
                <NavLink exact  className="intro-toolkit-icon"to="/toolkit/personas"><img src="/img/icons/persona.png"></img></NavLink>
                
                <p className="intro-toolkit-title">Passenger Archetypes</p>
                <p className="intro-toolkit-descr">Use it to learn about potential users and their habits</p>

                <NavLink exact  className="intro-toolkit-icon"to="/toolkit/model"><img src="/img/icons/model.png"></img></NavLink>
                <p className="intro-toolkit-title">Travel Experience Model</p>
                <p className="intro-toolkit-descr">Use it to learn about factors that influence travel experience</p>

                <NavLink exact  className="intro-toolkit-icon"to="/toolkit/contextcards"><img className="intro-toolkit-icon" src="/img/icons/cards.png"></img></NavLink>
                <p className="intro-toolkit-title">Context Cards</p>
                <p className="intro-toolkit-descr">Use it in brainstorm session as a thematic cards and source of inspiration</p>

                <NavLink exact  className="intro-toolkit-icon"to="/toolkit/journeymap"><img className="intro-toolkit-icon" src="/img/icons/journeymap.png"></img></NavLink>
                <p className="intro-toolkit-title">Passenger Journey Map</p>
                <p className="intro-toolkit-descr">Use it to breakdown travel situation and learn where and when exactly your application come into play</p>                
            </div>
            <div className="intro-other">
                <p className="intro-subtitle">Other offerings</p>

                <p className="intro-sensor-title">Bus Sensor Data</p>
                <NavLink exact  className="intro-toolkit-icon"to="/sensordata"><img className="intro-sensor-icon" src="/img/icons/sensor.png"></img></NavLink>
                <p className="intro-sensor-descr">Explore the technical environment of Living Lab Bus fleet of buses operating in Helsinki.</p>     

                <p className="intro-resources-title">Resources</p>
                <NavLink exact  className="intro-toolkit-icon"to="/resources"><img className="intro-resources-icon" src="/img/icons/resources.png"></img></NavLink>
                <p className="intro-resources-descr">Take a look at the collection of published papers that describe process behind the creation of the toolkit, and download materials.</p>
            </div>
        
        </div>
    );
  }
}

export default Home;
