import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/homePage.jsx';
import RegisterPage from 'pages/RegisterPage/registerPage.jsx';
import ContactsPage from 'pages/ContactsPage/ContactsPage.jsx';
import Layout from './Layout/Layout.jsx';
import LoginPage from 'pages/LoginPage/LoginPage.jsx';
import { RestrictedRoute } from './RestrictedRoute.js';
import { PrivateRoute } from './PrivateRoute.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThank } from '../store/authorization/thanks.js';
import { authorizationRefreshingSelect } from 'store/authorization/selectors.js';
import Loader from './Loader/Loader.jsx';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authorizationRefreshingSelect);

  useEffect(() => {
    dispatch(refreshThank());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
      <Route
        path="login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      />
      <Route
        path="register"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            component={<RegisterPage />}
          />
        }
      />
    </Routes>
  );
};

export default App;
