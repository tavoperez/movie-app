import { useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { MovieDetails } from '../../components/movie/MovieDetails'

export const DetailScreen = () => {

  const {movieId} = useRoute().params
  const {cast = [],movie, isloading} = useMovie(movieId)
  
  if (isloading) {
    return <FullScreenLoader/>;
  }


  return (
    <ScrollView>
        {/* header */}
        <MovieHeader movie={movie}/>

        {/* Details */}
        <MovieDetails 
          movie={movie}
          cast={cast}
          isloading={isloading}
        />

    </ScrollView>
  )
}
