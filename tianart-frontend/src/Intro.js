import React from 'react';
import './Intro.css';

const Intro = (props) => {
  return (
    <div className="intro">
      <div className="ui inverted top attached segment">
        <img className="ui fluid rounded image" 
             alt="Tian Art fashion" 
             src={props.image} />
        <h1 className="ui centered teal massive header">
          Tian Art
        </h1>
      </div>
      <div className="ui inverted bottom attached segment">
        <h2 className="ui centered teal header">
          The Artful Convergence of History and Fantasy
        </h2>
        <p className="ui teal small header">
          In the House of Tian Art, both art and fashion 
          are reaping ever-greater benefits from their 
          reciprocal relatioship.
        </p>
        <p className="ui teal small header">
          History and culture converge and affect us 
          every day of our lives. Tian Ai's desings 
          harmoniously bridge the traditional past with 
          a vision of the future. The wearer is offered 
          a connection to the community and a sense of 
          freedom and fantasy, a link with evolution and 
          modernity.
        </p>
      </div>
    </div>
  );
}

export default Intro;