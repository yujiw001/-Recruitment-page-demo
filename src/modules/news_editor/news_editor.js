import React, { Component } from 'react';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';
import MyUpload from '../../component/Upload/MyUpload.component';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { Select, Input, Checkbox } from 'antd';
import { Layout } from 'antd';

import './news_editor.style.css';

const { Content } = Layout;
const { Option } = Select;

class NewsEditor extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            type: '饭团新闻',
            lan_mark: '',
            title: '',
            cover: '', 
            content: '',
        }
        this.handleEditorChange = this.handleEditorChange.bind(this)
    }
    getCover = (newscover) =>{
        console.log(newscover);
        this.setState({
            cover:newscover
        });
        // this.setState({
        //     // cover: newscover
        //   });
    }
    handleSubmit = async event =>{
        alert('Quill was submitted: ' + this.state.content);
        event.preventDefault();
        var data = {
            user: this.state.user,
            type: this.state.type,
            lan_mark: this.state.lan_mark,
            title: this.state.title,
            cover: this.state.cover,
            content: this.state.content,
        }
        console.log(data);
        axios({
           method: 'post' ,
           url: 'http://localhost:3000/news/add', /* Need to be modified */
           data: data
        })
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          });
        
    };

    handleChange = event => {
        //event.target will end up being the input element itself. And we want to pull off the 'name and value'
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
    };

    handleCheckbox = event => {
        const{name,value} = event.target;
        if(!this.state[name].includes(value)){
            this.setState({[name]:this.state[name].concat([value])}) }//语法:this.state[name]
        else{
            this.setState({[name]:this.state[name].filter(checkbox => (checkbox != value))})
        }
    };

    handleEditorChange(value) {
        this.setState({ content: value })
      }

    modules = {
        toolbar: [
          [{'font':[]}, { 'header': [1, 2, 3, false] }, {'align':[]}],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'color':[]}, {'background':[]}],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
    
      formats = [
        'font', 'header', 'align',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'color', 'background',
        'list', 'bullet', 'indent', 
        'link', 'image'
      ];

    render() {

        const {user, type, lan_mark, title, cover, content} = this.state;

        return (
            <div>
                <Layout>
                    <MySider />
                    <Layout className='ft_backend_background'>
                        <Header />
                        <Content className='ft_backend_content'>
                            <form onSubmit={this.handleSubmit}>
                                <p className='ft_backend_title'>发布文章</p>

                                    <div className='ft_backend_single_row'>
                                        <select className='ft_backend_select' 
                                                style={{width:'191px'}} 
                                                placeholder='文章类型' 
                                                size='large' 
                                                name='type' 
                                                value={type} 
                                                onChange={this.handleChange}
                                        >
                                            <option value='饭团新闻'>饭团新闻</option>
                                            <option value='点评活动'>点评活动</option>
                                            <option value='公司动态'>公司动态</option>
                                        </select> 
                                        {/* <Select className='ft_backend_select' 
                                                    style={{width:'191px'}} 
                                                    placeholder='文章类型' 
                                                    size='large' 
                                                    name='type' 
                                                    value={type} 
                                                    onChange={this.handleChange}
                                        >
                                            <Option key='饭团新闻' value='饭团新闻'>饭团新闻</Option>
                                            <Option key='点评活动' value='点评活动'>点评活动</Option>
                                            <Option key='公司点评' value='公司动态'>公司动态</Option>
                                        </Select> */}

                                        <Checkbox name='lan_mark' value="E" onChange={this.handleChange} >
                                            英文
                                        </Checkbox>

                                        <Checkbox name='lan_mark' value="C" onChange={this.handleChange} >
                                            中文
                                        </Checkbox>
                                    </div>

                                    <div className='ft_backend_editor_rows'>
                                        <p className='ft_backend_label'>标题：</p>
                                        <Input name='title' value={title} onChange={this.handleChange} placeholder='标题' size='large' style={{width:'745px'}} required />
                                    </div> 

                                    <div className='ft_backend_upload_display'>
                                        <div className='ft_backend_upload_button_display'>
                                            <p className='ft_backend_label' style={{'padding-right':'40px'}}>封面图：</p>
                                            <MyUpload uploadname='添加封面图' Cover={this.getCover} />
                                        </div>

                                    </div>

                                    <div className='ft_backend_editor_rows'>
                                        <p className='ft_backend_label'>文章内容：</p>
                                        <div className="text-editor">
                                            <ReactQuill modules={this.modules} 
                                                        formats={this.formats} 
                                                        value={content}
                                                        onChange={this.handleEditorChange}
                                                        className='ft_backend_editor_shape'
                                            />         
                                        </div>
                                    </div>

                                    <div style={{padding:'20px 0'}} />

                                    <button type='submit' className='ft_backend_button'>发布新闻</button>

                                </form>
                            
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default NewsEditor;