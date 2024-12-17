import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

const Day12Modal = () => {
    const [show, setShow] = useState(false);
    const handleChange = () => {
        setShow(!show);
    }
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
            {
                show && (
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
                        <Paper elevation={3} sx={{ height: 100, width: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <Typography fontWeight={600}>This is the Basic Dialog modal</Typography>
                        </Paper>
                    </Box>
                )
            }
            <Button onClick={handleChange} variant='contained' color='secondary'>
                {show ? 'Hide' : 'Show'}
            </Button>
        </Box>
    )
}

export default Day12Modal