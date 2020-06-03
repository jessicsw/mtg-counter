import React from "react";
import { View, StyleSheet } from "react-native";
import DefaultPlayerCard from "./playercards/DefaultPlayerCard";
import addBackgroundColor from "../helper/addBackgroundColor";
import ThreePlayerCard from './playercards/ThreePlayerCard';
import FourPlayerCard from './playercards/FourPlayerCard';
import GameButton from './GameButton';

const GameScreen = ({ navigation }) => {
  const { numPlayers, lifePoints, layout } = navigation.state.params;

  const playerCards = (() => {
    let players = [];

    for (let i = 1; i <= numPlayers; i++) {
      players.push(i);
    }

    if (numPlayers <= 2) {
      return players.map(player => (
        <DefaultPlayerCard
          key={player}
          player={player}
          lifePoints={lifePoints}
          layout={layout}
          playerBackgroundColor={addBackgroundColor()}
        />
      ));
    } else if (numPlayers === 3) {
      return players.map(player => (
        <ThreePlayerCard
          key={player}
          player={player}
          lifePoints={lifePoints}
          playerBackgroundColor={addBackgroundColor()}
        />
      ));
    } else if (numPlayers === 4) {
      return players.map(player => (
        <FourPlayerCard
          key={player}
          player={player}
          lifePoints={lifePoints}
          layout={layout}
          playerBackgroundColor={addBackgroundColor()}
        />
      ));
    }
  })();

  const handleStyles = (() => {
    if (numPlayers < 3) {
      return styles.container;
    } else if (numPlayers === 3) {
      return styles.threePlayer;
    } else if (numPlayers === 4) {
      return styles.fourPlayer;
    }
  })();

  return (
    <View style={handleStyles}>
      {playerCards}
      <GameButton numPlayers={numPlayers} navigation={navigation} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  threePlayer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fourPlayer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});

export default GameScreen;
