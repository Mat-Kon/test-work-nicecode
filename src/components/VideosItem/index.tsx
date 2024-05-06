import React from 'react';
import { Video } from '../../_types/types';
import images from '../../_data/images';
import styles from './styles.module.scss';

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const { cover, title, author, start, end } = video;
  const startVideoDate = new Date(start).toLocaleString('ru-RU').split(',')[0];
  const endVideoDate = new Date(end).toLocaleString('ru-RU').split(',')[0];
  const curImages: Record<string, string> = {...images};

  return (
    <section className={styles.wrapper}>
      <div className={styles.info}>
        <div>
          <img src={curImages[cover]} alt="обложка видео" />
        </div>
        <div className={styles.text}>
          <h4>{title}</h4>
          <span>{author}</span>
        </div>
      </div>
      <span className={styles.date}>{`${startVideoDate}-${endVideoDate}`}</span>
    </section>
  );
};

export default VideoItem;