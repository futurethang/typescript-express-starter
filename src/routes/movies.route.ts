import { Router } from 'express';
import MoviesController from '../controllers/movies.controller';
import { CreateMovieDto } from '../dtos/movies.dto'; // TODO
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class MoviesRoute implements Route {
  public path = '/movies';
  public router = Router();
  public movieController = new MoviesController(); // TODO

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.movieController.getMovies);
    this.router.get(`${this.path}/:id`, this.movieController.getMovieById);
    this.router.post(`${this.path}`, validationMiddleware(CreateMovieDto, 'body'), this.movieController.createMovie);
    // this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.movieController.updateUser);
    // this.router.delete(`${this.path}/:id`, this.movieController.deleteUser);
  }
}

export default MoviesRoute;
