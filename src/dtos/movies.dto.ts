import { IsEmail, IsString } from 'class-validator';

export class CreateMovieDto {
  // @IsEmail()
  // public email: string;

  @IsString()
  public title: string;
  public description: string;
  public rating: string;
}

// handy https://www.npmjs.com/package/class-validator