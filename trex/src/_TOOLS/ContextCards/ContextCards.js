import React, { Component } from 'react';
import './ContextCards.css';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

let imgUrls = [
    "/img/contextcards/1.png",
    "/img/contextcards/2.png",
    "/img/contextcards/3.png",
    "/img/contextcards/4.png",
    "/img/contextcards/5.png",
    "/img/contextcards/6.png",
    "/img/contextcards/7.png",
    "/img/contextcards/8.png",
    "/img/contextcards/9.png",
    "/img/contextcards/10.png",
];

class ContextCards extends Component {
  constructor(props){
        super(props);
        this.state = {
            url: '',
            descr: ''
        }
  }

    showImage(imageSrc){
        this.setState({
            url: imageSrc,
        });
    } 
                    
  render() {
    const imageTemplate = imgUrls.map(item =>
                    <img src={item}  onClick={() => this.showImage(item)}  />        
                   )
    return (
      <div className="context-cards">
        <p className="page-title">
            Context Cards
            <a href="" target="_blank" className="download-link">Download Context Cards (PDF)</a>
        </p> 

        <p className="page-descr">         
            Context cards is a set of ten bus-specific ideation cards that can be used when ideating new service concepts for public transportation context. Context Cards can be used as a part of the initial ideation of the service design concepts, or for instance when evaluating existing service consepts.
        </p>
        
        <p className="page-descr">
            Similar to <HashLink className="internal-link" to="/glossary#plex">Playfulness Experience cards (PLEX)</HashLink>, these can be used as a part of the service development process, starting from the initial ideation activities. The tool works well in co-design sessions, providing the participants with inspirational stimuli for the creative activities.
        </p>
        <p className="note-useful">
            There is no one correct way to use the cards and thus we encourage you to try and find the best way to serve your needs. <br/><br/>
            The cards can be used all at once, one by one, or combining 2-3 cards at a time. Different combinations can produce new and novel ideas that can improve the travel experience of bus transportation!
        </p>
        <div className="gallery">
            {imageTemplate} 
        </div>
        <div className="gallery-viewer">
            <img src={this.state.url} />
        </div>

        <div className="nav">
            <div className="prev">
                <p>Previous Tool</p>   
                <NavLink  exact to="/toolkit/model">Travel Experience Model</NavLink> 
            </div>
            <div className="intro">
                <p>Learn about Bus Travel Experience Toolkit</p>   
                <NavLink  exact to="/toolkit/">Introduction</NavLink> 
            </div>
            <div className="next">
                <p>Next tool</p>   
                <NavLink  exact to="/toolkit/journeymap">Passenger Journey Map</NavLink> 
            </div>
        </div>
      </div>
    );
  }
}

export default ContextCards;
