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
});

const movieModel = model<Movie & Document>('Movie', movieSchema);

export default movieModel;
