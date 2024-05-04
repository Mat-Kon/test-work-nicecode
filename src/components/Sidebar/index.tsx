import React from 'react';
import SearchBar from '../../ui/SearchBar';
import styles from './styles.module.scss';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <SearchBar />
      <div>manage bar</div>
      <div>list</div>
    </aside>
  );
};

export default Sidebar;