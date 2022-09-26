import {  takeEvery, put, delay, fork,call } from "redux-saga/effects"
import { LOAD_USER_START } from "../Constant";
import { loadUserError, loadUserSuccess } from '../actions/action'
import { loadUserAPI } from "../api/userApi";


export function* onLoadUserStartAysnc() {
    try {
      

        const response = yield call(loadUserAPI)
        console.log("Inside User saga",response)
        yield delay(500)
        yield put(loadUserSuccess(response))
    }
    catch (error) {
        yield put(loadUserError(error.response)) 
    }
}


export function* onLoadUsers() {
    console.log("Load User start saga")
    yield takeEvery(LOAD_USER_START
        , onLoadUserStartAysnc)
}


export const userSaga = [fork(onLoadUsers)]

