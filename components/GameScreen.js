import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DefaultPlayerCard from "./playercards/DefaultPlayerCard";
import ThreePlayerCard from './playercards/ThreePlayerCard';
import FourPlayerCard from './playercards/FourPlayerCard';
import FivePlayerCard from './playercards/FivePlayerCard';
import SixPlayerCard from './playercards/SixPlayerCard';
import GameButton from './GameButton';

const GameScreen = ({ navigation }) => {
  const { numPlayers, lifePoints, layout, playerBackgroundColors } = navigation.state.params;
  const [resetLifePoints, setResetLifePoints] = useState(false);

  const handleResetLifePoints = bool => {
    setResetLifePoints(bool);
  }

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
          playerBackgroundColor={playerBackgroundColors[player - 1]}
          handleResetLifePoints={handleResetLifePoints}
          resetLifePoints={resetLifePoints}
        />
      ));
    } else if (numPlayers === 3) {
      return players.map(player => (
        <ThreePlayerCard
          key={player}
          player={player}
          lifePoints={lifePoints}
          playerBackgroundColor={playerBackgroundColors[player - 1]}
          handleResetLifePoints={handleResetLifePoints}
          resetLifePoints={resetLifePoints}
        />
      ));
    } else if (numPlayers === 4) {
      return players.map(player => (
        <FourPlayerCard
          key={player}
          player={player}
          lifePoints={lifePoints}
          layout={layout}
          playerBackgroundColor={playerBackgroundColors[player - 1]}
          handleResetLifePoints={handleResetLifePoints}
          resetLifePoints={resetLifePoints}
        />
      ));
    } else if (numPlayers === 5) {
      return players.map(player => (
        <FivePlayerCard
          key={player}
          player={player}
          lifePoints={lifePoints}
          layout={layout}
          playerBackgroundColor={playerBackgroundColors[player - 1]}
          handleResetLifePoints={handleResetLifePoints}
          resetLifePoints={resetLifePoints}
        />
      ));
    } else {
      return players.map(player => (
        <SixPlayerCard
          key={player}
          player={player}
          lifePoints={lifePoints}
          layout={layout}
          playerBackgroundColor={playerBackgroundColors[player - 1]}
          handleResetLifePoints={handleResetLifePoints}
          resetLifePoints={resetLifePoints}
        />
      ));
    };
  })();

  const handleStyles = (() => {
    if (numPlayers < 3) {
      return styles.container;
    } else if (numPlayers === 3) {
      return styles.flexRowWrap;
    } else if (numPlayers === 4) {
      return styles.flexRowWrap;
    } else if (numPlayers === 5) {
      return layout === 1
        ? styles.flexRowWrap
        : styles.flexColumnWrap;
    } else if (numPlayers === 6) {
      return styles.flexRowWrap;
    }
  })();

  return (
    <View style={handleStyles}>
      {playerCards}
      <GameButton
        numPlayers={numPlayers}
        navigation={navigation}
        layout={layout}
        handleResetLifePoints={handleResetLifePoints}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexColumnWrap: {
    flexDirection: 'column',
    flexWrap: 'wrap-reverse',
  },
});

export default GameScreen;
