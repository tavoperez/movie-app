import React, { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-case/movies/now-playing.use-case'
import * as Upcoming from '../../core/use-case/movies/up-coming.use-case'
import * as TopRate from '../../core/use-case/movies/top-rated.use-case'
import * as Popular from '../../core/use-case/movies/popular.use-case'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState([])
    const [upComing, setUpComing] = useState([])
    const [topRated, setTopRated] = useState([])
    const [popular, setPopular] = useState([])

    useEffect(() => {
      
      initialLoad()

    }, [])

    const initialLoad = async () =>{
        const [nowPlayingMovies, popularMovies, topRateMovies, upComingMovies] = await Promise.all([
          UseCases.moviesNowPlayingUseCase(movieDBFetcher),
          Popular.moviesPopularUseCase(movieDBFetcher),
          TopRate.moviesTopRatedUseCase(movieDBFetcher),
          Upcoming.moviesUpComingUseCase(movieDBFetcher)
        ])

        setNowPlaying(nowPlayingMovies),
        setUpComing(upComingMovies),
        setTopRated(topRateMovies),
        setPopular(popularMovies),
        setIsLoading(false)

         // Imprimir cada resultado individualment
         console.log('Now Playing Movies:', nowPlayingMovies[1]);
         console.log('Popular Movies:', popularMovies[1]);
         console.log('Top Rated Movies:', topRateMovies[2]);
         console.log('Up Coming Movies:', upComingMovies[3]);
    }
    

  return {
    isLoading,
    nowPlaying,
    topRated,
    popular,
    upComing
  }
}