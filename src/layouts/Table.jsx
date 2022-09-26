import React from 'react'
import { Box, Table as MuiTable } from '@mui/material'
import { Container } from '@mui/system'

const Table = (props) => {
    return (
        <Container>
        <MuiTable>
            {props.children}
        </MuiTable>
        </Container>
    )
}

export default Table