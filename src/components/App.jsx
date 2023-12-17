import React, { useEffect, lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle/Globalstyle';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
     <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
     <LinearProgress color="secondary" />
     <LinearProgress color="success" />
     <LinearProgress color="inherit" />
   </Stack>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
          </Route>
        </Routes>
      )}
            <GlobalStyle/>

    </>
  );
};
