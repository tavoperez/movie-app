import { useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { MovieDetails } from '../../components/movie/MovieDetails'

export const DetailScreen = () => {

  const {movieId} = useRoute().params
  const {movie, isloading} = useMovie(movieId)
  
  if (isloading){
    return <Text>Cargando</Text>
  }


  return (
    <ScrollView>
        {/* header */}
        <MovieHeader movie={movie}/>

        {/* Details */}
        <MovieDetails 
          movie={movie}
/*           cast={cast}
          isloading={isloading} */
        />

    </ScrollView>
  )
}
