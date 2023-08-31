import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from 'components/Navbar/Navbar';
// import Header from 'components/Navbar/Header';
// import LinearIndeterminate from 'services/LinearIndeterminate';

import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { current } from 'redux/auth/auth-operations';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current);
  }, [dispatch]);

  return (
    // <Suspense fallback={<LinearIndeterminate />}>
    // <Header />
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
    // </Suspense>
  );
};
