import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// This is a class component because { withNavigation } doesn't work with stateless functional component
class Header extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        >
          <Ionicons name="ios-arrow-back" size={40} color="#9f82b2" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.popToTop()}
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        >
          <AntDesign name="home" size={35} color="#9f82b2" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F5FCFF",
    position: "absolute",
    top: 50,
    left: 25,
    right: 25,
    justifyContent: "space-between"
  }
});

export default withNavigation(Header);
