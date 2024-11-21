import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

export const React1CheckBox = () => {
    const [selectaAll, setSelectAll] = useState({
        checkbox1:false,
        checkbox2:false,
        checkbox3:false,
        checkbox4:false,
    });

    const handleChange = () =>{
        setSelectAll({
            checkbox1:true,
            checkbox2:true,
            checkbox3:true,
            checkbox4:true,
        })
        
    }
    const handleEach = (event:any) =>{
       setSelectAll({
        ...selectaAll,
        [event.target.name] : event.target.checked,
       })
    }

    console.log(selectaAll);
  return (
    <>

    <Typography variant='h4'>
       sab sahi chl rha hai
    </Typography>
    <FormGroup>
    <FormControlLabel control={<Checkbox name='checkbox1' checked={selectaAll.checkbox1} onChange={handleEach}/>} label="checkbox1"/>
    <FormControlLabel control={<Checkbox name='checkbox2' checked={selectaAll.checkbox2} onChange={handleEach}/>} label="checkbox2" />
    <FormControlLabel control={<Checkbox name='checkbox3' checked={selectaAll.checkbox3} onChange={handleEach}/>} label="checkbox3" />
    <FormControlLabel control={<Checkbox name='checkbox4' checked={selectaAll.checkbox4} onChange={handleEach}/>} label="checkbox4" />
    </FormGroup>
    <Button onClick={handleChange} color='primary' variant='contained'>
        Select All
    </Button>


    </>
  )
}
