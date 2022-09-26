import createAPIEndpoint from "./api"
import { ENDPOINTS } from "../Constant"


const createCurriculumAPI = async (data) => {

     let response = await createAPIEndpoint(ENDPOINTS.CURRICULUM).create(data)
     return response

}

const loadCurriculumAPI = async () => {
     let response = await createAPIEndpoint(ENDPOINTS.CURRICULUM).fetchAll()
     return response
}
export { createCurriculumAPI, loadCurriculumAPI }