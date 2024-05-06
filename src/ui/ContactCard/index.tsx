import React from 'react';
import { User } from '../../_types/types';
import { Link, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import AvatarImg from '../../components/AvatarImg';

interface ContactCardProps {
  userData: User;
  icon?: string;
  isHiddenInput: boolean;
  isHasMassage: boolean;
}
const ContactCard: React.FC<ContactCardProps> = ({ userData, icon, isHiddenInput, isHasMassage }) => {
  const { id, avatar, name, email } = userData;
  const shotName = name && name.split(' ').slice(0, 2).join(' ');
  const { id: curId } = useParams();

  return (
    <div className={styles.wrapper}
      style={{
        borderLeft: `${isHasMassage ? '3px solid #4198C5' : ''}`,
        backgroundColor: `${curId === id ? '#616f8226' : ''}`
      }}
    >
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
          <AvatarImg avatar={avatar} type='small'/>
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
