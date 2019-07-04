import axios from "axios"

const initialState = {
    products: [],
    isFetching: false,
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE':
            return Object.assign({}, state, {
                isFetching: true,
            })
        case 'CREATE_SUCCEEDED':
            return Object.assign({}, state, {
                products: [...state.products, action.data],
                isFetching: false,
            })
        case 'UPDATE':
            return Object.assign({}, state, {
                isFetching: true,
            })
        case 'UPDATE_SUCCEEDED':
            const updateIndex = state.products.findIndex(x => x.id === action.id)
            const updatedProductsState = state.products
            updatedProductsState.splice(updateIndex, 1, action.data)
            return Object.assign({}, state, {
                products: updatedProductsState,
                isFetching: false,
            })
        case 'DELETE':
            return Object.assign({}, state, {
                isFetching: true,
            })
        case 'DELETE_SUCCEEDED':
            const deleteIndex = state.products.findIndex(x => x.id === action.id)
            const deletedProductsState = state.products
            deletedProductsState.splice(deleteIndex, 1)
            return Object.assign({}, state, {
                products: deletedProductsState,
                isFetching: false,
            })
        case 'INIT':    
            return Object.assign({}, state, {
                products: [],
                isFetching: true,
            })
        case 'INIT_SUCCEEDED':
            return Object.assign({}, state, {
                products: action.data,
                isFetching: false,
            })
        default:
            return state
    }
}