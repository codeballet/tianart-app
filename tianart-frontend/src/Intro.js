import React from 'react';
import './Intro.css';

const Intro = (props) => {
  return (
    <div className="intro">
      <div className="ui container">
        <div className="ui padded grid center aligned">
          <div className="ui one column row">
            <h1 className="ui teal header">Tian Art</h1>
          </div>
          <div className="ui one column row">
            <img alt="Tian Art fashion" src={props.image} />
          </div>
          <div className="ui one column row">
            <h2 className="ui teal header">The Artful Convergence of History and Fantasy</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;