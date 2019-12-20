import React, { Component, useState } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';//引入动画库
import './Test09CssTransition.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.handleToggle=this.handleToggle.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
        this.state = { 
            show:true,
            list:[]
         }
    }
    render() { 
        return ( 
            <div>
             {/* <Fragment> */}
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}//动画执行持续时间毫秒
                    classNames='fade'//动画类名
                    unmountOnExit//可选，当动画出场后在页面上移除包裹的dom节点
                    onEntered={(el)=>{//el指的是div内部元素
                        el.style.color='blue'
                    }}
                    appear={true}//第一次展示的时候也要现实动画效果
                >
                    <div>hello</div>
                </CSSTransition>
                {/* 列表里所有的列表都要显示动画效果 */}
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                // 在每个具体的动画要加CSSTransition
                                <CSSTransition
                                //当使用TransitionGroup时，就不在需要in这个属性了
                                    timeout={1000}
                                    classNames='fade'//动画类名
                                    unmountOnExit
                                    onEntered={((el)=>{el.style.color='blue'})}
                                    appear={true}
                                    key={index+item}
                                >
                                <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleToggle}>toggle</button>
                <button onClick={this.handleAddItem}>handleAddItem</button>
             {/* </Fragment> */}
            </div>
         );
    }
    handleToggle(){
        let show = this.state.show;
        this.setState({
            show:!show
        })
    }
    handleAddItem(){
        this.setState((prevState)=>{
            return{
                list:[...prevState.list,'item']
            }
        },()=>{//数据更新完成之后回调函数
            console.log(this.state.list)
        })
    }
}
 
export default App;
