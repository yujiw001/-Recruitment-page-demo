import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'antd';

import './MyUpload.component.style.css';

class MyUpload extends Component {
  
  state = {
    fileList: [
      {
        uid: '-1',
        name: "",
        status: "",
        url: "",
      }
    ]
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-1);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  render() {

    const props = {
      accept: [".png", ".jpg", ".jpeg"],
      action: " ",
      onChange: this.handleChange,
    };

    return (
      <Upload 
        {...props} 
        fileList={this.state.fileList} 
        style={{display:'flex', 'align-items':'center'}}>
        <Button className='ft_backend_upload_button'
      >
          <Icon type="file-image" className='ft_backend_upload_icon' /> 
          <span className='ft_backend_upload_name'>{this.props.uploadname}</span>
        </Button>
        <div>
          <span className='ft_backend_instruction'>新闻/点评：740 x 510 , 500k以内</span>
          <span className='ft_backend_instruction'>动态：860 x 440 , 500k以内</span>
        </div>
      </Upload>
    );
  }
}

export default MyUpload;