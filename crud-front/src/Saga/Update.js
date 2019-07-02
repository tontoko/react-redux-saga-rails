import axios from "axios"
import { put, call, takeEvery } from 'redux-saga/effects';

const updateAjax = (id, product) => axios.patch(`http://localhost:3001/products/${id}`, { product })
    .then(res => {
        const data = res.data
        return { data, id }
    })
    .catch(error => {
        return error
    })

function* updateProduct(action) {
    const { data, error, id } = yield call(updateAjax, action.id, action.data);
    if (data && id) {
        // 成功したので適当なactionをdispatchして画面更新
        yield put({ type: "UPDATE_SUCCEEDED", data, id });
    } else {
        // todo: エラーハンドリング
    }
}
export default [takeEvery("UPDATE", updateProduct)];

