import React, { useState } from "react";
import styles from './style.module.scss';
import SearchBtn from "../buttons/SearchBtn";
import SortBtn from "../buttons/SortBtn";
import AddContactBtn from "../buttons/AddContactBtn";
import SearchForm from "../SearchForm";

const SearchBar: React.FC = () => {
  const [isOpenSearch, setOpenSearch] = useState(false);
  return (
    <div className={styles.searchBar}>
      {!isOpenSearch && <SearchBtn setOpen={setOpenSearch.bind(null, true)} />}
      {isOpenSearch && <SearchForm setCloseForm={setOpenSearch.bind(null, false)} />}
      <div className={styles.rightBtns}>
        {!isOpenSearch && <SortBtn />}
        {!isOpenSearch && <AddContactBtn />}
      </div>
    </div>
  );
};

export default SearchBar;
