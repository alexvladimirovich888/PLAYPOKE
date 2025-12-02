export interface GijinkaImage {
  url: string;
  caption: string;
  id: number;
}

export interface GalleryCollection {
  title: string;
  slug: string;
  description: string;
  images: GijinkaImage[];
}

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  content: string[]; // Array of paragraphs
  imageUrl: string;
}

export interface VideoContent {
  id: number;
  title: string;
  embedUrl: string;
}

export enum ViewState {
  HOME = 'HOME',
  GALLERIES = 'GALLERIES',
  ARTICLES = 'ARTICLES',
  VIDEOS = 'VIDEOS'
}