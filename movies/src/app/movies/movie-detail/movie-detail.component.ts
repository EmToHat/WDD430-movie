import { Component, Input } from '@angular/core';
import { Movie } from '../movie-model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'mv-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  @Input() movie: Movie | null = null;

  selectedMovie: any;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.selectedMovie$.subscribe(movie => {
      this.selectedMovie = movie;
    });
  }
}
