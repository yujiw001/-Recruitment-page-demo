import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'antd';

import './MyUpload.component.style.css';

function beforeUpload(file) {
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Resume must smaller than 2M!');
  }
  return isLt2M;
};

class MyUpload extends Component {
  
  state = {
    fileList: []
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
      accept: [".doc", ".docx", ".pdf", ".jpg"],
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange: this.handleChange,
    };

    return (
      <Upload 
        {...props} 
        fileList={this.state.fileList} 
        style={{display:'flex', 'align-items':'center'}}
        beforeUpload={beforeUpload}
      >
        <Button className='ft_rec_upload_button'>
          <img src={require('../../images/file-upload.png')} className='ft_rec_upload_icon' /> 
          <span className='ft_rec_upload_name'>{this.props.uploadname}</span>
        </Button>
        <div>
          <span className='ft_rec_instruction'>less than 2M.</span>
        </div>
      </Upload>
    );
  }
}

export default MyUpload;