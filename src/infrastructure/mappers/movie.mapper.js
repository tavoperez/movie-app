import { Movie } from "../../core/entities/movie.entity"

export class MovieMapper {
    static fromMovieDBResultToEntity(result) {
        /* console.log('Mapping result prueba:', result); */
        return new Movie (
            result.id,
            result.title,
            result.overview,
            new Date(result.release_date),
            result.vote_average,
            `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
        )
    }
}