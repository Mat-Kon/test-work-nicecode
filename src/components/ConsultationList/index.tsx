import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Consultation, User } from '../../_types/types';

interface ConsultationListProps {
  id: string;
}

const ConsultationList: React.FC<ConsultationListProps> = ({ id }) => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);

  useEffect(() => {
    const getNotes = async (id: string) => {
      const response = await import('../../_data/data.json');
      const users: User[] = response.default;
      const curUser: User | undefined = users.find((user) => user.id === id);

      if (curUser) {
        setConsultations(curUser.consultations);
      }
    };

    getNotes(id)
  },[]);

  return (
    <ul className={styles.list}>
      {consultations.map((consultation) => (
        <li key={consultation.id}>
          {/* <ConsultationItem note={consultation}/> */}
          ok
        </li>
      ))}
    </ul>
  )
};

export default ConsultationList;