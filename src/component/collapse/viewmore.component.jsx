import React, { Component,useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Job_Item from '../paginate/jobpost/jobitem/jobitem.component';
import JobData from '../pages/position_data';
import MONSTER_DATA from '../paginate/pagebutton/monster.data';
import PositionCollapse from '../collapse/collapse_link.component';
export default class Viewmore extends Component{
    constructor(props){
        super(props)
        this.state= {
            indexList:[], //当前渲染的页面数据
            // totalData:props.renderData,//我的数据
            totalData:JobData
        };
    }

    componentWillMount(){
        //设置总页数
        this.setState({
            indexList:this.noticeSorting()
        })
    }
    noticeSorting(){
        return(
            this.state.totalData.sort(function(a,b){
            return new Date(b.initialRegistration) - new Date(a.initialRegistration);
        }
        ))
    }
    render(){
        return (
            <div className="viewmore">
                {
                    this.state.indexList.slice(0,6).map(({id,...otherCollectionProps}) => (
                        <Job_Item key={id} {...otherCollectionProps} />
                    ))
                }
                <PositionCollapse {...this.state} />
                
            </div>
        )
    }

    
}


