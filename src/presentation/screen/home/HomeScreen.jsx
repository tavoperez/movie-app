import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'

export const HomeScreen = () => {

  const {} = useMovies()
  return (
    <View>
        <Text>homee</Text>
    </View>
  )
}
