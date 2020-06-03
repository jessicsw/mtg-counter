import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useLongPress from '../../helper/useLongPress';

const ThreePlayerCard = (props) => {
  const { player, lifePoints, playerBackgroundColor } = props;
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
    if (player === 1 || player === 3) {
      return position === "+"
        ? styles.buttonAbsoluteRight
        : styles.buttonAbsoluteLeft;
    } else {
      return position === "+"
        ? styles.buttonAbsoluteLeft
        : styles.buttonAbsoluteRight;
    };
  };

  const setButtonSize = (() => {
    return {
      width: width / 2,
      height,
    };
  })();

  //Counter Functionality
  const addLife = () => {
    setPlayerLifePoints(playerLifePoints + 1);
  };

  const loseLife = () => {
    playerLifePoints > 0 && setPlayerLifePoints(playerLifePoints - 1);
  };

  // Adds CSS unique to layout
  const handleTextTransform = (() => {
    if (player === 1 || player === 3) {
      return styles.leftTransform;
    } else {
      return styles.rightTransform;
    }
  })();

  const addMargins = (() => {
    if (player === 1) {
      return { marginRight: 10 };
    } else if (player === 3) {
      return { marginTop: 10, marginRight: 10 };
    } else if (player === 4) {
      return { marginTop: 10 };
    }
  })();

  return (
    <View style={styles.container}>
      <View
        onLayout={getComponentDimensions}
        style={[
          styles.playerCard,
          playerBackgroundColor,
          addMargins
        ]}
      >
        <View style={[styles.center, handleTextTransform]}>
          <Text style={styles.text}>{playerLifePoints}</Text>
          <AntDesign name="heart" size={30} color="#000" />
        </View>
        <TouchableOpacity
          style={[
            setButtonPosition("+"),
            width && setButtonSize,
            styles.button,
          ]}
          onPress={() => addLife()}
          {...useLongPress(addLife)}
        />
        <TouchableOpacity
          style={[
            setButtonPosition("-"),
            width && setButtonSize,
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
    flexBasis: '50%',
    backgroundColor: '#000'
  },
  playerCard: {
    flexBasis: '50%',
    borderRadius: 10,
    justifyContent: 'center'
  },
  text: {
    fontSize: 130,
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
  leftTransform: {
    transform: [{ rotate: "90deg" }]
  },
  rightTransform: {
    transform: [{ rotate: "-90deg" }]
  },
});

export default ThreePlayerCard;
