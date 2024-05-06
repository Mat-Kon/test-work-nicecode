import React from 'react';
import { useParams } from 'react-router-dom';
import NodeList from '../NotesList/index';
import ConsultationList from '../ConsultationList';
import styles from './styles..module.scss';

const UserPage: React.FC = () => {
  const { id, category } = useParams<{ id: string; category: string }>();

  const components: Record<string, React.FC<{ id: string }>> = {
    notes: NodeList,
    consultation: ConsultationList
  };

  const Component = components[category];

  return Component ? (
    <div className={styles.wrapper}>
      <Component id={id} />
    </div>
  ) : <p>Category not found</p>;
};

export default UserPage;
