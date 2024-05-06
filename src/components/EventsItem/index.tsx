import React from 'react';
import { UserEvent } from '../../_types/types';
import images from '../../_data/images';
import cameraIcon from '../../assets/icons/eventCamera.svg';
import calendarIcon from '../../assets/icons/eventCalendar.svg';
import timeIcon from '../../assets/icons/eventTime.svg';
import styles from './styles.module.scss';

interface EventItemProps {
  event: UserEvent;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const curImages: Record<string, string> = {...images};
  const { category, date, cover, title } = event;
  const infoDate = new Date(date);
  const formattedDate = infoDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  const time = new Date(date).toLocaleString('ru-RU').split(',')[1].slice(0, 6);

  return (
    <section className={styles.wrapper}>
      <div>
        <img src={curImages[cover]} alt="" />
      </div>
      <div className={styles.info}>
        <h4>{title}</h4>
        <div className={styles.info__details}>
          <div>
            <img src={cameraIcon} alt="иконка камеры" />
            <p>{category}</p>
          </div>
          <div>
            <img src={calendarIcon} alt="иконка календаря" />
            <p>{formattedDate}</p>
          </div>
          <div>
            <img src={timeIcon} alt="иконка часов" />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventItem;