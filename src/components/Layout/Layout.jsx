import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutPage;
