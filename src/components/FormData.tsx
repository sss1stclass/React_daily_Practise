import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const FormData = () => {
    const [formdata, setFormData] = useState<any>({
        name: '',
        password: ''
    });
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formdata,
            [name]: value,
        });

    }
    console.log(formdata, 'asjdf')
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formdata);
        alert(JSON.stringify(formdata, null, 2));
    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '40%', marginBottom: '10px' }}>
                <TextField
                    name='name'
                    type='text'
                    placeholder='Enter Name'
                    sx={{
                        mb: 2
                    }}
                    value={formdata.name}
                    onChange={handleChange}
                />
                <TextField name='password' type='password' value={formdata.password} onChange={handleChange} sx={{
                    mb: 2
                }} />
                <Button variant='contained' type='submit'>Submit</Button>
            </form>
        </>
    )
}

export default FormData