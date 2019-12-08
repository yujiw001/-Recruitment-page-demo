import React, { Component } from 'react';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';
import MyUpload from '../../component/Upload/MyUpload.component';
import RichTextEditor from '../../component/Editor/RichTextEditor.component';
import { Select, Input, Checkbox } from 'antd';

import { Layout } from 'antd';

import './news_editor.style.css';

const { Content } = Layout;
const { Option } = Select;

class NewsEditor extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <MySider />
                    <Layout className='ft_backend_background'>
                        <Header />
                        <Content className='ft_backend_content'>
                            <div>
                                <p className='ft_backend_title'>发布文章</p>
                                <div className='ft_backend_single_row'>
                                    {/* <select>
                                        <option>Vancouver</option>
                                        <option>Victoria</option>
                                        <option>Toronto</option>
                                        <option>Seattle</option>
                                    </select> */}
                                    <Select className='ft_backend_select' placeholder='文章类型' size='large'>
                                        <Option value='Vancouver'>饭团新闻</Option>
                                        <Option value='Victoria'>点评活动</Option>
                                        <Option value='Toronto'>公司动态</Option>
                                    </Select>
                                    <Checkbox name="English" value="E">
                                        英文
                                    </Checkbox>
                                    <Checkbox name="Chinese" value="C">
                                        中文
                                    </Checkbox>
                                </div>
                                <div className='ft_backend_editor_rows'>
                                    <p className='ft_backend_label'>标题：</p>
                                    <Input placeholder='标题' size='large' style={{width:'745px'}}/>
                                </div>
                                <div className='ft_backend_upload_display'>
                                    <div className='ft_backend_upload_button_display'>
                                        <p className='ft_backend_label' style={{'padding-right':'40px'}}>封面图：</p>
                                        <MyUpload uploadname='添加封面图' />
                                    </div>
                                    <div className='ft_backend_upload_instruction'>
                                        <span className='ft_backend_instruction'>新闻/点评：740 x 510 , 500k以内</span>
                                        <span className='ft_backend_instruction'>动态：860 x 440 , 500k以内</span>
                                    </div>
                                </div>
                                <div className='ft_backend_editor_rows'>
                                    <p className='ft_backend_label'>文章内容：</p>
                                    <RichTextEditor />
                                </div>
                                <div style={{padding:'20px 0'}} />
                                <button type='submit' className='ft_backend_button'>发布新闻</button>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default NewsEditor;