import { MovieDBMoviesResponse, Result } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"

export const moviesTopRatedUseCase = async (fetcher) =>{
    try {
        const topRateData = await fetcher.get('/top_rate');
        const topRate = new MovieDBMoviesResponse(
        topRateData.page,
        topRateData.results.map(result => new Result(
            result.adult,
            result.backdrop_path,
            result.genre_ids,
            result.id,
            result.original_language,
            result.original_title,
            result.overview,
            result.popularity,
            result.poster_path,
            result.release_date,
            result.title,
            result.video,
            result.vote_average,
            result.vote_count
        )),
        topRateData.total_pages,
        topRateData.total_results
        );
        return topRate.results.map(result => result.toMovieEntity());
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - TopRate')
    }
}

