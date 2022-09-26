//import {styled } from "@mui/material";
import React from 'react'

// const useStyles = styled((theme) => ({
//     root: {
//         '& .Mui-FormControl-root': {
//             width: '90%',
//             margin: theme.spacing(1) //default value of 1 is 8px
//         }
//     }
//   }));

const Form = (props) => {
    //const classes = useStyles()
    const { children, ...other } = props
    

    return (
        <form noValidate autoComplete='off' {...other}>
            {children}
        </form> 
      )
}

export default Form