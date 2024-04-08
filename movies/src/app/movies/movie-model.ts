export class Movie {
    constructor(
        public id: number,
        public title: string,
        public director: string[],
        public writer: string[],
        public actor: string[],
        public tags: string[], 
        public rating: number,
        public imageUrl?: string, // Optional property for movie image URL
        public videoUrl?: string
    ) {}
}