import React from "react";
import styles from './style.module.scss';
import SearchBtn from "../buttons/SearchBtn";
import SortBtn from "../buttons/SortBtn";
import AddContactBtn from "../buttons/AddContactBtn";

const SearchBar: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '10px', borderRadius: '8px' }}>
      <SearchBtn />
      <input type="text" placeholder="Поиск" style={{ flex: 1, border: 'none', outline: 'none' }}/>
      <SortBtn />
      <AddContactBtn />
    </div>
  );
};

export default SearchBar;
