import React ,{useEffect}from 'react'
import { useSelector } from 'react-redux'
import { loadUserStart } from '../services/actions/action'


const Test = () => {
    //const dispatch = useDispatch()
    const {curriculum} = useSelector((store)=>store.curriculumReducer)

    
    console.log("curriculum data from test component",curriculum)
  
    return (
    <div>Test</div>
  )
}

export default Test