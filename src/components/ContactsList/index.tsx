import React, { useEffect, useState } from 'react';
import { User } from '../../_types/types';
import ContactCard from '../../ui/ContactCard';
import telegramIcon from '../../assets/icons/telegram.svg';
import errorIcon from '../../assets/icons/error.svg';
import styles from './styles.module.scss';

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<User[]>([]);
  const [isHiddenInputs, setHiddenInputs] = useState(true);
  const [isHasMessage, setHasMessage] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const response = await import('../../_data/data.json');
      const users: User[] = response.default
      setContacts(users);
    };

    getUsers();
  }, [contacts, isHiddenInputs]);

  return (
    <div>
      <section>
        <p>{contacts.length}</p>
      </section>
      <section>
        <ul className={styles.list}>
          {contacts.map((contact, index) => {
            if (index === 0) {
              return (
                <li key={contact.id}>
                  <ContactCard
                    isHiddenInput={isHiddenInputs}
                    userData={contact}
                    isHasMassage={true}
                    icon={telegramIcon} />
                </li>
              );
            }
            if (index === 2) {
              return (
                <li key={contact.id}>
                  <ContactCard
                    isHiddenInput={isHiddenInputs}
                    userData={contact}
                    isHasMassage={isHasMessage}
                    icon={errorIcon} />
                </li>
              );
            }

            return (
              <li key={contact.id}>
                <ContactCard
                  isHiddenInput={isHiddenInputs}
                  userData={contact}
                  isHasMassage={isHasMessage}/>
              </li>
            );
           })
          }
        </ul>
      </section>
    </div>
  );
};

export default ContactList;