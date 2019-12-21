import React from 'react';

const List = (props) => (
        <div>
            <ul style={{'list-style-type': 'disc'}}>
                {props.data.filter(listData => (listData.position_id==props.current_id)).map(listData => (
                    <li className='fh_rec_det_resp' key={listData.id}>{listData.brief}</li>
                    ))
                }
            </ul>
        </ div>
    )
     
export default List;