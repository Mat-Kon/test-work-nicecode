import React from 'react';
import { Consultation } from '../../_types/types';
import styles from './styles.module.scss';

interface ConsultationItemProps {
  consultation: Consultation;
}

const ConsultationItem: React.FC<ConsultationItemProps> = ({ consultation }) => {
  const { start, end, isOnline, isConfirmed } = consultation;
  const curDate = new Date(start);
  const consultationDate = curDate.toISOString().split('T')[0];
  const startConsultationTime = curDate.toTimeString().split(' ')[0].split(':').slice(0, 2).join(':');
  const finishConsultationTime = new Date(end).toTimeString().split(' ')[0].split(':').slice(0, 2).join(':');

  return (
    <section className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.iconWrapper}>
          {isOnline ? (
            <img className={styles.icon} src="../../assets/icons/camera.svg" alt="online" />
          ) : (
            <img className={styles.icon} src="../../assets/icons/people.svg" alt="online" />
          )}
        </div>
        <div className={styles.text}>
          <p>{isOnline ? 'Online консультация' : 'Личный приём'}</p>
          <span>{`${consultationDate}, ${startConsultationTime}-${finishConsultationTime}`}</span>
        </div>
      </div>
      {isConfirmed ?
        null
        :
        (<div>
          <p style={{color: 'red'}}>Не подтверждена</p>
        </div>
        )}
    </section>
  );
};

export default ConsultationItem;