import React, { useState } from 'react';
import styles from './styles.module.scss';

const OptionBtn: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClickBtn = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper} >
      <button className={styles.optionBtn} onClick={handleClickBtn}></button>
      { isOpen ? (
      <div className={styles.manageBtns}>
        <button className={styles.manageBtn} onClick={handleClickBtn}>Изменить</button>
        <button className={styles.manageBtn} onClick={handleClickBtn}>Удалить</button>
      </div>
      ): null}
    </div>
  );
};

export default OptionBtn;