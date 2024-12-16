import ChildC from './components/ChildC';
// import RefDemo from './components/RefDemo';
// import FormData from './components/FormData';
import { React1CheckBox } from './components/React1CheckBox';
import Day3_ControlledForm from './components/Day3_ControlledForm';
import Day2_Prop from './components/Day2_Prop';
import Day4_TogglePara from './components/Day4_TogglePara';
import Day5_RandomColorChange from './components/Day5_RandomColorChange';
import { Box, Typography } from '@mui/material';
import Day6_FetchApi from './components/Day6_FetchApi';
import Day1_CounterApp from './components/Day1_CounterApp';
import Day7_DeletableTask from './components/Day7_DeletableTask';
import Day8_AutoComplete from './components/Day8_AutoComplete';
import Day9AdvPagination from './components/Day9AdvPagination';
import Day10DropDown from './components/Day10DropDown';
import Day11InfinteScrolling from './components/Day11InfinteScrolling';
import { InfiniteApiProvider } from './components/context/InfiniteApiContext';

const obj = {
  name: 'PuzzledBird',
  Profession: 'Frontend Developer',
  Experience: '2+Years'
}

function App() {

  return (
    <Box p={1}>

      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-1 (Q  Implement a custom hook that manages a counter and persists its value in localStorage)</Typography>
        <Day1_CounterApp />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-2 (Q  Write a React component that receives a name prop and displays "Hello, [propPassed data]")</Typography>
        <Day2_Prop details={obj} />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-3 (Q Create a form with controlled inputs: name and email. Display the values when the form is submitted)</Typography>
        <Day3_ControlledForm />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-4  (Q  Write a component that toggles the visibility of a paragraph when a button is clicked)</Typography>
        <Day4_TogglePara />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-5  (Q  Create a React component that changes its background color when a button is clicked)</Typography>
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
        <Typography mb={1} variant='body1'>Day-9  (Q. Write a React component that implements pagination for a list of items.)</Typography>
        <Day9AdvPagination />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-10  (Q.  Create a Component that Uses the Context API to Provide a Theme (Light/Dark) to Child Components)</Typography>
        <ChildC />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-11  (Q.  Implement a Simple Dropdown Component)</Typography>
        <Day10DropDown />
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-11  (Q.  Implement an Infinite Scrolling Component with API Data Fetching.)</Typography>
        <InfiniteApiProvider>
          <Day11InfinteScrolling />
        </InfiniteApiProvider>
      </Box>
      <Box mb={2} sx={{ border: '2px solid black' }}>
        <Typography mb={1} variant='body1'>Day-  (Q.  React question for selecting all the checkbox with one button)</Typography>
        <React1CheckBox />
      </Box>
    </Box>
  )
}

export default App;
