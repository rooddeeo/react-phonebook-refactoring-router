import ContactForm from 'components/ContactForm/ContactForm';
// import { Provider } from 'react-redux';
// import { store } from 'store/store.js';
import css from './homePage.module.css';

const HomePage = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
        </div>
      </div>
      {/* </Provider> */}
    </>
  );
};

export default HomePage;
