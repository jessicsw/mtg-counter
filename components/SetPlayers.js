import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "./Header";
import { normalizedCenter } from "../helper/dimensions";

const SetPlayers = (props) => {
  const { navigate, state } = props.navigation;

  const nextScreen = (numPlayers) => {
    let players = {};

    for (let i = 1; i <= numPlayers; i++) {
      players[i] = state.params.lifePoints;
    }

    numPlayers === 2
      ? navigate("SetLayout", {
          players,
        })
      : navigate("Game", {
          players,
        });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>SET PLAYERS</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => nextScreen(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => nextScreen(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => nextScreen(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => nextScreen(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => nextScreen(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => nextScreen(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
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
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "200",
  },
});

export default SetPlayers;
