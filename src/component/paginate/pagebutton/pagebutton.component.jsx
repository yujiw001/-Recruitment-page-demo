import React,{ Component } from "react";
import style from "./pagebutton.styles.scss";
export default class Pagination extends Component{
    constructor(props){
        super(props)
        this.state= {
            pageCurr:1,
        }
    }

    create(){
        const {
            totalPage,
        } = this.props.config;

        const {
            pageCurr,
        } = this.state;

        let pages = [];
        pages.push(<li onClick = { this.goPrev.bind(this) } className = { this.state.pageCurr === 1? "nomore":"" } key={0}>上一页</li>)
        
        for(let i = 1;i <= totalPage; i++){
            // 点击页码时调用 go 方法，根据 state 判断是否应用 active 样式
            pages.push(<li onClick = { this.go.bind(this,i) } className = { pageCurr === i ? "active": "" } key={i}>{i}</li>)
        }

        pages.push(<li onClick = { this.goNext.bind(this) } className = { this.state.pageCurr === totalPage? "nomore":"" } key={totalPage + 1}>下一页</li>)
        return pages;
    }
    goPrev(){
        let {
            pageCurr,
        } = this.state;
    
        if(--pageCurr === 0){
            return;
        }
    
        this.go(pageCurr)
    }

    goNext(){
        let {
            pageCurr,
        } = this.state;
    
        const {
            totalPage,
        } = this.props.config;
    
        if(++pageCurr > totalPage){
            return;
        }
        this.go(pageCurr)
    }

    go(pageCurr){
        this.setState({
            pageCurr
        })
    }

    render(){
        const Pages = this.create.bind(this)();
        return(
            <div className = "pagination">
                <ul className = { "page" }>
                    { Pages }
                </ul>
            </div>
        );
    }
}

// import React from 'react';

// class pageButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.setNext=this.setNext.bind(this);
//         this.setUp=this.setUp.bind(this);
//         this.state={
//             num: 0,
//             pagenum:this.props.current
//         }
//     }

//     //下一页
//     setNext(){
//         if(this.state.pagenum < this.props.totalPage){
//             this.setState({
//                 num:this.state.num + this.props.pageSize,
//                 pagenum:this.state.pagenum + 1
//             },function () {
//                 console.log(this.state)
//                 this.props.pageNext(this.state.num)
//             })
//         }
//     }

//     //上一页
//     setUp(){
//         if(this.state.pagenum > 1){
//             this.setState({
//                 num:this.state.num - this.props.pageSize,
//                 pagenum:this.state.pagenum - 1
//             },function () {
//                 console.log(this.state)
//                 this.props.pageNext(this.state.num)
//             })
//         }
//     }

//     render() {
//         return (
//             <div className="change_page">
//                 <span onClick={ this.setUp } >上一页</span>
//                 <span>{ this.state.pagenum }页/ { this.props.totalPage }页</span>
//                 <span onClick={ this.setNext }>下一页</span>
//             </div>
//         );
//     }
// }
