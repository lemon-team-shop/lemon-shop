import React, { Component } from 'react';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'; // 引入图标

class Home extends Component{
    state = {
        current: 'mail',
    };
    render() {
        const { current } = this.state;
        return (<>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail">
                    苹果
                </Menu.Item>
                <Menu.Item key="app">
                    香蕉
                </Menu.Item>
                <Menu.Item key="alipay">
                    水蜜桃
                </Menu.Item>
            </Menu>
        </>)
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
}
export default Home