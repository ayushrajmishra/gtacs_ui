import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'
import React from 'react'

const Select = (props) => {
    const { name, label, value, onChange, options, error = null, ...other } = props
    return (
        <FormControl fullWidth sx={{ mt: 1, minWidth: 120 }} {...(error && { error: true })}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <MuiSelect   
                name={name}
                value={value}
                label={label}
                onChange={onChange}
                {...other}
            >
                {options.map((item) => {
                    return <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                })}
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select