import { NextFunction, Request, Response } from 'express';
// import { CreateMovieDto } from '../dtos/users.dto';
import { CreateMovieDto } from '../dtos/movies.dto';
import { Movie } from '../interfaces/movies.interface';
import movieService from '../services/movies.service';

class MoviesController {
  public movieService = new movieService(); // TODO

  public getMovies = async (req: Request, res: Response, next: NextFunction) => {
    // try {
    //   const findAllUsersData: User[] = await this.userService.findAllUser();
    //   res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    // } catch (error) {
    //   next(error);
    // }
  };

  public getMovieById = async (req: Request, res: Response, next: NextFunction) => {
    const movieId: string = req.params.id;

    // try {
    //   const findOneUserData: User = await this.userService.findUserById(userId);
    //   res.status(200).json({ data: findOneUserData, message: 'findOne' });
    // } catch (error) {
    //   next(error);
    // }
  };

  public createMovie = async (req: Request, res: Response, next: NextFunction) => {

    const movieData = req.body;
    try {
      const createMovieData = await this.movieService.createMovie(movieData);
      res.status(201).json({ data: createMovieData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateMovie = async (req: Request, res: Response, next: NextFunction) => {
    const movieId: string = req.params.id;
    const movieData: Movie = req.body;

    // try {
    //   const updateUserData: User = await this.userService.updateUser(userId, userData);
    //   res.status(200).json({ data: updateUserData, message: 'updated' });
    // } catch (error) {
    //   next(error);
    // }
  };

  public deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
    const movieId: string = req.params.id;

    // try {
    //   const deleteUserData: User = await this.userService.deleteUserData(userId);
    //   res.status(200).json({ data: deleteUserData, message: 'deleted' });
    // } catch (error) {
    //   next(error);
    // }
  };
}

export default MoviesController;
