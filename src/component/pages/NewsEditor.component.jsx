import React from 'react'

import ReactQuill from 'react-quill';

import { Input } from 'antd';
import { Select } from 'antd';
import {BrowserRouter,Link,Route} from 'react-router-dom';

import Upload from './component/Upload/Upload';
import Sider from './component/sider/Sider'
import Header from './component/header/Header';


//Function Section
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

//Component Section
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value){
    this.setState({ text: value })
  }

  render() {
    return (
      <div>
        <BrowserRouter>

        <Header />

        <div className='row'>
          
          <Sider />

          <div className='container'>

            <h1 style={{'padding-top':'50px'}}>公司新闻</h1>
            
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="选择新闻类型"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="delivery">外卖</Option>
                <Option value='Comment'>点评</Option>
                <Option value="comprehensive">综合</Option>
              </Select>


              <div style={{'padding-top':"25px", 'padding-bottom':'25px'}}>
                <Upload />
              </div>


              <div style={{'padding-bottom':'25px'}}>
                <Input placeholder="新闻标题" />
              </div>


              <ReactQuill value={this.state.text}
                          onChange={this.handleChange} /> 
          </div>
        </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
          

