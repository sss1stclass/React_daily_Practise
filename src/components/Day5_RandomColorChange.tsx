import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";


const Day5_RandomColorChange = () => {

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const [color, setColor] = useState<string>('red')

  const handleClick = () => {
    setColor(getRandomColor());
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={2}>
      <Box mb={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height={60} width='20%' sx={{ backgroundColor: `${color}` }}>
        <Typography noWrap style={{ color: color === '#f050f' ? 'black' : 'white' }}>color code is:- {color}</Typography>
      </Box>
      <Button onClick={handleClick} variant="contained" color="info" >Click Meh</Button>
    </Box>
  )
}

export default Day5_RandomColorChange;