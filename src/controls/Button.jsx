import React from 'react'
import { Button as MuiButton } from '@mui/material'
const Button = (props) => {
    const { variant, label, color, size, onClick, ...other } = props
    return (
        <MuiButton
            variant={variant || "contained"}
            color={color || "primary"}
            size={size}
            onClick={onClick}
            {...other}>
            {label}
        </MuiButton>
    )
}

export default Button