import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useLongPress from "../helper/useLongPress";


// NOTES
// Currently supports different layouts for 2 players

const PlayerCard = (props) => {
  const { player, lifePoints, layout, playerBackgroundColor } = props;
  const [playerLifePoints, setPlayerLifePoints] = useState(lifePoints);

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const setGameLayout = () => {
    if (layout === "180deg") {
      return player == 1 ? styles.topDown : styles.center;
    } else {
      return styles.sideBySide;
    }
  };

  const getComponentDimensions = (event) => {
    let { width, height } = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
  };

  //Setup absolute position and size of +/- buttons
  const setButtonPosition = (position) => {
    if (player == 1 && layout === "180deg") {
      return position === "top"
        ? styles.buttonAbsoluteBottom
        : styles.buttonAbsoluteTop;
    } else if (player == 2 && layout === "180deg") {
      return position === "top"
        ? styles.buttonAbsoluteTop
        : styles.buttonAbsoluteBottom;
    } else {
      return position === "top"
        ? styles.buttonSideBySidePlus
        : styles.buttonSideBySideMinus;
    }
  };

  const setButtonSize = () => {
    if (layout === "180deg") {
      return {
        width,
        height: height / 2,
      };
    } else {
      return {
        width: width / 2,
        height,
      };
    }
  };

  //Counter Functionality
  const addLife = () => {
    setPlayerLifePoints(playerLifePoints + 1);
  };

  const loseLife = () => {
    playerLifePoints > 0 && setPlayerLifePoints(playerLifePoints - 1);
  };

  return (
    <View style={styles.container}>
      <View
        onLayout={getComponentDimensions}
        style={[
          styles.playerCard,
          player > 1 && styles.marginTop,
          playerBackgroundColor,
        ]}
      >
        <View style={[setGameLayout(), styles.center]}>
          <View style={styles.center}>
            <Text style={styles.text}>{playerLifePoints}</Text>
            <AntDesign name="heart" size={30} color="#000" />
          </View>
        </View>
        <TouchableOpacity
          style={[
            setButtonPosition("top"),
            width && setButtonSize(),
            styles.button,
          ]}
          onPress={() => addLife()}
          {...useLongPress(addLife)}
        />
        <TouchableOpacity
          style={[
            setButtonPosition("bottom"),
            width && setButtonSize(),
            styles.button,
          ]}
          onPress={() => loseLife()}
          {...useLongPress(loseLife)}
        />
        <Text>{player}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },
  playerCard: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  topDown: {
    flex: 1,
    transform: [{ rotate: "180deg" }],
  },
  sideBySide: {
    flex: 1,
    transform: [{ rotate: "-90deg" }],
  },
  text: {
    fontSize: 225,
    letterSpacing: 0.6,
    fontWeight: "100",
    fontFamily: "Helvetica",
  },
  button: {
    flex: 1,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#fff",
    opacity: 0,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAbsoluteTop: {
    top: 0,
  },
  buttonAbsoluteBottom: {
    bottom: 0,
  },
  buttonSideBySidePlus: {
    left: 0,
  },
  buttonSideBySideMinus: {
    right: 0,
  },
  marginTop: {
    marginTop: 10,
  },
});

export default PlayerCard;
