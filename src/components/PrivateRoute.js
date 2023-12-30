import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authorizationSelect } from 'store/authorization/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authorizationSelect);
  const isRefreshing = false;
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
