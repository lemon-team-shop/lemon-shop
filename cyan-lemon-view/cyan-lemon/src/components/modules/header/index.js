import React, { Component } from 'react';
import './header.m.scss'
import {Input, Button} from 'antd'
import {NavLink} from 'react-router-dom'
import headPhoto from '../svg/head_photo.svg'
import axios from 'axios'
class Header extends Component{
    constructor() {
        super() 
        this.state= {
            isLogin: false,
            searchValue: ''
        }
    }
    onSearch = () => {
        axios.post('http://localhost:3000/search', {product: this.state.searchValue}).then((res) => {
            console.log(res)
        })
    }
    changValue = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }
    render() {
        return (<div className="cyan-lemon-header"> 
            <div className="cyan-lemon-header-center">
                <div className="lemon-header-center-logo">
                    <div className="logo">
                        <NavLink to="/">首页</NavLink>
                    </div> 
                </div>
                <div className="lemon-header-center-search">
                    <Input value={this.state.searchValue} onChange={this.changValue}></Input>
                    <Button type="primary" onClick={this.onSearch}>搜索</Button>
                </div>
                <div className="lemon-header-center-login">
                    <NavLink to="/login">
                        {this.state.isLogin ? 
                        <Button type="primary">登录/注册</Button> :
                        <Button type="primary">退出</Button>}
                    </NavLink>
                    <div className="header-button-photo">
                        <div className="headPhoto">
                            <img src={headPhoto} alt="头像"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default Header