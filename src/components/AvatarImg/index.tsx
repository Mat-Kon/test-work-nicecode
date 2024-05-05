import React from 'react';
import notAvatarIcon from '../../assets/icons/notFoto.svg';
import images from '../../_data/images';
import styles from './styles.module.scss';

interface AvatarImgProps {
  avatar: string | null;
  type: 'small' | 'medium';
}

const AvatarImg: React.FC<AvatarImgProps> = ({ avatar, type}) => {
  const imagesSrc: Record<string, string> = { ...images };
  return (
    <div>
      {avatar
        ?
        <img className={styles[type]}
          src={`${imagesSrc[avatar.toLocaleLowerCase()]}`}
          alt="фото"
        />
        :
        <img className={styles[type]}
          src={`${notAvatarIcon}`}
          alt="нет фото"
        />}
    </div>
  );
};

export default AvatarImg;