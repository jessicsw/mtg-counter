import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FivePlayers = (props) => {
  const { nextScreen } = props;

  const layoutOne = (() => {
    const nums = [1, 2, 3, 4];

    return nums.map(num => (
      num % 2 === 1
        ? <View key={num} style={styles.square}>
          <MaterialIcons
            style={{ transform: [{ rotate: "90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
        : <View key={num} style={styles.square}>
          <MaterialIcons
            style={{ transform: [{ rotate: "-90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
    ));
  })();

  const layoutTwo = (() => {
    const nums = [1, 2, 3, 4, 5];

    return nums.map(num => (
      num < 3
        ? <View key={num} style={[styles.halfColumnSquare]}>
          <MaterialIcons
            style={{ transform: [{ rotate: "90deg" }] }}
            name="person"
            size={28}
            color="#fff"
          />
        </View>
        : <View key={num} style={styles.thirdColumnSquare}>
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
        <View style={[styles.square, styles.lowerHeight, { flexBasis: '68%' }]}>
          <MaterialIcons
            name="person"
            size={28}
            color="#fff"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFlexColumn} onPress={() => nextScreen(2)}>
        {layoutTwo}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: '41%',
    justifyContent: 'center',
  },
  buttonFlexColumn: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flexBasis: '41%',
    height: '50%',
    alignContent: 'center',
  },
  square: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9f82b2",
    flexBasis: '33%',
    height: '14%',
    borderRadius: 10,
    margin: '1%'
  },
  halfColumnSquare: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9f82b2",
    flexBasis: '40%',
    padding: 15,
    borderRadius: 10,
    margin: '1%'
  },
  thirdColumnSquare: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9f82b2",
    flexBasis: '26%',
    padding: 15,
    borderRadius: 10,
    margin: '1%'
  },
  lowerHeight: {
    height: '12%'
  }
});

export default FivePlayers;