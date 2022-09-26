import React from 'react'
import { TrainingSearch, TrainingForm, TrainingTable } from '../../components/Training'


const Training = () => {
    return (
        <>
            <div>
                <TrainingSearch />
            </div>

            <div>
                <TrainingForm />
            </div>
            <div>
                <TrainingTable />
            </div>

        </>
    )
}

export default Training