import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../movie-model';

@Component({
  selector: 'mv-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() title: string;
  @Input() rating: number;
  @Input() movie: Movie;
  @Output() movieSelected: EventEmitter<Movie> = new EventEmitter();

  /*ngOnChanges(changes: SimpleChanges): void {
    if (changes.rating) {
      // Rating input has changed, update stars array
    }
  }*/

  get stars(): boolean[] {
    const starsArray: boolean[] = new Array(5);
    starsArray.fill(true, starsArray.length - this.rating, starsArray.length);
    return starsArray;
  }

  get imageUrl(): string {
    return '../../../../assets/images/' + this.title.toLowerCase().replace(/\s+/g, '-') + '.png';
  }


  selectMovie() {
    this.movieSelected.emit(this.movie);
  }
}
