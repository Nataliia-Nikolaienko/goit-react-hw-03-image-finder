import { Formik } from 'formik';
// import { ReactSVG } from 'react-svg';
import css from '../Searchbar/SearchBar.module.css';

const FormikSearchBar = ({ submit }) => {
  return (
    <Formik initialValues={{ query: '' }} onSubmit={submit}>
      {formik => {
        return (
          <header className={css.searchbar}>
            <form onSubmit={formik.handleSubmit} className={css.searchForm}>
              <button
                type="submit"
                className={css.searchButton}
                disabled={formik.errors.title || formik.errors.description}
              >
                <span className={css.searchButtonLabel}>Search</span>
              </button>

              <input
                name="query"
                className={css.searchInput}
                type="text"
                value={formik.values.query}
                onChange={formik.handleChange}
                // autocomplete="off"
                // autofocus
                placeholder="Search images and photos"
              />
            </form>
          </header>
        );
      }}
    </Formik>
  );
};

export default FormikSearchBar;
