import React from 'react';
// import './single_card.styles.scss'
//卡片目前有两种 一种是将被cardlist嵌套 根据数据多少生成的卡片 静态卡片
//第二种就是需要可以被后台编辑的动态卡片
const SingleCard = (props) => (
    <div className='card-container'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        {/* <img alt="img broken" src={`https://robohash.org/${props.id}?set=set2`} style={{width:180, height:180}}/> */}

    </div>
);

export default SingleCard;