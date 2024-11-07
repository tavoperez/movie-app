import React, { useEffect, useState } from 'react'
import * as useCase from '../../core/use-case'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'

export const useMovie = (movieId) => {
    const [isLoading, setisLoading] = useState(true)
    const [movie, setMovie] = useState()
    const [cast, setCast] = useState([]);

    useEffect(() => {
        loadMovie()
    }, [movieId])

    const loadMovie = async () =>{
      //llamar el caso de uso
      setisLoading(true)

      const fullMoviePromise = useCase.getMovieByIdUseCase(movieDBFetcher, movieId)
      const dataCastPromise = useCase.getMovieCastUseCase(movieDBFetcher, movieId)

      const [fullMovie, dataCast] = await Promise.all([fullMoviePromise, dataCastPromise])

      setMovie(fullMovie)
      setCast(dataCast)

      setisLoading(false)
/*       console.log(dataCast) */

    }
    
  return {
    movie,
    isLoading,
    cast
  }
}

