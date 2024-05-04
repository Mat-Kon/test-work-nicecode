import React from 'react';
import Sidebar from '../Sidebar';
import styles from './styles.module.scss';

const RootLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div style={{flex: 1}}>main</div>
    </div>
  );
};

export default RootLayout;