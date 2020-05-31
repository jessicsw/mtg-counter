import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { View, StatusBar, Animated } from "react-native";
import StartScreen from "./components/StartScreen";
import SetLifePoints from "./components/SetLifePoints";
import SetPlayers from "./components/SetPlayers";
import GameScreen from "./components/GameScreen";
import SetLayout from './components/SetLayout';
import { FluidNavigator } from "react-native";

const RootStack = createStackNavigator(
  {
    Start: StartScreen,
    SetLife: SetLifePoints,
    SetPlayers: SetPlayers,
    Game: GameScreen,
    SetLayout: SetLayout
  },
  {
    initialRouteName: "Start",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <AppContainer />
    </View>
  );
};
