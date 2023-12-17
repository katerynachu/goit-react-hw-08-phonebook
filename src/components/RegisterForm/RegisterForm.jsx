import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register} from '../redux/auth/operations';
import { clearError} from '../redux/auth/slice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormStyled } from './RegisterForm.styled';
import Alert from '@mui/material/Alert';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await dispatch(register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value
      }));
      form.reset();
    } catch (error) {
      dispatch(clearError());
      dispatch(register.rejected(error.message, null, null));
    }
  };
  

  const handleAlertClose = () => {
    dispatch(clearError());

  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      {error && <Alert severity="error" onClose={handleAlertClose}>{error}</Alert>}
     
      <TextField
        id="name"
        label="Username"
        variant="standard"
        fullWidth
        margin="normal"
        name="name"
        autoComplete="username"
      />
      <TextField
        id="email"
        label="Email"
        variant="standard"
        fullWidth
        margin="normal"
        type="email"
        name="email"
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
        Register
      </Button>
    </FormStyled>
  );
};
