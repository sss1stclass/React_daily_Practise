import { TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { addFunctionality } from '../App'

const ChildA = () => {
    const {count, incCont} = useContext(addFunctionality)
  return (
    <>
    <Typography variant='h3'>ChildA hu bhai mai.. gaand faar di jyege</Typography>

    
    <Typography>{count}</Typography>
        <TextField
        value={count}
        onChange={incCont}
        fullWidth
        size='medium'
        />
    </>
  )
}

export default ChildA