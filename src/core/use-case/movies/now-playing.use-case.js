import { NowPlayingResponse, Result } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"

export const moviesNowPlayingUseCase = async (fetcher) =>{
    try {
        const nowPlayingData = await fetcher.get('/now_playing');
        const nowPlaying = new NowPlayingResponse(
        nowPlayingData.dates,
        nowPlayingData.page,
        nowPlayingData.results.map(result => new Result(
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
        nowPlayingData.total_pages,
        nowPlayingData.total_results
        );
        return nowPlaying.results.map(result => result.toMovieEntity());
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - NowPlaying')
    }
}

