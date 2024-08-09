import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

class MapViewComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 44.64753126411131,
            longitude: -63.57958849584701,
            latitudeDelta: 0.03,
            longitudeDelta: 0.02,
          }}
        >
          <Marker
            coordinate={{ latitude: 44.64753126411131, longitude: -63.57958849584701 }}
            title="Halifax Citadel yo!"
            description="National Historic Site"
          />

        <Marker
            coordinate={{ latitude: 44.64893396269401, longitude: -63.57550264560449 }}
            title="Halifax City Hall heyoo!"
            description="1841 Argyle St, Halifax, NS B3J 3A5"
        />

        <Marker
            coordinate={{ latitude: 44.6430986309019, longitude: -63.58169257389234 }}
            title="Halifax Public Gardens!"
            description="It's a beautiful place!"
        />


        </MapView>
      </View>
    );
  }
}

export default MapViewComponent;
