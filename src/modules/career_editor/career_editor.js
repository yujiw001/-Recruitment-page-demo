import React, { Component } from 'react';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';
import { Select, Input } from 'antd';

import { Layout, Checkbox } from 'antd';

import './career_editor.style.css';

const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

class CareerEditor extends Component {
    render() {
        return (
            <div>
                <Layout >
                    <MySider />
                    <Layout className='ft_backend_background'>
                        <Header />
                        <Content className='ft_backend_content'>
                        <div>
                            <p className='ft_backend_title'>招聘频道 > 发布职位</p>
                            <div className='ft_backend_single_row'>
                                {/* <select>
                                    <option>Vancouver</option>
                                    <option>Victoria</option>
                                    <option>Toronto</option>
                                    <option>Seattle</option>
                                </select> */}
                                <Select className='ft_backend_select' placeholder='地区' size='large'>
                                    <Option value='Vancouver'>Vancouver</Option>
                                    <Option value='Victoria'>Victoria</Option>
                                    <Option value='Toronto'>Toronto</Option>
                                    <Option value='Seattle'>Seattle</Option>
                                </Select>
                                
                                <Checkbox name="English" value="E" className=''>
                                    英文
                                </Checkbox>
                            
                                <Checkbox name="Chinese" value="C">
                                    中文
                                </Checkbox>
                                <Checkbox name="Hot" value="Hot">
                                    置顶
                                </Checkbox>
                            </div>
                            
                            <div className='ft_backend_editor_rows'>
                                <p className='ft_backend_label'>标题：</p>
                                <Input placeholder='标题' size='large' style={{width:'745px'}}/>
                            </div>
                            <div className='ft_backend_editor_rows'>
                                <p className='ft_backend_label'>职位简介：</p>
                                <TextArea placeholder='Introduction' style={{width:'745px'}} rows={5}/>
                            </div>
                            <div className='ft_backend_editor_rows'>
                                <p className='ft_backend_label'>岗位职责：</p>
                                <TextArea placeholder='Responsibilities' style={{width:'745px'}} rows={6}/>
                            </div>
                            <div className='ft_backend_editor_rows'>
                                <p className='ft_backend_label'>职位要求：</p>
                                <TextArea placeholder='Requirements' style={{width:'745px'}} rows={6}/>
                            </div>
                            <button type='submit' className='ft_backend_button'>发布职位</button>
                        </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default CareerEditor;