import React from "react";
import styles from './style.module.scss';

const SearchBar: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '10px', borderRadius: '8px' }}>
      <button className={styles.searchBtn}></button>
      <input type="text" placeholder="Поиск" style={{ flex: 1, border: 'none', outline: 'none' }}/>
      <button className={styles.sortBtn}></button>
      <button className={styles.addBtn}></button>
    </div>
  );
};

export default SearchBar;
