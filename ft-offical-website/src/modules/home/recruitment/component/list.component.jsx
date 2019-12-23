import React from 'react';

const List = (props) => (
        <div>
            <ul style={{'list-style-type': 'disc', padding:'0 0 0 18px', margin:'-21px 0 -15px 0'}}>
                {props.data.filter(listData => (listData.position_id==props.current_id)).map(listData => (
                    <li className='fh_rec_det_resp_req' key={listData.id}>{listData.brief}</li>
                    ))
                }
            </ul>
        </ div>
    )
     
export default List;