import { Box, TextField } from '@mui/material';
import { useCallback, useEffect, useState } from 'react'

const Debounce = () => {
   const [data, setData] = useState("");
  const debounce = (fun:any, delay:any) => {
    let timer:any;
    return function (...args:any) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun(...args);
      }, delay);
    };
  };
  const handleSearch = (query:any) => {
    console.log(query);
  };
  const debouceSearch = useCallback(
    debounce(handleSearch, 500),
    []
  );

  useEffect(() => {
    debouceSearch(data);
  }, [data, debouceSearch]);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>
      <h1>Hello debounce Search</h1>
      <TextField variant='outlined' value={data} onChange={(event) => setData(event.target.value)} />
    </Box>
  );
}

export default Debounce;
