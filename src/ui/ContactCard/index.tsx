import React from 'react';
import { User } from '../../_types/types';
import { NavLink } from 'react-router-dom';
import notAvatarIcon from '../../assets/icons/notFoto.svg';

interface ContactCardProps {
  userData: User;
  icon?: string;
}
const ContactCard: React.FC<ContactCardProps> = ({ userData, icon }) => {
  const { id, avatar, name } = userData;
  return (
    <NavLink to={`/user/${id}`}>
      <div>
        {avatar ? <img src={`${avatar}`} alt="фото" /> : <img src={`${notAvatarIcon}`} alt="нет фото" />}
      </div>
      <h3>{name}</h3>
      <div>
        {icon && <img src={`${icon}`} alt="иконка" />}
      </div>
    </NavLink>
  );
};

export default ContactCard;
