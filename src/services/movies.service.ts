// import bcrypt from 'bcrypt';
import { CreateMovieDto } from '../dtos/movies.dto';
import HttpException from '../exceptions/HttpException';
import { Movie } from '../interfaces/movies.interface';
import movieModel from '../models/movies.model';
import { isEmpty } from '../utils/util';

class MovieService {
  public movies = movieModel;

  public async findAllMovies(): Promise<Movie[]> {
    const movies: Movie[] = await this.movies.find();
    return movies;
  }

  public async findMovieById(movieId: string): Promise<Movie> {
    const findMovie: Movie = await this.movies.findOne({ _id: movieId });
    if (!findMovie) throw new HttpException(409, 'Movie not found');

    return findMovie;
  }

  public async createMovie(movieData: CreateMovieDto): Promise<Movie> {
    if (isEmpty(movieData)) throw new HttpException(400, "You're not movieData");
    const findMovie: Movie = await this.movies.findOne({ title: movieData.title });
    if (findMovie) throw new HttpException(409, `You're title ${movieData.title} already exists`);

    // const hashedPassword = await bcrypt.hash(movieData.password, 10);
    const createMovieData: Movie = await this.movies.create({ ...movieData });
    // return fakeMovieData; // Just filling to make type happy, must redo
    return createMovieData;
  }

  public async updateMovie(movieId: string, movieData: Movie): Promise<Movie> {
    if (isEmpty(movieData)) throw new HttpException(400, "You're not movieData");

    // const hashedPassword = await bcrypt.hash(movieData.password, 10);
    // const updateMovieById: Movie = await this.movies.findByIdAndUpdate(movieId, { ...movieData, password: hashedPassword });
    // if (!updateMovieById) throw new HttpException(409, "You're not user");

    return movieData; // Just filling to make type happy, must redo
  }

  public async deleteMovieData(movieId: string): Promise<Movie> {
    const deleteMovieById: Movie = await this.movies.findByIdAndDelete(movieId);
    if (!deleteMovieById) throw new HttpException(409, "You're not movie");

    return deleteMovieById;
  }
}

export default MovieService;
