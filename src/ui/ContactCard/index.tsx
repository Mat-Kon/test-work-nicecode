import React from 'react';
import { User } from '../../_types/types';
import { Link } from 'react-router-dom';
import notAvatarIcon from '../../assets/icons/notFoto.svg';
import images from '../../_data/images';
import styles from './styles.module.scss';

interface ContactCardProps {
  userData: User;
  icon?: string;
  isHiddenInput: boolean;
  isHasMassage: boolean;
}
const ContactCard: React.FC<ContactCardProps> = ({ userData, icon, isHiddenInput, isHasMassage }) => {
  const { id, avatar, name, email } = userData;
  const imagesSrc: Record<string, string> = { ...images };
  const shotName = name && name.split(' ').slice(0, 2).join(' ');

  return (
    <div className={isHasMassage ? styles.wrapperMassage : styles.wrapperBase}>
      {isHiddenInput
        ?
        null
        :
        (<label htmlFor={`input${id}`}>
          <input id={`input${id}`} type="checkbox" />
        </label>)
      }
      <Link to={`/user/${id}`} className={styles.contactLink}>
        <div className={styles.shotInfo}>
          <div>
            {avatar
            ?
            <img className={styles.avatarImg}
              src={`${imagesSrc[avatar.toLocaleLowerCase()]}`}
              alt="фото"
            />
            :
            <img className={styles.avatarImg}
              src={`${notAvatarIcon}`}
              alt="нет фото"
            />}
          </div>
          <h3>{shotName ?? email}</h3>
        </div>
        <div>
          {icon && <img className={styles.icon} src={`${icon}`} alt="иконка" />}
        </div>
      </Link>
    </div>
  );
};

export default ContactCard;
