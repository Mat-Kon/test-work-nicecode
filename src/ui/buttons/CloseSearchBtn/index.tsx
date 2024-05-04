import React from 'react';
import styles from './styles.module.scss';

interface CloseSearchBtnProps {
  setClose: () => void;
}

const CloseSearchBtn: React.FC<CloseSearchBtnProps> = ({ setClose }) => {
  return (
    <button className={styles.closeSearchBtn} onClick={setClose}></button>
  );
};

export default CloseSearchBtn;