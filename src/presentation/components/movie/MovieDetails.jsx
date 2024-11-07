import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Formatter } from '../../../config/helpers/formatter';
import { CastActor } from '../cast/CastActor';
import { FullScreenLoader } from '../loaders/FullScreenLoader';

export const MovieDetails = ({movie, cast, isloading}) => {

    if (isloading) {
        return <FullScreenLoader/>;
    }

    if (!movie) {
        return <Text></Text>;
    }

    // En lugar de hacer console.log de un objeto completo, se pueden mostrar propiedades específicas
/*     console.log("película: ", movie); */
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>

          <Text style={{marginLeft: 5}}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{ movie.description }</Text>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
        </Text>

        <Text style={{ fontSize: 18 }}>
          { Formatter.currency( movie.budget) }
        </Text>
      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <Text style={{
          fontSize: 23,
          marginVertical: 10,
          fontWeight: 'bold',
          marginHorizontal: 20
        }}>
          Actores
        </Text>


          <FlatList 
            data={ cast }
            keyExtractor={ (item) => item.id.toString() }
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={ ({item}) => <CastActor actor={ item } /> }
          />


      </View>
    </>
  )
}
