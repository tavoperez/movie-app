import { Movie } from "../../core/entities/movie.entity"

// implementamos el mapeo
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

    static fromMovieDBToEntity(result) {

        return new Movie (
            result.id,
            result.title,
            result.overview,
            new Date(result.release_date),
            result.vote_average,
            `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
            result.genres ? result.genres.map(genre => genre.name) : [],
            result.duration,
            result.budget,
            result.original_title,
            result.production_companies ? result.production_companies.map(company => company.name) : []


        )
    }
}