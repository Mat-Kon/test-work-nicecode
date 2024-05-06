import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { User } from '../../_types/types';
import styles from './styles.module.scss';
import AvatarImg from '../AvatarImg';
import NavDetail from '../../ui/NavDetail';
import OptionBtn from '../../ui/buttons/OptionBtn';

const DetailUser: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async (id: string) => {
      const response = await import('../../_data/data.json');
      const curUser: User | undefined = response.default.find((user) => user.id === id);
      if (curUser) {
        setUserData(curUser);
      }
    };
    getUserById(id);
  }, [id]);

  return userData ? (
    <section className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <div className={styles.infoBlock__aboutUser}>
          <AvatarImg avatar={userData.avatar} type='medium'/>
          <div className={styles.infoBlock__info}>
            <h3>{userData.name}</h3>
            <p>{`${userData.age} лет, ${userData.gender === 'male' ? 'муж' : 'жен'}`}</p>
          </div>
        </div>
        <OptionBtn />
      </div>
      <NavDetail id={id}/>
      <Outlet />
    </section>
  ) : null;
};

export default DetailUser;