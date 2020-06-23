import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons, MaterialIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { resetBackgroundColors } from '../helper/addBackgroundColor';


const HomeButton = ({ numPlayers, navigation, layout, handleResetLifePoints }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePosition = (() => {
    if (numPlayers === 1) {
      return styles.onePlayer;
    } else if (numPlayers === 2) {
      return styles.twoPlayers;
    } else if (numPlayers === 3) {
      return styles.threePlayers;
    } else if (numPlayers === 4) {
      return layout === 1
        ? styles.fourPlayersLayoutOne
        : styles.fourPlayersLayoutTwo
    } else if (numPlayers === 5) {
      return layout === 1
        ? styles.fivePlayersLayoutOne
        : styles.fivePlayersLayoutTwo
    } else if (numPlayers === 6) {
      return layout === 1
        ? styles.sixPlayersLayoutOne
        : styles.sixPlayersLayoutTwo
    }
  })();

  const handleMainMenuButton = () => {
    setIsModalVisible(!isModalVisible);
    resetBackgroundColors();
  };

  const handleResetButton = () => {
    setIsModalVisible(!isModalVisible);
    handleResetLifePoints(true);
  };

  return (
    <View style={[styles.container, handlePosition]}>
      <TouchableOpacity
        style={styles.center}
        onPress={() => setIsModalVisible(!isModalVisible)}
      >
        <Ionicons name='ios-options' size={45} color="white" />
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          hasBackdrop={true}
          isVisible={isModalVisible}
          backdropOpacity={0.9}
          backdropTransitionOutTiming={0}
        >
          <View style={styles.modalButtons}>
            <View style={styles.modalButton}>
              <TouchableOpacity>
                <AntDesign name="clockcircleo" size={50} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Timer</Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity onPress={() => handleResetButton()}>
                <Ionicons name="ios-refresh" size={54} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Reset</Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity>
                <MaterialCommunityIcons name="format-letter-case" size={55} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Names</Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity>
                <SimpleLineIcons name="magnifier" size={45} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Chooser</Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity>
                <MaterialIcons name="history" size={55} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>History</Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity>
                <FontAwesome5 name="dice-d20" size={49} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Dice</Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity
                onPress={() => handleMainMenuButton()}
                onPressOut={() => navigation.popToTop()}
              >
                <AntDesign name="home" size={48} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Main Menu</Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity onPressOut={() => setIsModalVisible(!isModalVisible)}>
                <AntDesign name="back" size={50} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Back</Text>
            </View>
          </View>
        </Modal>
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
  modalButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  modalButton: {
    justifyContent: 'flex-end',
    flexBasis: '33%',
    alignItems: 'center',
    marginBottom: 25
  },
  text: {
    color: "#fff",
    margin: 5
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
  },
  fourPlayersLayoutOne: {
    alignSelf: 'center',
    left: '40%'
  },
  fourPlayersLayoutTwo: {
    left: '40%',
    top: '29%'
  },
  fivePlayersLayoutOne: {
    left: '40%',
    bottom: '29%'
  },
  fivePlayersLayoutTwo: {
    left: '15%',
    top: '45%'
  },
  sixPlayersLayoutOne: {
    left: '40%',
    top: '29%'
  },
  sixPlayersLayoutTwo: {
    alignSelf: 'center',
    left: '40%'
  },
});

export default HomeButton;