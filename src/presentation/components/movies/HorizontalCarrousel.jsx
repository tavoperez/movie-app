import React, { useEffect, useRef } from 'react'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'

export const HorizontalCarrousel = ({movies, title, loadNextPage}) => {

    useEffect(() => {
      setTimeout(() => {
        isLoading.current = false
      }, 200);
    }, [movies])
    

    const isLoading = useRef(false)

    const onScroll = (event) => {

        if (isLoading.current) return
        const { nativeEvent: { contentSize, contentOffset, layoutMeasurement } } = event;
       
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        if ( !isEndReached) return

        isLoading.current = true

        // cargar las siguientes peliculas
        loadNextPage && loadNextPage()
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
            // en caso de tener peliculas ID duplicadas, solo sirve como una solucion rapida
            // keyExtractor={(item, index) => `${item.id}-${index}`}
            horizontal
            showsHorizontalScrollIndicator= {false}
            onScroll= {onScroll}
        />
    </View>
  )
}
