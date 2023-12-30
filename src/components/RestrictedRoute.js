import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authorizationSelect } from 'store/authorization/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authorizationSelect);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
