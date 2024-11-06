import { MovieDBCastResponse, MovieDBCast } from "../../../infrastructure/interfaces/movies-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";

export const getMovieCastUseCase = async(fetcher, movieId) =>{
    try {
        const movieCastResponse = await fetcher.get(`/${movieId}/credits`);
        const movieDBCastResponse = new MovieDBCastResponse(
            movieCastResponse.id,
            movieCastResponse.cast,
            movieCastResponse.crew
        );

        const castEntities = movieDBCastResponse.cast.map(cast => {
            const movieDBCast = new MovieDBCast(
                cast.adult,
                cast.gender,
                cast.id,
                cast.known_for_department,
                cast.name,
                cast.original_name,
                cast.popularity,
                cast.profile_path,
                cast.cast_id,
                cast.character,
                cast.credit_id,
                cast.order,
                cast.department,
                cast.job
            );
            return CastMapper.fromMovieDBCastToEntity(movieDBCast);
        });

        return castEntities;

    } catch (error) {
        throw new Error(`cannot get movie cast ${movieId}`);
    }
}