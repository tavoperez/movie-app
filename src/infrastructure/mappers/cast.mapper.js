import { Cast } from "../../core/entities/cast.entity";

export class CastMapper {
    static fromMovieDBCastToEntity(cast){
        return new Cast (
            cast.id,
            cast.name,
            cast.character,
            cast.profile_path
            ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
            : 'https://i.stack.imgur.com/l60Hf.png',
        )
    }
}