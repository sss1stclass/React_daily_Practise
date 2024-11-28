import { createContext, useState } from 'react'
// import Button from '@mui/material/Button';
// import { TextField, Typography } from '@mui/material';
// import ChildC from './components/ChildC';
// import RefDemo from './components/RefDemo';
// import FormData from './components/FormData';
import { React1CheckBox } from './components/React1CheckBox';
import TestComponent from './components/TestComponent';
import Day1 from './components/day1';

const addFunctionality = createContext<any>('');
function App() {

  const [count, setCount] = useState('Hello')


  const incCont = (event: any) => {
    event.preventDefault();
    setCount(event.target.value);
  }

  return (
        <Day1/>
    // <addFunctionality.Provider value={{ count, incCont }}>
    //   <ChildC />

    // </addFunctionality.Provider>


  )
}

export default App;
export { addFunctionality };
