import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private selectedMovieSource = new Subject<MovieData['categories'][0]['movies'][0] | undefined>();
  selectedMovie$ = this.selectedMovieSource.asObservable();

  private dataUrl = '../../assets/MOCKDATA.json'; // Adjust path if necessary

  constructor(private http: HttpClient) { }

  selectMovie(movie: MovieData['categories'][0]['movies'][0] | undefined) {
    this.selectedMovieSource.next(movie);
  }

  getMovieData(): Observable<MovieData> {
    return this.http.get<MovieData>(this.dataUrl).pipe(
      catchError(error => {
        console.error('Error fetching movie data', error);
        return of({ categories: [] }); // Provide an empty structure on error
      })
    );
  }

  getMovieById(id: number): Observable<MovieData['categories'][0]['movies'][0] | undefined> {
    return this.http.get<MovieData>(this.dataUrl).pipe(
      map(data => 
        data.categories.flatMap(category => category.movies).find(movie => movie.id === id)
      ),
      catchError(error => {
        console.error(`Error fetching movie with ID ${id}`, error);
        return of(undefined);
      })
    );
  }
}
