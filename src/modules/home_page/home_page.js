import React, { Component } from 'react';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';
import NavCard from '../../component/Card/NavCard.component';

import { Layout } from 'antd';

import './home_page.style.css';

const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <MySider />
                    <Layout className='ft_backend_backgroud'>
                        <Header />
                        <Content className='ft_backend_hp_content'>
                            <div>
                                <p className='ft_backend_hp_title'>Dashboard</p>
                                <div className='ft_backend_hp_button_group'>
                                    <NavCard 
                                        link='/Fantuan_news_editor'
                                        title='写文章' 
                                        content='新闻，点评活动类文章'
                                        img={require('../../assets/imgs/navcard_1.png')}
                                    />
                                    <NavCard 
                                        link='/Fantuan_career_editor'
                                        title='写招聘简章' 
                                        content='招聘简章'
                                        img={require('../../assets/imgs/navcard_1.png')}
                                    />
                                    <NavCard 
                                        link='/Fantuan_admin_page'
                                        title='设置' 
                                        content='管理员权限'
                                        img={require('../../assets/imgs/navcard_2.png')}
                                    />

                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default HomePage;