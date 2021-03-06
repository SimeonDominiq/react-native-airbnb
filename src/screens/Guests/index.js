/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View>
        <View style={styles.row}>
          <View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Adults</Text>
              <Text style={{color: '#8d8d8d'}}>Ages 13 or Above</Text>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>

            <Text style={styles.counterText}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Children</Text>
              <Text style={{color: '#8d8d8d'}}>Ages 2 - 12</Text>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>

            <Text style={styles.counterText}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Infants</Text>
              <Text style={{color: '#8d8d8d'}}>Under 2</Text>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>

            <Text style={styles.counterText}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
