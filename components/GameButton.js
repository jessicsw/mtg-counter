import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function HomeButton(props) {
  const { numPlayers } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePosition = (() => {
    if (numPlayers === 1) {
      return styles.onePlayer;
    } else if (numPlayers === 2) {
      return styles.twoPlayers;
    } else if (numPlayers === 3) {
      return styles.threePlayers;
    } else if (numPlayers === 4) {
      return styles.fourPlayers;
    } else if (numPlayers === 5) {
      return styles.fivePlayers;
    } else if (numPlayers === 6) {
      return styles.sixPlayers;
    }
  })();

  return (
    <View style={[styles.container, handlePosition]}>
      <TouchableOpacity style={styles.center}>
        <Ionicons name='ios-options' size={45} color="white" />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: 75,
    height: 75,
    borderRadius: 50
  },
  center: {
    alignItems: 'center',
  },
  onePlayer: {
    bottom: 0,
    margin: 20,
    transform: [{ rotate: "-90deg" }]
  },
  twoPlayers: {
    bottom: '45%',
    alignSelf: 'center',
  },
  threePlayers: {
    bottom: '31%',
    left: '40%'
  }
});