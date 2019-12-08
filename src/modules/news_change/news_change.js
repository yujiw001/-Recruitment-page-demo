import React, { Component } from 'react';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';

import { Layout } from 'antd';
import NewsEditor from '../news_editor/news_editor';

//import './home_page.style.css';

const { Content } = Layout;

class NewsChange extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <MySider />
                    <Layout className='ft_backend_background'>
                        <Header />
                        <Content className='ft_backend_content'>
                            <p className='ft_backend_title'>新闻频道</p>
                            <div className='ft_backend_change_rows'>
                                <div className='ft_backend_single_row'>
                                    <button type='submit' className='ft_backend_white_button'>编辑</button>
                                    <div style={{padding: '0 4px'}} />
                                    <button type='submit' className='ft_backend_white_button'>删除</button>
                                </div>

                            </div>
                            
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default NewsChange;