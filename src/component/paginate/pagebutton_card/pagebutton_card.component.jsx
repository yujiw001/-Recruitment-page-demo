import React,{ Component } from "react";
import style from "./pagebutton_card.styles.scss";
// import Job_Data from "../jobpost/jobitem/job.data";

import Card from "../../card/card.component";
import IntroducionData from "../../pages/introduction_data";
const data= IntroducionData;
export default class PaginationCard extends Component{
    constructor(props){
        super(props)
        this.state= {
            indexList:[], //当前渲染的页面数据
            totalData:props.renderData,//我的数据
            pageCurr:1, //当前页码
            pageSize:2,//每页显示的条数
            goValue:0, //要去的条数index
            totalPage:0,//总页数
        };
    }
    
    componentWillMount(){
        //设置总页数
        this.setState({
            totalPage:Math.ceil( this.state.totalData.length/this.state.pageSize),
            indexList:this.state.totalData.slice(0,this.state.pageSize)
        })
        
    }
    setPage(num){
        this.setState({
            indexList:this.state.totalData.slice((num-1)*(this.state.pageSize),(num-1)*(this.state.pageSize)+this.state.pageSize) //slice(start,end) 将会返回一个indexList的array，用此array的数据来渲染页面
        },() => console.log(this.state.indexList))
        }
    create(){
        // 返回标记 如欲返回与app.jss解开注释
        // const {
        //     totalPage,
        // } = this.props.config;
        //血的教训：内部state不要在方程里二次赋值！直接使用即可
        // const {
        //     totalPage,
        // } = this.state.totalPage;

        let pages = [];
        pages.push(<li onClick = { this.goPrev.bind(this) } className = { this.state.pageCurr === 1? "nomore":"" } key={0}>上一页</li>)
        for(let i = 1;i <= this.state.totalPage; i++){
            // 点击页码时调用 go 方法，根据 state 判断是否应用 active 样式
            pages.push(<li onClick = { this.go.bind(this,i) } className = { this.state.pageCurr === i ? "active" : "" } key={i}>{i}</li>)
        }

        pages.push(<li onClick = { this.goNext.bind(this) } className = { this.state.pageCurr === this.state.totalPage? "nomore":"" } key={this.state.totalPage + 1}>下一页</li>)
        return pages;
    }
    goPrev(){
        //当页码为1则无法前进
        if(this.state.pageCurr === 1){
            return;
        }
        this.go(--this.state.pageCurr);
    }

    goNext(){
        if(this.state.pageCurr === this.state.totalPage){
            return;
        }
        this.go(++this.state.pageCurr);
    }
    //重要！react是异步更新的，所以这边setState之后不会立刻更新数据 setpage读的还会是旧的数据， 解决异步用callback()
    go(newCurr){
        this.setState({
            pageCurr:newCurr,
        },()=>{this.setPage(this.state.pageCurr)});
        // this.setPage(this.state.pageCurr);
    }
    render(){
        const Pages = this.create.bind(this)();
        let Total = this.state.totalData.length;
        const ItemComponent = this.props.ItemComponent;
        // const {collections}= this.state.totalData;
        return(
            <div className = "pagination">
                <div className = "JobHead">
                    <h3>Find open roles</h3> 
                    <span>{Total}open roles</span>
                </div>
                {
                        this.state.indexList.map(({id,...otherCollectionProps}) => (
                        <ItemComponent key={id} {...otherCollectionProps} />
                    ))
                }
                <ul className = { "page" }>
                    { Pages }
                </ul>
                
            </div>
        );
    }
}
