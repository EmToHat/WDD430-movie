import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieData } from '../models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://yourbackend.com/api'; // Adjust this to your backend's base URL

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseUrl}/movies`);
  }
}
