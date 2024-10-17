import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'

export const MoviePoster = ({movie, height = 420, width= 300}) => {

    const natigation = useNavigation()

  return (
    <Pressable
    onPress={() => natigation.navigate('Detail', {movieId: movie.id})}
    style={({pressed}) => ({
        width,
        height,
        opacity: pressed? 0.7 : 1,
        paddingHorizontal: 7,
        paddingBottom: 20,
        marginHorizontal: 4,
    })
    }
    >
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{uri: movie.poster}}
            />
        </View>
    </Pressable>

  )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    }
})