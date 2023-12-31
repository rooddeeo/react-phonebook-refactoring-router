import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authorizationLoadingSelect } from 'store/authorization/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authorizationLoadingSelect);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
