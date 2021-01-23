import React from 'react';
import { Menu } from 'antd';
class Nav extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    render () {
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
}
export default Nav