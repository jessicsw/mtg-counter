import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useLongPress from "../../helper/useLongPress";

const DefaultPlayerCard = (props) => {
  const { player, lifePoints, layout, playerBackgroundColor } = props;
  const [playerLifePoints, setPlayerLifePoints] = useState(lifePoints);

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const getComponentDimensions = (event) => {
    let { width, height } = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
  };

  //Setup absolute position and size of +/- buttons
  const setButtonPosition = (position) => {
    if (player == 1 && layout === 1) {
      return position === "+"
        ? styles.buttonAbsoluteBottom
        : styles.buttonAbsoluteTop;
    } else if (player == 2 && layout === 1) {
      return position === "+"
        ? styles.buttonAbsoluteTop
        : styles.buttonAbsoluteBottom;
    } else {
      return position === "+"
        ? styles.buttonAbsoluteLeft
        : styles.buttonAbsoluteRight;
    }
  };

  const setButtonSize = () => {
    if (layout === 1) {
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

  const handleTextTransform = (() => {
    if (layout === 1) {
      return player === 1 ? styles.topTransform : styles.center;
    } else {
      return styles.rightTransform;
    }
  })();

  return (
    <View style={styles.container}>
      <View
        onLayout={getComponentDimensions}
        style={[
          styles.playerCard,
          player === 2 && styles.marginTop,
          playerBackgroundColor,
        ]}
      >
        <View style={[styles.center, handleTextTransform]}>
          <Text style={styles.text}>{playerLifePoints}</Text>
          <AntDesign name="heart" size={30} color="#000" />
        </View>
        <TouchableOpacity
          style={[
            setButtonPosition("+"),
            width && setButtonSize(),
            styles.button,
          ]}
          onPress={() => addLife()}
          {...useLongPress(addLife)}
        />
        <TouchableOpacity
          style={[
            setButtonPosition("-"),
            width && setButtonSize(),
            styles.button,
          ]}
          onPress={() => loseLife()}
          {...useLongPress(loseLife)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexBasis: '50%',
    backgroundColor: '#000'
  },
  playerCard: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  topTransform: {
    transform: [{ rotate: "180deg" }]
  },
  rightTransform: {
    transform: [{ rotate: "-90deg" }]
  },
  text: {
    fontSize: 225,
    letterSpacing: 0.6,
    fontWeight: "100",
    fontFamily: "Helvetica",
  },
  button: {
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#fff",
    opacity: 0,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAbsoluteTop: {
    top: 0,
  },
  buttonAbsoluteBottom: {
    bottom: 0,
  },
  buttonAbsoluteLeft: {
    left: 0,
  },
  buttonAbsoluteRight: {
    right: 0,
  },
  marginTop: {
    marginTop: 10,
  },
});

export default DefaultPlayerCard;
