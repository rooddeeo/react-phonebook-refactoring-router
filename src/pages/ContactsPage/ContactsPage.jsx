import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <h2 className={css.subTitle}>Search for contact</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
