import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomLife = (props) => {
  const { toggleModal, setLifePoints } = props;
  const [value, setValue] = useState("");
  // fix inconsistent padding on "1" button

  const handleSetValue = (num) => {
    setValue(value.length === 3 ? value : value + num);
  };

  const backspaceValue = () => {
    value.length > 0 && setValue(value.slice(0, -1));
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} value={value} maxLength={1} />
      <View style={styles.numberContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("1")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("2")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("3")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("4")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("5")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("6")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("7")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("8")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetValue("9")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <View style={styles.flexEnd}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSetValue("0")}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => backspaceValue()}>
            <Ionicons
              style={styles.buttonBackspace}
              name="ios-backspace"
              size={35}
              color="#CCC"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { flexBasis: "75%" },
            value.length === 0 && { backgroundColor: "#CCC" },
          ]}
          onPress={() => {
            toggleModal();
            value.length > 0 && setLifePoints(parseInt(value));
          }}
        >
          <Text style={styles.buttonText}>
            {value.length ? "Set" : "Cancel"}
          </Text>
        </TouchableOpacity>
      </View>
      <Text>{typeof value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: "73%",
    height: "53%",
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  numberContainer: {
    flexBasis: "33%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#9f82b2",
    borderRadius: 10,
    padding: 15,
    paddingRight: 25,
    paddingLeft: 25,
    margin: 5,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "200",
    textAlign: "center",
  },
  textInput: {
    textAlign: "center",
    color: "#000",
    fontSize: 50,
    fontWeight: "200",
    padding: 10,
  },
  flexEnd: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBackspace: {
    paddingRight: 43,
    paddingLeft: 17,
    margin: 5,
    alignSelf: "flex-end",
  },
});

export default CustomLife;
