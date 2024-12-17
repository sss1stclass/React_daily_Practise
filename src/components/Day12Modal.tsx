import { Box, Button, Paper, Typography } from '@mui/material'
import { useState, useEffect, useRef } from 'react'

const Day12Modal = () => {
    const [show, setShow] = useState(false);
    const modalRef = useRef<any>(null); 

    const handleChange = () => {
        setShow(!show);
    }
    
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShow(false); // Close the modal if click is outside
            }
        };

        // Attach the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
            {
                show && (
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
                        <Paper
                            elevation={3}
                            sx={{
                                height: 100,
                                width: 300,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            ref={modalRef}
                        >
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

export default Day12Modal;
