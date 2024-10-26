import { createContext, useState } from 'react'
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import ChildC from './components/ChildC';

const addFunctionality = createContext<any>('');
function App() {

  const [count, setCount] = useState('Hello')


  const incCont = (event: any) => {
    event.preventDefault();
    setCount(event.target.value);
  }

  return (

    <addFunctionality.Provider value={{ count, incCont }}>
      <ChildC />
    </addFunctionality.Provider>


  )
}

export default App;
export {addFunctionality};
