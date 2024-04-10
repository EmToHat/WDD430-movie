import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../server/models/movies-model.js';
import { MovieService } from '../../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mv-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'] // Corrected from styleUrl to styleUrls
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getMovieById(+movieId).subscribe((movie) => {
        this.movie = movie;
      });
    }
  }
}
