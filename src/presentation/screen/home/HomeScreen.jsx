import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarrousel } from '../../components/movies/HorizontalCarrousel'

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets()
  const {isLoading, nowPlaying, popular, topRated, upComing} = useMovies()

  if(isLoading){
    return (<Text>Cargando...</Text>)
    }
    
    const {results, total_pages, total_results} = nowPlaying
    
    const renderItem = () => {
        return results.map
    }

  return (
    <ScrollView>
      <View style={{marginTop: top, paddingBottom: 30}}>

        {/* principal */}
        <PosterCarousel
          movies={nowPlaying}
        />

        {/* populares */}
        <HorizontalCarrousel
          title="Populares"
          movies={popular}
        />

        {/* mejor calificadas */}
        <HorizontalCarrousel
          title="Mejor Calificadas"
          movies={topRated}
        />

        {/* mejor calificadas */}
        <HorizontalCarrousel
          title="Proximamente"
          movies={upComing}
        />
      </View>
    </ScrollView>
  )
}
