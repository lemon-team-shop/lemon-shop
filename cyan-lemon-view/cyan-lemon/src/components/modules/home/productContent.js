import axios from 'axios'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import store from  '../store/store'
import phone from '../svg/phone.jpeg'
// import { connect } from 'react-redux'
console.log(store.getState())
class ProductContent extends Component{
    constructor() {
        super()
        this.state = {
            productList: store.getState().product
        }
    }
     search = async () => {
         await axios.post('http://localhost:3000/search', {}).then((res) => {
            if (res.status === 200) {
                store.dispatch({type: 'SEARCH', payload: res.data})
                this.setState({
                    productList: store.getState().product
                })
            }
        })
        
    }
    componentDidMount() {
        this.search()
        store.subscribe(() => { // state变化时监听
            this.forceUpdate() //强制刷新
            this.setState({
                productList: store.getState().product
            })
        })
        
    }
    render () {
        return (<>
            <div className="product-content">
                {this.state.productList.map((item, ind) => {
                    return(
                        <div className="each-product" key={ind}>
                            <NavLink to="/detail">
                                <div className="product-photo">
                                    <img src={phone} alt=""></img>

                                </div>
                                <div className="product-name">{item.productName}</div>
                                <div className="product-name">{item.price}￥</div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </>)
    }
}
export default ProductContent