import { Box, Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { addFunctionality } from '../App'

const ChildA = () => {
  const { ThemeProvideer, toggleTheme, handleClick } = useContext(addFunctionality);
  const lightTheme = {
    backgroundColor: 'white',
    color: 'black',
  };

  const themeStyles = toggleTheme ? ThemeProvideer : lightTheme;

  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={2}>
        <Box style={themeStyles} display='flex' flexDirection='column' alignItems='center' justifyContent='center' sx={{ height: 200, width: 400, border: '2px solid black' }}>
          <Typography mb={3}>This is a Toggle dark/light Theme</Typography>
          <Button onClick={handleClick} variant='contained' color='warning'>{!toggleTheme ? 'Dark' : 'Light'}</Button>

        </Box>
      </Box>

    </>
  )
}

export default ChildA;

// https://www.dailymotion.com/video/x92wydo  