import React from 'react';
import styles from './styles.module.scss';
import searchSVG from '../../assets/icons/search.svg';
import CloseSearchBtn from '../buttons/CloseSearchBtn';

interface SearchFormProps {
  setCloseForm: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ setCloseForm }) => {
  return (
    <div className={styles.wrapper}>
      <form action="#" className={styles.form}>
        <label htmlFor="" className={styles.label}>
          <input className={styles.input} type="search" />
        </label>
      </form>
      <CloseSearchBtn setClose={setCloseForm}/>
    </div>
  );
};

export default SearchForm;