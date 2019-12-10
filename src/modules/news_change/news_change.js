import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';

import { Layout, Select, Icon, Button } from 'antd';

const { Content } = Layout;
const { Option } = Select; 

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

                            <div className='ft_backend_change_button_row'>
                                <div className='ft_backend_change_row_section'>
                                    <button type='submit' className='ft_backend_white_button'>编辑</button>
                                    <div style={{padding: '0 4px'}} />
                                    <button type='submit' className='ft_backend_white_button'>删除</button>
                                </div>
                                <div className='ft_backend_change_row_section' >
                                    <span className='ft_backend_label'>筛选：</span>
                                    <Select className='ft_backend_select' style={{margin:0}} placeholder='类型' size='large'>
                                        <Option value='Vancouver'>饭团新闻</Option>
                                        <Option value='Victoria'>点评活动</Option>
                                        <Option value='Toronto'>公司动态</Option>
                                    </Select>
                                    <div style={{padding: '0 5px'}} />
                                    <Link to='/Fantuan_news_editor'>
                                        <Button className='ft_backend_change_button'>
                                            <Icon type="edit" className='ft_backend_change_button_icon' /> 
                                            <span className='ft_backend_change_button_name'>发布新闻</span>
                                        </Button>
                                    </Link>
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