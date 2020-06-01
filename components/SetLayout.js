import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { normalizedCenter } from "../helper/dimensions";
import Header from "./Header";
import TwoPlayers from './layouts/TwoPlayers';
import FourPlayers from './layouts/FourPlayers';
import FivePlayers from './layouts/FivePlayers';
import SixPlayers from './layouts/SixPlayers';

const SetLayout = props => {
  const { numPlayers, lifePoints } = props.navigation.state.params;

  const nextScreen = layout => {
    props.navigation.navigate("Game", {
      numPlayers: numPlayers,
      lifePoints: lifePoints,
      layout: layout
    });
  };

  const showLayoutOptions = (() => {
    if (numPlayers == 2) {
      return <TwoPlayers nextScreen={nextScreen} />;
    } else if (numPlayers == 4) {
      return <FourPlayers nextScreen={nextScreen} />;
    } else if (numPlayers == 5) {
      return <FivePlayers nextScreen={nextScreen} />;
    } else if (numPlayers == 6) {
      return <SixPlayers nextScreen={nextScreen} />;
    }
  })();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHOOSE LAYOUT</Text>
      {showLayoutOptions}
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    alignItems: 'center',
  },
  title: {
    marginTop: normalizedCenter,
    fontSize: 35,
    fontWeight: "200",
    marginBottom: 40
  },
});

export default SetLayout;
