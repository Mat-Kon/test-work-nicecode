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

export interface Note {
  id: string;
  content: string;
  createDate: string;
  images: string[];
}

export interface Consultation {
  id: string;
  isOnline: boolean;
  start: string;
  end: string;
  isConfirmed: boolean;
}

export interface Video {
  id: string;
  url: string;
  cover: string | null;
  title: string;
  author: string;
  start: string | null;
  end: string | null;
}

export interface UserEvent {
  id: string;
  title: string;
  cover: string | null;
  category: string;
  date: string;
}