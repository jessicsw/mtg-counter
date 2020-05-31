import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default Button = props => {
  const { onPress, text, buttonStyle, buttonTextStyle } = props;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
