import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { upload } from '../api/upload';
class UploadFile extends React.Component{
    constructor() {
        super()
        this.state ={
            fileList: [],
        }
    }
    handleChange = (info) => {
        console.log(info)
        let fileList = [...info.fileList];
    
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);
    
        // 2. Read from response and show file link
        fileList = fileList.map(file => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
          }
          return file;
        });
        this.setState({ fileList });
        console.log(fileList)
    }
    uploadFile = () => {
      console.log(0)
      console.log(this.state.fileList)
      const cbform = new FormData();
      console.log('///////////////?????', this.state.fileList)
      this.state.fileList.forEach((item) => {
        cbform.append('file', item)
        console.log(cbform)
      })
      upload(cbform)
    }
    render() {
        return (<div>
            <Upload fileList={this.state.fileList} onChange={this.handleChange}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <button onClick={this.uploadFile}>导入</button>
          </div>
        );
    }
}
export default UploadFile