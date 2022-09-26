import { takeEvery, fork, call, put,delay } from "redux-saga/effects";
import { CREATE_CURRICULUM, LOAD_CURRICULUM } from "../Constant";
import { createCurriculumAPI,loadCurriculumAPI } from '../api/curriculumApi';
// import { compose } from "redux";
import { createCurriculumSuccess, loadCurriculumSuccess } from "../actions/curriculumAction";

export function* onCreateCurriculumStartAsync({ payload }) {
    try {
       
        const response = yield call(createCurriculumAPI, payload)
        yield put(createCurriculumSuccess(response))
    } catch (error) {
        console.log(error);
    }
}

export function* onCreateCurriculum() {
    yield takeEvery(CREATE_CURRICULUM.START, onCreateCurriculumStartAsync)
}

export function* onloadCurriculumStartAsync() {
    try {
        const response = yield call(loadCurriculumAPI)
        
        yield delay(500)
        yield put(loadCurriculumSuccess(response))
    } catch (error) {
        console.log("Error while loading curriculum data", error)
    }
}

export function* onLoadCurriculum() {
    yield takeEvery(LOAD_CURRICULUM.START, onloadCurriculumStartAsync)
}

export const curriculumSaga = [fork(onCreateCurriculum),fork(onLoadCurriculum)]

