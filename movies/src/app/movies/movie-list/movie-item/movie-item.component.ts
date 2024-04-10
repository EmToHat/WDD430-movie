import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../../../../server/models/movies-model.js';

@Component({
  selector: 'mv-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie: Movie;
  @Output() movieSelected: EventEmitter<number> = new EventEmitter(); // Emitting movie ID for selection

  get stars(): boolean[] {
    // Assuming 'rating' is a number from 1 to 5, adjust if your scale is different
    const starsArray: boolean[] = new Array(5).fill(false);
    starsArray.fill(true, 0, this.movie.rating); // Fill based on the movie's rating
    return starsArray;
  }

  selectMovie() {
    this.movieSelected.emit(this.movie.id); // Emitting just the ID for selection
  }
}