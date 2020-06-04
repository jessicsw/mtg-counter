import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SixPlayers = (props) => {
  const { nextScreen } = props;

  const layoutOne = (() => {
    const nums = [1, 2, 3, 4, 5, 6];

    return nums.map(num => (
      num % 2 === 1
        ? <View key={num} style={[styles.square, styles.boostHeight]}>
          <MaterialIcons
            style={{ transform: [{ rotate: "90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
        : <View key={num} style={[styles.square, styles.boostHeight]}>
          <MaterialIcons
            style={{ transform: [{ rotate: "-90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
    ));
  })();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => nextScreen(1)}>
        {layoutOne}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => nextScreen(2)}>
        <View style={[styles.square, { flexBasis: '73%', height: '12.5%' }]}>
          <MaterialIcons
            style={{ transform: [{ rotate: "180deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
        <View style={styles.square}>
          <MaterialIcons
            style={{ transform: [{ rotate: "90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
        <View style={styles.square}>
          <MaterialIcons
            style={{ transform: [{ rotate: "-90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
        <View style={styles.square}>
          <MaterialIcons
            style={{ transform: [{ rotate: "90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
        <View style={styles.square}>
          <MaterialIcons
            style={{ transform: [{ rotate: "-90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
        <View style={[styles.square, { flexBasis: '73%', height: '12.5%' }]}>
          <MaterialIcons
            name="person"
            size={28}
            color="#fff"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '95%',
    flexDirection: "row",
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: '43%',
    justifyContent: 'center',
    height: '100%'
  },
  square: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9f82b2",
    flexBasis: '35%',
    height: '17%',
    borderRadius: 10,
    margin: '1%'
  },
  boostHeight: {
    height: '20%',
  }
});

export default SixPlayers;