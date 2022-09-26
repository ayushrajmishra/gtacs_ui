//import { CREATE_CURRICULUM_ERROR, CREATE_CURRICULUM_START, CREATE_CURRICULUM_SUCCESS } from '../Constant'
import {CREATE_CURRICULUM, LOAD_CURRICULUM} from '../Constant'

const initialState = {
    curriculum: [],
    loading: false,
    error: null
}

const curriculumReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CURRICULUM.START:
            return {
                ...state,
                loading: true   
            }
        case CREATE_CURRICULUM.SUCCESS:
            return {
                ...state,
                loading: false
            }
        case CREATE_CURRICULUM.ERROR:
            return {
                ...state,
                loading: false
            }
        case LOAD_CURRICULUM.START:
            return{
                ...state,
                loading:true
            }
        case LOAD_CURRICULUM.SUCCESS:
            return{
                ...state,
                curriculum:action.payload,
                loading:false
            }        
        case LOAD_CURRICULUM.ERROR:
            return{
                ...state,
                error:action.error,
                loading:false
            }    
            default:
                return state;   
    }
}

export default curriculumReducer