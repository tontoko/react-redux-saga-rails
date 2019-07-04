import axios from "axios"
import { put, call, takeEvery } from 'redux-saga/effects';

const deleteAjax = (id) => axios.delete(`http://localhost:3001/products/${id}`)
    .then(() => {
        return {id}
    })
    .catch(error => {
        return error
    })

function* deleteProduct(action) {
    const { id, error } = yield call(deleteAjax, action.id);
    if (id) {
        yield put({ type: "DELETE_SUCCEEDED", id });
    } else {
        // todo: エラーハンドリング
    }
}
export default [takeEvery("DELETE", deleteProduct)];

