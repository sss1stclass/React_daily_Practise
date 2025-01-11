import { Box, Button, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";

const Day15UseMemoUseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [input , setInput] = useState(0);

  const largeCalc = (num:number)=>{
    console.log('i am calling');
    for(let i =0;i<1000000000;i++){

    }
    return num*2;
  }
  const handleUseMemo = useMemo(()=>largeCalc(input),[input]);
  console.log(handleUseMemo)

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>
         <Typography>{counter}</Typography>
         <Button variant="contained" onClick={()=>setCounter(counter+1)}>Inc+</Button>
         <TextField label='input' variant="outlined" value={input} onChange={(e:any)=> setInput(e.target.value)}/>
          <Typography>{handleUseMemo}</Typography>
    </Box>
  )
}

export default Day15UseMemoUseCallback;