import { Component, ElementRef } from '@angular/core';
import { Movie } from '../movie-model';
import Flickity from 'flickity';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'mv-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  categories: {name: string, movies: Movie[] }[] = [];

  flickityInstance: Flickity;
  constructor(private elementRef: ElementRef, private MoviesService: MoviesService) { 
    this.categories = [
      { 
        name: 'Jurassic Park Films',
        movies: [
          new Movie(1, 'Jurassic Park', ['Steven Spielberg'], ['Michael Crichton', 'David Koepp'], ['Sam Neill', 'Laura Dern', 'Jeff Goldblum', 'Richard Attenborough', 'Ariana Richards', 'Joseph Mazzello'], ['action', 'adventure', 'science fiction'], 4.5, '../../../assets/images/1993-jurassic-park.png', 'https://youtu.be/bx46tthKXmc?si=CDbseI5RcW7EJHuV'),
          new Movie(2, 'Jurassic Park The Lost World', ['Steven Spielberg'], ['David Koepp'], ['Jeff Goldblum', 'Julianne Moore', 'Vince Vaughn', 'Pete Postlethwaite', 'Arliss Howard'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/1997-jurassic-park-the-lost-world.png', 'https://youtu.be/RxrvaneULkE?si=DvSd5qzdRON8eY3L'),
          new Movie(3, 'Jurassic Park 3', ['Joe Johnston'], ['Peter Buchman', 'Alexander Payne', 'Jim Taylor'], ['Sam Neill', 'William H. Macy', 'Téa Leoni', 'Alessandro Nivola', 'Trevor Morgan'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2001-jurassic-park-3.png', 'https://youtu.be/gjIaV6CU0wA?si=-4dNeSmQrTnh9WUm'),
          new Movie(4, 'Jurassic World', ['Colin Trevorrow'], ['Rick Jaffa', 'Amanda Silver', 'Colin Trevorrow', 'Derek Connolly'], ['Chris Pratt', 'Bryce Dallas Howard', "Vincent D'Onofrio", 'Ty Simpkins', 'Nick Robinson'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2015-jurassic-world.png', 'https://youtu.be/RFinNxS5KN4?si=bNoGKYFqpT7xOV2V'),
          new Movie(5, 'Jurassic World Fallen Kingdom', ['J.A. Bayona'], ['Colin Trevorrow', 'Derek Connolly'], ['Chris Pratt', 'Bryce Dallas Howard', 'Rafe Spall', 'Justice Smith', 'Daniella Pineda'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2018-jurassic-world-fallen-kingdom.png', 'https://youtu.be/1FJD7jZqZEk?si=p0GvQc7cNIyV8E3x'),
          new Movie(6, 'Jurassic World Dominion', ['Colin Trevorrow'], ['Colin Trevorrow', 'Emily Carmichael'], ['Chris Pratt', 'Bryce Dallas Howard', 'Sam Neill', 'Laura Dern', 'Jeff Goldblum'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2022-jurassic-world-dominion.png', 'https://youtu.be/fb5ELWi-ekk?si=fSLLBtQ4PIE5zcn1'),
        ]
      },
      { 
        name: 'Star Wars Films',
        movies: [
          new Movie(1, 'Star Wars Episode l: The Phantom Menace', ['George Lucas'], ['George Lucas'], ['Liam Neeson', 'Ewan McGregor', 'Natalie Portman', 'Jake Lloyd', 'Ian McDiarmid'], ['action', 'adventure', 'science fiction'], 4.5, '../../../assets/images/1999-starwars-the-phantom-menace.png', 'https://youtu.be/bD7bpG-zDJQ?si=4r2GWPxOq1do-Axt'),
          new Movie(2, 'Star Wars Episode ll: Attack of the Clones', ['George Lucas'], ['George Lucas'], ['Ewan McGregor', 'Natalie Portman', 'Hayden Christensen', 'Ian McDiarmid', 'Samuel L. Jackson'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2002-starwars-attack-of-the-clones.png', 'https://youtu.be/gYbW1F_c9eM?si=pD7FNbJgCXAsMvk4'),
          new Movie(3, 'Star Wars Episode lll: Revenge of the Sith', ['George Lucas'], ['George Lucas'], ['Ewan McGregor', 'Natalie Portman', 'Hayden Christensen', 'Ian McDiarmid', 'Samuel L. Jackson'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2005-starwars-revenge-of-the-sith.png', 'https://youtu.be/5UnjrG_N8hU?si=sjkwLuOLa-jVltFy'),
          new Movie(4, 'Star Wars Episode lV: A New Hope', ['George Lucas'], ['George Lucas'], ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Alec Guinness', 'Peter Cushing'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/1977-starwars-a-new-hope.png', 'https://youtu.be/vZ734NWnAHA?si=hkZwkAwRUbOMeZ36'),
          new Movie(5, 'Star Wars Episode V: The Empire Strikes Back', ['Irvin Kershner'], ['Leigh Brackett', 'Lawrence Kasdan,', 'George Lucas'], [''], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/1980-starwars-the-empire-strikes-back.png', 'https://youtu.be/JNwNXF9Y6kY?si=9hK77MT9cpco44Wc'),
          new Movie(6, 'Star Wars Episode Vl: Return of the Jedi', ['Richard Marquand'], ['Lawrence Kasdan', 'George Lucas'], ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Billy Dee Williams', 'Ian McDiarmid'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/1983-starwars-return-of-the-jedi.png', 'https://youtu.be/XgB4gaY2dWE?si=hQM1lqga4NiMtjgl'),
          new Movie(7, 'Star Wars Episode Vll: The Force Awakens', ['J.J. Abrams'], ['Lawrence Kasdan', 'J.J. Abrams', 'Michael Arndt'], ['Daisy Ridley', 'John Boyega', 'Adam Driver', 'Oscar Isaac', 'Harrison Ford'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2015-starwars-the-force-awakens.png', 'https://youtu.be/sGbxmsDFVnE?si=Vv3GI2LeNfaJvdhm'),
          new Movie(8, 'Star Wars Episode Vlll: The Last Jedi', ['Rian Johnson'], ['Rian Johnson'], ['Daisy Ridley', 'John Boyega', 'Adam Driver', 'Oscar Isaac', 'Mark Hamill'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2017-starwars-the-last-jedi.png', 'https://youtu.be/Q0CbN8sfihY?si=M0OoRI75cZEWKLo4'),
          new Movie(9, 'Star Wars Episode lX: The Rise of Skywalker', ['J.J. Abrams'], ['Chris Terrio', 'J.J. Abrams'], ['Daisy Ridley', 'John Boyega', 'Adam Driver', 'Oscar Isaac', 'Carrie Fisher'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2019-starwars-the-rise-of-skywalker.png', 'https://youtu.be/8Qn_spdM5Zg?si=RGYDUAjroPFM8_v8'),
        ]
      },
      { 
        name: 'Indiana Jones Films',
        movies: [
          new Movie(1, 'Indiana Jones and The Raiders of the Lost Ark', ['Steven Spielberg'], ['Lawrence Kasdan', 'George Lucas', 'Philip Kaufman'], ['Harrison Ford', 'Karen Allen', 'Paul Freeman', 'John Rhys-Davies'], ['action', 'adventure', 'science fiction'], 4.5, '../../../assets/images/1981-jones-raiders-of-the-lost-ark.png', 'https://youtu.be/0xQSIdSRlAk?si=P_0nrIagEnTy6bIC'),
          new Movie(2, 'Indiana Jones and The Temple of Doom', ['Steven Spielberg'], ['Willard Huyck', 'Gloria Katz', 'George Lucas'], ['Harrison Ford', 'Kate Capshaw', 'Jonathan Ke Quan', 'Amrish Puri'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/1984-jones-temple-of-doom.png', 'https://www.youtube.com/watch?v=WBdyLyijZhU'),
          new Movie(3, 'Indiana Jones and The Last Crusade', ['Steven Spielberg'], ['Jeffrey Boam', 'George Lucas', 'Menno Meyjes'], ['Harrison Ford', 'Sean Connery', 'Denholm Elliott', 'Alison Doody'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/1989-jones-last-crusade.png', ''),
          new Movie(4, 'Indiana Jones and The Kingdom of the Crystal Skull', ['Steven Spielberg'], ['David Koepp'], ['Harrison Ford', 'Cate Blanchett', 'Karen Allen', 'Shia LaBeouf'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2008-jones-kingdom-of-the-crystal-skull.png'),
          new Movie(5, 'Indiana Jones and The Dial of Destiny', ['James Mangold'], ['Jez Butterworth', 'John-Henry Butterworth', 'David Koepp', 'James Mangold'], ['Harrison Ford', 'Phoebe Waller-Bridge', 'Antonio Banderas', 'John Rhys-Davies', 'Toby Jones', 'Boyd Holbrook', 'Ethann Isidore', 'Mads Mikkelsen'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2023-jones-dial-of-destiny.png'),
        ]
      },
      { 
        name: 'Avatar Films',
        movies: [
          new Movie(1, 'Avatar', ['James Cameron'], ['James Cameron'], ['Sam Worthington', 'Zoe Saldana', 'Stephen Lang', 'Michelle Rodriguez', 'Sigourney Weaver'], ['action', 'adventure', 'science fiction'], 4.5, '../../../assets/images/2009-avatar.png'),
          new Movie(2, 'Avatar The Way of Water', ['James Cameron'], ['James Cameron', 'Rick Jaffa', 'Amanda Silver'], ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang', 'Kate Winslet'], ['action', 'adventure', 'science fiction'], 4.9, '../../../assets/images/2022-avatar-the-way-of-water.png'),
        ]
      },
  ] 
  }

  ngAfterViewInit(): void {
    this.flickityInstance = new Flickity(this.elementRef.nativeElement.querySelector('.carousel'), {
    });
  }
  
  onMovieSelect(movie: Movie) {
    this.MoviesService.selectMovie(movie);
  }

}

