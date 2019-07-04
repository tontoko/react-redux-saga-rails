import axios from "axios"
import { put, call, takeEvery } from 'redux-saga/effects';

const initAjax = () => axios.get('http://localhost:3001/products')
    .then((res) => {
        const data = res.data
        console.log(data)
        return { data }
    })
    .catch((error) => {
        return { error }
    })

function* initProduct() {
    const { data, error } = yield call(initAjax);
    console.log(data)

    if (data) {
        yield put({ type: "INIT_SUCCEEDED", data });
    } else {
        // todo: エラーハンドリング
    }
}
export default [takeEvery("INIT", initProduct)];

