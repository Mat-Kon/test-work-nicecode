import React from 'react';
import styles from './styles.module.scss';

interface SearchBtnProps {
  setOpen: () => void;
}

const SearchBtn: React.FC<SearchBtnProps> = ({ setOpen }) => {
  return (
    <button className={styles.searchBtn} onClick={setOpen}></button>
  );
};

export default SearchBtn;