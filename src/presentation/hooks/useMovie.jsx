import React, { useEffect, useState } from 'react'
import { fullMovie } from '../../core/entities/movie.entity'
import * as useCase from '../../core/use-case'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'

export const useMovie = (movieId) => {
    const [isLoading, setisLoading] = useState(true)
    const [movie, setMovie] = useState()

    useEffect(() => {
        loadMovie()
    }, [movieId])

    const loadMovie = async () =>{
      //llamar el caso de uso
      setisLoading(true)

      const fullMovie = await useCase.getMovieByIdUseCase(movieDBFetcher, movieId)
      setMovie(fullMovie)
      setisLoading(false)
      console.log(fullMovie)

    }
    
  return {

  }
}

