import React from 'react';

const UniversalModule = (props) => (
    <div className='position_container'>
        <h2>{props.position}</h2>
        <p>{props.brief}</p>
    </div>
);

export default UniversalModule;