import axios from 'axios'

// const loadUserApi = async () =>{
//     await axios.get('http://localhost:5000/users')
//     //console.log("inside api call",data.data)
// }
// export {loadUserApi}

const BASE_URL='http://localhost:5000/'

const createAPIEndpoint = (endpoint) =>{
 let url = BASE_URL+ endpoint+ "/"

    return{
        fetchAll: ()=>axios.get(url),
        fetchById: (id)=>axios.get(url+id),
        create:(data)=>axios.post(url,data),
        update:(id,updatedData)=>axios.put(url+id,updatedData),
        delete:(id)=>axios.delete(url+id)

    }
}

export default createAPIEndpoint