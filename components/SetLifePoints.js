import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Header from "./Header";
import { normalizedCenter } from "../helper/dimensions";
import CustomLife from "./CustomLife";


const SetLifePoints = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const nextScreen = (lifePoints) => {
    props.navigation.navigate("SetPlayers", {
      lifePoints: lifePoints,
    });
  };

  const setCustomLife = () => {
    setIsModalVisible(!isModalVisible);
  };

  const generateLifePointButtons = (() => {
    let nums = [20, 30, 40];

    return nums.map(num => (
      <TouchableOpacity
        key={num}
        style={styles.button}
        onPress={() => nextScreen(num)}
      >
        <Text style={styles.buttonText}>{num}</Text>
      </TouchableOpacity>
    ));
  })();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SET LIFE POINTS</Text>
      <View style={styles.buttonContainer}>
        {generateLifePointButtons}
      </View>
      <TouchableOpacity
        style={styles.buttonBorder}
        onPress={() => setCustomLife()}
      >
        <Text style={[styles.buttonText, styles.purpleText]}>
          CUSTOM LIFE
          </Text>
      </TouchableOpacity>
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        hasBackdrop={true}
        isVisible={isModalVisible}
      >
        <CustomLife
          toggleModal={() => setIsModalVisible(!isModalVisible)}
          setLifePoints={(customLifePoints) => nextScreen(customLifePoints)}
        />
      </Modal>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginRight: 40,
    marginLeft: 40,
  },
  title: {
    marginTop: normalizedCenter,
    fontSize: 35,
    fontWeight: "200",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#9f82b2",
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    flexBasis: '21%',
    height: '31%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorder: {
    borderColor: "#9f82b2",
    borderWidth: 1,
    marginTop: 90,
    marginRight: 10,
    marginLeft: 10,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "200",
  },
  purpleText: {
    color: "#9f82b2"
  }
});

export default SetLifePoints;
