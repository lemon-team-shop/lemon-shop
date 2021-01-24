import { Component } from 'react'
import '../modules/detail/detail.m.scss'
import phone from '../modules/svg/phone.jpeg'
import {DetailContent} from '../modules/detail/detailContent'
class ProcuctDetail extends Component{
    constructor() {
        super()
        this.state = {

        }
    }
    render () {
        return (<>
            <div className="lemon-product-detail">
                <div className="lemon-scale-photo">
                <div className="product-photo">
                    <img src={phone} alt=""></img>
                    <DetailContent/>
                </div>
                </div>
                <div></div>
            </div>
        </>)
    }
}
export default ProcuctDetail