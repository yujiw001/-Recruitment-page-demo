import React from 'react';
import Card from '../card/card.component';
import './card_list.styles.scss';

const CardList = props => (
        
        //it's going to return every element in the array. amonster是array中的每个元素所指代的变量物件，所以拥有.property  prop是obj ，所以可以用.来调用其中元素
        <div className='card-list'>
            {props.introData.map(introduction =>(
                <Card key={introduction.id} introduction={introduction} />
            ))}
        </div>
        
    );
export default CardList;
