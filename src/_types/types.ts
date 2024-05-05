export interface User {
  id: string;
  name: string | null;
  age: number;
  gender: string;
  email: string;
  avatar: string | null;
  notes: Note[];
  consultations: Consultation[];
  videos: Video[];
  events: UserEvent[];
}

interface Note {
  id: string;
  content: string;
  createDate: string;
  images: string[];
}

interface Consultation {
  id: string;
  category: string;
  start: string;
  end: string;
  status: string;
}

interface Video {
  id: string;
  url: string;
  cover: string | null;
  title: string;
  author: string;
  start: string;
  end: string;
}

interface UserEvent {
  id: string;
  title: string;
  cover: string | null;
  category: string;
}