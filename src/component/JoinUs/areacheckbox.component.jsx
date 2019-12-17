import React from 'react';
import { Input, Checkbox } from 'antd';
const AreaCheckBox = (props) => (
    <div className='checkbox-container'>
        <Checkbox style={{margin:0, padding:0}} >
            <span className='ft_driver_box_label'>{props.LocationValue}</span>
        </Checkbox>
    </div>
);

export default AreaCheckBox;