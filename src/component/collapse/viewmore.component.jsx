import React, { Component,useState } from 'react';
import Job_Item from '../paginate/jobpost/jobitem/jobitem.component';
import JobData from '../pages/position_data';
import PositionCollapse from '../collapse/collapse_link.component';

export default class Viewmore extends Component{
    constructor(props){
        super(props)
        this.state= {
            indexList:[], //当前渲染的页面数据
            // totalData:props.renderData,//我的数据
            totalData:JobData,
            totalPositions:JobData.length
        };
    }

    componentWillMount(){
        //设置总页数
        this.setState({
            indexList:this.noticeSorting()
        })
    }
    //思路：首先用find把有加急标签的元素给挑出来，然后用filter把这些元素去除掉后进行时间排序，然后再把挑出来的元素append到数列头部？？
    //可以用传统loop来完成上述操作吗？？？
    
    noticeSorting(){
        return(
            this.state.totalData.sort(function(a,b){
            return new Date(b.initialRegistration) - new Date(a.initialRegistration);
        }
        ))
    }
    // noticeSorting(){
    //     return(
            
    //         this.state.totalData.find(data => data.id==this.state.current_id);
    //         this.state.totalData.sort(function(a,b){
    //         return new Date(b.initialRegistration) - new Date(a.initialRegistration);
    //     }
    //     ))
    // }
    render(){
        return (
            <div className="viewmore">
                <div className='fh_rec_title'>
                    <h3 className='fh_rec_find'>Find open roles</h3> 
                    <span className='fh_rec_open'>{this.state.totalPositions} open roles</span>
                </div>
                {
                    this.state.indexList.slice(0,6).map(({...otherCollectionProps}) => (
                        <Job_Item  {...otherCollectionProps} />
                    ))
                }
                <PositionCollapse {...this.state} />
                
            </div>
        )
    }

    
}


