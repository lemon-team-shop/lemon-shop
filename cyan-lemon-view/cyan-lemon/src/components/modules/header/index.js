import React, { Component } from 'react';
import './header.m.scss'
import {Input, Button} from 'antd'
import {NavLink} from 'react-router-dom'
import headPhoto from '@/components/modules/svg/head_photo.svg'
import store from '@/components/modules/store/store'
import { fuzzySearch } from '@/components/modules/api/upload'
class Header extends Component{
    constructor() {
        
        super() 
        this.state= {
            isLogin: false,
            searchValue: ''
        }
    }
    onSearch = () => {
        const param = {   
            productName: this.state.searchValue,
            productCode: '',
            price: ''
        }
        fuzzySearch(param).then((res) => {
            if (res.status === 200) {
                store.dispatch({type: 'SEARCH', payload: res.data})
            }
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
                            <img src={headPhoto} alt="头像" className="imgOne"/>
                            <img src={headPhoto} alt="头像" className="imgTwo"/>
                            <img src={headPhoto} alt="头像" className="imgThree"/>
                            <img src={headPhoto} alt="头像" className="imgFour"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default Header