import React from 'react-native';
import {View, Text, Image} from 'react-native';
import styles from './Styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
    </View>
  );
};

export default Post;
