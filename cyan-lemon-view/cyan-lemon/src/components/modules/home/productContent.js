
import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import store from  '@/components/modules/store/store'
import phone from '@/components/modules/svg/phone.jpeg'
import { connect } from 'react-redux'
import { search } from '@/components/modules/api/upload'
console.log(store.getState())
console.log(0)

export default connect(state => ({num: state}))(class ProductContent extends Component{
    constructor() {
        super()
        this.state = {
            productList: store.getState().product
        }
    }
     searchList = async () => {
         await search({}).then((res) => {
            if (res.status === "200") {
                store.dispatch({type: 'SEARCH', payload: res.data})
                this.setState({
                    productList: store.getState().product
                })
            }
        })
        
    }
    componentDidMount() {
        this.searchList()
        store.subscribe(() => { // state变化时监听
            this.forceUpdate() //强制刷新
            this.setState({
                productList: store.getState().product
            })
        })
        
    }
    render () {
        const {num} = this.props
        console.log('99999999999999999999', num)
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
})
// export default connect(state => ({num: state}))(ProductContent)