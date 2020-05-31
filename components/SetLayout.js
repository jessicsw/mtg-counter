import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "./Header";
import { normalizedCenter } from "../helper/dimensions";

const SetLayout = props => {
  const { players } = props.navigation.state.params;

  const nextScreen = layout => {
    props.navigation.navigate("Game", {
      players: players,
      layout: layout
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>CHOOSE LAYOUT</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => nextScreen("180deg")}>
            <View style={styles.square}>
              <MaterialIcons
                style={{ transform: [{ rotate: "180deg" }] }}
                name="person"
                size={65}
                color="#fff"
              />
            </View>
            <View style={styles.square}>
              <MaterialIcons name="person" size={65} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nextScreen("-90deg")}>
            <View style={styles.square}>
              <MaterialIcons
                style={{ transform: [{ rotate: "-90deg" }] }}
                name="person"
                size={60}
                color="#fff"
              />
            </View>
            <View style={styles.square}>
              <MaterialIcons
                style={{ transform: [{ rotate: "-90deg" }] }}
                name="person"
                size={60}
                color="#fff"
              />
            </View>
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
    backgroundColor: "#F5FCFF"
  },
  contentContainer: {
    flex: 1,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  title: {
    marginTop: normalizedCenter,
    fontSize: 35,
    fontWeight: "200",
    marginBottom: 40
  },
  square: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9f82b2",
    height: 110,
    width: 110,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 25,
    marginLeft: 25
  }
});

export default SetLayout;
