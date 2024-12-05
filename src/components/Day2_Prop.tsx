import { Box, Typography } from '@mui/material'


const Day2_Prop = ({details}:any) => {
 
    const {name, Profession, Experience} = details;
            
  return (
    // by using object destructuring...
    
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
    <Typography variant='h5'>Hello, {name}</Typography>
    <Typography variant='h5'>{Profession}</Typography>
    <Typography variant='h5'>{Experience}</Typography>
     
     {/* another approach for using props  */}

    {/* <Typography variant='h5'>Hello, {details.name}</Typography>
    <Typography variant='h5'>{details.Profession}</Typography>
    <Typography variant='h5'>{details.Experience}</Typography> */}
    </Box>

  )
}

export default Day2_Prop