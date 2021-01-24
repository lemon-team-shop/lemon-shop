import {connect} from 'react-redux'
import ProductContent from './productContent'
const mapStateToProps = function(state, props) {
    return {
        product: state.product
    }
}
const mapDispatchToProps = function(dispatch) {
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContent)