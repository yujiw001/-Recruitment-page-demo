import React from 'react';

const List = (props) => (
    <ul>
         {props.jobdata.map(listData =>
             (<li key={listData.id}>{listData.brief}</li>))}
    </ul>
)
 


export default List;