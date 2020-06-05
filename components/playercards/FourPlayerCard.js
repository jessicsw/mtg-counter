import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useLongPress from '../../helper/useLongPress';

const FourPlayerCard = (props) => {
  const { player, lifePoints, playerBackgroundColor, layout } = props;
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
    if (layout === 1) {
      if (player === 1 || player === 3) {
        return position === "+"
          ? styles.buttonAbsoluteRight
          : styles.buttonAbsoluteLeft;
      } else {
        return position === "+"
          ? styles.buttonAbsoluteLeft
          : styles.buttonAbsoluteRight;
      };
    } else {
      if (player === 1) {
        return position === "+"
          ? styles.buttonAbsoluteBottom
          : styles.buttonAbsoluteTop;
      } else if (player === 2) {
        return position === "+"
          ? styles.buttonAbsoluteRight
          : styles.buttonAbsoluteLeft;
      } else if (player === 3) {
        return position === "+"
          ? styles.buttonAbsoluteLeft
          : styles.buttonAbsoluteRight;
      } else if (player === 4) {
        return position === "+"
          ? styles.buttonAbsoluteTop
          : styles.buttonAbsoluteBottom;
      }
    }
  };

  const setButtonSize = (() => {
    if (layout === 1) {
      return {
        width: width / 2,
        height,
      };
    } else {
      if (player === 2 || player === 3) {
        return {
          width: width / 2,
          height,
        };
      } else {
        return {
          width,
          height: height / 2,
        };
      };
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
    if (layout === 1) {
      if (player === 1 || player === 3) {
        return styles.leftTransform;
      } else {
        return styles.rightTransform;
      }
    } else {
      if (player === 1) {
        return styles.topTransform;
      } else if (player === 2) {
        return styles.leftTransform;
      } else if (player === 3) {
        return styles.rightTransform;
      }
    }
  })();

  const addMargins = (() => {
    if (layout === 1) {
      if (player === 1) {
        return { marginRight: 10 };
      } else if (player === 3) {
        return { marginTop: 10, marginRight: 10 };
      } else if (player === 4) {
        return { marginTop: 10 };
      }
    } else {
      if (player === 1) {
        return { marginBottom: 10 }
      } else if (player === 2) {
        return { marginRight: 10 }
      } else if (player === 4) {
        return { marginTop: 10 }
      }
    }
  })();

  const addFlexBasis = (() => {
    if (layout === 2) {
      if (player === 1 || player === 4) {
        return styles.fullWidthFlexBasis;
      } else {
        return styles.halfWidthFlexBasis;
      }
    }
  })();

  const setPlayerCardStyles = (() => {
    if (layout === 1) {
      return styles.playerCardLayoutOne;
    } else {
      return styles.playerCardLayoutTwo;
    }
  })();

  const setContainerStyles = (() => {
    if (layout === 1) {
      return styles.containerLayoutOne;
    } else {
      return styles.containerLayoutTwo;
    }
  })();

  return (

    <View style={[setContainerStyles, addFlexBasis]}>
      <View
        onLayout={getComponentDimensions}
        style={[
          setPlayerCardStyles,
          playerBackgroundColor,
          addMargins,
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
  containerLayoutOne: {
    flex: 1,
    flexBasis: '50%',
    backgroundColor: '#000'
  },
  containerLayoutTwo: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
  },
  playerCardLayoutOne: {
    flexBasis: '50%',
    borderRadius: 10,
    justifyContent: 'center'
  },
  playerCardLayoutTwo: {
    flexBasis: '33%',
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
  topTransform: {
    transform: [{ rotate: "180deg" }]
  },
  fullWidthFlexBasis: {
    flexBasis: '100%'
  },
  halfWidthFlexBasis: {
    flexBasis: '50%'
  },
});

export default FourPlayerCard;
