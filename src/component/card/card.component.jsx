import React from 'react';
import './card.styles.scss'
const Card = (props) => (
    <div className='card-container'>
        <h2>{props.introduction.title}</h2>
        <p>{props.introduction.content}</p>
        {/* <img alt="img broken" src={`https://robohash.org/${props.id}?set=set2`} style={{width:180, height:180}}/> */}

    </div>
);

export default Card;