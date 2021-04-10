export interface Movie {
  _id: string;
  title: string;
  description: string;
  rating: string;
  score: string;
  length: string;
  review: string;
  released: string;
  platforms: string[];
  genres: string[];
  tags: string[];
  posterImg: string;
  trailer: string;
  cast: string[];
  enthusiasm: number;
  mentions: number;
}