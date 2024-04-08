import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private selectedMovieSource = new Subject<any>(); // Use any or define a Movie interface/type
  selectedMovie$ = this.selectedMovieSource.asObservable();

  selectMovie(movie: any) {
    this.selectedMovieSource.next(movie);
  }

  constructor() { }
}
