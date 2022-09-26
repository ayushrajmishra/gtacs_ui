import { curriculumSaga } from "./curriculumSaga";
import { userSaga } from "./userSaga";
import {all} from 'redux-saga/effects'

export default function* rootsaga() {
    yield all([...userSaga,...curriculumSaga])
}