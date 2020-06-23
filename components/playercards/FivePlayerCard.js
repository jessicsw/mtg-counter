import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useLongPress from '../../helper/useLongPress';

const FivePlayerCard = ({
  player,
  lifePoints,
  layout,
  playerBackgroundColor,
  handleResetLifePoints,
  resetLifePoints }) => {
  const [playerLifePoints, setPlayerLifePoints] = useState(lifePoints);

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    setPlayerLifePoints(lifePoints);
    handleResetLifePoints(false);
  }, [resetLifePoints])

  const getComponentDimensions = (event) => {
    let { width, height } = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
  };

  //Setup absolute position and size of +/- buttons
  const setButtonPosition = (position) => {
    if (layout === 1) {
      if (player === 1 || player === 3) {
        return position === "+"
          ? styles.buttonAbsoluteRight
          : styles.buttonAbsoluteLeft;
      } else if (player === 2 || player === 4) {
        return position === "+"
          ? styles.buttonAbsoluteLeft
          : styles.buttonAbsoluteRight;
      } else {
        return position === "+"
          ? styles.buttonAbsoluteTop
          : styles.buttonAbsoluteBottom;
      };
    } else {
      if (player < 4) {
        return position === "+"
          ? styles.buttonAbsoluteLeft
          : styles.buttonAbsoluteRight;
      } else {
        return position === "+"
          ? styles.buttonAbsoluteRight
          : styles.buttonAbsoluteLeft;
      };
    };
  };

  const setButtonSize = (() => {
    if (layout === 1) {
      if (player < 5) {
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
    } else {
      return {
        width: width / 2,
        height,
      };
    }
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
    if (layout === 1) {
      if (player === 1 || player === 3) {
        return styles.leftTransform;
      } else if (player === 2 || player === 4) {
        return styles.rightTransform;
      };
    } else {
      if (player < 4) {
        return styles.rightTransform;
      } else {
        return styles.leftTransform;
      }
    }
  })();

  const addMargins = (() => {
    if (layout === 1) {
      if (player === 1) {
        return { marginRight: 10 };
      } else if (player === 3) {
        return { marginTop: 10, marginRight: 10 };
      } else if (player === 4 || player === 5) {
        return { marginTop: 10 };
      };
    } else {
      if (player === 1 || player === 2) {
        return { marginBottom: 10 };
      } else if (player === 4) {
        return { marginBottom: 10, marginRight: 10 };
      } else if (player === 5) {
        return { marginRight: 10 };
      }
    }
  })();

  const setPlayerCards = (() => {
    if (layout === 1) {
      return styles.playerCardLayoutOne;
    } else {
      return styles.playerCardLayoutTwo;
    }
  })();

  const addFlexBasis = layout === 1 ? styles.halfWidthFlexBasis : styles.thirdWidthFlexBasis;

  return (
    <View style={[styles.container, addFlexBasis]}>
      <View
        onLayout={getComponentDimensions}
        style={[
          setPlayerCards,
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
    width: '50%',
    backgroundColor: '#000',
  },
  playerCardLayoutOne: {
    flexBasis: '33%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  playerCardLayoutTwo: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
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
  thirdWidthFlexBasis: {
    flexBasis: '33%',
  },
  halfWidthFlexBasis: {
    flexBasis: '50%',
  }
});

export default FivePlayerCard;
