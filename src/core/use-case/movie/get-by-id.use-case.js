import { MovieDBMovie } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

// caso de uso
export const getMovieByIdUseCase = async(fetcher, movieId) =>{
    try {
        const movieData = await fetcher.get(`/${movieId}`)
        const fullMovie = new MovieDBMovie(
            movieData.adult,
            movieData.backdrop_path,
            movieData.belongs_to_collection,
            movieData.budget,
            movieData.genres,
            movieData.homepage,
            movieData.id,
            movieData.imdb_id,
            movieData.original_language,
            movieData.original_title,
            movieData.overview,
            movieData.popularity,
            movieData.poster_path,
            movieData.production_companies,
            movieData.production_countries,
            movieData.release_date,
            movieData.revenue,
            movieData.runtime,
            movieData.spoken_languages,
            movieData.status,
            movieData.tagline,
            movieData.title,
            movieData.video,
            movieData.vote_average,
            movieData.vote_count
        )

        return MovieMapper.fromMovieDBToEntity(fullMovie)
    } catch (error) {
        console.log(error)
        throw new Error(`Cannot get movie by id: ${movieId}`);
    }
}