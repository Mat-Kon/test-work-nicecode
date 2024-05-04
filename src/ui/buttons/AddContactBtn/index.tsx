import React from 'react';
import styles from './styles.module.scss';

interface AddContactBtnProps {
  propStyles?: React.CSSProperties;
}

const AddContactBtn: React.FC<AddContactBtnProps> = ({ propStyles }) => {
  return (
    <button className={styles.addContactBtn} style={propStyles}></button>
  );
};

export default AddContactBtn;