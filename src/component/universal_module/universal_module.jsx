import React from 'react';

const UniversalModule = (props) => {
    let ItemComponent = props.ItemComponent;
    return(
        <div className='position_container'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <ItemComponent />
        </div>
    )
    }

export default UniversalModule;