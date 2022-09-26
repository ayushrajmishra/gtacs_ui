import {useState} from 'react'

const useForm = (initialModelObject) => {
    const [values, setValues] = useState(initialModelObject)
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log(values)
        setValues({
            ...values,
            [name]: value
        })
    }
    const resetFormControl = () =>{
        setValues(initialModelObject)
    }
  
    return  {
        values,setValues,handleInputChange,resetFormControl
    }
}

export default useForm