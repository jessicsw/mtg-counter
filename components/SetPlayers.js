import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "./Header";
import { normalizedCenter } from "../helper/dimensions";
import { addPlayerBackgroundColors } from "../helper/addBackgroundColor";


const SetPlayers = ({ navigation }) => {
  const { navigate, state } = navigation;
  const { lifePoints } = state.params;

  const nextScreen = (numPlayers) => {
    switch (numPlayers) {
      case 1:
      case 3:
        navigate("Game", {
          numPlayers,
          lifePoints,
          playerBackgroundColors: addPlayerBackgroundColors(numPlayers),
        });
        break;
      case 2:
      case 4:
      case 5:
      case 6:
        navigate("SetLayout", {
          numPlayers,
          lifePoints,
          playerBackgroundColors: addPlayerBackgroundColors(numPlayers),
        });
        break;
    }
  };

  const generatePlayerButtons = (() => {
    let nums = [1, 2, 3, 4, 5, 6];

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
      <Text style={styles.title}>SET PLAYERS</Text>
      <View style={styles.buttonContainer}>
        {generatePlayerButtons}
      </View>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    flexWrap: 'wrap',
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
    alignItems: 'center',
    flexBasis: '20%',
    height: '20%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "200",
  },
});

export default SetPlayers;
