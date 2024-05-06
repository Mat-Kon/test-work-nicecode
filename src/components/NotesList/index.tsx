import React, { useEffect, useState } from 'react';
import { Note, User } from '../../_types/types';
import NodeItem from '../NodeItem';
import styles from './styles.module.scss';

interface NotesListProps {
  id: string;
}

const NotesList: React.FC<NotesListProps> = ({ id }) => {
  const [notes, setNote] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async (id: string) => {
      const response = await import('../../_data/data.json');
      const users: User[] = response.default;
      const curUser: User | undefined = users.find((user) => user.id === id);

      if (curUser) {
        setNote(curUser.notes);
      }
    };

    getNotes(id)
  },[]);

  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id}>
          <NodeItem note={note}/>
        </li>
      ))}
    </ul>
  )
};

export default NotesList;