import { Formik } from 'formik';
initialValues = {
  search: '',
};
export const Searchbar = () => {
  return (
    <Formik initialValues={initialValues}>
      <header class="searchbar">
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </Formik>
  );
};
