/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../../components/CustomMarker';
import places from '../../../../assets/data/feeds';
import PostCarouselItem from '../../../components/Post/PostCarouselItem';
import styles from './Styles';

/**
 * N:B => PROVIDER_GOOGLE constant is imported to send as props to the Mapview
 * So that on ios it uses the Google maps rather than the IOS maps
 * @returns
 */
const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MapView
        style={{
          width: '100%',
          height: '100%',
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place, _i) => (
          <CustomMarker
            coordinates={place.coordinate}
            key={_i}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={styles.mapsCarousel}>
        <PostCarouselItem post={places[0]} />
      </View>
    </View>
  );
};

export default SearchResultsMap;
