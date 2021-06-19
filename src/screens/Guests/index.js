import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './Styles';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
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
  );
};

export default GuestScreen;
