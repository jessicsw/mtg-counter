import React from "react";
import { View, StyleSheet } from "react-native";
import DefaultPlayerCard from "./playercards/DefaultPlayerCard";
import addBackgroundColor from "../helper/addBackgroundColor";
import ThreePlayerCard from './playercards/ThreePlayerCard';
import FourPlayerCard from './playercards/FourPlayerCard';
import FivePlayerCard from './playercards/FivePlayerCard';
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
    } else if (numPlayers === 5) {
      return players.map(player => (
        <FivePlayerCard
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
    } else if (numPlayers === 5) {
      return styles.fivePlayer;
    } else if (numPlayers === 6) {
      return styles.sixPlayer;
    }
  })();

  return (
    <View style={handleStyles}>
      {playerCards}
      <GameButton
        numPlayers={numPlayers}
        navigation={navigation}
        layout={layout}
      />
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
    flexWrap: 'wrap',
  },
  fivePlayer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default GameScreen;
