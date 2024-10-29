import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { useMovie } from '../../hooks/useMovie'

export const DetailScreen = () => {

  const {movieId} = useRoute().params
  const {} = useMovie(movieId)


  return (
    <View>
        {/* header */}
        
    </View>
  )
}
