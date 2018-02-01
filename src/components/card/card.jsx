import React from 'react';
import './card.css';

const Card = ({onCardClick, name, image, id}) => {
	
  return (

    <div className="card" onClick={ () => onCardClick(id, name) }>
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );
};
export default Card;
