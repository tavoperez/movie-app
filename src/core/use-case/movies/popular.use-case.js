import { MovieDBMoviesResponse, Result } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"

export const moviesPopularUseCase = async (fetcher, { page = 1 } = {}) => {
    try {
      const PopularData = await fetcher.get('/popular', { params: { page } });
      const popular = new MovieDBMoviesResponse(
        PopularData.page,
        PopularData.results.map(result => new Result(
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
        PopularData.total_pages,
        PopularData.total_results
      );
      return popular.results.map(result => result.toMovieEntity());
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching movies - Popular');
    }
  };
  

