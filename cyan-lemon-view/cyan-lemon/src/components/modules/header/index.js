import React, { Component } from 'react';
import './header.m.scss'
import {Input, Button} from 'antd'
import {NavLink} from 'react-router-dom'
class Header extends Component{
    render() {
        return (<div className="cyan-lemon-header"> 
            <div className="cyan-lemon-header-center">
                <div className="lemon-header-center-logo">
                    <div className="logo">
                        <NavLink to="/">首页</NavLink>
                    </div> 
                </div>
                <div className="lemon-header-center-search">
                    <Input></Input>
                    <Button type="primary">搜索</Button>
                </div>
                <div className="lemon-header-center-login">
                    <NavLink to="/login">
                        <Button type="primary">登录/注册</Button>
                    </NavLink>
                </div>
            </div>
        </div>)
    }
}
export default Header