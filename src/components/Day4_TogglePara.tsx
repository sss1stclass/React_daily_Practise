import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const styles = {
    paragraph: {
      border: '2px solid black',
      padding: '3px',
      marginBottom: '10px',
    },

  };


const Day4_TogglePara = () => {
    const [show, setShow] = useState(true);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={2}>
                {
                    show && (
                        <Typography style={styles.paragraph}>This is a toggled paragraph that hides and show on click of button</Typography>
                    )
                }

                <Button variant="contained" color="info" onClick={handleClick}>{!show ? 'Show' : 'Hide'}</Button>
            </Box>
        </>
    )
}

export default Day4_TogglePara;