import React from "react";
import { View, StyleSheet } from "react-native";
import PlayerCard from "./PlayerCard";
import addBackgroundColor from "../helper/addBackgroundColor";

const GameScreen = (props) => {
  const { players, layout } = props.navigation.state.params;

  const playerCards = Object.keys(players).map((playerNum) => (
    <PlayerCard
      key={playerNum}
      player={playerNum}
      lifePoints={players[playerNum]}
      layout={layout}
      playerBackgroundColor={addBackgroundColor()}
    />
  ));

  return <View style={styles.container}>{playerCards}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
