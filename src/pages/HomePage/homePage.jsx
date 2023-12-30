import css from './homePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>Phonebook</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
