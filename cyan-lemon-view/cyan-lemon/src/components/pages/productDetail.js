import { Component } from 'react'
import '@/components/modules/detail/detail.m.scss'
import phone from '@/components/modules/svg/phone.jpeg'
import UploadFile from '../modules/detail/detailContent'
import { product } from '@/components/modules/api/upload.js'
class ProcuctDetail extends Component{
    constructor() {
        super()
        this.state = {
            productDetail: []
        }
    }
    componentDidMount() {
        product({productCode: 'A0001001'}).then((res) => {
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
                                <div>{item.productName} {item.price}￥</div>
                            </div>)
                        })}
                    </div>
                    
                    <UploadFile/>
                </div>
                </div>
                <div></div>
            </div>
        </>)
    }
}
export default ProcuctDetail