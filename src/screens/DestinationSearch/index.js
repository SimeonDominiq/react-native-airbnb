/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import styles from './Styles';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        query={{
          key: 'AIzaSyDgZc0yvZgcU3D4F8r1NedFZrd3vNmUp3U',
          language: 'en',
          types: '(cities)',
        }}
        styles={{
          textInput: styles.textInput,
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
