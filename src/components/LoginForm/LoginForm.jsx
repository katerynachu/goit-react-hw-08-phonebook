import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { FormStyled } from './LoginForm.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="email"
        label="Email"
        variant="standard"
        fullWidth
        margin="normal"
        name="email"
        autoComplete="email"
      />
      <TextField
        id="password"
        label="Password"
        variant="standard"
        fullWidth
        margin="normal"
        type="password"
        name="password"
        autoComplete="current-password"
      />
      <Button type="submit" variant="contained" color="primary">
        Log In
      </Button>
    </FormStyled>
  );
};
