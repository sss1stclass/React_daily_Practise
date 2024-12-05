import { Box, Button, Typography } from '@mui/material';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Day1 = () => {
    const [counter, setCounter] = useState(0);
    const handleClickInc = () => {
        setCounter(counter + 1);
    }
    const handleClickDec = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }

    }
    const handleRese = () => {
        setCounter(0);
    }
    return (
        <>
            <Box display='flex' alignItems='center' justifyContent='center' p={2}>
                <Typography variant='h2'>The value of counter is <span style={{ color: 'red' }}>{counter}</span></Typography>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' p={2} >
                <Button sx={{ mr: 2 }} variant='contained' color='secondary' onClick={handleClickInc} endIcon={<AddIcon />}>
                    Icrement
                </Button>
                <Button sx={{ mr: 2 }} variant='contained' color='info' onClick={handleClickDec} endIcon={<RemoveIcon/>}>
                    Decrement
                </Button>
                <Button variant='contained' color='error' onClick={handleRese}>
                    Reset
                </Button>
            </Box>

        </>
    )
}

export default Day1;