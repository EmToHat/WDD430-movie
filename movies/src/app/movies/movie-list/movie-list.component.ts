import { Component, ElementRef, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import Flickity from 'flickity';
import { MoviesService } from '../../services/movies.service';
import { MovieData } from '../../models/movie-model';

@Component({
  selector: 'mv-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterViewInit {
  movieData: MovieData;
  @ViewChildren('carousel') carousels: QueryList<ElementRef>;

  constructor(private router: Router, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovieData().subscribe(data => {
      this.movieData = data;
      setTimeout(() => this.initializeCarousels(), 0); // Slight delay to ensure DOM updates
    });
  }

  ngAfterViewInit(): void {
    this.carousels.changes.subscribe(() => this.initializeCarousels());
  }

  initializeCarousels(): void {
    this.carousels.forEach(carousel => {
      new Flickity(carousel.nativeElement, { wrapAround: true });
    });
  }

  onMovieSelect(movieId: number): void {
    this.router.navigate(['/movies', movieId]);
  }
}
