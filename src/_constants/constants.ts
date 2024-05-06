const LINKS_LIST: (Record<string, string>)[] = [
  {
    link: './notes',
    title: 'Заметки'
  },
  {
    link: './consultation',
    title: 'Консультация'
  },
  {
    link: './videos',
    title: 'Видео'
  },
  {
    link: './events',
    title: 'Мероприятия'
  }
];

const BTN_TITLES: Record<string, string> = {
  notes: 'Новая заметка',
  consultation: 'Запись',
  videos: 'Рекомендовать',
  events: 'Рекомендовать'
}


export {
  LINKS_LIST,
  BTN_TITLES
}