import React, { Component } from 'react'
import ReactQuill from 'react-quill';

import './RichTextEditor.component.style.css';

class RichTextEditor extends Component {
  constructor(props){
      super(props);
      this.state = { text: '' }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
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
      return (
        <div>
          <div className="text-editor">
            <ReactQuill modules={this.modules} 
                        formats={this.formats} 
                        value={this.state.text}
                        onChange={this.handleChange}
                        className='ft_backend_editor_shape'
            />         
          </div>
        </div>
      );
    }
}

  export default RichTextEditor;