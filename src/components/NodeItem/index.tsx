import React from 'react';
import { Note } from '../../_types/types';
import OptionBtn from '../../ui/buttons/OptionBtn';
import images from '../../_data/images';
import styles from './styles.module.scss';

interface NodeItemProps {
  note: Note;
}

const NodeItem: React.FC<NodeItemProps> = ({ note }) => {
  const curImages: Record<string, string> = {...images};

  return (
    <div className={styles.noteWrapper}>
      <div className={styles.note}>
        <span>{note.createDate}</span>
        <p>{note.content}</p>
        {note.images.map((img) => (
          <img src={curImages[img]} alt="картинка заметки" />
        ))}
      </div>
      <OptionBtn />
    </div>
  )
};

export default NodeItem;