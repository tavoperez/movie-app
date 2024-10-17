import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'

export const PosterCarousel = ({height, movies}) => {
  return (
    <View style={{height}}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // scrollEventThrottle={16}
        >
            {
                movies.map(movie => <MoviePoster
                    key={movie.id}
                    movie={movie}
                />)
            }
        </ScrollView>
    </View>
  )
}
