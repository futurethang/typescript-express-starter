import { model, Schema, Document } from 'mongoose';
import { Movie } from '../interfaces/movies.interface';

const movieSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: false,
  },
  score: {
    type: String,
    required: false,
  },
  length: {
    type: String,
    required: false,
  },
  review: {
    type: String,
    required: false,
  },
  released: {
    type: String,
    required: false,
  },
  platforms: {
    type: Array,
    required: false,
  },
  genres: {
    type: Array,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
  },
  posterImg: {
    type: String,
    required: false,
  },
  trailer: {
    type: String,
    required: false,
  },
  cast: {
    type: Array,
    required: false,
  },
  enthusiasm: {
    type: Number,
    required: false,
  },
  mentions: {
    type: Number,
    required: false,
  },
});

const movieModel = model<Movie & Document>('Movie', movieSchema);

export default movieModel;
