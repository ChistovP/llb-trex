import React, { Component } from 'react';
import './Feedback.css';


class Feedback extends Component {
  render() {
    return (
      <div className="feedback">
        <p className="page-title">
            Feedback

        </p> 

        <p className="page-descr">         
            Description
        </p>
        <p className="note-useful">
            * Something useful
        </p>
      </div>
    );
  }
}

export default Feedback;
