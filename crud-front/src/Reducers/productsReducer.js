import axios from "axios"

const initialState = {
    products: [],
    test : '',
    isFetching: false,
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST':
            return Object.assign({}, state, {
                test: 'testだよ'
            })
        case 'CREATE':
            return Object.assign({}, state, {
                isFetching: true,
            })
        case 'CREATE_SUCCEEDED':
            console.log(action)
            return Object.assign({}, state, {
                products: [...state.products, action.data],
                test: 'testニュー',
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
            console.log(updatedProductsState)
            return Object.assign({}, state, {
                products: updatedProductsState,
                test: 'testアプデ',
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
                test: 'testさくじょ',
                isFetching: false,
            })
        case 'INIT':    
            return Object.assign({}, state, {
                products: [],
                test: '',
                isFetching: true,
            })
        case 'INIT_SUCCEEDED':
            return Object.assign({}, state, {
                products: action.data,
                test: 'testなう',
                isFetching: false,
            })
        default:
            return state
    }
}