import React from "react";
import { View, StyleSheet } from "react-native";
import PlayerCard from "./PlayerCard";
import addBackgroundColor from "../helper/addBackgroundColor";

const GameScreen = (props) => {
  const { numPlayers, lifePoints, layout } = props.navigation.state.params;

  switch (numPlayers) {
    default:

  }
  const playerCards = () => {
    let players = [];

    for (let i = 1; i <= numPlayers; i++) {
      players.push(i);
    };

    return players.map(player => (
      <PlayerCard
        key={player}
        player={player}
        lifePoints={lifePoints}
        layout={layout}
        playerBackgroundColor={addBackgroundColor()}
      />
    ));
  }

  return <View style={styles.container}>{playerCards()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
