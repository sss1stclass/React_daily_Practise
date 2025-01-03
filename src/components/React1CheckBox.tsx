import { Box, Button, Checkbox, FormControlLabel, FormGroup} from '@mui/material'
import { useState } from 'react'

export const React1CheckBox = () => {
    const [selectaAll, setSelectAll] = useState<any>({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
    });

    const handleChange = () => {
        const checkedState = Object.keys(selectaAll).reduce((acc: any, key: any) => {
            acc[key] = true;
            return acc;
        }, {})
        setSelectAll(checkedState);

    }
    const handleEach = (event: any) => {
        const { name, checked }: any = event.target;
        setSelectAll({
            ...selectaAll,
            [name]: checked,
        })
    }

    console.log(Object.keys(selectaAll));
    return (
        <>
            <Box p={2}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox name='checkbox1' checked={selectaAll.checkbox1} onChange={handleEach} />} label="checkbox1" />
                    <FormControlLabel control={<Checkbox name='checkbox2' checked={selectaAll.checkbox2} onChange={handleEach} />} label="checkbox2" />
                    <FormControlLabel control={<Checkbox name='checkbox3' checked={selectaAll.checkbox3} onChange={handleEach} />} label="checkbox3" />
                    <FormControlLabel control={<Checkbox name='checkbox4' checked={selectaAll.checkbox4} onChange={handleEach} />} label="checkbox4" />
                </FormGroup>
                <Button onClick={handleChange} color='primary' variant='contained'>
                    Select All
                </Button>

            </Box>
        </>
    )
}
