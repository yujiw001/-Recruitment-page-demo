import { Input, Checkbox } from 'antd';
import React, { Component } from 'react';

class AreaCheckBox extends Component {

    constructor(props){
        super(props);

        this.state = {
            preferredArea:[]
        };
    }


    handleCheckbox = event => {
        // let {DesiredArea} = this.props.preferredArea
        // let {town} = this.props.value
        const{name,value} = event.target;
        if(!this.state.preferredArea.includes(value)){
            this.setState({preferredArea:this.state.preferredArea.concat([value]) }, ()=>{
                this.props.getArea(this.state.preferredArea)
            }) 
            
            
        }   
        else{
            this.setState({preferredArea:this.state.preferredArea.filter(checkbox => (checkbox != value))} , ()=>{
                this.props.getArea(this.state.preferredArea)
            })
        }

        
    }

    render() {
        //const checked=this.props.click
        return(
            <div className='checkbox-container'>
                <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'200px'}}  value={this.props.locationValue} onClick={this.handleCheckbox} /* checked={checked}*/ >
                    <span className='ft_driver_box_label'>{this.props.locationValue}</span>
                </Checkbox>
            </div>
        );
    }
}

export default AreaCheckBox;
// const AreaCheckBox = (props) => (
//     <div className='checkbox-container'>
//         <Checkbox style={{margin:0, padding:0}} >
//             <span className='ft_driver_box_label'>{props.value}</span>
//         </Checkbox>
//     </div>
// );

// export default AreaCheckBox;
