import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'antd';

import './MyUpload.component.style.css';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class MyUpload extends Component {
  
    render() {
      return (
        <Upload {...props}>
          <Button className='ft_backend_upload_button'>
            <Icon type="file-image" className='ft_backend_upload_icon' /> 
            <span className='ft_backend_upload_name'>{this.props.uploadname}</span>
          </Button>
        </Upload>
      );
    }
  }

export default MyUpload;