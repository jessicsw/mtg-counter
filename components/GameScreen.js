import React from "react";
import { View, StyleSheet } from "react-native";
import PlayerCard from "./PlayerCard";

const GameScreen = (props) => {
  const { players, layout } = props.navigation.state.params;
  let playerBackgroundColors = [
    "#FFC30B", //yellow
    "#86D086", //sea green
    "#792F79", //purple
    "#D08686", //mauve
    "#ADD8E6", //light blue
    "#DED978", //chickpea
  ];

  const addBackgroundColor = () => {
    let playerBackgroundColor =
      playerBackgroundColors[
        Math.floor(Math.random() * playerBackgroundColors.length)
      ];

    playerBackgroundColors = playerBackgroundColors.filter((color) => {
      return color !== playerBackgroundColor;
    });

    return {
      backgroundColor: playerBackgroundColor,
    };
  };

  const playerCard = Object.keys(players).map((playerNum) => (
    <PlayerCard
      key={playerNum}
      player={playerNum}
      lifePoints={players[playerNum]}
      layout={layout}
      playerBackgroundColor={addBackgroundColor()}
    />
  ));

  return <View style={styles.container}>{playerCard}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
