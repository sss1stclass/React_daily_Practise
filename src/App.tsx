import { createContext, useState } from 'react'
// import Button from '@mui/material/Button';
// import { TextField, Typography } from '@mui/material';
// import ChildC from './components/ChildC';
// import RefDemo from './components/RefDemo';
// import FormData from './components/FormData';
import { React1CheckBox } from './components/React1CheckBox';
import TestComponent from './components/TestComponent';
import Day2_Prop from './components/Day2_Prop';
import Day1 from './components/Day1';
import { Box, Typography } from '@mui/material';

const obj = {
  name:'PuzzledBird',
  Profession:'Frontend Developer',
  Experience:'2+Years'
}

const addFunctionality = createContext<any>('');
function App() {

  const [count, setCount] = useState('Hello')


  const incCont = (event: any) => {
    event.preventDefault();
    setCount(event.target.value);
  }

  return (
    <Box p={1}>

      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography variant='body1'>Day-1</Typography>
        <Day1 />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography variant='body1'>Day-2</Typography>
        <Day2_Prop  details= {obj}/>
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography variant='body1'>Day-3</Typography>
        <React1CheckBox />
      </Box>
    </Box>


    // <addFunctionality.Provider value={{ count, incCont }}>
    //   <ChildC />

    // </addFunctionality.Provider>


  )
}

export default App;
export { addFunctionality };
