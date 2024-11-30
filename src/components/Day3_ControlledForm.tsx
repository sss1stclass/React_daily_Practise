import { Password } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Day3_ControlledForm = () => {
  const [data, setData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    password: '',
    email: '',
  });

  const handleClick = (event: any) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = { name: '', password: '', email: '' };

    // Name validation
    if (!data.name) {
      newErrors.name = 'Name is required';
    }

    // Password validation
    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (data.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Email validation
    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email address is invalid';
    }

    setErrors(newErrors);

    // Return whether there are any errors
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Validate form data
    if (validateForm()) {
      alert(JSON.stringify(data, null, 2));

      // Reset form data after successful submission
      setData({
        name: '',
        password: '',
        email: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <TextField
          sx={{ mb: 1 }}
          variant="outlined"
          label="Name"
          name="name"
          value={data.name}
          onChange={handleClick}
          error={!!errors.name} // Display error styling if error exists
          helperText={errors.name} // Display error message
        />
        <TextField
          type="password"
          sx={{ mb: 1 }}
          variant="outlined"
          label="Password"
          name="password"
          value={data.password}
          onChange={handleClick}
          error={!!errors.password} // Display error styling if error exists
          helperText={errors.password} // Display error message
        />
        <TextField
          type="email"
          variant="outlined"
          label="Email"
          name="email"
          value={data.email}
          onChange={handleClick}
          error={!!errors.email} // Display error styling if error exists
          helperText={errors.email} // Display error message
        />
        <Box mt={1} mb={1} display="flex" justifyContent="center" alignItems="center">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Day3_ControlledForm;
