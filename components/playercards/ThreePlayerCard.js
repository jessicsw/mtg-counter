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
    if (player === 1) {
      return position === "+"
        ? styles.buttonAbsoluteRight
        : styles.buttonAbsoluteLeft;
    } else if (player === 2) {
      return position === "+"
        ? styles.buttonAbsoluteLeft
        : styles.buttonAbsoluteRight;
    } else {
      return position === "+"
        ? styles.buttonAbsoluteTop
        : styles.buttonAbsoluteBottom;
    }
  };

  const setButtonSize = () => {
    if (player < 3) {
      return {
        width: width / 2,
        height,
      };
    } else {
      return {
        width,
        height: height / 2,
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

  // Adds CSS unique to layout
  const handleTextTransform = (() => {
    if (player == 1) {
      return styles.leftTransform;
    } else if (player == 2) {
      return styles.rightTransform;
    }
  })();

  const addMargins = (() => {
    if (player === 1) {
      return { marginRight: 10 };
    } else if (player === 3) {
      return { marginTop: 10 };
    }
  })();

  const addFlexBasis = (() => {
    if (player < 3) {
      return { flexBasis: '66%' };
    } else {
      return { flexBasis: '34%' };
    }
  })();

  return (
    <View style={styles.container}>
      <View
        onLayout={getComponentDimensions}
        style={[
          styles.playerCard,
          playerBackgroundColor,
          addMargins,
          addFlexBasis
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
    flexBasis: '50%',
    backgroundColor: '#000'
  },
  playerCard: {
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
