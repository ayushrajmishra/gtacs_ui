import createAPIEndpoint from "./api"
import { ENDPOINTS } from "../Constant"




const loadUserAPI = async () => {
     let response = await createAPIEndpoint(ENDPOINTS.USERS).fetchAll()
     return response
}
export { loadUserAPI }