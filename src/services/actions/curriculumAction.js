import { CREATE_CURRICULUM,LOAD_CURRICULUM } from '../Constant'

const createCurriculumStart = (curriculum) => {
    return {
        type: CREATE_CURRICULUM.START,
        payload: curriculum
    }
}

const createCurriculumSuccess = () => {
    return { type: CREATE_CURRICULUM.SUCCESS }

}

const createCurriculumError = (error) => {
    return {
        type: CREATE_CURRICULUM.ERROR,
        payload: error
    }
}

const loadCurriculumStart = () => {
    return {
        type:LOAD_CURRICULUM.START
}
}
const loadCurriculumSuccess = (curriculum) => {
    return {
        type:LOAD_CURRICULUM.SUCCESS,
        payload:curriculum
}
}
const loadCurriculumError = (error) => {
    return {
        type:LOAD_CURRICULUM.ERROR,
        payload:error
    }
}


export {
    createCurriculumError,
    createCurriculumStart,
    createCurriculumSuccess,
    loadCurriculumStart,
    loadCurriculumSuccess,
    loadCurriculumError
}