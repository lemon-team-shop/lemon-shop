
import React from 'react'
import Nav from '../home/nav'
import Footer from '../footer/index'
class CompGroup extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        const {title} = this.props
        document.title = title
    }
    render () {
        const {children} = this.props
        return (<div>
            {this.props.showNav && <Nav />}
            {children}
            {this.props.showFooter && <Footer />}
            
        </div>)
    }
}
export default CompGroup