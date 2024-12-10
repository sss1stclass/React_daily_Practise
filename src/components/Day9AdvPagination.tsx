import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { useState } from 'react';

const names = [
  'Sohil',
  'Aisha',
  'Rahul',
  'Priya',
  'Ankit',
  'Zara',
  'Aman',
  'Sneha',
  'Ravi',
  'Pooja',
  'Kabir',
  'Maya',
  'Aryan',
  'Neha',
  'Karan',
  'Sana',
  'Vivek',
  'Riya',
  'Farhan',
  'Isha'
];

const Day9AdvPagination = () => {
  const [counter, setCounter] = useState(0);

  const handleNext = () => {
    if (counter + 5 < names.length) {
      setCounter((prev) => prev + 5);
    }
  };

  const handlePrev = () => {
    if (counter - 5 >= 0) {
      setCounter((prev) => prev - 5);
    }
  };

  const data = names.slice(counter, counter + 5);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
      <Paper
        elevation={3}
        sx={{
          width: '200px',
          maxHeight: '150px',
          overflowY: 'auto',
          mt: 2,
          border: '1px solid #ccc',
          padding: '8px'
        }}
      >
        {data.map((item, index) => (
          <ul key={index}>
            <Typography>{item}</Typography>
            <Divider />
          </ul>
        ))}
      </Paper>
      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <Button
          sx={{ marginRight: 2 }}
          variant="contained"
          color="success"
          onClick={handlePrev}
          disabled={counter === 0}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={handleNext}
          disabled={counter + 5 >= names.length}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Day9AdvPagination;
