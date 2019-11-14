import React from 'react';
import './Intro.css';

const Intro = (props) => {
  return (
    <div className="ui inverted segment">
      <img className="ui rounded centered image" 
            alt="Tian Art fashion" 
            src={props.image} />
      <h1 className="ui massive centered teal header">
        Tian Art
      </h1>
      <h2 className="ui centered teal header">
        The Artful Convergence of History and Fantasy
      </h2>
      <p className="ui small teal header">
        In the House of Tian Art, both art and fashion 
        are reaping ever-greater benefits from their 
        reciprocal relatioship.
      </p>
      <p className="ui small teal header">
        History and culture converge and affect us 
        every day of our lives. Tian Ai's desings 
        harmoniously bridge the traditional past with 
        a vision of the future. The wearer is offered 
        a connection to the community and a sense of 
        freedom and fantasy, a link with evolution and 
        modernity.
      </p>
    </div>
  );
};

export default Intro;