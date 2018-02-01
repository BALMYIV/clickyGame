import React from 'react';
import './nav.css';

const Nav = ({navStatus, score, highScore}) => (

  <div className="nav-header">
    <ul>
      <li>
        <h1>ClownCards</h1>
      </li>
      <li>{navStatus}</li>
      <li>
        clowns: {score}  most clowns: {highScore}
      </li>
    </ul>
  </div>
);

export default Nav;
