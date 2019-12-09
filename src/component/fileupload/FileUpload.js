import React, {Fragment, useState } from 'react';
import axios from 'axios'
import Message from './Message'
import Progress from './Progress'

const FileUpload = () => {
    const [file,setFile] = useState('');
    const [filename,setFilename] = useState('Choose File');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        try {
            const res = await axios.post('/uploadfile',formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });
            const {fileName,filePath} =res.data;
        }catch(err){
            if(err.response.status === 500) {
                console.log('There was a problem with the server');
            }else {
                console.log(err.response.data.msg);
            }
        }
    };
}


