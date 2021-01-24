import { Component } from 'react';
import CompGroup from '../modules/compConcat/compGroup'
export default class FourZeroFour extends Component {
    render() {
        return (<>
        <CompGroup showNav={false} showFooter={false} title="商城首页">
            <div>404</div>
        </CompGroup>
        </>)
    }
}