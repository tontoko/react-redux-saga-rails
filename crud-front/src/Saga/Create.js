import axios from "axios"
import { put, call, takeEvery } from 'redux-saga/effects';

const createAjax = (product) => axios.post('http://localhost:3001/products', { product })
    .then(res => {
        const data = res.data
        return {data}
    })
    .catch(error => {
        return error
    })

function* createProduct(action) {
    const {data, error} = yield call(createAjax, action.data);
    if (data) {
        // 成功したので適当なactionをdispatchして画面更新
        yield put({ type: "CREATE_SUCCEEDED", data });
    } else {
        // todo: エラーハンドリング
    }
}
export default [takeEvery("CREATE", createProduct)];

