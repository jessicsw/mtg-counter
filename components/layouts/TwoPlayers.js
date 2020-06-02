import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TwoPlayers = (props) => {
  const { nextScreen } = props;

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => nextScreen(1)}>
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
      <TouchableOpacity onPress={() => nextScreen(2)}>
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
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row"
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

export default TwoPlayers;