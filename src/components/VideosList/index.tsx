import React, { useEffect, useState } from 'react';
import { User, Video } from '../../_types/types';
import { useParams } from 'react-router-dom';
import VideoItem from '../VideosItem';
import styles from './styles.module.scss';

const VideosList: React.FC = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const getVideos = async (id: string) => {
      const response = await import('../../_data/data.json');
      const users: User[] = response.default;
      const curUser: User | undefined = users.find((user) => user.id === id);

      if (curUser) {
        setVideos(curUser.videos);
      }
    };

    getVideos(id);
  }, []);

  return (
    <ul className={styles.list}>
      {videos.map((video) => (
        <li key={video.id}>
          <VideoItem video={video}/>
        </li>
      ))}
    </ul>
  );
};

export default VideosList;