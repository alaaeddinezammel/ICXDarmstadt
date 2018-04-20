import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './movie-data';
import { findIndex } from 'lodash';

@Injectable()
export class MovieServiceService {
  private pItems = MOVIES;

  getMoviesFromData(): Movie[] {
    console.log(this.pItems);
    return this.pItems
  }

  addMovie(movie: Movie) {
    this.pItems.push(movie);
    console.log(this.pItems);
  }
 


}
