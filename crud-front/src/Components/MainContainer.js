import React from 'react'
import axios from "axios"
import update from 'react-addons-update'
import ProductsContainer from "./ProductsContainer"
import FormContainer from "./FormContainer"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { connect } from 'react-redux'
import Actions from '../Actions/actions'
import { bindActionCreators } from 'redux'


class MainContainer extends React.Component {

    componentDidMount() {
        this.props.init()
    }
    
    render() {
        if (this.props.isFetching === true) {
            return (<div />)
        } else {
            return (
                <div className='app-main'>
                    <FormContainer createProduct={this.props.create} />
                    <ProductsContainer deleteProduct={this.props.delete} updateProduct={this.props.update} />
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        init: () => dispatch(Actions.init()),
        create: (data) => dispatch(Actions.create(data)),
        update: (id, product) => dispatch(Actions.update(id, product)),
        delete: (id) => dispatch(Actions.delete(id)),
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(Actions, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)