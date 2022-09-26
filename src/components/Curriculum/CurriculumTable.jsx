import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import Table from '../../layouts/Table'
const CurriculumTable = () => {
    const { curriculum } = useSelector((store) => store.curriculumReducer)


    console.log("curriculum data from CurriculumTable component", curriculum)

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Curriculum Name</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Incident</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>IT</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default CurriculumTable