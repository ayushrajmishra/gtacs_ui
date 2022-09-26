import {
    LOAD_USER_START,
    LOAD_USER_SUCCESS,
    LOAD_USER_ERROR
} from "../Constant";
const initialState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_START:
          
            return {
                ...state,
                loading: true
            }
        case LOAD_USER_SUCCESS:
            
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case LOAD_USER_ERROR:
           
            return {
                ...state,
                loading: false,
                error: action.error
            }  
        

        default:
            return state;
    }
}

export default userReducer;