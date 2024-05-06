import React, { type ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../_types/types';
import ContactCard from '../../ui/ContactCard';
import telegramIcon from '../../assets/icons/telegram.svg';
import errorIcon from '../../assets/icons/error.svg';
import styles from './styles.module.scss';

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<User[]>([]);
  const [isHiddenInputs, setHiddenInputs] = useState(true);
  const [isHasMessage, _] = useState(false);
  const [countChecked, setCount] = useState(0);
  const [isAllChecked, setAllChecked] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const response = await import('../../_data/data.json');
      const users: User[] = response.default
      setContacts(users);
    };

    getUsers();
  }, [contacts, isHiddenInputs]);

  const handleClickChooseBtn = () => {
    setHiddenInputs(false);
  };

  const handleClickCancelBtn = () => {
    setHiddenInputs(true);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
  };

  useEffect(() => {
    if (isAllChecked) {
      setCount(contacts.length);
    } else {
      setCount(0);
    }
  }, [isAllChecked, contacts]);

  return (
    <div>
      <section className={styles.manageWrapper}>
        {isHiddenInputs ?
          <p className={styles.contactsCount}>{contacts.length}</p>
          : (
            <div className={styles.inputWrapper}>
              <label>
                <input type="checkbox" onChange={handleChangeInput} />
                Все
              </label>
              <span className={styles.countChecked}>{countChecked}</span>
            </div>
          )}
        <div className={styles.manageBtns}>
          {isHiddenInputs ?
            (
              <button onClick={() => handleClickChooseBtn()}>Выбрать</button>
            ) : (
              <>
                <button>Действия</button>
                <button onClick={() => handleClickCancelBtn()}>Отменить</button>
              </>
            )}
        </div>
      </section>
      <section>
        <ul className={styles.list}>
          {contacts.map((contact, index) => {
            if (index === 0) {
              return (
                <li key={contact.id}>
                  <ContactCard
                    isAllChecked={isAllChecked}
                    setCheckedCount={setCount}
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
                    isAllChecked={isAllChecked}
                    setCheckedCount={setCount}
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
                  isAllChecked={isAllChecked}
                  setCheckedCount={setCount}
                  isHiddenInput={isHiddenInputs}
                  userData={contact}
                  isHasMassage={isHasMessage} />
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