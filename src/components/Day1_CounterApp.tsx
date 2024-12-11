import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import usePersistedCounter from './hooks/usePersistedCounter';

const Day1_CounterApp = () => {
    const { handleDec, handleInc, handleReset, counter } = usePersistedCounter();

    return (
        <>
            <Box display='flex' alignItems='center' justifyContent='center' p={2}>
                <Typography variant='h2'>The value of counter is <span style={{ color: 'red' }}>{counter}</span></Typography>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' p={2} >
                <Button sx={{ mr: 2 }} variant='contained' color='secondary' onClick={handleInc} endIcon={<AddIcon />}>
                    Increment
                </Button>
                <Button sx={{ mr: 2 }} variant='contained' color='info' onClick={handleDec} endIcon={<RemoveIcon />}>
                    Decrement
                </Button>
                <Button variant='contained' color='error' onClick={handleReset}>
                    Reset
                </Button>
            </Box>

        </>
    )
}

export default Day1_CounterApp;