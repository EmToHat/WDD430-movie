// movie-model.ts

export interface Movie {
    id: number;
    title: string;
    directors: string[];
    writers: string[];
    actors: string[];
    tags: string[];
    rating: number;
    imageUrl: string;
    videoUrl: string;
}

export interface Category {
    name: string;
    movies: Movie[];
}

export interface MovieData {
    categories: Category[];
}

