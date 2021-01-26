import { Component } from 'react'
import '../modules/detail/detail.m.scss'
import phone from '../modules/svg/phone.jpeg'
import {DetailContent} from '../modules/detail/detailContent'
import axios from 'axios'
class ProcuctDetail extends Component{
    constructor() {
        super()
        this.state = {
            productDetail: []
        }
    }
    componentDidMount() {
        axios.post('http://localhost:3000/product', {productCode: 'A0001001'}).then((res) => {
            console.log(res)
            if (res.status === 200) {
                this.setState({
                    productDetail: res.data
                })
            }
        })
    }
    render () {
        return (<>
            <div className="lemon-product-detail">
                <div className="lemon-scale-photo">
                <div className="product-photo">
                    <div>
                        <img src={phone} alt=""></img>
                        {this.state.productDetail.map((item, ind) => {
                            return (<div style={{flex: 1}} key={ind}>
                                <div>{item.productName} {item.price}</div>
                            </div>)
                        })}
                    </div>
                    
                    <DetailContent/>
                </div>
                </div>
                <div></div>
            </div>
        </>)
    }
}
export default ProcuctDetail