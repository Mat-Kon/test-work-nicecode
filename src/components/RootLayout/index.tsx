import React from 'react';
import Sidebar from '../Sidebar';
import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <>
      <header className={styles.header}></header>
      <div className={styles.wrapper}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;