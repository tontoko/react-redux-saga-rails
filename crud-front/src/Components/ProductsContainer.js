import React from 'react'
import ViewProduct from './ViewProduct'
import { connect } from 'react-redux'
import Actions from '../Actions/actions'
import { bindActionCreators } from 'redux'

class ProductsContainer extends React.Component {
    render() {
        return (
            <div className='productList'>
                {this.props.products.products.map((data) => {
                    return (
                        <ViewProduct data={data} key={data.id} onDelete={this.props.deleteProduct} onUpdate={this.props.updateProduct} />
                    )
                })}
            </div>
        )
    }
}

// export default ProductsContainer

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        init: () => dispatch(Actions.init())
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(Actions, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)