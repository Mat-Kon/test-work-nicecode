import React from 'react';
import SearchBar from '../../ui/SearchBar';
import styles from './styles.module.scss';
import ContactList from '../ContactsList';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <SearchBar />
      <ContactList />
    </aside>
  );
};

export default Sidebar;