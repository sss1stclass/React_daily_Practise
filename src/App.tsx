import { createContext } from 'react'
// import Button from '@mui/material/Button';
// import { TextField, Typography } from '@mui/material';
// import ChildC from './components/ChildC';
// import RefDemo from './components/RefDemo';
// import FormData from './components/FormData';
import { React1CheckBox } from './components/React1CheckBox';
import Day3_ControlledForm from './components/Day3_ControlledForm';
// import TestComponent from './components/TestComponent';
import Day2_Prop from './components/Day2_Prop';
import Day4_TogglePara from './components/Day4_TogglePara';
import Day5_RandomColorChange from './components/Day5_RandomColorChange';
import { Box, Typography } from '@mui/material';
import Day6_FetchApi from './components/Day6_FetchApi';
import Day1_CounterApp from './components/Day1_CounterApp';
import Day7_DeletableTask from './components/Day7_DeletableTask';
import Day8_AutoComplete from './components/Day8_AutoComplete';

const obj = {
  name:'PuzzledBird',
  Profession:'Frontend Developer',
  Experience:'2+Years'
}

const addFunctionality = createContext<any>('');
function App() {

  // const [count, setCount] = useState('Hello')


  // const incCont = (event: any) => {
  //   event.preventDefault();
  //   setCount(event.target.value);
  // }

  return (
    <Box p={1}>

      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-1 (Q.3  Create a functional component that displays a button. When clicked, it increments a counter.)</Typography>
        <Day1_CounterApp />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-2 (Q.3  Write a React component that receives a name prop and displays "Hello, [propPassed data]")</Typography>
        <Day2_Prop  details= {obj}/>
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-3 (Q.3 Create a form with controlled inputs: name and email. Display the values when the form is submitted)</Typography>
        <Day3_ControlledForm />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-4  (Q.4  Write a component that toggles the visibility of a paragraph when a button is clicked)</Typography>
        <Day4_TogglePara />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-5  (Q.5  Create a React component that changes its background color when a button is clicked)</Typography>
        <Day5_RandomColorChange />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-6  (Q.  Create a component that fetches and displays a list of users from a public API)</Typography>
        <Day6_FetchApi />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-7  (Q.  Create a component that renders a dynamic list of items. Each item should have a delete button to remove it from the list.)</Typography>
        <Day7_DeletableTask />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-8  (Q.  Implement a search bar that filters and displays a list of items based on user input.)</Typography>
        <Day8_AutoComplete />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-  (Q.  React question for selecting all the checkbox with one button)</Typography>
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
