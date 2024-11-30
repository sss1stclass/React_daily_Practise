import { Password } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Day3_ControlledForm = () => {
    const [data, setData] = useState({
        name: '',
        password: '',
        email:''
    });

    const handleClick = (event: any) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(JSON.stringify(data, null, 2));
        setData({
            name: '',
            password: '',
            email:''
        })
    }



    return (
        <form onSubmit={handleSubmit}>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <TextField sx={{ mb: 1 }} variant="outlined" label='Name' name='name' value={data.name} onChange={handleClick} />
                <TextField type='password' sx={{ mb: 1 }} variant="outlined" label='Password' name='password' value={data.password} onChange={handleClick} />
                <TextField type='email' variant="outlined" label='Email' name='email' value={data.email} onChange={handleClick} />
                <Box mt={1} mb={1} display='flex' justifyContent='center' alignItems='center'>
                    <Button type='submit' variant='contained'>Submit</Button>
                </Box>

            </Box>
        </form>
    )
}

export default Day3_ControlledForm;