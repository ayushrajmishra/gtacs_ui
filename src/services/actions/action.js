import {
    LOAD_USER_START,
    LOAD_USER_SUCCESS,
    LOAD_USER_ERROR
} from "../Constant";

const loadUserStart = () => {
    console.log("Load User Start  Action Called")
    return {
        type: LOAD_USER_START
    }
}

const loadUserSuccess = (users) => {
    console.log("Load User Success  Action Called")
    return {
        type: LOAD_USER_SUCCESS,
        payload: users
    }
}

const loadUserError = (error) => {
    console.log("Load User Erorr  Action Called")
    return {
        type: LOAD_USER_ERROR,
        payload: error
    }
}


export { loadUserStart, loadUserSuccess, loadUserError }