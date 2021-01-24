import React, { Component } from 'react';
import '../modules/login/login.m.scss'
import {Input, Button} from 'antd'
import axios from 'axios'

class Login extends Component{
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hidden: 'hidden'
        }
    }
    login = () => {
        console.log(this.state)
        axios.post('http://localhost:3000/login',
            {   
                username: this.state.username,
                password: this.state.password
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.message)
                    console.log(res.message === '登录成功')
                    if (res.data.message === '登录成功') {
                        this.setState({
                            hidden: 'hidden'
                        })
                        this.props.history.push('/')
                    } else {
                        this.props.history.push('/login')
                        this.setState({
                            hidden: 'visible'
                        })
                    }
                }
            console.log(res)
            })
    }
    registor = () => {
        axios.post('http://localhost:3000/registor',
        { 
            username: this.state.username, 
            password: this.state.password
        }).then((res) => {
            console.log(res)
        })
    }
    changeUser = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    changePass = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (<div className="cyan-lemon-login">
            <div className="cyan-lemon-login-page">
                <h1>欢迎登录青柠檬商城!</h1>
                <div className="lemon-login-username">
                    <p>用户名：</p>
                    <Input value={this.state.username} onChange={this.changeUser} ></Input>
                </div>
                <div className="lemon-login-username">
                    <p>密码：</p>
                    <Input value={this.state.password} onChange={this.changePass} ></Input>
                    <div className={this.state.hidden}>密码错误！</div>
                </div>
                <div className="lemon-login-username">
                    <div className="login-registor">
                        <Button type="primary" onClick={this.login}>登录</Button>
                        <Button type="primary" onClick={this.registor}>注册</Button>
                    </div>
                </div>
                <div className="login-forget">忘记密码</div>
            </div>
        </div>)
    }
    
}
export default Login
