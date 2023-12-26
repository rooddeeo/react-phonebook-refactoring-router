import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage.jsx';
import RegisterPage from './pages/RegisterPage/registerPage.jsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import Layout from './Layout/Layout.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import { Provider } from 'react-redux';
import { store } from 'store/store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </Provider>
  );
};

export default App;
