import React from 'react'

const FormInputUI = (props) =>{
    const{placeholder,label,type,onChange,...inputProps} =props
    return(
        <div>
            <label>{label}</label>
            <input {...inputProps} placeholder={placeholder} type={type} onChange={onChange}/>
        </div>
    )
}

export default FormInputUI