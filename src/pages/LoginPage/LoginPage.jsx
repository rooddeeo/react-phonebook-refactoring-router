import LoginForm from 'components/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authorizationSelect } from 'store/authorization/selectors';

const LoginPage = () => {
  const isAuthorization = useSelector(authorizationSelect);
  const navigate = useNavigate();

  useEffect(() => {
    isAuthorization && navigate('/');
  }, [isAuthorization, navigate]);
  return <LoginForm />;
};

export default LoginPage;
