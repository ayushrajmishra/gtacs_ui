import userReducer from "./usersReducer";
import curriculumReducer from "./curriculumReducer";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    curriculumReducer
})

export default rootReducer