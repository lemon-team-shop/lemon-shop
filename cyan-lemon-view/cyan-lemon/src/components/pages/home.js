import React, { Component } from 'react';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'; // 引入图标
import Nav from '../modules/home/nav'
import MenuOfHome from '../modules/home/menu'
import '../modules/home/home.m.scss'
class Home extends Component{
    state = {
        current: 'mail',
    };
    render() {
        return (<>
            <div style={{height: '48px'}}>
                <Nav/>
            </div>
            <div style={{flex: 1, overflow: 'auto'}}>
                <MenuOfHome/>
            </div>
        </>)
    }

}
export default Home