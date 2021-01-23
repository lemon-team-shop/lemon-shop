import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home'
import Login from '../../pages/login'
class Main extends Component{
    render() {
        return (<div className="cyan-lemon-main-body">
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/login' component={Login}></Route>
            </Switch>
        </div>)
    }
}
export default Main