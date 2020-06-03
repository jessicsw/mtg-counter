import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { normalizedCenter } from "../helper/dimensions";

export default class StartScreen extends Component {
  nextScreen = () => {
    this.props.navigation.navigate("SetLife");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MTG Counter</Text>
        <TouchableOpacity style={styles.button} onPress={this.nextScreen}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    marginTop: normalizedCenter,
    fontSize: 40,
    fontWeight: "200",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "200",
  },
  button: {
    backgroundColor: "#9f82b2",
    marginTop: 50,
    padding: 15,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 10,
  },
});
