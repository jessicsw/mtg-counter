import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "./Header";
import { normalizedCenter } from "../helper/dimensions";


const SetPlayers = (props) => {
  const { navigate, state } = props.navigation;
  const { lifePoints } = state.params;

  const nextScreen = (numPlayers) => {
    numPlayers === 2
      ? navigate("ChooseTwoPlayerLayout", {
        numPlayers,
        lifePoints
      })
      : navigate("Game", {
        numPlayers,
        lifePoints
      });
  };

  const generatePlayerButtons = () => {
    let nums = [];

    for (let i = 1; i <= 6; i++) {
      nums.push(i);
    };

    return nums.map(num => (
      <TouchableOpacity key={num} style={styles.button} onPress={() => nextScreen(num)}>
        <Text style={styles.buttonText}>{num}</Text>
      </TouchableOpacity>
    ));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SET PLAYERS</Text>
      <View style={styles.buttonContainer}>
        {generatePlayerButtons()}
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
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginRight: 40,
    marginLeft: 40
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
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "200",
  },
});

export default SetPlayers;
