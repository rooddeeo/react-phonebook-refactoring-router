import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <>
      <Provider store={store}>
        <div className={css.container}>
          <div className={css.content}>
            <h2 className={css.subTitle}>Search for contact</h2>
            <Filter />
            <ContactList />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default ContactsPage;
