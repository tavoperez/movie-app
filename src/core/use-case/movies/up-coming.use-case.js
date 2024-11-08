import { MovieDBMoviesResponse, Result } from "../../../infrastructure/interfaces/movies-db.responses";

export const moviesUpComingUseCase = async (fetcher, {page = 1} = {}) =>{
    try {
        const upComingData = await fetcher.get('/upcoming', {params: {page}});
        const upComing = new MovieDBMoviesResponse(
        upComingData.page,
        upComingData.results.map(result => new Result(
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
        upComingData.total_pages,
        upComingData.total_results
        );
        return upComing.results.map(result => result.toMovieEntity());
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - upComingData')
    }
}

