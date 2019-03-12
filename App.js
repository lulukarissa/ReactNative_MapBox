import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native'
import Mapbox from '@mapbox/react-native-mapbox-gl'
Mapbox.setAccessToken('pk.eyJ1IjoibHVsdWthcmlzc2EiLCJhIjoiY2pzNDJlaGthMDBtMjRhbXA2N2ZkOGJmOSJ9.SshKpU9JdF05pYf3BIKzYQ')


class App extends Component{

  titikMarker(){
    return (
      <Mapbox.PointAnnotation
        key = 'titik'
        id = 'titik'
        coordinate = {[106.8222893, -6.2106448]}
      >
      <View style={desain.posisi}>
        <View style={desain.titik}/>
      </View>
      <Mapbox.Callout title='Hi, Im here' />
      </Mapbox.PointAnnotation>
    )
  }
  
    render() {
      return (
        <View style={desain.peta}>
          <Mapbox.MapView
          styleURL = {Mapbox.StyleURL.Street} //Street, Satellite, Dark, Light
          zoomLevel = {15} //defaultnya 17
          centerCoordinate = {[106.8222893, -6.2106448]} //garis bujur, lintang
          style = {desain.peta}
          >
          {this.titikMarker()}
          </Mapbox.MapView>
        </View>
      );
    }
  }

  var desain = StyleSheet.create({
    peta: {flex:1},
    posisi: {
      width: 25,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 20
    },
    titik: {
      width: 25,
      height: 25,
      borderRadius: 20,
      backgroundColor: 'red',
      transform: [{scale: 0.5}]
    }
  })

  export default App