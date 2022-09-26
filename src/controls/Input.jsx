import { TextField } from '@mui/material'
import React from 'react'

const Input = (props) => {
  const{variant,label,name,value,placeholder,onChange,error=null,...other} = props
    return (
    <TextField 
    id="outlined-basic"
    variant={variant || "outlined"}
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...other}
    {...(error && {error:true, helperText:error})}
    />
  )
}

export default Input