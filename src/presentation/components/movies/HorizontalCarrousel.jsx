import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'

export const HorizontalCarrousel = ({movies, title}) => {

    const onScroll = (event) => {
        const {nativeEvent} = event
        console.log(nativeEvent)
        /* const {contentOffset, contentSize, layoutMeasurement} = event.nativeEvent
        console.log(contentOffset, contentSize, layoutMeasurement) */
    }

  return (
    <View
        style={{
            height: title ? 260 : 220
        }}
    >
        {
            title && (
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 300,
                        marginLeft: 10,
                        marginButton: 10
                    }}
                >
                    {title}
                </Text>
            )
        }

        <FlatList
            data={movies}
            renderItem={({item}) => (
                <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator= {false}
            onScroll= {onScroll}
        />
    </View>
  )
}
