import React, { useEffect, useState } from 'react';
import { User, UserEvent } from '../../_types/types';
import EventItem from '../EventsItem';
import styles from './styles.module.scss';

interface EventsListProps {
  id: string;
}

const EventsList: React.FC<EventsListProps> = ({ id }) => {
  const [events, setEvents] = useState<UserEvent[]>([]);

  useEffect(() => {
    const getEvents = async (id: string) => {
      const response = await import('../../_data/data.json');
      const users: User[] = response.default;
      const curUser: User | undefined = users.find((user) => user.id === id);

      if (curUser) {
        setEvents(curUser.events);
      }
    };

    getEvents(id)
  }, []);

  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <li>
          <EventItem event={event}/>
        </li>
      ))}
    </ul>
  );
};

export default EventsList;
