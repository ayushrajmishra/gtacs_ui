import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../../layouts/Form'
import { Input, Select, Button } from '../../controls'
import useForm from '../../helpers/hooks/useForm'
import createAPIEndpoint from '../../services/api/api'
import { ENDPOINTS } from '../../services/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { createCurriculumStart, loadCurriculumStart } from '../../services/actions/curriculumAction'
import Test from '../../pages/Test'

const initialModelObject = () => ({

    curriculumTypes: '',
    curriculumCode: '',
    curriculumName: ''
})


const CurriculumForm = () => {

    const { values, handleInputChange, resetFormControl } = useForm(initialModelObject())
    const [curriculumList, setCurriculumList] = useState([])
    const [curriculumData, setCurriculumData] = useState([])
    const dispatch = useDispatch()
    const { curriculum } = useSelector((store) => store.curriculumReducer)

    useEffect(() => {

        createAPIEndpoint(ENDPOINTS.CURRICULUM_TYPES).fetchAll()
            .then((res) => {
                let curriculumList = res.data.map((item) => ({
                    id: item.id,
                    title: item.title
                }))
                curriculumList = [{ id: '0', title: 'Select' }].concat(curriculumList)
                setCurriculumList(curriculumList);

            }).catch(err => console.log(err))



    }, [values])

    useEffect(() => {
        dispatch(loadCurriculumStart())
        setCurriculumData(curriculum)
        console.log("curriculum Data", curriculumData)
    }, [curriculumData])


    const handleCurriculumSubmit = (data) => {
        dispatch(createCurriculumStart(data))
        resetFormControl(initialModelObject())
        dispatch(loadCurriculumStart())
    }
    return (
        <>
            <Form >
                <Grid container>
                    <Grid item s={6} sx={{ m: 1 }}>
                        <div>
                            <Input
                                label="Curriculum Code"
                                name="curriculumCode"
                                value={values.curriculumCode}
                                onChange={handleInputChange}
                            /></div>
                        <div>
                            <Select
                                label="Curriculum Types"
                                name="curriculumTypes"
                                value={values.curriculumTypes}
                                onChange={handleInputChange}
                                options={curriculumList}
                            />
                        </div>
                    </Grid>
                    <Grid item s={6} sx={{ m: 1 }}>
                        <Input
                            label="Curriculum Name"
                            name="curriculumName"
                            value={values.curriculumName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Button
                        label="Submit"
                        size="large"
                        onClick={() => handleCurriculumSubmit(values)} />
                    <Button sx={{ mt: 1 }}
                        label="Reset"
                        size="large"
                        color="error"
                        onClick={resetFormControl} />
                </Grid>
            </Form>
            {curriculum.data ? curriculum.data.map((item) => {
                return <h1>{item.curriculumName}</h1>
            }) : ""}
            
        </>
    )
}

export default CurriculumForm