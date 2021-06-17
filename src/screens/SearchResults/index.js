import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../../components/Post';
import feeds from '../../../assets/data/feeds';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList data={feeds} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
