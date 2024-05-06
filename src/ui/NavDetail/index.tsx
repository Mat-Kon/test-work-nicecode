import React from 'react';
import { BTN_TITLES, LINKS_LIST } from '../../_constants/constants';
import { NavLink, useParams } from 'react-router-dom';
import styles from './styles.module.scss';

interface NavDetailProps {
  id: string;
}

const NavDetail: React.FC<NavDetailProps> = ({ id }) => {
  const { category } = useParams();

  return (
    <div className={styles.navDetail}>
      <ul className={styles.navDetail__list}>
        {LINKS_LIST.map((link, index) => (
          <li key={index}>
            <NavLink
              to={`/user/${id}/${link.link}`}
              className={({isActive}) => isActive ? `${styles.activeLink}` : `${styles.pendingLink}`}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.btnContain}>
        <p>{BTN_TITLES[category]}</p>
        <button className={styles.addBtn}></button>
      </div>
    </div>
  )
};

export default NavDetail;