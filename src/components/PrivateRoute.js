import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  authorizationLoadingSelect,
  authorizationRefreshingSelect,
} from 'store/authorization/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authorizationLoadingSelect);
  const isRefreshing = useSelector(authorizationRefreshingSelect);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
